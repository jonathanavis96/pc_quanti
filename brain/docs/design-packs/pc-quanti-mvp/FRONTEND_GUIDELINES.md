# PC Quanti Frontend Guidelines

## Architecture Overview

PC Quanti is a **statically-generated marketing website** built with Next.js
14+ (App Router), TypeScript, and Tailwind CSS. It uses file-based routing,
server-side rendering for SEO, and minimal client-side JavaScript. Components
follow a simple, functional pattern with local state only (no global state
management needed for MVP). Deployed as static HTML to GitHub Pages.

**Token source:** `tailwind.config.ts`  
**Styling system:** Tailwind CSS (utility-first)

---

## 1) Project Structure (UI)

### Component directory structure

```text
src/
  components/
    ui/              # Shared UI primitives (Button, Input, Card, etc.)
    sections/        # Page sections (Hero, ServicesGrid, Footer, etc.)
    layout/          # Layout components (Header, Navigation, Footer)
  
app/
  page.tsx           # Home page
  about/
    page.tsx         # About page
  services/
    page.tsx         # Services overview
    [slug]/
      page.tsx       # Individual service pages
  contact/
    page.tsx         # Contact page
  layout.tsx         # Root layout
  globals.css        # Global styles + Tailwind imports
```

### Component organization rules

- **UI primitives** (`src/components/ui/`): Reusable, unstyled/lightly-styled
  components (Button, Input, Card)
- **Sections** (`src/components/sections/`): Page-specific composed sections
  (Hero, ServicesOverview, ContactForm)
- **Layout** (`src/components/layout/`): Persistent navigation, headers,
  footers

### Naming conventions

- Components: PascalCase (e.g., `Button.tsx`, `ServicesGrid.tsx`)
- Files: kebab-case for non-components (e.g., `utils.ts`, `contact-form-schema.ts`)
- Tailwind classes: Use `className` prop, avoid `style` prop unless absolutely necessary

---

## 2) Styling + Theming

### Styling approach

**Hard rule:** Use Tailwind utility classes exclusively. No CSS modules, no styled-components.

**Example:**

```tsx
// ✅ Correct
<button className="bg-pc-blue text-white px-6 py-3 rounded-md
  hover:bg-pc-blue-dark transition-colors">
  Contact Us
</button>

// ❌ Forbidden
<button style={{ backgroundColor: '#2C02D9', color: 'white' }}>
  Contact Us
</button>
```

### Responsive design

Use Tailwind's mobile-first breakpoint system:

```tsx
// Mobile-first: base styles apply to mobile, then override at breakpoints
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

**Breakpoints:**

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Light/dark mode

**Status:** No dark mode in MVP. Use light mode only.  
**Future:** If needed, implement using Tailwind's `dark:` variant with a theme toggle.

---

## 3) Token Usage Rules

### Where tokens live

**Source of truth:** `tailwind.config.ts`

All design tokens (colors, spacing, typography, shadows) are defined in
Tailwind config and referenced via utility classes.

### How components reference tokens

**Colors:**

```tsx
// ✅ Use semantic token names
<button className="bg-pc-blue text-white border-pc-neutral-200">

// ❌ Do not hardcode hex
<button className="bg-[#2C02D9]">
```

**Spacing:**

```tsx
// ✅ Use Tailwind spacing scale
<div className="px-6 py-12 md:px-12 md:py-24">

// ❌ Do not use arbitrary values unless justified
<div className="px-[23px]">
```

**Typography:**

```tsx
// ✅ Use predefined text utilities
<h1 className="text-4xl font-bold leading-tight">

// ❌ Do not use inline font-size
<h1 style={{ fontSize: '40px' }}>
```

### What is forbidden

**Absolutely forbidden:**

- Inline `style` prop for colors, spacing, typography (except for dynamic
  values like transforms)
- Hardcoded hex colors in JSX
- Ad-hoc spacing values (use Tailwind scale)
- CSS files per component (use `globals.css` only for base styles)

**Allowed exceptions:**

- Dynamic inline styles for CSS variables or computed transforms
- Third-party library overrides (with comment explaining why)

---

## 4) Accessibility Requirements

### Keyboard navigation

**Hard rules:**

- All interactive elements must be keyboard accessible
- Use semantic HTML (`<button>`, `<a>`, `<nav>`) over `<div onClick>`
- Implement visible focus states on all interactive elements

**Focus states:**

```tsx
// ✅ Always add focus rings
<button className="focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2">

<a href="/services" className="focus:outline-none focus:ring-2 focus:ring-pc-blue">
```

### Color contrast

**WCAG AA minimum:**

- Normal text: 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 contrast ratio
- Primary CTA blue (#2C02D9) on white: 6.8:1 ✓

**Testing:** Use browser DevTools Lighthouse accessibility audit before deployment.

### ARIA patterns

**Minimal ARIA in MVP** (prefer semantic HTML):

- Use `<nav>`, `<main>`, `<header>`, `<footer>` for landmark regions
- Add `aria-label` to icon-only buttons
- Use `aria-current="page"` for active navigation links
- Contact forms: associate labels with inputs using `htmlFor`

**Example:**

```tsx
// ✅ Semantic HTML + minimal ARIA
<nav aria-label="Primary navigation">
  <a href="/" aria-current="page">Home</a>
  <a href="/services">Services</a>
</nav>

<button aria-label="Open menu" className="md:hidden">
  <MenuIcon />
</button>
```

### Touch targets

**Mobile minimum:** 44×44px for all interactive elements (buttons, links)

---

## 5) State Management

**MVP approach:** Local component state only (`useState`, `useReducer`)

No global state library needed. If contact form needs validation, use React
Hook Form or simple controlled inputs.

**Future:** If adding user authentication or complex interactions, consider
Zustand or React Context.

---

## 6) Performance Budgets

**Lighthouse targets:**

- Performance: 90+ (desktop), 80+ (mobile)
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Bundle size:**

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 200ms

**Optimization strategies:**

- Use Next.js `<Image>` component for all images (automatic optimization)
- Lazy-load below-the-fold content
- Minimize third-party scripts (analytics only)
- Static generation for all pages (no SSR needed)

---

## Completeness Checklist

- [x] A new contributor can add a component using documented patterns
- [x] Token source-of-truth is linked (`tailwind.config.ts`)
- [x] Accessibility rules are explicit (keyboard, contrast, ARIA, touch targets)
- [x] Styling approach is clear (Tailwind only, no CSS modules)
- [x] Responsive design strategy documented (mobile-first breakpoints)
