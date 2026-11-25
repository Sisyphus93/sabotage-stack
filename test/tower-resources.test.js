'use strict';
// Shared tower GPU resources: Teamwork name plaques and Sunset block outlines are cached per kit/tower, reused by every
// block (so a hundred-block tower costs a handful of textures), and released once when the cache is torn down.
const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const Core = require('../shared/game-core.js');
const load = name => import(path.join(ROOT, 'client3d', name));

let restoreDocument = null;
before(() => {
  const had = Object.prototype.hasOwnProperty.call(globalThis, 'document'); const previous = globalThis.document;
  const context = new Proxy({}, { get: (_, key) => (key === 'createImageData' ? (w, h) => ({ width: w, height: h, data: new Uint8ClampedArray(w * h * 4) }) : key === 'measureText' ? () => ({ width: 10 }) : () => {}), set: () => true });
  globalThis.document = { createElement: () => ({ width: 0, height: 0, style: {}, getContext: () => context }) };
  restoreDocument = () => { if (had) globalThis.document = previous; else delete globalThis.document; };
});
after(() => { if (restoreDocument) restoreDocument(); });

async function makeTower(theme = 'paper') {
  const { BlockKit } = await load('blocks.js'); const { Tower } = await load('tower.js');
  const kit = new BlockKit(theme);
  const fx = { sparks: { burst() {}, emit() {} }, dust() {}, glints: { density: 1 }, confetti: { density: 1 } };
  return { kit, tower: new Tower(kit, fx, {}) };
}

const teamworkState = (placers, extras = {}) => ({
  id: 'team-round', teamPlacers: true,
  blocks: [Core.makeBase(), ...placers.map((placer, i) => ({ left: 10 + i * 5, right: 200 + i * 5, level: i + 1, color: ['#2F8478', '#E3A33B', '#C8503C'][i % 3], placer }))],
  fallen: [], moving: null, effect: null, helpers: Core, phase: 'playing', collapsed: false, reduced: false, ...extras
});

const plaquesOf = tower => tower.meshes.filter(mesh => mesh && mesh.userData.plaque).map(mesh => ({ mesh, plane: mesh.userData.plaque }));

describe('Teamwork name plaques share their resources', () => {
  test('one texture, material and plane geometry per distinct rendered name, whatever the block count', async () => {
    const { tower } = await makeTower('paper');
    const names = ['Ann', 'Bo', 'Ann', 'Cy', 'Bo', 'Ann', 'Base'];
    tower.sync(teamworkState(names), 0.016, 1);
    const plaques = plaquesOf(tower);
    assert.equal(plaques.length, 6, 'Base (and every other block) has no plaque; six placer blocks do');
    assert.equal(tower.plaques.size, 3, 'Ann, Bo and Cy are the three distinct names');

    const byName = name => plaques.filter(({ mesh }) => mesh.userData.placer === name).map(({ plane }) => plane);
    for (const name of ['Ann', 'Bo', 'Cy']) {
      const planes = byName(name);
      assert.ok(planes.length > 1 || name === 'Cy', `${name} appears more than once`);
      for (const plane of planes) {
        assert.equal(plane.material, planes[0].material, `${name} reuses its material`);
        assert.equal(plane.material.map, planes[0].material.map, `${name} reuses its texture`);
        assert.equal(plane.geometry, planes[0].geometry, 'all plaques share one plane geometry');
      }
    }
    assert.notEqual(byName('Ann')[0].material, byName('Bo')[0].material, 'different names keep their own plaque material');
    assert.equal(byName('Ann')[0].geometry, byName('Bo')[0].geometry);
  });

  test('the cache is keyed by the text actually drawn, so a long name and its 12-character slice share one plaque', async () => {
    const { tower } = await makeTower('paper');
    tower.sync(teamworkState(['ABCDEFGHIJKLMNOP', 'ABCDEFGHIJKLM']), 0.016, 1);
    assert.equal(tower.plaques.size, 1, 'both render as the same 12 characters');
    const [first, second] = plaquesOf(tower).map(({ plane }) => plane);
    assert.equal(first.material, second.material);
  });

  test('the plaque cache is released exactly once when a round is reset, and rebuilt for the next round', async () => {
    const { kit, tower } = await makeTower('paper');
    tower.sync(teamworkState(['Ann', 'Bo']), 0.016, 1);
    const cached = [...tower.plaques.values()];
    assert.equal(cached.length, 2);
    const counts = cached.map(() => ({ texture: 0, material: 0 }));
    cached.forEach((entry, i) => {
      const realTexture = entry.texture.dispose.bind(entry.texture); entry.texture.dispose = () => { counts[i].texture += 1; realTexture(); };
      const realMaterial = entry.material.dispose.bind(entry.material); entry.material.dispose = () => { counts[i].material += 1; realMaterial(); };
    });
    const planeGeometry = kit.plaqueGeometry; let geometryDisposals = 0;
    const realGeometry = planeGeometry.dispose.bind(planeGeometry); planeGeometry.dispose = () => { geometryDisposals += 1; realGeometry(); };

    tower.sync(teamworkState(['Ann'], { id: 'next-round' }), 0.016, 2);
    assert.equal(tower.plaques.size, 1, 'the new round has only its own names cached');
    assert.deepEqual(counts, [{ texture: 1, material: 1 }, { texture: 1, material: 1 }], 'old textures and materials are released once');
    assert.equal(geometryDisposals, 0, 'the shared plane geometry outlives a round');
    assert.equal(kit.plaqueGeometry, planeGeometry, 'and is reused by the next round');

    const next = [...tower.plaques.values()]; let again = 0;
    const realNextTexture = next[0].texture.dispose.bind(next[0].texture); next[0].texture.dispose = () => { again += 1; realNextTexture(); };
    const realNextMaterial = next[0].material.dispose.bind(next[0].material); next[0].material.dispose = () => { again += 1; realNextMaterial(); };
    tower.clear();
    tower.clear();
    assert.equal(again, 2, 'one clear releases the texture and material, a second clear has nothing left to release');
  });

  test('a theme change and tower disposal release the cache too', async () => {
    const { BlockKit } = await load('blocks.js');
    const { kit, tower } = await makeTower('paper');
    tower.sync(teamworkState(['Ann']), 0.016, 1);
    let setKitDisposals = 0;
    for (const entry of tower.plaques.values()) {
      const realTexture = entry.texture.dispose.bind(entry.texture); entry.texture.dispose = () => { setKitDisposals += 1; realTexture(); };
      const realMaterial = entry.material.dispose.bind(entry.material); entry.material.dispose = () => { setKitDisposals += 1; realMaterial(); };
    }
    tower.setKit(new BlockKit('sunset'));
    assert.equal(setKitDisposals, 2, 'a theme change releases the old themed texture and material once');
    assert.equal(tower.plaques.size, 0);

    tower.sync(teamworkState(['Ann']), 0.016, 2);
    let disposed = 0;
    for (const entry of tower.plaques.values()) {
      const realTexture = entry.texture.dispose.bind(entry.texture); entry.texture.dispose = () => { disposed += 1; realTexture(); };
      const realMaterial = entry.material.dispose.bind(entry.material); entry.material.dispose = () => { disposed += 1; realMaterial(); };
    }
    tower.dispose();
    assert.equal(disposed, 2, 'disposal releases the live cache once');
    assert.equal(tower.plaques.size, 0);
  });
});

describe('Sunset block outlines share one material per kit', () => {
  test('every block of a Sunset kit draws its edges with the same material, and a theme change releases it once', async () => {
    const { kit } = await makeTower('sunset');
    const first = kit.mesh({ left: 0, right: 100, color: '#2F8478' });
    const second = kit.mesh({ left: 10, right: 80, color: '#E3A33B' });
    assert.equal(first.userData.edges.material, second.userData.edges.material, 'all blocks share one edge material');
    assert.equal(first.userData.edges.material, kit.edgeMaterial);

    let disposed = 0; const old = kit.edgeMaterial; const realDispose = old.dispose.bind(old);
    old.dispose = () => { disposed += 1; realDispose(); };
    kit.setTheme('sunset');
    assert.equal(disposed, 1, 'the shared edge material is released once when the kit is rebuilt');
    assert.notEqual(kit.edgeMaterial, old, 'the rebuilt kit has its own edge material');
    assert.equal(kit.edgeMaterial.transparent, true);
    assert.equal(kit.edgeMaterial.opacity, 0.85);

    let current = 0; const now = kit.edgeMaterial; const realNow = now.dispose.bind(now);
    now.dispose = () => { current += 1; realNow(); };
    kit.dispose();
    assert.equal(current, 1, 'and once when the kit is disposed');
  });

  test('clearing a tower releases no shared outline material: live blocks of the same kit still use it', async () => {
    const { kit, tower } = await makeTower('sunset');
    tower.sync(teamworkState(['Ann']), 0.016, 1);
    const mesh = tower.meshes[1];
    assert.equal(mesh.userData.edges.material, kit.edgeMaterial);
    let disposed = 0; const real = kit.edgeMaterial.dispose.bind(kit.edgeMaterial);
    kit.edgeMaterial.dispose = () => { disposed += 1; real(); };
    tower.clear();
    assert.equal(disposed, 0, 'the shared kit material is not disposed with one tower');
    assert.equal(kit.edgeMaterial.isMaterial, true);
  });
});

describe('the moving block keeps its own outline', () => {
  const moving = color => ({ left: 90, width: 180, level: 1, color });
  const moverState = color => ({
    id: 'solo', teamPlacers: false, blocks: [Core.makeBase()], fallen: [], moving: moving(color), effect: null,
    helpers: Core, phase: 'playing', collapsed: false, reduced: false
  });

  test('the mover outline is not the shared static one and is released when the mover is replaced or the tower is cleared', async () => {
    const { kit, tower } = await makeTower('sunset');
    let clock = 0; const frame = state => { clock += 0.016; tower.sync(state, 0.016, clock); return tower.mover; };
    frame(moverState('#2F8478'));
    const first = tower.mover.userData.edges.material;
    assert.notEqual(first, kit.edgeMaterial, 'the animated outline is independent of the static one');
    assert.equal(tower.meshes[0].userData.edges.material, kit.edgeMaterial, 'settled blocks keep the shared outline');

    let firstDisposals = 0; const realFirst = first.dispose.bind(first);
    first.dispose = () => { firstDisposals += 1; realFirst(); };
    frame(moverState('#E3A33B'));
    assert.equal(firstDisposals, 1, 'replacing the mover releases its old outline once');
    const second = tower.mover.userData.edges.material;
    assert.notEqual(second, first);

    let secondDisposals = 0; const realSecond = second.dispose.bind(second);
    second.dispose = () => { secondDisposals += 1; realSecond(); };
    tower.clear();
    assert.equal(secondDisposals, 1, 'clearing the tower releases the current mover outline once');
    tower.clear();
    assert.equal(secondDisposals, 1, 'and a second clear does not dispose it again');
    assert.equal(kit.edgeMaterial.isMaterial, true, 'the shared outline survives; the kit still owns it');
  });
});
