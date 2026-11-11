# Lens · multiplayer-dynamics-audit

Skill: `GameDevelopmentAudit/skills/multiplayer-dynamics-audit/SKILL.md` (read in full). Tested with a host and two players; six-player behaviour is extrapolated from code.

## Strategic choice map

| Decision point | Players choose against each other? | Dominant option? |
|---|---|---|
| Competitive: pace (how far ahead to be) | weakly: only the leader is sabotaged | yes: trail slightly, pass late |
| Competitive: sabotage choice | no: only the host chooses, and cannot choose a target | n/a |
| Teamwork: drop now or wait | no opposition | yes: wait out the effect (F-009) |

## Yomi conditions

Players cannot observe or affect each other's choices; nothing resolves against anything. Both modes are parallel single-player with a shared scoreboard. That is acceptable for a party game, but it means the social layer has to come from the vote, and players do not have the vote.

## L5 · lead by lead

- **Who is targeted:** Teamwork: whoever takes the next turn; Crumble hits the whole team (`round-engine.js:246-249`, `20`). Competitive: the tallest connected stack, random among ties (`377-385`). Observed 7 of 7 on the leader.
- **Dogpile:** the leader takes every sabotage, and the vote cadence follows the leader's height (`326-330`): past 25 they are under an effect about 5 s in every 7. A trailing player can never be targeted.
- **Catch-up:** leader-only targeting is the only one, and it is strong. No comeback tool for a collapsed player: they watch for up to 90 s.
- **Skill gap:** a large gap leaves the weaker player a spectator of someone else's sabotage. In Teamwork the weaker player ends everyone's round.

## Misery audit (possible and, where noted, profitable)

| Behaviour | Mechanism | Limit today |
|---|---|---|
| Throw the team round | any Teamwork player can miss on purpose | none; host can only rematch |
| Stall | hold a turn for 10 s + 2 s every rotation, or just leave the tab | none: no skip, no kick, no idle detection (F-010); observed 12 s per rotation |
| Idle auto-drop | at timeout the client drops wherever the block is; on a narrow tower that ends the round | none |
| Host stuffing | each click is a new voter; three clicks gave `{crumble: 3}` | none (F-014) |
| Host walks away | votes resolve at random; nobody can rematch | none: no migration (F-015) |
| Trapping people in a room | "Room" flips back to the game during a live round, for host and players | closing the tab (F-005) |
| Uninvited joiner | 4-letter code, 331,776 combinations, joins limited only by the per-socket rate limit | room locks at start; no kick (appendix A-03, note-only) |

## Goal alignment

- Teamwork: score is height + perfects, credited to the team, with per-player counts on the results screen. Aligned.
- Competitive: height only. Perfects are shown but worth nothing except width; "+1 TEAM BONUS" is the wrong reward message (F-026).

## Quit and idle handling

| Event | Teamwork | Competitive |
|---|---|---|
| player socket drops | turn forfeited, rejoins on resume (observed: back in under 1 s) | **stack ended for the round**, even after an immediate resume (F-006) |
| player reloads the page | resumes from `sessionStorage` (observed) | same |
| all players gone | round pauses, timers shift on return | round ends |
| host gone | continues, votes random, no rematch | same |
| late joiner | "This room has already started." | same |

## Information channels (does a client get what it should not?)

Every client receives the full snapshot: all stacks, every mover's position and drunk-motion state, vote counts, effect parameters, player ids. Resume tokens go only to their owner; a search of the state received by a player found no token (`data/multiplayer.json` → `playerStateKeys.hasToken: false`). There is no hidden information in this design, so nothing read-sensitive leaks. The cost is bandwidth, not secrecy: `room.state` reached 30.3 KB with about 100 blocks in the room and is re-sent on every drop (F-023).

## L8 · vote adapter seam (note-only, not wired to a live source)

`receiveChatVote` passes straight to `Core.recordVote` (`round-engine.js:343-352`, `game-core.js:321-329`): one vote per trimmed `voterId`, last write wins, no length cap (a 100,000-character id is accepted), no platform prefix, and the id space is shared with the host's `manual-N` voters, so a chat user named `manual-1` would overwrite a host click. The host can add unlimited votes while each chat voter gets one (F-029).

## Top three

1. Grace window on Competitive disconnect (F-006).
2. Spread sabotage: leader plus one other, or everyone at lower strength; show every player who is being hit (F-007).
3. Idle handling in Teamwork: skip a turn that has had no input, never auto-drop on a timeout, and give the host a "skip" control (F-010).
