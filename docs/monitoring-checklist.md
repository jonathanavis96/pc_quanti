# Production Monitoring Checklist (First 24 Hours)

## Overview

This checklist covers the critical monitoring tasks to perform in the first 24 hours after deploying the PC Quanti website to production. Use this to catch any issues early and ensure a smooth launch.

---

## Deployment Verification

**Timeline:** Immediate (within 1 hour of push to main)

- [ ] **GitHub Actions Build Status**
  - Check: [Actions tab](https://github.com/[OWNER]/pc-quanti/actions)
  - Expected: Green checkmark on latest workflow run
  - Troubleshooting: See `docs/production-deploy.md` § Troubleshooting

- [ ] **Site Accessibility**
  - Check: Visit https://pcquanti.com (or GitHub Pages URL)
  - Expected: Site loads, no 404s, all pages accessible
  - Pages to verify:
    - `/` (home)
    - `/about`
    - `/contact`
    - `/services`
    - `/services/project-management`
    - `/services/project-controls`
    - `/services/contract-administration`
    - `/services/claims-management`
    - `/services/quantity-surveying`

- [ ] **Assets & Resources**
  - Check: Inspect page source, check Network tab
  - Expected: All images load, CSS applies, no 404s in console
  - Common issues: Missing logo, broken favicon, 404 for `_next/static/`

- [ ] **SEO Files**
  - Check: Visit `/sitemap.xml` and `/robots.txt`
  - Expected: XML sitemap renders, robots.txt contains correct directives
  - Verify: All 9 pages listed in sitemap

---

## Error Monitoring (Sentry)

**Timeline:** Continuous for 24 hours

### If Sentry is Configured (DSN set)

- [ ] **Sentry Dashboard Access**
  - Check: Log into [sentry.io](https://sentry.io)
  - Expected: Project exists, dashboard loads
  - Note: Free tier has 5k events/month limit

- [ ] **No Critical Errors**
  - Check: Sentry Issues tab
  - Expected: No unhandled exceptions, no 500 errors
  - Acceptable: Minor CSP warnings, analytics blocked by ad blockers
  - **Action if errors found:**
    - Triage: Is it a real bug or user environment issue?
    - Fix urgently: Payment failures, form submission errors, site crashes
    - Defer: Minor styling glitches, third-party script issues

- [ ] **Performance Monitoring**
  - Check: Sentry Performance tab (if enabled)
  - Expected: Page load times < 3s, no slow DB queries (N/A for static site)
  - Note: Static sites should have excellent performance by default

- [ ] **Test Error Tracking**
  - Check: Visit `/test-error` and trigger a test error
  - Expected: Error appears in Sentry dashboard within 1 minute
  - If not working: Check `NEXT_PUBLIC_SENTRY_DSN` in deployment environment

### If Sentry is NOT Configured

- [ ] **Manual Error Monitoring**
  - Check: Browser DevTools Console on multiple pages
  - Expected: No red errors, only warnings (if any)
  - Test: Try submitting contact form, navigating all pages

- [ ] **Server Logs** (GitHub Pages)
  - Note: GitHub Pages has limited server-side logging
  - Check: GitHub Actions workflow logs for build errors
  - Expected: No failed builds, no timeout errors

---

## Functional Testing

**Timeline:** Within 4 hours of deployment

- [ ] **Contact Form Submission**
  - Check: Fill out `/contact` form with test data
  - Expected: 
    - Form validation works (required fields)
    - Submission succeeds (Formspree or mailto fallback)
    - Email received at Phil's configured email
  - **If fails:** See `docs/contact-form-testing.md` for troubleshooting

- [ ] **Mobile Responsiveness**
  - Check: Test on real device or Chrome DevTools mobile view
  - Expected: 
    - Mobile menu toggles correctly
    - Text readable without zooming
    - Buttons/links easily tappable (44x44px minimum)
  - Devices to test: iPhone (Safari), Android (Chrome)

- [ ] **Cross-Browser Testing**
  - Check: Open site in Chrome, Firefox, Safari, Edge
  - Expected: Visual consistency, no layout breaks
  - Known issues: IE11 not supported (Next.js requirement)

- [ ] **External Links**
  - Check: Click all footer/header external links
  - Expected: LinkedIn, email links work correctly
  - Note: Social links may be placeholders if not configured

---

## Analytics & Traffic

**Timeline:** 6-24 hours after deployment

- [ ] **Google Analytics Tracking** (if configured)
  - Check: GA4 dashboard Real-Time view
  - Expected: Your test visits show up within 5 minutes
  - Verify: Page views tracked, events firing (form submits, link clicks)
  - **If not working:** Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` in environment

- [ ] **Search Console Indexing**
  - Check: Google Search Console Coverage report
  - Expected: Sitemap submitted (see task 6.2.2), pages crawling
  - Note: Indexing can take 24-48 hours; don't expect immediate results
  - **Action:** Monitor for crawl errors, fix any 404s or server errors

- [ ] **Initial Traffic Patterns**
  - Check: GA4 or server logs
  - Expected: Organic traffic low initially, direct visits from team
  - Red flags: Sudden spike (check for bots), zero traffic (tracking broken)

---

## Performance Validation

**Timeline:** 12-24 hours after deployment

- [ ] **Lighthouse Audit (Production URL)**
  - Check: Run Lighthouse in Chrome DevTools on live site
  - Expected: 
    - Performance: 90+ desktop, 80+ mobile
    - Accessibility: 90+
    - Best Practices: 90+
    - SEO: 90+
  - Compare to baseline: See `.lighthouse/performance-summary.md`

- [ ] **Core Web Vitals**
  - Check: PageSpeed Insights or Search Console CWV report
  - Expected:
    - LCP (Largest Contentful Paint): < 2.5s
    - FID (First Input Delay): < 100ms
    - CLS (Cumulative Layout Shift): < 0.1
  - Note: CWV data in Search Console requires 28 days of traffic

- [ ] **Image Optimization**
  - Check: Network tab, verify WebP images load
  - Expected: Logo served as .webp, lazy loading on footer images
  - File size: logo.webp should be ~10KB (vs 56KB PNG)

---

## Security Checks

**Timeline:** Within 24 hours

- [ ] **HTTPS Enabled**
  - Check: URL bar shows padlock icon
  - Expected: Site served over HTTPS, no mixed content warnings
  - GitHub Pages: HTTPS enforced by default

- [ ] **No Exposed Secrets**
  - Check: View page source, inspect JS bundles
  - Expected: No API keys, no hardcoded credentials
  - Verify: `NEXT_PUBLIC_FORMSPREE_FORM_ID` is safe to expose (it's public)

- [ ] **Security Headers** (Optional)
  - Check: Use [securityheaders.com](https://securityheaders.com)
  - Expected: GitHub Pages sets basic headers (X-Frame-Options, etc.)
  - Note: Advanced headers (CSP, HSTS) require custom server

---

## Immediate Actions (If Issues Found)

### Critical Issues (Fix within 1 hour)
- Site completely down (404 or 500)
- Contact form broken (submissions fail)
- Major visual bugs (layout collapsed, images missing)
- Security vulnerability (exposed secrets, XSS)

**Action:** Rollback deployment (see `docs/production-deploy.md` § Rollback)

### High Priority (Fix within 24 hours)
- Sentry reporting errors on key pages
- Analytics not tracking
- Mobile menu broken
- SEO files (sitemap, robots.txt) missing

**Action:** Push hotfix to main branch

### Low Priority (Fix in next iteration)
- Minor styling inconsistencies
- Non-critical warnings in console
- Accessibility improvements
- Performance optimizations (if already meeting targets)

**Action:** Log in issue tracker, schedule for future sprint

---

## Sign-Off

Once all checks pass, consider the monitoring period complete.

**Checklist Completed By:** _______________  
**Date:** _______________  
**Critical Issues Found:** Yes / No  
**All Issues Resolved:** Yes / No  

**Notes:**

---

## References

- Deployment: `docs/production-deploy.md`
- Contact Form Testing: `docs/contact-form-testing.md`
- Sentry Setup: `docs/sentry-setup.md`
- Analytics: `docs/analytics.md`
- Performance Baseline: `.lighthouse/performance-summary.md`
