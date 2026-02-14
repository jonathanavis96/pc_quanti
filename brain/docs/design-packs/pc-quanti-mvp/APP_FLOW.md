# APP_FLOW - PC Quanti MVP

## What this file is

The **flow inventory**: a complete list of pages/routes and key user journeys
for the PC Quanti website.

This is effectively a **site map + page behaviors** document.

## User Personas

### Primary Persona: Decision Maker

- **Role:** Project Director, Engineering Manager, Procurement Lead
- **Sector:** Nuclear, mining, infrastructure, energy (UK/South Africa focus)
- **Goal:** Find credible, lean project management expertise without big
  consultancy overhead
- **Pain Points:** Previous consultancies were bloated, slow, or lacked
  on-ground delivery experience

### Secondary Persona: Researcher

- **Role:** Junior PM, Admin Assistant, Procurement Analyst
- **Goal:** Gather service provider options for manager/director
- **Behavior:** Scans multiple sites quickly, compares services/credentials

## Top User Goals

1. **Understand what PC Quanti does** (services clarity)
2. **Assess credibility** (Phil's experience, sectors served, trust markers)
3. **Make contact** (enquiry form, phone, email)

## 1) Page Inventory

### Home Page

- **Route:** `/`
- **Primary User Intent:** Understand what PC Quanti offers and why they
  should care
- **Primary CTA:** "Get in Touch" (links to `/contact`)
- **Key Components:**
  - Hero section (tagline + value prop)
  - Services overview (3-5 cards linking to service pages)
  - About snippet (Phil's credibility in 2-3 sentences + link to `/about`)
  - Sectors served (icons/logos: nuclear, mining, infrastructure)
  - Final CTA section (contact form preview or button)
- **States:**
  - Default: Full page load
  - Loading: Skeleton UI (if fetching dynamic data - unlikely for MVP)
  - Error: N/A (static content)
- **Data Dependencies:** None (static content)

### About Page

- **Route:** `/about`
- **Primary User Intent:** Learn about Phil's background and PC Quanti's
  differentiators
- **Primary CTA:** "View Services" or "Contact Us"
- **Key Components:**
  - Phil's story (nuclear + SA industrial experience)
  - Differentiators (lean model, scarce skills access, no corporate bloat)
  - Optional: Team section (if Phil adds associates later)
  - Optional: Testimonials/case studies (if available)
- **States:**
  - Default: Full page load
- **Data Dependencies:** None (static content)

### Services Overview Page

- **Route:** `/services`
- **Primary User Intent:** Browse all services offered
- **Primary CTA:** Navigate to individual service pages
- **Key Components:**
  - Grid of service cards (each links to detail page)
  - Services: Project Management, Quantity Surveying, Contract Admin,
    Claims Management, Project Controls
  - Brief description per service (1-2 sentences)
- **States:**
  - Default: Full page load
- **Data Dependencies:** None (static content)

### Individual Service Pages

- **Routes:**
  - `/services/project-management`
  - `/services/quantity-surveying`
  - `/services/contract-administration`
  - `/services/claims-management`
  - `/services/project-controls`
- **Primary User Intent:** Understand specific service offering in detail
- **Primary CTA:** "Get in Touch" (links to `/contact` with service
  pre-selected)
- **Key Components:**
  - Service name + description (2-3 paragraphs)
  - What's included (bullet points)
  - Sectors this applies to
  - Optional: Case study snippet or example deliverable
- **States:**
  - Default: Full page load
- **Data Dependencies:** None (static content)

### Contact Page

- **Route:** `/contact`
- **Primary User Intent:** Submit enquiry or find contact details
- **Primary CTA:** Submit contact form
- **Key Components:**
  - Contact form (Name, Email, Phone, Service of Interest dropdown, Message)
  - Alternative contact methods (email, phone displayed)
  - Optional: Office address (if Phil has physical location)
- **States:**
  - Default: Empty form
  - Submitting: Loading spinner on button
  - Success: Confirmation message ("Thanks, we'll be in touch")
  - Error: Validation errors inline, submission failure message
- **Data Dependencies:** Formspree API (third-party form submission)

### Error Pages

- **Route:** `/404` (not-found)
- **Primary User Intent:** Navigate back to valid content
- **Primary CTA:** "Go to Homepage"
- **Key Components:**
  - Friendly 404 message
  - Navigation links (Home, Services, About, Contact)
- **States:**
  - Default: Full page load
- **Data Dependencies:** None

- **Route:** `/error` (global error boundary)
- **Primary User Intent:** Recover from unexpected error
- **Primary CTA:** "Try Again" or "Go to Homepage"
- **Key Components:**
  - Generic error message
  - Reset button (Next.js error boundary feature)
- **States:**
  - Default: Full page load
- **Data Dependencies:** None

### Loading Page

- **Route:** `/loading` (Next.js loading UI)
- **Primary User Intent:** Wait for page content
- **Key Components:**
  - Skeleton UI or spinner
- **States:**
  - Default: Visible during page transition
- **Data Dependencies:** None

## 2) Primary User Journeys

### Journey 1: Discovery → Service Enquiry (Most Common)

- **Entry Point:** Google search → Home page
- **Steps:**
  1. Land on Home page
  2. Scan hero + value prop
  3. Browse services overview section
  4. Click on specific service card → Service detail page
  5. Read service details
  6. Click "Get in Touch" CTA → Contact page
  7. Fill form (service pre-selected)
  8. Submit enquiry
- **Success Outcome:** Enquiry submitted, Phil receives notification
- **Failure Modes:**
  - User bounces at Home (unclear value prop) → Fix: Hero copy iteration
  - User confused by services → Fix: Clearer service descriptions
  - Form submission fails → Fix: Formspree error handling + retry UX

### Journey 2: Credibility Check → Contact

- **Entry Point:** Referral or LinkedIn → About page
- **Steps:**
  1. Land on About page
  2. Read Phil's background + differentiators
  3. Click "View Services" or "Contact Us"
  4. If Services: Browse, then navigate to Contact
  5. Submit enquiry
- **Success Outcome:** Enquiry submitted
- **Failure Modes:**
  - Insufficient credibility markers → Fix: Add testimonials/case studies
  - No clear CTA after reading → Fix: Stronger CTA placement on About

### Journey 3: Direct Contact (Returning Visitor or Referral)

- **Entry Point:** Direct URL to `/contact` or navigation menu
- **Steps:**
  1. Land on Contact page
  2. Fill form or use phone/email directly
  3. Submit enquiry (if form)
- **Success Outcome:** Enquiry submitted
- **Failure Modes:**
  - Form validation errors → Fix: Clear inline validation messages
  - No alternative contact methods → Fix: Display phone/email prominently

### Journey 4: SEO → Service Page → Contact

- **Entry Point:** Google search for specific service
  (e.g. "UK nuclear project management")
- **Steps:**
  1. Land on service detail page (e.g. `/services/project-management`)
  2. Read service details
  3. Click "Get in Touch" CTA
  4. Submit enquiry with service pre-selected
- **Success Outcome:** Enquiry submitted
- **Failure Modes:**
  - Service page not ranking → Fix: SEO optimization (Phase 3)
  - User bounces (content not relevant) → Fix: Service page copy iteration

## 3) Navigation Structure

**Global Navigation (Header)**

- Logo (links to Home)
- Home
- About
- Services (dropdown: all 5 services)
- Contact
- CTA Button: "Get in Touch" (links to Contact)

**Footer Navigation**

- Quick Links: Home, About, Services, Contact
- Contact Info: Phone, Email
- Legal: Privacy Policy, Terms of Service (optional, add if Phil requests)
- Copyright: © 2026 PC Quanti

## Completeness Checklist

- [x] Every user-visible route/page listed
- [x] Each page has states defined (loading/error where applicable)
- [x] Top journeys cover highest-value outcomes (enquiry submission)
- [x] Primary CTAs documented per page
- [x] Navigation structure defined (header, footer)
