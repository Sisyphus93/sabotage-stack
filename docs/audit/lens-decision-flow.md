# Lens · decision-flow-audit

Skill: `GameDevelopmentAudit/skills/decision-flow-audit/SKILL.md` (read in full).

## Decision stream (solo, first 30 s)

| Decision | Scope | Information at the moment of choice | Grade |
|---|---|---|---|
| When to drop | twitch, about 1/s | full: mover, tower, speed | interesting |
| Drop now or wait a pass | 1-3 s | auto-drop ring; no other cost | interesting, capped by the 3.5 s limit |
| Which sabotage to back (8 s, then every 10 s) | tactical, 5 s | three names and icons, live counts; **no description, no mark on your own pick** | **blind** for a first-timer, **obvious** for an expert (back the bribe or the mildest) |
| Drop during an effect or ride it out | tactical | effect timer exists, but on phones it is below the fold | interesting in solo, **obvious** in Teamwork (always wait, F-009) |

## L3 · voting, lead by lead

- **Tie-breaks:** uniform random among tied options (`game-core.js:336-344`); 9,000 empty ballots split 2,999 / 3,019 / 2,982. An unvoted ballot still fires a sabotage.
- **Last winner excluded:** yes (`game-core.js:272-274`), plus three different categories and at least one "harsh" option.
- **Solo "four votes":** real and strong. Against 15-25 simulated votes weighted 3:1 toward harsh options, the player's pick wins **77%** of the time among three harsh options, **19.5%** when backing Superglue (8.6% unvoted). Chat "truce" for Superglue fires 8% of the time (`data/core-sims.json`, replicating `html:2503-2522, 2622-2630`). The weight is applied at the tally and shown only as a larger number.
- **Is 5 s enough?** For returning players, yes. For new players the options are names at 11-12 px with no description while the block must still be dropped every 3.5 s. Needs human data: experiment E2.
- **First vote at 8 s, first-timer view:** desktop: card beside the stage, three unexplained names. Phone: the card starts at y=784 of an 844 px viewport, so only its heading shows; the visible cue is the chip "VOTE LIVE" in 11 px type (`screenshots/vote_paper_390x844.png`).
- **Keys 1/2/3:** do nothing in the default focus states (F-003).

## L4 · time pressure

- **Solo timeout:** forced drop at 3.5 s wherever the block is. Untouched run: drops at 3.6, 7.1, 10.6 s; the third misses (F-002).
- **Teamwork timeout:** at 10 s the server asks for an auto-drop and the client sends its current position (`html:1926-1933`); the block lands wherever it was. If the client cannot answer in 2 s the turn is forfeited without a block.
- **Slow-input players:** cannot take part in solo; in Teamwork they get 10 s and then a random placement that can end the round for everyone.
- **Waiting in Teamwork:** nothing to do. "WAIT YOUR TURN", disabled Drop, disabled vote buttons. With six players you act one turn in six and the whole room stops for 5 s of every vote cycle (F-008).

## Load over time

```
solo        drop·drop·drop·[VOTE+drop]·[EFFECT+drop]·drop·[VOTE+drop]…   steady, one spike per 10 s
teamwork    me · wait · wait · [VOTE: all idle 5 s] · wait · me …          mostly gaps
competitive drop·drop·[VOTE: host only]·[EFFECT: leader only]·drop…        flat for non-leaders
```

## Randomness audit

| Source | Placement | Verdict |
|---|---|---|
| vote options | before the decision, visible | good: creates imaginable futures |
| simulated chat votes | during, visible as counts | good |
| tie / empty ballot | after | fine in solo; in multiplayer it silently replaces an absent host (F-015) |
| Drunk Block speed targets | continuous | readable only by watching; acceptable |
| Pisa direction, Spotlight side | at start | fine |
| timeout auto-drop position | after, high stakes | **bad**: a random outcome on a shared tower (F-010) |

## Information fixes

Reveal: what each option does (one line); which option is yours and that it counts ×4; the effect's remaining time on the stage; who is being sabotaged in Competitive. Hide: nothing.

## Top three

1. Vote strip on the stage with one-line descriptions and a "your pick" state (F-004, F-013).
2. Count effects in drops in Teamwork so "wait" is no longer the answer (F-009).
3. Give waiting players something to decide: the vote (F-008).
