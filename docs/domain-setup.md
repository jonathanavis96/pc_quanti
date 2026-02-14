# Custom Domain Setup

This document provides a checklist and guide for configuring a custom domain for PC Quanti's website.

## Current Status

- **Default Domain:** GitHub Pages default domain (username.github.io/repo-name)
- **Target Custom Domain:** TBD
- **Status:** Deferred until domain details are finalized

## Required Information

Before proceeding with custom domain setup, gather the following information:

### Domain Details
- [ ] **Domain Name:** ___________________ (e.g., `pcquanti.co.za` or `www.pcquanti.co.za`)
- [ ] **Domain Registrar:** ___________________ (e.g., Afrihost, GoDaddy, Namecheap, etc.)
- [ ] **DNS Provider:** ___________________ (often same as registrar, but can differ)
- [ ] **Access to DNS Management:** Confirm login credentials and access

### Technical Requirements
- [ ] Apex domain (e.g., `pcquanti.co.za`) or subdomain (e.g., `www.pcquanti.co.za`)?
- [ ] SSL/HTTPS enforcement required? (Recommended: Yes)
- [ ] Email already configured on this domain? (Check for existing MX records to avoid conflicts)

## Setup Steps

### 1. Configure DNS Records

Depending on whether you're using an apex domain or subdomain:

#### Option A: Apex Domain (e.g., `pcquanti.co.za`)

Add the following **A records** to your DNS provider:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: Subdomain (e.g., `www.pcquanti.co.za`)

Add a **CNAME record** pointing to:

```
<github-username>.github.io
```

Replace `<github-username>` with your actual GitHub username or organization name.

### 2. Configure GitHub Pages

1. Navigate to your repository on GitHub
2. Go to **Settings** → **Pages**
3. Under **Custom domain**, enter your domain name
4. Click **Save**
5. Wait for DNS check to complete (may take a few minutes to several hours)

### 3. Enable HTTPS

1. Once DNS check passes, the **Enforce HTTPS** checkbox will become available
2. Check the **Enforce HTTPS** box
3. GitHub will automatically provision a Let's Encrypt SSL certificate

### 4. Verification Checklist

After configuration:

- [ ] Domain resolves to the correct IP addresses (use `dig` or `nslookup`)
- [ ] Website loads at custom domain
- [ ] HTTPS is working (green padlock in browser)
- [ ] HTTP redirects to HTTPS automatically
- [ ] No mixed content warnings in browser console
- [ ] Contact form and all pages work correctly on custom domain

## Common Issues

### DNS Propagation Delays
- DNS changes can take 24-48 hours to propagate globally
- Use tools like `https://dnschecker.org` to monitor propagation

### Existing Email Configuration
- If you have email configured on this domain (e.g., `info@pcquanti.co.za`), ensure DNS changes don't overwrite MX records
- For apex domains, you'll need both A records (for website) and MX records (for email)

### HTTPS Not Available
- Ensure DNS is properly configured and propagated
- GitHub Pages may take several hours to provision SSL certificate
- Check GitHub Pages settings for error messages

## References

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## Next Steps

1. Fill in the placeholder information above
2. Follow the setup steps when domain details are confirmed
3. Complete the verification checklist
4. Update `docs/deployment.md` to reference custom domain if configured
