# Brain Skills Sync (Vendored Snapshot)

This repo vendors a snapshot of the Brain knowledge base under:

- `brain/skills/`

## Why

RovoDev/agents generally cannot read files outside the current repo workspace.
Vendoring Brain skills keeps the agent effective in this repo.

## How to refresh the snapshot

From the repo root:

```bash
bash brain/workers/ralph/sync_brain_skills.sh --from-sibling
```

Or explicitly from a local Brain checkout:

```bash
bash brain/workers/ralph/sync_brain_skills.sh --from-local /path/to/brain
```

## How to request new skills / patterns

If you discover missing knowledge, capture a gap locally and mark it for Brain ingestion:

1. Add an entry to `brain/cortex/GAP_CAPTURE.md`
2. Touch the marker file:

```bash
touch brain/cortex/.gap_pending
```

Brain will ingest pending gaps from sibling projects when you run (in the Brain repo):

```bash
bash cortex/sync_gaps.sh
```
