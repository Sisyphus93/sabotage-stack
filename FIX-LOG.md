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
| F-016 | P2 | quick |  | Multiplayer needs a host plus two players on separate devices, and nothing says so before you host | todo | | |
| F-017 | P2 | quick |  | Reduced motion is honoured in the rules but never explained, and there is no in-game motion setting | todo | | |
| F-018 | P2 | quick |  | The perfect window is a flat ±3 px that players cannot see; difficulty rises through speed alone | todo | | |
| F-019 | P2 | larger | yes | Effect set: four speed effects look like normal play, one helper is classed as harsh, two are near-neutral, and Spotlight hides almost everything | todo | | |
| F-020 | P2 | quick |  | Developer tooling is in the player's path: DEV lab on the title and in the live game header, 'BUILD 01' in the heading | todo | | |
| F-021 | P2 | quick |  | If the socket hangs, 'Connecting to the game server…' stays forever with no timeout, progress or way out | todo | | |
| F-022 | P2 | quick |  | Decision-critical text is 9-11 px on phones | todo | | |
| F-023 | P2 | larger |  | Every drop re-sends the whole room: room.state reached 30 KB with about 100 blocks | todo | | |
| F-024 | P3 | quick |  | Teamwork: 'up to 3 drops' effects cover one drop in practice, except Crumble | todo | | |
| F-025 | P3 | quick |  | Peekaboo fades out, flashes back for 40 ms, then cuts to hidden | todo | | |
| F-026 | P3 | quick |  | Copy and HUD drift: repeated speed in the chip, '+1 TEAM BONUS' in Competitive, 'Turn timer' on the round clock, and more | todo | | |
| F-027 | P3 | quick |  | The sound setting is forgotten on reload | todo | | |
| F-028 | P3 | quick |  | axe: one contrast miss, no h1 outside the title screen, labels on role-less elements | todo | | |
| F-029 | P3 | larger |  | Vote adapter seam (not wired to a live source): no voter namespacing or caps, and it shares ids with the host's clicks | todo | | |
| F-030 | P3 | quick |  | package.json allows Node 20, but the tests need Node 22.22.2 or newer and fail misleadingly on 20 | todo | | |

## Appendix items

Start these only after the numbered findings, or when the owner asks. Items marked "Note-only" or "Idea" in the report are proposals: confirm with the owner before building them.

| ID | Sev | Effort | Decision first? | Title | Status | Commit | You verified |
|---|---|---|---|---|---|---|---|
| A-01 | P3 | | | Clients keep sending player.position after a round ends or their stack ends, drawing 29 error replies per round (ROUND_NOT_LIVE, PLAYER_INACTIVE). | todo | | |
| A-02 | P3 | | | Multiplayer results leave focus on <body>; solo moves it to Play again. | todo | | |
| A-03 | P3 | | | Room codes are four letters from 24 (331,776); join attempts are limited only by the per-socket rate limit and there is no kick, so a stranger could reach an open lobby. Note-only; not tested. | todo | | |
| A-04 | P3 | | | No non-visual way to play: sound is off by default and no cue encodes the mover's position. Idea: an optional pitch sweep for position. | todo | | |
| A-05 | P3 | | | Player colours 2 and 4 (teal #2F8478, vermilion #D5472F) have nearly equal luminance; a likely red-green confusion pair where no name is adjacent. | todo | | |
| A-06 | P3 | | | Macro Zoom draws blocks over the bottom hint; the chat flavour pop overlaps the tower. | todo | | |
| A-07 | P3 | | | In Sunset the speed and effect chip wraps to two lines and covers more of the stage. | todo | | |
| A-08 | P3 | | | #theme-select keeps the browser's default focus ring instead of the themed one. | todo | | |
| A-09 | P3 | | | Late joiners get a clear 'This room has already started.' but no way to watch. Idea: spectator join. | todo | | |
| A-10 | P3 | | | The context menu is disabled on every button, which also removes long-press actions for assistive tools. | todo | | |
| A-11 | P3 | | | The Competitive host board is about 405 px wide inside an 870 px panel: small for a screen meant to be streamed. | todo | | |
| A-12 | P3 | | | The disabled Start round button is 2.48:1 in Sunset: exempt from contrast rules, but hard to read as a button at all. | todo | | |
| A-13 | P3 | | | There is no pause in solo other than hiding the tab. | todo | | |

## Notes

Record deferrals, decisions made, and anything an agent noticed but did not fix (with the finding it relates to).

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
