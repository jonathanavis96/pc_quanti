#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERIFY_DIR="$SCRIPT_DIR/.verify"
RULES_DIR="$SCRIPT_DIR/rules"

mkdir -p "$VERIFY_DIR"

# Generate baseline hash files required by verifier.sh
sha256sum "$RULES_DIR/AC.rules" | awk '{print $1}' >"$VERIFY_DIR/ac.sha256"
sha256sum "$SCRIPT_DIR/loop.sh" | awk '{print $1}' >"$VERIFY_DIR/loop.sha256"
sha256sum "$SCRIPT_DIR/verifier.sh" | awk '{print $1}' >"$VERIFY_DIR/verifier.sha256"
sha256sum "$SCRIPT_DIR/PROMPT.md" | awk '{print $1}' >"$VERIFY_DIR/prompt.sha256"
sha256sum "$SCRIPT_DIR/AGENTS.md" | awk '{print $1}' >"$VERIFY_DIR/agents.sha256"

echo "Baselines written to $VERIFY_DIR"
