# PC Quanti Lessons (Design Decisions Log)

## What this file is

An **append-only** log of design decisions, fixes, and lessons learned
during PC Quanti development.

Use this to prevent regressions and avoid re-debating settled decisions.

---

## Entries

### 2026-02-14 17:45:00 - Initial Design Pack Creation

- **What changed:** Created PC Quanti Design Pack based on client
  conversations (WhatsApp chat, THOUGHTS.md)
- **Why:** Needed canonical UX/UI constraints to guide implementation and
  keep design crisp
- **What we learned:**
  - Client strongly prefers "crisp" layouts (not "lumpy" with pronounced
    boxes like cbec.co.za)
  - Client approved bright blue #2C02D9 as primary CTA color after
    testing multiple shades
  - Client wants to avoid nuclear-specific branding to stay versatile
    across industrial sectors
  - Logo iteration process: Started with house+arch, removed arch (too
    generic), settled on simple PC house icon
- **Rules for this project:**
  - Always use #2C02D9 for primary CTAs (brand anchor, client-approved)
  - Avoid cluttered layouts: prefer generous whitespace
  - No nuclear imagery in branding (keep sector-agnostic)
  - Mobile-first design (industrial sector users browse on mobile)
  - Reference HattinghPC.co.za as "good crisp example" when in doubt
    about layout density

---

### 2026-02-14 17:45:30 - Design System: Tailwind-Only Approach

- **What changed:** Locked in Tailwind CSS as exclusive styling approach
  (no CSS modules, no styled-components)
- **Why:** Maximizes consistency, reduces decision fatigue, plays well
  with Next.js static generation
- **What we learned:** Client feedback emphasized simplicity and
  crispness - utility-first CSS enforces this naturally
- **Rule:** All styling via Tailwind utility classes; inline styles only
  for dynamic/calculated values

---

### 2026-02-14 17:46:00 - Information Architecture: 5-Page Structure

- **What changed:** Settled on 5-page core structure (Home, About,
  Services overview, 5 service detail pages, Contact)
- **Why:** Balances discoverability (services front-and-center) with SEO
  (dedicated pages per service)
- **What we learned:** Client needs to communicate breadth of services
  but also rank for specific service keywords
- **Rule:** Services must always be discoverable from home page
  (prominent grid/cards in hero or first fold)

---

### 2026-02-14 17:46:30 - Out-of-Scope: Blog Deferred

- **What changed:** Explicitly removed blog from MVP scope
- **Why:** Client scope is focused on SEO foundation and lead gen, not
  content marketing
- **What we learned:** Phil is a solo consultant - ongoing content
  creation isn't realistic without significant time investment
- **Rule:** Keep MVP lean; blog can be added post-launch if Phil wants it

---

## Future Entries

Add new entries in reverse chronological order (newest at top of list
above this line).

**Format:**

```markdown
### YYYY-MM-DD HH:MM:SS - Decision Title

- **What changed:** [brief description]
- **Why:** [rationale]
- **What we learned:** [insights, gotchas, client preferences]
- **Rule:** [guideline for future decisions]
```
