# Phil Meeting Notes — 2026-03-11

> 1-hour meeting capturing changes, updates, and additions for the PC Quanti website rebuild.
> Note: New service images will be blank placeholders — images to be provided later.

---

## 1. Services — Alignment & Ordering

### 1.1 The 9 Services (source of truth: current live site)

The current live site (`pcquanti.co.za/services`) is the **source of truth**. It lists 10 services; Outage Management is removed as standalone and its content merged into relevant services, leaving **9 services in this order:**

| # | Service Name | Slug |
|---|---|---|
| 1 | **Project Management** | `/services/project-management` |
| 2 | **Planning** | `/services/planning` |
| 3 | **Construction Management** | `/services/construction-management` |
| 4 | **Contract Administration** | `/services/contract-administration` |
| 5 | **Contract Management** | `/services/contract-management` |
| 6 | **Quantity Surveying** | `/services/quantity-surveying` |
| 7 | **Commercial Management** | `/services/commercial-management` |
| 8 | **Risk Management** | `/services/risk-management` |
| 9 | **Dispute Resolution, Adjudication and Arbitration** | `/services/dispute-resolution` |

### 1.2 Outage Management — Merge (not standalone)

- **Remove** Outage Management as a standalone service page
- **Incorporate** its content (plant shutdown turnarounds, 24/7 operations, tight deadlines, stakeholder interface management) into the text of other relevant services where applicable, particularly:
  - Project Management (turnkey delivery includes outage/shutdown work)
  - Construction Management (on-site execution during outages)
  - Planning (outage scheduling, critical path for shutdowns)

### 1.3 Service Naming Changes

| Current | New |
|---|---|
| "Turnkey project management" (in PM description) | **"Comprehensive project management"** |

### 1.4 Hero Skill Tags

**Must match the 9 services in correct order. Can be abbreviated for the hero pill format:**

```text
PM • Planning • Construction • Contract Admin • Contract Mgmt • QS • Commercial • Risk • Disputes
```

> Replaces the current tags (`PM, QS, Contracts, Claims, Planning, Risk, Disputes`). Order and coverage must align with the 9 services.

---

## 2. New Page: Projects (`/projects`)

### 2.1 Overview

- Add a **Key Projects** page at `/projects`
- Title: **"Key Projects"** — implies highlights, not exhaustive list
- Follow the presentation style of the current live site
- Add `/projects` to navigation

### 2.2 Project Images (provided)

Images are in `docs/images/projects/`. Numbered prefix (`1-`, `2-`, etc.) defines placement order.

**PTR Tanks Project** (`docs/images/projects/PTR/`):

| Current Filename | Rename To (SEO + WebP) |
|---|---|
| `1-1PTR internal looking up - own pictures.JPG` | `1-ptr-tank-internal-view-koeberg.webp` |
| `2-man-cage in tank - part restricted.JPG` | `2-ptr-tank-man-cage-inspection.webp` |
| `3-1PTR internal looking up with man-cage - own pictures.JPG` | `3-ptr-tank-internal-man-cage-overhead.webp` |
| `4-PTR roof slinging.JPG` | `4-ptr-tank-roof-slinging-crane.webp` |

**Steam Generator / KNPS** (`docs/images/projects/KNPS/`):

| Current Filename | Rename To (SEO + WebP) |
|---|---|
| `1-Steam-Generator-Project.jpeg` | `1-koeberg-steam-generator-project.webp` |
| `2-Koeberg and Table Mountain.jfif` | `2-koeberg-nuclear-power-station-table-mountain.webp` |
| `3-SG lifting at dock.webp` | `3-steam-generator-lifting-dock-transport.webp` |
| `4-SG on trailer.webp` | `4-steam-generator-trailer-transport.webp` |

**Cleanup:** Remove Windows Zone.Identifier files (`.JPG:Zone.Identifier`).

> **Convention:** Keep `1-` through `4-` prefix for local folder ordering. Use lowercase-kebab-case with descriptive SEO keywords. All files converted to `.webp`.

### 2.3 Current Live Site Project Content (reference for structure)

**Project 1: PTR Tanks Project**

- **Heading:** PTR Tanks Project, 20-year life extension, Koeberg Nuclear Power Station
- **Sector:** Nuclear Power Generation
- **Contract:** NEC Option A
- **Services provided:** Project management, contract administration, construction oversight, planning
- **Details:** Two borated water storage tanks in SAF2205 Duplex Stainless Steel, ASME III code, 100% radiographic weld examination, 500-ton crawler crane installation, complex piping/services integration

**Project 2: Steam Generator Project**

- **Heading:** Steam Generator Project, 20-year life extension, Koeberg Nuclear Power Station
- **Sector:** Nuclear Power Generation
- **Contract:** NEC3 Option A
- **Services provided:** Project management, contract and construction management, subcontractor coordination, project controls and planning
- **Details:** Replaced three steam generators per operating unit (~350 tons each), major logistics coordination, welding operations during unit outages, multi-year timeline

> **Implementation note:** Optimise content for SEO. Structure as "Key Projects" (showcase, not exhaustive). Phil will send 7 project photos — scrape current content as starting point, then refine.

---

## 3. Hero Section Updates

### 3.1 Main Headline

| Current | New |
|---|---|
| Engineering & Construction Management Consultancy | **Engineering & Construction Consulting Services** |

### 3.2 Subtitle / Location Banner

| Current | New |
|---|---|
| "South Africa & United Kingdom • Engineering & Construction Management" | **"International Service"** (static text) |

### 3.3 New Country Animation (below "International Service")

Add a **rolling ticker/marquee animation** cycling through country/region names:

```text
South Africa • United Kingdom • Canada • USA • Africa • Asia • Americas • Europe • Middle East
```

- Animation: scrolling line from **left to right**
- Style: smooth, continuous, fairly fast rotation speed
- Phil will provide updated naming for the 3 hero sections (await input)

---

## 4. Footer Updates

### 4.1 LinkedIn Link

| Current | New |
|---|---|
| `https://www.linkedin.com/in/phil-coleman/` (personal) | **`https://www.linkedin.com/company/pc-quanti/`** (company page) |

Also update the LinkedIn **icon** to reflect company page.

### 4.2 Full Services List in Footer

Footer must list all **9 services** with links to individual service pages.

### 4.3 Legal Links

Add legal/policy links to the footer:

- Privacy Policy → `/privacy-policy`
- Terms & Conditions → `/terms-conditions`
- Disclaimer → `/disclaimer`

Content scraped from current live site as starting point (see [Appendix A](#appendix-a-legal-page-content-scraped)).

### 4.4 WhatsApp in Footer

- Add **WhatsApp icon** (green, official default logo) linking to `https://wa.me/+27828632154`

---

## 5. Contact Page Updates

### 5.1 Intro Text

| Current | New |
|---|---|
| "Tell us about your project and we'll respond within 24 hours with a tailored recommendation." | **"Tell us about your requirements and we'll respond within 24 hours."** |

### 5.2 Service Interest Dropdown

Expand to include all **9 services** plus General Enquiry:

1. General Enquiry
2. Project Management
3. Planning
4. Construction Management
5. Contract Administration
6. Contract Management
7. Quantity Surveying
8. Commercial Management
9. Risk Management
10. Dispute Resolution, Adjudication and Arbitration

### 5.3 Formspree Email

Link Formspree form submissions to: **info@pcquanti.co.za**

### 5.4 Phone Number

| Current | New |
|---|---|
| `082 863 2154` | **`+27 82 863 2154`** (South African international format) |

- Phone link (`tel:`) should be for **calling only**

### 5.5 WhatsApp on Contact Page

- Add **WhatsApp icon** (green, default official logo) in the contact info section
- Links to WhatsApp chat (`wa.me/+27828632154`)
- Keep visually separate from the phone/call action
- **Not a floating button** — placed in footer and contact page only

---

## 6. Services Page (`/services`)

### 6.1 Ordering

Follow the ordering of all 9 services (same order as Section 1.2 above).

### 6.2 Imagery

- **Project Management image** — current one is "too busy/AI-looking", needs replacement
- New service images should feature **diverse representation** (Black professionals, female professionals)
- Image style: **natural, realistic** — like real photos, NOT themed/styled to match the website aesthetic
- BBE (Broad-Based Empowerment) representation in images

### 6.3 Individual Service Pages

- Each of the 9 services needs its own detail page at `/services/[slug]`
- New services get blank placeholder images until provided
- Follow consistent layout with existing service pages

---

## 7. Team Section Updates

### 7.1 Team Positioning

Reframe the team section messaging:

| Current Framing | New Framing |
|---|---|
| Generic team listing | **Management Core Team** |

### 7.2 Key Messaging Points

- Everyone listed is a **department head**
- Example: Francois oversees 7+ planners
- PC Quanti brings in and sources people to execute and oversee projects
- Has a **repertoire of associates** they can draw from
- **Not a body shop / recruitment agency** — they live in the project, coach, oversee, ensure all work is done
- If team members don't succeed, they bring in replacements
- Team size depends on **project scope** and **client requirements**
- Core team is **expandable** and adapts to fit requirements
- Long list of service providers available

### 7.3 Team Images

- New images should include **Black male professionals** and **female professionals**
- Style: **natural, realistic photos** — not AI-generated or themed
- Must not mimic the website's design theme

---

## 8. Mobile Bug Fix

### Trust Banner (`TrustBar`) — Mobile Wrapping Issue

- The trust banner showing "Experience", "Sectors", etc. is **not wrapping correctly on mobile**
- Currently uses `whitespace-nowrap` which prevents text wrapping
- Needs responsive fix for mobile viewports

---

## Open Questions

> ❓ Items needing clarification before implementation

1. **Hero 3 sections naming** — Phil said he'll provide updated naming for the 3 hero sections. Await this input.

2. **Project photos** — Phil will send 7 project photos. Use blank placeholders until received.

3. **"Turnkey" rename scope** — "Turnkey → Comprehensive Project Management" — is this a description change within the PM service text, or does it affect the service name itself?

4. **New service descriptions** — For services not yet in the codebase (Construction Management, Contract Management, Commercial Management), should we draft descriptions from the current live site content?

6. **Outage Management content placement** — Which specific services should absorb the outage/shutdown content? (Suggested: PM, Construction Management, Planning — confirm.)

---

## Implementation Priority (Suggested)

| Priority | Task Area | Complexity |
|---|---|---|
| 🔴 High | Services alignment (9 services, ordering, naming) | Medium |
| 🔴 High | Hero section text + country animation | Medium |
| 🔴 High | Footer overhaul (services, LinkedIn, legal links, WhatsApp) | Low-Medium |
| 🔴 High | Contact form updates (dropdown, text, phone, WhatsApp) | Low |
| 🟡 Medium | Mobile trust banner fix | Low |
| 🟡 Medium | Team section reframing ("Management Core Team") | Low-Medium |
| 🟡 Medium | Projects page (new — `/projects`) | Medium-High |
| 🟡 Medium | Legal pages (Privacy, Terms, Disclaimer) | Low |
| 🟠 Blocked | New service images (awaiting from Phil) | — |
| 🟠 Blocked | Project photos ×7 (awaiting from Phil) | — |
| 🟠 Blocked | Hero 3-section naming (awaiting from Phil) | — |
| 🟠 Blocked | Team photos — diverse representation (awaiting) | — |

---

## Appendix A: Legal Page Content (Scraped)

> Scraped from current live site 2026-03-11. Use as **starting point** — review and update as needed.

### Privacy Policy (`/privacy-policy`)

**Effective:** 2 March 2026 | **Entity:** PC Quanti (Pty) Ltd

- **Scope:** Covers website and professional services data practices
- **Legal basis:** South Africa's Protection of Personal Information Act (POPIA)
- **Data collected:** Contact details (names, emails, phone numbers), technical info (IP, browser, pages visited)
- **Use:** Service delivery, project communication, website optimisation, regulatory compliance
- **Sharing:** Does not sell/trade personal info; shares with professional advisors and service providers when necessary
- **Security:** Implements safeguards; acknowledges no method is completely secure
- **Retention:** Kept only as long as needed for service delivery or legal requirements
- **User rights:** Access, correction, deletion, consent withdrawal under applicable laws
- **Cookies:** Used for functionality and analytics; browser controls available
- **Contact:** info@pcquanti.co.za / 082 863 2154

### Terms & Conditions (`/terms-conditions`)

**Effective:** 2 March 2026 | **Entity:** PC Quanti (Pty) Ltd

1. **Introduction** — Agreement by accessing website; discontinue if disagree
2. **About PC Quanti** — Engineering, commercial advisory, project management, claims consulting, adjudication, arbitration, dispute resolution. Website content not binding professional advice without formal written agreement
3. **Use of Website** — Lawful use, respect rights, no unauthorized access, no malicious code
4. **Professional Services Disclaimer** — General informational purposes only; professional advice requires formal written engagement
5. **Intellectual Property** — PC Quanti owns all website content; reproduction without written consent prohibited
6. **Limitation of Liability** — Disclaims responsibility for damages; no guarantee of uninterrupted access
7. **Third-Party Links** — Convenience only; not responsible for third-party content
8. **Confidentiality** — Communication doesn't establish professional relationship without formal engagement
9. **Privacy** — Governed by Privacy Policy
10. **Governing Law** — South African law; SA courts jurisdiction
11. **Amendments** — May update without notice; effective upon publication
12. **Contact** — info@pcquanti.co.za / 082 863 2154

### Disclaimer (`/disclaimer`)

**Effective:** 2 March 2026 | **Entity:** PC Quanti (Pty) Ltd

1. **General Information Only** — No representations or warranties; use at own risk
2. **No Professional Advice** — No engineering, legal, or commercial guidance via website; requires formal written agreement
3. **Limitation of Liability** — Disclaims responsibility for damages from website use
4. **External Links** — No responsibility for third-party websites
5. **Confidential Information** — Communications don't trigger confidentiality without contract; avoid submitting sensitive data
6. **Professional Appointments** — Adjudicator/arbitrator/expert roles governed by specific contracts
7. **Changes to Disclaimer** — May amend unilaterally; effective upon publication

---

*Document created: 2026-03-11 — For use in ouroboros interview session.*
