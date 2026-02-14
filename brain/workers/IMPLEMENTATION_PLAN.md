# PC Quanti Website - Implementation Plan

**Status:** Phase 0 in progress  
**Last Updated:** 2026-02-14

---

## Overview

6-phase implementation plan for PC Quanti professional website build.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS  
**Timeline:** ~8 weeks  
**Scope:** Website design, build, deployment, SEO foundation (no ongoing marketing)

---

## Phase 0: Discovery & Design (Weeks 1-2)

### 1.1 Brand & Design System Setup
- [ ] **1.1.1** Create Tailwind config with PC Quanti brand colors
  - **Goal:** Define primary blue (#2C02D9), secondary colors, typography scale
  - **AC:** `tailwind.config.ts` exports custom theme with `pc-blue`, `pc-gray`, font families
  - **If Blocked:** Use Tailwind default theme temporarily, refine later

- [ ] **1.1.2** Set up typography system (Inter or Manrope font)
  - **Goal:** Import Google Fonts, configure font weights/sizes in Tailwind
  - **AC:** Fonts load on all pages, `font-sans` class uses chosen typeface
  - **If Blocked:** Use system fonts as fallback

- [ ] **1.1.3** Create component library foundations
  - **Goal:** Build reusable Button, Card, Container components
  - **AC:** Components in `src/components/`, TypeScript props, Storybook or demo page
  - **If Blocked:** Inline components first, extract to library later

### 1.2 Sitemap & Content Strategy
- [ ] **1.2.1** Finalize sitemap structure
  - **Goal:** Define all pages: Home, About, Services (5 sub-pages), Sectors (optional), Contact
  - **AC:** Sitemap documented in `docs/sitemap.md`, routes created in `src/app/`
  - **If Blocked:** Start with Home/About/Contact, add Services/Sectors in Phase 1

- [ ] **1.2.2** Write or approve copy for core pages
  - **Goal:** Draft Home hero, About story, Services descriptions, Contact form labels
  - **AC:** Copy approved by Phil (or placeholder approved by Jono), saved in `docs/copy.md`
  - **If Blocked:** Use Lorem ipsum placeholders, flag for Phil review

- [ ] **1.2.3** Define CTAs and conversion paths
  - **Goal:** Map user journeys (visitor → Contact Us, visitor → View Services → Contact)
  - **AC:** CTA placement documented, primary = "Contact Us", secondary = "View Services"
  - **If Blocked:** Default to Contact Us on all pages

### 1.3 Design Mockups (Optional)
- [ ] **1.3.1** Create Figma/wireframe mockups for Home page
  - **Goal:** Visualize hero section, services grid, footer layout
  - **AC:** Mockup approved by Phil or Jono
  - **If Blocked:** Skip mockups, build directly in code with iterative review

---

## Phase 1: Core Website Build (Weeks 3-4)

### 2.1 Home Page
- [ ] **2.1.1** Build hero section
  - **Goal:** Headline + subheadline + CTA button, background image or gradient
  - **AC:** Hero renders on `/`, responsive on mobile/tablet/desktop, CTA links to `/contact`
  - **If Blocked:** Use solid color background if no approved image

- [ ] **2.1.2** Build services overview section
  - **Goal:** Grid of 5 service cards (PM, QS, Contract Admin, Claims, Project Controls)
  - **AC:** Cards link to `/services/[service-slug]`, icons or placeholders, responsive grid
  - **If Blocked:** Text-only list if no icons available

- [ ] **2.1.3** Build trust/credibility section
  - **Goal:** Show Phil's experience, sectors served, differentiators
  - **AC:** Section renders below services, includes stats or bullet points
  - **If Blocked:** Defer to About page if content not ready

- [ ] **2.1.4** Build footer
  - **Goal:** Contact info, nav links, social media icons (if applicable)
  - **AC:** Footer component in `src/components/Footer.tsx`, renders on all pages via layout
  - **If Blocked:** Minimal footer with email/phone only

### 2.2 About Page
- [ ] **2.2.1** Build Phil's story section
  - **Goal:** Narrative about background, nuclear experience, why PC Quanti
  - **AC:** `/about` page renders, includes headshot or placeholder, responsive
  - **If Blocked:** Use placeholder bio, flag for Phil review

- [ ] **2.2.2** Build differentiators section
  - **Goal:** Lean model, scarce skills access, on-ground delivery, sector versatility
  - **AC:** 4 key differentiators displayed (cards or list), icons optional
  - **If Blocked:** Text-only list if no icons

- [ ] **2.2.3** Build credentials/certifications section (if applicable)
  - **Goal:** Display relevant certs, memberships, affiliations
  - **AC:** Section renders if Phil provides details, otherwise skip
  - **If Blocked:** Skip if no content available

### 2.3 Services Pages
- [ ] **2.3.1** Build services overview page (`/services`)
  - **Goal:** Introduction to all 5 services, links to detail pages
  - **AC:** Page renders, nav links work, responsive
  - **If Blocked:** Inline all service descriptions if sub-pages not ready

- [ ] **2.3.2** Build Project Management detail page
  - **Goal:** Describe PM services, typical deliverables, sectors served
  - **AC:** `/services/project-management` renders, includes CTA to Contact
  - **If Blocked:** Use generic description if Phil's copy not ready

- [ ] **2.3.3** Build Quantity Surveying detail page
  - **Goal:** Describe QS services, cost management, contract support
  - **AC:** `/services/quantity-surveying` renders, includes CTA
  - **If Blocked:** Use generic description

- [ ] **2.3.4** Build Contract Administration detail page
  - **Goal:** Describe contract admin, compliance, documentation
  - **AC:** `/services/contract-administration` renders, includes CTA
  - **If Blocked:** Use generic description

- [ ] **2.3.5** Build Claims Management detail page
  - **Goal:** Describe claims services, dispute resolution, forensic analysis
  - **AC:** `/services/claims-management` renders, includes CTA
  - **If Blocked:** Use generic description

- [ ] **2.3.6** Build Project Controls detail page
  - **Goal:** Describe project controls, scheduling, risk management
  - **AC:** `/services/project-controls` renders, includes CTA
  - **If Blocked:** Use generic description

### 2.4 Contact Page
- [ ] **2.4.1** Build contact form
  - **Goal:** Name, email, phone, enquiry type dropdown, message textarea
  - **AC:** Form renders on `/contact`, client-side validation, submit button
  - **If Blocked:** Use mailto link if form backend not ready

- [ ] **2.4.2** Set up form submission handler
  - **Goal:** API route to send email or save to database
  - **AC:** Form submits to `/api/contact`, sends email to Phil's address, returns success/error
  - **If Blocked:** Use Formspree or similar third-party service

- [ ] **2.4.3** Add contact info display
  - **Goal:** Show email, phone, address (if applicable) on Contact page
  - **AC:** Contact details render, clickable email/phone links
  - **If Blocked:** Email only if phone/address not provided

### 2.5 Header/Navigation
- [ ] **2.5.1** Build desktop navigation
  - **Goal:** Logo + nav links (Home, About, Services dropdown, Contact)
  - **AC:** Header component in `src/components/Header.tsx`, renders on all pages
  - **If Blocked:** Flat nav (no dropdown) if styling complex

- [ ] **2.5.2** Build mobile navigation
  - **Goal:** Hamburger menu, drawer/slide-out nav
  - **AC:** Nav works on mobile/tablet, closes on link click
  - **If Blocked:** Use simple toggle show/hide if drawer animation too complex

---

## Phase 2: Technical Setup (Week 5)

### 3.1 Deployment
- [ ] **3.1.1** Deploy to Vercel (or Phil's preferred host)
  - **Goal:** Site accessible at temporary Vercel URL
  - **AC:** `npm run build` succeeds, deployed to `pc-quanti.vercel.app` or similar
  - **If Blocked:** Deploy to Netlify if Vercel issues

- [ ] **3.1.2** Set up custom domain
  - **Goal:** Configure `pcquanti.co.uk` (or Phil's chosen domain) to point to deployment
  - **AC:** Domain resolves, SSL certificate active
  - **If Blocked:** Wait for Phil to purchase domain, use Vercel URL temporarily

- [ ] **3.1.3** Configure environment variables
  - **Goal:** Store API keys, form endpoints, analytics IDs in `.env.local`
  - **AC:** Secrets not committed to Git, loaded in production via Vercel dashboard
  - **If Blocked:** Hardcode non-sensitive defaults, add secrets later

### 3.2 Email & Communication
- [ ] **3.2.1** Set up email forwarding
  - **Goal:** `contact@pcquanti.co.uk` forwards to Phil's personal email
  - **AC:** Test email sent and received
  - **If Blocked:** Use Phil's personal email directly in Contact form

- [ ] **3.2.2** Configure SMTP for form submissions (if needed)
  - **Goal:** Send emails via SendGrid, Mailgun, or similar
  - **AC:** Form emails delivered reliably, no spam folder issues
  - **If Blocked:** Use formspree.io or similar service

### 3.3 Analytics & Monitoring
- [ ] **3.3.1** Set up Google Analytics
  - **Goal:** Track page views, user journeys, form submissions
  - **AC:** GA tag installed, events firing in GA dashboard
  - **If Blocked:** Use Vercel Analytics if GA setup blocked

- [ ] **3.3.2** Set up Google Search Console
  - **Goal:** Submit sitemap, monitor search performance
  - **AC:** Site verified, sitemap submitted
  - **If Blocked:** Defer to Phase 3

- [ ] **3.3.3** Set up error monitoring (Sentry or similar)
  - **Goal:** Catch runtime errors, monitor performance
  - **AC:** Sentry installed, test error logged
  - **If Blocked:** Skip if budget/time constrained, rely on Vercel logs

---

## Phase 3: SEO & Content Optimization (Week 6)

### 4.1 On-Page SEO
- [ ] **4.1.1** Add metadata to all pages
  - **Goal:** Unique title, description, OG tags for Home, About, Services, Contact
  - **AC:** Metadata exports in each `page.tsx`, verified in browser dev tools
  - **If Blocked:** Use generic fallback metadata in root layout

- [ ] **4.1.2** Optimize images (alt tags, compression)
  - **Goal:** All images have descriptive alt text, under 200KB each
  - **AC:** Lighthouse audit shows no missing alt tags, images load fast
  - **If Blocked:** Use Next.js Image component defaults

- [ ] **4.1.3** Add structured data (Schema.org)
  - **Goal:** Organization, Service, WebSite schemas in JSON-LD
  - **AC:** Schema validates in Google Rich Results Test
  - **If Blocked:** Defer to Phase 4 if complex

### 4.2 Technical SEO
- [ ] **4.2.1** Generate sitemap.xml
  - **Goal:** Auto-generate sitemap listing all pages
  - **AC:** `/sitemap.xml` accessible, includes all routes, submitted to GSC
  - **If Blocked:** Use `next-sitemap` package

- [ ] **4.2.2** Create robots.txt
  - **Goal:** Allow all crawlers, link to sitemap
  - **AC:** `/robots.txt` accessible, no disallowed pages
  - **If Blocked:** Use default Next.js robots.txt

- [ ] **4.2.3** Configure canonical URLs
  - **Goal:** Prevent duplicate content issues
  - **AC:** Canonical link tags in `<head>`, point to primary domain
  - **If Blocked:** Defer if no duplicate content risk

### 4.3 Content Optimization
- [ ] **4.3.1** Optimize copy for target keywords
  - **Goal:** Include "UK nuclear project management", "industrial PM consultancy", etc. naturally
  - **AC:** Keywords appear in headings, body text, meta descriptions
  - **If Blocked:** Use Phil's approved copy as-is, suggest edits later

- [ ] **4.3.2** Create Sectors pages (optional)
  - **Goal:** Dedicated pages for Nuclear, Mining, Infrastructure, Energy sectors
  - **AC:** `/sectors/nuclear` etc. render, include sector-specific keywords
  - **If Blocked:** Skip if time/budget constrained, focus on Services pages

- [ ] **4.3.3** Add internal linking
  - **Goal:** Link Services pages to each other, link Home to About/Services
  - **AC:** All pages have 2+ internal links, no orphan pages
  - **If Blocked:** Manual review, add links in Phase 4

---

## Phase 4: Polish & Testing (Week 7)

### 5.1 Accessibility
- [ ] **5.1.1** Run WCAG AA accessibility audit
  - **Goal:** Ensure site usable by screen readers, keyboard navigation
  - **AC:** Lighthouse accessibility score 90+, no critical violations
  - **If Blocked:** Fix high-priority issues only, defer minor issues

- [ ] **5.1.2** Add focus states to all interactive elements
  - **Goal:** Keyboard users can see focus indicators
  - **AC:** Tab through site, all links/buttons have visible focus ring
  - **If Blocked:** Use Tailwind default focus styles

- [ ] **5.1.3** Test with screen reader (NVDA or VoiceOver)
  - **Goal:** Verify content reads logically, alt tags work
  - **AC:** Manual test confirms no major issues
  - **If Blocked:** Use automated tools only if no screen reader available

### 5.2 Cross-Browser Testing
- [ ] **5.2.1** Test in Chrome, Firefox, Safari, Edge
  - **Goal:** Site renders correctly in all major browsers
  - **AC:** Visual inspection shows no layout breaks, forms work
  - **If Blocked:** Fix Chrome/Safari first, defer Firefox/Edge if time limited

- [ ] **5.2.2** Test on mobile devices (iOS, Android)
  - **Goal:** Responsive design works on real devices
  - **AC:** Touch targets large enough, no horizontal scroll
  - **If Blocked:** Use browser DevTools device emulation

### 5.3 Performance Optimization
- [ ] **5.3.1** Run Lighthouse performance audit
  - **Goal:** Desktop 90+, Mobile 80+
  - **AC:** No performance warnings, Core Web Vitals pass
  - **If Blocked:** Defer image optimization if under time pressure

- [ ] **5.3.2** Optimize image loading (lazy load, WebP)
  - **Goal:** Images load only when visible, use modern formats
  - **AC:** Lighthouse suggests no further image optimizations
  - **If Blocked:** Use Next.js Image component defaults

- [ ] **5.3.3** Minimize JavaScript bundle size
  - **Goal:** Remove unused dependencies, code-split if needed
  - **AC:** Bundle analyzer shows no bloat, load time under 2s
  - **If Blocked:** Defer if bundle already small

### 5.4 Content & Design Review
- [ ] **5.4.1** Final copy review with Phil
  - **Goal:** Phil approves all text on site
  - **AC:** Email confirmation from Phil, or annotated screenshots
  - **If Blocked:** Proceed with Jono's approval if Phil unavailable

- [ ] **5.4.2** Final design review
  - **Goal:** Ensure brand colors, typography, spacing consistent
  - **AC:** Visual QA checklist complete, no design bugs
  - **If Blocked:** Document known issues, fix post-launch if time limited

---

## Phase 5: Launch & Handoff (Week 8)

### 6.1 Pre-Launch Checklist
- [ ] **6.1.1** Final QA pass
  - **Goal:** Click through every page, test all forms/links
  - **AC:** Checklist complete, no broken links or 404s
  - **If Blocked:** N/A (must complete)

- [ ] **6.1.2** Set up redirects (if migrating from old site)
  - **Goal:** 301 redirects from old URLs to new structure
  - **AC:** Old URLs redirect correctly, no 404s for known pages
  - **If Blocked:** Skip if no old site exists

- [ ] **6.1.3** Test contact form end-to-end
  - **Goal:** Submit form, verify email arrives
  - **AC:** Test email received at Phil's address
  - **If Blocked:** N/A (must work for launch)

### 6.2 Deployment
- [ ] **6.2.1** Deploy to production
  - **Goal:** Push final changes to main branch, trigger production deploy
  - **AC:** Site live at custom domain, SSL active
  - **If Blocked:** N/A (must complete)

- [ ] **6.2.2** Submit sitemap to Google Search Console
  - **Goal:** Help Google discover all pages
  - **AC:** Sitemap submitted, no errors in GSC
  - **If Blocked:** Defer 1-2 days if GSC verification slow

- [ ] **6.2.3** Monitor for errors (first 24 hours)
  - **Goal:** Watch Sentry/Vercel logs for runtime errors
  - **AC:** No critical errors, performance stable
  - **If Blocked:** Fix urgent issues immediately, defer minor bugs

### 6.3 Handoff & Documentation
- [ ] **6.3.1** Create handoff documentation
  - **Goal:** Explain how to update content, add new pages, access analytics
  - **AC:** Document in `docs/handoff.md`, shared with Phil
  - **If Blocked:** Provide verbal walkthrough if no time to write docs

- [ ] **6.3.2** Transfer ownership (if applicable)
  - **Goal:** Add Phil as admin to Vercel, Google Analytics, domain registrar
  - **AC:** Phil confirms access
  - **If Blocked:** Jono retains admin access, grants Phil editor role

- [ ] **6.3.3** Post-launch support window
  - **Goal:** Fix bugs, answer questions for 2 weeks post-launch
  - **AC:** Bug fixes deployed within 48 hours, Phil satisfied
  - **If Blocked:** N/A (included in scope)

---

## Phase 6: Optional Enhancements (Future)

### 7.1 Blog/News Section
- [ ] **7.1.1** Set up blog infrastructure
  - **Goal:** Markdown or CMS-based blog for project updates, industry insights
  - **AC:** `/blog` route works, posts render, RSS feed available
  - **If Blocked:** Out of scope for initial launch, defer to Phase 7

### 7.2 Case Studies/Portfolio
- [ ] **7.2.1** Add case study pages
  - **Goal:** Showcase past projects (with client permission)
  - **AC:** `/case-studies/[slug]` pages render, include images/stats
  - **If Blocked:** Out of scope if no approved case studies

### 7.3 Client Portal (Advanced)
- [ ] **7.3.1** Build login system for clients
  - **Goal:** Secure area for project documents, invoices
  - **AC:** Auth works, clients can upload/download files
  - **If Blocked:** Out of scope for MVP, separate project

---

## Success Criteria (Overall)

- [ ] Site live at custom domain with SSL
- [ ] All core pages complete (Home, About, Services x5, Contact)
- [ ] Contact form works, emails delivered
- [ ] SEO foundation in place (metadata, sitemap, keywords)
- [ ] Lighthouse scores: Performance 90+ (desktop), 80+ (mobile), Accessibility 90+
- [ ] Phil approves final design and content
- [ ] Handoff documentation delivered

---

**Next Task:** Phase 0, Task 1.1.1 (Create Tailwind config with brand colors)

