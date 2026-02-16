# Production Deployment Runbook

**Last Updated:** 2026-02-14

---

## Overview

This runbook covers deploying changes to the live production site at **pcquanti.com** using GitHub Pages with automated CI/CD via GitHub Actions.

---

## Branch Strategy

- **Main Branch (`main`)**: Production-ready code only
- **Feature Branches**: Create from `main`, merge via PR after review
- **Deployment Trigger**: Every push to `main` automatically deploys to production

**Rule:** Only merge tested, verified changes to `main`. The site deploys automatically on every push.

---

## Deployment Workflow

### Automated Deployment (Primary Method)

1. **Merge to Main**
   ```bash
   git checkout main
   git pull origin main
   git merge feature-branch
   git push origin main
   ```

2. **GitHub Actions Runs Automatically**
   - Workflow: `.github/workflows/deploy.yml`
   - Triggers on: push to `main` branch
   - Steps:
     - Checkout code
     - Install Node.js 20 + dependencies
     - Build Next.js static export (`npm run build`)
     - Upload build artifact (`./out` directory)
     - Deploy to GitHub Pages

3. **Monitor Deployment**
   - Go to: `https://github.com/<username>/pc-quanti/actions`
   - Check latest "Deploy to GitHub Pages" workflow run
   - Should complete in ~2-3 minutes
   - Green checkmark = successful deployment

### Manual Deployment (Backup Method)

If you need to redeploy without pushing code:

1. Go to **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** dropdown
4. Select `main` branch
5. Click **Run workflow** button

---

## Environment Configuration

### GitHub Secrets Required

Configure these in **Settings → Secrets and variables → Actions**:

| Secret Name | Value | Purpose |
|-------------|-------|---------|
| `FORMSPREE_FORM_ID` | Your Formspree form ID | Contact form submissions |

**Note:** `NEXT_PUBLIC_SITE_URL` is hardcoded to `https://pcquanti.com` in the workflow.

### GitHub Pages Settings

Verify in **Settings → Pages**:

- **Source**: GitHub Actions (not "Deploy from a branch")
- **Custom domain**: `pcquanti.com` (if configured)
- **Enforce HTTPS**: Enabled

---

## Post-Deployment Validation

### Automated Checks

After deployment completes, verify:

1. **Workflow Status**
   - [ ] Green checkmark in Actions tab
   - [ ] No error messages in build/deploy logs

2. **Site Accessibility**
   - [ ] Navigate to https://pcquanti.com
   - [ ] Homepage loads within 3 seconds
   - [ ] No browser console errors (F12 → Console)

3. **Core Functionality**
   - [ ] All navigation links work (About, Services, Contact)
   - [ ] All service pages render:
     - Quantity Surveying
     - Claims Management
     - Project Management
     - Project Controls
     - Contract Administration
   - [ ] Contact form displays correctly
   - [ ] Images load (logo, hero images if present)

4. **SEO & Performance**
   - [ ] View page source → verify meta tags present
   - [ ] Check `/sitemap.xml` exists and lists all pages
   - [ ] Check `/robots.txt` exists

### Manual Testing (Critical Changes)

For major updates, test on multiple devices:

- Desktop (Chrome, Safari/Edge)
- Mobile (Chrome iOS/Android, Safari iOS)
- Tablet if available

---

## Rollback Procedure

If deployment introduces critical bugs:

### Option 1: Quick Revert (Recommended)

```bash
# Revert the bad commit
git revert <commit-sha>
git push origin main
```

GitHub Actions will automatically redeploy the reverted code.

### Option 2: Force Redeploy Previous Version

```bash
# Reset to last known-good commit
git reset --hard <good-commit-sha>
git push --force origin main
```

**Warning:** Force push rewrites history. Only use if revert isn't suitable.

### Option 3: Manual Workflow Rerun

1. Go to **Actions** tab
2. Find the last successful deployment workflow run
3. Click **Re-run all jobs**

---

## Troubleshooting

### Build Fails in GitHub Actions

**Symptoms:** Red X in Actions tab, build step fails

**Solutions:**
1. Check error logs in failed workflow run
2. Verify `npm run build` succeeds locally:
   ```bash
   npm ci
   npm run build
   ```
3. Common issues:
   - TypeScript errors → fix type issues
   - Missing dependencies → run `npm install <package>`
   - ESLint failures → fix linting errors or update rules

### Deployment Succeeds But Site Shows Old Content

**Symptoms:** Workflow passes, but changes not visible on site

**Solutions:**
1. **Hard refresh browser:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. **Check deployment URL:** Workflow output shows `page_url` - verify it matches your domain
3. **Clear CDN cache:** GitHub Pages may cache for 10 minutes
4. **Verify build output:** Check `out/` directory was generated correctly in workflow logs

### 404 Errors on Page Routes

**Symptoms:** Homepage works, but `/about` or `/services/*` returns 404

**Solutions:**
1. Verify all pages have `page.tsx` files in correct `app/` subdirectories
2. Check `next.config.ts` has `output: 'export'` configured
3. Ensure no dynamic routes (e.g., `[id]`) are used (not supported in static export)

### Contact Form Not Working

**Symptoms:** Form submits but doesn't send email

**Solutions:**
1. Verify `FORMSPREE_FORM_ID` secret is set in GitHub repo
2. Check Formspree dashboard for submissions
3. See [docs/contact-form-testing.md](./contact-form-testing.md) for testing procedure

---

## Performance Monitoring

### First 24 Hours Post-Deploy

- **Sentry:** Check `sentry.io` dashboard for runtime errors (if configured)
- **Analytics:** Monitor Google Analytics for traffic anomalies (if configured)
- **Build Times:** Typical build should complete in ~90 seconds

### Ongoing Monitoring

- Set up GitHub Actions email notifications for failed builds
- Review Sentry weekly for new error patterns
- Check GitHub Pages uptime (typically 99.9%+)

---

## Custom Domain Configuration

If deploying to custom domain (e.g., `pcquanti.com`):

1. **DNS Setup:** See [domain-setup.md](./domain-setup.md)
2. **GitHub Pages Custom Domain:**
   - Settings → Pages → Custom domain
   - Enter `pcquanti.com`
   - Wait for DNS check to pass (~10 minutes)
   - Enable "Enforce HTTPS"

3. **Verify Redirects:**
   - `www.pcquanti.com` → `pcquanti.com` (if configured)
   - HTTP → HTTPS redirect active

---

## Emergency Contacts

- **GitHub Issues:** Create issue in repo for non-urgent bugs
- **Phil (Client):** For business-critical outages
- **Jono (Developer):** For technical emergencies during support window

---

## Deployment Checklist Template

Use this for major releases:

```markdown
## Pre-Deployment
- [ ] All tests pass locally (`npm test`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Changes reviewed and approved
- [ ] Staging tested (if applicable)

## Deployment
- [ ] Merged to `main` branch
- [ ] GitHub Actions workflow started
- [ ] Workflow completed successfully

## Post-Deployment
- [ ] Production site loads (https://pcquanti.com)
- [ ] Core functionality verified
- [ ] No console errors
- [ ] Performance acceptable (<3s load time)
- [ ] Mobile rendering verified

## Rollback Plan
- [ ] Last known-good commit identified: <commit-sha>
- [ ] Rollback tested in local environment (if needed)
```

---

## Related Documentation

- [deployment.md](./deployment.md) - Initial GitHub Pages setup
- [domain-setup.md](./domain-setup.md) - Custom domain configuration
- [contact-form-testing.md](./contact-form-testing.md) - Formspree testing
- [search-console.md](./search-console.md) - Google Search Console setup
- [sentry-setup.md](./sentry-setup.md) - Error monitoring configuration

---

## Notes

- **Build Time:** ~90 seconds typical
- **Propagation Time:** Changes live within 2-3 minutes of workflow completion
- **Cache TTL:** GitHub Pages CDN may cache for up to 10 minutes
- **Concurrent Deploys:** Only one deployment runs at a time (configured in workflow)
