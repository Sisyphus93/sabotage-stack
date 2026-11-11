# Sabotage Stack: design, UX and accessibility audit

Target `https://github.com/Sisyphus93/sabotage-stack` at `226e2b1ea48567ce199c99f6e1046564abf3b5c7` (matches the brief's `226e2b1`). Read-only audit; nothing in the game repo was changed. Evidence paths are relative to this directory unless they begin with a game file name.

## 1. Executive summary

**Verdict: a polished, technically solid solo stacker whose multiplayer modes and small-screen or zoomed layouts are not yet at the same standard.** The core loop, the three themes, performance and the server are strong. The problems cluster around the vote (hard to see, hard to cast, and absent for multiplayer players) and around who sabotage actually reaches.

30 detailed findings: 1 P0, 10 P1, 12 P2, 7 P3, plus 13 one-line items in the appendix. Top five:

1. **F-001 (P0)** The playfield shrinks to nothing on zoomed or short viewports (0×1 px at 400% zoom, 67×97 px on a landscape phone) and overflows a 1280×800 laptop.
2. **F-004 (P1)** On phones the vote and effect cards are below the fold and the play card blocks scrolling to them.
3. **F-003 (P1)** Vote keys 1/2/3 do nothing while the Drop button or canvas has focus, which is the default.
4. **F-006 (P1)** In Competitive, a sub-second disconnect permanently ends your stack. Closely related: **F-005**, nobody can leave or close a live room.
5. **F-008 (P1)** Teamwork stops for every vote while players can only wait; with **F-007** (only the leader is ever sabotaged) and **F-009** (effects can be waited out), most multiplayer players rarely meet the game's main feature.

## 2. What is already strong (do not regress these)

1. **Clean runtime.** Zero console errors, warnings or page errors across every flow: 12 theme × viewport runs through all screens, 16 effects × 4 variants, both multiplayer modes, keyboard and reflow runs (`live-play-log.md`).
2. **Frame pacing.** 16.7 ms p50 and 16.7-16.8 ms p95 for all 16 effects under a 4× CPU throttle; worst single frame 66.7 ms (`data/frametiming.json`).
3. **Server design.** Authoritative landing with lag compensation, idempotent drops, rate limits, resume tokens sent only to their owner (no token found in any state a player receives), and a fuzz suite. 42 of 42 tests pass on Node 22.
4. **Reconnect.** A dropped socket was back in under a second and a page reload resumed straight into the round (`data/multiplayer.json` → `teamwork.disconnect`, `teamwork.reload`). Refused connections get an immediate, readable message and solo keeps working.
5. **Touch targets and input latency.** No interactive element under 44×44 px on any screen, theme or viewport. Drop fires on `pointerdown` and `keydown`, with nothing gating it.
6. **Contrast and themes.** One contrast miss (4.45:1) across three themes; grain and scanline overlays measurably do not reduce text contrast; each theme is complete, token-driven, applied before first paint and carried into the canvas.
7. **Reduced motion is a game rule, not a CSS afterthought.** The five motion-heavy effects leave the vote pool, mid-round changes are honoured, and they render static in the sandbox (`data/sandbox.json`).
8. **No hazardous flashing.** The largest frame-to-frame luminance change is 7.9% of the canvas against a 12.6% threshold; camera effects never touch landing maths.
9. **Dialogs.** Native `<dialog>`: focus moves in, Escape closes, focus returns to the opener; join errors appear inline in a status region.
10. **First run.** One click and 36 ms from title to a moving block, no tutorial wall, and a miss is geometrically impossible until the block is under 120 px wide. Solo pauses cleanly in a hidden tab.

## 3. Prioritized findings

| ID | Sev | Title | Lens / skill | Evidence |
|---|---|---|---|---|
| F-001 | P0 | The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop | game-interface-audit; game-ui-frontend | OBSERVED |
| F-002 | P1 | Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds | skill-curve-audit; decision-flow-audit (L4) | OBSERVED |
| F-003 | P1 | Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default | game-interface-audit; input-systems | OBSERVED |
| F-004 | P1 | On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them | game-interface-audit; game-ui-frontend | OBSERVED |
| F-005 | P1 | The Room button bounces straight back to the game, so nobody can leave or close a live room | game-playtest (state coverage); multiplayer-dynamics-audit | OBSERVED |
| F-006 | P1 | Competitive: a sub-second disconnect permanently ends your stack | multiplayer-dynamics-audit (quit handling); skill-curve-audit (failure trap) | OBSERVED |
| F-007 | P1 | Competitive: every sabotage hits the leader; everyone else never experiences one | multiplayer-dynamics-audit (L5); emotion-engine-audit | OBSERVED |
| F-008 | P1 | Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving | decision-flow-audit (L4, dead time); emotion-engine-audit | OBSERVED |
| F-009 | P1 | Teamwork: any sabotage can be waited out inside the 10-second turn at no cost | elegance-audit (degenerate strategy); decision-flow-audit | OBSERVED |
| F-010 | P1 | Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them | multiplayer-dynamics-audit (grief surface, idle handling); decision-flow-audit (L4) | OBSERVED |
| F-011 | P1 | Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop | game-accessibility; WCAG 4.1.3 | OBSERVED |
| F-012 | P2 | Space always drops, so it cannot activate a focused vote option or the Menu button during play | input-systems; keyboard-only run | OBSERVED |
| F-013 | P2 | The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently | decision-flow-audit (L3); emotion-engine-audit | OBSERVED |
| F-014 | P2 | Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person | multiplayer-dynamics-audit (grief surface); elegance-audit (exploit surface) | OBSERVED |
| F-015 | P2 | When the host leaves, players are not told; votes resolve at random and nobody can rematch | multiplayer-dynamics-audit (quit handling); game-interface-audit (state coverage) | OBSERVED |
| F-016 | P2 | Multiplayer needs a host plus two players on separate devices, and nothing says so before you host | game-ux (onboarding); skill-curve-audit (L7) | OBSERVED |
| F-017 | P2 | Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting | game-accessibility (motion); game-feel-audit (calibration flags) | OBSERVED |
| F-018 | P2 | The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone | skill-curve-audit (L1); decision-flow-audit | OBSERVED |
| F-019 | P2 | Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything | elegance-audit (L6); game-feel-audit | OBSERVED |
| F-020 | P2 | Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading | skill-curve-audit (L7); game-ux | OBSERVED |
| F-021 | P2 | If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out | Phase 5; game-interface-audit (state coverage) | OBSERVED |
| F-022 | P2 | Decision-critical text is 9-11 px on phones | game-ux (text size); game-accessibility (text) | OBSERVED |
| F-023 | P2 | Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks | Phase 5 (note-only); multiplayer-dynamics-audit (information channels) | OBSERVED |
| F-024 | P3 | Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble | elegance-audit (special-case density) | INFERRED |
| F-025 | P3 | Peekaboo fades out, flashes back for 40 ms, then cuts to hidden | game-feel-audit; photosensitivity pass | OBSERVED |
| F-026 | P3 | Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more | game-interface-audit (signal vs noise); emotion-engine-audit (fiction/mechanics) | OBSERVED |
| F-027 | P3 | The sound setting is forgotten on reload | game-ux (settings); sound pass | OBSERVED |
| F-028 | P3 | axe: one contrast miss, no h1 outside the title screen, labels on role-less elements | axe-core; impeccable audit (accessibility) | OBSERVED |
| F-029 | P3 | Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks | multiplayer-dynamics-audit (L8); note-only | INFERRED |
| F-030 | P3 | package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20 | Phase 0 baseline | OBSERVED |

### Leads L1-L8: confirmed or refuted

| Lead | Verdict | Where |
|---|---|---|
| L1 perfect window | **Confirmed** flat ±3 px in unaffected play (observed 3.00 on every such drop). **Corrected:** Turbo is not the only lifter; Slow-to-Dart (from height 1), Slingshot (7), Drunk (10) and Turbo (15) all cross 360 px/s. The speed/120 term equals one 60 Hz frame: a floor, coherent as designed. Effect-adjusted speed **is** passed. Difficulty rises through speed only; the window is not perceivable before the drop. | F-018, `lens-skill-curve.md` |
| L2 reduced motion | **Confirmed working.** The 8 remaining effects are small-object motion or held view states and look acceptable; test Slow-to-Dart and Macro Zoom with motion-sensitive players. A mixed room is silently reduced for everyone. `#motion-chip` is a speed readout; the setting is explained nowhere except the sandbox panel. | F-017 |
| L3 voting | Ties and empty ballots are random; last winner excluded; solo ×4 is decisive (77% among harsh options) but unmarked; 5 s is tight for unexplained names; at 8 s a phone player sees only a chip. Keys 1/2/3 are broken in default focus. | F-003, F-004, F-013, `lens-decision-flow.md` |
| L4 time pressure | Solo timeout drops the block where it is (run over in 10.6 s untouched). Teamwork timeout does the same, or forfeits after 2 s more. Slow-input players are shut out. Waiting Teamwork players have nothing to do. | F-002, F-008, F-010 |
| L5 multiplayer dynamics | Target is the next turn-taker (Teamwork) or the leader only (Competitive, 7 of 7). The leader is dogpiled; trailing players are never hit. Grief surfaces: throwing, stalling, host stuffing, host leaving, no exit from a live room. **No leak:** clients get full state but no tokens, and nothing in the design is secret. | F-005, F-007, F-010, F-014, F-015, `lens-multiplayer-dynamics.md` |
| L6 effect set | Zero effect-to-effect interactions (replace, never queue). Calipers helps yet is "harsh"; Rollercoaster and Portal are near-neutral; Turbo duplicates Slingshot; four speed effects look alike; Spotlight is the outlier. Count balanced, harshness not. | F-019, `lens-elegance.md` |
| L7 first run | Time to first drop: one click, 36 ms. The how-to dialog is not needed for solo and the game teaches the drop by doing; it does not teach voting, effects or multiplayer. | F-013, F-016, F-020 |
| L8 vote adapter seam | Duplicate voters collapse (last write wins); no id caps or namespacing; shares ids with host clicks. Note-only. | F-029 |

## 4. Detailed findings

### F-001 · The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop

- **ID:** F-001
- **Severity:** P0
- **Title:** The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop
- **Evidence type:** OBSERVED
- **Evidence:** `data/extras.json → zoom` · `data/keyboard-a11y.json → reflow, rotate` · `data/matrix-summary.md → key element positions` · `screenshots/game_paper_zoom400_320x256.png` · `screenshots/game_paper_zoom200_640x400.png` · `screenshots/game_paper_landscape_667x375.png` · `screenshots/vote_paper_1280x800.png` · `sabotage-stack.html:391-394`
- **Lens:** game-interface-audit; game-ui-frontend; impeccable audit (responsive); game-accessibility; WCAG 1.4.4 / 1.4.10
- **What happens:** The stage is sized from viewport height with no minimum. Canvas size measured: 0×1 px at 320×256 (400% zoom, with 341 px of horizontal scroll), 84×122 at 640×400 (200% zoom), 67×97 at 667×375 and 164×238 at 844×390 (phone landscape). At 1280×800 the opposite happens: the canvas runs 25 px past the fold and the Drop button sits at y=839, off screen. Rotating a phone mid-game leaves the canvas below the fold.
- **Repro:** Open the game at 1280×800 and zoom the browser to 200% then 400%, or hold a phone in landscape, and press Play solo.
- **Why it matters:** Low-vision players who zoom get a smaller game, and at 400% no game. Landscape phone players cannot play. Many laptop players see the tower base and the Drop button cut off.
- **Suggested change:** Size the stage as the largest 360:520 box that fits both the available width and height, with a floor of about 240 px wide; below the floor, let the page scroll rather than shrink further. Keep Drop inside the first viewport, and at short heights move the side cards under the stage. The measured sizes are certain; the CSS cause is inferred from behaviour.
- **Confidence:** high

### F-002 · Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds

- **ID:** F-002
- **Severity:** P1
- **Title:** Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds
- **Evidence type:** OBSERVED
- **Evidence:** `data/keyboard-a11y.json → idle` · `screenshots/autodrop-ring_paper_390x844.png` · `sabotage-stack.html:1135` · `sabotage-stack.html:3039-3041` · `server/round-engine.js:10-11` · `server/round-engine.js:711-723`
- **Lens:** skill-curve-audit; decision-flow-audit (L4); game-accessibility; WCAG 2.2.1
- **What happens:** In solo a block that waits 3.5 s drops itself wherever it is. With no input the drops came at 3.6, 7.1 and 10.6 s, trimming the block from 200 to 132 to 107 px; the third missed and ended the run before the first vote resolved. There is no setting to lengthen or disable the timer. Reading the vote card for more than 3.5 s has the same effect.
- **Repro:** Play solo and do not touch anything.
- **Why it matters:** Players who need more than 3.5 s to act (switch or dwell input, motor impairment, or simply reading the vote) cannot play. Rated P1 rather than P0 because precise timing is the game's core and remains a barrier with or without this timer; for that group it is nonetheless blocking.
- **Suggested change:** Add a solo assist option: auto-drop off or 10 s, with the run labelled as assisted. Pause the auto-drop clock for the first 2 s of each vote. See F-009 for keeping pressure without clocks.
- **Confidence:** high

### F-003 · Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default

- **ID:** F-003
- **Severity:** P1
- **Title:** Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default
- **Evidence type:** OBSERVED
- **Evidence:** `data/extras.json → digits` · `sabotage-stack.html:4416-4424` · `sabotage-stack.html:2474` · `sabotage-stack.html:4387` · `screenshots/keyboard-vote_paper_1280x800.png`
- **Lens:** game-interface-audit; input-systems; decision-flow-audit (L3); keyboard-only run
- **What happens:** Digit keys are ignored whenever the focused element is a button or has role=button. Play solo focuses the Drop button; clicking the stage focuses the canvas (role=button). Measured: focus on Drop + 1 → no vote; canvas + 2 → no vote; Menu + 2 → no vote; nothing focused + 3 or Numpad 1 → vote registered.
- **Repro:** Play solo with the keyboard, wait for the vote at 8 s, press 1.
- **Why it matters:** The advertised way to vote without leaving the drop rhythm fails for keyboard players and for mouse players who clicked the stage. They conclude that voting is broken or do not vote.
- **Suggested change:** Drop the interactive-target guard for digit keys during play; keep only the typing-target guard (inputs, selects). One condition.
- **Confidence:** high

### F-004 · On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them

- **ID:** F-004
- **Severity:** P1
- **Title:** On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them
- **Evidence type:** OBSERVED
- **Evidence:** `data/matrix-summary.md → key element positions` · `data/extras.json → touch` · `screenshots/vote_paper_390x844.png` · `screenshots/vote_paper_360x640.png` · `data/multiplayer.json → teamwork.early.p1Measure` · `sabotage-stack.html:56-58` · `sabotage-stack.html:182` · `sabotage-stack.html:185`
- **Lens:** game-interface-audit; game-ui-frontend; game-ux; impeccable audit (broken touch interaction); decision-flow-audit
- **What happens:** At 390×844 the vote card starts at y=784 and the effect card at y=1335; at 360×640, y=594 and y=1145. When the vote opens a phone player sees a chip reading VOTE LIVE and the heading of a card. The stage, the Drop button and every button are touch-action: none: a drag that starts on the canvas, the Drop button or the help text scrolled 0 px, while a drag from the header scrolled 225 px. In multiplayer the turn card is also mostly below the fold.
- **Repro:** Play solo on a phone-sized viewport and wait 8 s.
- **Why it matters:** The vote is the game's signature moment and the solo player's only agency over it. On the device most players will use, it is out of sight and hard to reach while a 3.5 s timer runs.
- **Suggested change:** Add a compact vote strip (three chips with icon, short name and count) pinned to the bottom edge of the stage whenever a vote is open, and show the active effect and its time left on the stage. Restrict touch-action: none to the canvas and Drop; use pan-y elsewhere.
- **Confidence:** high

### F-005 · The Room button bounces straight back to the game, so nobody can leave or close a live room

- **ID:** F-005
- **Severity:** P1
- **Title:** The Room button bounces straight back to the game, so nobody can leave or close a live room
- **Evidence type:** OBSERVED
- **Evidence:** `data/host-room-probe.json` · `data/extras.json → hostClose` · `screenshots/mp-host-room-midround_paper_1280x800.png`
- **Lens:** game-playtest (state coverage); multiplayer-dynamics-audit; impeccable critique (user control and freedom)
- **What happens:** During a live round the header button reads Room. Clicking it switches to the lobby and the next state update switches back: host game → lobby at 160 ms → game at 241 ms; player game → lobby at 163 ms → game at 440 ms. Close room, Leave room and Back to round are never reachable while a round is live. The lobby even carries the text 'The round is live. Use Back to round to return to play.'
- **Repro:** Start any multiplayer round and click Room as host or player.
- **Why it matters:** A host cannot stop a round that has gone wrong and a player cannot leave politely; the only exit is closing the tab, which in Competitive forfeits the stack (F-006). The cause, a snapshot handler that forces the game screen, is inferred from timing and not read line by line.
- **Suggested change:** Remember that the user chose the lobby view and do not switch screens on snapshots until they press Back to round or the phase changes.
- **Confidence:** high

### F-006 · Competitive: a sub-second disconnect permanently ends your stack

- **ID:** F-006
- **Severity:** P1
- **Title:** Competitive: a sub-second disconnect permanently ends your stack
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → competitive.disconnect` · `screenshots/mp-competitive-player-after-reconnect_sunset_390x844.png` · `server/round-engine.js:763-771` · `server/room-manager.js:230`
- **Lens:** multiplayer-dynamics-audit (quit handling); skill-curve-audit (failure trap)
- **What happens:** A player's socket was closed at 36 s. The client showed 'Connection lost. Rejoining automatically…' and was back in under a second, to 'Your stack is finished. You can watch the room.' The results list them as Disconnected at height 17. In Teamwork the same event only forfeits the turn.
- **Repro:** In a Competitive round, drop a player's connection for a moment (network handoff, locked screen, tab discarded).
- **Why it matters:** Phones lose sockets constantly. One blip costs the whole 90 s round and teaches the player nothing.
- **Suggested change:** Give a grace window (for example 10 s) in which the stack is frozen, not ended; end it only if the player has not resumed by then.
- **Confidence:** high

### F-007 · Competitive: every sabotage hits the leader; everyone else never experiences one

- **ID:** F-007
- **Severity:** P1
- **Title:** Competitive: every sabotage hits the leader; everyone else never experiences one
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → competitive.sabotageTargets` · `data/multiplayer.json → competitive.results` · `screenshots/mp-competitive-host-effect_paper_1280x800.png` · `screenshots/mp-competitive-player-effect_paper_390x844.png` · `server/round-engine.js:373-395` · `server/round-engine.js:326-330`
- **Lens:** multiplayer-dynamics-audit (L5); emotion-engine-audit; elegance-audit
- **What happens:** The winner of each vote is applied to the tallest connected stack only. In the test round 7 of 7 sabotages went to the leader and 0 to the other player, whose panel read 'Sabotage over' throughout. The vote cadence also follows the leader's height, so past height 25 the leader is under an effect about 5 s in every 7. Players are not shown who is being hit.
- **Repro:** Play a Competitive round with one player clearly ahead.
- **Why it matters:** With six players, five are playing a plain stacker while the headline feature happens to someone else, and the safest strategy is to sit just behind the leader. It is a strong catch-up tool, but it removes the game's fantasy for most of the room.
- **Suggested change:** Keep the leader bias but spread it: leader plus one random other stack, or everyone with the leader getting the full duration. Tell every player who is being sabotaged and with what. Validate with playtest experiment E5.
- **Confidence:** high

### F-008 · Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving

- **ID:** F-008
- **Severity:** P1
- **Title:** Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → teamwork.vote` · `screenshots/mp-teamwork-player-vote_paper_390x844.png` · `screenshots/mp-teamwork-host-vote_paper_1280x800.png` · `server/round-engine.js:222-224` · `server/round-engine.js:518-519` · `server/room-manager.js:344-351` · `sabotage-stack.html:2564-2566`
- **Lens:** decision-flow-audit (L4, dead time); emotion-engine-audit; multiplayer-dynamics-audit; game-interface-audit
- **What happens:** Teamwork opens votes between turns and starts no turn until the vote resolves. For 5 s every player sees WAIT YOUR TURN, a 0 s timer, three disabled vote buttons and the text 'The block keeps moving. The host is choosing the room vote.' The control help still says 'Keep stacking during votes.' Only the host can vote in either mode.
- **Repro:** Play Teamwork past 8 s and watch a player's screen.
- **Why it matters:** Players already wait for each other's turns (one turn in six in a full room). Adding a 5 s freeze every 10 s in which they can do nothing, while the copy says otherwise, is the largest block of dead time in the game.
- **Suggested change:** Let players who are not on turn cast the room vote from their phones (the host's click can be one more vote or the tie-break), and fix the copy. This turns the dead time into the 'chat' the title promises.
- **Confidence:** high

### F-009 · Teamwork: any sabotage can be waited out inside the 10-second turn at no cost

- **ID:** F-009
- **Severity:** P1
- **Title:** Teamwork: any sabotage can be waited out inside the 10-second turn at no cost
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → teamwork.waitOut.timeline` · `screenshots/mp-teamwork-target-effect-expired_paper_390x844.png` · `server/round-engine.js:10` · `server/round-engine.js:15-16` · `server/round-engine.js:242-252` · `server/round-engine.js:572-575`
- **Lens:** elegance-audit (degenerate strategy); decision-flow-audit; skill-curve-audit
- **What happens:** The effect clock starts when the turn starts. Timed effects last 5 s and drop-counted ones 8 s; the turn lasts 10 s and Teamwork has no round clock. Observed: Crumble expired at 7.5 s with the turn timer showing 2 s; a 5 s effect leaves 5 s. The effect card then reads 'Sabotage over' and the player drops clean.
- **Repro:** In Teamwork, when you are sabotaged, wait until the effect timer ends, then drop.
- **Why it matters:** A team that notices this never plays under sabotage, and the best strategy makes every turn slower for everyone watching.
- **Suggested change:** In Teamwork count effects in drops, not seconds: the effect lasts until the targeted player's block lands. Solo is already protected by its 3.5 s auto-drop.
- **Confidence:** high

### F-010 · Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them

- **ID:** F-010
- **Severity:** P1
- **Title:** Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them
- **Evidence type:** OBSERVED
- **Evidence:** `data/network.json → hidden` · `data/multiplayer.json → teamwork.waitOut.events` · `screenshots/hidden-player-host-view_paper_1280x800.png` · `screenshots/mp-teamwork-target-autodrop_paper_390x844.png` · `sabotage-stack.html:1926-1933` · `server/round-engine.js:711-746`
- **Lens:** multiplayer-dynamics-audit (grief surface, idle handling); decision-flow-audit (L4); Phase 5 hidden tab
- **What happens:** At 10 s the server requests an auto-drop and the client sends its current position. A visible idle tab therefore drops the block wherever it is, which on a narrow tower ends the round for everyone. A hidden tab (frame loop paused, socket alive) sends a stale position, is rejected with DROP_POSITION_OUT_OF_SYNC and forfeits 2 s later: 12 s per rotation, observed twice in a row, with the team placing one block in 30 s. There is no skip, kick or idle detection.
- **Repro:** In Teamwork, have one player switch tabs or simply stop playing.
- **Why it matters:** One distracted phone stalls or sinks the whole room, and the host has no tool except closing the room, which F-005 makes unreachable mid-round.
- **Suggested change:** On timeout, forfeit the turn without dropping. After a turn with no input, skip that player until they act. Give the host a skip control.
- **Confidence:** high

### F-011 · Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop

- **ID:** F-011
- **Severity:** P1
- **Title:** Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop
- **Evidence type:** OBSERVED
- **Evidence:** `data/matrix-summary.md → live-region log` · `data/multiplayer.json → teamwork.live, competitive.live` · `sabotage-stack.html:3460` · `sabotage-stack.html:3815` · `sabotage-stack.html:971-1008`
- **Lens:** game-accessibility; WCAG 4.1.3; emotion-engine-audit (feedback starvation)
- **What happens:** A 17 s solo run offered three messages: one PERFECT (20 perfects landed; identical text is not re-set), the effect's name, and the collapse. Nothing when the vote opened, nothing for the options, nothing when the effect ended, no turn timer. Status text for those events is written to game.statusMessage in seven places and rendered only when it starts with 'Vote'. In multiplayer the aria-live player list rewrote itself 108 times in 75 s. No real screen reader was run: this is what the DOM offers to one.
- **Repro:** Run a solo game with a MutationObserver on the aria-live regions, or with a screen reader.
- **Why it matters:** Rated P1 on the brief's scale because a group is effectively shut out. Timing by ear is not possible today at all (see appendix A-04), so better announcements help low-vision screen-reader users first.
- **Suggested change:** Announce vote open with the three names, the winner with its one-line description, and effect end, through one polite region; clear the toast before re-setting it; take aria-live off the player lists and announce only turn changes ('Your turn', 'Ada's turn').
- **Confidence:** medium

### F-012 · Space always drops, so it cannot activate a focused vote option or the Menu button during play

- **ID:** F-012
- **Severity:** P2
- **Title:** Space always drops, so it cannot activate a focused vote option or the Menu button during play
- **Evidence type:** OBSERVED
- **Evidence:** `data/keyboard-a11y.json → keyboard.voteButtonKeys, keyboard.spaceOnMenuButton` · `sabotage-stack.html:4410-4414`
- **Lens:** input-systems; keyboard-only run; WCAG 2.1.1
- **What happens:** With a vote option focused, Space dropped a block and cast no vote; Enter cast the vote. With Menu focused, Space dropped a block and stayed in the game.
- **Repro:** During a vote, Tab to an option and press Space.
- **Why it matters:** Keyboard users expect Space to press the focused button. Here it costs them a block.
- **Suggested change:** Let Space drop only when focus is on the body, the canvas or the Drop button.
- **Confidence:** high

### F-013 · The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently

- **ID:** F-013
- **Severity:** P2
- **Title:** The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently
- **Evidence type:** OBSERVED
- **Evidence:** `screenshots/vote_paper_1280x800.png` · `screenshots/vote-picked_paper_1280x800.png` · `data/extras.json → pick` · `data/core-sims.json → soloVote` · `sabotage-stack.html:2503-2522` · `sabotage-stack.html:2622-2630`
- **Lens:** decision-flow-audit (L3); emotion-engine-audit; game-interface-audit; impeccable critique (recognition over recall)
- **What happens:** Options are an icon, a name and a count ('Spotlight', 'Crumble'). Descriptions exist but live in the How to play guide. After clicking an option its class, aria-pressed, border, background and the subtitle were unchanged; only the count rose. The player's choice is worth four votes at the tally, which makes it decisive (wins 77% among three harsh options, 19.5% when backing Superglue versus 8.6% unvoted) but the card never says which option is theirs.
- **Repro:** Play solo, click an option at the first vote, move the pointer away.
- **Why it matters:** For a first-timer the choice is blind and has 5 s; for everyone the strongest lever they hold gives no confirmation.
- **Suggested change:** Add a one-line effect per option (the strings already exist in the sabotage list), a selected state with aria-pressed and a 'Your pick ×4' tag, and keep 'Vote counted' on screen.
- **Confidence:** high

### F-014 · Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person

- **ID:** F-014
- **Severity:** P2
- **Title:** Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → teamwork.vote.afterHostClicks` · `server/round-engine.js:332-341` · `sabotage-stack.html:1025`
- **Lens:** multiplayer-dynamics-audit (grief surface); elegance-audit (exploit surface)
- **What happens:** Three host clicks on one option produced counts of 3, 0, 0: each click is recorded as a new voter (manual-1, manual-2…). The card still shows the solo help: 'One choice per person; in Solo your choice carries four chat votes. Change it any time.'
- **Repro:** Host a room, start a round, click one vote option several times.
- **Why it matters:** The host alone decides every sabotage, which may be the intent for a streamer, but the rules on screen describe something else and a mis-click cannot be undone.
- **Suggested change:** Decide the model. Either one changeable host vote (use a fixed voter id), or say plainly 'Each click adds a chat vote'. Show mode-specific help.
- **Confidence:** high

### F-015 · When the host leaves, players are not told; votes resolve at random and nobody can rematch

- **ID:** F-015
- **Severity:** P2
- **Title:** When the host leaves, players are not told; votes resolve at random and nobody can rematch
- **Evidence type:** OBSERVED
- **Evidence:** `data/extras.json → hostGone` · `screenshots/mp-host-gone-player_paper_390x844.png` · `server/room-manager.js:132-135` · `server/room-manager.js:261-264` · `shared/game-core.js:336-344`
- **Lens:** multiplayer-dynamics-audit (quit handling); game-interface-audit (state coverage)
- **What happens:** After the host's browser closed, the players' state carried hostConnected: false but nothing on screen changed. The next vote still read 'The host is choosing the room vote', closed with counts 0, 0, 0 and a random winner was applied. Rematch is host-only and there is no host migration, so after the round the room can only idle out (10 min). The rematch dead end is inferred from code.
- **Repro:** Start a round and close the host tab.
- **Why it matters:** The room looks alive but is leaderless, and it ends in a dead end.
- **Suggested change:** Show 'Host disconnected' to players. While the host is away, skip votes or let players vote. Let any player rematch after a short wait.
- **Confidence:** high

### F-016 · Multiplayer needs a host plus two players on separate devices, and nothing says so before you host

- **ID:** F-016
- **Severity:** P2
- **Title:** Multiplayer needs a host plus two players on separate devices, and nothing says so before you host
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → teamwork.onePlayer` · `screenshots/mp-lobby-oneplayer-host_paper_1280x800.png` · `screenshots/title_paper_390x844.png` · `server/room-manager.js:254` · `sabotage-stack.html:1082-1097`
- **Lens:** game-ux (onboarding); skill-curve-audit (L7); game-interface-audit (convention inventory)
- **What happens:** The host is a non-playing stream view. With a host and one player, Start round stays disabled: 'Waiting for at least two connected players.' The title buttons say only 'Teamwork · Host a room'. How to play covers solo only; team score, turn order, the host role and Competitive rules are explained nowhere. This audit's own brief assumed two browsers would be enough.
- **Repro:** Host Teamwork on one device and join from one other.
- **Why it matters:** Two friends who want to play together cannot, and find out only in the lobby.
- **Suggested change:** Say it on the title ('Host on a big screen · 2-6 phones join'), add a multiplayer section to How to play, and consider letting the host also play, or a two-device mode.
- **Confidence:** high

### F-017 · Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting

- **ID:** F-017
- **Severity:** P2
- **Title:** Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting
- **Evidence type:** OBSERVED
- **Evidence:** `data/network.json → soloReduced` · `data/multiplayer.json → teamwork.voteOptionsSeen, teamwork.hostMentionsMotion, competitive.voteOptionsSeen` · `data/sandbox.json → sample, sampleReduced` · `screenshots/vote-reducedmotion_paper_1280x800.png` · `screenshots/contact-sandbox_paper-reducedmotion_390x844.png` · `shared/game-core.js:28-29` · `shared/game-core.js:145-154` · `server/round-engine.js:121-123`
- **Lens:** game-accessibility (motion); game-feel-audit (calibration flags); L2
- **What happens:** With the OS preference set, the five excluded effects never appeared (4 solo ballots, 4 Teamwork ballots, 7 Competitive ballots after a mid-round change) and render static in the DEV lab. But no screen mentions it: the guide still says 'Meet all 16 active sabotages', and #motion-chip is a speed readout. One reduced-motion player silently reduces the pool for the whole room. Players without the OS setting cannot turn off Earthquake (whole scene, about 7-11 Hz, 5 s) or Pisa. The eight effects that stay are small-object motion or held view changes and looked acceptable; Slow-to-Dart's ×2.5 lunges and Macro Zoom's scale change are the two to test with motion-sensitive players.
- **Repro:** Enable reduced motion in the OS and play; or join a room where another player has it enabled.
- **Why it matters:** The protection works, which is a real strength, but players cannot see it, choose it, or understand why a room's ballots look different.
- **Suggested change:** Add a Motion control next to Theme (Full / Reduced, defaulting to the OS setting, stored like the theme). When reduced, say '11 of 16 sabotages active' in the guide and show a small 'Reduced motion room' tag in the lobby.
- **Confidence:** high

### F-018 · The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone

- **ID:** F-018
- **Severity:** P2
- **Title:** The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone
- **Evidence type:** OBSERVED
- **Evidence:** `data/matrix-summary.md → run facts (pw)` · `data/core-sims.json → perfectWindow` · `shared/game-core.js:36-44` · `sabotage-stack.html:2780` · `server/round-engine.js:487-494`
- **Lens:** skill-curve-audit (L1); decision-flow-audit
- **What happens:** Every unaffected drop used a 3.00 px window. Because speed climbs from 140 to 300 px/s, the window in time shrinks from 42.9 ms to 20 ms by height 32 and then stays flat. The speed/120 term only ever applies under speed effects (Slow-to-Dart from height 1, Slingshot from 7, Drunk from 10, Turbo from 15; observed 3.40-3.75 under Turbo) and equals one 60 Hz frame of travel: a floor, not a curve. The effect-adjusted speed is passed correctly at every call site. Nothing on the stage marks the centre or the window before the drop.
- **Repro:** Read the perfect-window value on each drop (data/matrix.json → drops).
- **Why it matters:** It is coherent as designed, but a 20 ms invisible target is near chance for most people, and after height 32 nothing new is asked of the player.
- **Suggested change:** Keep the formula. Add a faint centre tick on the top block (at least for the first ten blocks), and consider a late-game ramp that is not speed. Test with experiment E1 before changing numbers.
- **Confidence:** high

### F-019 · Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything

- **ID:** F-019
- **Severity:** P2
- **Title:** Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything
- **Evidence type:** OBSERVED
- **Evidence:** `screenshots/contact-sandbox_paper_390x844.png` · `screenshots/contact-sandbox_sunset_390x844.png` · `screenshots/sandbox-spotlight_paper_390x844.png` · `screenshots/sandbox-double_paper_390x844.png` · `data/core-sims.json → appearance` · `data/multiplayer.json → competitive.results` · `shared/game-core.js:24` · `shared/game-core.js:172-192` · `server/round-engine.js:269-273`
- **Lens:** elegance-audit (L6); game-feel-audit; game-playtest (readability)
- **What happens:** No two effects ever interact: one runs per target and a new one replaces it (0 of 120 pairs). In stills, Turbo, Drunk Block, Slow-to-Dart and Gravity Slingshot are identical to normal play apart from the label. Drafting Calipers keeps the block within 38 px of the tower, which makes a miss impossible above 38 px width, yet it is on the harsh list and simulated chat weights it ×3. Rollercoaster only bobs the block vertically; Portal Walls lands on the best-overlap wrap. Turbo and Slingshot do the same job, Slingshot harder. Spotlight leaves one small beam on a black field. The Shell Game's 'crack' is a few pixels. Counts are balanced (4 per category, each on 18-19% of ballots); harshness is not, and under reduced motion the pool is 4/1/3/3 with three helpers or neutrals in eleven. Seven of sixteen effects change only the view, so their value could not be judged by a bot.
- **Repro:** Open the DEV lab and step through the sixteen effects.
- **Why it matters:** Variety is the game's content. Effects that cannot be told apart, or that help while billed as harm, dilute it.
- **Suggested change:** Give each speed effect an on-stage look (streaks, wobble, wind-up, arcs). Move Calipers off the harsh list or invert it. Rework or cut Rollercoaster; merge Turbo and Slingshot. Widen Spotlight's beam at low heights and enlarge the Shell Game marker. Rank by experiment E3 first.
- **Confidence:** medium

### F-020 · Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading

- **ID:** F-020
- **Severity:** P2
- **Title:** Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading
- **Evidence type:** OBSERVED
- **Evidence:** `screenshots/title_sunset_390x844.png` · `screenshots/vote_paper_390x844.png` · `sabotage-stack.html:4352-4353`
- **Lens:** skill-curve-audit (L7); game-ux; impeccable critique
- **What happens:** 'DEV lab · Test all 16' is the third primary button on the title, and a DEV lab button sits beside Menu during every solo run, where a mis-tap leaves the run. The lab itself is a good practice space, but its panel copy is written for developers ('Offline test bench', 'fixture').
- **Repro:** Open the title screen; start a solo game on a phone.
- **Why it matters:** New players are offered a developer tool before they have played, and the one safe place to learn effects is mislabelled.
- **Suggested change:** Rename and reframe it as Practice ('Try any sabotage'), remove the in-run button, drop 'BUILD 01'.
- **Confidence:** high

### F-021 · If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out

- **ID:** F-021
- **Severity:** P2
- **Title:** If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out
- **Evidence type:** OBSERVED
- **Evidence:** `data/network.json → hang, slow, refuse, outage` · `screenshots/ws-hang-host_paper_390x844.png` · `screenshots/ws-hang-join_paper_390x844.png` · `sabotage-stack.html:1738-1743`
- **Lens:** Phase 5; game-interface-audit (state coverage); game-ux
- **What happens:** With /ws accepted but never answered, the title showed the same line at 0.3, 2, 5, 10 and 20 s; the header read 'Teamwork · reconnecting' on a first connection; the mode buttons stayed enabled and nothing is marked busy. The join dialog shows 'Connecting to the room…' the same way. Refusals are handled well (immediate message, solo still works) and a 7 s delay ends in the lobby; a mid-lobby outage retries with backoff and recovered 3 s after the server returned.
- **Repro:** Block or stall /ws and press Host Teamwork.
- **Why it matters:** On a free hosting plan the server sleeps. A player who clicks Host from a tab left open sees a static sentence for as long as the wake-up takes.
- **Suggested change:** After 5 s say 'Waking the server, this can take up to a minute'; after 30 s offer Retry and Play solo. Use 'connecting', not 'reconnecting', before the first connection. Replace 'Check the server' with player wording.
- **Confidence:** high

### F-022 · Decision-critical text is 9-11 px on phones

- **ID:** F-022
- **Severity:** P2
- **Title:** Decision-critical text is 9-11 px on phones
- **Evidence type:** OBSERVED
- **Evidence:** `data/matrix-summary.md → text under 12px` · `screenshots/vote_paper_360x640.png` · `screenshots/title_sunset_360x640.png`
- **Lens:** game-ux (text size); game-accessibility (text); game-interface-audit (hierarchy)
- **What happens:** Paper: vote option names 11 px, vote help and vote state 10 px, one label 9 px, the speed and effect chip 11 px, control help 11 px. Sunset sets Press Start 2P at 11 px for the effect name and strong text. Prime Time has 10 px labels. Contrast is fine; size is not, and there is no font-size setting.
- **Repro:** Open the game screen at 360 or 390 px wide.
- **Why it matters:** The smallest type carries the vote and the active effect, which must be read in seconds while playing.
- **Suggested change:** Set a 12 px floor for labels and 14 px for vote names and the effect name on phones; pixel fonts need 12 px or more.
- **Confidence:** high

### F-023 · Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks

- **ID:** F-023
- **Severity:** P2
- **Title:** Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks
- **Evidence type:** OBSERVED
- **Evidence:** `data/multiplayer.json → competitive.traffic, teamwork.traffic` · `server/room-manager.js:305-315` · `server/room-manager.js:406-408` · `server/round-engine.js:805-862`
- **Lens:** Phase 5 (note-only); multiplayer-dynamics-audit (information channels)
- **What happens:** room.state carries every block of every stack and is broadcast on each change. Observed maximum 10.1 KB (Teamwork, height 36) and 30.3 KB (Competitive, two players, about 100 blocks); a player received 138 of them plus 1,005 position messages in a 62 s round. A code comment already cites about 52 KB per change for six players at height 40. Size grows with players × height while the drop rate grows with players.
- **Repro:** Log message sizes during a long Competitive round.
- **Why it matters:** On mobile data a full room costs megabytes per round and risks jank on slow phones. Not load-tested here; six-player figures are extrapolated.
- **Suggested change:** Send deltas for drops (block.land already exists) and reserve the full snapshot for join, resume and round start.
- **Confidence:** medium

### F-024 · Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble

- **ID:** F-024
- **Severity:** P3
- **Title:** Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble
- **Evidence type:** INFERRED
- **Evidence:** `server/round-engine.js:114` · `server/round-engine.js:246-249` · `server/round-engine.js:572-588` · `sabotage-stack.html:1088`
- **Lens:** elegance-audit (special-case density)
- **What happens:** Portal Walls, Superglue and Calipers are targeted at the player whose turn it is and count only that player's drops. The next player is not affected, and the 8 s limit usually passes before the first player's turn returns. Crumble is team-global and does last three drops. How to play describes all four the same way.
- **Repro:** Code path: effectApplies → consumeDropEffects, with turn rotation.
- **Why it matters:** A Superglue 'bribe' that helps one drop is a weaker beat than the text promises.
- **Suggested change:** Make all four team-global in Teamwork, or reword to 'your next drop'.
- **Confidence:** medium

### F-025 · Peekaboo fades out, flashes back for 40 ms, then cuts to hidden

- **ID:** F-025
- **Severity:** P3
- **Title:** Peekaboo fades out, flashes back for 40 ms, then cuts to hidden
- **Evidence type:** OBSERVED
- **Evidence:** `data/core-sims.json → peekaboo` · `data/sandbox.json → sample.peekaboo` · `shared/game-core.js:122-129`
- **Lens:** game-feel-audit; photosensitivity pass
- **What happens:** peekabooOpacity returns 1 until 0.31 s, fades to 0 by 0.35 s, then climbs back to 0.975 by 0.389 s and drops to 0 at 0.39 s. The in-game text says it 'fades over 40 ms, then stays hidden'. Frame sampling counted 3 blink pairs per second over 1.7% of the canvas: far below any flash threshold, but one more blink than intended.
- **Repro:** Evaluate Core.peekabooOpacity at 0.33, 0.37, 0.385 and 0.39.
- **Why it matters:** A stray ghost frame makes the effect harder to read fairly.
- **Suggested change:** Return 0 from 0.35 s to the end of the cycle.
- **Confidence:** high

### F-026 · Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more

- **ID:** F-026
- **Severity:** P3
- **Title:** Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more
- **Evidence type:** OBSERVED
- **Evidence:** `screenshots/vote_paper_1280x800.png` · `screenshots/mp-competitive-host-effect_paper_1280x800.png` · `data/multiplayer.json → competitive.effect, competitive.early, teamwork.early, teamwork.vote` · `data/network.json → soloReduced.chip`
- **Lens:** game-interface-audit (signal vs noise); emotion-engine-audit (fiction/mechanics)
- **What happens:** The chip reads 'VOTE LIVE · 230 PX/S · 230 PX/S' during votes and '170 PX/S · 170 PX/S' for non-targets. Competitive perfects toast 'PERFECT DROP · +1 TEAM BONUS'. The 90 s round clock is labelled 'Turn timer'. The turn heading reads 'the next player's turn' in lower case. Player rows say '1 blocks'. The host view keeps 'One press, one drop. Keep stacking during votes.' On the host board the chip covers the second player's name. Results say 'One tower survived the chaos' when none did. Toast and banner both say PERFECT at once.
- **Repro:** See the listed screenshots.
- **Why it matters:** Each is small; together they make the multiplayer modes read as less finished than solo.
- **Suggested change:** A copy pass per mode and role; print the speed once.
- **Confidence:** high

### F-027 · The sound setting is forgotten on reload

- **ID:** F-027
- **Severity:** P3
- **Title:** The sound setting is forgotten on reload
- **Evidence type:** OBSERVED
- **Evidence:** `data/keyboard-a11y.json → sound` · `sabotage-stack.html:1212`
- **Lens:** game-ux (settings); sound pass
- **What happens:** Sound is off by default, which is the right default. Turning it on set aria-pressed and the label; after a reload it was off again and localStorage held nothing for it. Only the theme is stored.
- **Repro:** Turn sound on, reload.
- **Why it matters:** Players who want sound must turn it on every visit.
- **Suggested change:** Store the choice next to the theme; audio still starts only after a user gesture.
- **Confidence:** high

### F-028 · axe: one contrast miss, no h1 outside the title screen, labels on role-less elements

- **ID:** F-028
- **Severity:** P3
- **Title:** axe: one contrast miss, no h1 outside the title screen, labels on role-less elements
- **Evidence type:** OBSERVED
- **Evidence:** `data/matrix-summary.md → axe violations by rule` · `data/matrix.json`
- **Lens:** axe-core; impeccable audit (accessibility)
- **What happens:** Across 54 runs: #effect-label is 4.45:1 in Paper (11 px bold, needs 4.5). Lobby, game and results have no level-one heading because the only h1 is on the hidden title screen. aria-label sits on .brand, .mode-row and .height-chip, which have no role, so 'Blocks placed' may be ignored.
- **Repro:** Run axe-core on the game screen in the Paper theme.
- **Why it matters:** Minor, and cheap to clear.
- **Suggested change:** Darken the label one step; make each screen's main heading an h1 (or keep one visually hidden h1); give labelled containers role=group or use visible text.
- **Confidence:** high

### F-029 · Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks

- **ID:** F-029
- **Severity:** P3
- **Title:** Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks
- **Evidence type:** INFERRED
- **Evidence:** `server/round-engine.js:332-352` · `shared/game-core.js:321-329` · `data/core-sims.json → recordVote`
- **Lens:** multiplayer-dynamics-audit (L8); note-only
- **What happens:** receiveChatVote hands the event to recordVote: one vote per trimmed voterId, last write wins (so changing a vote is allowed and duplicates collapse). There is no length limit (a 100,000-character id was accepted), no platform prefix, no rate limit, and the id space is shared with manual-N host votes, so a chat user called manual-1 would overwrite a host click. Host clicks are unlimited while each chat voter has one vote.
- **Repro:** Call Core.recordVote with the ids described.
- **Why it matters:** Nothing today, since no chat source is connected. It matters the day Twitch or YouTube is plugged in.
- **Suggested change:** When wiring a source: prefix ids by platform, cap id length and distinct voters per ballot, keep host votes in a separate bucket, and take ids from the platform's authenticated payload only.
- **Confidence:** high

### F-030 · package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20

- **ID:** F-030
- **Severity:** P3
- **Title:** package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20
- **Evidence type:** OBSERVED
- **Evidence:** `data/npm-test-baseline.txt` · `data/npm-test-node22.txt`
- **Lens:** Phase 0 baseline
- **What happens:** On Node 20.20.2 npm test reported 30 tests, 29 passing and 1 failing (earthquake.test.js), and four suites skipped with 'jsdom / @napi-rs/canvas not installed (run npm install)'. Both are installed; jsdom 30.1.3 requires Node ^22.22.2 and throws on load. On Node 22.23.4 the result is 42 of 42, matching the brief. The server itself runs fine on Node 20.
- **Repro:** Run npm ci && npm test on Node 20.
- **Why it matters:** A contributor on a supported-looking Node sees a red suite and a wrong hint. No player impact.
- **Suggested change:** Set engines to the real minimum (or pin an older jsdom), add .nvmrc, and make the skip message report the actual error.
- **Confidence:** high

## 5. Quick wins versus larger changes

**About a day or less each**

- F-002 (P1) Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds
- F-003 (P1) Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default
- F-005 (P1) The Room button bounces straight back to the game, so nobody can leave or close a live room
- F-006 (P1) Competitive: a sub-second disconnect permanently ends your stack
- F-011 (P1) Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop
- F-012 (P2) Space always drops, so it cannot activate a focused vote option or the Menu button during play
- F-013 (P2) The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently
- F-014 (P2) Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person
- F-016 (P2) Multiplayer needs a host plus two players on separate devices, and nothing says so before you host
- F-017 (P2) Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting
- F-018 (P2) The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone
- F-020 (P2) Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading
- F-021 (P2) If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out
- F-022 (P2) Decision-critical text is 9-11 px on phones
- F-024 (P3) Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble
- F-025 (P3) Peekaboo fades out, flashes back for 40 ms, then cuts to hidden
- F-026 (P3) Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more
- F-027 (P3) The sound setting is forgotten on reload
- F-028 (P3) axe: one contrast miss, no h1 outside the title screen, labels on role-less elements
- F-030 (P3) package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20

**Larger changes**

- F-001 (P0) The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop
- F-004 (P1) On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them
- F-007 (P1) Competitive: every sabotage hits the leader; everyone else never experiences one
- F-008 (P1) Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving
- F-009 (P1) Teamwork: any sabotage can be waited out inside the 10-second turn at no cost
- F-010 (P1) Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them
- F-015 (P2) When the host leaves, players are not told; votes resolve at random and nobody can rematch
- F-019 (P2) Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything
- F-023 (P2) Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks
- F-029 (P3) Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks

Suggested order: F-003, F-005, F-006 and F-012 first (small code changes that remove defects); then F-001 and F-004 together (one layout pass); then the Teamwork and Competitive design changes (F-007 to F-010), which should be playtested before they are built.

## 6. Experiments for human playtesters

These cannot be judged from code, screenshots or a bot.

| # | Question | Setup | Measure |
|---|---|---|---|
| E1 | Can players feel the perfect window, and does a centre tick help? | A/B: current vs a faint centre tick on the top block | perfect rate by height band (0-9, 10-19, 20-31, 32+); self-reported "I knew why it was perfect" |
| E2 | Is the first vote understood? | First-time players, phone and desktop, no briefing | share who vote at the first ballot; time to first vote; can they say what the winner did? |
| E3 | Which effects earn their place? | 10+ runs per player with per-effect logging | miss rate and width lost per effect; fun and fairness 1-5; can players name the effect from the stage alone? |
| E4 | What do Teamwork players do while waiting? | 4-6 players, 3 rounds, observe | eyes on screen vs phone drift; talk; how soon someone discovers waiting out an effect |
| E5 | Is leader-only sabotage fun? | A/B: leader only vs leader plus one other | leader "picked on" rating; trailing players "left out" rating; final spread of heights |
| E6 | Motion comfort | Include motion-sensitive testers; Earthquake, Pisa, Macro Zoom, Slow-to-Dart; reduced motion on and off | discomfort 0-10 per effect; any who stop |
| E7 | Does the 3.5 s auto-drop collide with reading the vote? | New players, solo | auto-drops that occur while a vote is open; runs ended by an auto-drop |
| E8 | Phone ergonomics | One-handed play, portrait | reach to vote strip or card; accidental drops while scrolling |
| E9 | Does the drop feel good? | Sound on and off | "weight" rating; whether players notice the effect ending |
| E10 | Real assistive tech | NVDA + Chrome, VoiceOver + Safari, TalkBack | what is actually spoken at vote open, effect start and end, turn change |

## 7. Assumptions

1. `$GAME` and `$AUDIT` are siblings under `audit-work/`. Everything created is in `$AUDIT`; `npm ci` wrote only the git-ignored `node_modules/` in `$GAME`.
2. The sandbox has Node 20.20.2. The server ran on it. The test baseline needs Node ≥ 22.22.2, so Node 22.23.4 was downloaded from nodejs.org into `$AUDIT/tooling` (SHA-256 verified) solely to run the game's tests.
3. Chromium's missing system libraries and two fallback fonts were unpacked from Debian packages into `$AUDIT/tooling/syslibs` rather than installed system-wide.
4. **The multiplayer smoke test used three browser contexts (host + two players), not two.** The host does not play and a round needs two players (F-016).
5. **Session-only instrumentation.** An init script wraps `SabotageStackCore` and `WebSocket` to observe state and drive a bot. It never touches source and adds one function call per frame; it was present during frame timing. The bot is immune to view-only effects, so its results say nothing about human difficulty.
6. Zoom was emulated by viewport size (200% → 640×400, 400% → 320×256, the WCAG reference), a hidden tab by pausing `requestAnimationFrame` and firing `visibilitychange`, and a cold start by a local pass-through on port 3101 that stalls only `/ws`.
7. Photosensitivity used per-frame canvas sampling at 60 fps instead of PNG screenshots (which reach about 10 fps); six-frame PNG sequences are saved as evidence. Thresholds follow WCAG 2.3.1.
8. Severity follows the brief's scale literally, so accessibility blockers for a group rank high even when the group is small. F-002 is argued down to P1 and F-011 up to P1 in their own text.
9. `reward-psychology-audit` was skipped: there is no meta-progression, loot or currency.
10. The DEV lab needed no unhide: it is a visible button.

## 8. Not verified

- **Real screen-reader speech.** Only DOM live-region changes were logged.
- **Pinch zoom by gesture.** Synthetic pinch did not register in headless Chromium; the conclusion is from CSS and the viewport meta.
- **Real devices and other browsers.** Frame timing is from headless Chromium with software rendering on 2 vCPUs. Safari and Firefox were not run; iOS viewport units and safe areas were not checked.
- **Audio.** No audio device; only the cue list and toggle state were inspected.
- **Human perception of the seven view-only effects**, and all "feel" judgements.
- **Six-player rooms and load.** Tested with two players; bandwidth at six is extrapolated.
- **Colour-vision deficiency.** No simulator was run; one luminance pair is flagged from arithmetic.
- **What players see when the host closes a room mid-round.** Close room is unreachable during a round (F-005); `room.closed` handling was not observed.
- **Teamwork with one player remaining**, and rooms left idle for the 10-minute sweep.
- **Canvas-drawn text contrast**, WCAG 1.4.12 text spacing and 2.4.11 focus not obscured.
- **The deployed Render instance**, by rule. Cold-start behaviour is a local emulation.
- **The exact code path behind F-005 and the CSS cause of F-001** are inferred from behaviour; the behaviour itself is measured.
- **Visual regression baselines** (game-qa pattern): screenshots were captured, not diffed, because there is no earlier build to compare against.

## 9. Skills used

Cloned shallowly into `skills/` at the commits below (also in `skills/COMMITS.json`). After the audit, the four large clones (openai/plugins, skills-hub-registry, impeccable, game-creator) were pruned to the folders listed here plus licence files, and Node 22 was reduced to its `node` binary, to keep this directory small. No installer, detector or binary from any skill was run. "Full" means every line was read; "checklists" means headings and list items were read with long lines cut.

| Source @ commit | File | Read | Used for |
|---|---|---|---|
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/game-design-director/SKILL.md` | full | `lens-game-design-director.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/emotion-engine-audit/SKILL.md` | full | `lens-emotion-engine.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/elegance-audit/SKILL.md` | full | `lens-elegance.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/skill-curve-audit/SKILL.md` | full | `lens-skill-curve.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/decision-flow-audit/SKILL.md` | full | `lens-decision-flow.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/game-feel-audit/SKILL.md` | full | `lens-game-feel.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/game-interface-audit/SKILL.md` | full | `lens-game-interface.md` |
| Lagunaswift/GameDevelopmentAudit @ `3fa6a229297f` | `skills/multiplayer-dynamics-audit/SKILL.md` | full | `lens-multiplayer-dynamics.md` |
| openai/plugins @ `d420d13051bf` | `plugins/game-studio/skills/game-playtest/SKILL.md` | checklists | playtest order, state coverage, HUD overlap |
| openai/plugins @ `d420d13051bf` | `plugins/game-studio/skills/game-ui-frontend/SKILL.md` | checklists | "protect the playfield", mobile collapse; 3D items ignored |
| tinh2/skills-hub-registry @ `5ec5429a9f9b` | `ux/game-ux/SKILL.md` | checklists (first 60 items) | HUD, menu, text-size checks |
| tinh2/skills-hub-registry @ `5ec5429a9f9b` | `review/game-accessibility/SKILL.md` | checklists (first 70 items) | colour, text, motion, flashing, audio checks; console-only items skipped |
| pbakaus/impeccable @ `ec229b48547f` | `plugin/skills/impeccable/reference/audit.md` | checklists | five audit dimensions, touch and reflow rules |
| pbakaus/impeccable @ `ec229b48547f` | `plugin/skills/impeccable/reference/critique.md` | structure only (first 45 items of about 7,000 words) | Nielsen heuristics pass, run **degraded** (no detector, no sub-agents) |
| gamedev-skills/awesome-gamedev-agent-skills @ `4cce500ce1a7` | `skills/disciplines/game-feel/SKILL.md`, `game-ui-ux/SKILL.md`, `input-systems/SKILL.md` | workflow headings | rubrics in the feel and interface lenses |
| PlayableIntelligence/game-creator @ `53676bd2a524` | `skills/game-qa/SKILL.md` | headings and reference list | Playwright, axe-core, screenshot and FPS-sampling patterns |

**Not found:** none. Path differences: impeccable's `audit` and `critique` are reference files, not skill folders; the tinh2 skills live under `ux/` and `review/`, so the claudskills.com fallback was not needed.

**Not opened:** the `references/` files of the three awesome-gamedev skills, game-qa's seven companion files, the two `agents/openai.yaml` files, and `GameDevelopmentAudit/skills/reward-psychology-audit` (skipped by the brief).

**Skill instructions deliberately not followed:** installers; `impeccable detect`, its live server, sub-agents and end-with-a-question rule; game-qa's required `window.__GAME__` and `render_game_to_text` hooks; each skill's own output format.

## 10. Repo-untouched proof

```
$ git -C $GAME rev-parse HEAD
226e2b1ea48567ce199c99f6e1046564abf3b5c7

$ git -C $GAME status --porcelain
(empty)

$ git -C $GAME status --porcelain --ignored
!! node_modules/
```

Final `npm test` (`node test/run.js`), run from the unmodified repo at report time:

- Node v22.23.4: **tests 42 · pass 42 · fail 0 · cancelled 0 · skipped 0**, exit 0 (`data/npm-test-final-node22.txt`). Matches the brief's baseline of 42 passing.
- Node v20.20.2 (sandbox default): tests 30 · pass 29 · fail 1 · cancelled 0 · skipped 0, exit 1 (`data/npm-test-final-node20.txt`). Same as the first run; see F-030.

Deliverables in this directory: `REPORT.md`, `findings.json`, `00-game-map.md`, eight `lens-*.md`, `a11y-ui.md`, `live-play-log.md`, `screenshots/` (392 files), `data/`, `scripts/`.

## Appendix: remaining findings

- **A-01** (P3, OBSERVED) Clients keep sending player.position after a round ends or their stack ends, drawing 29 error replies per round (ROUND_NOT_LIVE, PLAYER_INACTIVE). Evidence: `data/multiplayer.json → teamwork.logs, competitive.traffic`
- **A-02** (P3, OBSERVED) Multiplayer results leave focus on <body>; solo moves it to Play again. Evidence: `data/multiplayer.json → teamwork.results.p1Focus`
- **A-03** (P3, INFERRED) Room codes are four letters from 24 (331,776); join attempts are limited only by the per-socket rate limit and there is no kick, so a stranger could reach an open lobby. Note-only; not tested. Evidence: `server/room-manager.js:7, 14-16, 165-171, 443-447`
- **A-04** (P3, INFERRED) No non-visual way to play: sound is off by default and no cue encodes the mover's position. Idea: an optional pitch sweep for position. Evidence: `sabotage-stack.html:1110-1121 (cue sheet), a11y-ui.md §6`
- **A-05** (P3, OBSERVED) Player colours 2 and 4 (teal #2F8478, vermilion #D5472F) have nearly equal luminance; a likely red-green confusion pair where no name is adjacent. Evidence: `server/room-manager.js:8; a11y-ui.md §7`
- **A-06** (P3, OBSERVED) Macro Zoom draws blocks over the bottom hint; the chat flavour pop overlaps the tower. Evidence: `screenshots/contact-sandbox_paper_390x844.png, screenshots/vote_paper_1280x800.png`
- **A-07** (P3, OBSERVED) In Sunset the speed and effect chip wraps to two lines and covers more of the stage. Evidence: `screenshots/contact-sandbox_sunset_390x844.png`
- **A-08** (P3, OBSERVED) #theme-select keeps the browser's default focus ring instead of the themed one. Evidence: `data/keyboard-a11y.json → focus`
- **A-09** (P3, OBSERVED) Late joiners get a clear 'This room has already started.' but no way to watch. Idea: spectator join. Evidence: `data/extras.json → lateJoin, screenshots/join-locked_paper_390x844.png`
- **A-10** (P3, INFERRED) The context menu is disabled on every button, which also removes long-press actions for assistive tools. Evidence: `sabotage-stack.html:4390-4395`
- **A-11** (P3, OBSERVED) The Competitive host board is about 405 px wide inside an 870 px panel: small for a screen meant to be streamed. Evidence: `screenshots/mp-competitive-host-effect_paper_1280x800.png`
- **A-12** (P3, OBSERVED) The disabled Start round button is 2.48:1 in Sunset: exempt from contrast rules, but hard to read as a button at all. Evidence: `data/matrix-summary.md → disabled-control text`
- **A-13** (P3, INFERRED) There is no pause in solo other than hiding the tab. Evidence: `sabotage-stack.html:4357, 4433`
