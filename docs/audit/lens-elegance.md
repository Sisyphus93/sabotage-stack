# Lens · elegance-audit

Skill: `GameDevelopmentAudit/skills/elegance-audit/SKILL.md` (read in full).

## Mechanic inventory (what a player must learn)

1 drop timing · 2 overhang trim · 3 perfect snap · 4 speed ramp · 5 auto-drop timer (solo) / turn timer (Teamwork) / round clock (Competitive) · 6 vote · 7 sixteen effects · 8 drop-counted vs timed lifetimes · 9 roles (host, player) · 10 team-global vs targeted effects.

## Interaction matrix (L6)

Effect × effect: **0 of 120 pairs interact.** One effect runs per target and a new winner replaces the old one (`round-engine.js:269-273`; solo `html:2581`). Nothing is queued: Teamwork holds one `pendingSabotage` until the next turn. At the 7 s cadence an 8 s drop-counted effect is cut about 1 s short by its successor; otherwise nothing is dropped.

Effect × core is where the depth is:

| | speed | width | perfect window | visibility |
|---|---|---|---|---|
| Turbo, Drunk, Slow-to-Dart, Slingshot | ● | | ● (window widens with speed) | |
| Accordion, Crumble | | ● | | |
| Superglue | | | ● | |
| Calipers, Portal | path only | | | |
| Rollercoaster, Pisa, Earthquake, Spotlight, Peekaboo, Zoom, Shell Game | | | | ● |

Seven of sixteen are view-only. A position-reading bot kept a 71-perfect streak through Zoom, Spotlight and Shell Game (`data/multiplayer.json`), so their entire value depends on human perception: see playtest experiment E3.

## Cut and rework list (F-019)

| Effect | Problem | Recommendation |
|---|---|---|
| Drafting Calipers | Bounds keep the mover within 38 px of the tower, so a miss is impossible above 38 px width and the block passes the centre more often. It helps, yet `HARSH_SABOTAGE_IDS` counts it as harsh (`game-core.js:24`) and simulated chat weights it ×3. | Reclassify as a second "bribe", or invert it (bounds that exclude the centre). |
| The Rollercoaster | Vertical bob only; landing x is unchanged. Lowest impact of the visual set. | Rework so the bob changes something, or cut. |
| Turbo vs Gravity Slingshot | Same job. Slingshot is faster (×2.1 vs ×1.7) exactly where it matters. | Keep one, or make Turbo affect something else (shorter auto-drop). |
| Portal Walls | Near-neutral: landing picks the best-overlap wrap (`game-core.js:181-192`). | Keep for spectacle; do not count as harsh. |
| Spotlight | Outlier the other way: the mover is invisible outside one beam. | Keep, but widen the beam at low heights. |

## Degenerate strategies

1. **Teamwork: wait it out (F-009).** Effect clocks start with the turn (`round-engine.js:242-252`); turns last 10 s, effects 5 or 8 s, and there is no round clock. Observed: Crumble expired with 2 s of turn left. A patient team never plays under sabotage.
2. **Competitive: sit just behind the leader (F-007).** Only the leader is hit, so second place until the last seconds is the low-risk line.
3. **Host ballot stuffing (F-014).** Every click is a new voter (`round-engine.js:335`).
4. Solo has no dominant line: the 3.5 s auto-drop closes the waiting strategy, at an accessibility cost (F-002).

## Repo findings

- **Special-case density:** effects are per-id branches across `round-engine.js:134-215` and the client equivalents. Acceptable at 16, but it is why Teamwork semantics drifted (F-024).
- **Duplicate role:** movement and effect logic exists twice (server and client prediction), kept in step by tests and the shared core. A real cost, well managed.
- **Config sprawl:** none. Constants are few and named (`round-engine.js:9-17`).
- **Exploit surfaces:** multipliers do not stack (one effect at a time); host vote count is unclamped.

## Balance goal

Drama, not fairness: "chat" should be able to hurt, and the player should be able to survive with skill. On that goal the count is balanced (4/4/4/4; each effect appears on 18.3-19.3% of ballots) but harshness is not: 2 helpers, 2 near-neutral, 1 blackout. Under reduced motion the pool is 4/1/3/3 and helpers or neutrals are 3 of 11.
