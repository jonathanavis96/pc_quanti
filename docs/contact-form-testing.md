# Contact Form End-to-End Testing Guide

## Current Status

The contact form is implemented with **Formspree fallback to mailto**.

- **With Formspree configured**: Form submits to Formspree API, emails forwarded to configured address
- **Without Formspree configured**: Form falls back to `mailto:` link opening email client

## Prerequisites

### Option A: Formspree Setup (Recommended for Production)

1. **Create Formspree account** at https://formspree.io/
2. **Create a new form** in the Formspree dashboard
3. **Note the Form ID** (format: `xxxxxxxxxx`)
4. **Configure environment variable**:
   - For local testing: Create `.env.local` with:
     ```
     NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
     ```
   - For GitHub Pages deployment: Add repository secret:
     - Go to Repository Settings → Secrets and variables → Actions
     - Add new secret: `FORMSPREE_FORM_ID` with your form ID value
     - Update `.github/workflows/deploy.yml` to include:
       ```yaml
       - name: Build with Next.js
         run: npm run build
         env:
           NEXT_PUBLIC_FORMSPREE_FORM_ID: ${{ secrets.FORMSPREE_FORM_ID }}
       ```

5. **Configure email notifications** in Formspree dashboard:
   - Settings → Email Notifications
   - Add recipient: Phil's email address

### Option B: Mailto Fallback (Current Default)

No configuration needed. Form will open default email client with pre-filled content.

## Test Procedure

### Test 1: Local Development (Formspree)

1. **Start dev server**: `npm run dev`
2. **Navigate to**: http://localhost:3000/contact
3. **Fill out the form**:
   - Name: Test User
   - Email: test@example.com
   - Phone: +44 123 456 7890
   - Enquiry Type: General Enquiry
   - Message: This is a test submission from local dev
4. **Submit the form**
5. **Verify success message** appears on page
6. **Check Formspree dashboard** for submission
7. **Check Phil's email** for notification

**Expected Result**: Form submits successfully, appears in Formspree dashboard, email notification received.

### Test 2: Production Deployment (Formspree)

1. **Navigate to**: https://pcquanti.com/contact (or deployed URL)
2. **Fill out the form** with real test data
3. **Submit the form**
4. **Verify success message**
5. **Check Formspree dashboard**
6. **Check Phil's email inbox**

**Expected Result**: Same as Test 1, but on production URL.

### Test 3: Mailto Fallback (No Formspree)

1. **Ensure** `NEXT_PUBLIC_FORMSPREE_FORM_ID` is **not set** (or empty)
2. **Rebuild**: `npm run build && npm start`
3. **Navigate to**: http://localhost:3000/contact
4. **Fill out the form** with test data
5. **Submit the form**
6. **Verify** default email client opens with:
   - To: contact@pcquanti.com (or configured email)
   - Subject: Contact Form Enquiry
   - Body: Pre-filled with form data

**Expected Result**: Email client opens with pre-populated message.

## Acceptance Criteria Checklist

- [ ] Formspree form ID configured (production)
- [ ] Form submits successfully without errors
- [ ] Success message displays after submission
- [ ] Submission appears in Formspree dashboard
- [ ] **Email notification received at Phil's address** ✅ CRITICAL
- [ ] Form validation works (required fields, email format)
- [ ] Mobile responsive design works
- [ ] Mailto fallback works if Formspree fails

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify `NEXT_PUBLIC_FORMSPREE_FORM_ID` is set correctly
- Check Formspree dashboard for rate limits (50/month on free tier)

### Email not received
- Check Formspree dashboard → Settings → Email Notifications
- Verify correct email address configured
- Check spam/junk folder
- Verify Formspree account is active

### Mailto fallback not working
- Check browser settings for default email client
- Verify email address in contact form component

## Next Steps for Production

1. **Phil to create Formspree account** (or provide existing form ID)
2. **Add form ID as GitHub repository secret**
3. **Update GitHub Actions workflow** to pass secret as env var
4. **Redeploy site** to apply changes
5. **Execute this test procedure** with real email address
6. **Document test results** below

---

## Test Results Log

### Test Date: [To be completed]
- **Tester**: 
- **Environment**: Production / Local
- **Formspree Configured**: Yes / No
- **Form Submission**: ✅ / ❌
- **Email Received**: ✅ / ❌
- **Time to receive email**: 
- **Issues found**: 
- **Status**: PASS / FAIL

---

## Human Action Required

**This task requires human testing** because:
1. Formspree account setup requires Phil's email/account
2. Email delivery verification requires checking actual inbox
3. Cannot be fully automated without real email credentials

**Recommended flow**:
1. Phil creates Formspree account
2. Phil provides form ID to developer
3. Developer adds to GitHub secrets and redeploys
4. Phil tests form submission from production site
5. Phil confirms email received
6. Phil updates "Test Results Log" above with outcome
