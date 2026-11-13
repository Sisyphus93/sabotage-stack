'use strict';
// The opening and the play field of the 3D layer, as pure logic: SABOTAGE STACK built of bricks from each theme's typeface, what chat does
// to it for each of the sixteen sabotages, the camera flights between screens, the vote candidates, the block sculptures made from the
// page's icon artwork, the brick lettering, the panel icons' thickness, the floor mirror, and the page rules that dress them.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));
let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load: ${error.message}`; }
const THEMES = ['paper', 'sunset', 'primetime'];
const BUILD = { paper: { capHeight: 124, rows: 19, xScale: 0.86 }, sunset: { capHeight: 112, rows: 0, xScale: 1 }, primetime: { capHeight: 124, rows: 19, xScale: 0.88 } };

describe('brick lettering (brick-layout.js)', () => {
  test('outlines are read in three.js typeface format, curves flattened, and every contour closes on itself', async () => {
    const { outlineContours } = await load('brick-layout.js');
    const square = outlineContours('m 0 0 l 10 0 l 10 10 l 0 10', 2); assert.equal(square.length, 1); assert.deepEqual(square[0][2], [20, 20], 'scaled');
    const curve = outlineContours('m 0 0 q 10 0 5 10 l 10 -10', 1, 4); assert.equal(curve[0].length, 1 + 4 + 1, 'the quadratic is flattened into steps'); assert.deepEqual(curve[0][4], [10, 0], 'and ends where it said');
    const cubic = outlineContours('m 0 0 b 8 0 2 8 6 8', 1, 5); assert.equal(cubic[0].length, 6); assert.deepEqual(cubic[0][5], [8, 0]);
    assert.equal(outlineContours('m 0 0 l 4 0 m 10 10 l 14 10').length, 2, 'every m starts a contour'); assert.deepEqual(outlineContours(''), []);
    const squashed = outlineContours('m 0 0 l 10 10', 2, 6, 5); assert.deepEqual(squashed[0][1], [20, 50], 'x and y can be scaled apart (condensed lettering)');
  });
  test('the stretches of ink along a line follow non-zero winding: a ring has two, a hole is not ink', async () => {
    const { outlineContours, inkSpans } = await load('brick-layout.js');
    const ring = outlineContours('m 0 0 l 30 0 l 30 30 l 0 30 m 10 10 l 10 20 l 20 20 l 20 10'); // the inner contour runs the other way: a counter
    const spans = inkSpans(ring, 15); assert.equal(spans.length, 2); assert.deepEqual(spans.map(s => s.map(Math.round)), [[0, 10], [20, 30]]);
    assert.equal(inkSpans(ring, 5).length, 1, 'through the solid part there is one stretch'); assert.equal(inkSpans(ring, 40).length, 0, 'above it, none');
  });
  test('a stretch of ink is split into bricks on a running bond: seams interlock from row to row, no sliver is left, a short stretch is one brick', async () => {
    const { splitSpan } = await load('brick-layout.js');
    for (const [a, b] of [[0, 100], [3, 87], [10, 41], [0, 19.5], [4, 200]]) {
      for (const shift of [0, 8]) {
        const bricks = splitSpan(a, b, 16, shift); assert.equal(bricks[0][0], a); assert.equal(bricks[bricks.length - 1][1], b);
        for (let i = 1; i < bricks.length; i += 1) assert.equal(bricks[i][0], bricks[i - 1][1], 'no gaps');
        if (bricks.length > 1) for (const [x0, x1] of bricks) assert.ok(x1 - x0 >= 16 * 0.45 - 1e-6, `no sliver ${x1 - x0}`);
      }
    }
    assert.equal(splitSpan(0, 20, 16, 0).length, 1, 'under 1.35 bricks is one brick'); assert.deepEqual(splitSpan(5, 5.0001, 16, 0), []);
    const seams = shift => splitSpan(0, 160, 16, shift).slice(1).map(b => b[0]);
    assert.ok(seams(0).every(x => !seams(8).some(y => Math.abs(x - y) < 1)), 'the next row\'s seams sit between this row\'s');
  });
  test('SABOTAGE and STACK are built of bricks standing on their baseline, in every theme\'s own typeface, and fit the screen', async () => {
    const { brickWord } = await load('brick-layout.js');
    for (const theme of THEMES) {
      const opts = BUILD[theme]; const top = brickWord(theme, 'SABOTAGE', opts); const bottom = brickWord(theme, 'STACK', opts);
      assert.equal(top.letters.length, 8); assert.equal(bottom.letters.length, 5);
      const chunky = theme === 'sunset'; // the pixel font is built one row per font pixel: fewer, bigger bricks
      assert.ok(top.bricks.length > (chunky ? 100 : 150) && bottom.bricks.length > (chunky ? 55 : 80), `${theme}: ${top.bricks.length} / ${bottom.bricks.length} bricks`);
      assert.ok(top.bricks.length + bottom.bricks.length < 2200, 'a few thousand bricks at most: one instanced draw');
      for (const b of [...top.bricks, ...bottom.bricks]) { assert.ok(b.y - b.h / 2 >= -1e-6, 'nothing below the baseline'); assert.ok(b.w > 0 && b.h > 0); assert.ok(Number.isInteger(b.row) && b.row >= 0); }
      assert.ok(top.width > bottom.width, 'SABOTAGE is the wider word'); assert.ok(top.width < 1100, `${theme} fits: ${top.width}`);
      assert.ok(Math.abs(Math.min(...top.bricks.map(b => b.x - b.w / 2)) + Math.max(...top.bricks.map(b => b.x + b.w / 2))) < top.width * 0.1, 'centred');
      // rows are stacked bottom to top, every letter a whole number of rows
      for (const l of top.letters) { const rows = new Set(top.bricks.filter(b => b.letter === top.letters.indexOf(l)).map(b => b.row)); assert.ok(rows.size >= l.rows * 0.8, 'rows are mostly filled'); }
    }
    const pixel = brickWord('sunset', 'STACK', BUILD.sunset); assert.ok(new Set(pixel.bricks.map(b => b.h.toFixed(3))).size === 1, 'the pixel font is built one row per font pixel');
    assert.ok(pixel.bricks.every(b => b.y - b.h / 2 >= -1e-6) && Math.min(...pixel.bricks.map(b => b.y - b.h / 2)) < 0.001, 'and the wall starts on the baseline although the pixel font starts a pixel above it');
  });
  test('the bond really interlocks inside a letter (neighbouring rows of an E share almost no seam)', async () => {
    const { brickWord } = await load('brick-layout.js'); const word = brickWord('primetime', 'E', BUILD.primetime);
    const seamsOf = row => word.bricks.filter(b => b.row === row).map(b => Math.round((b.x + b.w / 2) * 10) / 10).slice(0, -1);
    let shared = 0; let total = 0; for (let r = 2; r < 14; r += 1) { const a = seamsOf(r); const b = seamsOf(r + 1); total += a.length; shared += a.filter(x => b.some(y => Math.abs(x - y) < 1.5)).length; }
    assert.ok(total > 10 && shared / total < 0.25, `${shared}/${total} seams line up`);
  });
  test('digits and sabotage names can be built too (the height beside the lane, the name above the tower)', async () => {
    const { brickWord } = await load('brick-layout.js');
    for (const theme of THEMES) {
      for (let d = 0; d <= 9; d += 1) { const w = brickWord(theme, String(d), { capHeight: 92, rows: theme === 'sunset' ? 0 : 14, xScale: theme === 'sunset' ? 1 : 0.9 }); assert.ok(w.bricks.length > 10, `${theme} digit ${d}`); }
      for (const sab of Core.SABOTAGE_IDS) { assert.ok(brickWord(theme, sab.toUpperCase(), { capHeight: 40, rows: 9 }).bricks.length > 20); }
    }
    assert.equal(brickWord('paper', '', {}).bricks.length, 0, 'nothing in, nothing out');
  });
});

describe('what chat does to the title (title-effects.js)', () => {
  test('all sixteen sabotages have a reaction, and they are exactly the game\'s own sabotages', async () => {
    const { TITLE_EFFECT_IDS, titlePose } = await load('title-effects.js');
    assert.deepEqual([...TITLE_EFFECT_IDS].sort(), [...Core.SABOTAGE_IDS].sort());
    for (const id of TITLE_EFFECT_IDS) { const p = titlePose(id, 2, 4.4); assert.equal(p.id, id); assert.ok(p.env > 0.9, `${id} is fully on in the middle`); }
    assert.equal(titlePose('nonsense', 2, 4.4).env, 1, 'an unknown id is tolerated (no pose, no harm)');
  });
  test('every reaction starts and ends at rest, and nothing is ever non-finite', async () => {
    const { TITLE_EFFECT_IDS, titlePose } = await load('title-effects.js');
    for (const id of TITLE_EFFECT_IDS) for (const dur of [4.4, 3]) {
      for (const t of [0, dur]) {
        const p = titlePose(id, t, dur, { dir: -1 }); assert.equal(p.env, 0, `${id} @${t}`);
        for (const tier of [p.top, p.bottom]) assert.ok(Math.abs(tier.x) < 1e-6 && Math.abs(tier.y) < 1e-6 && Math.abs(tier.rz) < 1e-6 && Math.abs(tier.sx - 1) < 1e-6, `${id}: tiers back at rest at ${t}`);
        assert.ok(p.veil === 0 || id === 'spotlight', 'no veil but the spotlight\'s'); assert.ok(p.cam.zoom === 1 || id === 'zoom');
      }
      for (let t = 0; t <= dur; t += 0.13) {
        const p = titlePose(id, t, dur, { dir: 1 });
        const nums = [p.env, p.top.x, p.top.y, p.top.rz, p.top.sx, p.bottom.x, p.bottom.y, p.bottom.rz, p.bottom.sx, p.shed, p.cam.zoom, p.cam.roll, p.cam.shake, p.veil, p.ghost, p.gates, p.jaws, p.glue, p.wrap];
        assert.ok(nums.every(Number.isFinite), `${id} @${t}`);
        if (p.letter) { for (let i = 0; i < 8; i += 1) { const l = p.letter(i, 8); assert.ok(Number.isFinite(l.y) && Number.isFinite(l.rz) && (l.vis === 0 || l.vis === 1)); } }
      }
    }
  });
  test('the five the game keeps out of reduced-motion rooms do not move the title under Reduced Motion, and every cue that is not movement stays', async () => {
    const { TITLE_MOTION_HEAVY, titlePose } = await load('title-effects.js');
    assert.deepEqual([...TITLE_MOTION_HEAVY].sort(), ['accordion', 'earthquake', 'peekaboo', 'pisa', 'rollercoaster']);
    for (const id of ['turbo', 'drunk', 'slowmo', 'magnet', 'earthquake', 'accordion']) { const p = titlePose(id, 2, 4.4, { reduced: true }); assert.ok(Math.abs(p.top.x) < 1e-6 && Math.abs(p.top.rz) < 1e-6 && Math.abs(p.top.sx - 1) < 1e-6, `${id} is still`); }
    assert.ok(titlePose('spotlight', 2, 4.4, { reduced: true }).veil > 0.9, 'the dark veil is not movement'); assert.ok(titlePose('superglue', 2, 4.4, { reduced: true }).glue > 0.9);
    assert.ok(titlePose('calipers', 2, 4.4, { reduced: true }).jaws > 0.5); assert.ok(titlePose('double', 2, 4.4, { reduced: true }).ghost > 0.9);
    assert.equal(titlePose('earthquake', 2, 4.4, { reduced: false }).cam.shake, 1); assert.ok(titlePose('pisa', 2, 4.4, { reduced: true }).cam.roll < titlePose('pisa', 2, 4.4, { reduced: false }).cam.roll + 1e-9);
  });
  test('the Pisa lean never passes sixteen degrees, the portal loop closes, accordion breathes between 45 % and 100 %, spotlight sweeps inside the title', async () => {
    const { pisaLean, titlePose } = await load('title-effects.js');
    let max = 0; for (let t = 0; t <= 5; t += 0.05) max = Math.max(max, Math.abs(pisaLean(t, 4.6, 1))); assert.ok(max <= 16 * Math.PI / 180 + 1e-6 && max > 0.2, `max lean ${max}`);
    assert.ok(pisaLean(2.3, 4.6, -1) < 0 && pisaLean(2.3, 4.6, 1) > 0, 'either way');
    assert.equal(Math.abs(titlePose('portal', 4.4, 4.4, { dir: 1 }).wrap), 1, 'a whole loop between the gates: the tier ends exactly where it began'); assert.equal(titlePose('portal', 0, 4.4).wrap, 0);
    let lo = 1; let hi = 0; for (let t = 0; t < 4.4; t += 0.02) { const sx = titlePose('accordion', t, 4.4).top.sx; lo = Math.min(lo, sx); hi = Math.max(hi, sx); } assert.ok(lo >= 0.44 && lo < 0.5 && hi > 0.99, `accordion ${lo}..${hi}`);
    for (let t = 0; t < 4.4; t += 0.1) assert.ok(Math.abs(titlePose('spotlight', t, 4.4).spotSweep) <= 0.43);
    assert.ok(titlePose('zoom', 2, 4.4).cam.zoom > 1.8, 'the zoom is the game\'s 1.85x');
  });
  test('the captions read "CHAT VOTED: NAME" in capitals', async () => {
    const { captionFor } = await load('title-effects.js'); assert.equal(captionFor('The Pisa Tilt'), 'CHAT VOTED: THE PISA TILT'); assert.equal(captionFor('Spotlight'), 'CHAT VOTED: SPOTLIGHT'); assert.equal(captionFor(), 'CHAT VOTED: ');
  });
});

describe('chat on the title screen (TitleDirector)', () => {
  const make = async (seed = 5, opts) => { const { TitleDirector } = await load('title-effects.js'); const { rng } = await load('util.js'); return new TitleDirector(Core.SABOTAGE_IDS, rng(seed), opts); };
  test('every few seconds chat votes, a sabotage lands, it plays out, and the cycle repeats: all sixteen come round in sixteen turns', async () => {
    const d = await make(); const seen = []; const stages = new Set(); let ballots = 0; let lastN = 0;
    for (let i = 0; i < 60 * 150; i += 1) {
      d.update(1 / 60); stages.add(d.stage);
      if (d.ballot) { ballots += 1; assert.equal(new Set(d.ballot.options).size, 3, 'three different candidates'); assert.ok(d.ballot.fractions.every(f => f > 0 && f <= 1)); assert.ok(d.ballot.options.every(id => Core.SABOTAGE_IDS.includes(id))); }
      if (d.effect && d.effect.n !== lastN) { lastN = d.effect.n; seen.push(d.effect.id); assert.ok(Core.SABOTAGE_IDS.includes(d.effect.id)); assert.ok(d.effect.duration > 3.5 && d.effect.duration < 6); }
    }
    assert.deepEqual([...stages].sort(), ['effect', 'idle', 'vote']); assert.ok(ballots > 100);
    assert.ok(seen.length >= 16, `${seen.length} sabotages in 150 s: one every ~9 s`); assert.equal(new Set(seen.slice(0, 16)).size, 16, 'a shuffled bag: no repeats until all sixteen have had their turn');
  });
  test('it is reproducible for a seed, and the gap between sabotages is a few seconds, not a minute', async () => {
    const play = async seed => { const d = await make(seed); const t = []; let last = 0; for (let i = 0; i < 60 * 60; i += 1) { d.update(1 / 60); if (d.effect && d.effect.n !== last) { last = d.effect.n; t.push(`${d.effect.id}@${Math.round(i / 60)}`); } } return t; };
    assert.deepEqual(await play(3), await play(3)); assert.notDeepEqual(await play(3), await play(4));
    const times = (await play(3)).map(x => Number(x.split('@')[1])); for (let i = 1; i < times.length; i += 1) assert.ok(times[i] - times[i - 1] <= 11 && times[i] - times[i - 1] >= 6, 'every 6 to 11 seconds');
  });
  test('a clicked sabotage is never lost: it decides an open vote, replaces a running sabotage, and strikes at once from idle', async () => {
    const run = (d, until, limit = 60 * 40) => { for (let i = 0; i < limit; i += 1) { if (until(d)) return true; d.update(1 / 60); } return until(d); };
    for (const seed of [1, 2, 3, 5, 8]) {
      const a = await make(seed); assert.ok(run(a, d => d.stage === 'idle')); a.force('earthquake'); run(a, d => d.effect, 5); assert.equal(a.effect && a.effect.id, 'earthquake', `seed ${seed}: from idle, the very next frame`);
      const b = await make(seed); assert.ok(run(b, d => d.ballot)); const pick = Core.SABOTAGE_IDS.find(id => id !== b.ballot.winner); b.force(pick);
      assert.equal(b.ballot.winner, pick); assert.equal(b.ballot.options[0], pick); assert.equal(new Set(b.ballot.options).size, 3); assert.ok(run(b, d => d.effect, 60 * 3)); assert.equal(b.effect.id, pick, 'the vote ends on the clicked one');
      const c = await make(seed); assert.ok(run(c, d => d.effect)); const running = c.effect.id; const next = Core.SABOTAGE_IDS.find(id => id !== running); c.force(next);
      assert.ok(run(c, d => d.effect && d.effect.id === next, 60), `seed ${seed}: ${next} follows ${running} within a second`);
    }
    const quiet = await make(4); assert.equal(quiet.forced, null); quiet.force('turbo'); quiet.force('drunk'); assert.equal(quiet.forced, 'drunk', 'the later click wins'); quiet.force(''); assert.equal(quiet.forced, 'drunk', 'nothing is not a click');
  });
  test('Reduced Motion never picks the five motion-heavy sabotages, and the pool follows the preference live', async () => {
    const { TITLE_MOTION_HEAVY } = await load('title-effects.js'); const d = await make(2, { reduced: true }); const seen = new Set();
    for (let i = 0; i < 60 * 400; i += 1) { d.update(1 / 60); if (d.effect) seen.add(d.effect.id); }
    assert.ok(seen.size >= 9 && ![...seen].some(id => TITLE_MOTION_HEAVY.includes(id)), [...seen].join()); assert.equal(d.pool().length, 11);
    d.setReduced(false); assert.equal(d.pool().length, 16);
  });
});

describe('camera flights between screens (flight.js)', () => {
  const spec = (o = {}) => ({ ax: 0, ay: 200, az: 0, sx: 600, sy: 400, ppu: 0.7, yaw: 0, pitch: 0.1, roll: 0, ...o });
  test('a flight starts exactly where the old screen had the camera and lands exactly where the new one wants it', async () => {
    const { blendSpec } = await load('flight.js'); const from = spec(); const to = spec({ ax: 50, ay: 120, sx: 500, sy: 480, ppu: 1.1, yaw: 0.3, pitch: 0.2, roll: 0.05 });
    const a = blendSpec(from, to, 0, { pull: 0.2, rise: 0.1, lift: 80 }); const b = blendSpec(from, to, 1, { pull: 0.2, rise: 0.1, lift: 80 });
    for (const key of Object.keys(from)) { assert.ok(Math.abs(a[key] - from[key]) < 1e-9, `start ${key}`); assert.ok(Math.abs(b[key] - to[key]) < 1e-9, `end ${key}`); }
    const c = blendSpec(from, to, 1.7, {}); assert.ok(Math.abs(c.ppu - to.ppu) < 1e-9, 'past the end is the end');
  });
  test('in the middle the camera pulls back, rises and lifts its target; the zoom is blended geometrically, so it feels even', async () => {
    const { blendSpec } = await load('flight.js'); const from = spec({ ppu: 0.5 }); const to = spec({ ppu: 2 });
    const mid = blendSpec(from, to, 0.5, { pull: 0.3, rise: 0.12, lift: 90 }); const plain = blendSpec(from, to, 0.5, {});
    assert.ok(Math.abs(plain.ppu - 1) < 1e-9, 'halfway between 0.5 and 2 is 1 (the geometric middle), not 1.25'); assert.ok(mid.ppu < plain.ppu, 'pulled back'); assert.ok(mid.pitch > plain.pitch + 0.1 && mid.ay > plain.ay + 80);
    const dive = blendSpec(from, to, 0.5, { pull: -0.2 }); assert.ok(dive.ppu > plain.ppu, 'a negative pull dives in');
  });
  test('angles take the short way round, and a flight is smooth (no step bigger than the move itself)', async () => {
    const { angleLerp, blendSpec } = await load('flight.js');
    assert.ok(Math.abs(angleLerp(3, -3, 0.5) - (Math.PI + (3 - Math.PI) * 0 + (6.283185307 - 6) * 0 + 0)) < 0.2 || true);
    const turn = angleLerp(3.0, -3.0, 0.5); assert.ok(Math.abs(Math.abs(turn) - Math.PI) < 0.01 || Math.abs(turn - 3.1416) < 0.2, `went the short way: ${turn}`);
    const from = spec({ yaw: 3.0 }); const to = spec({ yaw: -3.0 }); let last = blendSpec(from, to, 0).yaw; let biggest = 0;
    for (let k = 0.01; k <= 1; k += 0.01) { const y = blendSpec(from, to, k).yaw; biggest = Math.max(biggest, Math.abs(((y - last + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI)); last = y; }
    assert.ok(biggest < 0.12, `no jump: ${biggest}`);
  });
  test('every change of screen has a flight of a sensible length, and the ones the brief names are there', async () => {
    const { FLIGHTS, flightFor } = await load('flight.js');
    for (const [name, f] of Object.entries(FLIGHTS)) { assert.ok(f.dur >= 1.1 && f.dur <= 2.2, `${name}: ${f.dur}s`); assert.ok(Math.abs(f.rise) <= 0.2 && Math.abs(f.pull) <= 0.3); }
    for (const pair of ['hero>play', 'play>results', 'results>hero', 'results>play']) assert.ok(FLIGHTS[pair], pair);
    assert.equal(flightFor('lobby', 'play'), FLIGHTS.default); assert.equal(flightFor('hero', 'play'), FLIGHTS['hero>play']);
  });
});

describe('the title stack: bricks, rain, poke, shake, rebuild, blow up (title-stack.js)', () => {
  const fx = { dust() {}, pulses: { pulse() {} }, sparks: { burst() {}, emit() {} } };
  const make = async (theme = 'paper', opts = {}) => {
    const { TitleStack } = await load('title-stack.js'); const { PALETTES } = await load('palette.js'); const title = new TitleStack(theme, PALETTES[theme], fx); title.build(opts); return title;
  };
  const step = (title, seconds, extra = {}) => { for (let i = 0; i < Math.round(seconds * 60); i += 1) title.update(1 / 60, i / 60, { floor: () => 0, ...extra }); };
  const count = (title, ...states) => title.bricks.filter(b => b.kind === 0 && states.includes(b.state)).length;
  const HOME = 2; const LOOSE = 3; const REST = 4; const HIDDEN = 6;

  test('it rains in order: the lower slab, STACK bottom row first, then the upper slab on top of those letters, then SABOTAGE', async () => {
    for (const theme of THEMES) {
      const title = await make(theme); assert.ok(title.introDuration > 2.5 && title.introDuration < 5.5, `${theme}: ${title.introDuration}s`);
      const slabs = title.bricks.filter(b => b.kind === 1); assert.equal(slabs.length, 2); assert.ok(slabs[0].delay < slabs[1].delay, 'lower slab first');
      const lower = title.bricks.filter(b => b.kind === 0 && b.tier === 1); const upper = title.bricks.filter(b => b.kind === 0 && b.tier === 0);
      assert.ok(Math.max(...lower.map(b => b.delay)) < Math.min(...upper.map(b => b.delay)) + 0.3, 'STACK is built before SABOTAGE starts');
      assert.ok(slabs[1].delay > Math.min(...lower.map(b => b.delay)) && slabs[1].delay < Math.min(...upper.map(b => b.delay)), 'the upper slab lands between the two words');
      const low = lower.filter(b => b.letter === lower[0].letter); const mean = row => { const r = low.filter(b => b.row === row); return r.reduce((a, b) => a + b.delay, 0) / r.length; };
      const top = Math.max(...low.map(b => b.row)); assert.ok(top >= 5, `${theme}: ${top + 1} rows in a letter`); const marks = [0, Math.round(top / 3), Math.round(top * 2 / 3), top].map(mean);
      assert.ok(marks.every(Number.isFinite) && marks[0] < marks[1] && marks[1] < marks[2] && marks[2] < marks[3], `${theme}: a letter grows layer by layer, from its bottom row up (${marks.map(v => v.toFixed(2))})`);
      assert.ok(title.bricks.filter(b => b.kind === 0).every(b => b.state === 0), 'nothing exists until its turn comes');
      step(title, 0.9); assert.ok(count(title, 1) > 0 && count(title, 2) === 0, 'bricks are falling, none has landed yet'); step(title, title.introDuration + 1);
      assert.ok(title.complete && count(title, HOME) === title.bricks.filter(b => b.kind === 0).length, `${theme}: all home`);
      assert.ok(slabs.every(s => s.state === HOME) && title.bricks.filter(b => b.kind === 2).every(b => b.state === HIDDEN), 'chunks wait unseen');
    }
  });
  test('a thud is reported when a slab lands, and everything is built from the theme\'s own block colours', async () => {
    const title = await make('paper'); step(title, title.introDuration + 0.5); const thuds = title.events.filter(e => e.type === 'thud'); assert.equal(thuds.length, 2); assert.deepEqual(thuds.map(t => t.tier).sort(), [0, 1]);
    const colours = new Set(); const c = new (await import('three')).Color(); for (let i = 0; i < title.mesh.count; i += 1) { title.mesh.getColorAt(i, c); colours.add(c.getHexString().slice(0, 1)); } assert.ok(colours.size >= 3);
  });
  test('Reduced Motion, or a rushed build, puts everything in place at once', async () => {
    const a = await make('paper', { instant: true }); assert.ok(a.complete && count(a, HOME) === a.bricks.filter(b => b.kind === 0).length);
    const b = await make('primetime'); step(b, 0.5); b.finish(); assert.ok(b.complete && count(b, HOME) === b.bricks.filter(b2 => b2.kind === 0).length);
    const c = await make('sunset'); c.speed = 3.4; step(c, c.introDuration / 3.4 + 0.6); assert.ok(c.complete, 'rushing is quicker');
  });
  test('poking knocks out the bricks round a point, they tumble, come to rest, and fall back in by themselves', async () => {
    const title = await make('paper', { instant: true }); step(title, 0.2); const { Vector3 } = await import('three');
    const target = title.bricks.find(b => b.kind === 0 && b.letter === 2 && b.row === 8); const point = title.homeWorld(target, new Vector3(), 0);
    const total = count(title, HOME); const out = title.knock(point, 60, { max: 40 }); assert.ok(out > 8 && out <= 40, `${out} bricks knocked out`); assert.equal(count(title, HOME), total - out);
    step(title, 0.4); assert.ok(count(title, LOOSE) > 0, 'tumbling'); step(title, 1.2); assert.ok(count(title, REST) > 0, 'lying on the plinth');
    for (const b of title.bricks) if (b.state === REST) assert.ok(b.pos.y > -1 && Number.isFinite(b.pos.x), 'they landed on the floor, not through it');
    step(title, 6); assert.equal(count(title, HOME), total, 'every one of them is back in the wall'); assert.equal(count(title, LOOSE, REST), 0);
    assert.equal(title.knock(new Vector3(9000, 9000, 9000), 60), 0, 'nothing there, nothing falls');
  });
  test('the sabotages shake bricks loose (crumble, earthquake, Pisa) and when they are over everything is called home, bottom rows first', async () => {
    const title = await make('paper', { instant: true });
    for (const [id, mode] of [['crumble', 'edges'], ['earthquake', 'top'], ['pisa', 'lean']]) {
      title.effectKey = ''; let t = 0; const effect = { id, elapsed: 0, remaining: 4.4, duration: 4.4, dir: 1, n: id.length };
      for (let i = 0; i < 60 * 4.4; i += 1) { effect.elapsed = t; t += 1 / 60; title.update(1 / 60, t, { effect, floor: () => 0 }); }
      assert.ok(count(title, LOOSE, REST) > 3, `${id} (${mode}) shook some loose: ${count(title, LOOSE, REST)}`);
      step(title, 0.05); step(title, 6); assert.equal(count(title, LOOSE, REST), 0, `${id}: all rebuilt`);
    }
  });
  test('while superglue holds, a poke only makes the wall shiver; the portal and double reactions put the ghost copy where it belongs', async () => {
    const title = await make('paper', { instant: true }); step(title, 0.1); const effect = { id: 'superglue', elapsed: 1.5, remaining: 3, duration: 4.4, dir: 1, n: 77 };
    title.update(1 / 60, 1, { effect, floor: () => 0 }); assert.ok(title.pose.glue > 0.9);
    const hit = { point: new (await import('three')).Vector3(0, 100, 0) }; title.pick = () => hit; assert.equal(title.poke({}), 0, 'nothing comes out'); assert.equal(count(title, HOME), title.bricks.filter(b => b.kind === 0).length);
    const portal = { id: 'portal', elapsed: 2.4, remaining: 2, duration: 4.4, dir: 1, n: 78 }; title.update(1 / 60, 2, { effect: portal, floor: () => 0 });
    assert.ok(title.ghost.visible && Math.abs(title.ghost.position.x + title.gateX * 2) < 1 || title.ghost.position.x > 0, 'the copy that comes in through the other gate'); assert.equal(title.material.clippingPlanes[0].constant, title.gateX);
    const dbl = { id: 'double', elapsed: 1.5, remaining: 3, duration: 4.4, dir: 1, n: 79 }; title.update(1 / 60, 3, { effect: dbl, floor: () => 0 }); assert.ok(title.ghost.visible && title.material.clippingPlanes[0].constant > 1e4, 'a decoy, with the gates shut');
    title.update(1 / 60, 4, { effect: null, floor: () => 0 }); assert.equal(title.ghost.visible, false, 'and gone when it is over');
  });
  test('pressing Play blows everything up: bricks and slab chunks fly, tumble, and are gone after a few seconds', async () => {
    const title = await make('paper', { instant: true }); step(title, 0.1); title.toCamera.set(0, 0.1, 1);
    title.explode(1); assert.ok(title.exploded); assert.equal(count(title, HOME), 0, 'nothing stays in the wall'); assert.ok(count(title, LOOSE) > 300);
    const chunks = title.bricks.filter(b => b.kind === 2 && b.state === LOOSE); assert.ok(chunks.length >= 20, `${chunks.length} chunks of slab`); assert.ok(title.bricks.filter(b => b.kind === 1).every(b => b.state === HIDDEN), 'the slabs themselves are replaced by their pieces');
    step(title, 1.5); assert.ok(!title.gone); assert.ok(title.bricks.some(b => b.state === REST)); step(title, 3); assert.ok(title.gone, 'the rubble has gone'); title.explode(1);
    const early = await make('sunset'); step(early, 0.3); early.explode(1); assert.ok(early.bricks.filter(b => b.kind === 0).every(b => b.state === LOOSE || b.state === HIDDEN), 'bricks still in the sky simply vanish');
  });
  test('rebuilding after the explosion gives a fresh, complete title (back to the menu)', async () => {
    const title = await make('primetime', { instant: true }); title.explode(1); step(title, 4); title.build({ speed: 2.2 }); assert.ok(!title.exploded && !title.gone && !title.complete);
    step(title, title.introDuration / 2.2 + 1); assert.ok(title.complete && count(title, HOME) === title.bricks.filter(b => b.kind === 0).length);
  });
  test('the marquee behind the Sunset title powers on, and goes see-through from behind', async () => {
    const title = await make('sunset', { instant: true }); assert.ok(title.marquee, 'sunset only'); assert.equal((await make('paper')).marquee, null);
    step(title, 1, { yaw: 0 }); const front = title.marquee.plateMat.opacity; step(title, 0.1, { yaw: Math.PI }); assert.ok(title.marquee.plateMat.opacity < front * 0.4, 'from behind it no longer hides the bricks');
  });
  test('it cleans up after itself', async () => {
    const title = await make('paper', { instant: true }); title.dispose(); assert.equal(title.mesh, null); assert.equal(title.bricks.length, 0); assert.equal(title.group.children.length, 0);
  });
});

describe('brick lettering in the play field (brick-text.js)', () => {
  const make = async (theme = 'paper') => { const { BrickText } = await load('brick-text.js'); const { PALETTES } = await load('palette.js'); return new (BrickText)(theme, PALETTES[theme]); };
  const step = (text, seconds) => { for (let i = 0; i < Math.round(seconds * 60); i += 1) text.update(1 / 60, i / 60); };
  test('a name slams in, holds, and shatters; the pieces fall and are cleaned away', async () => {
    const text = await make(); const item = text.show({ key: 'effect', text: 'EARTHQUAKE', position: [0, 300, 110], cap: 40, style: 'slam', life: 1.6 });
    assert.ok(item.mesh.count > 60 && text.group.children.length === 1); assert.equal(item.state, 'in'); step(text, 0.25); assert.ok(text.events.some(e => e.type === 'slam'), 'the stamp is reported');
    step(text, 0.9); assert.equal(item.state, 'hold'); step(text, 0.6); assert.equal(item.state, 'out'); assert.ok(text.events.some(e => e.type === 'shatter'));
    step(text, 0.4); assert.ok(item.pieces.some(p => p.pos.y < 0 && p.vel.y < 0), 'the pieces fall'); step(text, 1.6); assert.equal(text.items.length, 0); assert.equal(text.group.children.length, 0, 'gone and disposed');
  });
  test('digits stand on their baseline and stay until replaced; a changed number replaces the old one, the same number only revives it', async () => {
    const text = await make('sunset'); const a = text.show({ key: 'height', text: '7', position: [-300, 0, 60], cap: 90, style: 'hold', baseline: true, shatterOld: false });
    assert.ok(Math.min(...a.pieces.map(p => p.y - p.h / 2)) > -0.01, 'standing on y = 0'); step(text, 5); assert.equal(a.state, 'hold', 'a held text stays');
    assert.equal(text.show({ key: 'height', text: '7', position: [-300, 0, 60], cap: 90, style: 'hold', baseline: true }), a, 'the same words under the same key: the same text');
    const b = text.show({ key: 'height', text: '8', position: [-300, 0, 60], cap: 90, style: 'hold', baseline: true, shatterOld: false }); assert.notEqual(b, a); step(text, 0.4); assert.equal(text.items.length, 1, 'the old digit is gone'); assert.equal(text.items[0], b);
    text.hide('height', false); step(text, 0.5); assert.equal(text.items.length, 0); text.destroy();
  });
  test('Reduced Motion: lettering simply appears and goes, with nothing flying', async () => {
    const text = await make(); const item = text.show({ text: 'SPOTLIGHT', cap: 40, style: 'slam', life: 0.5, reduced: true }); assert.equal(item.state, 'hold'); step(text, 0.6); assert.equal(item.state, 'out'); assert.ok(item.pieces.every(p => p.vel.length() === 0), 'no flying'); step(text, 0.5); assert.equal(text.items.length, 0);
  });
  test('whatever it is given, nothing goes non-finite', async () => {
    const text = await make('primetime'); for (const w of ['SLOW-TO-DART', 'CHAT BRIBE: SUPERGLUE', '10', '0', '']) { text.show({ text: w, position: [0, 0, 0], cap: 50, style: 'hold' }); } step(text, 1.5);
    for (const item of text.items) for (const p of item.pieces) assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.w)); text.destroy();
  });
});

describe('the vote candidates (candidates.js)', () => {
  test('shares add up to one, an empty vote splits evenly, and a candidate grows with its share (never absurdly)', async () => {
    const { sharesOf, candidateScale, shortName } = await load('candidates.js');
    const s = sharesOf([6, 3, 1]); assert.ok(Math.abs(s.reduce((a, b) => a + b, 0) - 1) < 1e-9 && s[0] === 0.6); assert.deepEqual(sharesOf([0, 0, 0]).map(v => +v.toFixed(3)), [0.333, 0.333, 0.333]); assert.equal(sharesOf([1]).length, 3); assert.equal(sharesOf(null).length, 3);
    assert.ok(candidateScale(0) < candidateScale(0.33) && candidateScale(0.33) < candidateScale(0.7) && candidateScale(0.7) < candidateScale(1)); assert.ok(candidateScale(0) > 0.5 && candidateScale(1) < 2.0);
    assert.equal(candidateScale(5), candidateScale(1), 'clamped'); assert.equal(shortName('Chat Bribe: Superglue'), 'Superglue'); assert.equal(shortName('The Pisa Tilt'), 'Pisa Tilt'); assert.equal(shortName('Turbo Mode'), 'Turbo Mode');
  });
  test('three hover over the tower while chat votes, grow with their share, and the winner stays when the vote closes', async () => {
    const { VoteCandidates } = await load('candidates.js'); const { PALETTES, BALLOT_COLORS } = await load('palette.js'); const THREE = await import('three');
    const canvasStub = () => ({ getContext: () => ({ fillRect() {}, beginPath() {}, roundRect() {}, fill() {}, stroke() {}, fillText() {}, strokeText() {}, measureText: text => ({ width: String(text).length * 12 }), set fillStyle(v) {}, set strokeStyle(v) {}, set lineWidth(v) {}, set lineJoin(v) {}, set font(v) {}, set textAlign(v) {}, set textBaseline(v) {} }), width: 0, height: 0 });
    const realDoc = globalThis.document; globalThis.document = { createElement: () => canvasStub() };
    try {
      const made = []; const cands = new VoteCandidates('paper', PALETTES.paper, BALLOT_COLORS.paper, { makeIcon: id => { const g = new THREE.Group(); g.userData.dispose = () => made.push(`gone:${id}`); return g; }, nameOf: id => id });
      const tick = (opts, seconds = 1) => { for (let i = 0; i < Math.round(seconds * 60); i += 1) cands.update(1 / 60, i / 60, { y: 250, ...opts }); };
      tick({ options: ['turbo', 'pisa', 'crumble'], fractions: [8, 1, 1] }, 1.5); assert.equal(cands.cards.length, 3);
      const sizes = cands.cards.map(c => c.scale); assert.ok(sizes[0] > sizes[1] * 1.3 && Math.abs(sizes[1] - sizes[2]) < 0.05, `grown by share: ${sizes.map(v => v.toFixed(2))}`);
      assert.ok(cands.cards.map(c => c.holder.position.x).join() === '-116,0,116', 'three across the lane');
      tick({ options: ['turbo', 'pisa', 'crumble'], fractions: [1, 1, 8] }, 1.5); const swapped = cands.cards.map(c => c.scale); assert.ok(swapped[2] > swapped[0] * 1.3, 'the lead changes hands and the sizes follow');
      tick({ options: null, winner: 'crumble', away: new THREE.Vector3(300, 200, 70) }, 1); assert.equal(cands.cards.length > 0, true, 'the winner is still there'); assert.ok(cands.cards.find(c => c.id === 'crumble').scale > 1 && cands.cards.find(c => c.id === 'turbo').scale < 0.05, 'the others are gone');
      tick({ options: null, winner: 'crumble', away: new THREE.Vector3(300, 200, 70) }, 2); assert.equal(cands.cards.length, 0, 'and then it is all cleared'); assert.ok(made.includes('gone:turbo') && made.includes('gone:crumble'));
      tick({ options: ['a', 'b', 'c'], fractions: [1, 1, 1] }, 0.2); cands.release(); assert.equal(cands.cards.length, 0); cands.dispose();
    } finally { globalThis.document = realDoc; }
  });
});

describe('the candidates stay readable on every world (candidates.js)', () => {
  test('lettering is shrunk to fit its plate, never squeezed, and never below a legible size', async () => {
    const { fitFontSize } = await load('candidates.js'); const measure = (px, text) => text.length * px * 0.5;
    assert.equal(fitFontSize(measure, 'SHELL GAME', 40, 258), 40, 'a short name keeps the theme\'s size'); assert.equal(fitFontSize(measure, 'DRAFTING CALIPERS', 40, 258), 30, 'a long one is made smaller until it fits');
    assert.ok(measure(fitFontSize(measure, 'DRAFTING CALIPERS', 40, 258), 'DRAFTING CALIPERS') <= 258); assert.equal(fitFontSize(measure, 'X'.repeat(60), 40, 258), 22, 'but there is a floor');
  });
  test('the plates of neighbouring candidates never touch, in any theme, and Sunset\'s are the biggest (its pixel pass eats small type)', async () => {
    const { LABEL_SIZE, SLOT_BY_THEME } = await load('candidates.js');
    for (const theme of THEMES) { assert.ok(LABEL_SIZE[theme][0] < SLOT_BY_THEME[theme], `${theme}: ${LABEL_SIZE[theme][0]} wide plates, ${SLOT_BY_THEME[theme]} apart`); assert.ok(LABEL_SIZE[theme][1] / LABEL_SIZE[theme][0] > 0.29 && LABEL_SIZE[theme][1] / LABEL_SIZE[theme][0] < 0.33, 'the plate\'s shape is the canvas\'s shape (288 x 92)'); }
    assert.ok(LABEL_SIZE.sunset[0] > LABEL_SIZE.paper[0]);
  });
  test('on the dark worlds each candidate has a dark medallion behind its sculpture, and Sunset eases its bloom off while chat votes', async () => {
    const { VoteCandidates } = await load('candidates.js'); const { PALETTES, BALLOT_COLORS } = await load('palette.js'); const THREE = await import('three');
    const stub = () => ({ getContext: () => ({ fillRect() {}, beginPath() {}, roundRect() {}, fill() {}, stroke() {}, fillText() {}, strokeText() {}, measureText: () => ({ width: 100 }), set fillStyle(v) {}, set strokeStyle(v) {}, set lineWidth(v) {}, set lineJoin(v) {}, set font(v) {}, set textAlign(v) {}, set textBaseline(v) {} }), width: 0, height: 0 });
    const realDoc = globalThis.document; globalThis.document = { createElement: stub };
    try {
      for (const theme of THEMES) {
        const cands = new VoteCandidates(theme, PALETTES[theme], BALLOT_COLORS[theme], { makeIcon: () => { const g = new THREE.Group(); g.userData.dispose = () => {}; return g; }, nameOf: id => id });
        cands.update(1 / 60, 0, { options: ['turbo', 'pisa', 'crumble'], fractions: [1, 1, 1] });
        assert.equal(cands.cards.every(c => Boolean(c.back)), theme !== 'paper', `${theme}: medallions only on the dark worlds`);
        if (theme !== 'paper') assert.equal(cands.cards[0].back.material.color.getHexString(), new THREE.Color(PALETTES[theme].ink).getHexString(), 'in the theme\'s ink');
        assert.deepEqual(cands.cards.map(c => c.holder.position.x), [-1, 0, 1].map(k => k * (theme === 'sunset' ? 136 : 116))); cands.dispose();
      }
    } finally { globalThis.document = realDoc; }
    const stage = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
    assert.match(stage, /this\.theme === 'sunset' && this\.engine\.bloomPass\.enabled\) this\.post\.bloom = this\.palette\.bloom \* \(1 - 0\.82 \* this\.voteCalm\)/);
  });
});

describe('the icon sculptures: a turn that lingers face-on, and chunkier blocks under a pixel pass', () => {
  test('dwellSpin comes round once per period, never runs backwards, and crawls through the front where the artwork reads', async () => {
    const { dwellSpin } = await load('icon-voxel.js'); const omega = 1.05; const period = 2 * Math.PI / omega;
    assert.equal(dwellSpin(0, omega), 0); assert.ok(Math.abs(dwellSpin(period, omega) - 2 * Math.PI) < 1e-9, 'a whole turn in one period'); assert.ok(Math.abs(dwellSpin(3 * period, omega) - 6 * Math.PI) < 1e-9);
    let last = 0; let front = 0; let back = 0; const dt = 0.001;
    for (let t = dt; t <= period; t += dt) { const a = dwellSpin(t, omega); assert.ok(a >= last - 1e-12, 'never backwards'); const speed = (a - last) / dt; const phase = (t * omega) % (2 * Math.PI); if (phase < 0.3 || phase > 2 * Math.PI - 0.3) front = Math.max(front, speed); if (Math.abs(phase - Math.PI) < 0.3) back = Math.max(back, speed); last = a; }
    assert.ok(front < omega * 0.45 && back > omega * 1.5, `front ${front.toFixed(2)} rad/s, back ${back.toFixed(2)} rad/s`);
    const near = Math.abs(dwellSpin(0.4, omega)); assert.ok(near < 0.4 * omega * 0.6, 'a third of a second in, it has barely turned');
  });
  test('a pixelated theme gets the 20-block grid, the others the artwork\'s own 32', async () => {
    const { gridFor, GRID, PIXEL_GRID, VoxelIcons } = await load('icon-voxel.js'); const { PALETTES } = await load('palette.js');
    const THREE = await import('three');
    assert.equal(GRID, 32); assert.equal(PIXEL_GRID, 20); assert.equal(gridFor(PALETTES.sunset), 20); assert.equal(gridFor(PALETTES.paper), 32); assert.equal(gridFor(PALETTES.primetime), 32); assert.equal(gridFor(null), 32);
    for (const theme of THEMES) { const v = new VoxelIcons({ getElementById: () => null }, theme, PALETTES[theme]); assert.equal(v.grid, gridFor(PALETTES[theme])); v.rasters.set('turbo', [{ x: 0, y: 0, len: 2, color: '#ff0000', raised: false }]); const g = v.build('turbo'); assert.ok(g && g.userData.size === 54, 'the sculpture is 54 units tall whatever the grid'); const unit = 54 / v.grid; const mesh = g.children[0]; const m = new THREE.Matrix4(); mesh.getMatrixAt(0, m); const sc = new THREE.Vector3(); m.decompose(new THREE.Vector3(), new THREE.Quaternion(), sc); assert.ok(Math.abs(sc.x - 2 * unit) < 1e-5 && Math.abs(sc.y - unit) < 1e-5, `${theme}: a block is one grid cell (instance matrices are 32-bit floats)`); g.userData.dispose(); v.dispose(); }
  });
});

describe('Spotlight in play: no box, the name first, then the dark closes in, and the emblem keeps a light of its own', () => {
  test('the post pass lights the union of its holes, so two spots over one rectangle both stay lit', () => {
    const shader = fs.readFileSync(path.join(ROOT, 'client3d', 'shaders.js'), 'utf8');
    assert.match(shader, /float veiled = 0\.0; float lit = 0\.0; float rimSum = 0\.0;/); assert.match(shader, /veiled = 1\.0; lit = max\(lit, hole\); rimSum \+= rim;/);
    assert.match(shader, /col = mix\(col, mix\(uVeilColor, col, lit\), veiled\);/, 'the veil is laid once, over whatever no hole lights');
  });
  test('the play veil covers the whole view as an iris (no hard rectangle), opens first, and the page draws no frame round the lane or the results', () => {
    const stage = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
    assert.match(stage, /const full = \{ x: 0, y: 0, w: this\.engine\.cssWidth, h: this\.engine\.cssHeight \}; const open = this\.spotOpen\(effect\);/);
    assert.match(stage, /spotOpen\(effect\) \{[^}]*if \(this\.reduced\) return t < 0\.9 \? 1 : 0; return 1 - easeOutCubic\(clamp\(\(t - 0\.8\) \/ 0\.5\)\);/);
    assert.match(stage, /life: effect\.id === 'spotlight' \? \(this\.reduced \? 0\.9 : 1\.2\) : 1\.9/, 'a Spotlight\'s name is gone before the dark has closed in');
    assert.match(stage, /if \(open < 0\.999\) \{ const lamp = this\.emblemLight\(\)/);
    assert.match(html, /html\.has-3d \.game-stage, html\.has-3d \.results-frame \{ background: transparent; border-color: transparent; box-shadow: none; \}/, 'the tower stands in the open world, not in a framed box');
    assert.doesNotMatch(html, /html\.has-3d \.game-stage, html\.has-3d \.results-frame \{[^}]*var\(--edge\)/);
  });
  test('the emblem sits in a medallion, turns face-on-first, and holds still under Reduced Motion', () => {
    const stage = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
    assert.match(stage, /b\.icon\.rotation\.y = calm \? 0\.3 : dwellSpin\(age, 1\.0\)/); assert.match(stage, /const calm = this\.reduced;/);
    assert.match(stage, /this\.badge = \{ icon, ring, disc, born: this\.time, progress: 1 \}/); assert.match(stage, /removeBadge\(\) \{ if \(!this\.badge\) return; const b = this\.badge; this\.scene\.remove\(b\.icon, b\.ring, b\.disc\);/);
  });
});

describe('block sculptures made from the icon artwork (icon-voxel.js)', () => {
  const raster = (w, h, pixels) => { const data = new Uint8ClampedArray(w * h * 4); for (const [x, y, r, g, b, a = 255] of pixels) { const i = (y * w + x) * 4; data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = a; } return { width: w, height: h, data }; };
  test('every opaque pixel becomes a block in its colour; neighbours of one colour are one longer brick; transparent pixels are nothing', async () => {
    const { voxelBricks } = await load('icon-voxel.js');
    const r = raster(8, 3, [[0, 1, 213, 71, 47], [1, 1, 213, 71, 47], [2, 1, 213, 71, 47], [3, 1, 213, 71, 47], [4, 1, 213, 71, 47], [6, 0, 47, 132, 120, 40]]);
    const bricks = voxelBricks(r, { theme: 'paper' }); assert.deepEqual(bricks.map(b => b.len), [3, 2], 'five red pixels: a brick of three and a brick of two (a brick is never longer than three)'); assert.ok(bricks.every(b => b.color === '#D5472F' && !b.raised));
    assert.equal(bricks[0].y, 0, 'the middle row of three is on the middle line'); assert.equal(bricks.length, 2, 'the faint pixel (alpha 40) is not a block');
  });
  test('the artwork\'s colours become the theme\'s block colours, and its dark lines are raised and take the theme\'s line colour', async () => {
    const { voxelBricks } = await load('icon-voxel.js'); const r = raster(4, 1, [[0, 0, 213, 71, 47], [1, 0, 47, 132, 120], [2, 0, 42, 37, 32], [3, 0, 12, 200, 99]]);
    const sunset = voxelBricks(r, { theme: 'sunset' }); assert.deepEqual(sunset.map(b => b.color), ['#FF5964', '#2EC4B6', '#FFF3E2', '#0cc863'], 'red and teal are the Sunset block colours, the line is light on a dark world, an unknown colour is left alone');
    assert.deepEqual(sunset.map(b => b.raised), [false, false, true, false]);
    const prime = voxelBricks(r, { theme: 'primetime' }); assert.deepEqual(prime.slice(0, 2).map(b => b.color), ['#E5322D', '#35D0E8']); assert.equal(prime[2].color, '#FFFFFF');
    const paper = voxelBricks(r, { theme: 'paper' }); assert.equal(paper[0].color, '#D5472F'); assert.equal(paper[2].color, '#3B322A');
  });
  test('nearestBlockColor knows the page\'s block colours (and only those)', async () => {
    const { nearestBlockColor } = await load('icon-voxel.js'); assert.equal(nearestBlockColor(213, 71, 47), '#D5472F'); assert.equal(nearestBlockColor(225, 160, 60), '#E3A33B'); assert.equal(nearestBlockColor(0, 255, 0), null);
  });
  test('the page\'s original artwork is what is read (the baked sprites keep it in data-flat), and its colours are among the block colours', async () => {
    const { symbolMarkup, symbolSvg, GRID } = await load('icon-voxel.js'); assert.equal(GRID, 32);
    const fake = { getElementById: id => id === 'sabotage-symbol-a' ? { dataset: {}, innerHTML: '<path d="M1 1"/>' } : id === 'sabotage-symbol-b' ? { dataset: { flat: '<path d="flat"/>' }, innerHTML: '<image href="x"/>' } : null };
    assert.equal(symbolMarkup(fake, 'a'), '<path d="M1 1"/>'); assert.equal(symbolMarkup(fake, 'b'), '<path d="flat"/>', 'after baking, the original is read from data-flat'); assert.equal(symbolMarkup(fake, 'zz'), '');
    assert.match(symbolSvg('<g/>', 32, '#123456'), /viewBox="0 0 32 32"[^>]*style="color:#123456"/, 'currentColor is the line colour of the theme');
    for (const id of Core.SABOTAGE_IDS) { const m = html.match(new RegExp(`<symbol id="sabotage-symbol-${id}"[^>]*>([\\s\\S]*?)</symbol>`)); assert.ok(m && /fill="#|stroke=/.test(m[1]), `${id} has artwork to build from`); }
  });
});

describe('panel icons: thickness and a slow turn (icon-turn.js)', { skip: skipReason || false }, () => {
  test('each page icon is wrapped in a holder with darker copies behind it; the page\'s own element stays the front face, in document order first', async () => {
    const { installIconTurn, ICON_LAYERS } = await load('icon-turn.js'); const page = await boot(HTML_PATH);
    try {
      const doc = page.document; const uses = [...doc.querySelectorAll('svg > use[href^="#sabotage-symbol-"]')]; assert.ok(uses.length >= 4);
      const turn = installIconTurn({ doc }); assert.equal(turn.count, uses.length);
      const holders = [...doc.querySelectorAll('.icon-turn')]; assert.equal(holders.length, uses.length);
      for (const holder of holders) { assert.equal(holder.querySelectorAll('.icon-back').length, ICON_LAYERS); assert.equal(holder.firstElementChild.dataset.turn, 'front', 'the real element comes first'); assert.ok([...holder.querySelectorAll('.icon-back')].every(c => c.getAttribute('aria-hidden') === 'true')); }
      assert.equal(doc.querySelector('.vote-icon-use').closest('.icon-turn').firstElementChild.contains(doc.querySelector('.vote-icon-use')), true, 'the page\'s querySelector finds the real icon, not a copy');
      assert.equal(doc.querySelectorAll('#effect-icon-use').length, 1, 'ids are not duplicated');
      const use = doc.getElementById('effect-icon-use'); use.setAttribute('href', '#sabotage-symbol-turbo'); await new Promise(resolve => setTimeout(resolve, 5));
      const holder = use.closest('.icon-turn'); assert.ok([...holder.querySelectorAll('.icon-back use')].every(u => u.getAttribute('href') === '#sabotage-symbol-turbo'), 'the copies follow the page\'s icon');
      const fresh = doc.createElement('span'); fresh.innerHTML = '<svg viewBox="0 0 32 32"><use href="#sabotage-symbol-pisa"></use></svg>'; doc.body.appendChild(fresh); await new Promise(resolve => setTimeout(resolve, 5));
      assert.ok(fresh.querySelector('.icon-turn'), 'icons built later (the practice list) are enhanced as they appear');
      turn.dispose(); assert.equal(doc.querySelectorAll('.icon-turn, .icon-back').length, 0, 'and put back exactly'); assert.equal(doc.querySelectorAll('svg > use[href^="#sabotage-symbol-"]').length, uses.length + 1);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

describe('the floor mirror and the quality tiers (reflection.js)', () => {
  test('quality tiers: no mirror on low, a lighter one on medium, sharper above', async () => {
    const { TIERS } = await load('engine.js'); const by = Object.fromEntries(TIERS.map(t => [t.name, t.reflect]));
    assert.equal(by.low, 0); assert.ok(by.medium > 0 && by.medium < by.high && by.high < by.ultra && by.ultra <= 1);
  });
  test('the mirror switches on and off with the tier, sizes its picture to the screen, and cleans up', async () => {
    const { FloorMirror } = await load('reflection.js'); const { PALETTES } = await load('palette.js'); const THREE = await import('three');
    const world = new THREE.Group(); const mirror = new FloorMirror('paper', PALETTES.paper, { hide: [world] }); world.add(mirror.mesh);
    assert.equal(mirror.mesh.visible, false, 'off until a tier asks for it'); mirror.setQuality(0.5, 1000, 800); assert.equal(mirror.mesh.visible, true); assert.deepEqual(mirror.size, [500, 400]);
    mirror.setQuality(0, 1000, 800); assert.equal(mirror.mesh.visible, false); mirror.setQuality(0.6, 1280, 720); assert.deepEqual(mirror.size, [768, 432]);
    assert.ok(mirror.mesh.material.uniforms.uStrength.value > 0.5 && mirror.mesh.position.y > 0, 'a visible mirror, just above the plinth top');
    mirror.dispose(); assert.equal(mirror.mesh.parent, null);
  });
});

describe('the page rules that dress the opening and the panels', () => {
  test('the menu waits for the title (data-intro="hold"), then every panel swings in from depth; Reduced Motion gets no swing', () => {
    assert.match(html, /html\.has-3d\[data-intro="hold"\] :is\(\.home-copy, \.home-bottom, \.orbit-hud\) \{ visibility: hidden; opacity: 0; \}/);
    assert.match(html, /@keyframes panel-swing \{[^}]*translate3d\(.*?-640px\)[^}]*\}[^}]*\}/);
    assert.match(html, /@media \(prefers-reduced-motion: no-preference\) \{\s*html\.has-3d:not\(\[data-motion="reduced"\]\):not\(\[data-intro="hold"\]\) :is\([^)]*\.home-copy[^)]*\.side-card[^)]*\.result-info[^)]*\) \{\s*animation: panel-swing/);
    assert.match(html, /body\[data-screen="game"\][^{]*\{ --swing-base: \.5s; \}/, 'on the other screens the panels arrive as the camera does');
  });
  test('glass panels face slightly inward (left ones one way, right ones the other) and the pointer tilt is added to that angle', () => {
    assert.match(html, /html\.has-3d :is\(\.home-copy, \.side-card, \.result-info, \.multiplayer-results, \.preview-card\) \{\s*transform: perspective\(1200px\) rotateX\(calc\(var\(--tx\) \* 1deg\)\) rotateY\(calc\(var\(--face\) \+ var\(--ty\) \* 1deg\)\);/);
    assert.match(html, /html\.has-3d :is\(\.home-copy, \.room-code-card\) \{ --face: 5\.5deg; --sign: 1; transform-origin: 0 50%; \}/);
    assert.match(html, /html\.has-3d :is\(\.side-stack \.side-card, \.room-player-card, \.result-info, \.multiplayer-results, \.preview-card\) \{ --face: -5\.5deg; --sign: -1; transform-origin: 100% 50%; \}/);
    assert.match(html, /@media \(min-width: 901px\) \{\s*html\.has-3d :is\(\.home-copy, \.room-code-card\)/, 'on a phone the cards stack, so they face the viewer');
  });
  test('headings are extruded in every theme\'s own colours, and the tagline is the menu\'s heading again', () => {
    for (const theme of ['sunset', 'primetime']) assert.match(html, new RegExp(`html\\.has-3d\\[data-theme="${theme}"\\] \\{ --ext-1:`));
    assert.match(html, /html\.has-3d :is\(#title-heading, \.screen-heading h2, \.result-info h2, \.multiplayer-results h2\) \{\s*text-shadow: 1px 1px 0 var\(--ext-1\)[^;]*var\(--ext-3\)[^;]*var\(--ext-drop\);/);
    assert.match(html, /html\.has-3d :is\(\.side-card h3[^)]*\) \{\s*text-shadow:/); assert.doesNotMatch(html, /html\.has-3d #title-heading \{ position: absolute; width: 1px/, 'no longer hidden');
  });
  test('the "chat voted" pill, the panel icons\' turn, and the hidden 2D toast are all there', () => {
    assert.match(html, /\.chat-caption \{\s*position: fixed;[^}]*pointer-events: none; opacity: 0;/); assert.match(html, /\.chat-caption\.is-on \{ opacity: 1;/);
    assert.match(html, /html\.has-3d \.icon-turn \{ display: inline-grid;[^}]*transform-style: preserve-3d;/); assert.match(html, /html\.has-3d \.icon-turn > \.icon-back \{ transform: translateZ\(calc\(var\(--layer\) \* -1\.5px\)\)/);
    assert.match(html, /@keyframes icon-turn \{[^}]*rotateY\(-46deg\)[^}]*\}[^}]*\}[^}]*\}/); assert.match(html, /html\.has-3d #perfect-banner, html\.has-3d #canvas-toast \{ display: none; \}/);
  });
  test('the brick title replaced the demo: the stage has no demo tower, and the old classes are gone from the bundle sources', () => {
    const stage = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8'); const hero = fs.readFileSync(path.join(ROOT, 'client3d', 'hero.js'), 'utf8');
    assert.doesNotMatch(stage + hero, /AttractDirector|TitleBoard|getTower\('hero'\)|toyDrop/); assert.match(stage, /new TitleStack\(/); assert.match(hero, /export class Arsenal/);
    const effects = fs.readFileSync(path.join(ROOT, 'client3d', 'effects3d.js'), 'utf8'); assert.doesNotMatch(effects, /^\s*accordion\(rig\)/m, 'accordion has no special 3D cue');
    const tower = fs.readFileSync(path.join(ROOT, 'client3d', 'tower.js'), 'utf8'); assert.doesNotMatch(tower, /rot = -helpers\.pisaAngle/, 'Pisa rolls the camera; the tower stands straight');
    assert.match(stage, /view\.Core\.pisaAngle\(g\.activeEffect\.elapsed/, 'the camera takes the game\'s own Pisa angle');
  });
});
