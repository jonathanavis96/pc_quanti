# PC Quanti PRD (Product Requirements)

## Problem Statement

Phil's PC Quanti consultancy lacks an online presence, making it difficult for potential clients (nuclear/industrial project managers, procurement officers) to discover services, validate credibility, or initiate contact. The business needs a professional website that:
- Positions PC Quanti as a credible, lean alternative to big corporate consultancies
- Showcases scarce project management skills and trusted network
- Generates qualified leads through clear CTAs and contact mechanisms
- Ranks well for UK nuclear/industrial project management keywords

---

## Users/Personas

**Primary persona: Industrial Project Decision-Maker**
- Role: Project manager, procurement officer, or executive
- Sector: Nuclear (primary), mining, infrastructure, energy
- Location: UK, South Africa
- Goal: Find experienced project management consultancy with nuclear expertise
- Pain points: Big consultancies have overhead, hard to find specialists with on-ground experience

**Secondary persona: Referral Contact**
- Role: Previous client or industry peer
- Goal: Share PC Quanti's services with colleagues
- Behavior: Quick lookup to grab contact details or service descriptions

---

## Core Requirements

### Functional Requirements
1. **Lead capture:** Contact form with enquiry type dropdown (General, PM, QS, Contract Admin, Claims, Project Controls)
2. **Service discovery:** 5 service pages accessible from home (Project Management, Quantity Surveying, Contract Administration, Claims Management, Project Controls)
3. **Credibility validation:** About page showcasing Phil's nuclear/industrial background and differentiators
4. **Mobile accessibility:** Click-to-call/email functionality (phone/email links)
5. **SEO foundation:** Meta tags, structured data, sitemap for UK nuclear/industrial PM keywords
6. **Fast performance:** Lighthouse 90+ (desktop), 80+ (mobile), LCP < 2.5s
7. **Static deployment:** GitHub Pages compatible (no server-side dependencies)

### Design Requirements
8. **Brand consistency:** Primary CTA color #2C02D9 (bright blue) used in logo and buttons
9. **Clean aesthetic:** Crisp layouts, generous whitespace, avoid cluttered/lumpy designs
10. **Professional tone:** Trust-building without being stuffy or overly corporate
11. **Mobile-first:** Responsive design prioritizing mobile experience
12. **Accessibility:** WCAG AA compliance (keyboard nav, contrast, semantic HTML)

### Content Requirements
13. **Services copy:** Clear descriptions of 5 core services with deliverables
14. **About copy:** Phil's story, credibility markers, differentiators (lean model, network access)
15. **Value proposition:** Communicate nuclear expertise + broader industrial capability

---

## Must-Not-Change Constraints (Invariants)

**Brand anchors:**
- Primary CTA color must be `#2C02D9` (bright blue) - client-approved brand color
- Logo design: PC house icon with blue background (no nuclear-specific imagery)

**Information architecture:**
- 5-page structure: Home, About, Services (overview + 5 detail pages), Contact
- Services must be prominently discoverable from home page
- Contact details visible in header/footer on all pages

**User experience:**
- Mobile-first design (majority of target users browse on mobile)
- Simple navigation (no mega-menus, no complex dropdowns)
- Fast load times (users in industrial sectors expect quick access)

**Messaging tone:**
- Professional but approachable (not big-corporate stuffy)
- Avoid nuclear-specific branding (want to serve all industrial sectors)
- Emphasize lean/agile model vs bloated corporate overhead

**Technical:**
- Static HTML deployment (GitHub Pages constraint)
- No authentication or user accounts needed
- No e-commerce or payment processing

---

## Out of Scope (Explicitly NOT included in MVP)

**Features:**
- Blog or content marketing system (can be added later)
- Client portal or project management tools
- Case studies or testimonials (Phil doesn't have shareable ones yet due to NDA client)
- Sectors sub-pages (Nuclear, Mining, etc.) - defer until after MVP
- Multi-language support (English only for MVP)
- Dark mode (light mode only)
- Advanced animations or interactive elements (keep it simple)

**Services:**
- Ongoing SEO campaigns or content creation
- Social media management or LinkedIn strategy
- Paid advertising setup (PPC, Google Ads)
- Professional photography or video production
- Copywriting beyond initial website content

**Integrations:**
- CRM integration (Salesforce, HubSpot, etc.)
- Email marketing platform (Mailchimp, ConvertKit)
- Live chat or chatbot
- Analytics beyond basic Google Analytics

---

## Success Metrics (Post-Launch)

**Primary:**
- Form submissions per month (target: 3-5 qualified leads/month)
- Organic search traffic for target keywords (track rankings)

**Secondary:**
- Lighthouse performance scores (90+/80+ desktop/mobile)
- Bounce rate < 60% on home page
- Average session duration > 2 minutes

---

## Completeness Checklist

- [x] Invariants are explicit (brand, architecture, UX, messaging)
- [x] Out-of-scope is explicit (features, services, integrations)
- [x] Problem statement captures business need
- [x] Users/personas are defined
- [x] Core requirements are bulleted and specific
