# PC Quanti -- Claude Code Project Context

## Overview

PC Quanti is a B2B consultancy brochure website focused on project delivery services for UK-based stakeholders. Built as a polished, modern MVP with strong UX hierarchy and trust cues.

## Tech Stack

- **Framework:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** GitHub Pages (static export)
- **Design:** Component-driven, motion-enhanced, mobile-first

## Key Files

| File | Purpose |
|------|---------|
| `Specs.md` | Website UX/UI specifications and design principles |
| `PLAN1.md`-`Plan2.md` | Build plans (highest number = current) |
| `brain/cortex/DECISIONS.md` | Architectural decisions |
| `brain/cortex/THOUGHTS.md` | Strategic goals + status |
| `brain/workers/IMPLEMENTATION_PLAN.md` | Active task list for Ralph |

## Directory Structure

```text
pc-quanti/
├── src/                 # Next.js source code
├── app/                 # Next.js app directory
├── public/              # Static assets
├── docs/                # Documentation
├── brain/               # Vendored Brain pack
│   ├── cortex/          # Cortex (planner)
│   ├── workers/         # Ralph (executor)
│   └── skills/          # Knowledge base
└── CLAUDE.md            # This file
```

## Environment

- **Platform:** WSL2 on Windows 11 with Ubuntu
- **Runtime:** Claude Code (primary), Rovo Dev (legacy, `*/rovodev/` frozen archives -- never modify)
- **Cortex:** `bash brain/cortex/cortex-pc.bash` or `bash cortex-pc.bash` (root wrapper)

## Conventions

- **Timestamps:** Always `YYYY-MM-DD HH:MM:SS` with seconds
- **Markdown:** Language tags on ALL code fences, blank lines around fences/lists
- **Git commits:** Conventional messages (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`)
- **Protected files:** `brain/workers/ralph/PROMPT.md`, `loop.sh`, `verifier.sh`, `rules/AC.rules` -- human-only modifications
- **Frozen archives:** Never modify any `*/rovodev/` folder or file
- **Motion:** Client-approved always-on animation; do not disable based on `prefers-reduced-motion`
