# PC Quanti — Website UX/UI Specs

**Purpose:** Upgrade the current MVP brochure site from “baseline” to a polished, modern B2B consultancy experience.

**Audience:** UK-based project delivery stakeholders (clients, procurement, PMs, commercial managers).

**Principles (what the inspiration galleries consistently reward):**

- **Clarity first:** one primary narrative + one primary CTA per screen.
- **Strong hierarchy:** bigger type, more whitespace, fewer competing colors.
- **Trust cues everywhere:** credentials, process, measurable outcomes.
- **Modern motion:** subtle, fast, non-distracting; **client-approved always-on animation** (do not disable based on `prefers-reduced-motion`). Keep motion smooth and non-violent; avoid jitter/flash.
- **Component-driven consistency:** repeatable sections, tokens, and spacing.

## 0) Inspiration Research (from the provided links)

### 0.1 What was accessible from this environment

- **Web Design (curated.design)**: redirects to Craftwork’s curated gallery: `https://craftwork.design/curated/websites/` (accessible)
- **Landing pages (landing.love)**: accessible, server-rendered HTML (accessible)
- **Navbar (navbar.gallery)**: the canonical domain appears to be `https://navbargallery.com` (accessible, Webflow)
- **CTA sections (cta.gallery)**: accessible, but content appears heavily JS/rendered via Framer (limited extraction)
- **Design systems (component.gallery)**: accessible (Astro site, lots of component + interaction patterns in HTML/CSS)
- **Icons (hugeicons.com)**: accessible, JS-heavy (limited extraction)
- **Brands (rebrand.gallery)**: accessible, JS-heavy (limited extraction)

### 0.2 What was blocked / not reachable

- **SaaS websites (saaspo.com)**: blocked behind Cloudflare in this environment
- **Animation (appmotion.design)**: returning 404 from the host (may be moved/renamed)
- **Mobile apps (mobbin.com)**: site reachable, but most useful content typically requires auth and JS rendering (limited extraction)

### 0.3 Distilled patterns worth copying (tailored to PC Quanti)

**From `navbargallery.com` (Navbar patterns):**

- Sticky navbars with clear **scroll-state** (border + blur) feel “premium” fast.
- The best B2B navbars keep **one primary CTA** on the right and keep link styling consistent.
- Services-heavy sites frequently use either dropdowns/mega menus *or* very polished static navbars.
  - For PC Quanti we are explicitly choosing **static navigation** (no dropdown/mega menu), so the wow factor comes from spacing, motion, and the sliding indicator.
**From `landing.love` (Landing/section patterns):**

- Strong landing pages rely on **section rhythm** (big padding, clear separators) and **short, scannable blocks**.
- Modern CTAs are typically:
  - 1 headline,
  - 1 supporting sentence,
  - 1 primary button + 1 secondary link.

**From `component.gallery` (Design system + micro-interactions):**

- Cards often use a subtle **transform hover** (e.g. `translate(4px,-4px)` style) + border change.
- Reveal animations: **fade + translateY** are common, with longer easing curves; for PC Quanti we’ll shorten timing for a sober tone.

**From `rebrand.gallery` (Brand cues):**

- “Premium” brand presentation tends to be: restrained palette, generous whitespace, and typography-led layouts.

**From `hugeicons.com` (Icon usage):**

- Consistency matters more than style: use one set across services/process/benefits; keep stroke weight consistent.

---

## 1) Visual Direction — **Light Blueprint / Technical** (locked)

**Decision:** We’ll adopt a *light blueprint* aesthetic: precise, engineering-led, minimal, and premium.

- “Blueprint” is expressed via **subtle grid/linework** + **diagram-like hero art**, not construction clichés.
- Avoid heavy textures and avoid dark-mode-only blueprint (we stay mostly light).

### 1.1 Blueprint tokens (new)

**Motif rules:**

- Use a **faint grid** (1px lines) only in:
  - Homepage hero
  - Section headers (optional)
  - CTA band (optional)
- Keep it *barely visible*: 4–8% opacity.

**Recommended CSS approach (no image assets):**

- A layered background using `linear-gradient` (grid) + `radial-gradient` (spotlight).
- Use `mask-image` (optional) to fade the motif toward edges.

### 1.2 Palette (existing, plus how to apply it)

Use existing Tailwind tokens:

- `pc-blue` (#2C02D9) as the “ink” accent
- `pc-blue-dark` for hover/active
- `pc-blue-light` for soft fills
- neutrals: `pc-neutral-{50,100,200,400,600,900}`

**Spec:**

- Primary backgrounds: white / `pc-neutral-50`
- Surfaces/cards: white with a crisp `border border-pc-neutral-200`
- Blueprint accents:
  - fine rules: `pc-blue` at low opacity
  - callouts: `pc-blue-light`
- Links: `pc-blue` with clear hover state (underline-on-hover is acceptable here)

### 1.3 Surfaces, borders, shadows

**Goal:** “drafting table” clarity.

- Borders are always 1px, neutral; accent border only on hover/active.
- Shadows should be subtle (avoid heavy drop shadows).

**Card baseline:**

- Rest: `border-pc-neutral-200 shadow-[0_1px_0_rgba(0,0,0,0.04)]`
- Hover: `border-pc-neutral-400 shadow-[0_8px_24px_rgba(17,17,17,0.08)]`

### 1.4 Typography

**Goal:** Technical confidence + readability.

- Keep Inter (already configured).
- Slightly tighter headings: `tracking-tight` / `tracking-[-0.02em]` (where appropriate).
- Comfortable body: 16–18px with 1.65–1.75 line-height.

**Hierarchy targets:**

- H1: 48–60px desktop, 36–44px mobile
- H2: 32–40px
- H3: 22–26px

**Style rules:**

- Headings: `pc-neutral-900`
- Body: `pc-neutral-600`
- Max reading width: ~60–72ch for dense text blocks

### 1.5 Spacing system

Adopt a clean “section rhythm”:

- Section padding: `py-16 md:py-24`
- Section header spacing: `mb-10 md:mb-12`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

---

## 2) Navigation (Header + Mobile)

### 2.1 Desktop header layout

**Goal:** A “WOW” navbar that still feels technical and sober: precise spacing, crisp borders, premium motion.

**WOW factors (because nav is static):**

- Perfect spacing + typography weight balance
- Scroll-state blur + blueprint rule detail
- Animated active indicator (single underline that *slides* between links)
- Engineered mobile drawer (even if desktop is static)


**Pattern:** sticky header with scroll-state + thin rules + clear active state (no dropdowns/mega menus).

**Spec:**

- Header position: `sticky top-0 z-50`
- Height: ~72–80px (align with current logo lockup)
- Background:
  - at rest: `bg-white`
  - scrolled: `bg-white/80 backdrop-blur border-b border-pc-neutral-200`
- Blueprint cue:
  - optional 1px bottom accent rule in `pc-blue` at low opacity (10–15%)
- Layout (desktop):
  - left: logo
  - middle-left: nav links (left aligned)
  - right: CTA button (Request a Call)
- Nav items:
  - consistent weight (all `font-medium`)
  - clickable area: min 40px height with `px-2 py-2`
  - **active route indicator (locked): single sliding underline**
    - one underline element that moves between items (not per-link underlines)
    - thickness: 2px (technical/blueprint rule)
    - color: `pc-blue`
    - animation behavior: should feel like a **pen flick**
      - the previous underline “snaps off/erases” quickly
      - the new underline appears immediately at the next item (very short travel)
      - recommended approach: animate with a brief scaleX-to-0 on the old position + translate + scaleX-to-1 at the new position (or equivalent)
      - timing target: 140–200ms total; easing `cubic-bezier(0.2, 0.8, 0.2, 1)`
    - **Hover behavior (locked):** indicator previews the hovered item (pen-flick follows hover). On mouse leave, it returns to the **active route** position (so the nav never lies about the current page).
  - hover:
    - link text shifts to `pc-blue`

**Static nav behavior (Services link):**

- “Services” is a **normal link** to `/services` (no dropdown).
- We compensate for discoverability with a strong services index on the Services page (see section 4.3).

**Interaction details:**

- Keep hover effects premium (underline + color shift) but do not hide navigation behind menus.
- Keyboard: focus states must be clear; no special arrow-key behaviors required.

**Acceptance criteria:**

- Visible focus rings for keyboard users.
- Active route styling for current page.
- Header does not jump layout when scroll-state activates.
- No dropdown/mega menu interactions (static nav).

**Click feedback (required): scribble circle**

**Intent:** Feels like a designer flicked their pen to the new label, then quickly circled it as confirmation.

- On click/tap of a nav item:
  1) underline does the pen-flick move to the item
  2) a quick, hand-drawn **scribble circle** animates around the clicked label (overlapping the bounds), then fades.

**Implementation details (unambiguous):**

- Rendering: an absolutely-positioned SVG overlay that is anchored to the clicked link’s bounding box.
  - Recommended: render ONE overlay component inside the `<nav>` and reposition it to the clicked link via DOMRect measurements.
- Shape: 1–2 imperfect loops (rough circle), not a perfect ellipse.
  - Use `stroke-linecap="round"` and `stroke-linejoin="round"`.
- Stroke: `pc-blue`, 2px, opacity 0.85–0.95.
- Timing:
  - draw: 220–360ms (stroke-dashoffset to 0)
  - fade: 120–180ms (opacity to 0)
  - total gesture ≤ 520ms
- Layering:
  - z-index above underline indicator, below the text if possible (or above text with low opacity so it never harms readability).
  - must not shift layout.
- Mobile:
  - trigger on tap; ensure it does not double-trigger with navigation.
  - keep the scribble subtle (avoid large overshoot outside the link hit area).
- Fallback:
  - if measurement fails, skip scribble rather than rendering in the wrong place.

This is purely decorative; must never block navigation.

### 2.2 IA improvements (recommended)

**Primary links:** Home, Services, About, Contact

**Desktop layout choice (locked):** left logo + left-aligned links + right CTA (clean consultancy classic).

**Services link behavior:**

- Desktop: “Services” is a standard link to `/services`.
- Mobile: keep the same link set (no accordion required).

**Navbar.gallery references (for intent):**

- Static category: `https://www.navbar.gallery/type/static`

We are copying the *clarity*, *spacing*, and *active-state polish* from great static navbars.

### 2.3 Mobile menu

**Pattern:** full-height sheet/drawer with soft backdrop (engineered feel).

**Spec:**

- Backdrop: `bg-black/30` with fade.
- Panel: slide from right, max width ~360px.
- Scroll lock: body content must not scroll while drawer is open.
- Focus management:
  - focus moves into the drawer on open
  - Esc closes
  - focus returns to the trigger on close
- Include CTA button (Request a Call) and contact shortcut (email/phone if available).
- Touch targets: 44px minimum.

---

## 3) Homepage Section Specs (high-impact upgrades)

### 3.1 Hero (top of page)

**Goal:** Strong positioning + immediate trust, expressed with *technical precision*.

**Layout pattern:** left-aligned content with right “visual” (diagram + micro-cards) on desktop; stacked on mobile.

**Mobile spec (critical):**

- On small screens:
  - stack: copy first, CTAs second, trust chips third, hero art last (or between copy and CTAs if it reads better).
  - reduce hero art complexity (fewer secondary lines) *visually*, but keep the same component.
  - ensure CTA row wraps cleanly and stays above the fold.
- Avoid CLS:
  - reserve space for the SVG (fixed aspect ratio container) so the page doesn’t jump as it loads.

**Content blocks:**

- Eyebrow: “UK & South Africa • Project Delivery Consultancy”
- H1: Outcome-driven promise (avoid generic “We deliver…”)
- Supporting: 1–2 sentence value statement
- Primary CTA: “Request a Call”
- Secondary CTA: “View Services” (outline)

**CTA animation (part of the sketch sequence):**

- The primary CTA should “sketch in” as part of the hero draft.
- Recommended style (choose this by default):
  - **Border-draw then fill:** outline draws (stroke-dash) → quick fill fade-in
  - Timing: 260–420ms total; keep easing consistent with the hero (`cubic-bezier(0.2, 0.8, 0.2, 1)`).
- Acceptable alternative: mask reveal (if border-draw proves visually noisy).

- Trust row: 3–5 items (e.g., “PM”, “QS”, “Contracts”, “Claims”, “Controls”) + (optional) standards like NEC/FIDIC if accurate

**Hero copy animation rule (to allow rewording without redesign):**

- **Hard rule:** Headline/subheadline/CTA remain normal HTML (editable text; not SVG outlines).
- They must animate **in sync** with the SVG sketch sequence using **Framer Motion**:
  - one consistent reveal style across all three (recommended: **mask reveal** or **clip-path wipe** for a drafted feel)
  - timing: stagger within the 1600–1900ms master sequence
- Visual intent: it should *feel* like the words are being drafted onto the drawing sheet.
- Copy safety: design must tolerate rewording (do not rely on exact character counts; use max-width + responsive type clamps).

**Hero background (light blueprint):**

- Apply a faint grid + soft radial highlight behind the hero.
- Grid must remain subtle (4–8% opacity).

**Hero visual (explicit decision: diagram-style):**

- Replace stock photography with a **technical diagram-style SVG/illustration** that *animates like an architect sketching*:
  - Use a single inline SVG (no video) so it stays crisp and lightweight.
  - Visual style:
    - thin strokes (1.5–2px), rounded caps/joins (`stroke-linecap="round" stroke-linejoin="round"`)
    - primary lines: `pc-blue`; secondary lines: `pc-neutral-400`
    - elements: nodes, connectors, 1–2 dimension lines, and pill callouts
    - callout labels (examples): “Scope”, “Cost”, “Programme”, “Risk”, “Contracts”
  - **Sketch animation (required):**
    - Animate path draw-in using `stroke-dasharray` + `stroke-dashoffset`.
    - Mixed blueprint plan + system diagram feel:
      - include a simple “sheet frame”/border, a couple of dimension lines, and an internal node/connector cluster.
    - Stagger groups for a “draw order” feel (full sketch on first load only):
      1) grid fade-in (0–200ms)
      2) sheet frame / main structure lines (200–1200ms)
      3) internal network + secondary details (600–1600ms)
      4) callout pills fade/slide in (900–1700ms)
    - Timing: 1600–1900ms total; easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.
    - On subsequent hero re-entry: run only a simplified fade/translate (and optionally 1–2 short accent strokes), not the full draw.
    - Keep it clean (no bouncing, no overshoot, no jitter).
  - **Reduced motion:** client-approved always-on animation; do not disable. Instead, keep easing gentle and avoid rapid flashes/jitter.
- Keep it abstract (no sensitive project imagery).

**Optional micro-cards (no invented numbers):**

- 2–3 small cards with outcomes as text-only:
  - “Cost control”
  - “Programme certainty”
  - “Commercial assurance”

### 3.2 Services overview

**Pattern:** card grid with icon + headline + 1-line description + “Learn more”.

**Spec:**

- 2x3 grid desktop, 1x5/6 mobile.
- Each card uses:
  - subtle border
  - hover elevate (`shadow-sm` → `shadow-md`) + translate-y -1 (reduced-motion safe)
  - icon or monogram in `pc-blue`.

### 3.3 “How we work” (process)

**Pattern:** 3–5 step timeline.

**Steps example:** Discover → Plan → Deliver → Control → Close-out

**Spec:**

- Each step has:
  - step number pill
  - short title
  - 1–2 lines description

### 3.4 Proof / credibility strip

**Pattern:** trust bar.

**Options (pick 1):**

- “What you get” bullets (fast)
- Logos (only if real)
- Standards/approach (e.g., NEC/FIDIC experience) if accurate

### 3.5 CTA section (bottom)

**Pattern from CTA galleries:** simple, bold CTA band; for blueprint style we keep it *high contrast but technical*.

**Spec (light blueprint variant):**

- Use a bordered panel rather than a big dark slab:
  - Background: `bg-white`
  - Border: `border border-pc-neutral-200`
  - Optional motif: faint grid in the background (same as hero, but even lighter)
- Accent elements:
  - a left-side “rule” line in `pc-blue` (2px) or a top accent line
  - optional small diagram icon/sigil
- Buttons:
  - primary: solid `pc-blue`
  - secondary: outline button or inline email link

**Copy template:**

- Heading: “Need commercial clarity on your project?”
- Body: “Tell us what you’re building and we’ll suggest the best support package.”
- Primary: “Request a Call”
- Secondary: “Email us”

**Alternative (mixed theme):**

- If we want occasional contrast sections: use `pc-neutral-900` with subtle blueprint linework overlay, but keep this to max 1–2 sections per page.

---

## 4) Services Pages

### 4.1 Services overview page (critical if no dropdown nav)

**Goal:** Make services discoverable without a mega menu.

**Spec:**

- Above the fold on `/services`, include a **Services Index Strip**:
  - a horizontal (wrap) list of all services as blueprint-style chips/pills
  - each chip links to the service detail page
  - active/hover state uses `pc-blue` underline or light fill
- Below the strip, render the Services grid (cards) and a short “How to choose” panel.

### 4.2 Service detail page structure

**Pattern:** hero + outcomes + deliverables + FAQ + CTA.

**Spec:**

1. **Service hero**
   - Title
   - 2–3 bullet outcomes
   - CTA row
2. **When to use this service**
   - 3 cards (common triggers)
3. **What we deliver**
   - checklist style, grouped
4. **How we work** (reused component)
5. **FAQ** (accordion)
6. **CTA** (reused)

### 4.2 Cross-linking

- Each service page links to 2 related services (“Often paired with…”)

---

## 5) About Page

**Pattern:** founder-friendly consultancy about page.

**Spec:**

- Mission + values
- “Why PC Quanti” (3 cards)
- Approach section (process)
- CTA

---

## 6) Contact Page / Conversion

### 6.1 Form UX

**Pattern:** short form (conversion-first).

Fields (minimum):

- Name
- Email
- Company (optional)
- Message
- Service of interest (select)

**Spec:**

- Inline validation (non-annoying)
- Success state: clear confirmation + next steps
- Fallback: mailto link visible

---

## 7) Motion & Micro-interactions (Animations)

### 7.1 Motion principles

- Default: subtle and fast (150–250ms)
- Only animate:
  - opacity
  - transform
  - background-color
- Client-approved always-on animation (do not disable based on `prefers-reduced-motion`).

### 7.2 Recommended animations

Common patterns (adapted for a serious B2B tone):

- **Header scroll state:** background blur + border fades in after 8–16px scroll.
- **Section reveal:** on enter viewport, fade up (8–12px) once.
- **Card hover:** slight lift (1–2px) + shadow + border darken.
- **Button hover:** background shift; optional micro-scale (≤ 1.02).

**Blueprint hero sketch animation (signature motion):**

- Implement as SVG line-draw animation (stroke-dash):
  - Each drawable path gets its own `pathLength` and dash animation.
  - Technique: set `stroke-dasharray: <len>; stroke-dashoffset: <len>;` then animate dashoffset to `0`.
- **Two-tier behavior (required):**
  1) **First load (full sketch):**
     - Run the full staged draw order (grid → main frame → secondary detail → callouts).
     - Duration: 1600–1900ms total.
  2) **Re-enter viewport (simplified):**
     - Do **not** re-run the full dash sequence.
     - Instead, do a light re-introduction:
       - quick fade/translate on the whole SVG group (200–300ms), and optionally
       - a short accent draw on 1–2 small paths only (300–500ms) if desired.
- **Persist “has animated” state:**
  - Use `sessionStorage` key (e.g., `pcq.heroSketchPlayed=1`) so it plays fully once per tab session.
  - Use IntersectionObserver to detect re-entry and apply the simplified animation class.
- Use *one* easing curve across sequences: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Must be deterministic and smooth (no random noise / shaky hand effect).

**Implementation options:**

- **Framer Motion (preferred):** use it to sequence the hero sketch + HTML copy + CTA so everything feels like one drafted animation.
- Keep animations transform/opacity/clip-path; avoid layout-thrashing.
- CSS keyframes can still be used for simpler hover/underline effects.

---

## 8) Iconography

**Spec:**

- Use a single icon set style (outline or solid, not mixed).
- Icons used for:
  - services
  - bullet highlights
  - process steps

If adding a library:

- Prefer `lucide-react` for consistency and tree-shaking.

---

## 9) Components to Build / Upgrade (Implementation Checklist)

### 9.1 Layout & nav

- `Header` v2:
  - sticky + scroll state
  - sliding indicator (pen-flick) + click scribble circle
  - static nav (no dropdowns)
- `MobileMenuDrawer` (engineered: scroll lock, focus management, clear CTA)

### 9.2 Landing sections

- `Hero` v2 (split layout + trust row + blueprint background)
- `BlueprintHeroArt` (inline SVG + stroke-dash sketch animation; always-on animation per client sign-off)
- `ServicesGrid` (icon cards)
- `ProcessTimeline`
- `ProofStrip`
- `CTASection` (reusable)

### 9.3 Motion utilities

- `Reveal` wrapper (IntersectionObserver)
- (Remove) `usePrefersReducedMotion` hook (animation is always-on per client sign-off).

---

## 10) QA / Acceptance Criteria

### 10.1 Mobile-first UX acceptance criteria (non-negotiable)

- **Touch targets:** min 44x44px for all tappable controls.
- **No horizontal scroll** at any breakpoint.
- **Header:**
  - CTA remains accessible on mobile (in drawer and/or persistent button).
  - Mobile drawer opens/closes smoothly; background scroll is locked while open.
- **Hero:**
  - Text remains readable without overly long line lengths.
  - Blueprint hero art scales cleanly; does not cause layout shift.
  - Animation remains smooth on mid-range phones; full sketch plays once per session; simplified on re-entry.
- **Performance:** we’re aiming for premium motion and visuals; still avoid unnecessary heavy libraries and keep interactions smooth on modern mid/high-end phones.

### 10.2 General acceptance criteria

- Lighthouse Accessibility ≥ 90
- Keyboard navigation works for header + mobile drawer
- Motion: **client-approved always-on animation** (do not disable based on `prefers-reduced-motion`).
  - **Known Accessibility Limitation:** This approach conflicts with WCAG Success Criterion 2.3.3 (Animation from Interactions) Level AAA, which recommends respecting user motion preferences. This decision has been explicitly approved by the client.
  - **Mitigation Requirements:**
    1. All animations must be evaluated and confirmed as "smooth and non-violent" with no rapid flashing, parallax, or large-scale motion effects.
    2. Animations should use gentle easing curves (e.g., `cubic-bezier(0.2, 0.8, 0.2, 1)`) and durations between 150-500ms for most effects.
    3. Hero sketch animation must be deterministic and smooth with no jittery or shaky effects.
  - **Fallback/Response Plan:** If user complaints arise regarding motion sickness or accessibility concerns:
    1. Triage: Assess severity and frequency of complaints.
    2. Mitigation: Evaluate adding an opt-out toggle or cookie-based preference.
    3. Escalation: Review with client for potential implementation of `prefers-reduced-motion` support.
- Visual consistency: spacing rhythm + typography hierarchy applied across pages
- No invented client logos/numbers

---

## Notes / Limitations

- This spec is based on widely adopted patterns from modern design galleries (curated landing/nav/CTA/motion systems). If you want, share 5–10 specific reference URLs or screenshots from the provided galleries and I will refine this spec to match them precisely (layout, spacing, animation timing, component anatomy).
