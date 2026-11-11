# Lens · emotion-engine-audit

Skill: `GameDevelopmentAudit/skills/emotion-engine-audit/SKILL.md` (read in full). Design-review and repo-audit workflows both applied.

## Experiential target

Calm, precise timing that an audience keeps wrecking in funny ways (see `lens-game-design-director.md`).

## Emotional beat map (solo, observed timings)

| t | Beat | Trigger | Lands? |
|---|---|---|---|
| 0 s | first block is already moving | challenge | yes: one click from the title, 36 ms to play |
| 0-8 s | early perfects, star on the block, "PERFECT!" | mastery | yes, though the toast and the banner say the same thing twice |
| 8 s | **vote opens** | anticipation, social | weak: on phones the card is below the fold; on desktop three names and no explanation (F-004, F-013) |
| 13 s | **sabotage lands** | surprise, comedy | mixed: view effects are vivid; the four speed effects have no on-canvas look (F-019) |
| 18 s | effect ends | relief | silent: "Sabotage over. For now." is written to `statusMessage` and never shown (`html:3015`, `3815`) |
| miss | collapse, results | loss, "one more go" | yes: fast, funny copy, focus on Play again |

Gap: nothing new happens between votes after about a minute. Speed caps at height 32 and the pool has no escalation beyond the 7 s cadence at height 25.

## Mechanic → feeling trace

| Mechanic | Event | Feeling | Verdict |
|---|---|---|---|
| timing drop | perfect / trim / miss | mastery, dread | core, protect |
| vote (solo) | your 4 votes vs chat | agency, complicity | undersold: the weight is silent and your pick is not marked (F-013) |
| vote (players in multiplayer) | host decides | none: players cannot vote | dead for them (F-008) |
| sabotage on the leader only | one player hit | schadenfreude for the room, nothing for the rest | F-007 |
| Superglue "bribe" | easier perfects | relief, suspicion | good contrast beat; wins only 8.6% unvoted and 19.5% with the player's 4 votes (`data/core-sims.json`) |
| chat flavour lines | roast every 3rd drop | comedy | works, costs nothing |

## Fiction / mechanics mismatches

1. "Chat ruins your life" but in multiplayer there is no chat: one host clicks. Cheapest fix: let waiting players be the chat (F-008).
2. Teamwork UI says "The block keeps moving" and "Keep stacking during votes" while the server has stopped play (F-008).
3. Competitive toast says "+1 TEAM BONUS" (F-026).
4. "Meet all 16 active sabotages" when reduced motion leaves 11 (F-017).

## Repo findings

- **Feedback starvation:** `game.statusMessage` is assigned at `html:2534, 2553, 2585, 2760, 2798, 2818, 3015` and rendered only if it starts with "Vote" (`html:3815`). Effect start, effect end and "used its final drop" never reach the screen as text.
- **Dead time:** Teamwork vote pause, 5 s per cycle for every player (`round-engine.js:222-224`); a hidden or idle teammate costs 12 s per rotation (F-010).
- **Orphan systems:** none of size. `dropDrift` always returns 0 (`game-core.js:167-171`) and is kept for compatibility.

## Top three by emotional payoff per unit of work

1. Show the effect's end and the player's own pick; surface `statusMessage` (hours).
2. Put a one-line vote strip on the stage so the 8-second beat is seen on phones (a day).
3. Give waiting Teamwork players the vote (larger; it turns dead time into the game's fantasy).
