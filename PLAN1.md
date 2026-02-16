# PLAN 1 — Navigation + Header v2 (PC Quanti)

## Other sections (brief)

1) Hero v2 + blueprint art
2) Homepage sections (services grid, process, proof, CTA)
3) Services overview + detail templates
4) About + Contact refinements
5) Motion utilities + QA pass

---

## 1) Navigation + Header v2 — Detailed plan

### Objective

Deliver the premium, static navigation experience specified in `Specs.md` section 2, including the sliding active indicator, scribble click feedback, scroll-state styling, and a fully engineered mobile drawer.

### Scope

- `Header` component upgrade (desktop + mobile)
- Sliding underline indicator (pen-flick behavior)
- Scribble circle click feedback (SVG overlay)
- Scroll-state styling and sticky behavior
- Mobile menu drawer with focus management and scroll lock
- Accessibility + keyboard focus states

### Files to inspect / likely touch

- `src/components/Header.tsx`
- `src/components/Button.tsx` (if CTA styling needs alignment)
- `src/components/index.ts` (export updates if needed)
- `src/app/layout.tsx` (if header layout or metadata affects nav)
- `src/app/globals.css` (if custom CSS for underline/scribble animation)
- `tailwind.config.ts` (confirm color tokens exist)

### Design requirements (from Specs.md, condensed)

**Header layout**
- Sticky: `sticky top-0 z-50`
- Rest state: `bg-white`
- Scrolled state: `bg-white/80 backdrop-blur border-b border-pc-neutral-200`
- Optional faint bottom rule: `pc-blue` at 10–15% opacity
- Desktop layout: logo (left), links (left aligned), CTA (right)

**Nav links**
- Links: Home, Services, About, Contact (Services is a standard link, no dropdown)
- Link style: `font-medium`, min 40px height with `px-2 py-2`
- Hover: text color shifts to `pc-blue`
- Active route styling with **single sliding underline**

**Sliding underline (pen-flick)**
- One underline element that moves between items
- Thickness: 2px, color `pc-blue`
- Animation: 140–200ms total, easing `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Behavior:
  - On hover: underline previews hovered item
  - On mouse leave: underline returns to active route
  - On click: underline flicks to clicked item before navigation

**Scribble click feedback (required)**
- On click/tap: underline moves + quick scribble circle around label
- Render a single SVG overlay positioned using clicked link’s DOMRect
- SVG specs:
  - 1–2 imperfect loops
  - `stroke-linecap` and `stroke-linejoin` = `round`
  - Stroke: `pc-blue`, 2px, opacity 0.85–0.95
- Timing:
  - Draw: 220–360ms
  - Fade: 120–180ms
  - Total ≤ 520ms
- Layering: above underline, below text if possible
- Fallback: if measurement fails, skip scribble

**Mobile drawer**
- Full-height drawer with backdrop `bg-black/30`
- Panel slides from right, max width ~360px
- Scroll lock while open
- Focus management: focus trap, Esc to close, return focus to trigger
- Include CTA button + contact shortcut if available

**Accessibility**
- Visible focus rings for keyboard users
- No layout jump on scroll-state change
- Touch targets ≥ 44px

### Implementation plan (step-by-step)

1) **Audit current header structure**
   - Identify nav link rendering, active route logic, and current mobile menu behavior (if any).

2) **Implement scroll-state styling**
   - Add a scroll listener with a small threshold (8–16px) and toggle a `scrolled` state.
   - Apply background blur/border classes when scrolled.
   - Ensure no layout shift (fixed height).

3) **Create sliding underline indicator**
   - Measure active link element (via `useRef` + `getBoundingClientRect`).
   - Position a single absolutely positioned underline element within the nav container.
   - Animate between target positions on route change and hover.
   - On hover out, restore underline to active route.

4) **Add scribble click feedback**
   - Capture clicked link rect and position a single SVG overlay.
   - Animate stroke-dashoffset to draw, then fade opacity.
   - Ensure it never blocks pointer events.

5) **Build / refine mobile drawer**
   - Trigger button in header.
   - Backdrop + sliding panel with transitions.
   - Add scroll lock (e.g., `document.body.style.overflow = 'hidden'` during open).
   - Implement focus trap and Esc handling.

6) **QA + polish**
   - Keyboard navigation, focus visibility, active route behavior.
   - Hover behavior correctness (underline follows hover, returns to active).
   - Scribble animation timing + fallback safety.
   - Mobile tap targets and drawer interactions.

### Acceptance criteria (checklist)

- Header is sticky with smooth scroll-state styling.
- Navigation links are static (no dropdowns), with correct active route state.
- A single underline slides between items on hover and click, with correct timing.
- Scribble circle animates on click without blocking navigation.
- Mobile drawer opens/closes smoothly, locks scroll, manages focus, and includes CTA.
- Keyboard focus states are visible and usable.
- No layout shift when scroll-state toggles.

### Testing notes

- Manual verification in desktop + mobile breakpoints.
- Verify keyboard tabbing order and Esc-to-close drawer.
- Ensure no horizontal scrollbars introduced.
