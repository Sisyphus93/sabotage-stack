'use strict';
// The centre reference (F-018): a small tick on the front of the top block, at its centre, while a block is moving. It is render only;
// the perfect window it helps the player aim for is the shared rule and is covered elsewhere.
const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));
const THEMES = ['paper', 'sunset', 'primetime'];

let restoreDocument = null;
before(() => {
  const had = Object.prototype.hasOwnProperty.call(globalThis, 'document'); const previous = globalThis.document;
  const context = new Proxy({}, { get: (_, key) => (key === 'createImageData' ? (w, h) => ({ width: w, height: h, data: new Uint8ClampedArray(w * h * 4) }) : key === 'measureText' ? () => ({ width: 10 }) : () => {}), set: () => true });
  globalThis.document = { createElement: () => ({ width: 0, height: 0, style: {}, getContext: () => context }) };
  restoreDocument = () => { if (had) globalThis.document = previous; else delete globalThis.document; };
});
after(() => { if (restoreDocument) restoreDocument(); });

async function makeRig(theme) {
  const { BlockKit } = await load('blocks.js'); const { Tower } = await load('tower.js');
  const fx = { sparks: { emit() {}, burst() {} }, dust() {} };
  const tower = new Tower(new BlockKit(theme), fx, {});
  const base = Core.makeBase();
  const state = (extra = {}) => ({ id: 'solo', blocks: [base], fallen: [], moving: { left: 90, width: 180, level: 1, color: '#2F8478' }, effect: null, helpers: Core, phase: 'playing', collapsed: false, reduced: false, ...extra });
  let clock = 0; const frame = s => { clock += 0.016; tower.sync(s, 0.016, clock); };
  return { tower, state, frame, base };
}

describe('the centre tick in 3D', () => {
  test('shows at the centre of the top block while a block moves, in every world, and is gone when nothing moves', async () => {
    const { boardX } = await load('tower.js');
    for (const theme of THEMES) {
      const { tower, state, frame, base } = await makeRig(theme);
      frame(state());
      assert.equal(tower.tick.visible, true, `${theme}: visible while a block moves`);
      assert.ok(Math.abs(tower.tick.position.x - boardX((base.left + base.right) / 2)) < 0.01, `${theme}: at the centre of the top block`);
      assert.ok(tower.tick.position.z > tower.depth / 2, `${theme}: in front of the block face`);
      frame(state({ moving: null }));
      assert.equal(tower.tick.visible, false, `${theme}: hidden when no block is moving`);
    }
  });
  test('follows the top block and is disposed with the tower', async () => {
    const { boardX } = await load('tower.js');
    const { tower, state, frame, base } = await makeRig('paper');
    const placed = { level: 1, left: 120, right: 280, color: '#2F8478' };
    frame(state({ blocks: [base, placed], moving: { left: 10, width: 150, level: 2, color: '#2F8478' } }));
    assert.ok(Math.abs(tower.tick.position.x - boardX(200)) < 0.01, 'the tick moves up to the new top block');
    const parts = tower.tick.userData.parts; let disposed = 0;
    for (const part of parts) { part.geometry.addEventListener('dispose', () => { disposed += 1; }); }
    tower.dispose();
    assert.equal(disposed, parts.length); assert.equal(tower.tick.parent, null);
  });
});
