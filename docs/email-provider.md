# Email Provider Integration Guide

This document outlines options for reliable contact form delivery using professional email service providers as an alternative or complement to Formspree.

## Current Setup

The contact form currently uses **Formspree** (see `docs/formspree-setup.md`) for static-site compatible form submissions. This works well for MVP, but you may want additional control or higher volume limits.

---

## Provider Options

### Option 1: SendGrid (Recommended for Transactional Email)

**Best for:** High reliability, deliverability tracking, API-based integration

**Setup:**
1. Create a SendGrid account at [https://sendgrid.com/](https://sendgrid.com/)
   - Free tier: 100 emails/day
   - Paid plans start at ~$20/month for 40k emails

2. Generate an API key:
   - Settings → API Keys → Create API Key
   - Select "Restricted Access" and enable only "Mail Send"

3. Set environment variable:
   ```bash
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   **⚠️ NEVER commit this to Git**

4. Install SDK:
   ```bash
   npm install @sendgrid/mail
   ```

5. Example integration (API route):
   ```typescript
   // app/api/contact/route.ts
   import sgMail from '@sendgrid/mail';

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

   export async function POST(request: Request) {
     const { name, email, message } = await request.json();

     const msg = {
       to: 'info@pcquanti.co.za',
       from: 'noreply@pcquanti.co.za', // Must be verified domain
       replyTo: email,
       subject: `Contact Form: ${name}`,
       text: message,
       html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
     };

     try {
       await sgMail.send(msg);
       return Response.json({ success: true });
     } catch (error) {
       console.error('SendGrid error:', error);
       return Response.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

6. **Domain verification required:**
   - Settings → Sender Authentication → Verify Domain
   - Add DNS records (CNAME for domain verification)
   - This improves deliverability

**Pros:**
- Industry standard for transactional email
- Excellent deliverability and analytics
- Webhooks for tracking opens/clicks

**Cons:**
- Requires API route (not static-site compatible)
- Domain verification setup required

---

### Option 2: Mailgun

**Best for:** Developer-friendly API, competitive pricing

**Setup:**
1. Create Mailgun account at [https://www.mailgun.com/](https://www.mailgun.com/)
   - Free tier: 5,000 emails/month for first 3 months

2. Get API credentials:
   - Settings → API Keys → Copy "Private API key"
   - Note your domain (e.g., `mg.pcquanti.co.za` or sandbox domain)

3. Set environment variables:
   ```bash
   MAILGUN_API_KEY=key-xxxxxxxxxxxxxxxxxxxxxxxx
   MAILGUN_DOMAIN=mg.pcquanti.co.za
   ```

4. Install SDK:
   ```bash
   npm install mailgun.js form-data
   ```

5. Example integration:
   ```typescript
   // app/api/contact/route.ts
   import formData from 'form-data';
   import Mailgun from 'mailgun.js';

   const mailgun = new Mailgun(formData);
   const mg = mailgun.client({
     username: 'api',
     key: process.env.MAILGUN_API_KEY!,
   });

   export async function POST(request: Request) {
     const { name, email, message } = await request.json();

     try {
       await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
         from: `PC Quanti <noreply@${process.env.MAILGUN_DOMAIN}>`,
         to: ['info@pcquanti.co.za'],
         'h:Reply-To': email,
         subject: `Contact Form: ${name}`,
         text: message,
         html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
       });
       return Response.json({ success: true });
     } catch (error) {
       console.error('Mailgun error:', error);
       return Response.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

**Pros:**
- Simple API
- Good free tier
- Detailed logs and analytics

**Cons:**
- Requires API route
- Domain setup for production use

---

### Option 3: Resend (Modern Alternative)

**Best for:** Simple setup, developer experience, Next.js integration

**Setup:**
1. Create account at [https://resend.com/](https://resend.com/)
   - Free tier: 3,000 emails/month, 100/day

2. Get API key from dashboard

3. Set environment variable:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```

4. Install SDK:
   ```bash
   npm install resend
   ```

5. Example integration:
   ```typescript
   // app/api/contact/route.ts
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     const { name, email, message } = await request.json();

     try {
       await resend.emails.send({
         from: 'PC Quanti <noreply@pcquanti.co.za>',
         to: 'info@pcquanti.co.za',
         replyTo: email,
         subject: `Contact Form: ${name}`,
         html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
       });
       return Response.json({ success: true });
     } catch (error) {
       console.error('Resend error:', error);
       return Response.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

**Pros:**
- Modern, clean API
- Great documentation
- Fast setup

**Cons:**
- Newer service (less proven track record)
- Requires API route

---

### Option 4: Direct SMTP (e.g., via Nodemailer)

**Best for:** Using existing email hosting (Zoho Mail, Microsoft 365, Google Workspace)

**Setup:**
1. Get SMTP credentials from your email host (see `docs/email-forwarding.md`)

2. Set environment variables:
   ```bash
   SMTP_HOST=smtppro.zoho.com
   SMTP_PORT=465
   SMTP_USER=info@pcquanti.co.za
   SMTP_PASS=your_zoho_app_password_here
   ```
   **⚠️ NEVER commit credentials to Git**

3. Install Nodemailer:
   ```bash
   npm install nodemailer
   npm install -D @types/nodemailer
   ```

4. Example integration:
   ```typescript
   // app/api/contact/route.ts
   import nodemailer from 'nodemailer';

   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT || '587'),
     secure: process.env.SMTP_PORT === '465',
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });

   export async function POST(request: Request) {
     const { name, email, message } = await request.json();

     try {
       await transporter.sendMail({
         from: `"PC Quanti" <${process.env.SMTP_USER}>`,
         to: 'info@pcquanti.co.za',
         replyTo: email,
         subject: `Contact Form: ${name}`,
         text: message,
         html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
       });
       return Response.json({ success: true });
     } catch (error) {
       console.error('SMTP error:', error);
       return Response.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

**Pros:**
- Uses existing email infrastructure
- No additional service needed
- Full control

**Cons:**
- Less reliable than dedicated services
- SMTP credentials in environment (security concern)
- May have rate limits from hosting provider

---

## Comparison Table

| Provider | Free Tier | Best For | Static Compatible | Domain Verification |
|----------|-----------|----------|-------------------|---------------------|
| **Formspree** | 50/month | Static sites, MVP | ✅ Yes | ❌ No |
| **SendGrid** | 100/day | High volume, analytics | ❌ No (API route) | ✅ Recommended |
| **Mailgun** | 5,000/month* | Developer-friendly | ❌ No (API route) | ✅ Required |
| **Resend** | 3,000/month | Modern Next.js apps | ❌ No (API route) | ✅ Recommended |
| **SMTP/Nodemailer** | Depends on host | Existing infrastructure | ❌ No (API route) | N/A |

*First 3 months

---

## Recommended Approach

### For MVP (Current)
✅ **Keep Formspree** - Already configured, works for static deployment, sufficient for initial launch.

### For Production (Future)
Consider migrating to **SendGrid** or **Resend** when:
- You need >50 submissions/month
- You want delivery tracking and analytics
- You're ready to deploy with API routes (requires server/serverless environment)

### Hybrid Approach
You can keep Formspree as fallback and add an API route for direct email:

```typescript
// app/contact/page.tsx - modify handleSubmit
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Try API route first
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      return;
    }
  } catch (error) {
    console.warn('API route failed, falling back to Formspree');
  }

  // Fallback to Formspree
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  if (formspreeId) {
    // ... existing Formspree logic
  }
};
```

---

## Environment Variables Reference

Add these to `.env.local` (development) and your deployment platform (production):

```bash
# Option 1: SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxx

# Option 2: Mailgun
MAILGUN_API_KEY=key-xxxxxxxxxxxxxxxxxxxxxxxx
MAILGUN_DOMAIN=mg.pcquanti.co.za

# Option 3: Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Option 4: SMTP (via Zoho Mail Pro)
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=465
SMTP_USER=info@pcquanti.co.za
SMTP_PASS=your_zoho_app_password_here

# Current (Formspree)
NEXT_PUBLIC_FORMSPREE_FORM_ID=xxxxxxxxxx
```

**Security Notes:**
- Never commit `.env.local` to Git (already in `.gitignore`)
- Use different API keys for development and production
- Rotate keys if accidentally exposed
- Use environment variable management in your deployment platform (Vercel, Netlify, etc.)

---

## Testing

### Test SendGrid/Mailgun/Resend API Route

```bash
# Start dev server
npm run dev

# Send test request
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Verify Email Delivery
- Check recipient inbox (`info@pcquanti.co.za`)
- Check provider dashboard for delivery status
- Check spam folder if not received

---

## Next Steps

1. **For MVP:** Continue using Formspree (no changes needed)
2. **For production upgrade:**
   - Choose provider based on needs (SendGrid recommended)
   - Set up account and get API key
   - Create API route at `app/api/contact/route.ts`
   - Test thoroughly before switching
   - Update contact form to use new endpoint
3. **Optional:** Implement hybrid approach for redundancy

---

## Related Documentation

- `docs/formspree-setup.md` - Current Formspree configuration
- `docs/email-forwarding.md` - SMTP/email hosting setup
- `docs/deployment.md` - Deployment and environment variable configuration
