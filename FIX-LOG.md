# Fix log

Tracks the audit fixes on branch `auditandfixes`. Source of truth for the findings is `docs/audit/findings.json`; this file only tracks progress.

**Status values:** `todo` · `in progress` · `fixed, awaiting your check` · `verified` · `deferred` (with a reason in Notes below)

**Decision first?** means the finding's fix depends on a design choice. The agent must lay out 2-3 options with a recommendation and wait for an answer before changing anything. Any other finding can turn out to need a decision too; the agent asks in that case as well.

Nothing starts until the owner names the finding (or says "next"). Work goes in ID order unless told otherwise.

## Findings

| ID | Sev | Effort | Decision first? | Title | Status | Commit | You verified |
|---|---|---|---|---|---|---|---|
| F-001 | P0 | larger |  | The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop | verified | fix(F-001), single commit on this branch | yes |
| F-002 | P1 | quick |  | Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds | fixed, awaiting your check | fix(F-002), single commit on this branch | |
| F-003 | P1 | quick |  | Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default | fixed, awaiting your check | fix(F-003), single commit on this branch | |
| F-004 | P1 | larger |  | On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them | fixed, awaiting your check | fix(F-004), single commit on this branch | |
| F-005 | P1 | quick |  | The Room button bounces straight back to the game, so nobody can leave or close a live room | fixed, awaiting your check | fix(F-005), single commit on this branch | |
| F-006 | P1 | quick |  | Competitive: a sub-second disconnect permanently ends your stack | fixed, awaiting your check | fix(F-006), single commit on this branch | |
| F-007 | P1 | larger | yes | Competitive: every sabotage hits the leader; everyone else never experiences one | fixed, awaiting your check | fix(F-007), single commit on this branch | |
| F-008 | P1 | larger | yes | Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving | fixed, awaiting your check | fix(F-008), single commit on this branch | |
| F-009 | P1 | larger | yes | Teamwork: any sabotage can be waited out inside the 10-second turn at no cost | fixed | F-009 commit | |
| F-010 | P1 | larger | yes | Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them | fixed, awaiting your check | fix(F-010), single commit on this branch | |
| F-011 | P1 | quick |  | Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop | fixed, awaiting your check | fix(F-011), single commit on this branch | |
| F-012 | P2 | quick |  | Space always drops, so it cannot activate a focused vote option or the Menu button during play | fixed, awaiting your check | fix(F-012), single commit on this branch | |
| F-013 | P2 | quick |  | The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently | fixed, awaiting your check | fix(F-013), single commit on this branch | |
| F-014 | P2 | quick | yes | Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person | fixed, awaiting your check | fix(F-014), single commit on this branch | |
| F-015 | P2 | larger |  | When the host leaves, players are not told; votes resolve at random and nobody can rematch | fixed, awaiting your check | fix(F-015), single commit on this branch | |
| F-016 | P2 | quick |  | Multiplayer needs a host plus two players on separate devices, and nothing says so before you host | fixed, awaiting your check | fix(F-016), single commit on this branch | |
| F-017 | P2 | quick |  | Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting | fixed, awaiting your check | fix(F-017), single commit on this branch | |
| F-018 | P2 | quick |  | The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone | fixed, awaiting your check | fix(F-018), single commit on this branch | |
| F-019 | P2 | larger | yes | Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything | fixed, awaiting your check | fix(F-019), single commit on this branch | |
| F-020 | P2 | quick |  | Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading | fixed, awaiting your check | fix(F-020), single commit on this branch | |
| F-021 | P2 | quick |  | If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out | fixed, awaiting your check | fix(F-021), single commit on this branch | |
| F-022 | P2 | quick |  | Decision-critical text is 9-11 px on phones | fixed, awaiting your check | fix(F-022), single commit on this branch | |
| F-023 | P2 | larger |  | Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks | fixed, awaiting your check | fix(F-023), single commit on this branch | |
| F-024 | P3 | quick |  | Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble | fixed, awaiting your check | fix(F-024), single commit on this branch | |
| F-025 | P3 | quick |  | Peekaboo fades out, flashes back for 40 ms, then cuts to hidden | fixed, awaiting your check | fix(F-025), single commit on this branch | |
| F-026 | P3 | quick |  | Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more | fixed, awaiting your check | fix(F-026), single commit on this branch | |
| F-027 | P3 | quick |  | The sound setting is forgotten on reload | fixed, awaiting your check | fix(F-027), single commit on this branch | |
| F-028 | P3 | quick |  | axe: one contrast miss, no h1 outside the title screen, labels on role-less elements | fixed, awaiting your check | fix(F-028), single commit on this branch | |
| F-029 | P3 | larger |  | Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks | fixed, awaiting your check | fix(F-029), single commit on this branch | |
| F-030 | P3 | quick |  | package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20 | fixed, awaiting your check | fix(F-030), single commit on this branch | |

## Appendix items

Start these only after the numbered findings, or when the owner asks. Items marked "Note-only" or "Idea" in the report are proposals: confirm with the owner before building them.

| ID | Sev | Effort | Decision first? | Title | Status | Commit | You verified |
|---|---|---|---|---|---|---|---|
| A-01 | P3 | | | Clients keep sending player.position after a round ends or their stack ends, drawing 29 error replies per round (ROUND_NOT_LIVE, PLAYER_INACTIVE). | fixed, awaiting your check | fix(A-01), single commit on this branch | |
| A-02 | P3 | | | Multiplayer results leave focus on <body>; solo moves it to Play again. | fixed, awaiting your check | fix(A-02), single commit on this branch | |
| A-03 | P3 | | | Room codes are four letters from 24 (331,776); join attempts are limited only by the per-socket rate limit and there is no kick, so a stranger could reach an open lobby. Note-only; not tested. | fixed, awaiting your check | fix(A-03), single commit on this branch | |
| A-04 | P3 | | | No non-visual way to play: sound is off by default and no cue encodes the mover's position. Idea: an optional pitch sweep for position. | fixed, awaiting your check | fix(A-04), single commit on this branch | |
| A-05 | P3 | | | Player colours 2 and 4 (teal #2F8478, vermilion #D5472F) have nearly equal luminance; a likely red-green confusion pair where no name is adjacent. | fixed, awaiting your check | fix(A-05), single commit on this branch | |
| A-06 | P3 | | | Macro Zoom draws blocks over the bottom hint; the chat flavour pop overlaps the tower. | fixed, awaiting your check | fix(A-06), single commit on this branch | |
| A-07 | P3 | | | In Sunset the speed and effect chip wraps to two lines and covers more of the stage. | fixed, awaiting your check | fix(A-07), single commit on this branch | |
| A-08 | P3 | | | #theme-select keeps the browser's default focus ring instead of the themed one. | fixed, awaiting your check | fix(A-08), single commit on this branch | |
| A-09 | P3 | | | Late joiners get a clear 'This room has already started.' but no way to watch. Idea: spectator join. | fixed, awaiting your check | fix(A-09), single commit on this branch | |
| A-10 | P3 | | | The context menu is disabled on every button, which also removes long-press actions for assistive tools. | fixed, awaiting your check | fix(A-10), single commit on this branch | |
| A-11 | P3 | | | The Competitive host board is about 405 px wide inside an 870 px panel: small for a screen meant to be streamed. | fixed, awaiting your check | fix(A-11), single commit on this branch | |
| A-12 | P3 | | | The disabled Start round button is 2.48:1 in Sunset: exempt from contrast rules, but hard to read as a button at all. | todo | | |
| A-13 | P3 | | | There is no pause in solo other than hiding the tab. | todo | | |

## Notes

Record deferrals, decisions made, and anything an agent noticed but did not fix (with the finding it relates to).

- **A-11, Competitive viewer board:** owner chose a landscape board. Host and spectator canvases use 720×520 logical coordinates and fit available panel width and viewport height; other modes keep their portrait board. Existing Spotlight isolation pixel test was updated for the new coordinates without weakening it. Node 22.22.3: `npm test` passed 134/134. Check desktop stream and phone layouts visually, including six players.

- **A-10, context menus:** buttons no longer suppress context menus, and Drop no longer cancels pointerdown; canvas-specific suppression remains. Node 22.22.3: `npm test` passed 133/133, including context-menu and keyboard drop tests. Native long-press behavior should be checked with mobile assistive tools.

- **A-09, spectators:** owner approved the idea. Join form offers a watch-only role for live rooms and results; spectators cannot play, vote, skip or rematch, and their local motion choice does not alter the player vote pool. They receive the host-style Competitive board, reconnect for up to two minutes, and have 16 bounded slots per room. Existing player limits and host controls are unchanged. Node 22.22.3: `npm test` passed 132/132, including both modes, reconnect, permissions and capacity. Visual spectator layout should be checked on phone and desktop.

- **A-08, select focus:** select controls now use the same visible focus outline and theme colours as other controls. Node 22.22.3: `npm test` passed 128/128; actual focus-ring rendering requires a browser check.

- **A-07, Sunset chip:** status stays on one compact line, truncating visually if necessary; full text remains in the DOM and the effect card. Node 22.22.3: `npm test` passed 127/127; verify real font fitting at 360 × 640 and 390 × 844.

- **A-06, overlays:** the drop hint now sits below the board and chat flavour sits in the side information area, so neither covers the tower. Node 22.22.3: `npm test` passed 126/126; verify phone layout and control positioning visually.

- **A-05, non-colour identity:** the live Teamwork board already labels placed blocks with player names; results now also offer an ordered, named placement list, including perfect drops, rather than requiring colour discrimination. Colours remain unchanged. Node 22.22.3: `npm test` passed 125/125; canvas-label readability and colour-vision usability need human verification.

- **A-04, optional position tone:** owner approved the idea. A separate saved opt-in, available on the title and during play, emits a quiet pitch relative to the tower centre when Sound is on; 440 Hz is aligned, lower is left and higher is right. It stops outside active play and can reveal visually hidden movers. Node 22.22.3: `npm test` passed 124/124 with a mocked AudioContext. This is not a claim of complete non-visual accessibility: real listening and testing with blind players are needed, including timing, calibration and other game information.

- **A-03, room-code guessing:** the owner approved a server-wide failed-join budget, shared across sockets: 60 missing codes per 60-second window, then all new joins wait for the window reset. Existing rooms and reconnects remain available. This deliberately trades availability for brute-force resistance: an attacker can temporarily block legitimate joins for all rooms, and codes remain guessable; no kick/access control was added. The budget is per server process, not shared across instances. Node 22.22.3: `npm test` passed 123/123.

- **A-02, results focus:** multiplayer results focus the first enabled action on entry, including Return to room for non-hosts, and preserve action focus on result refresh without stealing focus elsewhere. Node 22.22.3: `npm test` passed 122/122 with both modes covered end-to-end.

- **A-01, position updates:** entering multiplayer results now changes the local game phase immediately, stopping position traffic. The existing ended-stack check was verified. Node 22.22.3: `npm test` passed 120/120; real WebSocket tests verify both modes after results and Competitive after a stack ends.

- **F-030, Node:** package engines now match jsdom’s supported Node ranges, `.nvmrc` selects 22.22.2, and the test runner gives an explicit version diagnostic before loading suites. Harness failure messages include the actual error rather than asserting dependencies are missing. Node 22.22.3: `npm ci` succeeded and `npm test` passed 118/118; the server itself previously worked on Node 20, but the package now declares the test-compatible minimum.

- **F-029, chat seam:** with owner approval for the note-only finding, chat identities are namespaced by platform, IDs are limited to 128 characters, and each ballot allows at most 1,000 distinct chat voters and 20 submissions per voter. Host and Teamwork ballots stay separate. Legacy calls use a dedicated namespace; any future integration must supply trusted platform IDs and authenticate its payload before calling the adapter. Node 22.22.3: `npm test` passed 117/117.

- **F-028, accessibility semantics:** Paper effect label contrast is approximately 5.70:1; lobby/game/results headings have level-one semantics and labelled containers have group roles. Node 22.22.3: `npm test` passed 115/115, including semantic and calculated contrast checks; axe and a screen reader were not run.

- **F-027, sound setting:** on/off is saved locally, defaults off, and restores without creating audio until the next click or key gesture. Node 22.22.3: `npm test` passed 113/113 using a mocked AudioContext; real browser audio and autoplay policies merit a listening check.

- **F-026, multiplayer copy and HUD:** removed duplicate speed and solo perfect toast, corrected Competitive perfect/round timer and host guidance, player singular, fallback turn capitalization and results wording; Competitive host stage chips no longer cover player names (status remains in the side panel). Node 22.22.3: `npm test` passed 112/112, including both modes end-to-end. Visual host-board placement should be checked.

- **F-025, Peekaboo:** removed the unintended reappearance after the fade and corrected the visible-duration description; shared core was synced. Node 22.22.3: `npm test` passed 110/110, including millisecond-sampled monotonic fade coverage. Motion-sensitive visual playtesting is still advisable.

- **F-024, Teamwork durations:** F-009 already removed the time cap and made all four effects last three affected landings, so the original one-drop inference no longer applies. The guide and spoken vote explanation now clarify that Portal, Superglue and Calipers follow the same player across turns while Crumble covers three team landings; no rules changed. Node 22.22.3: `npm test` passed 109/109.

- **F-023, bandwidth:** with owner approval for the note-only item, game changes use revisioned structural room deltas, falling back to a full state if smaller; full snapshots remain for joins, resumes, starts and explicit recovery. Clients request a full baseline on a gap or invalid delta. Long-stack tests reconstruct both modes exactly and require deltas under one third of snapshot size; end-to-end coverage exercises recovery. Owner approved updating the old full-state-per-change assertion. Node 22.22.3: `npm test` passed 108/108. Six-player real-network load and CPU costs have not been measured; cached older clients must refresh after deployment.

- **F-022, phone typography:** critical vote names and effect names are at least 14 px, and compact vote/status labels are at least 12 px at phone widths; longer vote names can wrap. Node 22.22.3: `npm test` passed 105/105; CSS contract tests cannot verify rendered text fit. Check 360 × 640 in all themes, especially Sunset and the compact stage chips.

- **F-021, connection wait:** initial host/join attempts show a five-second wake-up message, then Retry and Play solo at 30 seconds; duplicate submissions are disabled while waiting. Cancelling or starting solo closes the pending socket, and stale socket events are ignored. Reconnect backoff is unchanged. Node 22.22.3: `npm test` passed 104/104; targeted stalled socket tests passed after the stale error guard.

- **F-020, Practice:** the title opens a scoreless Practice mode with player-facing copy; the in-run shortcut and Build 01 label are removed. Existing sandbox functionality remains available from the title. Node 22.22.3: `npm test` passed 102/102, including the entry/exit and solo HUD regression check.

- **F-019, effect balance:** the owner chose to keep all 16 effects, classify helpful Calipers as non-harsh, and make Rollercoaster consequential while differentiating the speed effects. Rollercoaster speeds up with its visible bob (up to ×1.6) in the shared client/server rules; reduced motion disables that additional speed. Turbo, Drunk, Slow-to-Dart and Slingshot have distinct on-stage cues; the Shell Game crack is heavier. Existing Spotlight beam and Portal rules are unchanged; further tuning awaits playtesting (E3). The owner approved adjusting the seeded F-004 test to check the actual winning option after vote weights changed. Node 22.22.3: `npm test` passed 101/101. Visual readability and balance need playtesting.

- **F-018, centre reference:** the active top block has a small contrasting centre tick in solo, Teamwork and Competitive, including the host view; the guide explains it. The perfect-window formula and late-game difficulty remain unchanged pending experiment E1. Node 22.22.3: `npm test` passed 99/99, including a real-canvas pixel check in each theme; a visual play check at mobile size is still advisable.

- **F-017, motion:** a persisted System/Full/Reduced control defaults to the device setting, is available during play, and explains reduced vote eligibility. The server broadcasts room-wide reduction whenever a connected player or the host requests it; every client displays the room status and uses the room setting for motion. System reduced-motion CSS remains honoured even if Full game motion is selected. Existing effects already active when a preference changes are not cancelled. Node 22.22.3: `npm test` passed 98/98; targeted preference and multi-player propagation checks also passed. Mobile top-bar readability and motion-sensitive play need a human check.

- **F-016, multiplayer onboarding:** the title now states the non-playing host plus 2–6 players requirement, and the guide explains setup, Teamwork scoring and turns, and Competitive timing and voting. This is copy only; host-as-player or two-device mode was not built because it changes the game design. Node 22.22.3: `npm test` passed 96/96.

- **F-015, absent host:** the owner chose to continue without the host: notify players, cancel/skip Competitive votes while the host is disconnected, let Teamwork player votes continue with random ties, and permit any connected player to rematch after ten seconds of host absence. Returning host retains control; their previous tie-break is cleared on disconnect. The full suite passes 93/93 on Node 22.22.3.

- **F-014, Competitive host vote:** the owner chose one changeable host ballot per vote; the UI identifies the selection and explains the mode-specific rule. The Teamwork host tie-break and Solo weighting are unchanged. The owner approved updating the F-008-era tests that asserted multiple Competitive host ballots. External chat voter namespacing remains F-029. Node 22.22.3: `npm test` passed 89/89.

- **F-013, Solo vote clarity:** each full-card option has a short mode-neutral mechanic description; both full-card and compact stage choices expose descriptions to assistive technology. Solo picks show a persistent ×4 tag, selected styling, aria-pressed, and vote confirmation; changing the vote updates both views. The compact phone strip keeps its small footprint and shows a checkmark rather than the full descriptions, which are in the full card. Multiplayer voting rules and personal Teamwork vote confirmation were not changed; Competitive host ballot behavior and its existing help text remain F-014. Node 22.22.3: `npm test` passed 88/88.

- **F-012, Space key:** Space drops only on the body, canvas, or Drop control, leaving other focused controls and open dialogs to their native behavior. Held-key repeats do not cause extra drops; releasing on a different control is not suppressed. F-003 digit shortcuts are unchanged. jsdom tests verify event cancellation and simulate native button clicks because jsdom does not synthesize keyboard activation. Node 22.22.3: `npm test` passed 87/87.

- **F-011, game announcements:** a polite, serialized status region announces vote options and winner descriptions, effect end, repeated perfect drops, collapse, Teamwork turn changes and a timely three-second warning. Removed live announcements from roster lists and the visual toast to prevent repeated roster/duplicate toast speech. The existing Competitive target announcement remains separate. Verified DOM updates in client and multiplayer tests; an actual screen reader was not tested. A-04 remains out of scope: these announcements do not encode mover position or make the game playable by sound alone.

- **F-010, Teamwork idle turns:** the owner chose timeout forfeits without dropping, automatic skipping until the player explicitly returns, an individual host skip control, and a pause when no player is available. Host skips do not mark a player idle. F-009 effects remain pending until consumed by landings. The owner approved updating the existing F-009 test to return the idle player explicitly. Competitive and Solo timing remain unchanged. Node 22.22.3: `npm test` passed 79/79.

- **F-009, Teamwork sabotage:** the owner chose landing-based durations: regular effects last through the affected player’s landing, and Crumble, Portal, Superglue and Calipers last three affected landings without a time cap. A forfeit does not consume an effect. New voted effects queue until the current effect is consumed, preserving one active sabotage on stage. Teamwork HUD and guide show landing-based durations; Solo and Competitive timing and F-010 turn handling remain unchanged. Verified with Node 22.22.3 and `npm test` (73/73).

- **F-008, Teamwork voting:** connected players who are not taking the turn each get one changeable ballot during the existing five-second between-turn pause. The host can mark a tie-break choice; it applies only to tied player votes, including zero-vote ties. If the host leaves a tie undecided, the existing random fallback remains. Competitive voting remains host-only and unchanged. The Teamwork vote and controls copy now describes the pause. Turn timeout, auto-drop/forfeit, and sabotage timing remain out of scope (F-009/F-010).
- **F-007, Competitive sabotage targeting:** the owner chose every connected, non-ended competitor, including the leader, receiving the selected effect for its normal duration. Each room member sees an accessible announcement naming the effect and all targets. Vote cadence remains unchanged.
- **F-006, Competitive disconnect grace:** a disconnected player's mover freezes for 10 s; the stack remains eligible if they resume before the deadline and is marked ended only after timeout. Teamwork disconnect handling is unchanged.
- **F-005, navigation:** remember the selected lobby view for the current room phase; ordinary snapshots refresh lobby data without changing screens. Back to round clears the preference, while a phase transition follows the new game/results screen.
- **F-004, touch/layout:** the mobile stage vote strip appears only during a live vote and mirrors the full vote choices, counts, and accessible labels. The stage motion chip shows the active effect and seconds remaining. Vertical page pan is enabled on surrounding UI; `touch-action: none` remains deliberately limited to the canvas and Drop button so taps retain their game actions.
- **F-003, related finding:** removed the blanket interactive-target guard for vote digits while keeping the typing-target guard; 1/2/3 and numpad digits now vote from Drop, canvas, and Menu focus. The Space key path is unchanged; Space activating a focused control remains F-012.
- **F-002, decision and scope:** the owner chose option B. Solo auto-drop now offers persisted 3.5 s (default), 10 s, and Off. The non-default runs are labelled Assisted in the game header and results; the selected auto-drop timer pauses during the first 2 s of every vote. The Teamwork server's separate 10 s turn timer was left unchanged; see F-009 for the related Teamwork timing question. Assisted scores still contribute to the per-session best, and the result is explicitly tagged Assisted.
- **F-001, commit hash:** AGENTS.md asks for the hash of the fix in the F-001 row of the same commit, which is circular (writing the hash into the commit changes the hash). The row names the commit instead; `git log --oneline -1` on this branch prints the hash.
- **F-001, what changed and why:** the board is now the largest 360:520 box that still leaves room for the chrome above it and the Drop row below it, with a 240 px floor; the play card is top-aligned instead of centred against the taller side stack (that centring was what pushed the board and Drop below the fold on a 1280×800 laptop); `.control-row` follows the card instead of the stage, which removes the horizontal scroll at 400 % zoom; and entering the game now scrolls the new screen to the top. Two intended consequences: the board is ~9 % smaller at 1280×800 (405 → 369 px wide) in exchange for Drop staying on screen, and below the 240 px floor (≈347 px tall) a short viewport scrolls instead of shrinking further, so at 200 %/400 % zoom and in phone landscape the whole board is reached with a small scroll.
- **F-001, deliberately not done:** the suggested "move the side cards under the stage at short heights" was left out. The board is portrait, so on a 844×390 landscape screen it is height-bound and moving the cards under it gains the board nothing while pushing the vote card further away (F-004's subject).
- **F-001, left alone — needs its own finding:** the results screen reuses the same height-driven sizing (`.results-frame`, no floor). Measured identical before and after this fix; F-001 was scoped to the playfield.
- **F-001, left alone:** at 1280×800 the side stack is still 795 px tall, so the page scrolls ~215 px to reach the effect card. That is the desktop side of F-004's subject, not the playfield.
- **F-001, left alone:** in Sunset and Prime Time the document is 322 px wide at a 320 px viewport (2 px over) because of the themed play-card box-shadow. Pre-existing and untouched.
- **A-11 is now a little further off:** the Competitive host board measures 369 px wide at 1280×800 (405 before) because F-001 spends ~36 px of board width on keeping Drop on screen.
