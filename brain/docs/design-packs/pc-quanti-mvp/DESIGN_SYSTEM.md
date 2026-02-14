# PC Quanti Design System

## Overview

Professional, clean, and crisp visual system for PC Quanti project
management consultancy website. Emphasizes trust, expertise, and
accessibility while avoiding overly corporate or cluttered aesthetics.

**Token source:** `tailwind.config.ts`  
**Naming scheme:** Tailwind custom theme extensions

---

## 1) Token Sets

### Colors

**Brand anchor (must not change):**

- Primary CTA: `#2C02D9` (bright blue) - used in logo and primary CTAs

**Color palette:**

```typescript
// tailwind.config.ts
colors: {
  'pc-blue': '#2C02D9',        // Primary brand color
  'pc-blue-dark': '#1F0199',   // Hover/active states
  'pc-blue-light': '#E8E3FF',  // Subtle backgrounds
  
  // Neutrals (light mode)
  'pc-neutral-50': '#FAFAFA',   // Lightest surface
  'pc-neutral-100': '#F5F5F5',  // Secondary surface
  'pc-neutral-200': '#E5E5E5',  // Borders
  'pc-neutral-400': '#A3A3A3',  // Muted text
  'pc-neutral-600': '#525252',  // Secondary text
  'pc-neutral-900': '#171717',  // Primary text
}
```

**Semantic colors:**

- Success: `#10B981` (green)
- Warning: `#F59E0B` (amber)
- Error: `#EF4444` (red)
- Info: `#3B82F6` (blue)

**Color usage rules:**

- Primary CTA buttons: `pc-blue` background
- Text links: `pc-blue` with underline on hover
- Body text: `pc-neutral-900`
- Muted/secondary text: `pc-neutral-600`
- Borders/dividers: `pc-neutral-200`
- Page backgrounds: white or `pc-neutral-50`

### Typography

**Font families:**

- Sans-serif: Inter or Manrope (clean, professional, modern)
- Fallback: system-ui, sans-serif

**Scale:**

```text
// Headings
- H1: 2.5rem (40px) / line-height 1.2 / weight 700
- H2: 2rem (32px) / line-height 1.3 / weight 700
- H3: 1.5rem (24px) / line-height 1.4 / weight 600
- H4: 1.25rem (20px) / line-height 1.5 / weight 600

// Body
- Large: 1.125rem (18px) / line-height 1.7 / weight 400
- Base: 1rem (16px) / line-height 1.6 / weight 400
- Small: 0.875rem (14px) / line-height 1.6 / weight 400
```

**Weight scale:**

- 400 (Regular): Body text
- 600 (Semibold): Subheadings, emphasis
- 700 (Bold): Headings, CTAs

### Spacing + Layout

**Spacing scale (Tailwind defaults extended):**

- Use Tailwind's default spacing scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12,
  16, 20, 24, 32, 40, 48, 64

**Container widths:**

- Max content width: 1280px
- Comfortable reading width (prose): 65ch (~700px)

**Breakpoints:**

```text
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Wide desktop
```

**Layout density:** Spacious (prefer generous whitespace over cramped layouts)

### Radii + Shadows

**Border radius:**

```text
sm: 0.25rem (4px)   // Subtle elements
md: 0.5rem (8px)    // Cards, inputs, buttons
lg: 0.75rem (12px)  // Hero sections, large cards
```

**Shadows:**

```text
sm: 0 1px 2px rgba(0,0,0,0.05)           // Subtle depth
md: 0 4px 6px rgba(0,0,0,0.07)           // Cards
lg: 0 10px 15px rgba(0,0,0,0.1)          // Modals, popovers
xl: 0 20px 25px rgba(0,0,0,0.1)          // Hero images
```

### Motion

**Durations:**

- Instant: 100ms (hover states)
- Fast: 200ms (dropdowns, tooltips)
- Normal: 300ms (modals, drawers)
- Slow: 500ms (page transitions)

**Easings:**

- Default: `ease-in-out`
- Enter: `ease-out`
- Exit: `ease-in`

**Reduced motion:** Respect `prefers-reduced-motion` - disable animations for accessibility

---

## 2) Token Rules

### No hardcoded values policy

**Forbidden:**

- Inline hex colors (use Tailwind classes)
- Magic numbers for spacing (use Tailwind spacing scale)
- Random font sizes (use defined typography scale)

**Allowed exceptions:**

- One-off brand-specific values already defined in tokens
- SVG paths/coordinates
- Calculated values derived from tokens

### Introducing new tokens

1. Check if an existing token can be used or extended
2. If truly new, add to `tailwind.config.ts` with clear semantic name
3. Document usage in this file

### Deprecation

- Mark deprecated tokens with `// @deprecated` comment
- Provide migration path in comment
- Remove after one release cycle (or when usage is zero)

---

## 3) Dark Mode

**Status:** Not supported in MVP  
**Future consideration:** Could add dark mode using Tailwind's `dark:` variant system

---

## 4) Accessibility Constraints

**Contrast requirements:**

- WCAG AA compliance minimum
- Text contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Primary CTA blue (`#2C02D9`) on white: 6.8:1 ✓

**Focus states:**

- Visible focus rings on all interactive elements
- Use Tailwind's `focus:ring-2 focus:ring-pc-blue focus:ring-offset-2`

**Touch targets:**

- Minimum 44×44px for interactive elements (mobile)

---

## Completeness Checklist

- [x] Tokens exist for common UI primitives (surface/text/border/semantic)
- [x] Clear naming scheme matches code (`tailwind.config.ts`)
- [x] Dark mode behavior specified (not supported in MVP)
- [x] Accessibility constraints stated (WCAG AA, contrast, focus visibility)
