# Cortex Thoughts - PC Quanti

**Last Updated:** 2026-03-10 21:45:00

> **Note:** Historical planning sessions archived in `logs/THOUGHTS_ARCHIVE.md` (100-line policy)

---

## Current Mission

Rebrand PC Quanti website from blue to gold/black and merge authentic live site copy.

**Status:** Visual rebrand complete ✅ — Content merge outstanding ⚠️

---

## Rebrand Progress (2026-03-10)

### ✅ COMPLETED

- All `pc-blue` CSS classes renamed to `pc-gold` across entire codebase
- Header is pitch black (`bg-black`), no transparency on scroll
- No hardcoded blue values (`rgba(0,0,204,...)`, `#2C02D9`, etc.) remaining
- `tailwind.config.ts` has `pc-gold` as primary with `pc-blue` alias fallback
- `globals.css` CSS variables updated for gold color scheme
- Warm neutral grays defined and applied
- Hero, CTA, Footer use dark `#171717` backgrounds with gold accents
- Light sections (Services, Process, FAQ, etc.) properly styled
- BlueprintHeroArt SVG recolored from blue to gold
- Buttons section-aware (gold on dark, dark on light)
- New logos placed (rectangular + square)
- Favicon, apple-touch-icon, OG image updated
- `src/config/site.ts` — correct email, phone, founding year, company name
- `src/components/Footer.tsx` — correct contact info
- Live site copy scraped and saved to `docs/scraped-live-site-copy.md`
- `npx next build` passes ✅

### ⚠️ OUTSTANDING — Content Merge (5 seeds below)

The page/component TEXT CONTENT still has placeholder copy. Needs to be replaced
with authentic content from `docs/scraped-live-site-copy.md` with SEO polish.

See `brain/workers/IMPLEMENTATION_PLAN.md` for the 5 seed tasks.

---

## Notes

- Ouroboros seeds should be kept small (2-3 ACs max) to avoid quota burn
- Use `model_tier: medium` (Sonnet) for content tasks
- The live site has 10 services mapped to dev site's 6 categories
- Contact: info@pcquanti.co.za / 082 863 2154 / WhatsApp +27828632154
- Company name: PC Quanti (not Ltd), founded 2020
