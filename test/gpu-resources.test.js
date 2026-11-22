'use strict';
// GPU resources shared across tower blocks (issue #51): Teamwork plaques, the Sunset block outline and the mover's own outline.
// Node cannot see renderer.info, so these tests pin the ownership contract the renderer relies on: the caches are released exactly
// once, with their owner, and never per mesh while another mesh still references them.
const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));

let restoreDocument = null;
let plaqueCanvases = 0;
before(() => {
  const had = Object.prototype.hasOwnProperty.call(globalThis, 'document'); const previous = globalThis.document;
  const context = new Proxy({}, { get: (_, key) => (key === 'createImageData' ? (w, h) => ({ width: w, height: h, data: new Uint8ClampedArray(w * h * 4) }) : key === 'measureText' ? () => ({ width: 10 }) : () => {}), set: () => true });
  globalThis.document = { createElement: tag => { if (tag === 'canvas') plaqueCanvases += 1; return { width: 0, height: 0, style: {}, getContext: () => context }; } };
  restoreDocument = () => { if (had) globalThis.document = previous; else delete globalThis.document; };
});
after(() => { if (restoreDocument) restoreDocument(); });

const COLORS = ['#2F8478', '#E3A33B', '#C8503C', '#6B7FA3', '#8B5FBF', '#3F8E5A'];
function blocksFor(names) {
  const blocks = [Core.makeBase()];
  names.forEach((placer, index) => {
    const spread = (index % 4) * 8;
    blocks.push({ left: 92 + spread, right: 268 - spread, color: COLORS[index % COLORS.length], perfect: false, placer, level: index + 1 });
  });
  return blocks;
}
const teamState = (id, names) => ({ id, blocks: blocksFor(names), fallen: [], moving: null, effect: null, helpers: Core, phase: 'playing', collapsed: false, reduced: true, teamPlacers: true });
const moverState = (id, color = '#2F8478', width = 180) => ({ id, blocks: [Core.makeBase()], fallen: [], moving: { left: 90, width, level: 1, color }, effect: null, helpers: Core, phase: 'playing', collapsed: false, reduced: true });

async function makeRig(theme = 'sunset') {
  const { BlockKit } = await load('blocks.js'); const { Tower } = await load('tower.js');
  const fx = { sparks: { emit() {}, burst() {} }, dust() {} };
  const kit = new BlockKit(theme); const tower = new Tower(kit, fx, {});
  return { kit, tower };
}
const wrapDispose = (object, onDispose) => {
  const original = object.dispose.bind(object);
  const state = { calls: 0 };
  object.dispose = () => { state.calls += 1; onDispose(); original(); };
  return state;
};

describe('shared GPU resources across tower blocks', () => {
  test('a Teamwork round draws at most one plaque canvas per distinct rendered name (Base never gets one)', async () => {
    for (const theme of ['sunset', 'primetime', 'paper']) {
      const { tower } = await makeRig(theme); plaqueCanvases = 0;
      tower.sync(teamState(`round:${theme}`, ['Ada', 'Bea', 'Ada', 'Cid', 'Bea', 'Ada', 'Dee']), 1 / 30, 1);
      const distinct = new Set(['Ada', 'Bea', 'Cid', 'Dee']).size;
      assert.equal(tower.plaqueCache.size, distinct, `${theme}: one cache entry per distinct name`);
      assert.equal(plaqueCanvases, distinct + (theme === 'paper' ? 1 : 0), `${theme}: canvas count is the distinct plaque names${theme === 'paper' ? ' plus the one paper grain canvas' : ''}`);
      const plaques = tower.meshes.map(mesh => mesh && mesh.userData.plaque).filter(Boolean);
      assert.equal(plaques.length, 7);
      assert.ok(plaques.every(plane => plane.geometry === tower.kit.plaqueGeometry()), `${theme}: every plaque is the kit's shared plane geometry`);
      const materials = new Map(plaques.map(plane => [plane.material.map.image, plane.material]));
      assert.equal(materials.size, distinct, `${theme}: repeated names reuse texture and material`);
    }
  });

  test('repeated rounds release every round-scoped plaque texture and material exactly once', async () => {
    const { tower, kit } = await makeRig('sunset');
    let created = 0; let disposed = 0;
    for (let round = 0; round < 4; round += 1) {
      tower.sync(teamState(`leak:${round}`, ['Ada', 'Bea', 'Ada', 'Cid', 'Bea', 'Ada']), 1 / 30, round + 1);
      created += tower.plaqueCache.size;
      for (const entry of tower.plaqueCache.values()) { wrapDispose(entry.texture, () => { disposed += 1; }); wrapDispose(entry.material, () => { disposed += 1; }); }
      assert.equal(tower.plaqueCache.size, 3, `round ${round}: bounded by the round's distinct names`);
      tower.clear(false); // the round/room reset path
      assert.equal(tower.plaqueCache.size, 0);
      assert.equal(kit.plaqueGeometry().parameters.width, 52, 'the shared plaque plane survived the round reset');
    }
    assert.equal(created, 12);
    assert.equal(disposed, 24, 'every round-scoped texture and material was disposed exactly once');
  });

  test('a round reset does not dispose the kit-owned plaque plane or Sunset outline; setTheme and dispose do', async () => {
    const { tower, kit } = await makeRig('sunset');
    tower.sync(teamState('owner', ['Ada', 'Bea', 'Ada']), 1 / 30, 1);
    const plaqueGeometry = kit.plaqueGeometry(); const edgeMaterial = kit.edgeMaterial();
    const plaqueDispose = wrapDispose(plaqueGeometry, () => {}); const edgeDispose = wrapDispose(edgeMaterial, () => {});
    tower.clear(false);
    assert.equal(plaqueDispose.calls, 0, 'no cached kit resource is disposed while cleaning the tower');
    assert.equal(edgeDispose.calls, 0, 'the shared Sunset outline survives a round reset');
    kit.setTheme('sunset');
    assert.equal(plaqueDispose.calls, 1, 'the shared plaque plane is released with the kit/theme');
    assert.equal(edgeDispose.calls, 1, 'the shared Sunset outline is released with the kit/theme');
  });

  test('the static Sunset block outline is shared by every block; the mover keeps its own animated outline', async () => {
    const { tower, kit } = await makeRig('sunset');
    tower.sync(moverState('mover', '#2F8478', 180), 1 / 30, 1);
    const staticOutline = kit.edgeMaterial();
    const blockMeshes = tower.meshes.filter(Boolean);
    assert.ok(blockMeshes.length >= 1);
    assert.ok(blockMeshes.every(mesh => mesh.userData.edges.material === staticOutline), 'static blocks share the kit outline material');
    const moverOutline = tower.mover.userData.edges.material;
    assert.notEqual(moverOutline, staticOutline, 'the mover outline is independent so its opacity can be animated');
    const oldMoverOutline = wrapDispose(moverOutline, () => {});
    tower.sync(moverState('mover', '#E3A33B', 180), 1 / 30, 2); // colour change rebuilds the mover
    assert.equal(oldMoverOutline.calls, 1, 'replacing the mover releases its outline material');
    const nextMoverOutline = tower.mover.userData.edges.material; const nextDispose = wrapDispose(nextMoverOutline, () => {});
    assert.notEqual(nextMoverOutline, staticOutline);
    const staticDispose = wrapDispose(staticOutline, () => {});
    tower.clear(false);
    assert.equal(nextDispose.calls, 1, 'clearing the tower releases the mover outline');
    assert.equal(staticDispose.calls, 0, 'clearing the tower does not dispose the shared block outline');
    kit.dispose();
    assert.equal(staticDispose.calls, 1, 'the kit disposes the shared block outline');
  });
});
