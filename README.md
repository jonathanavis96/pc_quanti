# $PROJECT_NAME

${PROJECT_PURPOSE:-A new project bootstrapped with Ralph Brain.}

## Tech Stack

${PROJECT_TECH:-To be defined.}

## Goals

${PROJECT_GOALS:-To be defined.}

## Development

**Default workflow:**
- Work happens on the \`$WORK_BRANCH\` branch (never directly on main)
- Use `brain/workers/ralph/pr-batch.sh` to create PRs back to main
- Run `brain/workers/ralph/loop.sh` to start AI-assisted development

### Brain skills sync (vendored)

This repo vendors Brain skills under `brain/skills/`.

- How to refresh manually: see `brain/docs/brain-sync.md`
- By default, `brain/workers/ralph/loop.sh` will attempt an offline-first refresh at startup.
  - To disable: `SKIP_BRAIN_SKILLS_SYNC=1 bash brain/workers/ralph/loop.sh ...`

### Getting Started

\`\`\`bash
cd brain/workers/ralph
bash loop.sh --iterations 5
\`\`\`

## 🧠 Built with Ralph Brain

This project uses [Ralph Brain](https://github.com/jonathanavis96/brain) for AI-assisted development.

Ralph integration is optional - the project works standalone.
