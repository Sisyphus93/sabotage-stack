# Lens · game-interface-audit (+ rubrics `game-ui-ux`, `input-systems`, `game-ui-frontend`, `game-playtest`)

Skills: `GameDevelopmentAudit/skills/game-interface-audit/SKILL.md` (read in full); `openai/plugins …/game-ui-frontend` and `game-playtest` (headings and checklists read; 3D items ignored); `awesome-gamedev-agent-skills …/game-ui-ux` and `input-systems` (workflow headings read). Accessibility detail is in `a11y-ui.md`.

## Decision → display map

| Decision | Needs | Where it is | Verdict |
|---|---|---|---|
| when to drop | mover, tower top | canvas | good; at 1280×800 the canvas runs 25 px past the fold and the Drop button is below it (F-001) |
| which option to back | options, what they do, my pick | vote card | **starved**: no descriptions, no pick state; on phones the card is below the fold (F-004, F-013) |
| ride out or drop | effect and time left | effect card; chip shows the name | on phones the card is at y≈1335 of 844; the chip is 11 px |
| is it my turn (Teamwork) | turn owner, timer | multiplayer card | on phones it starts at y=742; only its heading is in view |
| who is ahead (Competitive) | standings | host canvas, side list | fine on the host; a player sees the list only by scrolling |

Noise candidates: "SINGLE PLAYER · BUILD 01", the DEV lab button in a live game header, the Live stats card (repeats the height chip), the stale "One press, one drop. Keep stacking during votes." on the host view.

## Squint test (`screenshots/vote_paper_1280x800.png`, `vote_paper_390x844.png`)

Survives: the tower, the mover, the height number. Does not survive: that a vote is open. The most important state change in the game is carried by a 11 px chip and a side card.

## Convention inventory

Follows: Space or tap to drop; 1/2/3 for options (advertised, broken, F-003); Escape closes dialogs; room codes. Invented: host as a non-playing role (needs teaching, F-016); "drops · seconds max" lifetimes; "Chat Bribe".

## HUD and layout findings

1. Playfield sizing follows viewport height with no floor: 84×122 px at 640×400, 67×97 at 667×375, 0×1 at 320×256 (F-001).
2. The speed chip repeats itself during votes ("230 PX/S · 230 PX/S") and overlaps the second player's label on the Competitive host board (F-026).
3. Toast and banner both say PERFECT above the mover's lane.
4. Macro Zoom draws blocks over the bottom hint.
5. The Competitive host board is 405 px wide inside an 870 px panel: small for a "stream view".

## Input pipeline

- No added latency: `pointerdown` and `keydown` call `requestDrop()` directly (`html:4376-4414`).
- Keys are hard-coded (Space, Enter on the canvas, digits). No remapping; for a one-button game that is tolerable, but Space is taken globally, so it cannot activate a focused button during play (F-012).
- Touch: the stage, the Drop button and every button are `touch-action: none` (`html:56-58, 182, 185`). Measured: a drag that starts in the header scrolls 225 px; a drag that starts on the canvas, the Drop button or the help text beside it scrolls 0 (F-004).
- Forgiveness: server lag compensation of 0.25 s of travel and a one-frame floor on the perfect window. Both invisible, as assists should be.

## Notification stacking

One toast slot (new text replaces old), one banner, one flavour pop: they cannot pile up, but they can all show at once in the top third of the stage. No queue is needed; a priority rule (effect name beats PERFECT) would help.

## State coverage (game-playtest "turn-state clarity")

| State | What the player sees | Verdict |
|---|---|---|
| connecting, server slow | static "Connecting to the game server…", header says "reconnecting" | F-021 |
| reconnecting | Drop reads "RECONNECTING" within 150 ms | good |
| not my turn | "WAIT YOUR TURN" | clear, but nothing to do |
| eliminated | "STACK FINISHED" | clear |
| host absent | nothing | F-015 |
| leaving a live room | "Room" button flips back to the game | F-005 |

## Top three by clarity per unit of work

1. Fix the digit-key guard: one condition (F-003).
2. Vote strip on the stage plus `touch-action: pan-y` on everything that is not the canvas or Drop (F-004).
3. Size the stage from both width and height with a minimum, and keep Drop in view (F-001).
