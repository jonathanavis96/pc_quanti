#!/usr/bin/env bash
# cortex/cortex.bash - Interactive chat with Cortex via Claude Code
#
# Legacy Rovo Dev version: cortex/rovodev/cortex.bash
#
# This is a generic wrapper. For project-specific entry, use:
#   bash brain/cortex/cortex-pc.bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Delegate to the project-specific script
exec bash "${SCRIPT_DIR}/cortex-pc.bash" "$@"
