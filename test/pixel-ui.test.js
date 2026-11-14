'use strict';
// The pixel-grid interaction feel: a snapped cursor trail, stepped hovers and fills, a wordmark that jitters, a palette wave over the vote
// sculptures, a pattern tick behind the stage, and a brick title that scatters in whole-brick steps. The logic is pure (tested here in Node);
// pixel-ui.js, title-stack.js and candidates.js are thin adapters, tested below with the real page in jsdom and with real TitleStack /
// VoteCandidates objects. It is all render / interaction layer: the rules, the protocol and the game state are untouched.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const load = name => import(path.join(ROOT, 'client3d', name));
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

describe('where the pixel feel is welcome (pixel-gate.js)', () => {
  test('menus yes, a live round no, a paused round is a menu again', async () => {
    const { isMenuContext, isPaused, MENU_SCREENS } = await load('pixel-gate.js');
    for (const screen of ['title', 'lobby', 'results']) assert.equal(isMenuContext({ screen, game: { phase: 'playing' } }), true, screen);
    assert.deepEqual([...MENU_SCREENS].sort(), ['lobby', 'results', 'title']);
    assert.equal(isMenuContext({ screen: 'game', game: { phase: 'playing', soloPaused: false } }), false, 'a live solo round');
    assert.equal(isMenuContext({ screen: 'game', game: { phase: 'collapse' } }), false, 'the tower coming down is still the round');
    assert.equal(isMenuContext({ screen: 'game', game: { devMode: true, phase: 'playing' } }), false, 'Practice is a live sandbox');
    assert.equal(isMenuContext({ screen: 'game', game: { phase: 'playing', soloPaused: true } }), true, 'paused solo');
    assert.equal(isMenuContext({ screen: 'game', game: { phase: 'playing', paused: true } }), true, 'a paused room');
    assert.equal(isMenuContext({ screen: 'game', game: null }), false);
    assert.equal(isMenuContext(null), true); assert.equal(isMenuContext({}), true, 'nothing said: the home screen');
    assert.equal(isPaused(null), false); assert.equal(isPaused({ soloPaused: true }), true); assert.equal(isPaused({ paused: true }), true);
  });
});

describe('the snapped cursor trail (pixel-trail.js)', () => {
  const make = async (opts) => { const m = await load('pixel-trail.js'); return { ...m, trail: new m.TrailModel(opts) }; };

  test('the pointer snaps to a 16 px grid, and a second move inside the same cell drops nothing', async () => {
    const { trail, snapCell, CELL } = await make();
    assert.equal(CELL, 16); assert.equal(snapCell(0), 0); assert.equal(snapCell(15.99), 0); assert.equal(snapCell(16), 1); assert.equal(snapCell(-0.1), -1);
    assert.equal(trail.push(20, 40, 0), true); assert.equal(trail.push(31.9, 47.9, 5), false, 'same cell (1, 2)'); assert.equal(trail.cells.length, 1);
    assert.equal(trail.push(32, 40, 10), true, 'the next cell over'); assert.equal(trail.push(20, 40, 15), true, 'back to an earlier cell is not a consecutive duplicate');
    assert.equal(trail.cells.length, 3); assert.deepEqual(trail.cells.map(c => [c.cx, c.cy]), [[1, 2], [2, 2], [1, 2]]);
    assert.equal(trail.push(NaN, 3, 20), false); assert.equal(trail.push(3, Infinity, 20), false); assert.equal(trail.cells.length, 3);
  });

  test('a square is 16 x 16, then 8 x 8 (+4), then 4 x 4 (+6), each for 140 ms, always centred in its cell, then gone at 420 ms', async () => {
    const { trail, stepAt, CELL, LIFE_MS } = await make(); assert.equal(LIFE_MS, 420);
    trail.push(48, 32, 1000); // cell (3, 2)
    const at = age => trail.rects(1000 + age);
    for (const [age, size, inset] of [[0, 16, 0], [139, 16, 0], [140, 8, 4], [279, 8, 4], [280, 4, 6], [419, 4, 6]]) {
      const r = at(age); assert.equal(r.length, 1, `alive at ${age} ms`);
      assert.deepEqual([r[0].w, r[0].h, r[0].x, r[0].y], [size, size, 3 * CELL + inset, 2 * CELL + inset], `${age} ms`);
      assert.equal(inset * 2 + size, CELL, 'centred in the cell');
    }
    assert.equal(at(420).length, 0, 'gone'); assert.equal(trail.alive(1419), true); assert.equal(trail.alive(1420), false); assert.equal(stepAt(420), null); assert.equal(stepAt(-5).size, 16);
    for (const age of [0, 70, 140, 210, 280, 350]) for (const r of at(age)) for (const v of [r.x, r.y, r.w, r.h]) assert.ok(Number.isInteger(v), 'whole pixels only');
    // stepped, never eased: only three sizes exist, whatever the age
    const sizes = new Set(); for (let age = 0; age < 420; age += 7) sizes.add(at(age)[0].w); assert.deepEqual([...sizes].sort((a, b) => b - a), [16, 8, 4]);
  });

  test('at most 14 squares are alive at once; the oldest goes first; dead ones do not count against the cap', async () => {
    const { trail, MAX_CELLS } = await make(); assert.equal(MAX_CELLS, 14);
    for (let i = 0; i < 40; i += 1) trail.push(i * 16, 0, i); assert.equal(trail.cells.length, 14);
    assert.deepEqual(trail.cells.map(c => c.cx), Array.from({ length: 14 }, (_, i) => 26 + i), 'the newest 14');
    const late = await make(); for (let i = 0; i < 14; i += 1) late.trail.push(i * 16, 0, 0); late.trail.push(500, 0, 1000);
    assert.equal(late.trail.cells.length, 1, 'the 14 before had all expired');
  });

  test('the colours cycle through the six block colours that are not cream, in the theme the pointer was in when each square dropped', async () => {
    const { trail, TRAIL_BLOCKS } = await make(); const { BLOCK_COLOR_MAPS } = await load('palette.js');
    assert.equal(TRAIL_BLOCKS.length, 6); assert.ok(!TRAIL_BLOCKS.some(c => /^#F[47][EF]/i.test(c)), 'no cream');
    for (let i = 0; i < 7; i += 1) trail.push(i * 16, 0, i);
    assert.deepEqual(trail.cells.map(c => c.color), [...TRAIL_BLOCKS, TRAIL_BLOCKS[0]], 'Paper: the colours as they are, then round again');
    const sunset = await make(); for (let i = 0; i < 6; i += 1) sunset.trail.push(i * 16, 0, i, 'sunset');
    assert.deepEqual(sunset.trail.cells.map(c => c.color), TRAIL_BLOCKS.map(c => BLOCK_COLOR_MAPS.sunset[c]), 'Sunset mapping');
    const switched = await make(); switched.trail.push(0, 0, 0, 'paper'); switched.trail.push(16, 0, 1, 'primetime'); switched.trail.push(32, 0, 2, 'nonsense');
    assert.deepEqual(switched.trail.cells.map(c => c.color), [TRAIL_BLOCKS[0], BLOCK_COLOR_MAPS.primetime[TRAIL_BLOCKS[1]], TRAIL_BLOCKS[2]], 'a theme switch recolours the next squares; a squares keeps the colour it was dropped in; an unknown theme is Paper');
  });

  test('rects come oldest first, and clear() forgets the last cell too', async () => {
    const { trail } = await make(); trail.push(0, 0, 0); trail.push(16, 0, 50); trail.push(32, 0, 100);
    assert.deepEqual(trail.rects(100).map(r => r.x), [0, 16, 32], 'left to right here, because the pointer went that way'); assert.deepEqual(trail.rects(100).map(r => r.w), [16, 16, 16]);
    assert.deepEqual(trail.rects(150).map(r => [r.x, r.w]), [[4, 8], [16, 16], [32, 16]], 'the oldest has shrunk a step, the newer two have not'); assert.equal(trail.rects(150).length, 3);
    trail.clear(); assert.equal(trail.cells.length, 0); assert.equal(trail.push(0, 0, 200), true, 'the same cell as before the clear is new again');
  });
});

describe('contrast (pixel-contrast.js)', () => {
  test('parses what the page and the browser hand over', async () => {
    const { parseColor } = await load('pixel-contrast.js');
    assert.deepEqual(parseColor('#2F8478'), [47, 132, 120]); assert.deepEqual(parseColor('#fff'), [255, 255, 255]); assert.deepEqual(parseColor('#2F8478cc'), [47, 132, 120]);
    assert.deepEqual(parseColor('rgb(213, 71, 47)'), [213, 71, 47]); assert.deepEqual(parseColor('rgba(213,71,47,0.5)'), [213, 71, 47]); assert.deepEqual(parseColor('rgb(213 71 47 / 50%)'), [213, 71, 47]);
    assert.equal(parseColor('teal'), null); assert.equal(parseColor(''), null); assert.equal(parseColor(null), null);
  });
  test('black on white is 21:1; the ratio is symmetric; readableOn picks the better of the two and falls back to black or white below AA', async () => {
    const { contrastRatio, readableOn, AA } = await load('pixel-contrast.js');
    assert.ok(near(contrastRatio('#000', '#fff'), 21, 1e-6)); assert.ok(near(contrastRatio('#2F8478', '#fff'), contrastRatio('#fff', '#2F8478'))); assert.equal(AA, 4.5);
    assert.equal(readableOn('#E3A33B', '#F4EDDF', '#2A2520'), '#2A2520', 'amber wants the dark ink'); assert.equal(readableOn('#0A1A55', '#FFFFFF', '#061238'), '#FFFFFF', 'navy wants the light');
    assert.equal(readableOn('#2F8478', '#F4EDDF', '#2A2520'), '#000000', 'Paper teal: neither text colour reaches AA, black does');
    for (let i = 0; i < 400; i += 1) { const bg = '#' + Math.floor(((i * 2654435761) >>> 0) % 0xffffff).toString(16).padStart(6, '0'); const pick = readableOn(bg, '#F4EDDF', '#2A2520'); assert.ok(contrastRatio(bg, pick) >= AA, `${bg} -> ${pick}`); }
  });
});

describe('the brick title scatters in whole steps (brick-scatter.js)', () => {
  test('the numbers of the brief: 3 brick widths, 1.5 cells, the 0.12 / 0.8 spring, 30 Hz', async () => {
    const { SCATTER } = await load('brick-scatter.js');
    assert.deepEqual({ ...SCATTER }, { radiusBricks: 3, maxCells: 1.5, stiffness: 0.12, damping: 0.8, hz: 30, rest: 0.04 });
  });
  test('a brick is pushed straight away from the pointer, hardest right under it, not at all beyond the radius', async () => {
    const { scatterTarget } = await load('brick-scatter.js'); const out = { x: 0, y: 0 };
    scatterTarget(30, 0, 60, 1.5, out); assert.ok(near(out.x, 0.75) && near(out.y, 0), 'half way out: half the push, to the right');
    scatterTarget(0, -20, 60, 1.5, out); assert.ok(near(out.x, 0) && near(out.y, -1), 'below the pointer: pushed down');
    scatterTarget(30, 40, 100, 1.5, out); assert.ok(near(Math.hypot(out.x, out.y), 0.75) && near(out.x / out.y, 30 / 40), 'radial: along the line from the pointer');
    scatterTarget(60, 0, 60, 1.5, out); assert.deepEqual([out.x, out.y], [0, 0], 'exactly at the radius: nothing'); scatterTarget(500, 500, 60, 1.5, out); assert.deepEqual([out.x, out.y], [0, 0]);
    scatterTarget(0, 0, 60, 1.5, out, 3); assert.ok(near(Math.hypot(out.x, out.y), 1.5), 'under the pointer: the strongest push, in a direction of its own');
    const a = scatterTarget(0, 0, 60, 1.5, {}, 1); const b = scatterTarget(0, 0, 60, 1.5, {}, 2); assert.notDeepEqual(a, b, 'neighbours do not all go the same way');
    scatterTarget(1, 1, 0, 1.5, out); assert.deepEqual([out.x, out.y], [0, 0], 'no radius, no push');
    let prev = Infinity; for (let d = 0; d < 60; d += 3) { scatterTarget(d, 0, 60, 1.5, out); assert.ok(out.x <= prev + 1e-12); prev = out.x; }
  });
  test('the spring is exactly v = (v + (target - x) * 0.12) * 0.8, x += v: it reaches out, overshoots a little and settles on the target', async () => {
    const { springStep } = await load('brick-scatter.js'); const s = { x: 0, y: 0, vx: 0, vy: 0 };
    springStep(s, 1.5, -1); assert.ok(near(s.vx, 1.5 * 0.12 * 0.8) && near(s.x, 0.144) && near(s.vy, -0.096) && near(s.y, -0.096));
    let peak = 0; for (let i = 0; i < 200; i += 1) { springStep(s, 1.5, -1); peak = Math.max(peak, s.x); }
    assert.ok(near(s.x, 1.5, 1e-6) && near(s.y, -1, 1e-6) && Math.abs(s.vx) < 1e-6, 'settled on the target'); assert.ok(peak > 1.5 && peak < 2.1, `the spring of the brief is underdamped: it bounces out past the target by about 30 % (${peak.toFixed(3)})`);
    const home = { x: 1.4, y: -1.1, vx: 0, vy: 0 }; for (let i = 0; i < 80; i += 1) springStep(home, 0, 0); assert.ok(Math.abs(home.x) < 0.04 && Math.abs(home.y) < 0.04, 'springs back to its slot within about 2.5 s at 30 Hz');
  });
  test('what is drawn is whole cells, rounded away from zero, and a brick at rest falls asleep', async () => {
    const { quantize, asleep } = await load('brick-scatter.js');
    assert.deepEqual([0, 0.49, -0.49, 0.5, -0.5, 1.5, -1.5, 2.4, -2.6].map(quantize), [0, 0, 0, 1, -1, 2, -2, 2, -3]); assert.ok(Object.is(quantize(-0.2), 0), 'never -0');
    assert.equal(asleep({ x: 0.01, y: -0.02, vx: 0.01, vy: 0 }), true); assert.equal(asleep({ x: 0.5, y: 0, vx: 0, vy: 0 }), false); assert.equal(asleep({ x: 0, y: 0, vx: 0.2, vy: 0 }), false);
    assert.equal(asleep({ x: 0, y: 0, vx: 0, vy: 0 }, 0.3, 0), false, 'still being pushed: awake');
  });
  test('the fixed clock runs 30 ticks a second whatever the frame rate, and never a burst after a stall', async () => {
    const { FixedTick } = await load('brick-scatter.js');
    for (const fps of [30, 60, 120, 144, 240]) { const c = new FixedTick(30); let n = 0; for (let i = 0; i < fps * 2; i += 1) n += c.advance(1 / fps); assert.ok(Math.abs(n - 60) <= 1, `${fps} fps: ${n} ticks in 2 s`); }
    const c = new FixedTick(30); assert.equal(c.advance(0), 0); assert.equal(c.advance(-1), 0); assert.equal(c.advance(NaN), 0); assert.equal(c.advance(10), 3, 'a 10 s stall is three ticks, not three hundred'); assert.equal(c.advance(1 / 60), 0);
  });
});

describe('the diagonal palette wave (palette-wave.js)', () => {
  // a 4 x 3 sculpture: teal x8, amber x3, a cream pixel, and a row of raised ink that must never change
  const bricks = () => {
    const out = []; const at = (x, y, color, raised = false) => out.push({ x, y, len: 1, color, raised });
    for (let x = 0; x < 4; x += 1) at(x, 2, x < 3 ? '#2F8478' : '#E3A33B'); for (let x = 0; x < 4; x += 1) at(x, 1, '#2F8478'); at(0, 0, '#E3A33B'); at(1, 0, '#F4EDDF'); at(2, 0, '#2F8478'); at(3, 0, '#E3A33B');
    at(1, 1.5, '#170B33', true); at(2, 1.5, '#2F8478', true); /* an ink line that happens to be a fill's colour must still never swap */ return out;
  };
  test('the two most common fill colours trade places; ink lines are not counted, and one colour alone has nothing to trade', async () => {
    const { colorCounts, swapPair } = await load('palette-wave.js'); const b = bricks();
    assert.deepEqual(colorCounts(b), [['#2F8478', 8], ['#E3A33B', 3], ['#F4EDDF', 1]]); assert.deepEqual(swapPair(b), ['#2F8478', '#E3A33B']);
    assert.equal(swapPair([{ x: 0, y: 0, color: '#fff', raised: false }, { x: 1, y: 0, color: '#000', raised: true }]), null);
    const tie = swapPair([{ x: 0, y: 0, color: '#BB0000' }, { x: 1, y: 0, color: '#AA0000' }, { x: 2, y: 0, color: '#CC0000' }]); assert.deepEqual(tie, ['#AA0000', '#BB0000'], 'ties break by name: deterministic');
  });
  test('each brick swaps at (x + y) / maxDiag * 360 ms from the top-left corner; the way back runs from the far corner', async () => {
    const { diagonalFractions, waveDelays, WAVE_S } = await load('palette-wave.js'); const b = bricks(); assert.equal(WAVE_S, 0.36);
    const f = diagonalFractions(b); const top = b.findIndex(c => c.x === 0 && c.y === 2); const bottomRight = b.findIndex(c => c.x === 3 && c.y === 0);
    assert.equal(f[top], 0, 'top-left first'); assert.equal(f[bottomRight], 1, 'bottom-right last'); assert.ok(f.every(v => v >= 0 && v <= 1));
    const mid = b.findIndex(c => c.x === 1 && c.y === 1); assert.ok(near(f[mid], (1 + 1) / 5, 1e-6), 'x from the left plus y from the top, over the longest diagonal (3 + 2)');
    const d = waveDelays(b); assert.ok(near(d[top], 0) && near(d[bottomRight], 0.36, 1e-6)); const r = waveDelays(b, 0.36, true); assert.ok(near(r[top], 0.36, 1e-6) && near(r[bottomRight], 0));
    for (let i = 0; i < b.length; i += 1) for (let j = 0; j < b.length; j += 1) if ((b[i].x - b[j].x) + (b[j].y - b[i].y) > 0) assert.ok(d[i] >= d[j] - 1e-9, 'further along the diagonal never swaps earlier');
    assert.equal(diagonalFractions([]).length, 0); assert.deepEqual([...diagonalFractions([{ x: 5, y: 5 }])], [0]);
  });
  test('hovering sweeps the swap across the sculpture, leaving sweeps it back, the ink never moves, and an interrupted wave never jumps', async () => {
    const { PaletteWave } = await load('palette-wave.js'); const b = bricks(); const w = new PaletteWave(b); const teal = '#2F8478'; const amber = '#E3A33B';
    const shown = () => b.map((_, i) => w.colorOf(i)); const original = b.map(c => c.color);
    assert.deepEqual(shown(), original); assert.equal(w.update(0), false, 'nothing happens until the pointer arrives');
    assert.equal(w.setHover(true, 10), true); assert.equal(w.setHover(true, 10.1), false, 'already hovering');
    w.update(10); let changed = shown().filter((c, i) => c !== original[i]).length; assert.ok(changed >= 1, 'the top-left brick swaps at once');
    w.update(10.18); const half = shown().filter((c, i) => c !== original[i]).length; assert.ok(half > changed && half < b.filter((_, i) => w.swappable[i]).length, `half way (${half})`);
    w.update(10.4); b.forEach((c, i) => { if (c.raised) assert.equal(w.colorOf(i), c.color, 'ink lines stay'); else if (c.color === teal) assert.equal(w.colorOf(i), amber); else if (c.color === amber) assert.equal(w.colorOf(i), teal); else assert.equal(w.colorOf(i), c.color, 'other colours stay'); });
    assert.equal(w.active, false, 'done after 360 ms');
    // leave half way through the swap: bricks that had not swapped yet stay as they are, the ones that had swap back from the far corner
    const w2 = new PaletteWave(b); w2.setHover(true, 0); w2.update(0.18); const mid = w2.state.slice(); w2.setHover(false, 0.18); w2.update(0.18);
    assert.deepEqual([...w2.state], [...mid].map((v, i) => (w2.swappable[i] && (1 - w2.fraction[i]) * 0.36 <= 0 ? 0 : v)), 'no brick jumps at the moment of the turn-around');
    w2.update(0.18 + 0.4); assert.deepEqual(b.map((_, i) => w2.colorOf(i)), original, 'everything is back');
    const imm = new PaletteWave(b); assert.equal(imm.setHover(true, 0, { immediate: true }), true); assert.equal(imm.active, false); assert.equal(imm.colorOf(b.findIndex(c => c.color === teal && !c.raised)), amber, 'Reduced Motion: swapped at once');
    imm.setHover(false, 1, { immediate: true }); assert.deepEqual(b.map((_, i) => imm.colorOf(i)), original);
    const one = new PaletteWave([{ x: 0, y: 0, color: '#fff', raised: false }]); assert.equal(one.setHover(true, 0), false, 'nothing to trade: nothing to do'); assert.equal(one.colorOf(0), '#fff');
  });
});

describe('the wordmark jitter (pixel-wordmark.js)', () => {
  test('a coarse grid reads the glyphs: a cell is filled when at least 35 % of it is covered, edge cells count what is inside the picture', async () => {
    const { coarseRects, cellFor } = await load('pixel-wordmark.js');
    const w = 10; const h = 6; const data = new Uint8ClampedArray(w * h * 4); const paint = (x0, y0, x1, y1) => { for (let y = y0; y < y1; y += 1) for (let x = x0; x < x1; x += 1) data[(y * w + x) * 4 + 3] = 255; };
    paint(0, 0, 2, 2); paint(4, 2, 6, 4); paint(8, 4, 10, 6); data[(5 * w + 0) * 4 + 3] = 255; // one stray pixel: 25 % of a 2 x 2 cell
    const g = coarseRects(data, w, h, 2); assert.deepEqual([g.cols, g.rows], [5, 3]); assert.deepEqual(g.rects, [{ gx: 0, gy: 0 }, { gx: 2, gy: 1 }, { gx: 4, gy: 2 }]);
    const edge = coarseRects(new Uint8ClampedArray(5 * 5 * 4).map((_, i) => (i % 4 === 3 ? 255 : 0)), 5, 5, 2); assert.equal(edge.rects.length, 9, 'a 5 x 5 picture is 3 x 3 cells, the thin ones included');
    assert.equal(cellFor(18), 2); assert.equal(cellFor(13), 2); assert.equal(cellFor(22), 2); assert.equal(cellFor(40), 4); assert.equal(cellFor(4), 2); assert.equal(cellFor('x'), 2);
  });
  test('three ticks 60 ms apart: two scatter every rect by one cell, the third puts every one back exactly', async () => {
    const { jitterOffsets, JITTER } = await load('pixel-wordmark.js'); assert.deepEqual({ ...JITTER }, { ticks: 3, intervalMs: 60 });
    let seed = 7; const rng = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (const tick of [1, 2]) { const { dx, dy } = jitterOffsets(tick, 500, rng); for (let i = 0; i < 500; i += 1) { assert.ok(Math.abs(dx[i]) <= 1 && Math.abs(dy[i]) <= 1, 'one cell at most'); assert.ok(dx[i] !== 0 || dy[i] !== 0, 'every rect moves'); } assert.ok(new Set([...dx].map((v, i) => `${v},${dy[i]}`)).size === 8, 'all eight directions turn up'); }
    const last = jitterOffsets(3, 500, rng); assert.ok([...last.dx, ...last.dy].every(v => v === 0), 'snapped back exactly'); assert.equal(jitterOffsets(2, 0, rng).dx.length, 0);
  });
  test('a text shadow is read as its offset and colour (the hard shadows of Sunset and Prime Time); soft or missing ones are not invented', async () => {
    const { parseShadow } = await load('pixel-wordmark.js');
    assert.deepEqual(parseShadow('rgb(255, 89, 100) 2px 2px 0px'), { x: 2, y: 2, color: 'rgb(255, 89, 100)' }); assert.deepEqual(parseShadow('2px 2px 0 #061238'), { x: 2, y: 2, color: '#061238' });
    assert.deepEqual(parseShadow('rgba(0, 0, 0, 0.5) -1px 3px 4px, red 1px 1px'), { x: -1, y: 3, color: 'rgba(0, 0, 0, 0.5)' }, 'the first shadow'); assert.equal(parseShadow('none'), null); assert.equal(parseShadow(''), null); assert.equal(parseShadow(undefined), null);
  });
});

describe('the backdrop tick (pattern-tick.js)', () => {
  test('three jumps, the first at once and the others 85 ms apart; they stay (the pattern just carries on from there)', async () => {
    const { PatternTick, TICK } = await load('pattern-tick.js'); assert.deepEqual({ ...TICK }, { jumps: 3, intervalMs: 85 }); const t = new PatternTick();
    assert.equal(t.jumps(0), 0); assert.equal(t.trigger(10), true); assert.equal(t.trigger(10.05), false, 'one run at a time');
    const at = ms => t.jumps(10 + ms / 1000); assert.deepEqual([0, 40, 84, 85, 120, 169, 170, 254].map(at), [1, 1, 1, 2, 2, 2, 3, 3]);
    assert.equal(at(255), 3); assert.equal(t.running, false); assert.equal(t.trigger(11), true, 'free again'); assert.equal(t.jumps(11), 4); assert.equal(t.jumps(11.2), 6); assert.equal(t.jumps(20), 6);
  });
  test('Paper has nothing printed behind the stage; the others step by about a third of their pattern', async () => {
    const { TICK_STEP } = await load('pattern-tick.js'); assert.equal(TICK_STEP.paper, 0); assert.ok(TICK_STEP.sunset > 0 && TICK_STEP.primetime > 0);
    assert.ok(near(TICK_STEP.sunset * 70 / 90, 1 / 3, 0.02), 'Sunset: the grid scrolls 70 units a second over 90-unit cells'); assert.ok(near(TICK_STEP.primetime * 0.12, Math.PI / 3, 0.02), 'Prime Time: the rays turn 0.12 rad a second over a period of pi');
  });
});

// ---------------------------------------------------------------------------------------------------------------------------------
// The adapter in the real page (jsdom). The page's clock is manual: time is advanced by hand, in step with the animation frames.
let boot = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { boot = null; }
const fire = (page, target, type, init = {}, pointerType = 'mouse') => {
  const event = new page.window.MouseEvent(type, { bubbles: true, cancelable: true, ...init });
  if (pointerType) Object.defineProperty(event, 'pointerType', { value: pointerType });
  target.dispatchEvent(event); return event;
};

describe('the pixel UI in the real page: the cursor trail (pixel-ui.js)', { skip: !boot && 'the jsdom harness is not available' }, () => {
  const setup = async (options = {}) => {
    const { installPixelUi } = await load('pixel-ui.js'); const page = await boot(HTML_PATH, { manualAnimationFrame: true });
    const root = page.document.documentElement; root.classList.add('has-3d');
    let t = 0; let frames = 0; const raf = page.window.requestAnimationFrame; page.window.requestAnimationFrame = cb => { if (cb && cb.name === 'draw') frames += 1; return raf(cb); }; // (the page's own game loop asks for frames too: count the trail's only)
    const told = { votes: [], primary: 0 };
    const pixel = installPixelUi({ doc: page.document, win: page.window, hover: true, now: () => t, hooks: { onVoteHover: i => told.votes.push(i), onPrimaryHover: () => { told.primary += 1; } }, ...options });
    const advance = ms => { for (let left = ms; left > 0; left -= 16) { const step = Math.min(16, left); t += step; page.advanceAnimation(step, 16); } };
    const move = (x, y, init = {}, target = page.document.body, pointerType = 'mouse') => fire(page, target, 'pointermove', { clientX: x, clientY: y, ...init }, pointerType);
    const px = (x, y) => Array.from(page.canvasFor(pixel.canvas).getContext('2d').getImageData(x, y, 1, 1).data);
    return { page, pixel, root, advance, move, px, told, frames: () => frames, host: view => { page.window.SabotageStackHost = { view: () => view }; } };
  };

  test('a square drops where the pointer enters a new cell, shrinks in whole steps and is gone at 420 ms, and the loop then sleeps', async () => {
    const { page, pixel, advance, move, px, frames } = await setup();
    try {
      assert.equal(pixel.canvas, null, 'nothing is made until the pointer first moves'); move(100, 100);
      const canvas = pixel.canvas; assert.ok(canvas); assert.equal(canvas.parentNode, page.document.body); assert.equal(canvas.getAttribute('aria-hidden'), 'true'); assert.equal(canvas.style.pointerEvents, 'none'); assert.ok(canvas.classList.contains('pixel-trail'));
      advance(16); const amber = [227, 163, 59, 255];
      assert.deepEqual([px(96, 96), px(104, 104), px(111, 111)], [amber, amber, amber], '16 x 16 on the cell (6, 6)'); assert.equal(px(112, 112)[3], 0); assert.equal(px(95, 100)[3], 0, 'nothing outside the cell');
      advance(140); assert.deepEqual([px(97, 97)[3], px(100, 100), px(107, 107), px(108, 108)[3]], [0, amber, amber, 0], '8 x 8, inset 4');
      advance(140); assert.deepEqual([px(101, 101)[3], px(102, 102), px(105, 105), px(106, 106)[3]], [0, amber, amber, 0], '4 x 4, inset 6');
      advance(140); assert.equal(px(104, 104)[3], 0, 'gone'); const before = frames(); advance(200); assert.equal(frames(), before, 'the loop sleeps when nothing is alive');
      move(300, 100); advance(16); assert.ok(frames() > before, 'and wakes for the next square'); assert.equal(px(296, 104)[3], 255, 'cell (18, 6) spans 288..303');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('mouse only, no button held, not over text fields or [data-no-trail], not in a live round, not under Reduced Motion (checked at the moment it happens)', async () => {
    const { page, pixel, root, move, advance, host } = await setup();
    try {
      const doc = page.document; const spawned = () => pixel.trail.cells.length; let n = 0; const at = () => { n += 1; return 40 + n * 24; };
      move(at(), 50, {}, doc.body, 'touch'); move(at(), 50, {}, doc.body, 'pen'); assert.equal(spawned(), 0, 'a finger or a pen is not a hover');
      move(at(), 50, { buttons: 1 }); move(at(), 50, { buttons: 2 }); assert.equal(spawned(), 0, 'a button held down means a turn or a drop is under way');
      const mk = (tag, attrs = {}) => { const el = doc.createElement(tag); for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); doc.body.appendChild(el); return el; };
      const wrapper = mk('div', { 'data-no-trail': '' }); const inner = doc.createElement('span'); wrapper.appendChild(inner);
      for (const target of [mk('input', { type: 'text' }), mk('input'), mk('input', { type: 'email' }), mk('textarea'), mk('select'), inner]) move(at(), 50, {}, target);
      assert.equal(spawned(), 0, 'text fields, selects and anything marked data-no-trail');
      move(at(), 50, {}, mk('input', { type: 'checkbox' })); move(at(), 50, {}, mk('button')); assert.equal(spawned(), 2, 'a checkbox and a button are not text');
      pixel.trail.clear(); host({ screen: 'game', game: { phase: 'playing', soloPaused: false } }); move(at(), 50); assert.equal(spawned(), 0, 'a live round');
      host({ screen: 'game', game: { phase: 'playing', soloPaused: true } }); move(at(), 50); assert.equal(spawned(), 1, 'paused: a menu again');
      host({ screen: 'results', game: null }); pixel.trail.clear(); move(at(), 50); assert.equal(spawned(), 1, 'results');
      root.dataset.motion = 'reduced'; pixel.trail.clear(); move(at(), 50); assert.equal(spawned(), 0, 'Reduced Motion, read now rather than at install'); assert.equal(pixel.trailActive, false);
      root.dataset.motion = 'full'; move(at(), 50); assert.equal(spawned(), 1, 'and back again, live'); assert.equal(pixel.trailActive, true);
      advance(16); root.dataset.motion = 'reduced'; advance(16); assert.equal(spawned(), 0, 'switching to Reduced Motion mid-trail wipes it at the next frame');
      assert.equal(Array.from(page.canvasFor(pixel.canvas).getContext('2d').getImageData(0, 0, 360, 100).data).filter((v, i) => i % 4 === 3 && v).length, 0, 'and the canvas with it');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('at any zoom (device pixel ratio 1.1, 1.25, 2) the squares are whole device pixels: the canvas matches the window, nothing is anti-aliased, and neighbours leave no seam', async () => {
    for (const dpr of [1.1, 1.25, 1.5, 2]) {
      const { page, pixel, move, advance, px } = await setup();
      try {
        Object.defineProperty(page.window, 'devicePixelRatio', { value: dpr, configurable: true });
        move(100, 100); move(116, 100); advance(16); const canvas = pixel.canvas; // the cells (6, 6) and (7, 6): css x 96..128, y 96..112
        assert.equal(canvas.width, Math.round(page.window.innerWidth * dpr), `dpr ${dpr}: as wide as the window in device pixels`); assert.equal(canvas.height, Math.round(page.window.innerHeight * dpr));
        const x0 = Math.round(96 * dpr); const x1 = Math.round(128 * dpr); const y0 = Math.round(96 * dpr); const y1 = Math.round(112 * dpr); const mid = Math.round(112 * dpr);
        const data = page.canvasFor(canvas).getContext('2d').getImageData(x0 - 3, y0 - 3, x1 - x0 + 6, y1 - y0 + 6).data; let lit = 0;
        for (let i = 3; i < data.length; i += 4) { assert.ok(data[i] === 0 || data[i] === 255, `dpr ${dpr}: no anti-aliased edge (alpha ${data[i]})`); if (data[i]) lit += 1; }
        assert.equal(lit, (x1 - x0) * (y1 - y0), `dpr ${dpr}: exactly the two squares, solid`);
        assert.equal(px(mid - 1, y0 + 3)[3], 255); assert.equal(px(mid, y0 + 3)[3], 255); assert.notDeepEqual(px(mid - 1, y0 + 3), px(mid, y0 + 3), 'a seam would show here: there is none, and the colours change exactly at the cell edge');
        assert.equal(px(x0 - 1, y0 + 3)[3], 0); assert.equal(px(x1, y0 + 3)[3], 0); assert.equal(px(x0 + 3, y1)[3], 0);
      } finally { page.close(); }
    }
  });

  test('a device with no hover (touch first) gets no trail at all', async () => {
    const { page, pixel, move } = await setup({ hover: false });
    try { move(100, 100); move(140, 100); assert.equal(pixel.trail.cells.length, 0); assert.equal(pixel.canvas, null); assert.equal(pixel.trailActive, false); } finally { page.close(); }
  });

  test('each square takes the colours of the theme the pointer is in when it drops', async () => {
    const { page, root, pixel, move } = await setup(); const { BLOCK_COLOR_MAPS } = await load('palette.js');
    try {
      move(40, 40); root.dataset.theme = 'sunset'; move(80, 40); root.dataset.theme = 'primetime'; move(120, 40); root.dataset.theme = 'paper'; move(160, 40);
      assert.deepEqual(pixel.trail.cells.map(c => c.color), ['#E3A33B', BLOCK_COLOR_MAPS.sunset['#2F8478'], BLOCK_COLOR_MAPS.primetime['#7FA6BD'], '#D5472F']);
    } finally { page.close(); }
  });

  test('it never takes input: every listener is passive, nothing is prevented, nothing captures the pointer', async () => {
    const { installPixelUi } = await load('pixel-ui.js'); const page = await boot(HTML_PATH, { manualAnimationFrame: true });
    try {
      const seen = []; const wrap = target => { const add = target.addEventListener.bind(target); target.addEventListener = (type, fn, options) => { seen.push([type, options]); return add(type, fn, options); }; };
      wrap(page.window); wrap(page.document); wrap(page.document.documentElement);
      let captured = 0; page.window.Element.prototype.setPointerCapture = () => { captured += 1; };
      const pixel = installPixelUi({ doc: page.document, win: page.window, hover: true, now: () => 0 });
      assert.ok(seen.length >= 7, `${seen.length} listeners`); assert.ok(seen.every(([, options]) => options && options.passive === true), `all passive: ${JSON.stringify(seen)}`);
      assert.ok(['pointermove', 'pointerover', 'focusin', 'focusout', 'pointerleave', 'resize', 'fullscreenchange'].every(type => seen.some(([t]) => t === type)));
      for (const type of ['pointermove', 'pointerover', 'pointerdown', 'pointerup']) assert.equal(fire(page, page.document.body, type, { clientX: 50, clientY: 50 }).defaultPrevented, false, type);
      fire(page, page.document.querySelector('.brand'), 'pointerover'); fire(page, page.document.getElementById('start-button'), 'pointerover');
      assert.equal(captured, 0, 'setPointerCapture is never called'); const canvas = pixel.canvas; assert.ok(!canvas || canvas.style.pointerEvents === 'none');
      assert.deepEqual(page.errors, []); pixel.dispose();
    } finally { page.close(); }
  });

  test('it is safe where there is no 2D canvas (getContext() is null): no trail, no jitter, no errors', async () => {
    const { installPixelUi } = await load('pixel-ui.js'); const page = await boot(HTML_PATH, { manualAnimationFrame: true });
    try {
      page.window.HTMLCanvasElement.prototype.getContext = () => null; page.document.documentElement.classList.add('has-3d');
      const pixel = installPixelUi({ doc: page.document, win: page.window, hover: true, now: () => 0 });
      fire(page, page.document.body, 'pointermove', { clientX: 90, clientY: 90 }); fire(page, page.document.body, 'pointermove', { clientX: 190, clientY: 90 });
      fire(page, page.document.querySelector('.brand-word'), 'pointerover');
      assert.equal(pixel.canvas, null); assert.equal(pixel.trailActive, false, 'so the stage keeps its own sparkles'); assert.equal(pixel.jittering, false); assert.equal(page.document.querySelector('.brand-pixels'), null);
      page.advanceAnimation(500, 16); pixel.dispose(); assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the overlay lives in what is on screen: the page, an open modal dialog (top layer), or the fullscreen element', async () => {
    const { page, pixel, move, root } = await setup();
    try {
      const doc = page.document; move(100, 100); assert.equal(pixel.canvas.parentNode, doc.body);
      const dialog = doc.getElementById('how-dialog'); dialog.setAttribute('open', ''); move(140, 100); assert.equal(pixel.canvas.parentNode, dialog, 'inside the modal, or it would be hidden behind it');
      dialog.removeAttribute('open'); move(180, 100); assert.equal(pixel.canvas.parentNode, doc.body, 'back on the page when it closes');
      const stage = doc.createElement('div'); doc.body.appendChild(stage); Object.defineProperty(doc, 'fullscreenElement', { configurable: true, get: () => stage });
      doc.dispatchEvent(new page.window.Event('fullscreenchange')); assert.equal(pixel.canvas.parentNode, stage, 'moved the moment fullscreen starts');
      dialog.setAttribute('open', ''); move(220, 100); assert.equal(pixel.canvas.parentNode, stage, 'fullscreen wins');
      Object.defineProperty(doc, 'fullscreenElement', { configurable: true, get: () => null }); dialog.removeAttribute('open'); doc.dispatchEvent(new page.window.Event('fullscreenchange')); assert.equal(pixel.canvas.parentNode, doc.body, 'and back when it ends');
      assert.ok(root.classList.contains('has-3d')); assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('dispose() takes it all away: the canvas, the loop, the listeners, the colours it wrote on rows, and the hover it told the stage about', async () => {
    const { page, pixel, move, advance, frames, told } = await setup();
    try {
      const doc = page.document; const list = doc.getElementById('room-player-list'); const li = doc.createElement('li'); const dot = doc.createElement('span'); dot.className = 'player-color-dot'; dot.style.backgroundColor = 'rgb(213, 71, 47)'; li.append(dot); list.append(li);
      fire(page, li, 'pointerover'); assert.equal(li.style.getPropertyValue('--row-accent'), 'rgb(213, 71, 47)');
      const option = doc.querySelector('.vote-option[data-option-index="2"]'); option.disabled = false; move(100, 100, {}, option); assert.deepEqual(told.votes, [2]);
      pixel.dispose(); assert.deepEqual(told.votes, [2, -1], 'the stage is told the pointer is gone'); assert.equal(pixel.canvas, null); assert.equal(doc.querySelector('.pixel-trail'), null);
      assert.equal(li.style.getPropertyValue('--row-accent'), ''); assert.equal(li.style.getPropertyValue('--row-fg'), ''); assert.equal(li.dataset.floodKey, undefined);
      const before = frames(); move(300, 100); move(340, 100); advance(500); assert.equal(frames(), before, 'no listeners, no loop'); assert.equal(doc.querySelector('.pixel-trail'), null); assert.deepEqual(told.votes, [2, -1]);
      pixel.dispose(); assert.deepEqual(page.errors, [], 'twice is fine');
    } finally { page.close(); }
  });
});

describe('the pixel UI in the real page: rows, the wordmark and the hooks into the stage (pixel-ui.js)', { skip: !boot && 'the jsdom harness is not available' }, () => {
  const setup = async (options = {}) => {
    const { installPixelUi } = await load('pixel-ui.js'); const page = await boot(HTML_PATH, { manualAnimationFrame: true });
    const doc = page.document; const root = doc.documentElement; root.classList.add('has-3d');
    const told = { votes: [], primary: 0 };
    // a scheduler by hand, and a text canvas that paints a known block: 80 x 10 px, i.e. 40 x 5 cells of 2 px, whatever fonts the machine has
    const sched = { fns: new Map(), n: 0, ms: 0, set(fn, ms) { this.n += 1; this.ms = ms; this.fns.set(this.n, fn); return this.n; }, clear(id) { this.fns.delete(id); }, tick() { for (const fn of [...this.fns.values()]) fn(); } };
    const pixel = installPixelUi({ doc, win: page.window, hover: true, now: () => 0, rng: (() => { let s = 11; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; })(), timers: sched, hooks: { onVoteHover: i => told.votes.push(i), onPrimaryHover: () => { told.primary += 1; } }, ...options });
    const brand = doc.querySelector('.brand'); const word = doc.querySelector('.brand-word');
    word.getBoundingClientRect = () => ({ left: 60, top: 12, width: 130, height: 18, right: 190, bottom: 30 }); brand.getBoundingClientRect = () => ({ left: 20, top: 8, width: 180, height: 26, right: 200, bottom: 34 });
    let painted = { x0: 10, x1: 90, y0: 4, y1: 14 }; let draws = 0;
    page.window.HTMLCanvasElement.prototype.getContext = function () { return { font: '', fillStyle: '', textAlign: '', textBaseline: '', measureText: () => ({ width: 100, fontBoundingBoxAscent: 14, fontBoundingBoxDescent: 4 }), fillText() { draws += 1; },
      getImageData: (x, y, w, h) => { const data = new Uint8ClampedArray(w * h * 4); for (let yy = painted.y0; yy < painted.y1; yy += 1) for (let xx = painted.x0; xx < painted.x1; xx += 1) data[(yy * w + xx) * 4 + 3] = 255; return { data }; } }; };
    return { page, doc, root, pixel, sched, told, brand, word, paint: p => { painted = p; }, draws: () => draws, over: (target, init = {}, type = 'mouse') => fire(page, target, 'pointerover', { relatedTarget: doc.body, ...init }, type) };
  };
  const svgOf = brand => brand.querySelector('svg.brand-pixels');
  const place = rect => [Number(rect.getAttribute('x')), Number(rect.getAttribute('y'))];

  test('a hovered player row learns its own colour and the text that reads on it (CSS floods it); a finger does not trigger it', async () => {
    const { page, doc, root, over } = await setup(); const { TEXT_COLORS, contrastRatio } = await load('pixel-contrast.js');
    try {
      const list = doc.getElementById('room-player-list'); const mk = color => { const li = doc.createElement('li'); const dot = doc.createElement('span'); dot.className = 'player-color-dot'; dot.style.backgroundColor = color; const name = doc.createElement('strong'); name.textContent = 'Mia'; li.append(dot, name); list.append(li); return li; };
      const rows = ['rgb(213, 71, 47)', 'rgb(47, 132, 120)', 'rgb(227, 163, 59)', 'rgb(122, 106, 166)'].map(mk);
      over(rows[0].querySelector('strong'), {}, 'touch'); assert.equal(rows[0].style.getPropertyValue('--row-accent'), '', 'touch: nothing');
      for (const row of rows) over(row.querySelector('strong'));
      assert.deepEqual(rows.map(r => r.style.getPropertyValue('--row-accent')), ['rgb(213, 71, 47)', 'rgb(47, 132, 120)', 'rgb(227, 163, 59)', 'rgb(122, 106, 166)']);
      for (const row of rows) assert.ok(contrastRatio(row.style.getPropertyValue('--row-accent'), row.style.getPropertyValue('--row-fg')) >= 4.5, 'readable on its own colour');
      assert.equal(rows[2].style.getPropertyValue('--row-fg'), TEXT_COLORS.paper.dark, 'amber takes the dark ink');
      const key = rows[1].dataset.floodKey; over(rows[1]); assert.equal(rows[1].dataset.floodKey, key, 'nothing is rewritten while nothing changed');
      root.dataset.theme = 'sunset'; over(rows[2].querySelector('strong')); assert.equal(rows[2].style.getPropertyValue('--row-fg'), TEXT_COLORS.sunset.dark, 'a theme switch is noticed the next time the pointer arrives');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the wordmark: hover swaps the text for a pixel picture of it, three ticks 60 ms apart knock every rect a cell off and then back exactly, and the real text returns', async () => {
    const { page, sched, brand, word, over, pixel } = await setup();
    try {
      const text = word.textContent; assert.equal(svgOf(brand), null);
      over(word); const svg = svgOf(brand); assert.ok(svg); assert.equal(sched.ms, 60, 'a 60 ms interval'); assert.equal(pixel.jittering, true);
      assert.equal(svg.getAttribute('aria-hidden'), 'true'); assert.equal(svg.parentNode, brand); assert.ok(brand.classList.contains('is-pixelating')); assert.equal(word.textContent, text, 'the real text (the accessible label) is never touched');
      assert.equal([...svg.querySelectorAll('rect')].length, 200, 'one rect per filled cell: 40 x 5');
      const rects = [...svg.querySelectorAll('rect')]; const cell = Number(rects[0].getAttribute('width')); assert.equal(cell, 2); assert.deepEqual([svg.getAttribute('width'), svg.getAttribute('height')], ['130', '18']);
      assert.deepEqual([svg.style.left, svg.style.top], ['40px', '4px'], 'exactly over the word'); assert.equal(svg.style.pointerEvents, 'none');
      const base = rects.map(place); assert.ok(base.every(([x, y]) => x % cell === 0 && y % cell === 0), 'on the grid');
      for (const tick of [1, 2]) {
        sched.tick(); const now = rects.map(place); assert.ok(svgOf(brand), `still showing after tick ${tick}`);
        now.forEach(([x, y], i) => { const dx = (x - base[i][0]) / cell; const dy = (y - base[i][1]) / cell; assert.ok(Math.abs(dx) <= 1 && Math.abs(dy) <= 1 && (dx !== 0 || dy !== 0), `tick ${tick}, rect ${i}: moved by (${dx}, ${dy})`); });
      }
      sched.tick(); assert.equal(svgOf(brand), null, 'the third tick ends it'); assert.equal(brand.classList.contains('is-pixelating'), false); assert.equal(pixel.jittering, false); assert.equal(sched.fns.size, 0, 'and the interval is cleared');
      assert.deepEqual(rects.map(place), base, 'snapped back exactly, to the grid cell');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('it ignores a second hover while it runs, only starts on a real entry, and moving about inside the wordmark does not restart it', async () => {
    const { page, sched, brand, word, over, doc } = await setup();
    try {
      over(word); over(word); over(brand); assert.equal(brand.querySelectorAll('svg.brand-pixels').length, 1); assert.equal(sched.n, 1, 'one interval');
      sched.tick(); over(word, { relatedTarget: brand }); assert.equal(sched.n, 1, 'moving within is not entering');
      sched.tick(); sched.tick(); assert.equal(svgOf(brand), null); over(word, { relatedTarget: brand }); assert.equal(svgOf(brand), null, 'an event from inside the brand is not an arrival');
      over(word); assert.ok(svgOf(brand), 'a real arrival plays it again'); assert.equal(sched.n, 2);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('it plays only on menu screens, only with a mouse, never under Reduced Motion (read live), and not where the word is hidden', async () => {
    const { page, root, brand, word, over, sched, doc } = await setup();
    try {
      page.window.SabotageStackHost = { view: () => ({ screen: 'game', game: { phase: 'playing' } }) }; over(word); assert.equal(svgOf(brand), null, 'a live round');
      page.window.SabotageStackHost = { view: () => ({ screen: 'game', game: { soloPaused: true } }) }; over(word, {}, 'touch'); assert.equal(svgOf(brand), null, 'a finger');
      root.dataset.motion = 'reduced'; over(word); assert.equal(svgOf(brand), null, 'Reduced Motion');
      root.dataset.motion = 'full'; word.getBoundingClientRect = () => ({ left: 0, top: 0, width: 0, height: 0 }); over(word); assert.equal(svgOf(brand), null, 'display: none on a phone');
      word.getBoundingClientRect = () => ({ left: 60, top: 12, width: 130, height: 18 }); over(word); assert.ok(svgOf(brand), 'a paused round is a menu: it plays');
      root.dataset.motion = 'reduced'; sched.tick(); sched.tick(); sched.tick(); assert.equal(svgOf(brand), null, 'it still ends cleanly');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the picture is made again when the theme changes (and keeps the text shadow of the pixel themes)', async () => {
    const { page, root, brand, word, over, sched, paint, draws, doc } = await setup();
    try {
      over(word); const first = svgOf(brand).querySelectorAll('rect').length; sched.tick(); sched.tick(); sched.tick(); const drawn = draws();
      over(word); sched.tick(); sched.tick(); sched.tick(); assert.equal(draws(), drawn, 'same theme, same word: the picture is reused');
      root.dataset.theme = 'sunset'; paint({ x0: 10, x1: 50, y0: 4, y1: 14 }); over(word); assert.ok(draws() > drawn, 'a new theme draws the word again'); assert.equal(svgOf(brand).querySelectorAll('rect').length, 100, `not the old ${first} rects: the new picture`);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the vote row under the pointer, or under the keyboard, is told to the stage (a round is live then: the wave is the one effect that is not for menus)', async () => {
    const { page, doc, told, over } = await setup(); const move = (target, init = {}, type = 'mouse') => fire(page, target, 'pointermove', { clientX: 10, clientY: 10, ...init }, type);
    try {
      const options = [...doc.querySelectorAll('.vote-option')]; options.forEach(o => { o.disabled = false; });
      page.window.SabotageStackHost = { view: () => ({ screen: 'game', game: { phase: 'playing' } }) };
      move(options[1].querySelector('.vote-name')); move(options[1]); assert.deepEqual(told.votes, [1], 'told once, on a child or the row itself');
      move(options[2]); move(doc.body); assert.deepEqual(told.votes, [1, 2, -1]);
      options[0].disabled = true; move(options[0]); assert.deepEqual(told.votes, [1, 2, -1], 'a disabled row is not hovered');
      move(options[2], {}, 'touch'); assert.deepEqual(told.votes, [1, 2, -1], 'a finger has no hover');
      move(options[0].parentNode); move(options[2]); doc.documentElement.dispatchEvent(new page.window.Event('pointerleave')); assert.deepEqual(told.votes, [1, 2, -1, 2, -1], 'leaving the window ends it');
      doc.getElementById('title-screen').classList.remove('is-active'); doc.getElementById('game-screen').classList.add('is-active'); doc.body.dataset.screen = 'game'; // (jsdom only focuses what is on screen)
      const focusVisible = (el, on) => { const real = el.matches.bind(el); el.matches = selector => (selector === ':focus-visible' ? on : real(selector)); }; const settled = told.votes.length;
      focusVisible(options[1], false); options[1].focus(); assert.equal(told.votes.length, settled, 'the focus a click leaves on the row is not "on" it'); options[1].blur(); assert.equal(told.votes.length, settled);
      focusVisible(options[1], true); options[1].focus(); assert.deepEqual(told.votes.slice(-1), [1], 'keyboard focus counts'); move(options[2]); assert.deepEqual(told.votes.slice(-1), [2], 'the pointer wins over the focus');
      move(doc.body); assert.deepEqual(told.votes.slice(-1), [1], 'and the focus is still there when the pointer goes'); options[1].blur(); assert.deepEqual(told.votes.slice(-1), [-1]);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a primary menu button under the pointer ticks the backdrop (once per arrival; not in a live round, not reduced, not touch, not secondary or disabled)', async () => {
    const { page, doc, told, over, root } = await setup();
    try {
      const start = doc.getElementById('start-button'); const how = doc.getElementById('how-button'); const room = doc.getElementById('room-start-button');
      over(start); assert.equal(told.primary, 1); over(start.querySelector('.arrow'), { relatedTarget: start }); assert.equal(told.primary, 1, 'moving about on the button is not a new arrival');
      over(how); assert.equal(told.primary, 1, 'a secondary button does not tick it'); assert.ok(room.disabled, 'sanity: the lobby start button is disabled now'); over(room); assert.equal(told.primary, 1, 'a disabled one neither');
      over(start, {}, 'touch'); assert.equal(told.primary, 1);
      root.dataset.motion = 'reduced'; over(start); assert.equal(told.primary, 1, 'Reduced Motion'); root.dataset.motion = 'full';
      page.window.SabotageStackHost = { view: () => ({ screen: 'game', game: { phase: 'playing' } }) }; over(start); assert.equal(told.primary, 1, 'a live round');
      page.window.SabotageStackHost = { view: () => ({ screen: 'results', game: null }) }; over(start); assert.equal(told.primary, 2, 'results is a menu');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

// ---------------------------------------------------------------------------------------------------------------------------------
describe('the brick title scatters under the pointer, in whole-brick steps (title-stack.js)', () => {
  const fx = { dust() {}, pulses: { pulse() {} }, sparks: { burst() {}, emit() {} } }; const HOME = 2; const LOOSE = 3;
  const THEMES = ['paper', 'sunset', 'primetime'];
  const make = async (theme = 'paper') => { const { TitleStack } = await load('title-stack.js'); const { PALETTES } = await load('palette.js'); const title = new TitleStack(theme, PALETTES[theme], fx); title.build({ instant: true }); title.clock = 0; return title; };
  const run = (title, seconds, extra = {}, each) => { for (let i = 0; i < Math.round(seconds * 60); i += 1) { title.clock += 1 / 60; title.update(1 / 60, title.clock, { floor: () => 0, ...extra }); if (each) each(i); } };
  const frameAt = async (point) => { const { Vector3 } = await import('three'); return { point: new Vector3(point.x, point.y, point.z), right: new Vector3(1, 0, 0), up: new Vector3(0, 1, 0) }; };
  const displaced = title => title.bricks.filter(b => b.kind === 0 && (b.sx || b.sy));
  const aimAt = async (title, letter = 2) => { const { Vector3 } = await import('three'); const row = Math.floor(title.letters[letter].rows / 2); const target = title.bricks.find(b => b.kind === 0 && b.letter === letter && b.row === row); return { target, point: title.homeWorld(target, new Vector3(), 0) }; }; // (the middle of a letter: the pixel font has fewer rows than the others)

  test('bricks near the pointer are pushed straight away from it, a couple of cells at most, whole cells only, and nothing beyond three brick widths moves', async () => {
    const { Vector3 } = await import('three');
    for (const theme of THEMES) {
      const title = await make(theme); run(title, 0.3); const { point } = await aimAt(title); const pointer = await frameAt(point);
      const L = title.layout; assert.ok(L.cell > 0 && L.brickLength >= L.cell * 2, `${theme}: a cell is one course (${L.cell}), a brick is at least two of them long (${L.brickLength})`); const radius = 3 * L.brickLength;
      run(title, 0.9, { pointer });
      const moved = displaced(title); assert.ok(moved.length >= 4 && moved.length < title.bricks.filter(b => b.kind === 0).length / 2, `${theme}: ${moved.length} bricks moved, the ones near the pointer only (Sunset's are bigger, so fewer fit in three brick widths)`);
      const v = new Vector3(); let outward = 0;
      for (const b of moved) {
        assert.ok(Number.isInteger(b.sx) && Number.isInteger(b.sy) && Math.abs(b.sx) <= 2 && Math.abs(b.sy) <= 2, `${theme}: whole cells, at most two (${b.sx}, ${b.sy})`);
        title.homeWorld(b, v, 0); const dx = v.x - point.x; const dy = v.y - point.y; assert.ok(Math.hypot(dx, dy) < radius + 2, `${theme}: only inside the radius (${Math.hypot(dx, dy).toFixed(1)} of ${radius.toFixed(1)})`);
        if (b.sx * dx + b.sy * dy > 0) outward += 1;
      }
      assert.ok(outward >= moved.length * 0.85, `${theme}: pushed away from the pointer (${outward} of ${moved.length})`);
      const far = title.bricks.filter(b => b.kind === 0 && Math.hypot(title.homeWorld(b, v, 0).x - point.x, v.y - point.y) > radius * 1.6); assert.ok(far.length > 50 && far.every(b => b.sp === null && !b.sx && !b.sy), `${theme}: the rest of the wall never wakes`);
    }
  });

  test('what is drawn changes on a fixed 30 Hz tick, never between ticks, and the bricks really are drawn there (the instance matrices carry the offset)', async () => {
    const { Matrix4, Vector3 } = await import('three'); const title = await make(); run(title, 0.3); const { point } = await aimAt(title); const pointer = await frameAt(point);
    let previous = ''; const changes = []; run(title, 1.2, { pointer }, i => { const sig = displaced(title).map(b => `${b.i}:${b.sx},${b.sy}`).join('|'); if (sig !== previous) changes.push(i); previous = sig; });
    assert.ok(changes.length >= 4, `it does move (${changes.length} changes)`); assert.ok(changes.length <= 37, `at most once per tick: ${changes.length} changes in 72 frames`);
    for (let i = 1; i < changes.length; i += 1) if (changes[i] === changes[i - 1] + 1 && changes[i] > 6) assert.fail(`two frames in a row changed at ${changes[i]}: that is faster than 30 Hz`);
    const m = new Matrix4(); const home = new Vector3(); const cell = title.layout.cell; let checked = 0;
    for (const b of displaced(title)) { title.homeWorld(b, home, 0); title.mesh.getMatrixAt(b.i, m); const e = m.elements; assert.ok(Math.abs(e[12] - (home.x + b.sx * cell)) < 1e-2 && Math.abs(e[13] - (home.y + b.sy * cell)) < 1e-2 && Math.abs(e[14] - home.z) < 1e-2, `brick ${b.i} drawn at its slot plus (${b.sx}, ${b.sy}) cells`); checked += 1; }
    assert.ok(checked >= 8);
  });

  test('when the pointer leaves, every brick springs back into its slot and the whole thing goes to sleep (no more ticks, nothing awake)', async () => {
    const title = await make(); run(title, 0.3); const { point } = await aimAt(title); const pointer = await frameAt(point); run(title, 0.8, { pointer }); assert.ok(displaced(title).length > 5 && title.scatterActive.size > 5);
    run(title, 3); assert.equal(displaced(title).length, 0, 'all home'); assert.equal(title.scatterActive.size, 0, 'nothing awake'); assert.ok(title.bricks.every(b => b.sp === null && b.sx === 0 && b.sy === 0));
    let ticks = 0; const tick = title.scatterTick.bind(title); title.scatterTick = (...args) => { ticks += 1; return tick(...args); }; run(title, 1); assert.equal(ticks, 0, 'asleep: the clock is not even consulted'); run(title, 0.2, { pointer }); assert.ok(ticks > 0, 'and it wakes for the pointer');
  });

  test('the old smooth reaction is gone, not doubled: whole letters no longer lean, swell or ripple under the pointer, however fast or awake it is', async () => {
    const title = await make(); run(title, 0.3); const { point } = await aimAt(title); const pointer = await frameAt(point);
    run(title, 1.2, { pointer, energy: 1 }); for (const l of title.letters) { assert.ok(Math.abs(l.rz) < 1e-6 && Math.abs(l.rx) < 1e-6 && l.swell === 0, `letter ${l.ch}: no lean, no swell`); assert.ok(Math.abs(l.y) <= 0.8 + 1e-6, `letter ${l.ch}: only its idle breathing (${l.y.toFixed(3)})`); }
  });

  test('Reduced Motion shows none of it (and ends it at once); Superglue holds the bricks; a blown-up title has nothing to scatter', async () => {
    const calm = await make(); run(calm, 0.3); const { point } = await aimAt(calm); const pointer = await frameAt(point);
    run(calm, 1, { pointer, reduced: true }); assert.equal(displaced(calm).length, 0, 'Reduced Motion: nothing moves');
    const title = await make(); run(title, 0.3); run(title, 0.8, { pointer }); assert.ok(displaced(title).length > 5); run(title, 1 / 60, { pointer, reduced: true }); assert.equal(displaced(title).length, 0, 'switched on mid-way: the very next frame'); assert.equal(title.scatterActive.size, 0);
    const glued = await make(); run(glued, 0.3); const effect = { id: 'superglue', elapsed: 1.5, remaining: 3, duration: 4.4, dir: 1, n: 77 }; run(glued, 0.6, { pointer, effect }); assert.ok(glued.pose.glue > 0.9); assert.equal(displaced(glued).length, 0, 'the glued wall does not give way');
    const boom = await make(); run(boom, 0.3); run(boom, 0.6, { pointer }); boom.explode(1); run(boom, 0.2, { pointer }); assert.equal(boom.scatterActive.size, 0); assert.equal(displaced(boom).length, 0);
  });

  test('the arrival wave, the click-to-poke knockout and the rebuild are untouched: a poked brick leaves the scatter at once and comes home clean', async () => {
    const title = await make(); run(title, 0.3); const { point } = await aimAt(title); const pointer = await frameAt(point);
    title.wave(0, 1500); let hop = 0; run(title, 0.8, {}, () => { for (const l of title.letters) hop = Math.max(hop, l.hop); }); assert.ok(hop > 1, `the arrival wave still hops the letters (${hop.toFixed(1)})`);
    run(title, 0.8, { pointer }); assert.ok(displaced(title).length > 5);
    const out = title.knock(point, 60, { max: 40 }); assert.ok(out > 8, `${out} bricks knocked out`); run(title, 0.2, { pointer });
    for (const b of title.bricks) if (b.kind === 0 && b.state !== HOME) assert.ok(b.sx === 0 && b.sy === 0 && b.sp === null && !title.scatterActive.has(b), 'a loose brick takes no part in the scatter');
    assert.ok(title.bricks.some(b => b.state === LOOSE), 'and they really are loose');
    run(title, 8); assert.equal(title.bricks.filter(b => b.kind === 0 && b.state === HOME).length, title.bricks.filter(b => b.kind === 0).length, 'every brick is back in the wall'); assert.equal(displaced(title).length, 0); assert.equal(title.scatterActive.size, 0);
    title.build({ instant: true }); assert.equal(title.scatterActive.size, 0); assert.ok(title.bricks.every(b => b.sx === 0 && b.sy === 0 && b.sp === null), 'a rebuild starts clean');
  });
});

describe('the palette wave on the vote candidates (candidates.js)', () => {
  const stubDocument = () => {
    const had = Object.prototype.hasOwnProperty.call(globalThis, 'document'); const previous = globalThis.document;
    const context = new Proxy({}, { get: (_, key) => (key === 'measureText' ? () => ({ width: 10 }) : () => {}), set: () => true }); globalThis.document = { createElement: () => ({ width: 0, height: 0, style: {}, getContext: () => context }) };
    return () => { if (had) globalThis.document = previous; else delete globalThis.document; };
  };
  const waveBricks = () => { const out = []; const at = (x, y, color, raised = false) => out.push({ x, y, len: 1, color, raised }); for (let x = 0; x < 4; x += 1) at(x, 2, x < 3 ? '#2F8478' : '#E3A33B'); for (let x = 0; x < 4; x += 1) at(x, 1, '#2F8478'); at(0, 0, '#E3A33B'); at(1, 0, '#F4EDDF'); at(2, 0, '#2F8478'); at(3, 0, '#E3A33B'); at(1, 1.5, '#170B33', true); at(2, 1.5, '#2F8478', true); /* an ink line that happens to be a fill's colour must still never swap */ return out; };
  const setup = async () => {
    const THREE = await import('three'); const { VoteCandidates } = await load('candidates.js'); const { PALETTES, BALLOT_COLORS } = await load('palette.js'); const restore = stubDocument();
    const sculpture = id => { const bricks = waveBricks(); const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial(), bricks.length); const c = new THREE.Color(); bricks.forEach((b, i) => mesh.setColorAt(i, c.set(b.color))); const holder = new THREE.Group(); holder.add(mesh); holder.userData = { voxel: true, id, mesh, bricks, dispose() {} }; return holder; };
    const toy = id => { const g = new THREE.Group(); g.userData = { dispose() {} }; return g; };
    const cands = new VoteCandidates('paper', PALETTES.paper, BALLOT_COLORS.paper, { makeIcon: sculpture, nameOf: id => id });
    const read = (mesh, i) => { const c = new THREE.Color(); mesh.getColorAt(i, c); return `#${c.getHexString().toUpperCase()}`; };
    let t = 10; const step = (dt, extra = {}) => { t += dt; cands.update(dt, t, { options: ['turbo', 'drunk', 'slowmo'], fractions: [1, 1, 1], y: 200, reduced: false, ...extra }); };
    const colors = card => card.icon.userData.bricks.map((_, i) => read(card.icon.userData.mesh, i));
    return { THREE, cands, step, colors, restore, VoteCandidates, PALETTES, BALLOT_COLORS, toy, time: () => t };
  };

  test('hovering a vote row sweeps ITS sculpture from the top-left, leaving sweeps it back, and the other two and the ink lines never change', async () => {
    const { cands, step, colors, restore } = await setup();
    try {
      step(0.016); assert.equal(cands.cards.length, 3); assert.ok(cands.cards.every(c => c.wave), 'each voxel sculpture has a wave'); const original = cands.cards.map(colors); const ink = waveBricks().map((b, i) => (b.raised ? i : -1)).filter(i => i >= 0);
      step(0.05); assert.deepEqual(cands.cards.map(colors), original, 'no hover, no change');
      step(0.016, { hover: 1 }); const first = colors(cands.cards[1]).filter((c, i) => c !== original[1][i]).length; assert.ok(first >= 1 && first <= 2, `the corner brick swaps at once (${first})`);
      for (let i = 0; i < 11; i += 1) step(0.016, { hover: 1 }); const half = colors(cands.cards[1]).filter((c, i) => c !== original[1][i]).length; assert.ok(half > first && half < 9, `about half way after 0.2 s (${half})`);
      for (let i = 0; i < 30; i += 1) step(0.016, { hover: 1 }); const now = colors(cands.cards[1]);
      now.forEach((c, i) => { const was = original[1][i]; if (ink.includes(i)) assert.equal(c, was, 'ink stays'); else if (was === '#2F8478') assert.equal(c, '#E3A33B'); else if (was === '#E3A33B') assert.equal(c, '#2F8478'); else assert.equal(c, was); });
      assert.deepEqual(colors(cands.cards[0]), original[0]); assert.deepEqual(colors(cands.cards[2]), original[2]);
      for (let i = 0; i < 40; i += 1) step(0.016, { hover: -1 }); assert.deepEqual(colors(cands.cards[1]), original[1], 'sweeps back to exactly how it was');
      for (let i = 0; i < 4; i += 1) step(0.016, { hover: 0 }); for (let i = 0; i < 4; i += 1) step(0.016, { hover: 2 }); assert.notDeepEqual(colors(cands.cards[2]), original[2], 'moving to the next row starts that one');
    } finally { restore(); }
  });

  test('Reduced Motion: the colours simply change (no sweep); a closed vote ignores the hover; a toy icon (artwork not read yet) has no wave and no trouble', async () => {
    const { cands, step, colors, restore, VoteCandidates, PALETTES, BALLOT_COLORS, toy } = await setup();
    try {
      step(0.016); const original = cands.cards.map(colors); step(0.016, { hover: 0, reduced: true }); const now = colors(cands.cards[0]);
      assert.equal(now.filter((c, i) => c !== original[0][i]).length, 11, 'every swappable brick at once (8 teal + 3 amber; the cream pixel and the ink stay)'); step(0.016, { hover: -1, reduced: true }); assert.deepEqual(colors(cands.cards[0]), original[0], 'and straight back');
      step(0.5); step(0.016, { options: null, hover: 1 }); assert.ok(cands.closing || !cands.open, 'the vote has closed'); assert.deepEqual(colors(cands.cards[1] || cands.cards[0]).length > 0, true);
      const plain = new VoteCandidates('paper', PALETTES.paper, BALLOT_COLORS.paper, { makeIcon: toy, nameOf: id => id }); plain.update(0.016, 1, { options: ['a', 'b', 'c'], fractions: [1, 1, 1], hover: 1 }); assert.ok(plain.cards.every(c => c.wave === null)); plain.update(0.016, 1.1, { options: ['a', 'b', 'c'], fractions: [1, 1, 1], hover: 1 });
    } finally { restore(); }
  });
});

describe('the stage hooks, the worlds and the wiring', () => {
  const read = name => fs.readFileSync(path.join(ROOT, 'client3d', name), 'utf8');

  test('the stage keeps the hovered vote row and runs the pattern tick (Paper has no pattern: its step is zero)', async () => {
    const { Stage } = await load('stage.js'); const { PatternTick, TICK_STEP } = await load('pattern-tick.js'); const fake = { voteHover: -1, patternTick: new PatternTick(), time: 100, theme: 'sunset' };
    Stage.prototype.setVoteHover.call(fake, 2); assert.equal(fake.voteHover, 2); for (const bad of [-1, 'x', 1.5, undefined, null, NaN]) { Stage.prototype.setVoteHover.call(fake, 2); Stage.prototype.setVoteHover.call(fake, bad); assert.equal(fake.voteHover, bad === -1 ? -1 : -1, `${String(bad)} clears it`); }
    assert.equal(Stage.prototype.patternSeconds.call(fake), 0); assert.equal(Stage.prototype.tickPattern.call(fake), true); assert.ok(near(Stage.prototype.patternSeconds.call(fake), TICK_STEP.sunset)); assert.equal(Stage.prototype.tickPattern.call(fake), false, 'one run at a time');
    fake.time = 100.2; assert.ok(near(Stage.prototype.patternSeconds.call(fake), 3 * TICK_STEP.sunset)); fake.theme = 'paper'; assert.equal(Stage.prototype.patternSeconds.call(fake), 0); fake.theme = 'primetime'; assert.ok(near(Stage.prototype.patternSeconds.call(fake), 3 * TICK_STEP.primetime));
  });

  test('wired as the brief says: one installPixelUi next to tactile and icon-turn, disposed in disable(); the stage drops its sparkle stream while the grid trail is on; the worlds take the tick', () => {
    const index = read('index.js'); const stage = read('stage.js'); const worlds = read('worlds.js'); const hover = read('hover.js'); const title = read('title-stack.js');
    assert.match(index, /import \{ installPixelUi \} from '\.\/pixel-ui\.js';/); assert.match(index, /pixel = installPixelUi\(\{ doc, win: window, hooks:/); assert.match(index, /installTactileUi\(\{ doc, win: window \}\); iconTurn = installIconTurn\(\{ doc \}\);\s*\n\s*pixel = installPixelUi/);
    assert.match(index, /function disable\(remember\) \{[\s\S]*?if \(pixel\) \{ pixel\.dispose\(\); pixel = null; \}[\s\S]*?stage\.dispose\(\)/); assert.match(index, /stage\.gridTrail = \(\) => Boolean\(pixel && pixel\.trailActive\)/);
    assert.match(stage, /if \(!\(this\.gridTrail && this\.gridTrail\(\)\)\) for \(let n = hover\.sparks\(dt, this\.pointer\.speed, reduced\); n > 0; n -= 1\) this\.sparkle\(frame\);/);
    assert.match(stage, /this\.groundRipple\(0\.7\)/, 'the floor ripples stay'); assert.match(stage, /light\.intensity = e \* this\.cursorLightPower/, 'and so does the warm light');
    assert.match(stage, /p\.buttons = event\.buttons \|\| 0;/, 'the stage knows when any button is down'); assert.match(stage, /handleUp\(event, cancelled = false\) \{\s*this\.pointer\.buttons = event\.buttons \|\| 0;/, 'and when the last one comes up, even if the pointer does not move after it'); assert.match(stage, /title\.update\(dt, this\.time, \{ pointer: p\.buttons \? null : pointer, reduced,/, 'and the title scatter waits for it (a middle press included)');
    assert.match(stage, /tick: this\.patternSeconds\(\)/); assert.match(stage, /faceYaw: this\.facing, hover: this\.voteHover \}/); assert.match(worlds, /ground\.userData\.update\(time \+ tick\)/); assert.match(worlds, /burst\.material\.uniforms\.uTime\.value = time \+ tick;/); assert.match(worlds, /decor\.update\(\{ time, dt, focusY, altitude, dim, tick \}\)/);
    assert.doesNotMatch(hover, /pixel|gridTrail/i, 'hover.js is not touched'); assert.match(title, /updateScatter\(dt, pointer, reduced\)/); assert.doesNotMatch(title, /smoothstep\(190, 0, d\)/, 'the old near-pointer reaction is gone'); assert.match(title, /wave\(originX = 0, speed = 1500\)/); assert.match(title, /knock\(point, radius = 58/);
    assert.match(read('icon-voxel.js'), /holder\.userData\.mesh = mesh; holder\.userData\.bricks = bricks;/); assert.match(read('candidates.js'), /new PaletteWave\(icon\.userData\.bricks\)/);
  });
});

describe('the pixel-grid CSS in the page', () => {
  const start = html.indexOf('/* ===== Pixel-grid feel (3D layer only)'); const end = html.indexOf('/* ===== Panels and text (3D layer)');
  const section = html.slice(start, end); const bare = section.replace(/\/\*[\s\S]*?\*\//g, '');
  const tokens = block => Object.fromEntries([...block.matchAll(/--([\w-]+):\s*([^;}]+)/g)].map(m => [m[1], m[2].trim()]));
  const first = re => { const m = re.exec(html); assert.ok(m, String(re)); return m[1]; };
  const THEMES = ['paper', 'sunset', 'primetime'];
  const base = tokens(first(/:root\s*\{([^}]*)\}/));
  const theme = {
    paper: base,
    sunset: { ...base, ...tokens(first(/html\[data-theme="sunset"\] \{([^}]*--paper:[^}]*)\}/)) },
    primetime: { ...base, ...tokens(first(/html\[data-theme="primetime"\] \{([^}]*--paper:[^}]*)\}/)) }
  };
  const mine = {
    paper: tokens(first(/html\.has-3d \{([^}]*--wipe-a:[^}]*)\}/)),
    sunset: tokens(first(/html\.has-3d\[data-theme="sunset"\] \{([^}]*--wipe-a:[^}]*)\}/)),
    primetime: tokens(first(/html\.has-3d\[data-theme="primetime"\] \{([^}]*--wipe-a:[^}]*)\}/))
  };
  const resolve = (name, value) => { const m = /^var\(--([\w-]+)\)$/.exec(String(value).trim()); return m ? resolve(name, mine[name][m[1]] || theme[name][m[1]]) : String(value).trim(); };

  test('the section exists, and every rule in it belongs to the 3D layer (html.has-3d) or to Reduced Motion', () => {
    assert.ok(start > 0 && end > start && section.length > 3000, 'found it');
    const selectors = [...bare.matchAll(/(?:^|[}{;])\s*(html[^{}]*)\{/g)].map(m => m[1].trim()); assert.ok(selectors.length >= 20, `${selectors.length} rules`);
    for (const list of selectors) for (const one of list.split(/,(?![^(]*\))/)) assert.match(one.trim(), /^html(\.has-3d|\[data-motion="reduced"\])/, `scoped: ${one.trim()}`); // (top-level commas only: :is(a, b) is one selector)
  });

  test('stepped, never eased; nothing blurs; nothing new has rounded corners', () => {
    assert.doesNotMatch(bare, /\bease(-in|-out|-in-out)?\b|cubic-bezier|blur\(|border-radius|backdrop-filter|box-shadow:[^;]*\d+px\s+\d+px\s+[1-9]\d*px/, 'no easing curves, no blur, no radius');
    const transitions = [...bare.matchAll(/transition:\s*([^;]+);/g)].map(m => m[1].trim()); assert.ok(transitions.length >= 4, `${transitions.length} transitions`);
    for (const t of transitions) assert.ok(t === 'none' || t.split(/,(?![^(]*\))/).every(part => /steps\(/.test(part) || /^\s*(color|transform) 0s steps/.test(part)), `stepped or none: ${t}`);
    assert.match(bare, /transform 240ms steps\(6, start\)/, 'the wipe: 240 ms in six steps'); assert.match(bare, /transform 180ms steps\(6\)/, 'the link underline: 180 ms in six steps'); assert.match(bare, /transform \.09s steps\(3\)/, 'the keycap: three steps');
    assert.match(bare, /\.button-primary:not\(:disabled\)::before|:is\(\.button-primary, \.button-secondary\):not\(:disabled\)::before/); assert.match(bare, /transform: scaleX\(0\); transform-origin: 0 50%/, 'from the left, at the middle height');
    assert.match(bare, /a\[href\]:not\(\.button\)::after \{[^}]*height: 1px/, 'a 1px underline');
  });

  test('pointer-only rules sit in (hover: hover) and (pointer: fine); the DROP bar and the vote keys keep their own feel', () => {
    const open = bare.indexOf('@media (hover: hover) and (pointer: fine) {'); assert.ok(open > 0); let depth = 0; let close = -1;
    for (let i = bare.indexOf('{', open); i < bare.length; i += 1) { if (bare[i] === '{') depth += 1; if (bare[i] === '}') { depth -= 1; if (depth === 0) { close = i; break; } } }
    const inside = bare.slice(open, close); const outside = bare.slice(0, open) + bare.slice(close);
    assert.doesNotMatch(outside, /:hover/, 'no :hover outside the media query'); assert.ok((inside.match(/:hover/g) || []).length >= 6);
    for (const must of ['.button-primary', '.button-secondary', '.vote-option', '.room-player-list li', '.score-tile']) assert.ok(inside.includes(must), `${must} is in there`);
    assert.doesNotMatch(bare, /\.drop-button|\.vote-key/, 'the live controls are not touched'); assert.doesNotMatch(bare, /:is\([^)]*\.button\b[^-]/, 'nor are the plain buttons');
    assert.match(bare, /html\.has-3d\[data-motion="reduced"\] :is\(\.button-primary, \.button-secondary\) \{ transition-delay: 0s !important; \}/, 'Reduced Motion: the one delay is cleared (the page already makes every transition instant)');
    assert.match(html, /html\[data-motion="reduced"\] \*, html\[data-motion="reduced"\] \*::before, html\[data-motion="reduced"\] \*::after \{[^}]*transition-duration: \.01ms !important/, 'and that rule is still there');
  });

  test('every wipe and every flood reads: the label and the text on each accent reach AA (4.5:1) in every theme, from the page\'s own tokens', async () => {
    const { contrastRatio, AA } = await load('pixel-contrast.js'); let pairs = 0;
    for (const name of THEMES) {
      const own = { ...mine.paper, ...(name === 'paper' ? {} : mine[name]) }; const all = { ...theme[name], ...own }; const color = key => resolve(name, `var(--${key})`.replace('var(--', 'var(--')); void all;
      const val = key => resolve(name, own[key] !== undefined ? own[key] : `var(--${key})`);
      for (const [bg, fg] of [['wipe-a', 'wipe-a-fg'], ['wipe-b', 'wipe-b-fg']]) { const ratio = contrastRatio(val(bg), val(fg)); assert.ok(ratio >= AA, `${name}: ${bg} ${val(bg)} with ${fg} ${val(fg)} is ${ratio.toFixed(2)}:1`); pairs += 1; }
      for (const [accent, fg] of [['amber', 'fg-amber'], ['teal', 'fg-teal'], ['dusty-blue', 'fg-blue'], ['vermilion', 'fg-red']]) { const ratio = contrastRatio(resolve(name, theme[name][accent]), val(fg)); assert.ok(ratio >= AA, `${name}: a row flooded ${accent} ${theme[name][accent]} with text ${val(fg)} is ${ratio.toFixed(2)}:1`); pairs += 1; }
    }
    assert.equal(pairs, 18);
  });

  test('the vote rows flood in the colour their .vote-fill bar already has, one per slot; the text-colour table in the code is the page\'s own pair for each theme', async () => {
    const { TEXT_COLORS } = await load('pixel-contrast.js'); const same = (a, b) => String(a).toLowerCase() === String(b).toLowerCase();
    assert.match(bare, /\.vote-option\[data-option-index="0"\] \{ --row-accent: var\(--teal\)/); assert.match(bare, /\.vote-option\[data-option-index="1"\] \{ --row-accent: var\(--dusty-blue\)/); assert.match(bare, /\.vote-option\[data-option-index="2"\] \{ --row-accent: var\(--vermilion\)/);
    assert.match(html, /\.vote-option\[data-option-index="1"\] \.vote-fill \{ background: var\(--dusty-blue\); \}/); assert.match(html, /\.vote-option\[data-option-index="2"\] \.vote-fill \{ background: var\(--vermilion\); \}/);
    assert.ok(same(TEXT_COLORS.paper.light, theme.paper.paper) && same(TEXT_COLORS.paper.dark, theme.paper.ink), 'Paper: --paper over --ink');
    for (const name of ['sunset', 'primetime']) assert.ok(same(TEXT_COLORS[name].light, theme[name].ink) && same(TEXT_COLORS[name].dark, theme[name].night), `${name}: --ink over --night (the roles swap)`);
    assert.match(bare, /:not\(:disabled\):is\(:hover, :focus-visible, \.is-pressed\) \.vote-fill \{ background: var\(--row-fg\); \}/, 'the progress bar flips with the text, so it stays seen');
    const floods = [...bare.matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(m => /(vote-option|room-player-list li|score-tile)/.test(m[1]) && /:hover|\.is-pressed|:focus-visible/.test(m[1]) && !/\{/.test(m[1])); assert.ok(floods.length >= 7, `${floods.length} flood rules`);
    for (const [, selector, body] of floods) for (const declaration of body.split(';').map(d => d.trim()).filter(Boolean)) assert.match(declaration, /^(border-color|background|color)\s*:/, `a flood changes colours only, so nothing can shift (${selector.trim()} { ${declaration} })`);
  });

  test('the rules the theme tests pin are still there, byte for byte (the select / button focus ring, the amber focus ring of the dark themes, the Sunset disabled lobby action)', () => {
    assert.match(html, /button:focus-visible, select:focus-visible, \[tabindex="0"\]:focus-visible, summary:focus-visible \{\s*outline: 3px solid var\(--vermilion\);\s*outline-offset: 3px;\s*\}/);
    assert.match(html, /html\[data-theme="sunset"\] :focus-visible \{ outline-color: var\(--amber\)/); assert.match(html, /html\[data-theme="primetime"\] :focus-visible \{ outline-color: var\(--amber\)/);
    assert.match(html, /html\[data-theme="sunset"\] \.room-actions \.button-primary:disabled \{\s*opacity: 1; background: #2A1450; color: #DEC7F2; border-color: #DEC7F2;\s*border-style: dashed; box-shadow: none;\s*\}/);
  });
});
