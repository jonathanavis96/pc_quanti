# PC Quanti — Content Merge Implementation Plan

**Status:** In progress — visual rebrand complete, content merge outstanding
**Last Updated:** 2026-03-10 21:50:00

---

## Context

The visual rebrand (blue → gold/black) is complete. All that remains is
replacing placeholder text with authentic content from the live site.

**Source content:** `docs/scraped-live-site-copy.md`
**Contact:** info@pcquanti.co.za | 082 863 2154 | WhatsApp +27828632154
**Company:** PC Quanti (not Ltd) | Founded 2020

---

## ✅ COMPLETED (this session)

- [x] All `pc-blue` → `pc-gold` CSS classes renamed
- [x] Header pitch black (#000000), no transparency on scroll
- [x] No hardcoded blue values remaining
- [x] Tailwind config + globals.css updated
- [x] Buttons section-aware (gold on dark, dark on light)
- [x] New logos, favicons, OG image placed
- [x] `src/config/site.ts` — correct contact info, founded 2020
- [x] `src/components/Footer.tsx` — correct contact info
- [x] Live site copy scraped to `docs/scraped-live-site-copy.md`
- [x] `npx next build` passes

---

## ⚠️ OUTSTANDING — Content Merge Seeds

Run these sequentially with `/ouroboros:run`. Each is small (2-3 ACs).

### Seed 1: Homepage Hero + FAQ

```yaml
goal: >
  Update the PC Quanti homepage hero content and FAQ section with
  authentic copy from the live site (docs/scraped-live-site-copy.md).

context: >
  Next.js site at /home/grafe/code/pc-quanti. The homepage is app/page.tsx
  which passes props to src/components/Hero.tsx. The FAQ component is
  src/components/FAQ.tsx but questions are defined in app/page.tsx.
  Source content is in docs/scraped-live-site-copy.md under HOME PAGE section.
  Contact email is info@pcquanti.co.za. Phone is 082 863 2154.
  Company name is PC Quanti. Founded 2020.
  Do NOT change component structure, only text strings and metadata.
  Do NOT add prefers-reduced-motion. Do NOT modify rovodev files.

constraints:
  - Only modify text strings and metadata, not component structure
  - Do NOT modify rovodev directories
  - Contact email info@pcquanti.co.za everywhere
  - Site must build with npx next build after changes

acceptance_criteria:
  - >
    AC 0: app/page.tsx hero headline and subheadline updated with authentic
    positioning from docs/scraped-live-site-copy.md HOME PAGE section.
    Headline conveys engineering and construction management consultancy.
    Subheadline mentions full project lifecycle, nuclear, power generation,
    oil and gas, infrastructure. SEO metadata also updated.
  - >
    AC 1: FAQ questions in app/page.tsx updated to cover NEC3 NEC4 FIDIC
    GCC JBCC contract frameworks, international experience across South
    Africa and UK, sectors served including nuclear oil and gas power
    generation and infrastructure, and team qualifications.
  - >
    AC 2: npx next build completes successfully.

ontology_schema:
  name: "HomepageContent"
  description: "Homepage hero and FAQ content update"
  fields:
    - name: "hero-text"
      field_type: "string"
      description: "Hero headline and subheadline"

metadata:
  seed_id: "content-seed-1-homepage"
  ambiguity_score: 0.1
```

### Seed 2: Component Text (ProofStrip, TrustBar, SectorsTrustGrid, CTA, ServicesGrid, ProcessTimeline)

```yaml
goal: >
  Update shared component text in the PC Quanti site to reflect
  authentic live site content from docs/scraped-live-site-copy.md.

context: >
  Next.js site at /home/grafe/code/pc-quanti. These components have
  placeholder text that needs replacing with live site content.
  Source is docs/scraped-live-site-copy.md. Key changes needed:
  - ProofStrip still says lean model and corporate overhead
  - TrustBar needs NEC3 NEC4 FIDIC GCC JBCC contract frameworks
  - SectorsTrustGrid needs nuclear, oil and gas, power generation, infrastructure
  - CTASection needs updated heading and body
  - ServicesGrid card descriptions need enriching
  - ProcessTimeline steps need polishing
  - Hero.tsx badge text needs updating to reflect sectors
  Do NOT change component structure. Do NOT modify rovodev files.
  Do NOT add prefers-reduced-motion.

constraints:
  - Only modify text strings, not component structure or props
  - Do NOT modify rovodev directories
  - Site must build with npx next build after changes

acceptance_criteria:
  - >
    AC 0: src/components/ProofStrip.tsx no longer mentions lean model
    or corporate overhead. Proof points reflect authentic experience from
    live site. src/components/TrustBar.tsx stats include NEC3 NEC4 FIDIC
    GCC JBCC. src/components/Hero.tsx badge text updated to reflect
    sectors served.
  - >
    AC 1: src/components/SectorsTrustGrid.tsx sectors updated to nuclear,
    oil and gas, power generation, infrastructure with descriptions from
    live site. src/components/CTASection.tsx heading and body updated.
    src/components/ServicesGrid.tsx descriptions enriched from live site.
    src/components/ProcessTimeline.tsx steps polished.
  - >
    AC 2: npx next build completes successfully.

ontology_schema:
  name: "ComponentText"
  description: "Shared component text updates"
  fields:
    - name: "proof-points"
      field_type: "list"
      description: "Trust and proof point text strings"

metadata:
  seed_id: "content-seed-2-components"
  ambiguity_score: 0.1
```

### Seed 3: About Page

```yaml
goal: >
  Rewrite the About page with authentic content from the live site
  (docs/scraped-live-site-copy.md ABOUT US and TEAM sections).

context: >
  Next.js site at /home/grafe/code/pc-quanti. The About page is
  app/about/page.tsx. Source content is in docs/scraped-live-site-copy.md
  under ABOUT US PAGE and TEAM PAGE and WHY PC QUANTI PAGE sections.
  The page should include: company intro and mission/philosophy,
  Phil Coleman bio from the team page, Why PC Quanti differentiators
  from the why-pc-quanti page. The Professional Standards section
  should mention NEC3 NEC4 FIDIC GCC JBCC. Founded 2020.
  Do NOT change the page component structure or layout.
  Do NOT modify rovodev files. Do NOT add prefers-reduced-motion.

constraints:
  - Only modify text strings and metadata, not component structure
  - Do NOT modify rovodev directories
  - Company name PC Quanti, founded 2020
  - Site must build with npx next build after changes

acceptance_criteria:
  - >
    AC 0: app/about/page.tsx rewritten with authentic content from live
    site. Includes company intro with mission and philosophy. Phil bio
    from live site team page replaces placeholder story. Why PC Quanti
    differentiators use content from live site why-pc-quanti page.
    Professional standards mention NEC3 NEC4 FIDIC GCC JBCC. SEO
    metadata updated.
  - >
    AC 1: npx next build completes successfully.

ontology_schema:
  name: "AboutPage"
  description: "About page content rewrite"
  fields:
    - name: "company-story"
      field_type: "string"
      description: "Company origin and mission"

metadata:
  seed_id: "content-seed-3-about"
  ambiguity_score: 0.1
```

### Seed 4: Service Pages

```yaml
goal: >
  Update all service page content with authentic copy from the live
  site (docs/scraped-live-site-copy.md SERVICES PAGE section).

context: >
  Next.js site at /home/grafe/code/pc-quanti. Service pages to update:
  - app/services/page.tsx (overview)
  - app/services/project-management/page.tsx
  - app/services/quantity-surveying/page.tsx
  - app/services/contract-administration/page.tsx
  - app/services/claims-management/page.tsx
  - app/services/project-controls/page.tsx
  - app/services/risk-management/page.tsx

  Source content is in docs/scraped-live-site-copy.md SERVICES PAGE section.
  Map live site services to dev site categories:
  - Outage Management + Construction Management → merge into Project Management
  - Planning → merge into Project Controls
  - Contract Management → merge into Contract Administration
  - Commercial Management → merge into Quantity Surveying
  - Dispute Resolution → merge into Claims Management

  Do NOT change page structure or component props.
  Do NOT modify rovodev files. Do NOT add prefers-reduced-motion.
  Contact email info@pcquanti.co.za.

constraints:
  - Only modify text strings and metadata, not page structure
  - Do NOT modify rovodev directories
  - Do NOT remove existing pages or routes
  - Site must build with npx next build after changes

acceptance_criteria:
  - >
    AC 0: app/services/page.tsx overview text updated from live site
    services intro mentioning NEC3 NEC4 FIDIC GCC JBCC and EPC track
    record. At least 3 individual service pages have enriched overview
    descriptions incorporating live site content.
  - >
    AC 1: All 6 individual service pages have updated SEO metadata
    reflecting the enriched content. Overview cards contain authentic
    descriptions from live site.
  - >
    AC 2: npx next build completes successfully.

ontology_schema:
  name: "ServicePages"
  description: "Service page content updates"
  fields:
    - name: "service-descriptions"
      field_type: "list"
      description: "Service overview descriptions"

metadata:
  seed_id: "content-seed-4-services"
  ambiguity_score: 0.15
```

### Seed 5: Contact Page + Layout Metadata

```yaml
goal: >
  Update contact page and global layout metadata with correct
  contact details and SEO-optimized descriptions.

context: >
  Next.js site at /home/grafe/code/pc-quanti. Files to update:
  - app/contact/page.tsx - contact details and form text
  - app/layout.tsx - global metadata description

  Contact details from live site:
  - Email: info@pcquanti.co.za
  - Phone: 082 863 2154
  - WhatsApp: +27828632154

  The contact page currently has placeholder phone +27 82 345 6789
  and may still have .com references. Layout metadata description
  should reflect the full range of services and sectors.
  Do NOT change form structure. Do NOT modify rovodev files.

constraints:
  - Only modify text strings and metadata
  - Do NOT modify rovodev directories
  - Email must be info@pcquanti.co.za
  - Phone must be 082 863 2154
  - Site must build with npx next build after changes

acceptance_criteria:
  - >
    AC 0: app/contact/page.tsx has correct contact details
    info@pcquanti.co.za and 082 863 2154. WhatsApp link uses
    +27828632154. No placeholder phone or .com email remaining.
    Page subtitle and direct access text updated.
  - >
    AC 1: app/layout.tsx metadata description updated to reflect
    engineering and construction management consultancy across
    nuclear, power generation, oil and gas, and infrastructure
    sectors. No remaining placeholder descriptions.
  - >
    AC 2: npx next build completes successfully. Grep confirms
    no remaining pcquanti.com references in app/ or src/ dirs.

ontology_schema:
  name: "ContactAndMetadata"
  description: "Contact page and global metadata updates"
  fields:
    - name: "contact-email"
      field_type: "string"
      description: "info@pcquanti.co.za"

metadata:
  seed_id: "content-seed-5-contact"
  ambiguity_score: 0.05
```

---

## Execution Order

Run seeds 1-5 sequentially. Each takes ~2-5 minutes with Sonnet.

1. **Seed 1** — Homepage hero + FAQ (~2 min)
2. **Seed 2** — Component text (~3 min)
3. **Seed 3** — About page (~2 min)
4. **Seed 4** — Service pages (~4 min, largest)
5. **Seed 5** — Contact + layout metadata (~2 min)

After all 5: final `npx next build` verification.

---

## Previous Plan Archive

The original implementation plan (Phases 0-6) has been completed.
See git history for the full plan that built the MVP site.
