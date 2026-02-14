#!/usr/bin/env bash
# Repo-root convenience wrapper for Cortex (PC Quanti)
# Allows running: bash cortex-pc.bash (instead of cd brain/cortex && bash cortex-pc.bash)

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ -x "${SCRIPT_DIR}/brain/cortex/cortex-pc.bash" ]]; then
  exec bash "${SCRIPT_DIR}/brain/cortex/cortex-pc.bash" "$@"
else
  echo "ERROR: Could not find brain/cortex/cortex-pc.bash" >&2
  exit 1
fi
