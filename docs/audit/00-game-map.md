# 00 · Game map: Sabotage Stack

Target: `https://github.com/Sisyphus93/sabotage-stack` at `226e2b1ea48567ce199c99f6e1046564abf3b5c7` (matches the brief).
Sources read: `shared/game-core.js` (all), `server/round-engine.js` (all), `server/room-manager.js` (all), `server.js` (all), and the non-font parts of `sabotage-stack.html` (markup 751-1109; client logic 1616-1765, 2455-2654, 2745-2834, 2896-3045, 4335-4463, plus targeted greps). Font lines 11-22 were never printed.

## 1. Shape of the product

- One HTML file (`sabotage-stack.html`, 652 KB, of which about 365 KB is embedded fonts) served by a small Node + `ws` server (`server.js`). Solo runs entirely in the browser; multiplayer is server-authoritative.
- Rules live in `shared/game-core.js` and are inlined into the HTML between `SHARED_CORE_START`/`SHARED_CORE_END` (`npm test` enforces parity). Findings cite the shared file once.
- Public surface: `window.SabotageStack = { Core, sabotages, voteEngine, voteAdapter, themes, getTheme, setTheme }`.

## 2. Roles (important, and not obvious from the title screen)

| Role | How you get it | Can drop blocks | Can vote | Notes |
|---|---|---|---|---|
| Solo player | Play solo | yes | yes (counts as 4 votes against 15-25 simulated chat votes) | fully offline |
| Host | Host Teamwork / Host Competitive | **no** ("HOST VIEW", Drop disabled) | **yes, and only the host** (`vote.cast` is host-only, `room-manager.js:344-351`) | the "stream view"; starts rounds, rematches, closes the room |
| Player | Join Game + 4-letter code | yes | **no** (vote buttons disabled) | 2 to 6 per room; a round needs **two connected players besides the host** (`room-manager.js:254`) |

## 3. State machine

```
title ──Play solo──▶ game(playing) ──8 s──▶ vote open (5 s, block keeps moving) ──▶ effect active (5 s, or 8 s / 3 drops)
  │                      ▲   │                         └─ repeats every 10 s (7 s from height 25) ─┘
  │                      │   └─ miss (no overlap) ─▶ collapse animation ─▶ results ──Play again──▶ game
  ├─DEV lab──▶ game(devMode: pick any effect, no votes, no score; Esc / Menu exits)
  ├─How to play──▶ <dialog#how-dialog>     ├─Join Game──▶ <dialog#join-dialog> ──▶ lobby (player)
  └─Host Teamwork/Competitive──▶ lobby (host) ──Start round (≥2 players)──▶ game ──▶ results ──Rematch (host only)──▶ game
```

Server round phases: `lobby → playing → results` (`room.phase`), with `paused` only in Teamwork when every player is disconnected.

## 4. Mode differences

| | Solo | Teamwork | Competitive |
|---|---|---|---|
| Towers | one | one shared tower, fixed turn order | one per player, simultaneous |
| Time pressure | block auto-drops after **3.5 s** (`html:1135`, `3039-3041`) | **10 s** turn, then client auto-drop within a 2 s grace, else turn forfeited | **90 s** round clock; no per-block timer |
| End | first miss | first miss by anyone ends the round for all | clock, or all stacks ended |
| Score | height | height + perfects (team) | height only; ties share the win |
| Votes | every 10 s (7 s from height 25), first at 8 s, 5 s long; block keeps moving | opens only between turns; **play stops for the 5 s vote** | overlays live play; cadence uses the **leader's** height |
| Who is hit | you | whoever takes the next turn (Crumble: the whole team) | **the current leader only** (random among tied leaders, `round-engine.js:377-385`) |
| Effect lifetime | 5 s, or 8 s / 3 drops | cleared when the targeted player drops (drop-counted ones persist) | 5 s, or 8 s / 3 drops |
| Disconnect | n/a (hidden tab pauses) | turn forfeited; player rejoins rotation on resume | **stack ends permanently for the round** (`round-engine.js:763-771`) |
| Zero votes | n/a (bots always vote) | random winner (`game-core.js:336-344`) | random winner |

## 5. Core numbers (`shared/game-core.js`, `server/round-engine.js`)

- Canvas 360×520, `BLOCK_H` 22, base block 200 wide, `MIN_WIDTH` 30.
- Speed `min(300, 140 + 5·height)` px/s (cap reached at height 32).
- Perfect window `max(3, speed/120)` px each side; 14 px under Superglue. The call sites pass the **effect-adjusted** speed (`html:2780`, `round-engine.js:487-494`, `533-541`). Observed in play: 3.00 on every drop except under Turbo (3.40 to 3.75).
- A miss needs zero overlap, which is geometrically impossible while the block is 120 px or wider on a centred tower.
- Lag compensation 0.25 s of travel; position tolerance `max(18, 0.35·speed + 12)` px.
- Vote: 3 options from 3 different categories, never the previous winner, at least one "harsh" (everything except Superglue). Ties and empty ballots resolve at random.

## 6. Effect table

Type: **M** changes block physics, **V** changes only what you see. "Tower moves" and "local flicker" are measured (`data/sandbox.json`, 60 fps canvas sampling, Paper 390×844).

| id | Name | Category | Lifetime | What it does (in-game text) | Type | Reduced motion | Min height | Tower moves | Local flicker /s |
|---|---|---|---|---|---|---|---|---|---|
| turbo | Turbo Mode | kinetic | 5 s | speed ×1.7 | M | stays | 0 | no | 0 |
| drunk | Drunk Block | kinetic | 5 s | alternates ×0.25-0.45 and ×1.55-1.9 | M | stays | 0 | no | 0 |
| slowmo | Slow-to-Dart | kinetic | 5 s | ×0.3 for 0.78 s then ×2.5, 1.4 s cycle | M | stays | 0 | no | 0 |
| magnet | Gravity Slingshot | kinetic | 5 s | up to ×2.1 over the tower centre | M | stays | 0 | no | 0 |
| portal | Portal Walls | trajectory | 8 s / 3 drops | wraps through the sides | M | stays | 0 | no | 0 |
| rollercoaster | The Rollercoaster | trajectory | 5 s | mover bobs up to 45 px above the landing line | V | **excluded** | 0 | no | 0 |
| pisa | The Pisa Tilt | trajectory | 5 s | view sways up to 16° | V | **excluded** | 0 | 97% of frames | 12 |
| earthquake | Earthquake | trajectory | 5 s | view trembles ±8 px / ±3 px at about 7-11 Hz | V | **excluded** | 0 | 99% of frames | 19 |
| spotlight | Spotlight | optical | 5 s | blacks out the field except one beam | V | stays | 0 | no | 0 |
| peekaboo | Peekaboo | optical | 5 s | mover blinks on a 0.7 s cycle | V | **excluded** | 0 | no | 3 |
| zoom | Macro Zoom | optical | 5 s | 1.85× view locked on the top | V | stays ("safe") | **12** | no | 0 |
| double | The Shell Game | optical | 5 s | mirrored decoy; a small crack marks the real one | V | stays | 0 | no | 0 |
| accordion | The Accordion | geometry | 5 s | width breathes 45-100% every 0.8 s | M | **excluded** | 0 | no | 0 |
| crumble | Crumble | geometry | 8 s / 3 drops | non-perfect landings lose 5 px per side; **team-global** in Teamwork | M | stays | 0 | no | 0 |
| superglue | Chat Bribe: Superglue | geometry | 8 s / 3 drops | 14 px perfect window (the only non-"harsh" effect) | M (helps) | stays ("safe") | 0 | no | 0 |
| calipers | Drafting Calipers | geometry | 8 s / 3 drops | rebounds limited to 38 px beyond the tower edges | M (helps, see F-019) | stays ("safe") | 0 | no | 0 |

One effect at a time per target: a new winner replaces the running one (`round-engine.js:269-273`); nothing is queued except the single `pendingSabotage` slot that Teamwork holds until the next turn starts.

## 7. Message protocol (JSON over `/ws`, protocol 1)

Client → server: `room.create {mode, reducedMotion}` · `room.join {code, name, reducedMotion}` · `room.resume {code, resumeToken, reducedMotion}` · `client.preferences {reducedMotion}` · `round.start` · `round.rematch` · `room.leave` · `room.close` · `player.position {sequence, x, width, turnId?}` (about 13/s) · `player.drop {requestId, x, sequence, turnId?, auto?}` · `vote.cast {option}` (host) · `client.ping`.

Server → client: `connected` · `room.created | room.joined | room.resumed` (resume token goes only to its owner) · `room.state {state}` (the full snapshot, sent on every change) · `round.started` · `turn.started` · `turn.auto-drop` · `turn.forfeited` · `player.position` (every mover, every 100 ms tick) · `block.land | block.perfect` · `vote.open | vote.updated | vote.resolved` · `sabotage.active` · `round.results` · `round.paused | round.resumed` · `drop.ack` · `preferences.updated` · `server.pong` · `room.left | room.closed` · `error {code, message}`.

Limits: 16 KB payload; token bucket 200 burst / 100 per second, socket closed after 400 consecutive rejections; 1000 rooms; 6 players; idle rooms swept after 10 min; heartbeat ping every 30 s; same-origin check on upgrade; `/healthz`.

Observed sizes (`data/multiplayer.json`): `room.state` up to 10.1 KB (Teamwork, height 36) and 30.3 KB (Competitive, about 100 blocks in the room); `round.results` 4.6 KB / 14.6 KB; `player.position` ≤ 290 B. No token appears in any state a player receives.

## 8. Sandbox ("DEV lab")

Reached from a visible **DEV lab · Test all 16** button on the title screen (`#dev-mode-button`), and from a **DEV lab** button in the header of a live solo game (`#dev-quick-button`). No unhide was needed. Effects are held indefinitely, no votes or score, and it honours `prefers-reduced-motion` (its description then reads "Motion is reduced.").
