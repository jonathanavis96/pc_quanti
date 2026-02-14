# Email Setup & Forwarding Guide

## Current State

- **Primary Email:** `info@pcquanti.co.za`
- **Domain:** `pcquanti.co.za`
- **Current Host:** Afrihost
- **Client:** Microsoft Outlook (desktop/mobile)

## Overview

This document outlines two approaches for managing email for PC Quanti. Choose the option that best fits your needs and budget.

---

## Option A: Keep Afrihost Email + Configure Outlook

**Best for:** Cost-conscious setup, existing Afrihost hosting customer

### Prerequisites
- Active email account at Afrihost (`info@pcquanti.co.za`)
- Microsoft Outlook installed (desktop or mobile)
- Afrihost email credentials (username/password)

### Configuration Steps

#### 1. Get Afrihost Email Settings

Contact Afrihost support or check your hosting control panel for:

- **Incoming (IMAP) Server:** `mail.pcquanti.co.za` or `imap.afrihost.com`
- **Incoming Port:** 993 (SSL/TLS)
- **Outgoing (SMTP) Server:** `mail.pcquanti.co.za` or `smtp.afrihost.com`
- **Outgoing Port:** 465 (SSL) or 587 (TLS)
- **Username:** Usually `info@pcquanti.co.za` or full email address
- **Authentication:** Password (same as webmail login)

#### 2. Configure Outlook (Desktop)

1. Open Outlook → **File** → **Add Account**
2. Select **Manual setup or additional server types**
3. Choose **POP or IMAP**
4. Enter details:
   - Your Name: `PC Quanti`
   - Email Address: `info@pcquanti.co.za`
   - Account Type: `IMAP`
   - Incoming mail server: (from step 1)
   - Outgoing mail server: (from step 1)
   - Username: (from step 1)
   - Password: (your Afrihost email password)
5. Click **More Settings** → **Outgoing Server** tab
   - Check ✅ "My outgoing server (SMTP) requires authentication"
   - Select "Use same settings as my incoming mail server"
6. Click **Advanced** tab
   - Incoming server (IMAP): `993`, SSL
   - Outgoing server (SMTP): `465` or `587`, SSL/TLS
7. Click **OK** → **Next** → **Finish**

#### 3. Configure Outlook (Mobile)

1. Open Outlook app → **Add Account**
2. Enter `info@pcquanti.co.za`
3. Select **IMAP**
4. Enter server settings from step 1
5. Enter password and save

#### 4. Verification Checklist

- [ ] Send a test email from Outlook to your personal email
- [ ] Reply to that email and confirm it arrives in Outlook
- [ ] Check "Sent Items" folder syncs correctly
- [ ] Verify signature displays correctly (if configured)
- [ ] Test on both desktop and mobile (if using both)
- [ ] Ensure spam filtering is active (check Afrihost settings)

### Troubleshooting

**Can't connect:**
- Verify username/password are correct
- Check firewall isn't blocking ports 993/465/587
- Try alternate SMTP port (465 vs 587)
- Contact Afrihost support for server details

**Emails not sending:**
- Confirm SMTP authentication is enabled
- Check "Outgoing Server" settings in Outlook
- Verify your ISP doesn't block port 25/587

**Emails going to spam:**
- Ask Afrihost to configure SPF, DKIM, and DMARC records
- See "Email Authentication" section below

---

## Option B: Migrate to Microsoft 365 or Google Workspace

**Best for:** Professional setup, integration with cloud tools, better deliverability

### Why Migrate?

- **Better deliverability:** Built-in SPF/DKIM/DMARC
- **Native Outlook integration:** Seamless sync across devices
- **Additional tools:** Calendar, OneDrive/Drive, Teams/Meet
- **Reliability:** 99.9% uptime SLA
- **Security:** Advanced spam filtering, encryption

### Microsoft 365 Business Basic

**Cost:** ~R99-149/user/month (South Africa pricing)

**Includes:**
- 50GB mailbox
- Outlook web + desktop + mobile
- OneDrive (1TB)
- Teams, SharePoint

**Setup Steps:**

1. **Sign up:** https://www.microsoft.com/microsoft-365/business
2. **Verify domain:** Add TXT record to DNS
3. **Configure DNS:**
   - Add MX record pointing to Microsoft servers
   - Add SPF, DKIM, DMARC records (provided by Microsoft)
   - Keep existing A/CNAME records for website
4. **Create mailbox:** `info@pcquanti.co.za`
5. **Configure Outlook:** Sign in with Microsoft 365 account
6. **Migrate old emails** (optional): Use IMAP migration tool

### Google Workspace

**Cost:** ~R136/user/month (Business Starter)

**Includes:**
- 30GB mailbox
- Gmail web + mobile (custom domain)
- Google Drive (30GB)
- Meet, Calendar, Docs

**Setup Steps:**

1. **Sign up:** https://workspace.google.com
2. **Verify domain:** Add TXT record to DNS
3. **Configure DNS:**
   - Add MX records for Gmail
   - Add SPF, DKIM, DMARC records
4. **Create user:** `info@pcquanti.co.za`
5. **Configure Outlook** (if desired): Enable IMAP in Gmail settings, then add to Outlook
6. **Migrate old emails** (optional): Use Google Workspace migration tool

### DNS Migration Checklist

⚠️ **Important:** Changing MX records will redirect email. Plan downtime carefully.

- [ ] Backup existing emails from Afrihost (export to PST/archive)
- [ ] Document current DNS settings (screenshot or export)
- [ ] Sign up for new email provider
- [ ] Verify domain ownership (TXT record)
- [ ] Update MX records (point to new provider)
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test sending/receiving at new provider
- [ ] Keep Afrihost email active for 30 days (catch missed emails)
- [ ] Update email signature, business cards, website footer

---

## Email Authentication (SPF, DKIM, DMARC)

### Why It Matters

Without proper authentication, your emails may:
- Land in spam folders
- Be rejected by recipient servers
- Fail deliverability audits

### What to Configure

**SPF (Sender Policy Framework):**
- Tells receiving servers which IPs can send email from your domain
- Add TXT record to DNS: `v=spf1 include:_spf.afrihost.com ~all` (adjust for your provider)

**DKIM (DomainKeys Identified Mail):**
- Cryptographically signs emails to prove authenticity
- Provider generates keys, you add TXT record to DNS

**DMARC (Domain-based Message Authentication):**
- Tells servers what to do if SPF/DKIM fail
- Add TXT record: `v=DMARC1; p=quarantine; rua=mailto:postmaster@pcquanti.co.za`

### How to Set Up (Afrihost)

1. Log in to Afrihost control panel
2. Navigate to **Email** or **DNS Management**
3. Request SPF/DKIM setup (may require support ticket)
4. Add DMARC record manually if not provided

### How to Set Up (Microsoft 365 / Google Workspace)

1. During setup, provider will give you exact DNS records
2. Copy TXT records to your DNS provider (Afrihost, Cloudflare, etc.)
3. Wait for propagation (1-24 hours)
4. Test using tools like:
   - https://mxtoolbox.com/spf.aspx
   - https://dmarcian.com/dmarc-inspector/

---

## Contact Form Integration

The website contact form currently uses **Formspree** (see `docs/formspree-setup.md`).

### Ensure Form Emails Reach You

1. **Add `info@pcquanti.co.za` to Formspree:**
   - Log in to Formspree dashboard
   - Verify email address (check inbox for confirmation)
   - Update form endpoint if needed

2. **Whitelist Formspree in Outlook:**
   - Add `notifications@formspree.io` to safe senders
   - Check spam folder regularly during first week

3. **Test the flow:**
   - Submit test form on website
   - Confirm email arrives in Outlook inbox
   - Reply to sender and verify it sends from `info@pcquanti.co.za`

---

## Recommended Action Plan

### Immediate (MVP Launch)

✅ **Use existing Afrihost email + configure Outlook (Option A)**

This allows you to:
- Launch immediately without additional costs
- Receive contact form submissions
- Maintain current email address

### Within 3-6 Months (Post-Launch)

Consider migrating to **Microsoft 365 Business Basic** (Option B) if:
- Email volume increases significantly
- You need calendar/scheduling features (Teams meetings)
- Deliverability becomes an issue
- You want better mobile integration

---

## Support Resources

- **Afrihost Support:** https://www.afrihost.com/support
- **Microsoft 365 Setup:** https://docs.microsoft.com/microsoft-365/admin/setup/
- **Google Workspace Setup:** https://support.google.com/a/answer/6365252
- **DNS Propagation Check:** https://dnschecker.org

---

## Summary

- **Current setup works:** Keep Afrihost, configure Outlook using IMAP/SMTP
- **For better integration:** Migrate to Microsoft 365 or Google Workspace
- **Authentication is critical:** Ensure SPF/DKIM/DMARC are configured
- **Test thoroughly:** Verify sending, receiving, and form integration before launch

**Next Steps:** Choose Option A or B, follow the checklist, and verify the contact form delivers to your inbox.
