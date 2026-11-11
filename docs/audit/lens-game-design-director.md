# Lens · game-design-director (orchestration and arbitration)

Skill: `GameDevelopmentAudit/skills/game-design-director/SKILL.md` (read in full). Its "one merged report" output is superseded by `REPORT.md`; this file records routing, conflicts and the cross-lens ranking.

## Routing and order

1. emotion-engine-audit (always first: sets the experiential target)
2. Structure: elegance-audit, decision-flow-audit, multiplayer-dynamics-audit
3. Surface: skill-curve-audit, game-interface-audit, game-feel-audit
4. Skipped: reward-psychology-audit (no meta-progression, loot or currency; the only persistence is a session best), game-narrative-tools (no narrative), playtest-protocol (not in the brief; its role is covered by REPORT §6).

Sanity check on the suite: it is new and Sylvester/Vlambeer-derived. Two of its defaults do not fit a one-button stacker and were not applied literally: "permanence" (corpses, decals) and "cost of fire". The tower itself is the permanence, and a mis-timed drop is the cost.

## Experiential target (reconstructed, the dev does not state one)

> Calm, precise timing that an audience keeps wrecking in funny ways. Tension when the vote opens, a groan or a laugh when the sabotage lands, pride in a perfect drop made under interference.

Every lens judged against that sentence.

## Where lenses agreed (highest rank)

| Theme | Lenses | Finding |
|---|---|---|
| The vote, the game's signature moment, is often invisible or inert | emotion, decision-flow, interface, multiplayer | F-003, F-004, F-008, F-013 |
| Sabotage does not reach most players in multiplayer | emotion, elegance, multiplayer | F-007, F-009 |
| Time limits do the work that effects should do | skill-curve, decision-flow, elegance | F-002, F-009, F-010 |
| The playfield is not protected by the layout | interface, skill-curve | F-001 |

## Conflicts and arbitrations

1. **Elegance wants cuts (Rollercoaster, Portal Walls); emotion values spectacle.** Target wins: keep the spectacle, but each effect must change a decision. Rework Rollercoaster so the bob matters, and stop calling Calipers harsh (F-019).
2. **Skill-curve wants slack (no forced auto-drop); decision-flow wants pressure (no waiting out).** Both are right about different things. Pressure should come from effects that last through the next drop, not from clocks. Then solo can offer an untimed assist without becoming trivial (F-002, F-009).
3. **Multiplayer likes leader-only targeting as a catch-up tool; emotion says everyone came to be sabotaged.** Structural beats surface: keep a leader bias but give every stack a share (F-007). Validate with playtest experiment E5.
4. **Game-feel asks for more impact on the drop; accessibility caps motion.** Add juice only behind an in-game intensity setting, and never as camera shake when reduced motion is on (F-017).
5. **Interface wants the vote in view on phones; game-ui-frontend says protect the playfield.** A one-line vote strip pinned to the bottom edge of the stage satisfies both (F-004).

## Repo findings pooled by file

| File | Issue | Lenses |
|---|---|---|
| `sabotage-stack.html:4416-4424` | digit keys dropped when any button or the canvas has focus | interface, decision-flow |
| `sabotage-stack.html:56-58, 182, 185` | `touch-action: none` on every button and the play card | interface |
| `sabotage-stack.html:1135, 3039-3041` | fixed 3.5 s solo auto-drop | skill-curve |
| `sabotage-stack.html:3815` | `statusMessage` is written in seven places and shown in one | emotion, interface |
| `server/round-engine.js:377-385` | Competitive targets one leader | multiplayer, emotion |
| `server/round-engine.js:222-224, 242-252` | Teamwork pauses for votes; effect clock starts with the turn | decision-flow, elegance |
| `server/round-engine.js:763-771` | Competitive disconnect ends the stack | multiplayer, skill-curve |
| `shared/game-core.js:24` | "harsh" list includes Calipers | elegance |

## Top three changes across all lenses

1. Make the playfield and the vote visible on every viewport (F-001, F-004).
2. Make voting work and mean something: fix the keys, show the player's pick and what each option does, let waiting Teamwork players vote (F-003, F-008, F-013).
3. Make sabotage land on everyone and survive patience: effects counted in drops, targets spread in Competitive (F-007, F-009).
