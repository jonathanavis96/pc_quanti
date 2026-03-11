# PC Quanti — Ouroboros Seeds

> Generated: 2026-03-11 from Phil meeting interview session.
> Run Seed 1 first, then Seed 2 (depends on Seed 1's service config).

---

## Seed 1: Services Overhaul (Core Data Model)

```yaml
goal: >
  Restructure PC Quanti website from 6 services to 9 services matching the
  current live site (pcquanti.co.za/services), removing Outage Management as
  standalone and merging its content into PM, Construction Management, and
  Planning. Update all components that reference the services config.

constraints:
  - Next.js 14 + TypeScript + Tailwind CSS
  - GitHub Pages static export (no SSR)
  - Source of truth for services is pcquanti.co.za/services
  - Scrape live site descriptions for 3 new services (Construction Management, Contract Management, Commercial Management)
  - Keep existing content for 4 matching services (PM, QS, Contract Administration, Risk Management)
  - Merge Claims Management content into relevant services (do not discard)
  - Merge Project Controls content into Planning service (rename/absorb)
  - Merge Outage Management content into PM, Construction Management, and Planning
  - PM description must change "turnkey" to "comprehensive"
  - Do not modify files in */rovodev/ directories
  - Motion animations must remain always-on (no prefers-reduced-motion disable)

acceptance_criteria:
  - src/config/site.ts contains exactly 9 services in order: Project Management, Planning, Construction Management, Contract Administration, Contract Management, Quantity Surveying, Commercial Management, Risk Management, Dispute Resolution Adjudication and Arbitration
  - Each service has a slug, name, and description
  - Each of the 9 services has an individual detail page at /services/[slug]
  - 3 new service pages (Construction Management, Contract Management, Commercial Management) have content scraped from live site
  - Claims Management content is merged into relevant existing services (not lost)
  - Project Controls content is merged into Planning service
  - Outage Management content is incorporated into PM, Construction Management, and Planning descriptions
  - Hero skill tags updated to 9 abbreviated service names in correct order: PM, Planning, Construction, Contract Admin, Contract Mgmt, QS, Commercial, Risk, Disputes
  - ServicesGrid component renders all 9 services
  - Contact page dropdown lists General Enquiry + all 9 services
  - Footer services list shows all 9 services with links
  - Site builds successfully with next build (static export)
  - No references to old Claims Management or Project Controls slugs remain as broken links

ontology_schema:
  name: ServiceConfig
  description: PC Quanti service data model driving all service-related UI
  fields:
    - name: services
      type: array
      description: Ordered list of 9 service objects
    - name: service.name
      type: string
      description: Full display name of the service
    - name: service.slug
      type: string
      description: URL slug for routing (/services/[slug])
    - name: service.description
      type: string
      description: Service description text for cards and SEO
    - name: service.abbreviation
      type: string
      description: Short name for hero pill tags
    - name: service.icon
      type: string
      description: Icon identifier for the service card

evaluation_principles:
  - name: data_integrity
    description: All 9 services present with correct names, order, slugs, and descriptions
    weight: 0.3
  - name: content_preservation
    description: No existing content lost — Claims, Project Controls, Outage Management content merged appropriately
    weight: 0.25
  - name: consistency
    description: All components (hero, grid, footer, dropdown, detail pages) reference the same service config
    weight: 0.25
  - name: build_success
    description: Static export builds without errors, no broken links
    weight: 0.2

exit_conditions:
  - name: all_services_rendered
    description: All 9 services appear correctly across hero, grid, footer, dropdown, and detail pages
    criteria: Visual and build verification pass
  - name: no_broken_links
    description: No references to removed service slugs (claims-management, project-controls)
    criteria: grep finds zero references to old slugs in rendered output
  - name: static_build_passes
    description: next build completes without errors
    criteria: Exit code 0 from build command
```

---

## Seed 2: Site-Wide Updates (Hero, Footer, Contact, Projects, Team, Legal, Mobile Fix, Images)

```yaml
goal: >
  Implement all remaining Phil meeting changes: hero text and typewriter country
  animation, footer overhaul (LinkedIn, WhatsApp, legal links), contact page
  updates (text, phone format, WhatsApp, formspree), new /projects page with 2
  projects and SEO-optimised images, team section reframing as Management Core
  Team, 3 legal pages, mobile trust banner fix, and project image processing.

constraints:
  - Next.js 14 + TypeScript + Tailwind CSS
  - GitHub Pages static export
  - Seed 1 must be completed first (depends on 9-service config)
  - WhatsApp icon placement: footer and contact page only (NOT floating)
  - WhatsApp icon: green, official default logo
  - Phone tel: link for calling only, separate from WhatsApp
  - Country animation style: typewriter reveal (types each name left-to-right, transitions to next)
  - Mobile trust banner: 2x2 grid layout on mobile
  - Project images: convert to WebP, SEO-friendly kebab-case names, keep 1- through 4- prefix
  - Legal pages: use live site content as baseline, research POPIA/SA requirements, improve wording
  - Team images: blocked (awaiting diverse representation photos) — do not add placeholder team images
  - Do not modify files in */rovodev/ directories

acceptance_criteria:
  # Hero
  - Hero headline reads "Engineering & Construction Consulting Services"
  - Hero subtitle shows "International Service" as static text
  - Typewriter animation cycles through: South Africa, United Kingdom, Canada, USA, Africa, Asia, Americas, Europe, Middle East
  - Typewriter animation is smooth, continuous, fairly fast rotation speed

  # Footer
  - LinkedIn links to https://www.linkedin.com/company/pc-quanti/
  - Footer lists all 9 services with working links
  - Footer contains Privacy Policy, Terms & Conditions, Disclaimer links
  - Footer contains WhatsApp icon (green) linking to wa.me/+27828632154

  # Contact Page
  - Intro text reads "Tell us about your requirements and we'll respond within 24 hours."
  - Phone displayed as +27 82 863 2154 with tel: link for calling
  - WhatsApp icon (green) in contact info section, separate from phone
  - Formspree configured to send to info@pcquanti.co.za
  - Service dropdown contains General Enquiry + 9 services

  # Projects Page
  - /projects page exists and is accessible from navigation
  - Page title is "Key Projects"
  - 2 projects displayed: PTR Tanks and Steam Generator (Koeberg)
  - Each project has heading, sector, contract details, services provided, description
  - Content optimised for SEO
  - Project images converted to WebP with SEO-friendly filenames

  # Image Processing
  - All project images in docs/images/projects/ renamed to SEO-friendly kebab-case
  - All images converted to .webp format
  - Windows Zone.Identifier files removed
  - 1- through 4- prefix retained on all filenames

  # Team
  - Section heading changed to "Management Core Team"
  - Intro paragraph explaining expandable team model (not a body shop, department heads, repertoire of associates)
  - Individual bios updated with subtle department head / oversight emphasis

  # Legal Pages
  - /privacy-policy page exists with POPIA-compliant content
  - /terms-conditions page exists with SA-appropriate terms
  - /disclaimer page exists with professional services disclaimer
  - All legal pages use live site content as baseline, improved for completeness

  # Mobile Fix
  - TrustBar renders as 2x2 grid on mobile viewports
  - No horizontal overflow on mobile
  - Trust items wrap correctly with readable text

  # Build
  - Site builds successfully with next build (static export)
  - All new routes accessible and rendering

ontology_schema:
  name: SiteUpdates
  description: Cross-cutting site update domain covering hero, footer, contact, projects, team, legal, mobile
  fields:
    - name: hero
      type: object
      description: Hero section config (headline, subtitle, country ticker list)
    - name: countries
      type: array
      description: List of country/region names for typewriter animation
    - name: projects
      type: array
      description: Key project showcase entries with images and metadata
    - name: project.heading
      type: string
      description: Project title and context
    - name: project.images
      type: array
      description: WebP images with SEO filenames for the project
    - name: legalPages
      type: array
      description: Legal page routes and content (privacy, terms, disclaimer)
    - name: teamIntro
      type: string
      description: Management Core Team intro paragraph

evaluation_principles:
  - name: completeness
    description: All meeting notes items implemented — nothing missed
    weight: 0.3
  - name: mobile_responsive
    description: Trust banner and all new components work on mobile viewports
    weight: 0.2
  - name: seo_quality
    description: Image filenames, project content, and page metadata optimised for search
    weight: 0.15
  - name: legal_accuracy
    description: Legal pages are POPIA-compliant and appropriate for SA engineering consultancy
    weight: 0.15
  - name: visual_consistency
    description: New elements match existing design system (Tailwind, motion, typography)
    weight: 0.1
  - name: build_success
    description: Static export builds and all routes render correctly
    weight: 0.1

exit_conditions:
  - name: all_changes_implemented
    description: Every item from the meeting notes is addressed
    criteria: Checklist verification against docs/PHIL_MEETING_NOTES_2026-03-11.md
  - name: mobile_verified
    description: TrustBar 2x2 grid works on mobile viewport
    criteria: No horizontal overflow at 375px viewport width
  - name: static_build_passes
    description: next build completes without errors
    criteria: Exit code 0 from build command
  - name: all_routes_accessible
    description: /projects, /privacy-policy, /terms-conditions, /disclaimer all render
    criteria: Pages return valid HTML with expected content
```
