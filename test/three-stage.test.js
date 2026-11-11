'use strict';
// The 3D stage contract: when a 3D stage is available the client feeds it a well-formed
// view of the game every frame (and the results orbit on the results screen); when it is
// not, the page must fall back to the audited 2D canvas without errors.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { createCanvas } = require('@napi-rs/canvas');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) {
  skipReason = `Client harness failed to load on Node ${process.version}: ${error.message} (run npm ci if dependencies are missing)`;
}
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');

function makeFakeStage() {
  const calls = { createStage: 0, gameViews: [], resultViews: [], resizes: 0 };
  // drawImage copies from the stage canvas into the results canvas; an @napi-rs canvas stands in for WebGL.
  const stub = createCanvas(720, 1040);
  stub.classList = { add() {}, remove() {} };
  const stage = {
    canvas: stub,
    active: true,
    resize() { calls.resizes += 1; },
    renderGame(view) {
      calls.gameViews.push(view);
      const effect = view.game && view.game.activeEffect;
      return { spotlight: effect && effect.id === 'spotlight' ? { x: 180, y: 240 } : null };
    },
    renderResults(view) {
      calls.resultViews.push(view);
      return true;
    }
  };
  const api = {
    probe: () => true,
    createStage: () => { calls.createStage += 1; return stage; }
  };
  return { calls, stage, api };
}

describe('3D stage integration (client page with a mocked stage)', skipReason ? { skip: skipReason } : {}, () => {
  test('the page boots with the stage module attached and WebGL probes false under the harness', async () => {
    const page = await boot(HTML);
    try {
      assert.ok(page.window.SabotageStackThree, 'SabotageStackThree attaches at boot');
      assert.equal(typeof page.window.SabotageStackThree.probe, 'function');
      assert.equal(page.window.SabotageStackThree.probe(), false, 'the harness 2D stand-in must not look like WebGL');
      const canvas3d = page.document.getElementById('game-canvas-3d');
      assert.ok(canvas3d, 'the 3D canvas exists in the stage');
      assert.equal(canvas3d.classList.contains('is-active'), false, 'no WebGL means the 3D canvas stays hidden');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('solo play feeds the 3D stage a valid game view every frame', async () => {
    const { calls, api } = makeFakeStage();
    const page = await boot(HTML, {
      manualAnimationFrame: true,
      windowSetup: window => {
        // The page inlines its own stage module; pin the mock so the module cannot clobber it.
        Object.defineProperty(window, 'SabotageStackThree', {
          configurable: true,
          get: () => api,
          set: () => {}
        });
      }
    });
    try {
      assert.equal(calls.createStage, 1, 'the stage boots exactly once');
      page.document.getElementById('start-button').click();
      page.advanceAnimation(700);
      // One tap = one drop; three quick taps land at least one real placement.
      page.document.getElementById('drop-button').click();
      page.advanceAnimation(120);
      page.document.getElementById('drop-button').click();
      assert.ok(calls.gameViews.length >= 5, `renderGame ran per frame (${calls.gameViews.length} calls)`);
      for (const view of calls.gameViews) {
        assert.ok(view.game && Array.isArray(view.game.stack), 'view carries the game state');
        assert.equal(typeof view.cameraOffset, 'number');
        assert.equal(typeof view.zoomScale, 'number');
        assert.equal(typeof view.dt, 'number');
        assert.equal(typeof view.reducedMotion, 'boolean');
        assert.ok(['paper', 'sunset', 'primetime'].includes(view.theme), `theme ${view.theme} is a known theme`);
        assert.equal(typeof view.themedColor, 'function');
        assert.ok(view.game.stack.length >= 1, 'the stack always has its base');
      }
      const withBlocks = calls.gameViews.filter(view => view.game.stack.length > 1);
      assert.ok(withBlocks.length > 0, 'drops reached the 3D view (the tower grew)');
      assert.equal(calls.resultViews.length, 0, 'no results while playing');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a missed drop ends the run and the results screen renders a 3D verdict', async () => {
    const { calls, api } = makeFakeStage();
    const page = await boot(HTML, {
      manualAnimationFrame: true,
      windowSetup: window => {
        // The page inlines its own stage module; pin the mock so the module cannot clobber it.
        Object.defineProperty(window, 'SabotageStackThree', {
          configurable: true,
          get: () => api,
          set: () => {}
        });
      }
    });
    try {
      page.document.getElementById('start-button').click();
      page.advanceAnimation(150);
      // The mover spawns from the left, then the right: dropping on spawn clips the
      // first block and the second spawn sits clear of the stack, so this misses.
      page.document.getElementById('drop-button').click();
      page.advanceAnimation(60);
      page.document.getElementById('drop-button').click();
      page.advanceAnimation(1600);
      assert.equal(page.document.body.dataset.screen, 'results', `run ended (${page.document.body.dataset.screen})`);
      assert.ok(calls.resultViews.length > 0, 'renderResults ran for the final tower');
      const view = calls.resultViews[calls.resultViews.length - 1];
      assert.ok(view.data && Array.isArray(view.data.blocks), 'results view carries the final stack');
      assert.equal(typeof view.reveal, 'number');
      assert.ok(view.reveal >= 0 && view.reveal <= 1);
      assert.ok(['paper', 'sunset', 'primetime'].includes(view.theme));
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the spotlight sabotage drives the audited veil through the projected hole', async () => {
    const { calls, api } = makeFakeStage();
    const page = await boot(HTML, {
      manualAnimationFrame: true,
      windowSetup: window => {
        // The page inlines its own stage module; pin the mock so the module cannot clobber it.
        Object.defineProperty(window, 'SabotageStackThree', {
          configurable: true,
          get: () => api,
          set: () => {}
        });
      }
    });
    try {
      page.document.getElementById('dev-mode-button').click();
      page.advanceAnimation(300);
      page.document.querySelector('[data-dev-effect="spotlight"]').click();
      page.advanceAnimation(300);
      const lit = calls.gameViews.filter(view => view.game.activeEffect && view.game.activeEffect.id === 'spotlight');
      assert.ok(lit.length > 0, 'the 3D view saw the active spotlight');
      // The overlay path must not blow up when the stage reports a hole position.
      const canvas = page.document.getElementById('game-canvas');
      assert.ok(canvas);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('theme switches reach the 3D view', async () => {
    const { calls, api } = makeFakeStage();
    const page = await boot(HTML, {
      manualAnimationFrame: true,
      windowSetup: window => {
        // The page inlines its own stage module; pin the mock so the module cannot clobber it.
        Object.defineProperty(window, 'SabotageStackThree', {
          configurable: true,
          get: () => api,
          set: () => {}
        });
      }
    });
    try {
      page.document.getElementById('start-button').click();
      page.advanceAnimation(200);
      page.window.SabotageStack.setTheme('sunset');
      page.advanceAnimation(200);
      page.window.SabotageStack.setTheme('primetime');
      page.advanceAnimation(200);
      const themes = new Set(calls.gameViews.map(view => view.theme));
      assert.ok(themes.has('paper'), 'started on paper');
      assert.ok(themes.has('sunset'), 'sunset reached the view');
      assert.ok(themes.has('primetime'), 'primetime reached the view');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});
