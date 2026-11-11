# AGENTS.md

Instructions for any AI agent working in this repo on branch `auditandfixes`.

## The job

Sabotage Stack was audited at commit `226e2b1`. The audit found 30 issues (F-001 to F-030) and 13 smaller appendix items (A-01 to A-13). Your job is to fix them **one at a time, and only when the owner tells you to**.

The owner decides when each finding gets fixed. Do not start a finding on your own initiative, and do not move to the next one after finishing. Wait to be told ("do F-003", or "next").

Progress is tracked in `FIX-LOG.md` at the repo root. Keep it up to date.

## Where things are

| Path | What it is |
|---|---|
| `sabotage-stack.html` | The whole client in one 650 KB file. **Never read it whole.** Search it (`grep -n`) and read only the lines you need. |
| `shared/game-core.js` | Game rules, shared by client and server. See "Core sync" below. |
| `server/round-engine.js`, `server/room-manager.js`, `server.js` | Authoritative server. |
| `test/` | Test suite (`npm test`). |
| `docs/audit/` | The audit. **Read-only. Do not edit anything in it.** |
| `FIX-LOG.md` | Progress tracker. You update this. |

## Reading a finding

1. Open `docs/audit/findings.json` and find the entry. Fields: `what_happens`, `repro`, `why_it_matters`, `suggested_change`, `evidence`, `confidence`.
2. `docs/audit/REPORT.md` section 4 has the same text, and section 2 lists what is already strong.
3. `docs/audit/data/*.json` holds the raw measurements the finding cites.

Things to know about the evidence:
- **Line numbers are pinned to `226e2b1`** and will drift as fixes land. Find the code by the behaviour or function named in the finding, not by line number.
- **`screenshots/` is not in this repo.** References to screenshots will not resolve. Use the finding's text, `repro`, and the data files instead.
- A finding marked `INFERRED` comes from reading code, not from a run. Confirm the behaviour yourself before changing anything.
- `suggested_change` is a suggestion. If you find a better or safer fix, explain why and use it.

## Workflow for each finding

1. **Read it** (above). Confirm the problem exists in the current code.
2. **Check whether it needs a decision.** If the fix depends on a design choice (what the game should do, not how to code it), **stop**. Give the owner 2-3 concrete options, say what each changes for players, recommend one, and wait for an answer. `FIX-LOG.md` flags the six known cases (F-007, F-008, F-009, F-010, F-014, F-019), but any finding can turn out to need this. Also confirm with the owner before building anything the report labels "Note-only" or "Idea".
3. **Make the smallest change that fixes it.** Stay inside this finding. If you notice another problem, or the fix overlaps a related finding (F-005/F-006, F-008/F-009/F-010, F-002/F-009, F-003/F-012), do not fix it here. Add a line under Notes in `FIX-LOG.md` and mention it.
4. **Run the checks** (below).
5. **Commit once**: `fix(F-0XX): short description`. Update the row in `FIX-LOG.md` (status `fixed, awaiting your check`, commit hash) in the same commit.
6. **Report to the owner** using the format below, then stop.

## Report format

After each fix, reply with:

- **What changed:** the files and what you did, in plain words.
- **Checks run:** which commands, and the result.
- **How to verify:** one of
  - "No human test needed", naming the automated test that covers it, or
  - a short numbered list the owner can follow: exact viewport size or device, exact steps, and what they should see (and what they should *not* see).
- **Risks or side effects:** anything nearby that might behave differently.
- **Noticed but not fixed:** anything for the Notes in `FIX-LOG.md`.

Ask for a human test only when automation cannot answer the question. Layout, readability, motion and sound are the usual cases (for example F-001 zoom and landscape, F-004 phone layout, F-022 text size, F-025 the Peekaboo flash). Server logic, rules, key handling and copy are normally testable in code. Prefer adding an automated test over asking the owner to click.

## Checks

- Use **Node 22.22.2 or newer** (`node -v`). On Node 20 the suite fails misleadingly. That is finding F-030: do not edit `engines` or fix it until F-030's turn.
- `npm ci` once, then `npm test`. The baseline is **42 tests, 42 pass**. Your change must keep it that way.
- Never weaken, skip or delete an existing test to make it pass. If a test is wrong because the behaviour is intentionally changing, say so and ask.
- Add a test with the fix where practical: server and shared logic in `test/engine.test.js` or `test/server.test.js`, client behaviour in `test/client.test.js` (jsdom harness in `test/helpers/`).

## Core sync (important)

`shared/game-core.js` is the source of truth, and an identical copy is inlined into `sabotage-stack.html` between the `SHARED_CORE_START` and `SHARED_CORE_END` markers. After editing `shared/game-core.js`, run:

```
npm run sync-core
```

Never edit the inlined copy by hand. `test/core-sync.test.js` fails if the two differ.

## Do not regress

REPORT.md section 2 lists what already works well. Keep all of it, in particular: zero console errors, frame pacing under CPU throttle, reconnect behaviour, 44 px touch targets, theme contrast, reduced-motion handling, no hazardous flashing, native `<dialog>` focus behaviour, and the one-click first run. If a fix puts any of these at risk, say so before committing.

## Git rules

- Work only on `auditandfixes`. Do not touch `main`, do not merge, do not force-push, do not rewrite history.
- One commit per finding. Do not commit `node_modules/`.
- Do not edit `docs/audit/`. Progress goes in `FIX-LOG.md`.
