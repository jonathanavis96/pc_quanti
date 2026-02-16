# PLAN 2 — Homepage Sections (Services Grid, Process, Proof, CTA)

## Objective

Build the four core homepage sections defined in `Specs.md` section 9.2: Services Grid, Process Timeline, Proof Strip, and CTA Section. These should align with the blueprint/engineering aesthetic and reuse consistent spacing, typography, and motion patterns across the landing page.

## Scope

- Add/upgrade homepage sections in `app/page.tsx`
- Create or update section components
- Ensure visual consistency (cards, icons, spacing, rules)
- Provide reusable CTA section component

## Skills to read (brain/skills)

- `brain/skills/SUMMARY.md`
- `brain/skills/index.md`
- `brain/skills/domains/frontend/react-patterns.md`
- `brain/skills/domains/websites/architecture/section-composer.md`
- `brain/skills/domains/websites/design/spacing-layout.md`
- `brain/skills/domains/websites/design/typography-system.md`
- `brain/skills/domains/websites/copywriting/cta-optimizer.md`
- `brain/skills/domains/frontend/accessibility-patterns.md`

## Files to inspect / likely touch

- `app/page.tsx`
- `src/components/ServicesGrid.tsx` (or create)
- `src/components/ProcessTimeline.tsx` (or create)
- `src/components/ProofStrip.tsx` (or create)
- `src/components/CTASection.tsx` (or create)
- `src/components/Card.tsx` (if used for consistent surface)
- `src/components/Container.tsx`
- `src/components/index.ts`
- `app/globals.css` (if section-specific styling is required)

## Design requirements (condensed from Specs.md)

**Services Grid**
- Icon cards with crisp borders: `border border-pc-neutral-200` on white
- 2–3 columns responsive, with consistent card padding
- Service titles and brief outcome-driven blurbs
- Use a single icon set style (prefer `lucide-react` if adding)

**Process Timeline**
- 3–5 steps max, clear sequence
- Use consistent step markers (dots or numbered chips)
- Subtle rule/line in `pc-neutral-200` or `pc-blue` low opacity

**Proof Strip**
- Compact band with proof points or client trust signals
- Light background or bordered strip for contrast
- Keep copy short and factual (e.g., "10+ years", "NEC expertise")

**CTA Section**
- Reusable band component
- Headline + short supporting line + primary CTA button
- Optional faint grid backdrop (4–8% opacity) as per Specs

## Implementation plan (step-by-step)

### What a pass looks like (definition of done)

- All four sections render in the correct order with consistent spacing and typography.
- Cards/steps align cleanly across breakpoints (no overflow, no uneven heights).
- Proof strip reads clearly and remains visually distinct without overpowering other sections.
- CTA section is reusable and matches the primary button styling used elsewhere.

### If it fails (what to do)

- If any section breaks layout: reduce grid columns on smaller breakpoints, verify container widths, and remove any fixed heights.
- If card heights mismatch: use consistent padding and ensure text blocks have comparable lengths or add flex-based equal-height styling.
- If icon styling is inconsistent: enforce a single icon set and normalize size/line weight.
- If CTA styling is off: align button component usage with existing header CTA and verify typography scale.


### Atomic task breakdown (IMPLEMENTATION_PLAN style)

- [ ] **2.1** Audit current homepage sections [Read: `brain/skills/domains/websites/architecture/section-composer.md`]
  - **Goal:** Confirm existing structure and how `Container`/`Card` are used on the homepage.
  - **AC:** Current homepage sections and layout patterns are documented for reference.

- [ ] **2.2** Build `ServicesGrid` component [Read: `brain/skills/domains/websites/design/spacing-layout.md`, `brain/skills/domains/frontend/react-patterns.md`]
  - **Goal:** Create a responsive services grid with icon cards and aligned typography.
  - **AC:** Services grid renders 1–3 columns responsively with consistent card padding and borders.

- [ ] **2.3** Build `ProcessTimeline` component [Read: `brain/skills/domains/websites/design/typography-system.md`]
  - **Goal:** Add a clear, sequenced process timeline with readable steps.
  - **AC:** Process steps render in sequence and switch layout appropriately across breakpoints.

- [ ] **2.4** Build `ProofStrip` component [Read: `brain/skills/domains/websites/design/spacing-layout.md`]
  - **Goal:** Add a compact proof band with concise trust signals.
  - **AC:** Proof strip is visually distinct, minimal, and consistent with site typography.

- [ ] **2.5** Build `CTASection` component [Read: `brain/skills/domains/websites/copywriting/cta-optimizer.md`]
  - **Goal:** Provide a reusable CTA band with strong hierarchy and aligned button styling.
  - **AC:** CTA section renders headline + supporting text + primary button and can be reused.

- [ ] **2.6** Compose homepage sections [Read: `brain/skills/domains/websites/architecture/section-composer.md`]
  - **Goal:** Order sections as Services → Process → Proof → CTA with consistent spacing.
  - **AC:** Homepage renders all four sections in correct order with consistent vertical rhythm.

- [ ] **2.7** QA + polish [Read: `brain/skills/domains/frontend/accessibility-patterns.md`]
  - **Goal:** Ensure responsive stability and alignment of components.
  - **AC:** No layout breaks across breakpoints; icons and cards aligned; CTA matches header CTA styling.

## Acceptance criteria

- Homepage includes Services Grid, Process Timeline, Proof Strip, and CTA sections in the correct order.
- Services cards are consistent in height, borders, and spacing.
- Process steps are clearly sequenced and readable on mobile and desktop.
- Proof strip looks distinct but minimal and professional.
- CTA section is reusable and visually prominent.
- No layout breaks across common breakpoints.

## Testing notes

- Manual verification in mobile (≤640px), tablet (~768px), and desktop (≥1024px).
- Validate typography scale consistency with existing hero section.
