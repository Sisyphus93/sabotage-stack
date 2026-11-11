// Renders REPORT.md from findings.json, re-runs the game's tests (read-only) and records git status. Run last.
const fs = require('fs'); const path = require('path'); const { execSync, spawnSync } = require('child_process');
const AUDIT = path.resolve(__dirname, '..'); const GAME = path.resolve(AUDIT, '../sabotage-stack');
const sh = (cmd, cwd = AUDIT) => { try { return execSync(cmd, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim(); } catch (e) { return ((e.stdout || '') + (e.stderr || '')).trim(); } };
// --- small text corrections in sibling deliverables, and real line numbers for two markup references
const html = fs.readFileSync(path.join(GAME, 'sabotage-stack.html'), 'utf8').split('\n');
const lineOf = needle => html.findIndex((l, i) => i > 22 && l.includes(needle)) + 1;
let fj = fs.readFileSync(path.join(AUDIT, 'findings.json'), 'utf8');
fj = fj.replace('sabotage-stack.html:1025', 'sabotage-stack.html:' + lineOf('class="vote-help"')).replace('sabotage-stack.html:1088', 'sabotage-stack.html:' + lineOf('Survive chat')).replace('A 19 s solo run offered', 'A 17 s solo run offered');
fs.writeFileSync(path.join(AUDIT, 'findings.json'), fj);
const patch = (file, a, b) => { const p = path.join(AUDIT, file); const s = fs.readFileSync(p, 'utf8'); if (s.includes(a)) fs.writeFileSync(p, s.replace(a, b)); };
patch('live-play-log.md', 'Solo, 19 s run:', 'Solo, 17 s run:');
patch('a11y-ui.md', 'Title, how-to, join and results reflow without horizontal scroll at every size', 'Title, how-to and results reflow without horizontal scroll at every size tested (the join dialog was checked only at the four matrix viewports)');
const data = JSON.parse(fj); const F = data.findings; const A = data.appendix;
// --- proofs
const head = sh('git rev-parse HEAD', GAME);
const node22 = path.join(AUDIT, 'tooling', fs.readdirSync(path.join(AUDIT, 'tooling')).find(d => d.startsWith('node-v22')), 'bin');
const t22 = spawnSync(path.join(node22, 'node'), ['test/run.js'], { cwd: GAME, encoding: 'utf8', env: { ...process.env, PATH: node22 + ':' + process.env.PATH } });
fs.writeFileSync(path.join(AUDIT, 'data/npm-test-final-node22.txt'), (t22.stdout || '') + (t22.stderr || ''));
const sum = out => (out.match(/^# (tests|pass|fail|skipped|cancelled) \d+/gm) || []).join(' · ').replace(/# /g, '');
const t20 = spawnSync('node', ['test/run.js'], { cwd: GAME, encoding: 'utf8' });
fs.writeFileSync(path.join(AUDIT, 'data/npm-test-final-node20.txt'), (t20.stdout || '') + (t20.stderr || ''));
const porcelain = sh('git status --porcelain', GAME);
const ignored = sh('git status --porcelain --ignored', GAME);
const skills = [['GameDevelopmentAudit', 'Lagunaswift/GameDevelopmentAudit'], ['plugins', 'openai/plugins'], ['skills-hub-registry', 'tinh2/skills-hub-registry'], ['impeccable', 'pbakaus/impeccable'], ['awesome-gamedev-agent-skills', 'gamedev-skills/awesome-gamedev-agent-skills'], ['game-creator', 'PlayableIntelligence/game-creator']].map(([d, r]) => ({ d, r, h: fs.existsSync(path.join(AUDIT, 'skills', d, '.git')) ? sh('git rev-parse HEAD', path.join(AUDIT, 'skills', d)) : JSON.parse(fs.readFileSync(path.join(AUDIT, 'skills/COMMITS.json'), 'utf8'))[d] }));
const hash = d => skills.find(s => s.d === d).h.slice(0, 12);
const shots = fs.readdirSync(path.join(AUDIT, 'screenshots')).length;
const count = s => F.filter(f => f.severity === s).length;
const L = []; const p = (...s) => L.push(...s);
p('# Sabotage Stack: design, UX and accessibility audit', '',
  `Target \`${data.meta.target}\` at \`${head}\` (${head.startsWith('226e2b1') ? 'matches the brief\'s `226e2b1`' : 'DIFFERS from the brief\'s 226e2b1'}). Read-only audit; nothing in the game repo was changed. Evidence paths are relative to this directory unless they begin with a game file name.`, '',
  '## 1. Executive summary', '',
  '**Verdict: a polished, technically solid solo stacker whose multiplayer modes and small-screen or zoomed layouts are not yet at the same standard.** The core loop, the three themes, performance and the server are strong. The problems cluster around the vote (hard to see, hard to cast, and absent for multiplayer players) and around who sabotage actually reaches.', '',
  `${F.length} detailed findings: ${count('P0')} P0, ${count('P1')} P1, ${count('P2')} P2, ${count('P3')} P3, plus ${A.length} one-line items in the appendix. Top five:`, '',
  '1. **F-001 (P0)** The playfield shrinks to nothing on zoomed or short viewports (0×1 px at 400% zoom, 67×97 px on a landscape phone) and overflows a 1280×800 laptop.',
  '2. **F-004 (P1)** On phones the vote and effect cards are below the fold and the play card blocks scrolling to them.',
  '3. **F-003 (P1)** Vote keys 1/2/3 do nothing while the Drop button or canvas has focus, which is the default.',
  '4. **F-006 (P1)** In Competitive, a sub-second disconnect permanently ends your stack. Closely related: **F-005**, nobody can leave or close a live room.',
  '5. **F-008 (P1)** Teamwork stops for every vote while players can only wait; with **F-007** (only the leader is ever sabotaged) and **F-009** (effects can be waited out), most multiplayer players rarely meet the game\'s main feature.', '');
p('## 2. What is already strong (do not regress these)', '',
  '1. **Clean runtime.** Zero console errors, warnings or page errors across every flow: 12 theme × viewport runs through all screens, 16 effects × 4 variants, both multiplayer modes, keyboard and reflow runs (`live-play-log.md`).',
  '2. **Frame pacing.** 16.7 ms p50 and 16.7-16.8 ms p95 for all 16 effects under a 4× CPU throttle; worst single frame 66.7 ms (`data/frametiming.json`).',
  '3. **Server design.** Authoritative landing with lag compensation, idempotent drops, rate limits, resume tokens sent only to their owner (no token found in any state a player receives), and a fuzz suite. 42 of 42 tests pass on Node 22.',
  '4. **Reconnect.** A dropped socket was back in under a second and a page reload resumed straight into the round (`data/multiplayer.json` → `teamwork.disconnect`, `teamwork.reload`). Refused connections get an immediate, readable message and solo keeps working.',
  '5. **Touch targets and input latency.** No interactive element under 44×44 px on any screen, theme or viewport. Drop fires on `pointerdown` and `keydown`, with nothing gating it.',
  '6. **Contrast and themes.** One contrast miss (4.45:1) across three themes; grain and scanline overlays measurably do not reduce text contrast; each theme is complete, token-driven, applied before first paint and carried into the canvas.',
  '7. **Reduced motion is a game rule, not a CSS afterthought.** The five motion-heavy effects leave the vote pool, mid-round changes are honoured, and they render static in the sandbox (`data/sandbox.json`).',
  '8. **No hazardous flashing.** The largest frame-to-frame luminance change is 7.9% of the canvas against a 12.6% threshold; camera effects never touch landing maths.',
  '9. **Dialogs.** Native `<dialog>`: focus moves in, Escape closes, focus returns to the opener; join errors appear inline in a status region.',
  '10. **First run.** One click and 36 ms from title to a moving block, no tutorial wall, and a miss is geometrically impossible until the block is under 120 px wide. Solo pauses cleanly in a hidden tab.', '');
p('## 3. Prioritized findings', '', '| ID | Sev | Title | Lens / skill | Evidence |', '|---|---|---|---|---|');
for (const f of F) p(`| ${f.id} | ${f.severity} | ${f.title} | ${f.lens.slice(0, 2).join('; ')} | ${f.evidence_type} |`);
p('', '### Leads L1-L8: confirmed or refuted', '', '| Lead | Verdict | Where |', '|---|---|---|',
  '| L1 perfect window | **Confirmed** flat ±3 px in unaffected play (observed 3.00 on every such drop). **Corrected:** Turbo is not the only lifter; Slow-to-Dart (from height 1), Slingshot (7), Drunk (10) and Turbo (15) all cross 360 px/s. The speed/120 term equals one 60 Hz frame: a floor, coherent as designed. Effect-adjusted speed **is** passed. Difficulty rises through speed only; the window is not perceivable before the drop. | F-018, `lens-skill-curve.md` |',
  '| L2 reduced motion | **Confirmed working.** The 8 remaining effects are small-object motion or held view states and look acceptable; test Slow-to-Dart and Macro Zoom with motion-sensitive players. A mixed room is silently reduced for everyone. `#motion-chip` is a speed readout; the setting is explained nowhere except the sandbox panel. | F-017 |',
  '| L3 voting | Ties and empty ballots are random; last winner excluded; solo ×4 is decisive (77% among harsh options) but unmarked; 5 s is tight for unexplained names; at 8 s a phone player sees only a chip. Keys 1/2/3 are broken in default focus. | F-003, F-004, F-013, `lens-decision-flow.md` |',
  '| L4 time pressure | Solo timeout drops the block where it is (run over in 10.6 s untouched). Teamwork timeout does the same, or forfeits after 2 s more. Slow-input players are shut out. Waiting Teamwork players have nothing to do. | F-002, F-008, F-010 |',
  '| L5 multiplayer dynamics | Target is the next turn-taker (Teamwork) or the leader only (Competitive, 7 of 7). The leader is dogpiled; trailing players are never hit. Grief surfaces: throwing, stalling, host stuffing, host leaving, no exit from a live room. **No leak:** clients get full state but no tokens, and nothing in the design is secret. | F-005, F-007, F-010, F-014, F-015, `lens-multiplayer-dynamics.md` |',
  '| L6 effect set | Zero effect-to-effect interactions (replace, never queue). Calipers helps yet is "harsh"; Rollercoaster and Portal are near-neutral; Turbo duplicates Slingshot; four speed effects look alike; Spotlight is the outlier. Count balanced, harshness not. | F-019, `lens-elegance.md` |',
  '| L7 first run | Time to first drop: one click, 36 ms. The how-to dialog is not needed for solo and the game teaches the drop by doing; it does not teach voting, effects or multiplayer. | F-013, F-016, F-020 |',
  '| L8 vote adapter seam | Duplicate voters collapse (last write wins); no id caps or namespacing; shares ids with host clicks. Note-only. | F-029 |', '');
p('## 4. Detailed findings', '');
for (const f of F) p(`### ${f.id} · ${f.title}`, '', `- **ID:** ${f.id}`, `- **Severity:** ${f.severity}`, `- **Title:** ${f.title}`, `- **Evidence type:** ${f.evidence_type}`, `- **Evidence:** ${f.evidence.map(e => '`' + e + '`').join(' · ')}`, `- **Lens:** ${f.lens.join('; ')}`, `- **What happens:** ${f.what_happens}`, `- **Repro:** ${f.repro}`, `- **Why it matters:** ${f.why_it_matters}`, `- **Suggested change:** ${f.suggested_change}`, `- **Confidence:** ${f.confidence}`, '');
const q = F.filter(f => f.effort === 'quick'); const lg = F.filter(f => f.effort === 'larger');
p('## 5. Quick wins versus larger changes', '', '**About a day or less each**', '', ...q.map(f => `- ${f.id} (${f.severity}) ${f.title}`), '', '**Larger changes**', '', ...lg.map(f => `- ${f.id} (${f.severity}) ${f.title}`), '',
  'Suggested order: F-003, F-005, F-006 and F-012 first (small code changes that remove defects); then F-001 and F-004 together (one layout pass); then the Teamwork and Competitive design changes (F-007 to F-010), which should be playtested before they are built.', '');
p('## 6. Experiments for human playtesters', '', 'These cannot be judged from code, screenshots or a bot.', '',
  '| # | Question | Setup | Measure |', '|---|---|---|---|',
  '| E1 | Can players feel the perfect window, and does a centre tick help? | A/B: current vs a faint centre tick on the top block | perfect rate by height band (0-9, 10-19, 20-31, 32+); self-reported "I knew why it was perfect" |',
  '| E2 | Is the first vote understood? | First-time players, phone and desktop, no briefing | share who vote at the first ballot; time to first vote; can they say what the winner did? |',
  '| E3 | Which effects earn their place? | 10+ runs per player with per-effect logging | miss rate and width lost per effect; fun and fairness 1-5; can players name the effect from the stage alone? |',
  '| E4 | What do Teamwork players do while waiting? | 4-6 players, 3 rounds, observe | eyes on screen vs phone drift; talk; how soon someone discovers waiting out an effect |',
  '| E5 | Is leader-only sabotage fun? | A/B: leader only vs leader plus one other | leader "picked on" rating; trailing players "left out" rating; final spread of heights |',
  '| E6 | Motion comfort | Include motion-sensitive testers; Earthquake, Pisa, Macro Zoom, Slow-to-Dart; reduced motion on and off | discomfort 0-10 per effect; any who stop |',
  '| E7 | Does the 3.5 s auto-drop collide with reading the vote? | New players, solo | auto-drops that occur while a vote is open; runs ended by an auto-drop |',
  '| E8 | Phone ergonomics | One-handed play, portrait | reach to vote strip or card; accidental drops while scrolling |',
  '| E9 | Does the drop feel good? | Sound on and off | "weight" rating; whether players notice the effect ending |',
  '| E10 | Real assistive tech | NVDA + Chrome, VoiceOver + Safari, TalkBack | what is actually spoken at vote open, effect start and end, turn change |', '');
p('## 7. Assumptions', '',
  '1. `$GAME` and `$AUDIT` are siblings under `audit-work/`. Everything created is in `$AUDIT`; `npm ci` wrote only the git-ignored `node_modules/` in `$GAME`.',
  '2. The sandbox has Node 20.20.2. The server ran on it. The test baseline needs Node ≥ 22.22.2, so Node 22.23.4 was downloaded from nodejs.org into `$AUDIT/tooling` (SHA-256 verified) solely to run the game\'s tests.',
  '3. Chromium\'s missing system libraries and two fallback fonts were unpacked from Debian packages into `$AUDIT/tooling/syslibs` rather than installed system-wide.',
  '4. **The multiplayer smoke test used three browser contexts (host + two players), not two.** The host does not play and a round needs two players (F-016).',
  '5. **Session-only instrumentation.** An init script wraps `SabotageStackCore` and `WebSocket` to observe state and drive a bot. It never touches source and adds one function call per frame; it was present during frame timing. The bot is immune to view-only effects, so its results say nothing about human difficulty.',
  '6. Zoom was emulated by viewport size (200% → 640×400, 400% → 320×256, the WCAG reference), a hidden tab by pausing `requestAnimationFrame` and firing `visibilitychange`, and a cold start by a local pass-through on port 3101 that stalls only `/ws`.',
  '7. Photosensitivity used per-frame canvas sampling at 60 fps instead of PNG screenshots (which reach about 10 fps); six-frame PNG sequences are saved as evidence. Thresholds follow WCAG 2.3.1.',
  '8. Severity follows the brief\'s scale literally, so accessibility blockers for a group rank high even when the group is small. F-002 is argued down to P1 and F-011 up to P1 in their own text.',
  '9. `reward-psychology-audit` was skipped: there is no meta-progression, loot or currency.',
  '10. The DEV lab needed no unhide: it is a visible button.', '');
p('## 8. Not verified', '',
  '- **Real screen-reader speech.** Only DOM live-region changes were logged.',
  '- **Pinch zoom by gesture.** Synthetic pinch did not register in headless Chromium; the conclusion is from CSS and the viewport meta.',
  '- **Real devices and other browsers.** Frame timing is from headless Chromium with software rendering on 2 vCPUs. Safari and Firefox were not run; iOS viewport units and safe areas were not checked.',
  '- **Audio.** No audio device; only the cue list and toggle state were inspected.',
  '- **Human perception of the seven view-only effects**, and all "feel" judgements.',
  '- **Six-player rooms and load.** Tested with two players; bandwidth at six is extrapolated.',
  '- **Colour-vision deficiency.** No simulator was run; one luminance pair is flagged from arithmetic.',
  '- **What players see when the host closes a room mid-round.** Close room is unreachable during a round (F-005); `room.closed` handling was not observed.',
  '- **Teamwork with one player remaining**, and rooms left idle for the 10-minute sweep.',
  '- **Canvas-drawn text contrast**, WCAG 1.4.12 text spacing and 2.4.11 focus not obscured.',
  '- **The deployed Render instance**, by rule. Cold-start behaviour is a local emulation.',
  '- **The exact code path behind F-005 and the CSS cause of F-001** are inferred from behaviour; the behaviour itself is measured.',
  '- **Visual regression baselines** (game-qa pattern): screenshots were captured, not diffed, because there is no earlier build to compare against.', '');
p('## 9. Skills used', '', 'Cloned shallowly into `skills/` at the commits below (also in `skills/COMMITS.json`). After the audit, the four large clones (openai/plugins, skills-hub-registry, impeccable, game-creator) were pruned to the folders listed here plus licence files, and Node 22 was reduced to its `node` binary, to keep this directory small. No installer, detector or binary from any skill was run. "Full" means every line was read; "checklists" means headings and list items were read with long lines cut.', '',
  '| Source @ commit | File | Read | Used for |', '|---|---|---|---|',
  ...['game-design-director', 'emotion-engine-audit', 'elegance-audit', 'skill-curve-audit', 'decision-flow-audit', 'game-feel-audit', 'game-interface-audit', 'multiplayer-dynamics-audit'].map(s => `| Lagunaswift/GameDevelopmentAudit @ \`${hash('GameDevelopmentAudit')}\` | \`skills/${s}/SKILL.md\` | full | \`lens-${s.replace('-audit', '')}.md\` |`),
  `| openai/plugins @ \`${hash('plugins')}\` | \`plugins/game-studio/skills/game-playtest/SKILL.md\` | checklists | playtest order, state coverage, HUD overlap |`,
  `| openai/plugins @ \`${hash('plugins')}\` | \`plugins/game-studio/skills/game-ui-frontend/SKILL.md\` | checklists | "protect the playfield", mobile collapse; 3D items ignored |`,
  `| tinh2/skills-hub-registry @ \`${hash('skills-hub-registry')}\` | \`ux/game-ux/SKILL.md\` | checklists (first 60 items) | HUD, menu, text-size checks |`,
  `| tinh2/skills-hub-registry @ \`${hash('skills-hub-registry')}\` | \`review/game-accessibility/SKILL.md\` | checklists (first 70 items) | colour, text, motion, flashing, audio checks; console-only items skipped |`,
  `| pbakaus/impeccable @ \`${hash('impeccable')}\` | \`plugin/skills/impeccable/reference/audit.md\` | checklists | five audit dimensions, touch and reflow rules |`,
  `| pbakaus/impeccable @ \`${hash('impeccable')}\` | \`plugin/skills/impeccable/reference/critique.md\` | structure only (first 45 items of about 7,000 words) | Nielsen heuristics pass, run **degraded** (no detector, no sub-agents) |`,
  `| gamedev-skills/awesome-gamedev-agent-skills @ \`${hash('awesome-gamedev-agent-skills')}\` | \`skills/disciplines/game-feel/SKILL.md\`, \`game-ui-ux/SKILL.md\`, \`input-systems/SKILL.md\` | workflow headings | rubrics in the feel and interface lenses |`,
  `| PlayableIntelligence/game-creator @ \`${hash('game-creator')}\` | \`skills/game-qa/SKILL.md\` | headings and reference list | Playwright, axe-core, screenshot and FPS-sampling patterns |`, '',
  '**Not found:** none. Path differences: impeccable\'s `audit` and `critique` are reference files, not skill folders; the tinh2 skills live under `ux/` and `review/`, so the claudskills.com fallback was not needed.', '',
  '**Not opened:** the `references/` files of the three awesome-gamedev skills, game-qa\'s seven companion files, the two `agents/openai.yaml` files, and `GameDevelopmentAudit/skills/reward-psychology-audit` (skipped by the brief).', '',
  '**Skill instructions deliberately not followed:** installers; `impeccable detect`, its live server, sub-agents and end-with-a-question rule; game-qa\'s required `window.__GAME__` and `render_game_to_text` hooks; each skill\'s own output format.', '');
p('## 10. Repo-untouched proof', '', '```', `$ git -C $GAME rev-parse HEAD`, head, '', '$ git -C $GAME status --porcelain', porcelain === '' ? '(empty)' : porcelain, '', '$ git -C $GAME status --porcelain --ignored', ignored || '(empty)', '```', '',
  `Final \`npm test\` (\`node test/run.js\`), run from the unmodified repo at report time:`, '',
  `- Node ${sh(path.join(node22, 'node') + ' -v')}: **${sum(t22.stdout || '')}**, exit ${t22.status} (\`data/npm-test-final-node22.txt\`). Matches the brief\'s baseline of 42 passing.`,
  `- Node ${sh('node -v')} (sandbox default): ${sum(t20.stdout || '')}, exit ${t20.status} (\`data/npm-test-final-node20.txt\`). Same as the first run; see F-030.`, '',
  `Deliverables in this directory: \`REPORT.md\`, \`findings.json\`, \`00-game-map.md\`, eight \`lens-*.md\`, \`a11y-ui.md\`, \`live-play-log.md\`, \`screenshots/\` (${shots} files), \`data/\`, \`scripts/\`.`, '');
p('## Appendix: remaining findings', '', ...A.map(a => `- **${a.id}** (${a.severity}, ${a.evidence_type}) ${a.title} Evidence: \`${a.evidence}\``), '');
fs.writeFileSync(path.join(AUDIT, 'REPORT.md'), L.join('\n'));
console.log('REPORT.md', L.length, 'lines |', 'porcelain:', JSON.stringify(porcelain), '| ignored:', JSON.stringify(ignored), '| node22:', sum(t22.stdout || ''), 'exit', t22.status, '| node20:', sum(t20.stdout || ''), 'exit', t20.status);
console.log('vote-help line', lineOf('class="vote-help"'), 'how step3 line', lineOf('Survive chat'));
