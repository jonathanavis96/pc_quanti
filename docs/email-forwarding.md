# Email Setup & Forwarding Guide

## Current State

- **Primary Email:** `info@pcquanti.co.za`
- **Domain:** `pcquanti.co.za`
- **Current Host:** Zoho Mail (Pro plan)
- **Client:** Microsoft Outlook (desktop/mobile)

## Overview

PC Quanti's email is hosted on **Zoho Mail Pro**. This document covers how
to configure Outlook against Zoho, how to manage authentication records,
and (optionally) how to migrate to another provider later if business needs
change.

---

## Option A: Zoho Mail + Configure Outlook (Current Setup)

**Best for:** The existing Zoho Mail Pro subscription we already pay for.

### Prerequisites

- Active mailbox on Zoho Mail Pro (e.g. `info@pcquanti.co.za`, `phil@pcquanti.co.za`, `tyrone@pcquanti.co.za`)
- Microsoft Outlook installed (desktop or mobile)
- Zoho password — or an **Application-Specific Password** if the account has 2FA enabled (recommended; most Zoho Workspace accounts do)

### Configuration Steps

#### 1. Zoho Mail IMAP/SMTP Settings

Zoho Mail Pro uses dedicated pro servers (not the free-tier hosts):

| Direction | Host | Port | Encryption |
|-----------|------|------|------------|
| **Incoming (IMAP)** | `imappro.zoho.com` | **993** | **SSL** |
| **Outgoing (SMTP)** | `smtppro.zoho.com` | **465** | **SSL** |

- **Username:** full email address (e.g. `tyrone@pcquanti.co.za`)
- **Authentication:** password (or app-specific password — see "Zoho 2FA note" below)

> **Zoho 2FA note**
>
> If the mailbox has Two-Factor Authentication enabled, Outlook's regular password will fail.
> Generate an **Application-Specific Password** at
> `mail.zoho.com` → avatar → **My Account → Security → Application-Specific Passwords**.
> Label it `Outlook Desktop` (or similar), copy the generated value, and use that in Outlook instead of the normal password.

#### 2. Configure Outlook (Desktop)

1. Open Outlook → **File** → **Add Account**
2. Select **Manual setup or additional server types**
3. Choose **POP or IMAP**
4. Enter details:
   - Your Name: (user's display name, e.g. `Tyrone Juul`)
   - Email Address: full Zoho address
   - Account Type: **IMAP**
   - Incoming mail server: `imappro.zoho.com`
   - Outgoing mail server: `smtppro.zoho.com`
   - Username: full email address
   - Password: Zoho password (or app-specific password if 2FA)
5. Click **More Settings** → **Outgoing Server** tab
   - Check "My outgoing server (SMTP) requires authentication"
   - Select "Use same settings as my incoming mail server"
6. Click **Advanced** tab
   - Incoming server (IMAP): `993`, SSL/TLS
   - Outgoing server (SMTP): `465`, SSL/TLS
7. Click **OK** → **Next** → **Finish**

#### 3. Configure Outlook (Mobile)

1. Open Outlook app → **Add Account**
2. Enter the Zoho address (e.g. `tyrone@pcquanti.co.za`)
3. Select **IMAP manually** (do NOT let it auto-discover as Microsoft 365 or Google — it may guess wrong)
4. Enter server settings from the table above
5. Enter password (or app-specific password) and save

#### 4. Verification Checklist

- [ ] Send a test email from Outlook to your personal email
- [ ] Reply to that email and confirm it arrives in Outlook
- [ ] Check "Sent Items" folder syncs correctly (may need IMAP folder mapping)
- [ ] Verify signature displays correctly (if configured)
- [ ] Test on both desktop and mobile (if using both)
- [ ] Confirm spam filtering is active in Zoho webmail

### Troubleshooting

**Can't connect / authentication error:**

- Verify username is the full email address
- If the account has 2FA, make sure you're using an app-specific password, not the normal password
- Check firewall isn't blocking 993 / 465
- Log in at `mail.zoho.com` and confirm the password works there first

**Emails not sending:**

- Confirm SMTP authentication is enabled in Outlook
- Try port **587** with **STARTTLS** as a fallback (Zoho supports both)
- Some ISPs block outbound 465/587 — test from a different network

**Emails going to spam:**

- Verify SPF, DKIM, and DMARC records for `pcquanti.co.za` are present (see "Email Authentication" section below)
- Zoho generates a DKIM TXT record specific to the domain — it must be added to DNS

---

## Option B: Migrate to Microsoft 365 or Google Workspace

**Best for:** A future decision if Zoho no longer meets business needs.

### Why Migrate?

- **Native Outlook/Office integration** (Microsoft 365)
- **Google-stack integration** (Google Workspace)
- **Higher mailbox quotas** (50GB+ vs Zoho tier-dependent limits)
- **Teams / Meet built-in** (vs Zoho's own equivalents)

### Microsoft 365 Business Basic

**Cost:** ~R99-149/user/month (South Africa pricing)

**Includes:**

- 50GB mailbox
- Outlook web + desktop + mobile
- OneDrive (1TB)
- Teams, SharePoint

**Setup Steps:**

1. **Sign up:** <https://www.microsoft.com/microsoft-365/business>
2. **Verify domain:** Add TXT record to DNS
3. **Configure DNS:**
   - Add MX record pointing to Microsoft servers
   - Add SPF, DKIM, DMARC records (provided by Microsoft)
   - Keep existing A/CNAME records for website
4. **Create mailboxes** for each user
5. **Configure Outlook:** Sign in with Microsoft 365 account
6. **Migrate old emails from Zoho** (optional): Use IMAP migration tool

### Google Workspace

**Cost:** ~R136/user/month (Business Starter)

**Includes:**

- 30GB mailbox
- Gmail web + mobile (custom domain)
- Google Drive (30GB)
- Meet, Calendar, Docs

**Setup Steps:**

1. **Sign up:** <https://workspace.google.com>
2. **Verify domain:** Add TXT record to DNS
3. **Configure DNS:**
   - Add MX records for Gmail
   - Add SPF, DKIM, DMARC records
4. **Create users** for each mailbox
5. **Configure Outlook** (if desired): Enable IMAP in Gmail settings, then add to Outlook
6. **Migrate old emails from Zoho** (optional): Use Google Workspace migration tool

### DNS Migration Checklist

> **Important:** Changing MX records redirects email. Plan downtime carefully.

- [ ] Backup existing emails from Zoho (export / IMAP pull to PST)
- [ ] Document current DNS settings (screenshot or export)
- [ ] Sign up for new email provider
- [ ] Verify domain ownership (TXT record)
- [ ] Update MX records (point to new provider)
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test sending/receiving at new provider
- [ ] Keep Zoho mailboxes active for 30 days (catch in-flight / misrouted mail)
- [ ] Update email signatures, business cards, website footer

---

## Email Authentication (SPF, DKIM, DMARC)

### Why It Matters

Without proper authentication, outbound emails may:

- Land in spam folders
- Be rejected by recipient servers
- Fail deliverability audits

### What to Configure (for Zoho Mail)

**SPF (Sender Policy Framework):**

- Tells receiving servers which hosts can send email for `pcquanti.co.za`
- TXT record at domain root: `v=spf1 include:zoho.com ~all`

**DKIM (DomainKeys Identified Mail):**

- Cryptographically signs outbound emails to prove authenticity
- Zoho generates a per-domain TXT record in the admin console → add to DNS exactly as shown

**DMARC (Domain-based Message Authentication):**

- Tells receiving servers what to do when SPF/DKIM fail
- TXT record at `_dmarc.pcquanti.co.za`: `v=DMARC1; p=quarantine; rua=mailto:postmaster@pcquanti.co.za`

### How to Set Up (Zoho)

1. Log in to Zoho Mail Admin Console (<https://mailadmin.zoho.com>)
2. Navigate to **Domains → pcquanti.co.za → Email Configuration**
3. Follow the on-screen DNS records checklist:
   - SPF: add the `v=spf1 include:zoho.com ~all` TXT record
   - DKIM: enable, copy the generated TXT record, add to DNS, verify
   - DMARC: add the DMARC TXT record
4. At your DNS provider, add each TXT record exactly as Zoho specifies
5. Return to Zoho admin and click **Verify** on each record
6. Wait for propagation (1-24 hours)
7. Test using:
   - <https://mxtoolbox.com/spf.aspx>
   - <https://dmarcian.com/dmarc-inspector/>

---

## Contact Form Integration

The website contact form currently uses **Formspree** (see `docs/formspree-setup.md`).

### Ensure Form Emails Reach You

1. **Add `info@pcquanti.co.za` to Formspree:**
   - Log in to Formspree dashboard
   - Verify email address (check inbox for confirmation)
   - Update form endpoint if needed

2. **Whitelist Formspree in Outlook / Zoho:**
   - Add `notifications@formspree.io` to safe senders
   - Check Zoho spam folder regularly during first week

3. **Test the flow:**
   - Submit a test form on the website
   - Confirm email arrives in Outlook inbox
   - Reply to sender and verify it sends from `info@pcquanti.co.za`

---

## Recommended Action Plan

### Current

**Stay on Zoho Mail Pro.** It's already paid for, provides SPF/DKIM/DMARC support, handles multi-user mailboxes, and integrates cleanly with Outlook over IMAP/SMTP.

### When to reconsider

Migrate to **Microsoft 365 Business Basic** or **Google Workspace** (see Option B) if:

- You need deep Teams/OneDrive or Meet/Drive integration beyond what Zoho offers
- Deliverability problems emerge that can't be solved with better SPF/DKIM/DMARC
- The business expands such that Zoho's per-mailbox pricing becomes less competitive at your scale

Otherwise, staying on Zoho is the right call.

---

## Support Resources

- **Zoho Mail Admin:** <https://mailadmin.zoho.com>
- **Zoho Mail Help:** <https://www.zoho.com/mail/help/>
- **Zoho IMAP/SMTP Reference:** <https://www.zoho.com/mail/help/imap-access.html>
- **Microsoft 365 Setup:** <https://docs.microsoft.com/microsoft-365/admin/setup/>
- **Google Workspace Setup:** <https://support.google.com/a/answer/6365252>
- **DNS Propagation Check:** <https://dnschecker.org>

---

## Summary

- **Current setup:** Zoho Mail Pro — configure Outlook using IMAP (`imappro.zoho.com:993 SSL`) and SMTP (`smtppro.zoho.com:465 SSL`)
- **For future growth:** Microsoft 365 or Google Workspace remain available migration paths
- **Authentication is critical:** SPF / DKIM / DMARC must be configured at DNS for good deliverability
- **2FA mailboxes need app-specific passwords** for Outlook login — not the regular Zoho password

**Next Steps:** When adding a new team member, create their Zoho mailbox in the admin console, then follow Option A to wire Outlook up. Signature templates live in `docs/signatures/`.
