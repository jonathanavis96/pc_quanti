# Google Search Console Setup

This document provides step-by-step instructions for verifying your PC Quanti website with Google Search Console and submitting your sitemap.

## Prerequisites

- [ ] Custom domain configured (see `docs/domain-setup.md`)
- [ ] Website deployed and accessible via HTTPS
- [ ] Google account (Gmail) for Search Console access

## What is Google Search Console?

Google Search Console (GSC) is a free tool that helps you:
- Monitor your site's presence in Google Search results
- Submit sitemaps for crawling
- Identify and fix indexing issues
- View search performance data (impressions, clicks, CTR, position)
- Receive alerts for site issues (security, mobile usability, etc.)

## Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account
3. Click **Add Property** or **Start Now**

## Step 2: Choose Property Type

You'll be presented with two options:

### Option A: Domain Property (Recommended)
- Covers all subdomains and protocols (http/https, www/non-www)
- **Requires DNS verification** (see below)
- Example: `pcquanti.co.za`

### Option B: URL Prefix Property
- Covers only the exact URL you specify
- Multiple verification methods available
- Example: `https://www.pcquanti.co.za`

**Recommendation:** Use **Domain Property** if you have access to DNS settings. It provides comprehensive coverage and future-proofs your setup.

## Step 3: Verify Ownership

Google needs to verify that you own the website. Choose one of the following methods:

### Method 1: DNS Verification (Recommended for Domain Property)

**Best for:** Users with DNS management access

1. Google will provide a **TXT record** (e.g., `google-site-verification=abc123xyz...`)
2. Log in to your DNS provider (e.g., Afrihost, GoDaddy, Namecheap, Cloudflare)
3. Add a new **TXT record** with the following settings:
   - **Type:** TXT
   - **Name/Host:** `@` (or leave blank for root domain)
   - **Value:** The verification string provided by Google
   - **TTL:** 3600 (or default)
4. Save the DNS record
5. Return to Google Search Console and click **Verify**

**Note:** DNS propagation may take a few minutes to 48 hours. You can check propagation status using:
```bash
dig TXT pcquanti.co.za
# or
nslookup -type=TXT pcquanti.co.za
```

### Method 2: HTML Tag Verification (URL Prefix Property)

**Best for:** Users without DNS access but with website code access

1. Google will provide an HTML meta tag (e.g., `<meta name="google-site-verification" content="abc123..." />`)
2. Add this tag to the `<head>` section of your home page
3. For Next.js App Router, add it to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: 'abc123xyz...', // Replace with your verification code
  },
}
```

4. Deploy the changes to production
5. Return to Google Search Console and click **Verify**

### Method 3: HTML File Upload (URL Prefix Property)

**Best for:** Static site hosting with file upload access

1. Download the verification HTML file provided by Google (e.g., `google1234567890abcdef.html`)
2. Upload it to the `public/` folder in your Next.js project
3. Commit and deploy the changes
4. Verify the file is accessible at: `https://yourdomain.com/google1234567890abcdef.html`
5. Return to Google Search Console and click **Verify**

### Method 4: Google Analytics (URL Prefix Property)

**Best for:** Sites already using Google Analytics

1. Ensure you have Google Analytics tracking code installed (see `docs/analytics.md`)
2. Use the same Google account for Search Console that has Admin access in Google Analytics
3. Google will automatically verify if it detects the Analytics tracking code
4. Click **Verify**

### Method 5: Google Tag Manager (URL Prefix Property)

**Best for:** Sites using Google Tag Manager

1. Ensure Google Tag Manager container snippet is installed
2. Use the same Google account that has Publish permissions in Tag Manager
3. Click **Verify**

## Step 4: Sitemap Submission

Once your property is verified, submit your sitemap to help Google discover and index your pages.

### 4.1 Confirm Sitemap URL

Your sitemap should be accessible at one of:
- `https://yourdomain.com/sitemap.xml` (App Router default)
- `https://yourdomain.com/sitemap-0.xml` (if using dynamic sitemap)

Test accessibility:
```bash
curl -I https://yourdomain.com/sitemap.xml
# Should return: HTTP/2 200
```

### 4.2 Submit Sitemap to Google Search Console

1. In Google Search Console, select your verified property
2. Navigate to **Sitemaps** (in left sidebar under "Indexing")
3. Enter your sitemap URL: `sitemap.xml` (or full URL)
4. Click **Submit**

### 4.3 Monitor Sitemap Status

- **Status:** Should show "Success" after processing (may take a few hours)
- **Discovered URLs:** Shows how many pages Google found in the sitemap
- **Coverage:** Shows indexing status (indexed, excluded, errors)

If you see errors:
- Check that sitemap is accessible and valid XML
- Verify URLs in sitemap are accessible (200 status)
- Ensure robots.txt doesn't block crawling

## Step 5: Post-Verification Checklist

After verification and sitemap submission:

- [ ] Property shows "Verified" status in Search Console
- [ ] Sitemap submitted and shows "Success" status
- [ ] Check **URL Inspection** tool to verify key pages (Home, About, Services, Contact)
- [ ] Review **Coverage** report for any indexing issues
- [ ] Set up **Email notifications** for critical issues (Settings → Users and permissions → Add user)
- [ ] Bookmark Search Console for regular monitoring

## Verification Testing

### Test DNS Verification
```bash
# Check TXT record
dig TXT yourdomain.com

# Expected output should include:
# yourdomain.com. 3600 IN TXT "google-site-verification=abc123..."
```

### Test HTML Tag Verification
```bash
# Check meta tag in HTML
curl -s https://yourdomain.com | grep google-site-verification

# Expected output:
# <meta name="google-site-verification" content="abc123..." />
```

### Test Sitemap Accessibility
```bash
# Check sitemap returns 200 OK
curl -I https://yourdomain.com/sitemap.xml

# View sitemap content
curl -s https://yourdomain.com/sitemap.xml | head -20
```

## Common Issues

### Verification Failed
- **DNS:** Wait for propagation (up to 48 hours), verify TXT record is correct
- **HTML Tag:** Ensure tag is in `<head>`, deployed to production, accessible at root URL
- **File Upload:** Confirm file is in `public/` folder and accessible via browser

### Sitemap Not Found (404)
- Verify sitemap is generated (check `app/sitemap.ts` or `sitemap.xml` in `public/`)
- Ensure Next.js build includes sitemap generation
- Check deployment logs for errors

### Sitemap Has Errors
- Validate XML syntax using [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Ensure all URLs return 200 status (not 404 or 500)
- Check for proper XML escaping of special characters

### No Pages Indexed
- Check **Coverage** report for errors or exclusions
- Use **URL Inspection** tool to request indexing for key pages
- Verify `robots.txt` allows crawling (`User-agent: * / Allow: /`)
- Ensure pages have proper metadata (title, description)

## Ongoing Maintenance

### Weekly Tasks
- [ ] Check **Performance** report for search traffic trends
- [ ] Review **Coverage** report for new errors

### Monthly Tasks
- [ ] Analyze top-performing pages and queries
- [ ] Identify opportunities for content optimization
- [ ] Check for mobile usability issues

### As Needed
- [ ] Submit new pages for indexing using URL Inspection tool
- [ ] Update sitemap if site structure changes significantly
- [ ] Monitor for security issues or manual actions

## Security & Access Management

### Best Practices
- Use a dedicated business Google account (not personal)
- Add multiple users with appropriate permission levels
- Set up email notifications for critical alerts
- Regularly review and remove inactive users

### Permission Levels
- **Owner:** Full control (add/remove users, verification, settings)
- **Full User:** View all data, take most actions, cannot manage users
- **Restricted User:** View most data, limited actions

## Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters/)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Submit a sitemap](https://support.google.com/webmasters/answer/183668)
- [Search Console API](https://developers.google.com/webmasters/search-console-api-original) (for automation)
- [Understanding Search Console reports](https://support.google.com/webmasters/answer/9133276)

## Next Steps

1. Complete verification using your preferred method
2. Submit sitemap.xml
3. Monitor indexing status over the next 1-2 weeks
4. Use performance data to inform SEO improvements (see `brain/docs/design-packs/pc-quanti-mvp/PRD.md` for SEO goals)
5. Consider setting up Google Analytics integration (see `docs/analytics.md`)

## Notes

- Verification is permanent once completed (unless verification method is removed)
- You can use multiple verification methods for redundancy
- Domain property verification requires DNS access and may take longer
- URL prefix property can be verified faster using HTML methods
- Keep verification tokens/files in place to maintain verified status
