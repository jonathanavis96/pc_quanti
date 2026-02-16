# PC Quanti Sitemap

## Overview

PC Quanti is a **professional services marketing website** with a simple, focused structure optimized for lead generation. The site follows a clear hierarchy: discovery (Home) → exploration (Services) → conversion (Contact).

**Target audience:** B2B decision-makers in nuclear and industrial sectors (project managers, procurement officers, executives) seeking project management consultancy.

**Primary conversion path:** Home → Services → Contact

---

## Navigation Structure

### Primary Navigation (Header)

```
[Logo] Home | About | Services | Contact [Contact Us CTA Button]
```

**Items (4 total - follows 7±2 rule):**
1. **Home** - Landing page with overview and value proposition
2. **About** - Phil's background and PC Quanti differentiators
3. **Services** - Dropdown/mega menu with 5 service pages OR link to services overview
4. **Contact** - Contact form and details

**Header CTA Button:**
- "Contact Us" → `/contact` (primary conversion action)
- Color: `#2C02D9` (brand blue from logo)

**Services Dropdown Options:**
- Services Overview (parent link)
  - Project Management
  - Quantity Surveying
  - Contract Administration
  - Claims Management
  - Project Controls

---

## Page Hierarchy

```
Home (/)
├── About (/about)
├── Services (/services)
│   ├── Project Management (/services/project-management)
│   ├── Quantity Surveying (/services/quantity-surveying)
│   ├── Contract Administration (/services/contract-administration)
│   ├── Claims Management (/services/claims-management)
│   └── Project Controls (/services/project-controls)
└── Contact (/contact)
```

**Total pages: 9**
- 1 Home page
- 1 About page
- 1 Services overview page
- 5 Individual service detail pages
- 1 Contact page

---

## Page Definitions

### 1. Home Page (`/`)

**Purpose:** Landing page that establishes credibility and guides users to services or contact

**Key sections:**
- Hero (tagline, primary CTA: "View Our Services")
- Value proposition (3-4 differentiators: nuclear expertise, lean model, trusted network, scarce skills)
- Services grid (5 cards with icon + title + 2-sentence summary + "Learn More" link)
- Trust markers (sectors served, experience teaser)
- Footer with contact details

**CTAs:**
- Primary: "View Our Services" (scroll to services grid or link to `/services`)
- Secondary: "Contact Us" (header + footer)

**Route:** `/`

---

### 2. About Page (`/about`)

**Purpose:** Credibility validation - Phil's background and PC Quanti differentiators

**Key sections:**
- Phil's story (nuclear experience, South African industrial background, UK expansion)
- Credibility markers (sectors: nuclear, mining, infrastructure, energy; years of experience)
- Differentiators:
  - Lean model (low overhead vs big consultancies)
  - Trusted network (access to scarce PM/QS skills)
  - On-ground experience (nuclear, industrial)
- Optional: Photo of Phil

**CTAs:**
- Primary: "Contact Us"
- Secondary: "View Our Services"

**Route:** `/about`

---

### 3. Services Overview Page (`/services`)

**Purpose:** Browse all 5 services in one view

**Key sections:**
- Intro paragraph (PC Quanti's service philosophy)
- Services grid (5 cards):
  1. Project Management
  2. Quantity Surveying
  3. Contract Administration
  4. Claims Management
  5. Project Controls
- Each card: icon, title, 2-3 sentence summary, "Learn More" button → individual service page

**CTAs:**
- Primary: "Learn More" on each service card (links to individual service pages)
- Secondary: "Contact Us" (footer)

**Route:** `/services`

---

### 4. Individual Service Pages (5 pages)

**Purpose:** Detailed description of each service offering

**Template structure:**
- Service title (H1)
- Service description (2-3 paragraphs explaining what it is, why it matters)
- Key deliverables (bulleted list of outputs/outcomes)
- Applicable sectors (nuclear, mining, infrastructure, energy)
- CTA: "Get in Touch" → `/contact`

**Routes:**
1. `/services/project-management` - End-to-end project delivery, planning, execution, closeout
2. `/services/quantity-surveying` - Cost estimation, budgeting, contract procurement
3. `/services/contract-administration` - Contract management, compliance, stakeholder coordination
4. `/services/claims-management` - Dispute resolution, claims assessment, negotiation support
5. `/services/project-controls` - Scheduling, cost control, risk management, reporting

**CTAs:**
- Primary: "Get in Touch" or "Request a Quote" → `/contact`
- Secondary: Breadcrumb back to Services overview

---

### 5. Contact Page (`/contact`)

**Purpose:** Lead capture through contact form and direct contact details

**Key sections:**
- Contact form:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Company (optional)
  - Enquiry type (dropdown: General Enquiry, Project Management, Quantity Surveying, Contract Admin, Claims, Project Controls)
  - Message (required, textarea)
  - Submit button (with loading state)
- Contact details:
  - Email: info@pcquanti.co.za
  - Phone: [TODO(PHIL): provide if desired]
  - Address: [TODO(PHIL): provide if desired]
- Form states:
  - Default: Empty form
  - Loading: "Sending..." spinner on button
  - Success: "Thank you! We'll be in touch shortly."
  - Error: "Something went wrong. Please email us directly at info@pcquanti.co.za"

**Route:** `/contact`

---

## Footer Structure

**Layout:** 4-column responsive footer (stacks on mobile)

```
| Column 1: Brand       | Column 2: Quick Links | Column 3: Services      | Column 4: Contact     |
|-----------------------|-----------------------|-------------------------|-----------------------|
| [Logo]                | Home                  | Project Management      | Email: info@...       |
| Tagline/description   | About                 | Quantity Surveying      | Phone: [if provided]  |
| (2-3 sentences)       | Services              | Contract Admin          | Address: [optional]   |
|                       | Contact               | Claims Management       |                       |
|                       |                       | Project Controls        |                       |
```

**Footer bottom:**
```
© 2026 PC Quanti | Privacy Policy (optional) | Terms of Service (optional)
```

**Notes:**
- Privacy/Terms can be deferred to Phase 2 if not required for MVP
- Footer visible on all pages
- Contact details click-to-call/email on mobile

---

## URL Structure & Routing

**Pattern:** Clean, descriptive URLs (no `.html` extensions, lowercase with hyphens)

| Page                  | Route                              | Notes                          |
|-----------------------|------------------------------------|--------------------------------|
| Home                  | `/`                                | Root index                     |
| About                 | `/about`                           | Single page                    |
| Services Overview     | `/services`                        | Parent for service pages       |
| Project Management    | `/services/project-management`     | Service detail                 |
| Quantity Surveying    | `/services/quantity-surveying`     | Service detail                 |
| Contract Admin        | `/services/contract-administration`| Service detail                 |
| Claims Management     | `/services/claims-management`      | Service detail                 |
| Project Controls      | `/services/project-controls`       | Service detail                 |
| Contact               | `/contact`                         | Form + contact details         |

**Next.js App Router mapping:**
```
app/
├── page.tsx                          → /
├── about/
│   └── page.tsx                      → /about
├── services/
│   ├── page.tsx                      → /services
│   ├── project-management/
│   │   └── page.tsx                  → /services/project-management
│   ├── quantity-surveying/
│   │   └── page.tsx                  → /services/quantity-surveying
│   ├── contract-administration/
│   │   └── page.tsx                  → /services/contract-administration
│   ├── claims-management/
│   │   └── page.tsx                  → /services/claims-management
│   └── project-controls/
│       └── page.tsx                  → /services/project-controls
└── contact/
    └── page.tsx                      → /contact
```

---

## SEO & Meta Structure

**URL hierarchy benefits:**
- `/services/*` structure signals service pages to search engines
- Clean URLs are user-friendly and shareable
- Breadcrumb navigation can be generated from URL structure

**Planned meta tags (per page):**
- `<title>` - Unique per page (e.g., "Project Management Services | PC Quanti")
- `<meta name="description">` - Unique 150-160 character summary
- Open Graph tags for social sharing
- Structured data (Organization, LocalBusiness, Service schema)

---

## User Journeys (Primary Paths)

### Journey 1: Discovery → Services → Contact (Primary conversion)
1. User lands on **Home** (`/`)
2. Clicks "View Our Services" or scrolls to services grid
3. Clicks service card → **Individual Service Page** (e.g., `/services/project-management`)
4. Reads service details, clicks "Get in Touch"
5. **Contact Page** (`/contact`) → Submits form

### Journey 2: Direct navigation → About → Contact
1. User clicks **About** in nav
2. Reads Phil's background and credibility markers
3. Clicks "Contact Us" CTA
4. **Contact Page** → Submits form

### Journey 3: Mobile quick-action (click-to-call/email)
1. User lands on any page (mobile)
2. Clicks phone/email link in footer
3. Native phone/email app opens (no form required)

---

## Deferred / Out of Scope for MVP

**Not included in initial sitemap:**
- Blog or Resources section (can be added in Phase 2)
- Sectors sub-pages (Nuclear, Mining, etc.) - wait until content is ready
- Case Studies or Portfolio pages (Phil has NDA clients, no shareable work yet)
- Privacy Policy / Terms pages (add if needed for compliance)
- Sitemap.xml / Robots.txt (will be auto-generated by Next.js)

---

## Acceptance Criteria (Task 1.4.1)

- [x] Sitemap documented in `docs/sitemap.md`
- [x] All pages listed: Home, About, Services (overview + 5 detail pages), Contact
- [x] Navigation structure defined (4-item primary nav + services dropdown)
- [x] URL routes planned (Next.js App Router folder structure specified)
- [x] Footer structure defined
- [x] Primary user journeys mapped
- [x] Out-of-scope items explicitly listed

**Next steps:**
- Task 1.4.2: Draft copy placeholders for core pages
- Phase 1: Create Next.js routes based on this sitemap structure
