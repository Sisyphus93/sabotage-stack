'use strict';
// The 3D layer is presentation only. These tests prove the seam between it and
// the audited 2D game: a fake WebGL2 device exercises the whole renderer (every
// draw, uniform and framebuffer call), while jsdom's real DOM exercises input,
// view switching, persistence and the no-WebGL fallback.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load on Node ${process.versions.node}: ${error.message} (run npm ci if dependencies are missing)`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const PAPER_SKY = '244,237,223,255';
const VIEW_KEY = 'sabotage-stack-view-v1';

// Source of the in-page GPU. It is stringified into jsdom so that every call
// happens inside the page realm, exactly where the renderer runs.
function installFakeWebGL(window, options) {
  const settings = options || {};
  const uniformNames = [
    'uModel', 'uNormalMat', 'uViewProj', 'uLightVP', 'uCamPos', 'uLightDir', 'uLightColor', 'uFillDir',
    'uFillColor', 'uSkyAmb', 'uGroundAmb', 'uRimColor', 'uFogColor', 'uFogDensity', 'uColor', 'uEmissive',
    'uGlow', 'uGloss', 'uAlpha', 'uPerfect', 'uTime', 'uTheme', 'uShadow', 'uShadowTexel', 'uShadowEnabled',
    'uGroundA', 'uGroundB', 'uGridColor', 'uAccent', 'uGridScale', 'uSkyTop', 'uSkyHorizon', 'uSunColor',
    'uInvViewProj', 'uCamRight', 'uCamUp', 'uOpacity', 'uScene', 'uThreshold', 'uSource', 'uDirection',
    'uNormal', 'uBloomA', 'uBloomB', 'uResolution', 'uBloom', 'uExposure', 'uSaturation', 'uContrast',
    'uVignette', 'uGrain', 'uOutline', 'uAberration', 'uScanline', 'uFlash', 'uInk', 'uTint',
    'uFlashColor', 'uSpotCenter', 'uSpotRadius', 'uSpot'
  ];
  const records = window.__glRecords = {
    contexts: 0, programs: 0, draws: 0, textures: 0,
    camPositions: [], themes: [], lost: false
  };
  let seed = 1000;
  function createFakeGL() {
    const constants = new Map();
    const constant = key => { if (!constants.has(key)) constants.set(key, seed++); return constants.get(key); };
    records.contexts += 1;
    const methods = {
      getExtension: name => (name === 'WEBGL_lose_context' ? { loseContext() { records.lost = true; } } : {}),
      getParameter: parameter => (parameter === constant('MAX_TEXTURE_SIZE') ? 4096 : 0),
      getError: () => 0,
      createShader: () => ({ shader: true }),
      shaderSource() {}, compileShader() {}, deleteShader() {},
      getShaderParameter: () => !settings.failCompile,
      getShaderInfoLog: () => (settings.failCompile ? 'simulated compile failure' : ''),
      createProgram: () => { records.programs += 1; return { program: true }; },
      attachShader() {}, linkProgram() {}, deleteProgram() {},
      getProgramParameter: (program, parameter) => (parameter === constant('ACTIVE_UNIFORMS') ? uniformNames.length : true),
      getActiveUniform: (program, index) => ({ name: uniformNames[index % uniformNames.length] }),
      getUniformLocation: (program, name) => ({ name }),
      useProgram() {}, activeTexture() {},
      createTexture: () => { records.textures += 1; return { texture: true }; },
      bindTexture() {}, texImage2D() {}, texParameteri() {}, deleteTexture() {},
      createFramebuffer: () => ({ framebuffer: true }), bindFramebuffer() {}, framebufferTexture2D() {},
      drawBuffers() {}, readBuffer() {}, deleteFramebuffer() {},
      checkFramebufferStatus: () => constant('FRAMEBUFFER_COMPLETE'),
      createBuffer: () => ({ buffer: true }), bindBuffer() {}, bufferData() {}, bufferSubData() {}, deleteBuffer() {},
      createVertexArray: () => ({ vao: true }), bindVertexArray() {}, deleteVertexArray() {},
      enableVertexAttribArray() {}, vertexAttribPointer() {}, vertexAttribDivisor() {},
      uniform1i() {},
      uniform1f(location, value) { if (location && location.name === 'uTheme') records.themes.push(value); },
      uniform2f() {},
      uniform3f(location, x, y, z) { if (location && location.name === 'uCamPos') records.camPositions.push([x, y, z]); },
      uniform4f() {}, uniformMatrix3fv() {}, uniformMatrix4fv() {},
      viewport() {}, clearColor() {}, clearDepth() {}, clear() {}, enable() {}, disable() {}, depthMask() {},
      depthFunc() {}, cullFace() {}, frontFace() {}, colorMask() {}, blendFunc() {},
      drawArraysInstanced() { records.draws += 1; },
      drawElements() { records.draws += 1; },
      drawArrays() { records.draws += 1; }
    };
    return new Proxy(methods, {
      get(target, key) {
        if (key in target) return target[key];
        if (typeof key !== 'string') return undefined;
        if (/^[A-Z][A-Z0-9_]*$/.test(key)) return constant(key);
        return () => {};
      },
      set(target, key, value) { target[key] = value; return true; }
    });
  }
  window.WebGL2RenderingContext = function WebGL2RenderingContext() {};
  const prototype = window.HTMLCanvasElement.prototype;
  const original = prototype.getContext;
  prototype.getContext = function (type) {
    if (type === 'webgl2') return createFakeGL();
    return original.apply(this, arguments);
  };
  // jsdom performs no layout, so give the stage a believable phone-sized box.
  Object.defineProperty(prototype, 'clientWidth', { configurable: true, get() { return 360; } });
  Object.defineProperty(prototype, 'clientHeight', { configurable: true, get() { return 520; } });
}
const FAKE_SOURCE = '(' + installFakeWebGL.toString() + ')';

function withFakeGpu(options) {
  return window => { window.eval(FAKE_SOURCE + '(window, ' + JSON.stringify(options || {}) + ')'); };
}

function pointer(window, target, type, x, y, pointerId = 1) {
  const Constructor = window.PointerEvent || window.MouseEvent;
  const event = new Constructor(type, { bubbles: true, cancelable: true, clientX: x, clientY: y, button: 0 });
  // MouseEvent drops pointerId, so define it explicitly to model two fingers.
  if (event.pointerId !== pointerId) Object.defineProperty(event, 'pointerId', { configurable: true, value: pointerId });
  target.dispatchEvent(event);
}

describe('Stack3D engine surface (shared, pure parts)', skipReason ? { skip: skipReason } : {}, () => {
  test('publishes a versioned renderer with three themes and matrix maths', async () => {
    const page = await boot(HTML);
    try {
      const engine = page.window.SabotageStack3D;
      assert.equal(typeof engine, 'object');
      assert.equal(engine.version, 1);
      assert.equal(typeof engine.create, 'function');
      assert.deepEqual(Array.from(engine.themes), ['paper', 'sunset', 'primetime']);
      for (const theme of ['paper', 'sunset', 'primetime']) {
        const palette = engine.themesDetail[theme];
        assert.ok(Array.isArray(palette.skyTop) && palette.skyTop.length === 3);
        assert.ok(Math.abs(Math.hypot(...palette.lightDir) - 1) < 1e-6, 'the key light is a unit vector');
        assert.ok(Math.abs(Math.hypot(...palette.fillDir) - 1) < 1e-6, 'the fill light is a unit vector');
        assert.ok(palette.bloom > 0 && palette.exposure > 0);
      }
      for (const name of ['identity', 'multiply', 'perspective', 'lookAt', 'ortho', 'invert', 'composeBox', 'hexToLinear']) {
        assert.equal(typeof engine.math[name], 'function', `math.${name}`);
      }
    } finally { page.close(); }
  });

  test('composeBox builds model and inverse-transpose normal matrices', async () => {
    const page = await boot(HTML);
    try {
      const { composeBox } = page.window.SabotageStack3D.math;
      const { model, normal } = composeBox(1, 2, 3, 0, 0, 0, 2, 4, 8);
      assert.deepEqual([model[12], model[13], model[14], model[15]], [1, 2, 3, 1]);
      assert.equal(model[0], 2); assert.equal(model[5], 4); assert.equal(model[10], 8);
      assert.equal(normal[0], 0.5); assert.equal(normal[4], 0.25); assert.equal(normal[8], 0.125);
      const rotated = composeBox(0, 0, 0, 0, Math.PI / 2, 0, 1, 1, 1);
      // A 90-degree yaw sends local +X to world -Z.
      assert.ok(Math.abs(rotated.model[0]) < 1e-6);
      assert.ok(Math.abs(rotated.model[2] + 1) < 1e-6);
    } finally { page.close(); }
  });

  test('lookAt, perspective and invert compose into an inverse pair', async () => {
    const page = await boot(HTML);
    try {
      const { lookAt, perspective, multiply, invert } = page.window.SabotageStack3D.math;
      const view = lookAt([0, 0, 10], [0, 0, 0], [0, 1, 0]);
      // The eye maps to the view-space origin and sits 10 units down -Z.
      const x = view[0] * 0 + view[4] * 0 + view[8] * 10 + view[12];
      const y = view[1] * 0 + view[5] * 0 + view[9] * 10 + view[13];
      const z = view[2] * 0 + view[6] * 0 + view[10] * 10 + view[14];
      assert.ok(Math.abs(x) < 1e-6 && Math.abs(y) < 1e-6 && Math.abs(z) < 1e-6);
      const projection = perspective(Math.PI / 3, 0.7, 0.1, 100);
      const viewProjection = multiply(projection, view);
      const roundTrip = multiply(viewProjection, invert(viewProjection));
      for (let index = 0; index < 16; index += 1) {
        const expected = index % 5 === 0 ? 1 : 0;
        assert.ok(Math.abs(roundTrip[index] - expected) < 1e-4, `component ${index}: ${roundTrip[index]}`);
      }
    } finally { page.close(); }
  });

  test('the rounded block mesh is closed, outward-facing and exactly unit sized', async () => {
    const page = await boot(HTML);
    try {
      const mesh = page.window.SabotageStack3D.makeRoundedBox(4, 0.12);
      assert.ok(mesh.indices.length > 0 && mesh.indices.length % 3 === 0);
      assert.equal(mesh.positions.length, mesh.normals.length);
      for (let index = 0; index < mesh.positions.length; index += 1) {
        assert.ok(Math.abs(mesh.positions[index]) <= 1.0001, `vertex ${index} escaped the unit cube`);
      }
      for (let index = 0; index < mesh.normals.length; index += 3) {
        const length = Math.hypot(mesh.normals[index], mesh.normals[index + 1], mesh.normals[index + 2]);
        assert.ok(Math.abs(length - 1) < 1e-5, `normal ${index / 3} is not unit length`);
      }
      let outward = 0;
      for (let triangle = 0; triangle < mesh.indices.length; triangle += 3) {
        const ia = mesh.indices[triangle] * 3, ib = mesh.indices[triangle + 1] * 3, ic = mesh.indices[triangle + 2] * 3;
        const ux = mesh.positions[ib] - mesh.positions[ia];
        const uy = mesh.positions[ib + 1] - mesh.positions[ia + 1];
        const uz = mesh.positions[ib + 2] - mesh.positions[ia + 2];
        const vx = mesh.positions[ic] - mesh.positions[ia];
        const vy = mesh.positions[ic + 1] - mesh.positions[ia + 1];
        const vz = mesh.positions[ic + 2] - mesh.positions[ia + 2];
        const nx = uy * vz - uz * vy;
        const ny = uz * vx - ux * vz;
        const nz = ux * vy - uy * vx;
        const cx = (mesh.positions[ia] + mesh.positions[ib] + mesh.positions[ic]) / 3;
        const cy = (mesh.positions[ia + 1] + mesh.positions[ib + 1] + mesh.positions[ic + 1]) / 3;
        const cz = (mesh.positions[ia + 2] + mesh.positions[ib + 2] + mesh.positions[ic + 2]) / 3;
        if (nx * cx + ny * cy + nz * cz > 0) outward += 1;
      }
      assert.equal(outward, mesh.indices.length / 3, 'every triangle must wind outward for back-face culling');
    } finally { page.close(); }
  });
});

describe('3D integration (simulated WebGL2, real DOM)', skipReason ? { skip: skipReason } : {}, () => {
  test('the WebGL layer is decorative while the 2D canvas keeps interaction and semantics', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
    assert.match(html, /<canvas id="game-canvas"(?=[^>]*role="button")(?=[^>]*tabindex="0")[^>]*>/);
    assert.match(html, /<canvas id="game-canvas-3d"[^>]*aria-hidden="true"/);
    assert.match(style, /\.stage-3d-canvas\s*\{[^}]*pointer-events:\s*none/);
    assert.match(style, /\.game-stage\.is-3d #game-canvas\s*\{[^}]*opacity:\s*0/);
    // Self-contained: the 3D renderer must not add a network dependency.
    assert.equal(/<script[^>]+src=/.test(html), false);
  });

  test('the title screen paints the live 3D world before a game starts', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      await page.sleep(700);
      assert.equal(document.body.dataset.world, 'on', 'the world reports itself painted');
      assert.ok(document.body.classList.contains('has-world'), 'the paper hero becomes a 3D stage');
      const canvas = document.getElementById('world-canvas');
      assert.ok(canvas.width >= 320 && canvas.height >= 480, 'the world canvas fills the viewport');
      const records = window.__glRecords;
      assert.ok(records.textures > 10, 'the sabotage plaques are uploaded as textures');
      const drawsBefore = records.draws;
      await page.sleep(320);
      assert.ok(records.draws > drawsBefore, 'the world keeps painting while it is on screen');
      // The readable title stays in the document the whole time.
      assert.match(document.getElementById('title-heading').textContent, /STACK THE BLOCKS/);
      document.getElementById('start-button').click();
      await page.sleep(600);
      assert.equal(document.body.dataset.screen, 'game');
      assert.ok(document.getElementById('game-canvas-3d').width > 0, 'the game takes over with its own 3D layer');
      // The title stage frees its GPU memory for the game and rebuilds on return.
      document.getElementById('menu-button').click();
      await page.sleep(600);
      assert.equal(document.body.dataset.screen, 'title');
      const drawsOnReturn = page.window.__glRecords.draws;
      await page.sleep(320);
      assert.ok(page.window.__glRecords.draws > drawsOnReturn, 'the world comes back with the title');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('without WebGL2 the title page keeps the plain paper hero', async () => {
    const page = await boot(HTML);
    try {
      const { document } = page;
      await page.sleep(450);
      assert.equal(document.body.dataset.world, undefined);
      assert.equal(document.body.classList.contains('has-world'), false);
      assert.equal(document.getElementById('world-canvas').width, 300, 'the decorative canvas is never sized');
      assert.match(document.getElementById('title-heading').textContent, /STACK THE BLOCKS/);
      document.getElementById('start-button').click();
      await page.sleep(350);
      assert.equal(document.body.dataset.screen, 'game');
      assert.equal(document.getElementById('game-stage').classList.contains('is-3d'), false);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10).join(','), PAPER_SKY);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('starting a game paints the 3D scene without disturbing the 2D layer', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document } = page;
      const toggle = document.getElementById('view-toggle');
      assert.equal(toggle.hidden, false, 'a WebGL2-capable browser is offered the toggle');
      document.getElementById('start-button').click();
      await page.sleep(650);
      assert.equal(document.body.dataset.screen, 'game');
      assert.ok(document.getElementById('game-stage').classList.contains('is-3d'), 'the 3D layer takes over the stage');
      assert.equal(toggle.textContent, '3D');
      assert.equal(toggle.getAttribute('aria-pressed'), 'true');
      const threeCanvas = document.getElementById('game-canvas-3d');
      assert.ok(threeCanvas.width >= 320 && threeCanvas.height >= 480, 'the WebGL canvas is sized from the stage');
      const records = page.window.__glRecords;
      assert.ok(records.programs >= 9, 'every shader program is built');
      assert.ok(records.draws > 20, 'blocks, ground, sky and post passes are drawn');
      assert.ok(records.camPositions.length > 0, 'the camera matrix is fed to the shaders');
      assert.ok(records.themes.includes(0), 'the active theme reaches the shaders');
      // The 2D canvas keeps its semantics but yields the paint to the GPU layer.
      assert.equal(document.getElementById('game-canvas').getAttribute('role'), 'button');
      assert.equal(document.getElementById('game-canvas').tabIndex, 0);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a drag orbits the tower; a tap still drops a block', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      document.getElementById('start-button').click();
      await page.sleep(500);
      const canvas = document.getElementById('game-canvas');
      const records = window.__glRecords;
      const heightBefore = document.getElementById('height-display').textContent;
      const cameraBefore = records.camPositions.slice(-1)[0];
      pointer(window, canvas, 'pointerdown', 100, 120);
      assert.ok(document.getElementById('game-stage').classList.contains('is-orbiting') === false);
      pointer(window, canvas, 'pointermove', 168, 150);
      pointer(window, canvas, 'pointerup', 168, 150);
      await page.sleep(220);
      const cameraAfter = records.camPositions.slice(-1)[0];
      assert.notDeepEqual(cameraBefore, cameraAfter, 'dragging moved the camera');
      assert.equal(document.getElementById('height-display').textContent, heightBefore, 'a drag is not a drop');
      assert.equal(document.getElementById('game-stage').classList.contains('is-orbiting'), false);
      pointer(window, canvas, 'pointerdown', 140, 260);
      pointer(window, canvas, 'pointerup', 140, 260);
      await page.sleep(120);
      assert.equal(document.getElementById('height-display').textContent, String(Number(heightBefore) + 1), 'a tap drops');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('two fingers pinch to zoom, and releasing them never drops', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      document.getElementById('start-button').click();
      await page.sleep(1000);
      const canvas = document.getElementById('game-canvas');
      const records = window.__glRecords;
      const heightBefore = document.getElementById('height-display').textContent;
      const radius = point => Math.hypot(point[0], point[1], point[2]);
      const before = radius(records.camPositions.slice(-1)[0]);
      pointer(window, canvas, 'pointerdown', 120, 260, 1);
      pointer(window, canvas, 'pointerdown', 240, 260, 2);
      pointer(window, canvas, 'pointermove', 60, 260, 2);
      pointer(window, canvas, 'pointermove', 300, 260, 2);
      pointer(window, canvas, 'pointerup', 60, 260, 1);
      pointer(window, canvas, 'pointerup', 300, 260, 2);
      await page.sleep(350);
      const after = radius(records.camPositions.slice(-1)[0]);
      assert.ok(after - before > 0.8, `spreading two fingers should pull the camera back (${before} -> ${after})`);
      assert.equal(document.getElementById('height-display').textContent, heightBefore, 'a pinch is not a drop');
      assert.equal(document.getElementById('game-stage').classList.contains('is-orbiting'), false);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the 3D/2D button switches views, persists, and restores the classic board', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      document.getElementById('start-button').click();
      await page.sleep(500);
      const stage = document.getElementById('game-stage');
      assert.ok(stage.classList.contains('is-3d'));
      const toggle = document.getElementById('view-toggle');
      toggle.click();
      await page.sleep(300);
      assert.equal(stage.classList.contains('is-3d'), false);
      assert.equal(window.localStorage.getItem(VIEW_KEY), '2d');
      assert.equal(toggle.textContent, '2D');
      assert.equal(toggle.getAttribute('aria-pressed'), 'false');
      assert.match(toggle.getAttribute('aria-label'), /3D view/i);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10).join(','), PAPER_SKY);
      toggle.click();
      await page.sleep(450);
      assert.ok(stage.classList.contains('is-3d'), 'the button returns to 3D');
      assert.equal(window.localStorage.getItem(VIEW_KEY), 'auto');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a saved classic-view choice starts in 2D and is respected', async () => {
    const page = await boot(HTML, { setup: withFakeGpu(), storage: { [VIEW_KEY]: '2d' } });
    try {
      const { document } = page;
      assert.equal(document.getElementById('view-toggle').textContent, '2D');
      document.getElementById('start-button').click();
      await page.sleep(400);
      assert.equal(document.getElementById('game-stage').classList.contains('is-3d'), false);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10).join(','), PAPER_SKY);
      assert.equal(page.window.__glRecords.camPositions.length, 0, 'classic view never starts the renderer');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('theme changes recolour the 3D scene live', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      document.getElementById('start-button').click();
      await page.sleep(450);
      window.__glRecords.themes.length = 0;
      const select = document.getElementById('theme-select');
      select.value = 'sunset';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(350);
      assert.ok(document.getElementById('game-stage').classList.contains('is-3d'));
      assert.ok(window.__glRecords.themes.includes(1), 'Sunset reaches the renderer');
      select.value = 'primetime';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(350);
      assert.ok(window.__glRecords.themes.includes(2), 'Prime Time reaches the renderer');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('every sabotage can be previewed in 3D without a renderer error', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document, window } = page;
      document.getElementById('dev-mode-button').click();
      await page.sleep(400);
      assert.ok(document.getElementById('game-stage').classList.contains('is-3d'), 'practice uses the 3D view');
      for (const id of ['normal', 'earthquake', 'pisa', 'spotlight', 'peekaboo', 'zoom', 'double', 'accordion', 'crumble', 'superglue', 'calipers', 'portal', 'rollercoaster', 'magnet', 'turbo', 'drunk']) {
        document.querySelector(`[data-dev-effect="${id}"]`).click();
        await page.sleep(120);
      }
      assert.ok(window.__glRecords.draws > 100);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a missing renderer falls back to the classic board without an error', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document } = page;
      page.window.SabotageStack3D = { version: 1, themes: [], create: () => null };
      document.getElementById('start-button').click();
      await page.sleep(450);
      assert.equal(document.getElementById('game-stage').classList.contains('is-3d'), false);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10).join(','), PAPER_SKY);
      assert.equal(document.getElementById('view-toggle').hidden, true, 'a failed renderer is not offered');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a shader compile failure is contained by the fallback', async () => {
    const page = await boot(HTML, { setup: withFakeGpu({ failCompile: true }) });
    try {
      const { document, window } = page;
      document.getElementById('start-button').click();
      await page.sleep(450);
      assert.equal(document.getElementById('game-stage').classList.contains('is-3d'), false);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10).join(','), PAPER_SKY);
      assert.ok(window.__glRecords.contexts >= 1, 'the engine was probed before falling back');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the results screen keeps the final tower as a 3D trophy', async () => {
    const page = await boot(HTML, {
      setup: withFakeGpu(),
      manualAnimationFrame: true,
      storage: { 'sabotage-stack-solo-auto-drop-v1': 'off' }
    });
    try {
      const { document, window } = page;
      page.advanceAnimation(200);
      document.getElementById('start-button').click();
      page.advanceAnimation(300);
      document.getElementById('drop-button').click();
      document.getElementById('drop-button').click();
      document.getElementById('drop-button').click();
      page.advanceAnimation(1400);
      assert.equal(document.body.dataset.screen, 'results');
      const frame = document.querySelector('.results-frame');
      assert.ok(frame.classList.contains('is-3d'), 'the final tower is rendered in 3D');
      const canvas = document.getElementById('results-canvas-3d');
      assert.ok(canvas.width > 0 && canvas.height > 0);
      const draws = window.__glRecords.draws;
      page.advanceAnimation(120);
      assert.ok(window.__glRecords.draws > draws, 'the trophy turntable keeps painting');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the classic canvas keeps dropping blocks after a 3D session', async () => {
    const page = await boot(HTML, { setup: withFakeGpu() });
    try {
      const { document } = page;
      document.getElementById('start-button').click();
      await page.sleep(400);
      document.getElementById('view-toggle').click();
      await page.sleep(200);
      document.getElementById('drop-button').click();
      await page.sleep(120);
      assert.equal(document.getElementById('height-display').textContent, '1');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});
