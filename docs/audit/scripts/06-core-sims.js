// Read-only numeric checks against $GAME/shared/game-core.js (L1, L3, L6). Nothing is written to the game repo.
const Core = require('../../sabotage-stack/shared/game-core.js');
const { save } = { save: (n, d) => require('fs').writeFileSync(require('path').join(__dirname, '../data', n), JSON.stringify(d, null, 2)) };
const out = {};
// L1: perfect window vs speed/height. Time window = 2*window/speed.
const rows = [];
for (const h of [0, 5, 10, 15, 20, 25, 32, 40]) {
  const base = Core.speedForHeight(h);
  const row = { height: h, base, windowPx: Core.perfectWindowForSpeed(base), baseMs: +(2 * Core.perfectWindowForSpeed(base) / base * 1000).toFixed(1), pxPerFrame60: +(base / 60).toFixed(2) };
  for (const [k, mult] of [['turbo', 1.7], ['slowmoDart', 2.5], ['magnetPeak', 2.1], ['drunkLurch', 1.9]]) { const s = base * mult; const w = Core.perfectWindowForSpeed(s); row[k] = `${Math.round(s)}px/s ±${w.toFixed(2)}px ${(2 * w / s * 1000).toFixed(1)}ms`; }
  row.superglueMs = +(2 * 14 / base * 1000).toFixed(1);
  rows.push(row);
}
out.perfectWindow = rows;
out.heightWhereWindowExceeds3 = { base: 'never (cap 300 < 360)', turbo: Math.ceil((360 / 1.7 - 140) / 5), slowmoDart: 'always (350+ px/s)', magnetPeak: Math.ceil((360 / 2.1 - 140) / 5) };
// widths at which a miss is possible with a centred tower
out.missPossibleBelowWidth = 120;
// peekaboo opacity curve
out.peekaboo = [0, 0.30, 0.31, 0.33, 0.349, 0.35, 0.36, 0.37, 0.385, 0.389, 0.39, 0.5, 0.69, 0.7].map(t => ({ t, opacity: +Core.peekabooOpacity(t).toFixed(3) }));
// L3: solo vote. Replicates client weightChatVote / makeSimulatedChatVotes / resolveVote (sabotage-stack.html:2503-2522, 2622-2630).
function soloVote(options, playerPick, rnd = Math.random) {
  const weights = options.map(id => Core.HARSH_SABOTAGE_IDS.includes(id) ? 3 : 1); const total = weights.reduce((a, b) => a + b, 0);
  const count = 15 + Math.floor(rnd() * 11); const truce = options.includes('superglue') && rnd() < 0.08;
  let votes = new Map();
  for (let i = 0; i < count; i++) { let roll = rnd() * total; let pick = options[options.length - 1]; for (let k = 0; k < options.length; k++) { roll -= weights[k]; if (roll < 0) { pick = options[k]; break; } } votes.set('c' + i, truce ? 'superglue' : pick); }
  if (playerPick) for (let w = 1; w <= 4; w++) votes.set('you' + w, playerPick);
  return Core.chooseWinner(votes, options, rnd).winner;
}
const N = 40000; const sim = (options, pick) => { let win = 0; const dist = {}; for (let i = 0; i < N; i++) { const w = soloVote(options, pick); dist[w] = (dist[w] || 0) + 1; if (w === pick) win++; } return { pickWins: +(win / N).toFixed(3), dist: Object.fromEntries(Object.entries(dist).map(([k, v]) => [k, +(v / N).toFixed(3)])) }; };
out.soloVote = {
  threeHarsh_playerPicksOne: sim(['turbo', 'spotlight', 'crumble'], 'turbo'),
  threeHarsh_noPlayerVote: sim(['turbo', 'spotlight', 'crumble'], null),
  withSuperglue_playerPicksSuperglue: sim(['turbo', 'spotlight', 'superglue'], 'superglue'),
  withSuperglue_noPlayerVote: sim(['turbo', 'spotlight', 'superglue'], null),
  withSuperglue_playerPicksHarsh: sim(['turbo', 'spotlight', 'superglue'], 'turbo')
};
// tie-break & zero-vote behaviour
const zero = {}; for (let i = 0; i < 9000; i++) { const w = Core.chooseWinner(new Map(), ['a', 'b', 'c']).winner; zero[w] = (zero[w] || 0) + 1; }
out.zeroVotes = zero;
// L6: option appearance rates, normal vs reduced-motion pool, at height 20 and height 5 (zoom locked)
function appearance(reduced, height) {
  const pool = Core.SABOTAGE_IDS.filter(id => Core.sabotageAvailableAtHeight(id, height) && !(reduced && Core.REDUCED_MOTION_EXCLUDED_IDS.includes(id)));
  const seen = Object.fromEntries(pool.map(id => [id, 0])); let prev = null; const T = 30000; let distinctCats = 0;
  for (let i = 0; i < T; i++) { const o = Core.pickOptions(pool, Math.random, prev, reduced); o.forEach(id => seen[id]++); prev = o[Math.floor(Math.random() * o.length)]; distinctCats += new Set(o.map(id => Core.SABOTAGE_CATEGORY_BY_ID[id])).size; }
  return { poolSize: pool.length, perCategory: Object.fromEntries(Object.entries(Core.SABOTAGE_CATEGORIES).map(([c, ids]) => [c, ids.filter(id => pool.includes(id)).length])), ratePerBallot: Object.fromEntries(Object.entries(seen).map(([k, v]) => [k, +(v / T).toFixed(3)])), meanDistinctCategories: +(distinctCats / T).toFixed(2) };
}
out.appearance = { normal_h20: appearance(false, 20), reduced_h20: appearance(true, 20), normal_h5: appearance(false, 5) };
// recordVote behaviours relevant to L8
let v = new Map(); v = Core.recordVote(v, { voterId: 'manual-1', option: 'a' }, ['a', 'b']); v = Core.recordVote(v, { voterId: ' manual-1 ', option: 'b' }, ['a', 'b']);
let big = new Map(); big = Core.recordVote(big, { voterId: 'x'.repeat(100000), option: 'a' }, ['a', 'b']);
out.recordVote = { trimmedIdOverwrites: Object.fromEntries(v), acceptsHugeVoterId: big.size === 1, numericId: Core.recordVote(new Map(), { voterId: 0, option: 'a' }, ['a']).size, optionCoercion: Core.recordVote(new Map(), { voterId: 'u', option: ['a'] }, ['a']).size };
save('core-sims.json', out);
console.log(JSON.stringify(out, null, 0).replace(/\},\{/g, '},\n{').slice(0, 6500));
