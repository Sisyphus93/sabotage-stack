# Lens · skill-curve-audit

Skill: `GameDevelopmentAudit/skills/skill-curve-audit/SKILL.md` (read in full).

## Core skills

1. Anticipatory timing of a single press. 2. Reading a distorted or partly hidden mover. 3. (Solo) spending a 4-vote ballot. 4. (Teamwork) not being the one who misses.

## L1 · the perfect window (confirmed, with a correction to the brief)

- `perfectWindowForSpeed = max(3, speed/120)` (`game-core.js:39-41`). Base speed caps at 300, so the base window is ±3 px at every height. **Confirmed**, and observed: every unaffected drop reported 3.00 (`data/matrix-summary.md`).
- **Correction:** Turbo is not the only thing that lifts it. Any effect that pushes speed past 360 px/s does: Slow-to-Dart's ×2.5 lunge from height 1, Gravity Slingshot's ×2.1 peak from height 7, Drunk's ×1.9 lurch from about height 10, Turbo from height 15 (`data/core-sims.json`). Observed under Turbo: 3.40 to 3.75.
- **What the formula is for:** ±speed/120 px is exactly one 60 Hz frame of travel. It is a floor that stops the window becoming shorter than a frame. It is not a difficulty curve. Intended or not, it is coherent.
- **Effect-adjusted speed is used** at all three call sites (`html:2780` via `speedAtLanding`, `round-engine.js:487-494`, `533-541`). Refutes the worry that it might not be.
- **Difficulty rises through speed alone.** In time, the window shrinks from 42.9 ms at height 0 to 20 ms at height 32 and stays there. Block width only shrinks through the player's own errors. The other ramps are the 7 s vote cadence at height 25 and Zoom unlocking at 12.
- **Can a player perceive it?** Not before the fact. There is no centre mark or guide; the only signals are after the drop (banner, star, full width kept). Superglue draws a cue; normal play does not.

## Learning path

| Skill | Introduced | Practised safely | Tested |
|---|---|---|---|
| timing | first second | yes: a miss is impossible until the block is under 120 px wide | continuously |
| reading effects | first vote resolves at 13 s | **no**: the DEV lab exists but is labelled as a developer tool (F-020) | immediately, live |
| voting | 8 s | no | 5 s to read three unexplained names (F-013) |

## Floor and ceiling

- Floor: very low for anyone who can press within 3.5 s. Below that the game is closed: an untouched run ends at 10.6 s on the third forced drop (`data/keyboard-a11y.json` → `idle`) (F-002).
- Ceiling: human limits at 20 ms windows; score is height only in solo, so perfects matter only by preserving width. No optional objectives or streak goals to widen the band.

## Failure loops

| State | Cost | Time back to play | Lesson |
|---|---|---|---|
| Solo miss | run | about 2 s collapse, one press on a focused button | clear |
| Teamwork miss | everyone's round | host must rematch; players wait | blame lands on one person |
| Competitive miss | your stack; you watch for up to 90 s | next round | clear |
| Competitive disconnect | **your stack**, even for a sub-second drop | next round | none: it teaches nothing (F-006) |
| Teamwork timeout | block dropped wherever it is | immediate | punishes hesitation with a random result (F-010) |

## Failure traps

1. Competitive: disconnected-but-back players are spectators for the rest of the round (F-006).
2. Teamwork with a hidden teammate: 12 s per rotation, no skip, no kick (F-010).
3. After the host leaves, a finished round cannot be restarted by anyone (F-015).

## Difficulty system

Knobs are centralised and named: `speedForHeight`, `PERFECT_WINDOW`, `voteIntervalForHeight`, `SABOTAGE_MIN_HEIGHT`, the timers in `round-engine.js:9-17`, `SOLO_AUTO_DROP_SECONDS`. There is no difficulty or assist setting and no telemetry of where runs end.

## Top three

1. An assist option for the forced timers (F-002).
2. A grace window before a Competitive disconnect ends a stack (F-006).
3. A visible centre tick, at least for the first ten blocks, then test whether it changes perfect rates (F-018, experiment E1).
