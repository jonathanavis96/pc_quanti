# Base Path Configuration

## Overview

The PC Quanti site supports two deployment modes:

1. **GitHub Pages mode** - Serves from `/pc_quanti/` subdirectory
2. **Custom domain mode** - Serves from root `/`

## Current Configuration

The base path is controlled by the `USE_GITHUB_PAGES` environment variable in the build process.

### GitHub Pages (username.github.io/pc_quanti/)

**URL:** https://jonathanavis96.github.io/pc_quanti/

This mode is currently active via GitHub Actions workflow.

**How it works:**
- `.github/workflows/deploy.yml` sets `USE_GITHUB_PAGES: 'true'`
- `next.config.ts` applies `basePath: '/pc_quanti'` and `assetPrefix: '/pc_quanti'`
- All assets and links are prefixed with `/pc_quanti/`

### Custom Domain (pcquanti.com)

**URL:** https://pcquanti.com (when configured)

To switch to custom domain mode:

1. Update `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build with Next.js
     run: npm run build
     env:
       USE_GITHUB_PAGES: 'false'  # Change from 'true' to 'false'
       NEXT_PUBLIC_FORMSPREE_FORM_ID: ${{ secrets.FORMSPREE_FORM_ID }}
       NEXT_PUBLIC_SITE_URL: https://pcquanti.com  # Change from github.io URL
   ```

2. Configure custom domain in GitHub Settings:
   - Go to **Settings → Pages**
   - Under "Custom domain", enter: `pcquanti.com`
   - Enable "Enforce HTTPS"

3. Set up DNS records at your domain registrar (see `domain-setup.md`)

## Testing Locally

### Test GitHub Pages mode (with /pc_quanti/ prefix):
```bash
USE_GITHUB_PAGES=true npm run build
npx serve out
# Visit http://localhost:3000/pc_quanti/
```

### Test Custom Domain mode (without prefix):
```bash
USE_GITHUB_PAGES=false npm run build
npx serve out
# Visit http://localhost:3000/
```

Or simply:
```bash
npm run build  # Defaults to custom domain mode (no prefix)
npx serve out
# Visit http://localhost:3000/
```

## How It Works

The configuration in `next.config.ts`:

```typescript
// Set to true when deploying to GitHub Pages (username.github.io/repo-name/)
// Set to false when using custom domain (pcquanti.com)
const useGitHubPages = process.env.USE_GITHUB_PAGES === 'true';
const basePath = useGitHubPages ? '/pc_quanti' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,        // Adds /pc_quanti prefix to routes
  assetPrefix: basePath,     // Adds /pc_quanti prefix to assets
  // ... other config
};
```

**Effect on URLs:**

| Element | GitHub Pages Mode | Custom Domain Mode |
|---------|-------------------|-------------------|
| Homepage | `/pc_quanti/` | `/` |
| About page | `/pc_quanti/about` | `/about` |
| Service page | `/pc_quanti/services/project-management` | `/services/project-management` |
| CSS/JS assets | `/pc_quanti/_next/static/...` | `/_next/static/...` |
| Images | `/pc_quanti/logo.webp` | `/logo.webp` |

## Troubleshooting

### Links not working after switching modes

Clear the Next.js cache and rebuild:
```bash
rm -rf .next out
npm run build
```

### Assets not loading

Check the browser console for 404 errors. Ensure:
1. The `USE_GITHUB_PAGES` environment variable matches your deployment target
2. The build was completed with the correct environment variable
3. The GitHub Pages custom domain setting matches your mode

### Switching back and forth

You can switch modes at any time by:
1. Updating the workflow file
2. Pushing to main
3. GitHub Actions will rebuild with the new base path

No code changes are needed - just the environment variable.

---

**Last Updated:** 2026-02-16  
**Current Mode:** GitHub Pages (`/pc_quanti/`)
