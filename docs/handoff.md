# PC Quanti Website - Handoff Documentation

**Last Updated:** 2026-02-14  
**Site URL:** <https://pcquanti.com>  
**Repository:** <https://github.com/[username]/pc-quanti>

This document explains how to manage, update, and maintain the PC Quanti website
after launch.

---

## Quick Reference

**Need to update content?** → [Content Updates](#content-updates)  
**Need to add a new page?** → [Adding New Pages](#adding-new-pages)  
**Need to check analytics?** → [Analytics Access](#analytics-access)  
**Need to fix a bug?** → [Making Changes](#making-changes)  
**Something broken?** → [Monitoring & Support](#monitoring--support)

---

## Content Updates

### Updating Existing Pages

All page content lives in the `app/` directory as TypeScript (`.tsx`) files.

**Home page:** `app/page.tsx`  
**About page:** `app/about/page.tsx`  
**Services overview:** `app/services/page.tsx`  
**Individual services:** `app/services/[service-name]/page.tsx`  
**Contact page:** `app/contact/page.tsx`

#### How to Update Text

1. Open the relevant `.tsx` file in a code editor
2. Find the text you want to change (look for content between `>` and `<`)
3. Edit the text directly
4. Save the file
5. Commit and push changes (see [Deployment](#deployment))

**Example:** To change the home page hero headline:

```tsx
// In app/page.tsx, find:
<h1>Expert Project Management for Nuclear & Industrial Projects</h1>

// Change to:
<h1>Your New Headline Here</h1>
```

#### Updating Contact Details

Contact information (phone, email) appears in:

- **Header:** `src/components/Header.tsx`
- **Footer:** `src/components/Footer.tsx`
- **Contact page:** `app/contact/page.tsx`
- **Site config:** `src/config/site.ts`

**Best practice:** Update `src/config/site.ts` first, then reference that
config in components to avoid duplicating changes.

### Updating Service Descriptions

Each service has its own page in `app/services/`:

- `project-management/page.tsx`
- `quantity-surveying/page.tsx`
- `contract-administration/page.tsx`
- `claims-management/page.tsx`
- `project-controls/page.tsx`

To update a service:

1. Open the relevant `page.tsx` file
2. Edit the service description, deliverables list, or benefits
3. Save and deploy

---

## Adding New Pages

### Option 1: Simple Static Page

1. Create a new folder in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file inside that folder
3. Copy structure from an existing page (e.g., `app/about/page.tsx`)
4. Update content
5. Add navigation link in `src/components/Header.tsx` if needed

**Example structure:**

```tsx
import Container from '@/components/Container'

export const metadata = {
  title: 'New Page - PC Quanti',
  description: 'Description of new page',
}

export default function NewPage() {
  return (
    <Container>
      <h1>New Page Title</h1>
      <p>Your content here...</p>
    </Container>
  )
}
```

### Option 2: New Service Page

1. Create folder: `app/services/new-service/`
2. Add `page.tsx` file
3. Copy structure from existing service page
4. Update the services overview page (`app/services/page.tsx`) to include a
   link to the new service

---

## Making Changes

### Local Development

**Prerequisites:**

- Node.js 20+ installed
- Git installed
- Code editor (VS Code recommended)

**Steps:**

```bash
# 1. Clone repository
git clone https://github.com/[username]/pc-quanti.git
cd pc-quanti

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser to http://localhost:3000
```

The site will auto-reload when you save file changes.

### Making and Testing Changes

1. Edit files in `app/` or `src/`
2. Check changes in browser at `http://localhost:3000`
3. Test all affected pages
4. Verify mobile responsiveness (use browser dev tools)
5. Run linter: `npm run lint`
6. Build to verify no errors: `npm run build`

---

## Deployment

The site automatically deploys when you push to the `main` branch on GitHub.

### Automatic Deployment (Recommended)

```bash
# 1. Make your changes locally
# 2. Commit changes
git add .
git commit -m "Update: brief description of changes"

# 3. Push to GitHub
git push origin main

# 4. Wait 2-3 minutes for deployment
# 5. Check https://pcquanti.com to verify
```

### Manual Deployment Trigger

If automatic deployment fails or you need to force a rebuild:

1. Go to repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** button
5. Wait for deployment to complete (check green checkmark)

### Deployment Checklist

After each deployment, verify:

- [ ] Site loads at <https://pcquanti.com>
- [ ] All pages are accessible
- [ ] Contact form works (test with dummy data)
- [ ] No console errors in browser dev tools
- [ ] Images load correctly
- [ ] Mobile view looks correct

---

## Analytics Access

### Google Analytics

**Property:** PC Quanti (Measurement ID: see `.env.local` or GitHub secrets)

**How to access:**

1. Go to <https://analytics.google.com>
2. Sign in with admin Google account (add Phil's email as admin)
3. Select **PC Quanti** property

**Key metrics to monitor:**

- **Audience Overview:** Visitor count, sessions, bounce rate
- **Acquisition:** Where visitors come from (organic search, direct, referral)
- **Behavior > Site Content > All Pages:** Most viewed pages
- **Events:** Contact form submissions (goal: 3-5 qualified leads/month)

**Adding Phil as admin:**

1. In Google Analytics, go to **Admin** (gear icon)
2. Under **Property**, click **Property Access Management**
3. Click **+** button → **Add users**
4. Enter Phil's email
5. Select **Administrator** role
6. Click **Add**

### Google Search Console

**Property:** <https://pcquanti.com>

**How to access:**

1. Go to <https://search.google.com/search-console>
2. Sign in with admin Google account
3. Select PC Quanti property

**Key features:**

- **Performance:** Search impressions, clicks, CTR, average position
- **Coverage:** Indexing status and errors
- **Enhancements:** Mobile usability, Core Web Vitals

**Adding Phil as owner:**

1. In Search Console, go to **Settings** (gear icon)
2. Click **Users and permissions**
3. Click **Add user**
4. Enter Phil's email, select **Owner** permission
5. Click **Add**

See `docs/search-console.md` for detailed setup instructions.

---

## Monitoring & Support

### Error Monitoring

**Sentry (if enabled):** Captures JavaScript errors and performance issues

**How to access:**

1. Go to <https://sentry.io>
2. Sign in with admin account
3. Select **PC Quanti** project

**What to monitor:**

- Unresolved errors (fix critical errors ASAP)
- Performance metrics (LCP, FID, CLS)

See `docs/sentry-setup.md` for configuration details.

### GitHub Actions

All deployments run through GitHub Actions.

**How to check build status:**

1. Go to repository on GitHub
2. Click **Actions** tab
3. View latest workflow runs (green = success, red = failed)

**Common deployment issues:**

- **Build fails:** Check error logs, likely a TypeScript error or missing
  dependency
- **Deployment succeeds but site broken:** Check browser console for runtime
  errors
- **Images not loading:** Verify image paths are correct for static export
  (use relative paths or Next.js `<Image>` component)

### Contact Form Testing

The contact form uses **Formspree** to send emails.

**Test the form:**

1. Go to <https://pcquanti.com/contact>
2. Fill out form with test data
3. Submit
4. Check configured email inbox for submission

**Formspree dashboard:**

1. Go to <https://formspree.io>
2. Sign in with admin account
3. View submissions, spam filter, email settings

See `docs/formspree-setup.md` and `docs/contact-form-testing.md` for details.

---

## Common Tasks

### Changing the Logo

1. Replace `public/logo.png` and `public/logo.webp` with new logo files
2. Keep same dimensions (recommend 200x200px)
3. Commit and deploy

### Updating SEO Metadata

**Site-wide defaults:** Edit `src/config/site.ts`

**Per-page metadata:** Edit the `metadata` export in each `page.tsx` file

```tsx
export const metadata = {
  title: 'Page Title - PC Quanti',
  description: 'Page description for search results (150-160 characters)',
}
```

### Adding a New Service

See [Adding New Pages](#adding-new-pages) → Option 2: New Service Page

### Updating Colors/Styling

**Primary CTA color (`#2C02D9`):** Defined in `tailwind.config.ts`

To change brand colors:

1. Edit `tailwind.config.ts`
2. Update color definitions under `theme.extend.colors`
3. Rebuild and deploy

**Note:** Primary CTA color (#2C02D9) is client-approved brand color - avoid
changing without approval.

---

## Troubleshooting

### Site Not Updating After Deploy

1. **Check GitHub Actions:** Verify workflow completed successfully
2. **Clear browser cache:** Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. **Check DNS:** If using custom domain, verify DNS propagation
   (use <https://dnschecker.org>)
4. **Manual redeploy:** Trigger workflow manually from Actions tab

### Contact Form Not Working

1. **Check Formspree status:** <https://status.formspree.io>
2. **Verify form ID:** Check `NEXT_PUBLIC_FORMSPREE_FORM_ID` in GitHub secrets
3. **Test form:** Submit with valid email and check Formspree dashboard
4. **Check spam folder:** Submissions may be filtered

See `docs/contact-form-testing.md` for detailed debugging steps.

### Broken Links

1. **Check sitemap:** Run `npm run build` and verify `out/sitemap.xml`
2. **Fix link paths:** Ensure links use correct paths (start with `/` for
   internal links)
3. **Test all navigation:** Click through all header/footer links

### Performance Issues

1. **Run Lighthouse audit:** Chrome DevTools → Lighthouse tab
2. **Check image sizes:** Compress large images (<100KB recommended)
3. **Review third-party scripts:** Minimize analytics/tracking scripts
4. **Monitor Core Web Vitals:** Check Search Console → Enhancements

---

## Post-Launch Support

**Support window:** 2 weeks post-launch (until 2026-02-28)

**Contact for support:**

- **Bug fixes:** Report via GitHub Issues or email developer
- **Content updates:** Follow instructions in [Content Updates](#content-updates)
- **Questions:** Email or schedule quick call

**Response time:**

- Critical bugs (site down, form broken): 24 hours
- Non-critical bugs: 48 hours
- Content questions: 48 hours

---

## Additional Resources

### Project Documentation

- **Requirements:** `docs/requirements.md`
- **Deployment guide:** `docs/deployment.md`
- **Analytics setup:** `docs/analytics.md`
- **Search Console setup:** `docs/search-console.md`
- **Production checklist:** `docs/production-deploy.md`
- **Monitoring checklist:** `docs/monitoring-checklist.md`

### External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Formspree Documentation](https://help.formspree.io)
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Search Console Help](https://support.google.com/webmasters)

---

## Repository Structure

Quick reference for finding files:

```text
pc-quanti/
├── app/                      # Page content and routing
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── services/            # Services pages
│   └── contact/page.tsx     # Contact page
├── src/
│   ├── components/          # Reusable UI components
│   └── config/site.ts       # Site-wide settings
├── public/                  # Static assets (images, logos)
├── docs/                    # Documentation
├── .github/workflows/       # Deployment automation
└── package.json            # Dependencies and scripts
```

---

## Questions?

If you have questions not covered in this document:

1. Check `docs/` folder for detailed guides
2. Review existing pages for examples
3. Contact developer for assistance

**Remember:** Always test changes locally with `npm run dev` before deploying!
