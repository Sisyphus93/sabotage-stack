'use strict';
// Peekaboo in the 3D tower. The block has to be really gone while it is hidden, whenever that block was created, in every world, and
// nothing may mark the place where it is. (It used to fail "sometimes": see the first test. A ring and sparks also gave the hidden block away.)
// Everything here is the render layer: the rules (peekabooOpacity), the protocol and the solo logic are covered by their own tests and untouched.
const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'sabotage-stack.html'), 'utf8');
const towerSource = fs.readFileSync(path.join(ROOT, 'client3d', 'tower.js'), 'utf8');
const effectsSource = fs.readFileSync(path.join(ROOT, 'client3d', 'effects3d.js'), 'utf8');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));

const THEMES = ['paper', 'sunset', 'primetime'];
const CYCLE = 0.7; // Core.peekabooOpacity repeats every 0.7 s: 0.31 s visible, a 40 ms fade, 0.35 s hidden

// A tower needs a canvas only for the grain of the paper blocks (and the name plaques): a stub of one is enough, no GL is involved.
let restoreDocument = null;
before(() => {
  const had = Object.prototype.hasOwnProperty.call(globalThis, 'document'); const previous = globalThis.document;
  const context = new Proxy({}, { get: (_, key) => (key === 'createImageData' ? (w, h) => ({ width: w, height: h, data: new Uint8ClampedArray(w * h * 4) }) : key === 'measureText' ? () => ({ width: 10 }) : () => {}), set: () => true });
  globalThis.document = { createElement: () => ({ width: 0, height: 0, style: {}, getContext: () => context }) };
  restoreDocument = () => { if (had) globalThis.document = previous; else delete globalThis.document; };
});
after(() => { if (restoreDocument) restoreDocument(); });

// One tower with one block on the base and a block in flight, driven the way the stage drives it (tower.sync once per frame).
async function makeRig(theme) {
  const { BlockKit } = await load('blocks.js'); const { Tower } = await load('tower.js');
  const emitted = []; const fx = { sparks: { emit: options => emitted.push(options), burst() {} }, dust() {} };
  const tower = new Tower(new BlockKit(theme), fx, {});
  const state = (effect, extra = {}) => ({ id: 'solo', blocks: [Core.makeBase()], fallen: [], moving: { left: 90, width: 180, level: 1, color: '#2F8478' }, effect, helpers: Core, phase: 'playing', collapsed: false, reduced: false, ...extra });
  const peek = elapsed => ({ id: 'peekaboo', remaining: Math.max(0, 5 - elapsed), duration: 5, elapsed });
  let clock = 0; const frame = (s, dt = 0.005) => { clock += dt; tower.sync(s, dt, clock); return tower.mover; };
  return { tower, emitted, state, peek, frame };
}

// What the renderer will draw of a subtree: three skips an invisible object and everything under it.
const drawn = root => { const list = []; root.traverseVisible(o => { if (o.isMesh || o.isPoints || o.isLine || o.isLineSegments) list.push(o); }); return list; };
const withRandom = (value, fn) => { const real = Math.random; Math.random = () => value; try { return fn(); } finally { Math.random = real; } };

describe('Peekaboo in 3D: the block is really gone while it is hidden', () => {
  test('the moving block is born transparent, so its shader can fade whenever the effect begins (three never rebuilds it when the flag flips later)', async () => {
    // Root cause of the "sometimes it fails" bug: three compiles `transparent: false` into an OPAQUE shader (alpha forced to 1) and does not recompile
    // when the flag is flipped afterwards, so a block that was first drawn while visible could never fade. Hence: transparent from the first frame on.
    for (const theme of THEMES) {
      for (const [label, firstElapsed] of [['spawned in the visible half', 0.05], ['spawned in the fade', 0.33], ['spawned in the hidden half', 0.5]]) {
        const { tower, state, peek, frame } = await makeRig(theme);
        const mover = frame(state(peek(firstElapsed)));
        assert.equal(tower.moverMaterial.transparent, true, `${theme}, ${label}: transparent when first drawn`);
        for (let t = firstElapsed; t < firstElapsed + 2.1; t += 0.005) {
          frame(state(peek(t)));
          assert.equal(tower.moverMaterial.transparent, true, `${theme}, ${label}: still transparent at ${t.toFixed(3)} s`);
          assert.equal(tower.mover, mover, 'one block stays one mesh across the cycle (nothing rebuilds it on the way)');
        }
      }
    }
  });

  test('visible exactly when the rules draw it (the flat view draws a block above 1 % opacity), opacity follows the rules, in every world and over several cycles', async () => {
    const { MOVER_MIN_ALPHA } = await load('tower.js');
    assert.equal(MOVER_MIN_ALPHA, 0.01, 'the same threshold as the flat renderer');
    assert.equal((html.match(/if \(alpha > 0\.01\) \{/g) || []).length, 2, 'the page still draws by that rule (column view and main board)');
    for (const theme of THEMES) {
      const { tower, state, peek, frame } = await makeRig(theme); let hiddenFrames = 0; let visibleFrames = 0; let fadeFrames = 0;
      for (let t = 0; t < 3 * CYCLE + 0.1; t += 0.005) {
        const mover = frame(state(peek(t))); const alpha = Core.peekabooOpacity(t); const mat = tower.moverMaterial;
        assert.equal(mover.visible, alpha > 0.01, `${theme} t=${t.toFixed(3)}: visibility follows the rule`);
        assert.ok(Math.abs(mat.opacity - alpha) < 1e-12, `${theme} t=${t.toFixed(3)}: opacity ${mat.opacity} vs rule ${alpha}`);
        assert.equal(mat.depthWrite, alpha >= 0.999, 'a translucent block does not write depth');
        if (alpha <= 0.01) { hiddenFrames += 1; assert.equal(drawn(tower.root).includes(mover), false, `${theme} t=${t.toFixed(3)}: the block is not drawn`); }
        else if (alpha >= 0.999) visibleFrames += 1; else fadeFrames += 1;
      }
      assert.ok(hiddenFrames > 100 && visibleFrames > 100 && fadeFrames > 3, `${theme}: the sweep covered every phase (${hiddenFrames} hidden, ${visibleFrames} visible, ${fadeFrames} fading)`);
    }
  });

  test('a block spawned after a drop hides just the same, drop after drop (a fresh mesh and material each time)', async () => {
    for (const theme of THEMES) {
      const { tower, state, peek, frame } = await makeRig(theme); let t = 0; let movers = new Set();
      for (let drop = 0; drop < 12; drop += 1) {
        // every drop starts a block of another width and colour somewhere else in the cycle, so the tower rebuilds the mesh
        const moving = { left: 20 + drop * 7, width: 200 - drop * 11, level: 1 + drop, color: ['#2F8478', '#E3A33B', '#C8503C', '#6B7FA3'][drop % 4] };
        const blocks = [Core.makeBase()]; t += 0.05 + drop * 0.137;
        const mover = frame(state(peek(t), { moving, blocks })); movers.add(mover);
        assert.equal(tower.moverMaterial.transparent, true, `${theme} drop ${drop}`);
        for (let k = 0; k < 160; k += 1) { t += 0.005; const m = frame(state(peek(t), { moving, blocks })); assert.equal(m.visible, Core.peekabooOpacity(t) > 0.01, `${theme} drop ${drop} t=${t.toFixed(3)}`); }
      }
      assert.ok(movers.size >= 6, `${theme}: the sweep really did rebuild the block (${movers.size} different meshes)`);
    }
  });

  test('between drops there is no block, and the next one comes back visible or hidden as the rules say (it is never stuck either way)', async () => {
    for (const theme of THEMES) {
      const { tower, state, peek, frame } = await makeRig(theme);
      frame(state(null)); assert.equal(tower.mover.visible, true, `${theme}: the first block of the round is simply there`);
      for (const [label, elapsed, shown] of [['in the visible half', 0.1, true], ['in the hidden half', 0.5, false], ['in the visible half again', 0.75, true]]) {
        frame(state(peek(elapsed), { moving: null }));
        assert.equal(tower.mover.visible, false, `${theme}: nothing is drawn while no block is moving`);
        frame(state(peek(elapsed + 0.02)));
        assert.equal(tower.mover.visible, shown, `${theme}: the next block starts ${label}`);
        assert.equal(tower.mover.visible, Core.peekabooOpacity(elapsed + 0.02) > 0.01);
      }
      frame(state(null, { moving: null })); frame(state(null));
      assert.equal(tower.mover.visible, true, `${theme}: and with no sabotage a new block is simply there`);
    }
  });

  test('Sunset: the outline of the block goes with it, and fades with it', async () => {
    const { tower, state, peek, frame } = await makeRig('sunset');
    const mover = frame(state(null)); const edges = mover.userData.edges;
    assert.ok(edges && edges.parent === mover, 'the Sunset block has an outline, a child of the block itself');
    assert.equal(edges.material.opacity, 0.85, 'a plain block keeps its full outline');
    for (const [elapsed, alpha] of [[0.2, 1], [0.33, 0.5], [0.45, 0]]) {
      frame(state(peek(elapsed)));
      assert.ok(Math.abs(Core.peekabooOpacity(elapsed) - alpha) < 1e-9);
      assert.ok(Math.abs(edges.material.opacity - 0.85 * alpha) < 1e-9, `outline opacity at alpha ${alpha}`);
      assert.equal(drawn(tower.root).includes(edges), alpha > 0.01, `the outline is drawn only while the block is (alpha ${alpha})`);
    }
    frame(state(null)); assert.equal(edges.material.opacity, 0.85, 'it comes back in full when the sabotage ends');
  });

  test('nothing marks the hidden block: no ring, no sparks, nothing from the effect rig, while the effect runs', async () => {
    for (const theme of THEMES) {
      const { tower, emitted, state, peek, frame } = await makeRig(theme);
      // Math.random pinned low: the old marker emitted a spark on 35 % of the frames with alpha below one half, now it would do so on every one of them
      withRandom(0, () => { for (let t = 0; t < 3 * CYCLE; t += 0.005) frame(state(peek(t))); });
      assert.equal(emitted.length, 0, `${theme}: the effect emitted no sparks`);
      assert.equal(tower.rig.built.size, 0, `${theme}: the effect rig built nothing for Peekaboo`);
      assert.equal(tower.rig.active, null, `${theme}: and has nothing active`);
      assert.deepEqual(drawn(tower.rig.group), [], `${theme}: nothing of the effect rig is drawn`);
      // the whole picture: compared with the same tower and no sabotage, a hidden block takes the block (and its outline) away and adds nothing
      frame(state(null)); const plain = new Set(drawn(tower.root));
      assert.ok(plain.has(tower.mover), 'sanity: the block is drawn when nothing is going on');
      let hiddenFrames = 0;
      for (let t = 0; t < CYCLE; t += 0.005) {
        frame(state(peek(t))); if (Core.peekabooOpacity(t) !== 0) continue; hiddenFrames += 1;
        const now = new Set(drawn(tower.root));
        assert.deepEqual([...now].filter(o => !plain.has(o)), [], `${theme} t=${t.toFixed(3)}: nothing is drawn that was not drawn without the sabotage`);
        assert.ok([...plain].filter(o => !now.has(o)).includes(tower.mover), `${theme} t=${t.toFixed(3)}: and the block is among what is gone`);
      }
      assert.ok(hiddenFrames > 50, `${theme}: enough hidden frames were checked (${hiddenFrames})`);
    }
    assert.equal(/\n\s*peekaboo\s*\(rig\)\s*\{/.test(effectsSource), false, 'effects3d.js has no Peekaboo builder (a ring at the block made it far too easy)');
  });

  test('when the sabotage ends the block is back in full, and solid again (it keeps its transparent shader)', async () => {
    for (const theme of THEMES) {
      const { tower, state, peek, frame } = await makeRig(theme);
      frame(state(peek(0.5))); assert.equal(tower.mover.visible, false);
      const mover = frame(state(null)); const mat = tower.moverMaterial;
      assert.equal(mover.visible, true); assert.equal(mat.opacity, 1); assert.equal(mat.depthWrite, true); assert.equal(mat.transparent, true);
      assert.equal(mover.castShadow, true, 'its shadow is back as well');
    }
  });

  test('Reduced Motion keeps the block on screen at every moment of the cycle (the sabotage is not offered then, and never flickers if it is forced)', async () => {
    assert.ok(Core.REDUCED_MOTION_EXCLUDED_IDS.includes('peekaboo'));
    for (const theme of THEMES) {
      const { tower, emitted, state, peek, frame } = await makeRig(theme);
      for (let t = 0; t < 2 * CYCLE; t += 0.005) { const mover = frame(state(peek(t), { reduced: true })); assert.equal(mover.visible, true, `${theme} t=${t.toFixed(3)}`); assert.equal(tower.moverMaterial.opacity, 1); }
      assert.equal(emitted.length, 0);
    }
  });

  test('every other sabotage leaves the block solid and on screen (only Peekaboo hides it), and the whole set runs in every world', async () => {
    for (const theme of THEMES) {
      for (const id of Core.SABOTAGE_IDS.filter(item => item !== 'peekaboo')) {
        const { tower, state, frame } = await makeRig(theme);
        for (let t = 0; t < 1.4; t += 0.05) {
          const mover = frame(state({ id, remaining: 5 - t, duration: 5, elapsed: t, spotlightSide: 1, tiltDirection: 1 }));
          assert.equal(mover.visible, true, `${theme}/${id} t=${t.toFixed(2)}`); assert.equal(tower.moverMaterial.opacity, 1, `${theme}/${id}`); assert.equal(tower.moverMaterial.transparent, true);
        }
      }
    }
  });

  test('the block is made transparent once, where it is created: nothing flips the flag per frame (that is what broke the effect)', () => {
    const writes = towerSource.match(/\.transparent\s*=\s*[^;]+;/g) || [];
    assert.deepEqual(writes, ['.transparent = true;'], 'the only write to a block\'s transparent flag in tower.js is the one at its creation');
    assert.ok(/this\.moverMaterial\.transparent = true;/.test(towerSource));
  });
});
