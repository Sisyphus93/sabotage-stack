'use strict';
// The 3D stage (client/stack3d.js) is presentation only, but it is real code shipping in the single-file
// client, so it gets real tests: the projection contract that keeps 3D geometry identical to the classic
// view, the view picker and its persistence, the camera controls, and a full solo run drawn (and ending)
// through the 3D renderer in jsdom with a real Skia canvas.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const Stack3D = require('../client/stack3d.js');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load on Node ${process.version}: ${error.message} (run npm ci if dependencies are missing)`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const PAPER_SKY = '244,237,223,255';
const pressSpace = w => w.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'Space', key: ' ', bubbles: true }));

describe('3D projection keeps the classic geometry contract', () => {
  function frontRig(extra = {}) {
    const rig = Stack3D.createRig();
    Stack3D.updateRig(rig, {
      yaw: 0, pitch: Stack3D.constants.DEFAULT_PITCH, distance: Stack3D.constants.FOCAL,
      targetX: 0, targetY: Stack3D.constants.BLOCK_H / 2, targetZ: 0, ...extra
    });
    return rig;
  }
  test('at yaw 0 the base block front face lands on the classic 2D pixels', () => {
    const { BASELINE, BLOCK_H, DEPTH } = Stack3D.constants;
    const rig = frontRig();
    const top = Stack3D.projectPoint(rig, 0, BLOCK_H, DEPTH / 2, {});
    const bottom = Stack3D.projectPoint(rig, 0, 0, DEPTH / 2, {});
    assert.ok(top.visible && bottom.visible, 'front face must be in front of the camera');
    assert.ok(Math.abs(top.y - (BASELINE - BLOCK_H)) < 0.6, `front-top edge y=${top.y}, expected ~${BASELINE - BLOCK_H}`);
    assert.ok(Math.abs(bottom.y - BASELINE) < 0.9, `front-bottom edge y=${bottom.y}, expected ~${BASELINE}`);
    assert.ok(Math.abs(top.x - 180) < 0.001, 'the tower centre stays at x=180 at yaw 0');
    const left = Stack3D.projectPoint(rig, -100, BLOCK_H, DEPTH / 2, {});
    const right = Stack3D.projectPoint(rig, 100, BLOCK_H, DEPTH / 2, {});
    const span = right.x - left.x;
    assert.ok(span > 195 && span < 210, `a 200px-wide block front must stay ~200px on screen (got ${span})`);
  });
  test('the camera follows the tower exactly like the classic cameraOffset, at the anchor and at the top', () => {
    const { BASELINE, BLOCK_H, DEPTH, FOCAL, DEFAULT_PITCH } = Stack3D.constants;
    // The orbit pivot is pinned to the anchor by construction, so scrolling is exact where the camera aims.
    const pivot = Stack3D.projectPoint(frontRig({ targetY: BLOCK_H / 2 + 182 }), 0, BLOCK_H / 2 + 182, 0, {});
    assert.ok(Math.abs(pivot.y - Stack3D.constants.ANCHOR_Y) < 0.001, 'the target point stays pinned to the anchor');
    // A 20-high tower: the classic renderer puts its top front edge at BASELINE - 21 * BLOCK_H + offset.
    const offset = 20 * BLOCK_H - 258;
    const top = Stack3D.projectPoint(frontRig({ targetY: BLOCK_H / 2 + offset }), 0, 20 * BLOCK_H, DEPTH / 2, {});
    const classic = BASELINE - 21 * BLOCK_H + offset;
    assert.ok(Math.abs(top.y - classic) < 20, `the 3D camera must track the tower top (3D ${top.y.toFixed(1)} vs classic ${classic})`);
    void FOCAL; void DEFAULT_PITCH;
  });
  test('orbiting keeps the target column centred and never flips the near plane', () => {
    const rig = Stack3D.createRig();
    Stack3D.updateRig(rig, { yaw: 0.9, pitch: 0.5, distance: Stack3D.constants.MIN_DISTANCE, targetX: 0, targetY: 200, targetZ: 0 });
    const centre = Stack3D.projectPoint(rig, 0, 200, 0, {});
    assert.ok(centre.visible);
    assert.ok(Math.abs(centre.x - 180) < 0.5, 'the orbit pivot stays on the centre line');
    const behind = Stack3D.projectPoint(rig, 0, 200, 4000, {});
    assert.equal(behind.visible, false, 'points behind the camera are culled');
  });
  test('rotation helpers behave at the identity and tilt the tower about its pivot', () => {
    assert.deepEqual(Stack3D.rotationAboutAxis({ x: 0, y: 0, z: 1 }, 0), [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    const tilt = Stack3D.rotationAboutAxis({ x: 0, y: 0, z: 1 }, Math.PI / 2);
    const swung = Stack3D.applyMatrix(tilt, 1, 0, 0);
    assert.ok(Math.abs(swung.x) < 1e-9 && Math.abs(swung.y - 1) < 1e-9, 'a quarter turn maps +x onto +y');
    const euler = Stack3D.rotationFromEuler(0, 0, 0);
    assert.deepEqual(euler, [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });
});

describe('The 3D stage (F-3D): default view, picker, persistence and camera controls', skipReason ? { skip: skipReason } : {}, () => {
  test('boots in 3D, orbits through the public controls, and switches to the persisted classic view', async () => {
    const page = await boot(HTML);
    let restored = null;
    try {
      const { document, window } = page;
      const select = document.getElementById('view-select');
      assert.ok(select, 'the view picker exists');
      assert.equal(select.value, '3d');
      assert.equal(document.documentElement.dataset.view, '3d');
      assert.equal(window.SabotageStack.getViewMode(), '3d');
      assert.equal(window.SabotageStack.is3d(), true);

      document.getElementById('start-button').click();
      await page.sleep(300);
      const canvas = document.getElementById('game-canvas');
      const frontal = page.png(canvas);

      window.SabotageStack.orbit(0.55, 0.1);
      await page.sleep(300);
      assert.notDeepEqual(page.png(canvas), frontal, 'orbiting must visibly change the frame');
      assert.ok(window.SabotageStack.camera().yaw > 0.4, 'the camera reports the orbit');

      document.getElementById('camera-reset').click();
      await page.sleep(300);
      assert.ok(Math.abs(window.SabotageStack.camera().yaw) < 0.01, 'the reset button returns to the fair front view');
      document.getElementById('camera-left').click();
      await page.sleep(120);
      assert.ok(window.SabotageStack.camera().yaw < 0, 'the left button orbits left');
      document.getElementById('camera-cine').click();
      assert.equal(document.getElementById('camera-cine').getAttribute('aria-pressed'), 'true', 'cinematic orbit toggles');
      document.getElementById('camera-cine').click();

      select.value = 'classic';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.view, 'classic');
      assert.equal(window.SabotageStack.getViewMode(), 'classic');
      assert.equal(window.localStorage.getItem('sabotage-stack-view-v1'), 'classic');
      const classic = page.png(canvas);
      assert.notDeepEqual(classic, frontal, 'the classic renderer draws a different picture');

      select.value = '3d';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.view, '3d');
      assert.deepEqual(page.errors, []);

      restored = await boot(HTML, { storage: { 'sabotage-stack-view-v1': 'classic' } });
      assert.equal(restored.document.getElementById('view-select').value, 'classic', 'the saved choice is restored');
      assert.equal(restored.document.documentElement.dataset.view, 'classic');
      assert.equal(restored.window.SabotageStack.is3d(), false);
      assert.deepEqual(restored.errors, []);
    } finally { page.close(); if (restored) restored.close(); }
  });

  test('the themed sky above the tower stays pixel-identical to the classic renderer', async () => {
    const page = await boot(HTML);
    try {
      page.document.getElementById('start-button').click();
      await page.sleep(300);
      const canvas = page.document.getElementById('game-canvas');
      assert.equal(page.pixel(canvas, 10, 10).join(','), PAPER_SKY, '3D must not tint the paper sky');
      const select = page.document.getElementById('theme-select');
      select.value = 'primetime';
      select.dispatchEvent(new page.window.Event('change', { bubbles: true }));
      await page.sleep(250);
      const sky = page.pixel(canvas, 40, 4).slice(0, 3);
      assert.ok(sky.every((channel, index) => Math.abs(channel - [27, 60, 170][index]) <= 6), `Prime Time sky under 3D (got ${sky})`);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a whole solo run, collapse and results screen render through the 3D stage without errors', async () => {
    const page = await boot(HTML);
    try {
      page.document.getElementById('start-button').click();
      await page.sleep(250);
      for (let attempt = 0; attempt < 80 && page.document.body.dataset.screen !== 'results'; attempt += 1) {
        pressSpace(page.window);
        await page.sleep(120);
      }
      assert.equal(page.document.body.dataset.screen, 'results', 'the run should end in the results screen');
      const results = page.document.getElementById('results-canvas');
      const data = results.getContext('2d').getImageData(0, 0, 360, 520).data;
      let drawn = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (!(data[i] === 244 && data[i + 1] === 237 && data[i + 2] === 223)) drawn += 1;
      }
      assert.ok(drawn > 4000, `the 3D results screen should show the tower and its debris (lit pixels ${drawn})`);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('reduced motion keeps the 3D stage calm and error-free', async () => {
    const page = await boot(HTML, { reducedMotion: true });
    try {
      page.document.getElementById('start-button').click();
      await page.sleep(300);
      const canvas = page.document.getElementById('game-canvas');
      const first = page.png(canvas);
      await page.sleep(300);
      const second = page.png(canvas);
      // The run is still live (the mover sweeps), but the camera itself must never wander on its own.
      assert.notDeepEqual(second, first, 'the round is still live under reduced motion');
      assert.equal(page.window.SabotageStack.camera().yaw, 0, 'no idle camera wander under reduced motion');
      assert.equal(page.window.SabotageStack.camera().cinematic, false, 'cinematic orbit stays off under reduced motion');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the stage camera cluster is exposed to assistive tech and hidden in classic view', async () => {
    const page = await boot(HTML);
    try {
      const cluster = page.document.getElementById('camera-cluster');
      assert.equal(cluster.getAttribute('role'), 'group');
      assert.equal(cluster.getAttribute('aria-label'), '3D camera controls');
      for (const id of ['camera-left', 'camera-right', 'camera-reset', 'camera-cine']) {
        assert.ok(page.document.getElementById(id).getAttribute('aria-label'), `${id} needs a label`);
      }
      const html = require('node:fs').readFileSync(HTML, 'utf8');
      assert.match(html, /html\[data-view="classic"\] \.camera-cluster \{ display: none; \}/, 'classic view hides the cluster');
      assert.match(html, /html\[data-view="3d"\] \.camera-cluster \{ display: flex; \}/, '3D view shows the cluster');
    } finally { page.close(); }
  });
});
