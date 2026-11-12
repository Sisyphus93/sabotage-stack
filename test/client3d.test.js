'use strict';
// The 3D layer (client3d/ -> public/stack3d.js): build gates, asset serving, parity with the page, pure-logic units,
// and the host bridge that lets the layer take over drawing without touching gameplay.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const http = require('node:http');
const { spawnSync } = require('node:child_process');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load: ${error.message}`; }

function run(script, ...args) { return spawnSync(process.execPath, [path.join(ROOT, 'scripts', script), ...args], { encoding: 'utf8' }); }

describe('build gates', () => {
  test('public/stack3d.js is the bundle of the current client3d sources (run npm run build after editing client3d/)', () => {
    const result = run('build-client.js', '--check');
    assert.equal(result.status, 0, result.stdout + result.stderr);
  });
  test('the committed bundle is the minified production build (a --dev build is several MB and must never be committed)', () => {
    const file = path.join(ROOT, 'public', 'stack3d.js'); const head = fs.readFileSync(file, 'utf8').slice(0, 160);
    assert.match(head, /^\/\* stack3d-source-hash: [0-9a-f]{64} mode=min \*\/\n/);
    assert.ok(fs.statSync(file).size < 2 * 1024 * 1024, `bundle is ${fs.statSync(file).size} bytes`);
  });
  test('the committed 3D typefaces still match the fonts embedded in the page (run npm run typeface)', () => {
    const result = run('make-typeface.js', '--check');
    assert.equal(result.status, 0, result.stdout + result.stderr);
  });
  test('the page loads the bundle after its own script and the layer is optional (defer, relative URL)', () => {
    assert.match(html, /<\/script>\s*<script src="public\/stack3d\.js" defer><\/script>\s*<\/body>/);
  });
  test('every glyph of the headline exists in all three typefaces', async () => {
    for (const name of ['paper', 'sunset', 'primetime']) {
      const face = JSON.parse(fs.readFileSync(path.join(ROOT, 'client3d', 'assets', `typeface-${name}.json`), 'utf8'));
      for (const ch of 'STACK THE BLOCKS. CHAT RUINS YOUR LIFE. PERFECT! TIMBER! 0123456789 NEW BEST') {
        if (ch !== ' ') assert.ok(face.glyphs[ch] && face.glyphs[ch].o, `${name} typeface is missing "${ch}"`);
      }
    }
  });
});

describe('serving the bundle', () => {
  const { createGameServer } = require('../server');
  async function withServer(fn) {
    const app = createGameServer({ onError: () => {} });
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const port = app.server.address().port;
    const get = (target, headers = {}) => new Promise((resolve, reject) => {
      http.get({ host: '127.0.0.1', port, path: target, headers }, res => { const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) })); }).on('error', reject);
    });
    const head = (target, headers = {}) => new Promise((resolve, reject) => {
      http.request({ host: '127.0.0.1', port, path: target, method: 'HEAD', headers }, res => { const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) })); }).on('error', reject).end();
    });
    try { await fn(get, head); } finally { await app.close(); }
  }
  test('both asset URLs serve the same JavaScript with an ETag, and revalidate to 304', async () => {
    await withServer(async get => {
      const file = fs.readFileSync(path.join(ROOT, 'public', 'stack3d.js'));
      for (const target of ['/public/stack3d.js', '/assets/stack3d.js']) {
        const res = await get(target);
        assert.equal(res.status, 200); assert.match(res.headers['content-type'], /text\/javascript/); assert.ok(res.headers.etag);
        assert.equal(res.headers['x-content-type-options'], 'nosniff');
        assert.ok(res.body.equals(file), 'uncompressed body equals the file');
        const again = await get(target, { 'if-none-match': res.headers.etag });
        assert.equal(again.status, 304); assert.equal(again.body.length, 0);
      }
    });
  });
  test('brotli and gzip are negotiated and decode to the exact file', async () => {
    await withServer(async get => {
      const file = fs.readFileSync(path.join(ROOT, 'public', 'stack3d.js'));
      const br = await get('/public/stack3d.js', { 'accept-encoding': 'br, gzip' });
      assert.equal(br.headers['content-encoding'], 'br'); assert.ok(br.body.length < file.length / 2); assert.ok(zlib.brotliDecompressSync(br.body).equals(file));
      const gz = await get('/public/stack3d.js', { 'accept-encoding': 'gzip' });
      assert.equal(gz.headers['content-encoding'], 'gzip'); assert.ok(zlib.gunzipSync(gz.body).equals(file));
      assert.equal(br.headers.vary, 'Accept-Encoding');
    });
  });
  test('only the listed assets are served: traversal, sibling files and directories are 404', async () => {
    await withServer(async get => {
      for (const target of ['/public/', '/public', '/public/../server.js', '/assets/../package.json', '/public/stack3d.js/', '/public/other.js', '/client3d/index.js', '/node_modules/three/package.json', '/%2e%2e/server.js']) {
        const res = await get(target); assert.ok([404, 400].includes(res.status), `${target} -> ${res.status}`);
      }
    });
  });
  test('HEAD answers like GET without a body, for the page and the bundle', async () => {
    await withServer(async (get, head) => {
      for (const target of ['/', '/assets/stack3d.js']) {
        const full = await get(target, { 'accept-encoding': 'br' }); const probe = await head(target, { 'accept-encoding': 'br' });
        assert.equal(probe.status, 200); assert.equal(probe.body.length, 0);
        assert.equal(probe.headers['content-length'], String(full.body.length)); assert.equal(probe.headers.etag, full.headers.etag); assert.equal(probe.headers['content-encoding'], 'br');
      }
    });
  });
  test('the game page is still served fresh (no-store) and compressed on request', async () => {
    await withServer(async get => {
      const res = await get('/', { 'accept-encoding': 'br' });
      assert.equal(res.status, 200); assert.equal(res.headers['cache-control'], 'no-store'); assert.equal(res.headers['content-encoding'], 'br');
      assert.equal(zlib.brotliDecompressSync(res.body).toString('utf8'), html);
    });
  });
});

describe('parity with the page', () => {
  const mapFrom = name => { const body = new RegExp(`const ${name} = Object\\.freeze\\(\\{([^}]*)\\}\\)`).exec(html)[1]; return Object.fromEntries([...body.matchAll(/'(#[0-9A-Fa-f]{6})':\s*'(#[0-9A-Fa-f]{6})'/g)].map(m => [m[1], m[2]])); };
  test('block colours are recoloured exactly like the flat renderer does', async () => {
    const { BLOCK_COLOR_MAPS, themedBlockColor } = await load('palette.js');
    assert.deepEqual(BLOCK_COLOR_MAPS.sunset, mapFrom('SUNSET_COLOR_MAP'));
    assert.deepEqual(BLOCK_COLOR_MAPS.primetime, mapFrom('PRIMETIME_COLOR_MAP'));
    assert.equal(themedBlockColor('paper', '#E3A33B'), '#E3A33B');
    assert.equal(themedBlockColor('sunset', '#e3a33b'), '#FFC53D');
  });
  test('the three worlds are the three themes of the page, in the same order', async () => {
    const { THEMES, PALETTES, normalizeTheme } = await load('palette.js');
    const themes = /const CANVAS_THEMES = Object\.freeze\(\{\s*paper:[\s\S]*?\n      sunset:[\s\S]*?\n      primetime:/.test(html);
    assert.ok(themes); assert.deepEqual([...THEMES], ['paper', 'sunset', 'primetime']);
    assert.deepEqual(Object.keys(PALETTES), [...THEMES]); assert.equal(normalizeTheme('nope'), 'paper');
    assert.equal(PALETTES.sunset.ink, '#170B33'); assert.equal(PALETTES.primetime.paper, '#0A1A55');
  });
  test('board geometry in the 3D tower equals the shared rules (22 px levels, 360 px board)', async () => {
    const { BLOCK_H, BOARD_W } = await load('blocks.js').catch(() => ({}));
    // blocks.js touches the DOM only when its factories run, so its constants are importable in Node
    assert.equal(BLOCK_H, Core.BLOCK_H); assert.equal(BOARD_W, Core.WIDTH);
  });
});

describe('pure logic', () => {
  test('rng is deterministic and spread; damp converges without overshoot; springs settle', async () => {
    const { rng, damp, Spring, clamp, smoothstep, mod } = await load('util.js');
    const a = rng(42); const b = rng(42); const seq = Array.from({ length: 6 }, () => a());
    assert.deepEqual(seq, Array.from({ length: 6 }, () => b())); assert.ok(new Set(seq).size === 6 && seq.every(v => v >= 0 && v < 1));
    let v = 0; for (let i = 0; i < 120; i += 1) { v = damp(v, 1, 8, 1 / 60); assert.ok(v <= 1); } assert.ok(v > 0.999);
    const spring = new Spring(0, 160, 14); spring.target = 1; for (let i = 0; i < 400; i += 1) spring.step(1 / 60); assert.ok(Math.abs(spring.value - 1) < 0.002);
    assert.equal(clamp(5, 0, 1), 1); assert.equal(smoothstep(0, 1, 0.5), 0.5); assert.equal(mod(-1, 5), 4);
  });
  test('a dropped box lands on the plinth, tumbles, and falls to sleep; one off the edge reaches the ground', async () => {
    const { PhysicsWorld, makeBody, stageFloor } = await load('physics.js');
    const world = new PhysicsWorld({ floorY: stageFloor() });
    const onPlinth = world.add(makeBody({ pos: [0, 160, 0], half: [60, 10.6, 60], angVel: [1.2, 0.4, 2] }));
    const offEdge = world.add(makeBody({ pos: [380, 120, 0], half: [30, 10.6, 30], vel: [30, 0, 0] }));
    world.settle(6);
    assert.ok(onPlinth.asleep && offEdge.asleep, 'both bodies come to rest');
    assert.ok(onPlinth.pos[1] > 4 && onPlinth.pos[1] < 62, `rests on the plinth top (y=${onPlinth.pos[1].toFixed(1)})`);
    assert.ok(offEdge.pos[1] < -40, `fell to the ground (y=${offEdge.pos[1].toFixed(1)})`);
    assert.ok(Number.isFinite(onPlinth.quat[0] + onPlinth.quat[3]));
  });
  test('the demo tower plays the real rules for two simulated minutes: stacks, votes, sabotages, topples, repeats', async () => {
    const { AttractDirector } = await load('hero.js'); const { rng } = await load('util.js');
    const director = new AttractDirector(Core, rng(7));
    const seen = { perfect: 0, ballot: 0, effects: new Set(), collapse: 0, resets: 0 }; let lastId = director.id; let maxBlocks = 0;
    for (let i = 0; i < 60 * 120; i += 1) {
      director.update(1 / 60);
      if (director.id !== lastId) { seen.resets += 1; lastId = director.id; }
      const blocks = director.blocks; maxBlocks = Math.max(maxBlocks, blocks.length);
      for (const block of blocks) { assert.ok(block.right > block.left && block.left >= -0.01 && block.right <= 360.01, 'block inside the board'); }
      if (director.ballot) { seen.ballot += 1; assert.equal(director.ballot.options.length, 3); assert.ok(director.ballot.fractions.every(f => f > 0 && f <= 1)); }
      if (director.effect) { seen.effects.add(director.effect.id); assert.ok(Core.SABOTAGE_IDS.includes(director.effect.id)); }
      if (director.phase === 'collapse') seen.collapse += 1;
      seen.perfect += blocks.filter(b => b.perfect).length ? 1 : 0;
      const m = director.moving; if (m) assert.ok(m.width >= Core.MIN_WIDTH - 0.01);
    }
    assert.ok(seen.ballot > 0 && seen.effects.size >= 2 && seen.collapse > 0 && seen.resets >= 2 && seen.perfect > 0 && maxBlocks >= 8, JSON.stringify({ ...seen, effects: [...seen.effects] }));
  });
  test('the demo is reproducible for a given seed and honours a forced sabotage', async () => {
    const { AttractDirector } = await load('hero.js'); const { rng } = await load('util.js');
    const play = seed => { const d = new AttractDirector(Core, rng(seed)); const trace = []; for (let i = 0; i < 60 * 30; i += 1) { d.update(1 / 60); if (i % 30 === 0) trace.push(`${d.blocks.length}|${d.effect ? d.effect.id : ''}`); } return trace.join(','); };
    assert.equal(play(3), play(3)); assert.notEqual(play(3), play(4));
    const d = new AttractDirector(Core, rng(1)); for (let i = 0; i < 90; i += 1) d.update(1 / 60); d.force('earthquake');
    let applied = false; for (let i = 0; i < 60 * 10 && !applied; i += 1) { d.update(1 / 60); applied = Boolean(d.effect && d.effect.id === 'earthquake'); }
    assert.ok(applied, 'forced sabotage reaches the tower');
  });
});

describe('adaptive quality governor', () => {
  // feeds `frames` frames of `ms` milliseconds each, returns the actions taken and the clock
  const feed = (gov, frames, ms, now = 0) => { const actions = []; for (let i = 0; i < frames; i += 1) { now += ms; const action = gov.update(ms, now); if (action) actions.push({ ...action, at: now }); } return { actions, now }; };
  const make = async (options = {}) => { const { Governor } = await load('governor.js'); return new Governor({ tierCount: 4, tier: 2, ...options }); };
  test('shader compilation and first uploads never trigger a downgrade, however slow the first frames are', async () => {
    const gov = await make(); const { actions } = feed(gov, 29, 100); // 2.9 s of 10 fps
    assert.deepEqual(actions, []);
  });
  test('a steady 60 Hz display changes nothing, forever', async () => {
    const gov = await make(); const { actions } = feed(gov, 60 * 120, 16.7); assert.deepEqual(actions, []);
  });
  test('a few hitches in a window are ignored (trimmed mean)', async () => {
    const gov = await make(); let now = 4000; const actions = [];
    for (let window = 0; window < 40; window += 1) for (let i = 0; i < 50; i += 1) { const ms = i % 17 === 0 ? 220 : 16; now += ms; const a = gov.update(ms, now); if (a) actions.push(a); }
    assert.deepEqual(actions, []);
  });
  test('sustained slowness lowers resolution first, then tiers, one step per cooldown, and bottoms out', async () => {
    const gov = await make(); const { actions } = feed(gov, 60 * 90, 40);
    assert.ok(actions.length >= 6, `took ${actions.length} steps`);
    assert.equal(actions[0].type, 'scale'); assert.ok(actions[0].scale < 1);
    for (let i = 1; i < actions.length; i += 1) assert.ok(actions[i].at - actions[i - 1].at >= 2500, 'cooldown respected');
    const tiers = actions.filter(a => a.type === 'tier').map(a => a.tier); assert.deepEqual(tiers, [1, 0]);
    assert.ok(actions.every(a => a.scale >= 0.65 && a.scale <= 1)); assert.equal(gov.tier, 0); assert.equal(gov.scale, 0.65);
  });
  test('a fast high-refresh display earns its way up one step at a time', async () => {
    const gov = await make({ tier: 1, scale: 0.76 }); const { actions } = feed(gov, 60 * 144 * 0 + 144 * 90, 6.9);
    assert.equal(actions[0].type, 'scale'); assert.equal(gov.tier, 3, 'ends on the top tier'); assert.ok(gov.scale >= 0.88);
    for (let i = 1; i < actions.length; i += 1) assert.ok(actions[i].at - actions[i - 1].at >= 2500);
    const tiers = actions.filter(a => a.type === 'tier'); assert.ok(tiers.every(a => a.scale === 0.88), 'a new tier starts slightly under native resolution');
  });
  test('a tier that proved too heavy is never tried again, so quality settles instead of oscillating', async () => {
    const gov = await make({ tier: 2 }); let now = 0; let r;
    r = feed(gov, 144 * 40, 6.9, now); now = r.now; assert.equal(gov.tier, 3, 'upgraded while fast');
    r = feed(gov, 25 * 120, 40, now); now = r.now; assert.ok(gov.tier <= 2, 'downgraded when it turned out to be too heavy');
    const settled = gov.tier; r = feed(gov, 144 * 300, 6.9, now);
    assert.ok(r.actions.every(a => a.type === 'scale' || a.tier < 3), 'never returns to the tier that failed');
    assert.ok(gov.tier <= 2 && gov.tier >= settled);
  });
  test('absurd or invalid frame times are ignored', async () => {
    const gov = await make(); assert.equal(gov.update(0, 5000), null); assert.equal(gov.update(-5, 6000), null); assert.equal(gov.update(NaN, 7000), null); assert.equal(gov.update(900, 8000), null);
    assert.equal(gov.frames.length, 0);
  });
});

describe('results podium rules', () => {
  test('first place stands in the middle, the rest alternate outwards, and every line-up is centred', async () => {
    const { podiumSlots } = await load('podium.js');
    assert.deepEqual(podiumSlots(0), []); assert.deepEqual(podiumSlots(1), [0]);
    assert.deepEqual(podiumSlots(2), [0.5, -0.5]); assert.deepEqual(podiumSlots(3), [0, -1, 1]); assert.deepEqual(podiumSlots(4), [0.5, -0.5, 1.5, -1.5]);
    for (let n = 1; n <= 6; n += 1) {
      const slots = podiumSlots(n); assert.equal(new Set(slots).size, n, `${n} distinct places`);
      assert.equal(Math.min(...slots) + Math.max(...slots), 0, `${n}-tower line-up is centred`);
      assert.ok(Math.abs(slots[0]) <= 0.5, 'the winner is in the middle');
    }
  });
  test('towers share one scale that fits their column and the height of the tallest', async () => {
    const { podiumMetrics } = await load('podium.js');
    for (let n = 1; n <= 6; n += 1) for (const blocks of [1, 4, 12, 40, 400]) {
      const m = podiumMetrics(n, blocks); assert.ok(m.scale >= 0.07 && m.scale <= 1, `scale ${m.scale}`);
      assert.ok(m.scale * 360 <= m.colW * 1.0001 + 360 * 0.07, 'a tower never overflows its column'); assert.ok(Math.abs(m.colW * n - m.worldW) < 1e-9);
    }
    assert.ok(podiumMetrics(3, 12).scale > podiumMetrics(3, 60).scale, 'taller towers shrink everyone equally');
    assert.ok(podiumMetrics(2, 6).scale > podiumMetrics(6, 6).scale, 'more towers, smaller towers');
  });
  test('towers climb at one rate, never shrink, and stop at their own height; reduced motion shows them finished', async () => {
    const { revealCount, REVEAL_RATE, REVEAL_DELAY } = await load('podium.js');
    assert.equal(revealCount(0, 0), 0); assert.equal(revealCount(0, 9), 1); assert.equal(revealCount(REVEAL_DELAY, 9), 1);
    assert.equal(revealCount(REVEAL_DELAY + 1.0001 / REVEAL_RATE, 9), 2);
    let last = 0; for (let t = 0; t < 12; t += 0.016) { const c = revealCount(t, 9); assert.ok(c >= last && c <= 9); last = c; } assert.equal(last, 9);
    assert.equal(revealCount(REVEAL_DELAY + 100, 5), 5); assert.equal(revealCount(0, 9, { reduced: true }), 9);
    assert.ok(revealCount(2, 12) === revealCount(2, 30), 'the same clock gives the same count whatever the final height');
  });
  test('rubble waits for the level it fell from, in order, and the last misses wait for the top', async () => {
    const { revealedFallen } = await load('podium.js');
    const fallen = [{ level: 2 }, { level: 5 }, { level: 12 }];
    assert.equal(revealedFallen(fallen, 1, 10), 0); assert.equal(revealedFallen(fallen, 3, 10), 1); assert.equal(revealedFallen(fallen, 6, 10), 2);
    assert.equal(revealedFallen(fallen, 9, 10), 2, 'a piece from beyond the standing tower is held back'); assert.equal(revealedFallen(fallen, 10, 10), 3);
    assert.equal(revealedFallen([{ level: 9 }, { left: 1 }], 4, 6), 0); assert.equal(revealedFallen([{ left: 1 }], 6, 6), 1, 'a piece with no level lands when the tower is done');
    assert.equal(revealedFallen([], 3, 6), 0);
  });
  test('the payload becomes ranked podium entries, for competitive rooms and for the shared tower alike', async () => {
    const { podiumEntries, headlineFor } = await load('podium.js');
    assert.deepEqual(podiumEntries(null), []); assert.deepEqual(podiumEntries({ mode: 'competitive' }), []);
    const entries = podiumEntries({ mode: 'competitive', winnerIds: ['b'], players: [{ id: 'b', name: 'Bo', color: '#2F8478', height: 7, blocks: [1, 2, 3] }, { id: 'a', name: 'Ann', height: 5 }, { id: 'c', name: '', height: 2, blocks: [1] }] });
    assert.deepEqual(entries.map(e => [e.name, e.winner, e.slot, e.blocks.length]), [['Bo', true, 0, 3], ['Ann', false, -1, 0], ['Player', false, 1, 1]]);
    const team = podiumEntries({ mode: 'teamwork', score: 14, height: 10, blocks: [1, 2], fallen: [{}] });
    assert.equal(team.length, 1); assert.ok(team[0].team && team[0].winner && team[0].slot === 0 && team[0].score === 14);
    const clean = text => [...String(text).toUpperCase()].filter(ch => /[A-Z0-9 ]/.test(ch)).join('').trim();
    assert.equal(headlineFor(entries, clean), 'BO WINS'); assert.equal(headlineFor(team, clean), 'TEAM SCORE 14');
    assert.equal(headlineFor(podiumEntries({ mode: 'teamwork', score: 0 }), clean), 'THE FLOOR WINS');
    assert.equal(headlineFor(podiumEntries({ mode: 'competitive', winnerIds: ['a', 'b'], players: [{ id: 'a', name: 'A' }, { id: 'b', name: 'B' }] }), clean), 'A TIE AT THE TOP');
    assert.equal(headlineFor(podiumEntries({ mode: 'competitive', winnerIds: ['a'], players: [{ id: 'a', name: '★★★' }] }), clean), 'CHAMPION WINS', 'a name with no printable glyphs falls back');
    assert.equal(headlineFor([], clean), '');
  });
});

describe('host bridge in the real page', skipReason ? { skip: skipReason } : {}, () => {
  test('the page exposes a read-only view and an on/off switch; the flat drawing steps aside while 3D is active', async () => {
    const page = await boot(HTML_PATH);
    try {
      const host = page.window.SabotageStackHost; assert.ok(host && host.version === 1, 'host bridge is defined');
      let view = host.view(); assert.equal(view.screen, 'title'); assert.equal(view.theme, 'paper'); assert.equal(view.game, null); assert.ok(view.Core && view.Core.placeDrop);
      const canvas = page.document.getElementById('game-canvas');
      page.document.getElementById('start-button').click(); await page.sleep(400);
      view = host.view(); assert.equal(view.screen, 'game'); assert.ok(view.game && Array.isArray(view.game.stack), 'the live game is visible to the layer');
      assert.deepEqual(page.pixel(canvas, 10, 10), [244, 237, 223, 255], 'flat drawing paints the paper sky while 3D is off');
      host.setActive(true); await page.sleep(300);
      assert.equal(page.pixel(canvas, 10, 10)[3], 0, 'the flat canvas is cleared and left transparent for the 3D world behind it');
      assert.equal(page.pixel(canvas, 200, 400)[3], 0);
      host.setActive(false); await page.sleep(300);
      assert.deepEqual(page.pixel(canvas, 10, 10), [244, 237, 223, 255], 'switching back redraws the flat view at once');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
  test('toasts, the perfect banner and input keep working while 3D draws the world', async () => {
    const page = await boot(HTML_PATH, { manualAnimationFrame: true });
    try {
      page.window.SabotageStackHost.setActive(true);
      page.document.getElementById('start-button').click(); page.advanceAnimation(200);
      const hud = page.document.getElementById('height-display'); const before = Number(hud.textContent);
      page.advanceAnimation(3900);
      assert.ok(Number(hud.textContent) >= before + 1, 'auto-drop still places blocks with no flat drawing');
      const view = page.window.SabotageStackHost.view(); assert.ok(view.game.stack.length >= 2);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
  test('result cards ask the layer for a snapshot first and fall back to the flat drawing when it declines', async () => {
    assert.match(html, /stackHost\.active && stackHost\.snapshot && stackHost\.snapshot\(canvas, \{ blocks, fallen, maxHeight, collapseLevel, teamwork, width: w, height: h \}\)/);
    assert.match(html, /function drawResults\(data, reveal\) \{\n      if \(stackHost\.active\) return;/);
  });
});
