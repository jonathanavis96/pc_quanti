# PC Quanti App Flow (Site Map + Behaviors)

## Overview

PC Quanti is a **5-page marketing website** optimized for lead generation. The primary user journey is: discovery → services exploration → contact/enquiry.

**Primary persona:** Project managers, procurement officers, or executives in nuclear/industrial sectors seeking project management consultancy services.

**Top user goals:**
1. Understand PC Quanti's services and expertise
2. Assess credibility (Phil's background, sector experience)
3. Initiate contact for project enquiry

---

## 1) Page Inventory

### Home Page

- **Route:** `/`
- **Primary user intent:** Understand what PC Quanti offers and why they're credible
- **Primary CTA:** "View Our Services" (scroll to services overview) + "Contact Us" (header + footer)
- **Key components:**
  - Hero section (logo, tagline, primary CTA)
  - Value proposition (3-4 key differentiators)
  - Services overview (grid of 5 services with links to detail pages)
  - Trust markers (sectors served, Phil's background teaser)
  - Footer with contact details
- **States:**
  - Default: All content visible (static generation, no loading state)
  - Error: Not applicable (static site)
- **Data dependencies:** None (static content)

---

### About Page

- **Route:** `/about`
- **Primary user intent:** Learn about Phil's background and PC Quanti's differentiators
- **Primary CTA:** "Contact Us"
- **Key components:**
  - Phil's story (nuclear experience, SA industrial background)
  - Credibility markers (sectors worked in, years of experience)
  - Differentiators (lean model, trusted network, scarce skills access)
  - Optional: Photo of Phil (if provided)
- **States:**
  - Default: Static content
- **Data dependencies:** None

---

### Services Overview Page

- **Route:** `/services`
- **Primary user intent:** Browse all services offered
- **Primary CTA:** Click individual service cards to learn more
- **Key components:**
  - Services grid (5 services: PM, QS, Contract Admin, Claims, Project Controls)
  - Each service card: icon, title, 2-3 sentence summary, "Learn More" link
- **States:**
  - Default: Static content
- **Data dependencies:** None

---

### Individual Service Pages (5 pages)

- **Routes:**
  - `/services/project-management`
  - `/services/quantity-surveying`
  - `/services/contract-administration`
  - `/services/claims-management`
  - `/services/project-controls`
- **Primary user intent:** Understand specific service offering in detail
- **Primary CTA:** "Get in Touch" (contact page) or "Request a Quote"
- **Key components:**
  - Service title + description (2-3 paragraphs)
  - Key deliverables (bulleted list)
  - Sectors applicable (nuclear, mining, infrastructure, energy)
  - CTA button to contact page
- **States:**
  - Default: Static content
  - 404: If user navigates to non-existent service slug
- **Data dependencies:** None

---

### Contact Page

- **Route:** `/contact`
- **Primary user intent:** Initiate enquiry or request quote
- **Primary CTA:** Submit contact form
- **Key components:**
  - Contact form:
    - Name (required)
    - Email (required)
    - Phone (optional)
    - Company (optional)
    - Enquiry type (dropdown: General Enquiry, Project Management, Quantity Surveying, Contract Admin, Claims, Project Controls)
    - Message (required)
    - Submit button
  - Contact details (email: info@pcquanti.co.za, phone if provided)
  - Optional: Map or address (if Phil provides)
- **States:**
  - Default: Empty form
  - Loading: Form submission in progress (spinner on submit button)
  - Success: "Thank you, we'll be in touch shortly" message
  - Error: "Something went wrong, please try again or email us directly" message
- **Data dependencies:** Form submission API (or email service like FormSpree/Resend)

---

## 2) Primary User Journeys

### Journey 1: Discovery → Service Enquiry (Primary conversion path)

- **Name:** New visitor exploring services and making enquiry
- **Entry point:** Google search (SEO) or direct link
- **Steps:**
  1. Land on Home page
  2. Read value proposition and hero
  3. Scroll to services overview section
  4. Click "Learn More" on specific service (e.g., Project Management)
  5. Read service detail page
  6. Click "Get in Touch" CTA
  7. Fill out contact form with enquiry details
  8. Submit form → success message
- **Success outcome:** Lead captured (form submission sent to Phil's email)
- **Failure modes:**
  - User bounces on Home (unclear value prop, poor mobile UX)
  - Form submission fails (API error, validation issues)
  - User doesn't trust credibility (no about section link, unclear expertise)

---

### Journey 2: Credibility Check → Contact

- **Name:** Skeptical visitor validating expertise before enquiry
- **Entry point:** Home page or About page (via header nav)
- **Steps:**
  1. Land on Home page
  2. Click "About" in header navigation
  3. Read Phil's background and credentials
  4. Navigate to Services page to understand scope
  5. Click "Contact" in header or footer
  6. Submit enquiry form
- **Success outcome:** Lead captured with higher intent (qualified by credibility check)
- **Failure modes:**
  - About page too generic (doesn't differentiate PC Quanti)
  - Missing trust markers (no sectors, no specific experience mentioned)

---

### Journey 3: Direct Service Search → Enquiry

- **Name:** User searching for specific service (e.g., "UK nuclear quantity surveying")
- **Entry point:** Google search → lands directly on service detail page (e.g., `/services/quantity-surveying`)
- **Steps:**
  1. Land on specific service page via SEO
  2. Read service description and deliverables
  3. Click "Get in Touch" CTA
  4. Fill out form (enquiry type pre-selected if possible)
  5. Submit form
- **Success outcome:** High-intent lead captured
- **Failure modes:**
  - Service page SEO weak (doesn't rank for target keywords)
  - CTA not prominent enough
  - Form too long or confusing

---

### Journey 4: Mobile Browsing → Quick Contact

- **Name:** Mobile user exploring site and making quick phone call or email
- **Entry point:** Mobile Google search
- **Steps:**
  1. Land on Home page (mobile)
  2. Click phone number or email in header/footer
  3. Initiate call or email directly from device
- **Success outcome:** Direct contact initiated (bypasses form)
- **Failure modes:**
  - Contact details not visible on mobile (poor responsive design)
  - Click-to-call not working (phone number not formatted as link)

---

## 3) Navigation Structure

```
Header (sticky on all pages):
  - Logo (links to /)
  - Nav: Home | About | Services | Contact
  - Mobile: Hamburger menu

Footer (on all pages):
  - Contact details (email, phone)
  - Quick links: Services, About, Contact
  - Optional: Social media links (LinkedIn if Phil wants)
  - Copyright notice
```

---

## Completeness Checklist

- [x] Every user-visible route/page is listed
- [x] Each page has states defined (default, loading, error where applicable)
- [x] Top journeys cover highest-value product outcomes (lead generation)
- [x] Mobile-specific journey included (click-to-call)
- [x] Navigation structure documented
