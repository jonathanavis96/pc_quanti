#!/usr/bin/env bash
# cortex/cortex-pc.bash - Interactive chat with Cortex for PC Quanti via Claude Code
#
# Legacy Rovo Dev version: cortex/rovodev/cortex-pc.bash

set -euo pipefail

# Resolve script directory
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do
  DIR="$(cd -P "$(dirname "$SOURCE")" && pwd)"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
SCRIPT_DIR="$(cd -P "$(dirname "$SOURCE")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

cd "${PROJECT_ROOT}"

# Colors
readonly CYAN='\033[0;36m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly NC='\033[0m'

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}Cortex Interactive Chat (Claude Code)${NC}"
echo -e "${CYAN}   PC Quanti${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

usage() {
  cat <<EOF
Usage: bash brain/cortex/cortex-pc.bash [OPTIONS]

Cortex Interactive Chat - PC Quanti project manager via Claude Code.

Options:
  --help, -h           Show this help
  --model MODEL        Override model (opus, sonnet, haiku)
  --design             Start in design-only audit mode

Examples:
  bash brain/cortex/cortex-pc.bash                    # Start chat
  bash brain/cortex/cortex-pc.bash --model sonnet     # Chat with Sonnet (less quota)
  bash brain/cortex/cortex-pc.bash --design           # Design-only UI/UX audit mode

For legacy Rovo Dev runtime: bash brain/cortex/rovodev/cortex-pc.bash

EOF
}

# Defaults
MODEL_ARG=""
DESIGN_MODE="false"
# SKIP_PERMISSIONS is intentionally "true" for this interactive chat script.
# Cortex runs as a trusted planning agent in a controlled dev environment;
# skipping permission prompts is required for uninterrupted interactive sessions.
# Use one-shot.sh (which defaults to "false") for non-interactive runs.
SKIP_PERMISSIONS="true"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h | --help)
      usage
      exit 0
      ;;
    --model)
      MODEL_ARG="${2:-}"
      shift 2
      ;;
    --design)
      DESIGN_MODE="true"
      shift
      ;;
    *)
      echo "Unknown: $1" >&2
      usage
      exit 2
      ;;
  esac
done

# Model resolution for Claude Code
CLAUDE_MODEL_FLAG=""
if [[ -n "$MODEL_ARG" ]]; then
  case "$MODEL_ARG" in
    opus | opus46 | opus-4-6)
      CLAUDE_MODEL_FLAG="--model claude-opus-4-6"
      ;;
    sonnet | sonnet46 | sonnet-4-6)
      CLAUDE_MODEL_FLAG="--model claude-sonnet-4-6"
      ;;
    haiku | haiku45 | haiku-4-5)
      CLAUDE_MODEL_FLAG="--model claude-haiku-4-5-20251001"
      ;;
    *)
      CLAUDE_MODEL_FLAG="--model $MODEL_ARG"
      ;;
  esac
fi

echo ""

# Run cleanup before generating context (reduces token usage)
if [[ -x "${SCRIPT_DIR}/cleanup_cortex_plan.sh" ]]; then
  echo -e "${YELLOW}Running plan cleanup...${NC}"
  if bash "${SCRIPT_DIR}/cleanup_cortex_plan.sh" 2>/dev/null; then
    echo -e "${GREEN}Plan cleanup complete${NC}"
  else
    echo -e "${YELLOW}Plan cleanup skipped (no completed tasks)${NC}"
  fi
  echo ""
fi

# Optional design-only prompt injection
DESIGN_PROMPT_BLOCK=""
if [[ "$DESIGN_MODE" == "true" ]]; then
  DESIGN_PROMPT_BLOCK="

---

# Design-Only Mode

You are starting Cortex in **design-only audit mode**.

- Do **not** implement code changes.
- Follow the premium UI/UX audit prompt + protocol here (do not inline/modify it):
  - brain/docs/design/UI_UX_AUDIT_PROMPT_PREMIUM.md
- Produce a structured audit report and a phased plan.
"
fi

# Pre-flight: ensure AGENTS.md exists and is readable
if [[ ! -f "${SCRIPT_DIR}/AGENTS.md" || ! -r "${SCRIPT_DIR}/AGENTS.md" ]]; then
  echo "ERROR: ${SCRIPT_DIR}/AGENTS.md not found or not readable." >&2
  exit 1
fi

# Build the system prompt - lean injection (snapshot fetched on demand)
SYSTEM_PROMPT=$(cat <<EOF
$(cat "${SCRIPT_DIR}/AGENTS.md")

---

$(cat "${SCRIPT_DIR}/CORTEX_SYSTEM_PROMPT.md")
${DESIGN_PROMPT_BLOCK}

---

# Chat Mode Instructions

You are now in **chat mode**. The user wants to have a direct conversation with you.

**Do NOT:**
- Automatically start a planning session
- Update files unless explicitly asked
- Execute the full planning workflow

**DO:**
- Answer questions about the PC Quanti project
- Provide guidance and recommendations when asked
- Help the user understand current state and next steps
- Be conversational and helpful
- Wait for user input and respond naturally

**To run Ralph (execution):** User runs \`bash loop.sh\` from brain/workers/ralph/

The user will now type their questions. Engage in a natural conversation.
EOF
)

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}Starting Cortex Chat via Claude Code...${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""
echo -e "${GREEN}You can now chat with Cortex!${NC}"
echo -e "${GREEN}Cortex has full context of the PC Quanti project.${NC}"
echo -e "${GREEN}Type 'exit' or press Ctrl+C to end the session.${NC}"
echo ""

# Build Claude Code command as array to avoid word-splitting
CLAUDE_CMD=("claude")

if [[ -n "$CLAUDE_MODEL_FLAG" ]]; then
  CLAUDE_CMD+=($CLAUDE_MODEL_FLAG)
fi

if [[ "$SKIP_PERMISSIONS" == "true" ]]; then
  CLAUDE_CMD+=("--dangerously-skip-permissions")
fi

# Write system prompt to temp file
PROMPT_FILE=$(mktemp /tmp/cortex_pc_prompt_XXXXXX.md)
echo "$SYSTEM_PROMPT" > "$PROMPT_FILE"

# Launch Claude Code with system prompt
"${CLAUDE_CMD[@]}" --system-prompt "$(cat "$PROMPT_FILE")"
EXIT_CODE=$?

# Cleanup
rm -f "$PROMPT_FILE"

echo ""
echo -e "${CYAN}========================================${NC}"
if [[ $EXIT_CODE -eq 0 ]]; then
  echo -e "${GREEN}Chat session ended${NC}"
else
  echo -e "${YELLOW}Chat session ended with code ${EXIT_CODE}${NC}"
fi
echo -e "${CYAN}========================================${NC}"

exit $EXIT_CODE
