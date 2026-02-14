# DESIGN_SYSTEM - PC Quanti MVP

## What this file is

The canonical **visual language + token system** for PC Quanti website.

**Rule of thumb:** if a UI value is visible (color, size, radius, spacing,
shadow), it should come from a token defined here.

## Brand Context

- **Business:** PC Quanti - Nuclear & Industrial Project Management Consultancy
- **Owner:** Phil
- **Logo:** Bright blue house (#2C02D9) with "PC" text
- **Brand Personality:** Professional, credible, lean (not corporate bloat),
  accessible, trustworthy
- **Visual Direction:** Clean, crisp, services-centric, modern but not flashy

## Token Sets

### 1) Colors

**Primary Brand**

- `--color-primary`: `#2C02D9` (bright blue - logo color, primary CTA)
- `--color-primary-hover`: `#2402B0` (darker for hover states)
- `--color-primary-light`: `#E8E5FB` (light tint for backgrounds)

**Neutrals**

- `--color-surface-1`: `#FFFFFF` (main background)
- `--color-surface-2`: `#F8F9FA` (subtle background variation)
- `--color-surface-3`: `#E9ECEF` (cards, sections)
- `--color-border`: `#DEE2E6` (dividers, card borders)
- `--color-text-primary`: `#212529` (headings, body)
- `--color-text-secondary`: `#6C757D` (supporting text, captions)
- `--color-text-muted`: `#ADB5BD` (placeholders, disabled)

**Semantic**

- `--color-success`: `#28A745` (success states)
- `--color-warning`: `#FFC107` (warning states)
- `--color-error`: `#DC3545` (error states, validation)
- `--color-info`: `#17A2B8` (info callouts)

**Implementation:** Tailwind config custom colors
(`tailwind.config.ts` extends theme.colors)

### 2) Typography

**Font Families**

- Primary: `Inter` (Google Fonts)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Type Scale**

- `--text-xs`: 0.75rem / 12px (captions, labels)
- `--text-sm`: 0.875rem / 14px (small body, metadata)
- `--text-base`: 1rem / 16px (body text)
- `--text-lg`: 1.125rem / 18px (large body, lead)
- `--text-xl`: 1.25rem / 20px (subheadings)
- `--text-2xl`: 1.5rem / 24px (section titles)
- `--text-3xl`: 1.875rem / 30px (page titles)
- `--text-4xl`: 2.25rem / 36px (hero headings)
- `--text-5xl`: 3rem / 48px (large hero)

**Line Heights**

- Tight: 1.25 (headings)
- Normal: 1.5 (body)
- Relaxed: 1.75 (long-form content)

**Font Weights**

- Regular: 400 (body)
- Medium: 500 (emphasis)
- Semibold: 600 (subheadings)
- Bold: 700 (headings, CTAs)

### 3) Spacing + Layout

**Spacing Scale**

- `--space-1`: 0.25rem / 4px
- `--space-2`: 0.5rem / 8px
- `--space-3`: 0.75rem / 12px
- `--space-4`: 1rem / 16px
- `--space-5`: 1.25rem / 20px
- `--space-6`: 1.5rem / 24px
- `--space-8`: 2rem / 32px
- `--space-10`: 2.5rem / 40px
- `--space-12`: 3rem / 48px
- `--space-16`: 4rem / 64px
- `--space-20`: 5rem / 80px
- `--space-24`: 6rem / 96px

**Container Widths**

- `--container-sm`: 640px
- `--container-md`: 768px
- `--container-lg`: 1024px
- `--container-xl`: 1280px
- `--container-max`: 1440px (content max-width)

**Breakpoints** (Tailwind defaults)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### 4) Radii + Shadows

**Border Radii**

- `--radius-sm`: 0.25rem / 4px (small elements)
- `--radius-md`: 0.5rem / 8px (cards, buttons)
- `--radius-lg`: 0.75rem / 12px (large cards)
- `--radius-xl`: 1rem / 16px (hero sections)

**Shadows**

- `--shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (subtle lift)
- `--shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` (cards)
- `--shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1)` (modals, dropdowns)
- `--shadow-xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.1)` (elevated components)

### 5) Motion

**Durations**

- `--duration-fast`: 150ms (micro-interactions)
- `--duration-base`: 250ms (standard transitions)
- `--duration-slow`: 400ms (complex animations)

**Easings**

- `--ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1) (Tailwind default)
- `--ease-out`: cubic-bezier(0, 0, 0.2, 1) (enter animations)
- `--ease-in`: cubic-bezier(0.4, 0, 1, 1) (exit animations)

**Reduced Motion**

- Respect `prefers-reduced-motion: reduce` media query
- Disable transitions, use instant state changes

## Token Rules

### No Hardcoded Values Policy

- **Rule:** All color/spacing/typography values MUST use defined tokens
- **Exceptions:** One-off illustrations, SVG assets, external embeds
- **Enforcement:** Code review checklist

### Introducing New Tokens

1. Propose in design review (document why existing tokens don't work)
2. Add to this file first
3. Implement in `tailwind.config.ts`
4. Update components to use new token

### Deprecation Policy

- Mark deprecated tokens with `@deprecated` comment
- Provide migration path to replacement token
- Remove after 2 sprints (or when usage = 0)

## Dark Mode

**Status:** Not supported in MVP

Future consideration: Add dark mode tokens if Phil requests it post-launch.

## Accessibility Constraints

- **Contrast:** WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- **Focus Visibility:** All interactive elements must have visible focus state
  (use `--color-primary` with `ring` utility)
- **Touch Targets:** Minimum 44x44px for mobile interactive elements
- **Color Independence:** Never use color alone to convey information
  (add icons/text labels)

## Completeness Checklist

- [x] Tokens exist for common UI primitives (surface/text/border/semantic)
- [x] Clear naming scheme defined
- [x] Dark mode behavior specified (not supported)
- [x] Accessibility constraints stated (WCAG AA, focus, touch targets)
- [x] Primary brand color (#2C02D9) anchored and documented
