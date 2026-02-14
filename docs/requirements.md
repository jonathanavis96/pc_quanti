# PC Quanti MVP Requirements & Scope

## Primary Goal

**Conversion event:** Contact form submission (qualified leads for PC Quanti project management services)

**Success metric:** 3-5 qualified B2B industrial project management leads per month through organic search and referrals

---

## Primary Audience

**Target persona:** Industrial Project Decision-Maker

**Demographics:**
- **Role:** Project manager, procurement officer, executive
- **Sector:** Nuclear (primary), mining, infrastructure, energy
- **Location:** UK (priority expansion), South Africa (current market)
- **Company size:** Mid-to-large industrial projects requiring specialized PM expertise

**Pain points:**
- Big consultancies carry excessive overhead and bloated pricing
- Hard to find specialists with genuine on-ground nuclear/industrial experience
- Need trusted network access for scarce project management skills (QS, contract admin, claims)

**Desired action:**
- Discover PC Quanti through UK nuclear/industrial PM keyword searches
- Validate credibility through About page (Phil's nuclear background, lean model differentiators)
- Submit contact form with project enquiry (general or service-specific)

**What they need to see:**
- Clear service descriptions showing breadth of PM capabilities
- Evidence of nuclear/industrial expertise without nuclear-specific branding
- Professional, trustworthy design (crisp layouts, not overly corporate or cluttered)
- Fast mobile experience (industrial sector users browse on mobile)

---

## Trust Barriers & Evidence Strategy

**Barrier 1: "Can a solo consultant handle our project scope?"**
- **Evidence:** About page emphasizing trusted network access + lean model benefits
- **Copy angle:** "Access to scarce skills without corporate overhead"

**Barrier 2: "Does PC Quanti have relevant sector experience?"**
- **Evidence:** Phil's nuclear/industrial background prominently featured
- **Copy angle:** "On-ground experience in high-stakes industrial projects"
- **Constraint:** Cannot show case studies due to NDA client (5-year nuclear project)

**Barrier 3: "Is this a credible, established business?"**
- **Evidence:** Professional website design, clear service offerings, UK/SA market presence
- **Design strategy:** Crisp, generous whitespace layouts (reference: HattinghPC.co.za)
- **Avoid:** Bland/amateur design (reference: tiefenthalerlegal.com), lumpy cluttered boxes (reference: cbec.co.za)

---

## MoSCoW Scope (Must/Should/Could/Won't)

### Must Have (MVP Core)
- ✅ **Home page** with service discovery (5 services prominently featured)
- ✅ **About page** showcasing Phil's credibility and differentiators
- ✅ **Services pages** (5 detail pages: PM, QS, Contract Admin, Claims, Project Controls)
- ✅ **Contact page** with form (enquiry type dropdown, name, email, message)
- ✅ **Mobile-first responsive design** (Tailwind CSS)
- ✅ **SEO foundation** (meta tags, structured data, sitemap)
- ✅ **Static deployment** (GitHub Pages compatible, no server dependencies)
- ✅ **Performance targets** (Lighthouse 90+ desktop, 80+ mobile, LCP < 2.5s)
- ✅ **Brand consistency** (primary CTA color #2C02D9, PC house logo)

### Should Have (MVP Nice-to-Have)
- ⚠️ Click-to-call/email functionality (phone/email links)
- ⚠️ WCAG AA compliance (keyboard nav, contrast, semantic HTML)
- ⚠️ Google Analytics setup (basic tracking)

### Could Have (Post-MVP)
- 💡 Blog/content marketing system
- 💡 Sectors sub-pages (Nuclear, Mining, Infrastructure)
- 💡 Client testimonials (when available post-NDA)
- 💡 Multi-language support (English + Afrikaans)
- 💡 Dark mode

### Won't Have (Explicitly Out of Scope)
- ❌ Client portal or project management tools
- ❌ Case studies (NDA constraints prevent shareable examples)
- ❌ E-commerce or payment processing
- ❌ CRM integration (Salesforce, HubSpot)
- ❌ Email marketing platform integration
- ❌ Live chat or chatbot
- ❌ Advanced animations or interactive elements
- ❌ Social media management services
- ❌ Paid advertising setup (PPC, Google Ads)

---

## Reference Sites (What to Emulate/Avoid)

### ✅ Emulate: HattinghPC.co.za (Phil's preferred reference)
- **What's good:** Crisp layouts, generous whitespace, easy navigation, not cluttered
- **What to copy:** Services page prominence, clean visual hierarchy, simple geometric logo
- **Phil's feedback:** "The site looks quite crisp... not too cluttered and easy to navigate"
- **Note:** Use generic info due to PC Quanti's NDA client (similar constraint as HPC)

### ❌ Avoid: cbec.co.za
- **What's bad:** "Lumpy" pronounced boxes, less flowing design
- **Phil's feedback:** "Their site seems a bit lumpy with the pronounced boxes, so it seems less flowing"

### ❌ Avoid: tiefenthalerlegal.com
- **What's bad:** Bland, lacks visual interest
- **Phil's feedback:** "This site is for one of our partners but is quite bland"

---

## Content Constraints

**Generic examples required:** PC Quanti worked primarily for one NDA client (nuclear sector) for 5 years. Cannot share:
- Specific project names or details
- Client testimonials or case studies
- Sector-specific imagery (nuclear plants, etc.)

**Content strategy:**
- Use professional, sector-agnostic language
- Emphasize capabilities and deliverables (not past projects)
- Focus on Phil's expertise and network access
- Generic industrial project examples where needed

---

## Services Naming Decision

**Final decision:** "Project Services" (preferred term)

**Alternative considered:** "Project Management" (too narrow, doesn't cover QS/Claims/Controls)

**Services list:**
1. Project Management
2. Quantity Surveying
3. Contract Administration
4. Claims Management
5. Project Controls

---

## Primary Contact Information

- **Email:** info@pcquanti.co.za
- **Phone:** TODO(PHIL): Provide mobile number for click-to-call
- **Business name:** PC Quanti
- **Legal entity:** TODO(PHIL): Confirm registered business name/structure

---

## Target Market Details

**Primary market:** B2B industrial project management

**Sectors served:**
- Nuclear (primary expertise, but brand stays sector-agnostic)
- Mining
- Infrastructure
- Energy

**Geographic focus:**
- **UK:** Priority expansion market (target: nuclear/industrial PM keywords)
- **South Africa:** Current market base

**SEO keyword targets (UK):**
- "nuclear project management consultant UK"
- "industrial project management services UK"
- "quantity surveying nuclear sector"
- "contract administration mining projects"
- TODO(PHIL): Confirm priority keyword targets

---

## Brand Guidelines

### Logo
- **Design:** PC house icon with blue background
- **Color:** `#2C02D9` (bright blue, client-approved)
- **Evolution:** House+arch → removed arch (generic) → simple PC house icon
- **Philosophy:** Clean, simple, doesn't overpower company name
- **Usage:** Header (links to home), favicon (PC icon only)

### Color Palette
- **Primary CTA:** `#2C02D9` (bright blue) - MUST USE for all primary buttons
- **Secondary colors:** TODO(PHIL): Approve gray/neutral palette
- **Avoid:** Nuclear-specific colors (radiation yellow, hazard orange)

### Typography
- **Philosophy:** Professional, readable, not overly corporate
- **Reference:** HattinghPC.co.za for tone/feel
- TODO(PHIL): Approve specific font choices

### Design Philosophy
- **Crisp layouts:** Generous whitespace, clean visual hierarchy
- **Not lumpy:** Avoid pronounced boxes and cluttered sections
- **Mobile-first:** Industrial users browse on mobile
- **Fast loading:** Lighthouse 90+/80+ desktop/mobile

---

## Detailed Requirements (Cross-References)

For comprehensive technical and design requirements, see:
- **Design System:** `brain/docs/design-packs/pc-quanti-mvp/DESIGN_SYSTEM.md`
- **PRD:** `brain/docs/design-packs/pc-quanti-mvp/PRD.md`
- **App Flow:** `brain/docs/design-packs/pc-quanti-mvp/APP_FLOW.md`
- **Frontend Guidelines:** `brain/docs/design-packs/pc-quanti-mvp/FRONTEND_GUIDELINES.md`
- **Lessons:** `brain/docs/design-packs/pc-quanti-mvp/LESSONS.md`
