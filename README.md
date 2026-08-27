# PC Quanti Website

Brochure website for PC Quanti, a construction/engineering commercial management
consultancy. Built with Next.js, statically exported, and served by Cloudflare
Pages.

- **Live site:** https://pcquanti.co.za
- **Stack:** Next.js 16.1.6 (App Router), React 19.2.3, TypeScript, Tailwind CSS 4, Sentry
- **Deployment:** Cloudflare Pages, project `pc-quanti`, auto-deploys on every push to `main`

## Getting started

Requires **Node.js 20**.

```bash
npm install
npm run dev      # http://localhost:3000, hot reload via Watchpack polling
```

Other scripts:

```bash
npm run build    # next build -> static export in out/
npm run lint     # eslint
```

There is no test suite. `npm run build` plus `npm run lint` is the whole
automated gate before a change ships.

## Deployment

The site is a Next.js static export (`output: 'export'` in `next.config.ts`,
building to `out/`) hosted on **Cloudflare Pages**, project name **`pc-quanti`**.
Cloudflare Pages builds directly from this GitHub repository on every push to
`main`:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20

No GitHub Actions deploy step is involved. `.github/workflows/deploy.yml` is a
manual-dispatch-only GitHub Pages fallback, kept for rollback; it does not run
on push and is not the live deployment path. Its header documents the DNS
records a rollback to GitHub Pages would need.

### `basePath` in `next.config.ts`

`next.config.ts` still contains a `USE_GITHUB_PAGES` switch that prefixes every
route and asset with `/pc_quanti` when set. That switch exists only for the
retired GitHub Pages deployment (`username.github.io/pc_quanti/`). Cloudflare
Pages serves the site from the custom domain root, so this env var should
never be set to `'true'` in the Cloudflare Pages build — leave it unset so
`basePath` resolves to `''`. It is dead weight now that hosting has moved and
is safe to delete in a future cleanup.

## Domain and DNS

- **Domain:** `pcquanti.co.za`, registered at **xneelo** (transferred from
  Afrihost in August 2026). Auto-renew is on.
- **DNS:** served by **Cloudflare** (nameservers `casey.ns.cloudflare.com` /
  `daisy.ns.cloudflare.com`). Cloudflare Pages attaches to the domain through
  the same Cloudflare account/zone — no separate DNS provider is involved.
- **Email:** `info@pcquanti.co.za` runs on **Zoho Mail**, unrelated to this
  repository or its hosting; MX/SPF/DKIM/DMARC live in the same Cloudflare
  zone as the website records.

Changing DNS or the Cloudflare Pages custom domain binding requires access to
the Cloudflare account the zone lives in (Jonathan's account as of this
writing).

## Contact form

The `/contact` page (`app/contact/page.tsx`) submits through **Formspree**,
which is the only integration compatible with a static export (no server to
run an API route on).

- Form ID comes from the `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable,
  set in the Cloudflare Pages project's build environment variables.
- If that variable is unset, the form falls back to opening the visitor's
  email client addressed to `info@pcquanti.co.za`.
- Formspree free tier: 50 submissions/month. Notifications go to
  `info@pcquanti.co.za`, configured in the Formspree dashboard.

## Error monitoring (Sentry)

Sentry is wired in via `@sentry/nextjs` (`sentry.client.config.ts`,
`sentry.server.config.ts`, `sentry.edge.config.ts`, `instrumentation.ts`).

- The DSN comes from `NEXT_PUBLIC_SENTRY_DSN`, an environment variable set in
  the Cloudflare Pages project — it is not committed anywhere in this repo.
- `SENTRY_ORG` / `SENTRY_PROJECT` (used by the Sentry webpack plugin for
  source map upload) are also environment variables, not repo config.
- Without `NEXT_PUBLIC_SENTRY_DSN` set, the app still builds and runs; error
  tracking is simply inactive.

## Analytics

Google Analytics / Search Console, if configured, are managed entirely outside
this repository (no gtag/GA scripts are wired into the app code as of this
writing) — check the Google account associated with the domain rather than
searching the codebase for a measurement ID.

## Repository structure

```
app/                  Routes (App Router) — one folder per page
  services/            Service detail pages
  contact/              Contact page + Formspree form
src/
  components/           Shared UI components (Header, Footer, etc.)
  config/site.ts         Site-wide config: name, contact details, service list
  lib/imageLoader.ts      Custom Next.js image loader (respects basePath)
public/                Static assets (logos, images)
.github/workflows/     GitHub Actions — deploy.yml is a manual GitHub Pages
                       rollback only, not the live deploy path
```

## Updating content

- **Text/copy:** edit the relevant `page.tsx` under `app/`.
- **Contact details, company description, service list:** `src/config/site.ts`
  is the single source most components pull from — prefer editing there over
  duplicating values in individual pages.
- **Colours/branding:** `tailwind.config.ts`. The primary CTA colour is
  client-approved — confirm before changing it.

After any change: `npm run build && npm run lint` locally, then push to `main`
— Cloudflare Pages picks it up automatically and the live site updates within
a few minutes.
