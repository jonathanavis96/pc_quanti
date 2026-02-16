# GitHub Pages Deployment Guide

**Last Updated:** 2026-02-14

---

## Overview

This document provides step-by-step instructions for deploying the PC Quanti website
to GitHub Pages. The site is built using Next.js with static export configured.

---

## Prerequisites

- Repository must be pushed to GitHub
- GitHub Actions workflow (`.github/workflows/deploy.yml`) must be present
- Next.js configured for static export (`output: 'export'` in `next.config.ts`)

---

## Enabling GitHub Pages

### Step 1: Navigate to Repository Settings

1. Go to your GitHub repository: `https://github.com/<username>/pc-quanti`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

### Step 2: Configure Pages Source

1. Under **Source**, select **GitHub Actions** from the dropdown
2. Save changes (if required)

**Note:** If you see "Deploy from a branch" option, select **GitHub Actions** instead.

### Step 3: Trigger Deployment

GitHub Pages will automatically deploy when:

- You push to the `main` branch
- The GitHub Actions workflow completes successfully

To manually trigger a deployment:

1. Go to **Actions** tab
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

---

## Validation Checklist

After deployment completes, verify the following:

- [ ] Workflow shows green checkmark in Actions tab
- [ ] GitHub Pages URL is active: `https://<username>.github.io/pc-quanti/`
- [ ] Homepage loads correctly
- [ ] Navigation works (About, Services, Contact)
- [ ] All service pages load (Quantity Surveying, Claims, etc.)
- [ ] Images and assets load correctly
- [ ] Contact form renders (check formspree.io integration)
- [ ] No console errors in browser DevTools

---

## GitHub Pages URL

Your site will be available at:

```text
https://<username>.github.io/pc-quanti/
```

Replace `<username>` with your GitHub username or organization name.

---

## Troubleshooting

### Deployment Fails

1. Check **Actions** tab for error messages
2. Verify `next.config.ts` has `output: 'export'`
3. Ensure no dynamic routes or server-side rendering features are used
4. Check build logs for missing dependencies or build errors

### Site Loads But Assets Are Missing

1. Verify `basePath` in `next.config.ts` matches repository name
2. Check image paths use Next.js `<Image>` component or relative paths
3. Inspect browser console for 404 errors

### Pages Return 404

1. Ensure all pages are in `app/` directory with `page.tsx` files
2. Verify static export generates all routes during build
3. Check GitHub Pages is serving from correct branch/folder

---

## Next Steps

Once GitHub Pages deployment is verified:

1. Review [domain-setup.md](./domain-setup.md) for custom domain configuration
2. Configure analytics per [analytics.md](./analytics.md) (when created)
3. Set up Google Search Console per [search-console.md](./search-console.md) (when created)

---

## References

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
