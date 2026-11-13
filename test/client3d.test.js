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
  test('a clicked sabotage is never lost: it survives a toppling tower, decides an open vote, and takes over from a running effect', async () => {
    const { AttractDirector } = await load('hero.js'); const { rng } = await load('util.js');
    const run = (d, until, limit = 60 * 90) => { for (let i = 0; i < limit; i += 1) { if (until(d)) return true; d.update(1 / 60); } return until(d); };
    for (const seed of [1, 2, 3, 5, 8]) {
      // 1. while the tower topples (it used to be wiped by the reset that follows)
      const a = new AttractDirector(Core, rng(seed)); assert.ok(run(a, d => d.stage === 'collapse'), `seed ${seed}: reaches a collapse`);
      const pickA = Core.SABOTAGE_IDS.find(id => id !== a.effect?.id); a.force(pickA);
      assert.ok(run(a, d => d.stage === 'stack' && d.blocks.length === 1), 'the new tower is up'); const freshId = a.id;
      assert.ok(run(a, d => d.effect && d.effect.id === pickA, 60 * 3), `seed ${seed}: ${pickA} plays on the new tower (forced=${a.forced})`); assert.equal(a.id, freshId, 'on the very tower that replaced the toppled one');
      // 2. while chat is voting: the vote goes the clicked way, with no duplicate options
      const b = new AttractDirector(Core, rng(seed)); assert.ok(run(b, d => d.ballot), 'a vote opens');
      const pickB = Core.SABOTAGE_IDS.find(id => id !== b.ballot.winner); b.force(pickB);
      assert.equal(b.ballot.winner, pickB); assert.equal(b.ballot.options[0], pickB); assert.equal(new Set(b.ballot.options).size, 3, 'three different options'); assert.equal(b.forced, null, 'the vote consumed it');
      assert.ok(run(b, d => d.effect, 60 * 5)); assert.equal(b.effect.id, pickB, 'the vote ends on the clicked sabotage');
      // 2b. the clicked sabotage is one of the other two options: it swaps places with the winner
      const c = new AttractDirector(Core, rng(seed)); run(c, d => d.ballot); const other = c.ballot.options[2]; const was = c.ballot.winner; c.force(other);
      assert.deepEqual([c.ballot.options[0], c.ballot.options[2], new Set(c.ballot.options).size], [other, was, 3]);
      // 3. while another sabotage is running: that one winds down within a moment and the clicked one follows
      const e = new AttractDirector(Core, rng(seed)); assert.ok(run(e, d => d.effect), 'an effect starts'); const running = e.effect.id;
      const pickE = Core.SABOTAGE_IDS.find(id => id !== running); e.force(pickE);
      assert.ok(run(e, d => d.effect && d.effect.id === pickE, 60 * 2), `seed ${seed}: ${pickE} follows ${running} within two seconds`);
    }
    // nothing asked for, nothing changes (and clicking twice is harmless: the later click wins)
    const quiet = new AttractDirector(Core, rng(4)); assert.equal(quiet.forced, null); quiet.force('turbo'); quiet.force('drunk'); assert.equal(quiet.forced, 'drunk');
  });
});

describe('home view: turning the scene (orbit) and the hover field', () => {
  const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;
  const make = async (options = {}) => { const { OrbitController } = await load('orbit.js'); return new OrbitController(options); };
  // a drag of `steps` samples, `dx` / `dy` pixels apart and `dt` seconds apart; returns the clock
  const drag = (o, { steps = 10, dx = 0, dy = 0, dt = 0.016, x = 500, y = 300, t = 0, opts } = {}) => {
    o.begin(x, y, t);
    for (let i = 1; i <= steps; i += 1) { t += dt; o.move(x + dx * i, y + dy * i, t, opts); }
    return t;
  };

  test('dragging turns the scene proportionally, to the right with the pointer, and 360 degrees is reachable while dragging', async () => {
    const o = await make(); const t = drag(o, { steps: 10, dx: 50 }); // 500 px to the right
    assert.ok(o.dragging && o.rotated);
    assert.ok(near(o.yaw, -500 * o.yawPerPixel), `yaw ${o.yaw}`);
    const wheel = await make(); drag(wheel, { steps: 40, dx: -50 }); // 2000 px to the left in one continuous drag
    assert.ok(wheel.yaw > Math.PI * 2, `a long drag keeps turning past a full circle (yaw ${wheel.yaw.toFixed(2)})`);
    o.end(t + 0.5); assert.ok(!o.dragging);
  });
  test('pitch is clamped, a finger turns the scene sideways only, and non-finite input is ignored', async () => {
    const o = await make(); drag(o, { steps: 50, dy: 100 });
    assert.ok(near(o.pitch, o.maxPitch), 'dragging down stops at the top-down limit'); drag(o, { steps: 100, dy: -100 });
    assert.ok(near(o.pitch, o.minPitch), 'dragging up stops at the lowest view');
    const touch = await make(); drag(touch, { steps: 10, dx: 30, dy: 80, opts: { pitch: false } });
    assert.equal(touch.pitch, 0, 'a vertical swipe stays free to scroll the page'); assert.ok(touch.yaw < -1);
    const bad = await make(); bad.begin(NaN, 5, 0); assert.ok(!bad.dragging);
    bad.begin(10, 10, 0); assert.equal(bad.move(NaN, 10, 0.1), false); assert.equal(bad.yaw, 0);
  });
  test('letting go while moving flings the scene and friction stops it; pausing first, or Reduced Motion, leaves it where it is', async () => {
    const o = await make(); const t = drag(o, { steps: 8, dx: 20 }); const yawAtRelease = o.yaw; o.end(t + 0.01);
    assert.ok(Math.abs(o.vyaw) > 0.5 && Math.abs(o.vyaw) <= o.maxSpeed, `fling speed ${o.vyaw}`);
    for (let i = 0; i < 60 * 8; i += 1) o.update(1 / 60);
    assert.equal(o.vyaw, 0); assert.ok(o.yaw < yawAtRelease - 0.3, 'it coasted on in the same direction'); assert.ok(!o.moving);
    const paused = await make(); const tp = drag(paused, { steps: 8, dx: 20 }); paused.end(tp + 0.4); assert.equal(paused.vyaw, 0);
    const reduced = await make(); reduced.setReduced(true); const tr = drag(reduced, { steps: 8, dx: 20 }); reduced.end(tr + 0.01); assert.equal(reduced.vyaw, 0);
    const fast = await make(); const tf = drag(fast, { steps: 8, dx: 400, dt: 0.004 }); fast.end(tf + 0.001); assert.ok(Math.abs(fast.vyaw) <= fast.maxSpeed, 'a violent flick is capped');
  });
  test('reset and the step buttons ease to where they are going by the shortest way round, and land exactly', async () => {
    const o = await make(); o.yaw = 5.9; o.pitch = 0.5; o.reset(0.5);
    for (let i = 0; i < 60; i += 1) o.update(1 / 60);
    assert.ok(near(o.yaw, 0, 1e-9) && near(o.pitch, 0, 1e-9) && !o.rotated && !o.tween, `ended at yaw ${o.yaw}`);
    const turn = await make(); turn.rotateBy(Math.PI / 4); turn.rotateBy(Math.PI / 4); // pressed twice before it lands
    for (let i = 0; i < 90; i += 1) turn.update(1 / 60);
    assert.ok(near(turn.yaw, Math.PI / 2, 1e-9), 'two quick presses add up to a quarter turn');
    const shortReset = await make(); shortReset.yaw = 6.0; shortReset.reset(1); shortReset.update(0.5);
    assert.ok(shortReset.yaw > 6.0 && shortReset.yaw <= Math.PI * 2 + 1e-9, 'from just short of a full circle it finishes the circle instead of unwinding');
    const reduced = await make(); reduced.setReduced(true); reduced.yaw = 2; reduced.reset(0.9); for (let i = 0; i < 20; i += 1) reduced.update(1 / 60);
    assert.ok(!reduced.tween && near(reduced.yaw, 0, 1e-9), 'Reduced Motion shortens the tween');
  });
  test('snap goes straight back to the default view, and grabbing mid-tween takes over', async () => {
    const calm = await make(); calm.reset(); assert.equal(calm.tween, null, 'resetting a view that is already the default does nothing (no needless ease)');
    const o = await make(); const t = drag(o, { steps: 6, dx: 40 }); o.end(t + 0.01); o.snap();
    assert.deepEqual([o.yaw, o.pitch, o.vyaw, o.vpitch, o.dragging, o.tween], [0, 0, 0, 0, false, null]);
    o.yaw = 3; o.reset(2); o.update(0.2); assert.ok(o.tween); o.begin(10, 10, 5); assert.equal(o.tween, null, 'a new drag cancels the ease');
  });
  test('the sky and backdrop mapping is periodic (no jump after a full turn or a reset), monotonic and leads with the camera', async () => {
    const { backdropYaw, BACKDROP_DRIFT, wrapAngle } = await load('orbit.js');
    for (let yaw = -10; yaw <= 10; yaw += 0.37) {
      assert.ok(near(backdropYaw(yaw + Math.PI * 2) - backdropYaw(yaw), Math.PI * 2, 1e-9), `periodic at ${yaw}`);
      assert.ok(backdropYaw(yaw + 0.01) > backdropYaw(yaw), 'never runs backwards');
      assert.ok(Math.abs(backdropYaw(yaw) - yaw) <= BACKDROP_DRIFT + 1e-12);
      assert.ok(near(wrapAngle(yaw), Math.atan2(Math.sin(yaw), Math.cos(yaw)), 1e-9));
    }
    assert.equal(backdropYaw(0), 0, 'the default view is untouched');
  });

  test('the hover field wakes up while the pointer is on the scene, settles when it leaves, and ignores a pointer that is busy dragging', async () => {
    const { HoverField } = await load('hover.js'); const h = new HoverField(); const point = { x: 10, y: 20, z: 5 };
    h.update(1 / 60, { point, speed: 0 }); assert.ok(h.entered && h.inside); assert.equal(h.enterX, 10);
    h.update(1 / 60, { point, speed: 0 }); assert.ok(!h.entered, 'entered lasts a single frame');
    for (let i = 0; i < 60; i += 1) h.update(1 / 60, { point, speed: 0 });
    assert.ok(h.energy > 0.97 && h.dwell > 0.9, `energy ${h.energy} dwell ${h.dwell}`);
    h.update(1 / 60, { point, speed: 900 }); assert.ok(h.dwell < 1, 'a fast pointer is not a patient one');
    h.update(1 / 60, { point: null }); assert.ok(!h.inside && h.energy < 1);
    for (let i = 0; i < 60 * 4; i += 1) h.update(1 / 60, { point: null }); assert.equal(h.energy, 0);
    const busy = new HoverField(); for (let i = 0; i < 30; i += 1) busy.update(1 / 60, { point, speed: 0, blocked: true }); assert.equal(busy.energy, 0, 'dragging keeps the scene calm');
    const bad = new HoverField(); bad.update(0, { point }); bad.update(NaN, { point }); assert.equal(bad.energy, 0);
  });
  test('the sparkle trail follows the pointer speed: nothing when still or under Reduced Motion, a stream when fast', async () => {
    const { HoverField } = await load('hover.js'); const h = new HoverField(); const point = { x: 0, y: 0 };
    h.update(1 / 60, { point });
    const total = (speed, reduced) => { let n = 0; for (let i = 0; i < 120; i += 1) n += h.sparks(1 / 60, speed, reduced); return n; };
    assert.equal(total(0, false), 0); assert.equal(total(60, false), 0);
    const slow = total(400, false); const fast = total(2000, false);
    assert.ok(slow > 5 && fast > slow && fast <= 4 * 120, `${slow} then ${fast}`);
    assert.equal(total(2000, true), 0); const away = new HoverField(); assert.equal(away.sparks(1 / 60, 2000, false), 0, 'no trail while the pointer is elsewhere');
  });
  test('offsetFromPointer measures across the screen, whichever way the camera is turned', async () => {
    const { offsetFromPointer } = await load('hover.js'); const out = { dx: 0, dy: 0 };
    const front = { point: { x: 100, y: 50, z: 0 }, right: { x: 1, y: 0, z: 0 }, up: { x: 0, y: 1, z: 0 } };
    assert.deepEqual(offsetFromPointer(front, 130, 20, 99, out), { dx: 30, dy: -30 }, 'depth is ignored: the plane faces the camera');
    const side = { point: { x: 0, y: 0, z: 0 }, right: { x: 0, y: 0, z: -1 }, up: { x: 0, y: 1, z: 0 } }; // camera turned a quarter circle
    assert.deepEqual(offsetFromPointer(side, 200, 10, -40, out), { dx: 40, dy: 10 });
  });

  test('a keyed popup is rebuilt when its words change (the hover name always matches the icon under the pointer) and revived when they do not', async () => {
    const { Popups } = await load('popups.js'); const { paletteFor } = await load('palette.js'); const popups = new Popups('paper', paletteFor('paper'));
    const show = text => popups.show({ key: 'hover', text, position: [0, 0, 0], style: 'hold', life: 1 });
    const first = show('TURBO'); popups.hide('hover'); const same = show('TURBO');
    assert.equal(same, first, 'same words: the dying label comes back'); assert.equal(first.dying, false);
    popups.hide('hover'); const other = show('MAGNET');
    assert.notEqual(other, first); assert.equal(popups.items.filter(i => i.key === 'hover').length, 1, 'the stale label is gone, not left behind');
    assert.equal(popups.items.find(i => i.key === 'hover').text, 'MAGNET');
    popups.faceYaw = 1.2; popups.update(0.5, 1); assert.ok(near(other.mesh.rotation.y, 1.2 + Math.sin(0.8 + other.seed) * 0.16, 1e-9), 'labels face an orbited camera');
    popups.clear();
  });
  test('the on-screen turn controls: buttons, labels, hint that retires for good after the first drag, tidy removal', async () => {
    const { createOrbitHud, hintSeen } = await load('orbit-hud.js'); const page = await boot(HTML_PATH);
    try {
      const store = new Map(); const storage = { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, v) };
      const turns = []; let resets = 0;
      const hud = createOrbitHud({ doc: page.document, storage, onTurn: d => turns.push(d), onReset: () => { resets += 1; } });
      assert.ok(hud && page.document.getElementById('title-screen').contains(hud.root), 'lives inside the title screen, so it is hidden with it');
      const buttons = [...hud.root.querySelectorAll('button')]; assert.deepEqual(buttons.map(b => b.dataset.orbit), ['left', 'reset', 'right']);
      assert.ok(buttons.every(b => b.type === 'button' && b.getAttribute('aria-label') && b.title), 'every control is named for assistive tech');
      buttons[0].click(); buttons[2].click(); buttons[1].click();
      assert.deepEqual(turns, [-Math.PI / 4, Math.PI / 4]); assert.equal(resets, 1);
      assert.ok(!hud.root.classList.contains('is-quiet') && !hintSeen(storage));
      hud.fade(); assert.ok(hud.root.classList.contains('is-quiet') && !hintSeen(storage), 'fading by itself is not remembered');
      hud.quiet(); assert.ok(hintSeen(storage), 'a real drag is');
      hud.setRotated(true); assert.ok(hud.root.classList.contains('is-rotated')); hud.place(300.2, 400.2); assert.equal(hud.root.style.left, '300px');
      hud.dispose(); assert.equal(page.document.getElementById('orbit-hud'), null);
      const again = createOrbitHud({ doc: page.document, storage }); assert.ok(again.root.classList.contains('is-quiet'), 'a returning visitor never sees the hint again'); again.dispose();
      assert.equal(createOrbitHud({ doc: { getElementById: () => null } }), null, 'no title screen, no controls');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
  test('the page styles the controls, keeps pinch-zoom on the title screen and suppresses text selection only while dragging', async () => {
    assert.match(html, /html\.has-3d #title-screen \{ touch-action: pan-y pinch-zoom; \}/);
    assert.match(html, /html\.orbiting, html\.orbiting \* \{[^}]*user-select: none !important/);
    assert.match(html, /\.orbit-hud \{ position: fixed;[^}]*pointer-events: none;/);
    assert.match(html, /\.orbit-hud > \.orbit-btn \{ pointer-events: auto; \}/);
    assert.match(html, /\.orbit-hud\.is-rotated \.orbit-btn\[data-orbit="reset"\] \{ display: inline-flex; \}/);
  });
});

describe('run-once-soon latch (icon baking)', () => {
  // a deterministic clock: timers fire in order as time is advanced
  const makeClock = () => {
    let now = 0; let nextId = 1; const timers = new Map();
    return {
      timers: { set: (fn, ms) => { const id = nextId++; timers.set(id, { at: now + ms, fn }); return id; }, clear: id => { timers.delete(id); } },
      advance(ms) { const end = now + ms; for (;;) { const due = [...timers.entries()].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0]; if (!due) break; timers.delete(due[0]); now = due[1].at; due[1].fn(); } now = end; },
      get now() { return now; }, get waiting() { return timers.size; },
    };
  };
  test('asked for on every frame, it still runs: once, 160 ms after the first request (a debounce would starve for ever at 60 fps)', async () => {
    const { createOnceSoon } = await load('once-soon.js'); const clock = makeClock(); const ran = []; let baked = false;
    const latch = createOnceSoon(() => { ran.push(clock.now); baked = true; }, 160, clock.timers);
    // the page's pattern: every frame asks until the work has happened (two seconds of 16 ms frames)
    let scheduled = 0; for (let frame = 0; frame < 120; frame += 1) { if (!baked && latch.request()) scheduled += 1; clock.advance(16); }
    assert.deepEqual(ran, [160], 'ran exactly once, 160 ms after the first request'); assert.equal(scheduled, 1); assert.equal(clock.waiting, 0);
    // asking even after it has run is allowed: it simply keeps running, at most once per delay, never starved
    const clock3 = makeClock(); let again = 0; const keen = createOnceSoon(() => { again += 1; }, 160, clock3.timers);
    for (let frame = 0; frame < 120; frame += 1) { keen.request(); clock3.advance(16); } assert.ok(again >= 10 && again <= 12, `ran ${again} times in 1.9 s`);
    // the restarting kind, for contrast: the same traffic never fires
    const clock2 = makeClock(); let fired = 0; let handle = null;
    const debounce = () => { if (handle !== null) clock2.timers.clear(handle); handle = clock2.timers.set(() => { fired += 1; }, 160); };
    for (let frame = 0; frame < 120; frame += 1) { debounce(); clock2.advance(16); } assert.equal(fired, 0, 'a debounce is starved by per-frame requests');
  });
  test('after it has run a new request schedules afresh, a cancelled one never runs, and the work may request again', async () => {
    const { createOnceSoon } = await load('once-soon.js'); const clock = makeClock(); let runs = 0; let latch;
    latch = createOnceSoon(() => { runs += 1; }, 100, clock.timers);
    assert.equal(latch.pending, false); assert.equal(latch.request(), true); assert.equal(latch.pending, true); assert.equal(latch.request(), false);
    clock.advance(99); assert.equal(runs, 0); clock.advance(1); assert.equal(runs, 1); assert.equal(latch.pending, false);
    assert.equal(latch.request(), true); latch.cancel(); assert.equal(latch.pending, false); clock.advance(500); assert.equal(runs, 1, 'cancelled');
    latch.cancel(); // cancelling with nothing waiting is harmless
    assert.equal(latch.request(), true); clock.advance(100); assert.equal(runs, 2, 'and it can be used again after a cancel');
    let again = 0; const self = createOnceSoon(() => { again += 1; if (again < 3) self.request(); }, 10, clock.timers); self.request(); clock.advance(100); assert.equal(again, 3);
  });
  test('works with the real timers (and a timer id that is falsy is still a pending timer)', async () => {
    const { createOnceSoon } = await load('once-soon.js'); let runs = 0; const latch = createOnceSoon(() => { runs += 1; }, 5);
    latch.request(); latch.request(); await new Promise(r => setTimeout(r, 40)); assert.equal(runs, 1);
    const zero = createOnceSoon(() => { runs += 10; }, 1, { set: () => 0, clear() {} }); assert.equal(zero.request(), true); assert.equal(zero.request(), false, 'id 0 counts as pending');
  });
  test('the page-side boot uses the latch for its icon baking, and always lets go of it when 3D is switched off', async () => {
    const source = fs.readFileSync(path.join(ROOT, 'client3d', 'index.js'), 'utf8');
    assert.match(source, /import \{ createOnceSoon \} from '\.\/once-soon\.js'/);
    assert.match(source, /const iconBake = createOnceSoon\(/); assert.match(source, /iconBake\.cancel\(\)/);
    assert.doesNotMatch(source, /clearTimeout\(iconTimer\)/, 'no restarting debounce on the per-frame path');
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
