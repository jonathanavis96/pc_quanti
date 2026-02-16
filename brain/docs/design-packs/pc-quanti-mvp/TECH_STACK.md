# PC Quanti Tech Stack

## Overview

PC Quanti is a **statically-generated marketing website** built with modern
web technologies optimized for performance, SEO, and GitHub Pages deployment.

**Deployment target:** GitHub Pages (static HTML)  
**Build approach:** Static Site Generation (SSG) via Next.js

---

## 1) Frontend

### Framework

- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript** (strict mode enabled)

**Rationale:** Next.js provides excellent SEO, static generation, and image
optimization. App Router enables file-based routing with minimal boilerplate.

### Routing

- File-based routing via Next.js App Router
- Routes:
  - `/` → Home
  - `/about` → About
  - `/services` → Services overview
  - `/services/[slug]` → Individual service pages
  - `/contact` → Contact page
- **No client-side routing library needed** (Next.js handles it)

### Build Tooling

- **Next.js built-in bundler** (Turbopack in dev, Webpack in production)
- **ESLint** (Next.js recommended config + custom rules)
- **TypeScript compiler** (tsc for type checking)
- **PostCSS** (Tailwind CSS processing)

### Styling/Theming

- **Tailwind CSS 4.x** (utility-first CSS framework)
- **PostCSS** (Tailwind processing)
- **No CSS Modules, no Sass, no styled-components**

**Token source:** `tailwind.config.ts`

### UI Libraries

- **None in MVP** (building custom components for maximum control)
- **Future consideration:** Radix UI or HeadlessUI for complex interactions
  (modals, dropdowns)

### Icons

- **Lucide React** or **Heroicons** (lightweight, tree-shakeable SVG icons)
- **Alternative:** Custom SVG icons if minimal set needed

### Motion/Animation

- **Tailwind CSS transitions** (hover, focus states)
- **Framer Motion** (optional, only if needed for hero animations or page
  transitions)
- **CSS animations** for simple effects (fade-in, slide-up)

**Constraint:** Respect `prefers-reduced-motion` for accessibility

### Form Handling + Validation

- **React Hook Form** (lightweight, performant form management)
- **Zod** (TypeScript-first schema validation)
- **Alternative:** Simple controlled inputs if form is minimal

**Form submission:**

- Option 1: **Resend API** (email service, easy integration)
- Option 2: **FormSpree** (free tier for low volume)
- Option 3: **Next.js API route** → email service (SendGrid, AWS SES)

---

## 2) Testing

### Unit Testing

- **Vitest** (fast, modern test runner)
- **@testing-library/react** (component testing utilities)
- **@testing-library/jest-dom** (custom matchers)

**Coverage target:** Not strict in MVP, but test critical paths (form
submission, navigation)

### Component Testing

- **@testing-library/react** (same as unit tests)
- **No Storybook in MVP** (can add later for design system documentation)

### E2E Testing

- **None in MVP** (manual testing only)
- **Future:** Playwright or Cypress if needed for critical user flows

---

## 3) Constraints

### Performance Budgets

**Lighthouse targets (desktop):**

- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Lighthouse targets (mobile):**

- Performance: 80+
- Accessibility: 100

**Core Web Vitals:**

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Bundle size:**

- Total JS (initial load): < 150KB (gzipped)
- First Contentful Paint: < 1.8s

**Optimization strategies:**

- Static generation for all pages (no SSR needed)
- Next.js `<Image>` component for automatic optimization
- Lazy-load below-the-fold images
- Minimal third-party scripts (analytics only)
- Tree-shaking via ES modules

### Accessibility Baseline

**WCAG AA compliance** (minimum):

- Semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`)
- Keyboard navigation for all interactive elements
- Visible focus states (Tailwind focus rings)
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- `alt` text for all images
- Form labels associated with inputs
- `aria-label` for icon-only buttons

**Testing:** Lighthouse accessibility audit + manual keyboard navigation

### Browser/Device Support

**Desktop browsers:**

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Mobile browsers:**

- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

**No support for:**

- Internet Explorer 11 (EOL)
- Legacy browsers (< 2 years old)

**Responsive breakpoints:**

- Mobile: 375px minimum (iPhone SE)
- Tablet: 768px
- Desktop: 1024px
- Wide desktop: 1280px

### SEO Constraints

**Must-haves:**

- Meta tags on all pages (title, description, OG tags)
- Structured data (Schema.org JSON-LD for Organization and Service pages)
- `robots.txt` and `sitemap.xml`
- Clean URL structure (no query params, semantic slugs)
- Fast load times (LCP < 2.5s)

**Target keywords (UK nuclear/industrial PM):**

- "UK nuclear project management"
- "industrial project management consultancy"
- "quantity surveying nuclear sector"
- "project controls mining"
- "claims management energy projects"

### GitHub Pages Constraints

**Static HTML only:**

- No server-side APIs (use serverless functions or third-party services)
- No database (all content is static)
- No authentication (not needed in MVP)

**Deployment:**

- Build command: `npm run build` → outputs to `out/` directory
- GitHub Actions workflow for automated deployment on push to `main`
- Custom domain support (if Phil provides domain)

### "Must Not Change" Constraints

**Brand anchors:**

- Primary CTA color: `#2C02D9` (bright blue)
- Logo design (PC house icon with blue background)
- Clean, crisp aesthetic (no cluttered layouts)

**Information architecture:**

- 5-page structure (Home, About, Services, Service details, Contact)
- Services must be discoverable from Home page
- Contact details visible in header/footer on all pages

**Behavioral:**

- Mobile-first design (majority of industrial users browse on mobile)
- Fast page loads (users won't wait > 3 seconds)
- Simple navigation (no mega-menus, no complex dropdowns)

---

## Completeness Checklist

- [x] All UI-affecting dependencies listed
- [x] Constraints are explicit (performance, accessibility, browser support)
- [x] Deployment target and build process documented
- [x] SEO requirements specified
- [x] GitHub Pages constraints noted (static HTML only)
