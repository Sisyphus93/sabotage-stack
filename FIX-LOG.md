# Fix log

Tracks the audit fixes on branch `auditandfixes`. Source of truth for the findings is `docs/audit/findings.json`; this file only tracks progress.

**Status values:** `todo` · `in progress` · `fixed, awaiting your check` · `verified` · `deferred` (with a reason in Notes below)

**Decision first?** means the finding's fix depends on a design choice. The agent must lay out 2-3 options with a recommendation and wait for an answer before changing anything. Any other finding can turn out to need a decision too; the agent asks in that case as well.

Nothing starts until the owner names the finding (or says "next"). Work goes in ID order unless told otherwise.

## Findings

| ID | Sev | Effort | Decision first? | Title | Status | Commit | You verified |
|---|---|---|---|---|---|---|---|
| F-001 | P0 | larger |  | The playfield shrinks to nothing on short or zoomed viewports, and overflows a 1280×800 laptop | todo | | |
| F-002 | P1 | quick |  | Forced auto-drop (3.5 s solo, 10 s Teamwork) cannot be adjusted; an untouched solo run is over in 11 seconds | todo | | |
| F-003 | P1 | quick |  | Vote keys 1/2/3 do nothing while the Drop button or the canvas has focus, which is the default | todo | | |
| F-004 | P1 | larger |  | On phones the vote and effect cards are below the fold, and the play card blocks scrolling to them | todo | | |
| F-005 | P1 | quick |  | The Room button bounces straight back to the game, so nobody can leave or close a live room | todo | | |
| F-006 | P1 | quick |  | Competitive: a sub-second disconnect permanently ends your stack | todo | | |
| F-007 | P1 | larger | yes | Competitive: every sabotage hits the leader; everyone else never experiences one | todo | | |
| F-008 | P1 | larger | yes | Teamwork: play stops for every 5-second vote, players cannot vote, and the UI says the block keeps moving | todo | | |
| F-009 | P1 | larger | yes | Teamwork: any sabotage can be waited out inside the 10-second turn at no cost | todo | | |
| F-010 | P1 | larger | yes | Teamwork: an idle or hidden teammate costs 12 s per rotation or drops a block at random, and nobody can skip or remove them | todo | | |
| F-011 | P1 | quick |  | Screen-reader users hear almost nothing during play, and in multiplayer a whole list is re-announced on every drop | todo | | |
| F-012 | P2 | quick |  | Space always drops, so it cannot activate a focused vote option or the Menu button during play | todo | | |
| F-013 | P2 | quick |  | The vote card shows three names with no explanation, never marks your pick, and applies the ×4 weight silently | todo | | |
| F-014 | P2 | quick | yes | Host voting: every click adds another vote and cannot be changed, while the help text says one choice per person | todo | | |
| F-015 | P2 | larger |  | When the host leaves, players are not told; votes resolve at random and nobody can rematch | todo | | |
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

- (none yet)
