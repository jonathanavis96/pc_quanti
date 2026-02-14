# TECH_STACK - PC Quanti MVP

## What this file is

A constraints document: what's possible, what's expensive, and what tools are
available.

A design audit that ignores this file tends to propose changes that can't be
implemented.

## 1) Frontend

### Framework

- **Next.js 15.1.4** (App Router, React Server Components)
- **React 19** (with TypeScript)
- **Node.js 18+** required for builds

### Routing

- Next.js App Router (`app/` directory)
- File-based routing
- Static generation preferred (SSG) for GitHub Pages deployment

### Build Tooling

- **Turbopack** (Next.js default dev server)
- **Static export:** `next build && next export` → `out/` directory
- Deploy target: **GitHub Pages** (static HTML/CSS/JS only, no server-side)

### Styling/Theming

- **Tailwind CSS 3.4.17** (utility-first)
- **PostCSS** for processing
- Custom theme extension in `tailwind.config.ts`
- Global styles in `app/globals.css`

### UI Libraries

- **None** (MVP uses custom components)
- Future: Consider shadcn/ui or Radix UI for complex interactions

### Icons

- **Lucide React** or **Hero Icons** (lightweight, tree-shakable)
- Inline SVG for logo and custom brand assets

### Motion/Animation

- **Tailwind transitions** (CSS transitions via utility classes)
- `framer-motion` (optional, if complex animations needed post-MVP)

### Form Handling + Validation

- **React Hook Form** (lightweight, good DX)
- **Zod** for schema validation (TypeScript-first)
- Contact form submits to Formspree or similar (no backend in MVP)

## 2) Testing

### Unit Test Stack

- **Vitest** (fast, Vite-compatible)
- **React Testing Library** (component testing)

### Component Test Stack

- **Storybook** (optional, post-MVP for design system documentation)

### E2E Test Stack

- **Playwright** (optional, if Phil wants smoke tests pre-deploy)

**Status:** Testing deferred until core pages built

## 3) Constraints

### Performance Budgets

- **Page Load:** < 2s on 3G
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization:** Use Next.js `<Image>` component (auto-WebP, lazy load)

### Accessibility Baseline

- **WCAG 2.1 Level AA** compliance
- Keyboard navigation for all interactive elements
- Screen reader compatible (semantic HTML, ARIA labels where needed)
- Focus indicators visible (no `outline: none` without replacement)

### Browser/Device Support

- **Modern browsers:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile-first:** Responsive design from 320px viewport width
- **No IE11 support** (Next.js 15 doesn't support it)

### Deployment Constraints

- **Static-only:** No server-side rendering (GitHub Pages limitation)
- **No API routes:** Contact form uses third-party service (Formspree)
- **No database:** All content is hardcoded or CMS-fetched at build time
- **Custom domain:** `pcquanti.co.uk` (awaiting Phil's decision)

### "Must Not Change" Constraints

- **Logo:** Blue house (#2C02D9) with "PC" text (already approved)
- **Brand Color:** #2C02D9 is primary CTA color (non-negotiable)
- **Content Tone:** Professional, credible, lean (not corporate marketing fluff)
- **Services-Centric:** Services pages are the core conversion funnel
  (Home → Services → Contact)

### SEO Constraints

- **Meta tags:** All pages must have unique title/description
- **Structured data:** Schema.org for Organization, Service pages
- **Sitemap:** Auto-generate `sitemap.xml` for Google Search Console
- **Robots.txt:** Allow all crawlers

## 4) Future Considerations (Post-MVP)

- **CMS Integration:** Sanity or Contentful (if Phil wants to self-edit content)
- **Blog:** Next.js MDX support for case studies / thought leadership
- **Contact Form Backend:** Replace Formspree with custom API (Vercel Functions)
- **Analytics:** Google Analytics 4 (already planned for Phase 2)
- **A/B Testing:** Google Optimize or Vercel Edge Config (if conversion tuning
  needed)

## Completeness Checklist

- [x] All UI-affecting dependencies listed
- [x] Constraints explicit (static export, no backend, WCAG AA)
- [x] Build and deploy process documented (GitHub Pages)
- [x] Browser support and accessibility baseline defined
