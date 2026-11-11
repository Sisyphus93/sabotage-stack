# Live play log

All play was against the local server (`PORT=3100 npm start` in `$GAME`), Chromium headless shell 158 via Playwright, from `$AUDIT`. No deployed instance was contacted. Raw data is in `data/`, scripts in `scripts/`, images in `screenshots/`.

## How the game was driven

- `scripts/inpage.js` is injected with `context.addInitScript` (browser session only, never the source). It observes the game by wrapping `window.SabotageStackCore` at assignment time and `window.WebSocket`, logs every text change in `aria-live` / `role=status` regions, and offers an optional bot that presses the real Drop button when the block crosses the tower centre.
- The bot is a test driver, not a model of a human. It is immune to every view-only effect, so its scores say nothing about difficulty.

## Console, page errors, failed requests

| Flow | Script | Console errors / warnings / page errors |
|---|---|---|
| 12 theme × viewport combinations, all screens, solo run to results | `01-matrix.js` | **0** |
| DEV lab, 16 effects × 4 variants, plus reduced motion | `02a-sandbox.js` | **0** |
| Frame timing, 17 states × 2 | `02b-frametiming.js` | **0** |
| Teamwork and Competitive, host + 2 players | `03-multiplayer.js` | **0** |
| Keyboard, focus, reflow, touch, sound, idle | `04-keyboard-a11y.js` | **0** |
| Host close / host gone / late join / digits / touch | `07-extras.js`, `08-host-room-probe.js` | **0** |
| `/ws` hung, refused, slow, mid-lobby outage | `05-network.js` | 6, all the expected browser "WebSocket connection failed" lines caused by the test itself |

## Run 1 · Screen matrix (`data/matrix.json`, `data/matrix-summary.md`)

Viewports 360×640, 390×844, 768×1024, 1280×800 × Paper, Sunset Stack '94, Prime Time. Captured per combination: title, how-to (and with the 16-effect guide open), join dialog, Teamwork lobby, Competitive lobby, in-game, vote open, effect active, results.

- Themes applied before first paint from `localStorage['sabotage-stack-theme-v1']`; the right fonts loaded per theme.
- Solo runs reached heights 23 to 28 before the bot was told to miss. Every drop used a 3.00 px perfect window except under Turbo (3.40 to 3.75).
- Phones: vote card starts at y=594 (360×640) / y=784 (390×844); effect card at y=1145 / y=1335. Neither is in the first viewport.
- 1280×800: canvas spans y=239 to 825 and the Drop button sits at y=839, both past the 800 px fold.
- Speed chip reads `VOTE LIVE · 230 PX/S · 230 PX/S` while a vote is open.

## Run 2 · Sandbox (`data/sandbox.json`, `data/frametiming.json`)

- 68 mid-effect stills (`sandbox-<effect>_<theme>_<viewport>.png`), contact sheets (`contact-sandbox_*.png`), 6-frame sequences for the 8 optical and trajectory effects (`seq-<effect>-<n>_paper_390x844.png`).
- Turbo, Drunk Block, Slow-to-Dart and Gravity Slingshot are indistinguishable from normal play in a still. Spotlight leaves one small beam on a black field. The Shell Game's crack marker is a few pixels.
- Luminance: no effect changes more than 7.9% of the canvas by ΔL ≥ 0.1 between frames (threshold used: 12.6%). Whole-tower motion only under Pisa (97% of frames) and Earthquake (99%).
- Reduced motion: Rollercoaster, Pisa, Earthquake, Peekaboo and Accordion render static; the other 11 are unchanged.
- Frame timing with 4× CPU throttle: p50 16.7 ms and p95 16.7-16.8 ms for all 17 states. Worst single frame 66.7 ms (Turbo).

## Run 3 · Multiplayer (`data/multiplayer.json`)

Three contexts: host (Paper, 1280×800), player "Ada" (Paper, 390×844), player "Bo" (Sunset, 390×844; reduced motion in the Teamwork room).

**Teamwork**
1. Host + one player: Start round disabled, "Waiting for at least two connected players."
2. Second player joins, host starts. Host sees "HOST VIEW" on a disabled Drop button; players alternate.
3. First vote: players see "WAIT YOUR TURN", disabled vote buttons and "The block keeps moving. The host is choosing the room vote." No block is moving. The player UI's own vote path returns `false`.
4. Host clicks option 1 three times → counts `{crumble: 3}`.
5. Bots off. Crumble (8 s) expired with 2 s of the 10 s turn left. At 10 s the server sent `turn.auto-drop`, the client replied `player.drop {auto: true}` and the block landed where it happened to be.
6. Round ended on a deliberate miss: "Team score · 68 · Shared height 36 · 32 perfect drops". Players see a disabled "Host rematches" button.
7. Rematch by host: round 2 started for everyone.
8. Player socket closed mid-turn: "RECONNECTING" within 150 ms, resumed within about 800 ms, back in rotation. Page reload on the other player resumed straight into the game.
9. All four ballots in this room avoided the five reduced-motion-excluded effects. Neither the host nor the other player is told why.

**Competitive**
1. Leader "Ada" (fast bot) vs "Bo" (slow bot). All **7 of 7** sabotages targeted Ada; Bo's panel read "Sabotage over" throughout.
2. Votes opened at 10, 20, 27, 34, 41, 48, 55, 62 s: the cadence tightened to 7 s once the leader passed height 25.
3. Bo switched to reduced motion at 15 s (`client.preferences`); all 7 later ballots avoided the excluded effects.
4. Bo's socket closed at 36 s: reconnected in under a second to "Your stack is finished. You can watch the room." Final table: "Bo · 17 high · Disconnected".
5. Host rematch put both players back in.
6. Toast in this mode reads "PERFECT DROP · +1 TEAM BONUS"; the round clock is labelled "Turn timer".

## Run 4 · Keyboard only (`data/keyboard-a11y.json`, `data/extras.json`)

- Title tab order: theme, sound, Play solo, How to play, DEV lab, Teamwork, Competitive, Join Game.
- How-to and Join dialogs: focus moves inside, Escape closes, focus returns to the opener. A wrong room code reports "That room code was not found." inside the dialog.
- Enter on Play solo → game in 36 ms, focus on Drop, Space drops.
- Digit keys during a vote: **ignored** with focus on Drop, the canvas or Menu; **accepted** only with nothing focused (`Digit3`, `Numpad1`).
- Space on a focused vote option or the Menu button drops a block instead of activating the button. Enter activates.
- Results: focus lands on Play again (solo). Multiplayer results leave focus on `<body>`.

## Run 5 · Network and tab states (`data/network.json`, `data/host-room-probe.json`)

- `/ws` hung: "Connecting to the game server…" unchanged at 0.3, 2, 5, 10 and 20 s; header label says "Teamwork · reconnecting"; no timeout.
- `/ws` refused: immediate "Connection closed before the room was created. Check the server, then try again." Solo still works.
- `/ws` 7 s slow: lobby appears after 7.1 s with the same static message meanwhile.
- Mid-lobby outage: retries at about 0.8, 1.3, 2.3, 4 s… (×1.7 backoff, 10 s cap); recovered 3 s after the server returned.
- Hidden active Teamwork player (rAF paused, socket alive): the auto-drop is sent with a stale position, rejected `DROP_POSITION_OUT_OF_SYNC`, and the turn is forfeited 2 s later. Twelve seconds per rotation, every rotation.
- Solo in a hidden tab: fully paused, resumes cleanly.
- "Room" button during a live round: screen goes game → lobby → game within 80-280 ms for host and player.
- Host gone: players' snapshot says `hostConnected: false`, the UI says nothing, the next vote resolved `{0,0,0}` to a random winner.
- Late join: "This room has already started."

## Screen-reader offer during play (DOM live regions, not a real screen reader)

Solo, 17 s run: `PERFECT! +1 CLEAN DROP` (once, although 20 perfects landed) · the effect's name when it started · `NO OVERLAP · TOWER COLLAPSED`. Nothing when the vote opened, nothing for the options, nothing when the effect ended.
Multiplayer, 75 s: `#multiplayer-player-list` rewrote itself 108 times; `#canvas-toast` 15 times.
