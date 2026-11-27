'use strict';
// Looking around the 3D scenes: wheel zoom, the game's right-button orbit, the on-screen view controls, the bottoms of the pages,
// and the guards that keep one bad pixel from blacking out a frame. Everything here is the render / interaction layer: the rules,
// the protocol and the solo logic are covered by their own tests and are untouched.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const stageSource = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
const load = name => import(path.join(ROOT, 'client3d', name));
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

let boot = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { boot = null; }

describe('wheel zoom (client3d/view-zoom.js)', () => {
  test('a wheel event is read in pixels whatever unit the browser reports, and one event never zooms by more than a hard flick', async () => {
    const { wheelPixels, zoomFactor } = await load('view-zoom.js');
    assert.equal(wheelPixels(100, 0), 100); assert.equal(wheelPixels(3, 1), 99, 'three lines'); assert.equal(wheelPixels(-9999, 0), -240, 'clamped');
    assert.equal(wheelPixels(1, 2), 240, 'a page is clamped too'); assert.equal(wheelPixels(NaN), 0); assert.equal(wheelPixels(undefined), 0);
    assert.ok(near(zoomFactor(-100), Math.exp(0.13))); assert.ok(near(zoomFactor(-100) * zoomFactor(100), 1), 'a notch back undoes a notch forward');
    assert.ok(zoomFactor(-100) > 1 && zoomFactor(100) < 1, 'rolling the wheel away from you zooms in');
  });

  test('the wheel zooms in and out between the limits and says whether it used the event', async () => {
    const { ZoomController, ZOOM_MIN, ZOOM_MAX } = await load('view-zoom.js');
    assert.ok(ZOOM_MIN < 1 && ZOOM_MAX > 1 && ZOOM_MIN === 0.5);
    const z = new ZoomController();
    assert.equal(z.value, 1); assert.equal(z.zoomed, false);
    for (let i = 0; i < 5; i += 1) assert.equal(z.wheel(-100, 0, i * 0.05), true);
    assert.ok(near(z.target, Math.exp(0.65)), 'five notches in'); assert.ok(z.zoomed); assert.equal(z.value, 1, 'the value eases towards the target, it does not jump');
    for (let i = 0; i < 5; i += 1) z.wheel(100, 0, 1 + i * 0.05);
    assert.ok(near(z.target, 1, 1e-9), 'five notches out undo them'); assert.equal(z.zoomed, false, 'back at the default view counts as not zoomed');
    assert.equal(z.wheel(0), false, 'an empty event is not used'); assert.equal(z.wheel(NaN), false);
    for (let i = 0; i < 80; i += 1) z.wheel(-100, 0, 2 + i * 0.01);
    assert.equal(z.target, ZOOM_MAX); assert.ok(z.atMax && !z.atMin);
    for (let i = 0; i < 80; i += 1) z.wheel(100, 0, 3 + i * 0.01);
    assert.equal(z.target, ZOOM_MIN); assert.ok(z.atMin && !z.atMax);
  });

  test('the wheel stays with the scene at both zoom limits, even after a long pause', async () => {
    const { ZoomController } = await load('view-zoom.js');
    for (const direction of [-1, 1]) {
      const z = new ZoomController();
      for (let i = 0; i < 80; i++) z.wheel(direction * 100, 0, 10 + i * .01);
      const limit = direction < 0 ? z.max : z.min;
      assert.equal(z.target, limit);
      for (const time of [11, 20, 600]) {
        assert.equal(z.wheel(direction * 100, 0, time), true, 'a limit never hands scrolling back to the page');
        assert.equal(z.target, limit, 'zoom remains clamped');
      }
      assert.equal(z.wheel(-direction * 100, 0, 601), true);
      assert.notEqual(z.target, limit, 'reversing the wheel still zooms normally');
    }
  });

  test('the + and - buttons take fixed steps, and a button press at the limit changes nothing', async () => {
    const { ZoomController, ZOOM_MAX } = await load('view-zoom.js');
    const z = new ZoomController();
    assert.equal(z.zoomBy(1.3), true); assert.ok(near(z.target, 1.3)); assert.equal(z.zoomBy(1 / 1.3), true); assert.ok(near(z.target, 1));
    assert.equal(z.zoomBy(0), false, 'nonsense is no step'); assert.equal(z.zoomBy(NaN), false); assert.equal(z.zoomBy(-2), false);
    for (let i = 0; i < 30; i += 1) z.zoomBy(1.3);
    assert.equal(z.target, ZOOM_MAX); assert.equal(z.zoomBy(1.3), false);
  });

  test('the value glides to the target in the logarithm (in and out take as long) and Reduced Motion goes at once', async () => {
    const { ZoomController } = await load('view-zoom.js');
    const run = (c, seconds) => { const trail = []; for (let i = 0; i < Math.round(seconds * 60); i += 1) { c.update(1 / 60); trail.push(c.value); } return trail; };
    const a = new ZoomController(); a.wheel(-300, 0, 0); const up = run(a, 0.5);
    assert.ok(up.every((v, i) => i === 0 || v >= up[i - 1]) && up[0] > 1 && up.at(-1) < a.target + 1e-9, 'monotone, never past the target');
    run(a, 2); assert.equal(a.value, a.target, 'it lands exactly'); assert.equal(a.moving, false);
    const b = new ZoomController(); b.wheel(300, 0, 0); const down = run(b, 0.5);
    assert.ok(near(Math.log(up[29]), -Math.log(down[29]), 1e-9), 'symmetric in the logarithm: the zoom out that undoes a zoom in takes the same time');
    const r = new ZoomController(); r.setReduced(true); r.wheel(-300, 0, 0); assert.equal(r.value, r.target, 'instant');
    r.zoomBy(1.3, 1); assert.equal(r.value, r.target); r.reset(); assert.equal(r.value, 1); assert.equal(r.zoomed, false);
  });

  test('reset glides back to the default view (a new wheel event takes over), and snap leaves the scene at once', async () => {
    const { ZoomController } = await load('view-zoom.js');
    const z = new ZoomController(); z.wheel(-400, 0, 0); z.wheel(-400, 0, 0.01); for (let i = 0; i < 90; i += 1) z.update(1 / 60);
    const from = z.value; assert.ok(from > 1.5);
    z.reset(0.9); assert.equal(z.target, 1, 'the target is home at once'); assert.ok(z.moving);
    const trail = []; for (let i = 0; i < 20; i += 1) { z.update(1 / 60); trail.push(z.value); }
    assert.ok(trail.every((v, i) => i === 0 || v <= trail[i - 1]) && trail[0] < from, 'eased, not a cut');
    z.wheel(-100, 0, 5); assert.equal(z.moving, true); assert.ok(z.target > 1, 'the visitor takes the wheel back mid-glide');
    for (let i = 0; i < 120; i += 1) z.update(1 / 60); assert.equal(z.value, z.target);
    z.reset(0.9); for (let i = 0; i < 70; i += 1) z.update(1 / 60); assert.equal(z.value, 1); assert.equal(z.moving, false);
    z.wheel(-200, 0, 9); z.snap(); assert.equal(z.value, 1); assert.equal(z.target, 1); assert.equal(z.moving, false);
  });
});

describe('the game\'s view controls (client3d/orbit-hud.js)', () => {
  test('zoom buttons sit beside the turn buttons, named for assistive tech, and call back with the step', async () => {
    assert.ok(boot, 'the jsdom client harness loads'); const { createOrbitHud, ZOOM_STEP } = await load('orbit-hud.js'); const page = await boot(HTML_PATH);
    try {
      const zooms = []; const hud = createOrbitHud({ doc: page.document, storage: null, onZoom: f => zooms.push(f) });
      const row = [...hud.root.querySelectorAll('.orbit-row button')].map(b => b.dataset.zoom ? `zoom:${b.dataset.zoom}` : `orbit:${b.dataset.orbit}`);
      assert.deepEqual(row, ['zoom:out', 'zoom:in', 'orbit:left', 'orbit:reset', 'orbit:right']);
      assert.deepEqual([...hud.root.querySelectorAll('button[data-orbit]')].map(b => b.dataset.orbit), ['left', 'reset', 'right'], 'the three turn buttons are unchanged');
      const zoomButtons = [...hud.root.querySelectorAll('button[data-zoom]')];
      assert.ok(zoomButtons.every(b => b.type === 'button' && b.getAttribute('aria-label') && b.title && b.querySelector('svg[aria-hidden="true"]')));
      zoomButtons[1].click(); zoomButtons[0].click(); assert.deepEqual(zooms, [ZOOM_STEP, 1 / ZOOM_STEP]); assert.ok(ZOOM_STEP > 1 && ZOOM_STEP < 2);
      hud.dispose(); assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the game\'s controls live in the game screen with their own hint, remembered apart from the home page\'s', async () => {
    const { createOrbitHud, hintSeen, rememberHint } = await load('orbit-hud.js'); const page = await boot(HTML_PATH);
    try {
      const store = new Map(); const storage = { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, v) };
      const hint = { mouse: '<span class="orbit-hint-full"><b>Right-drag</b> to look around, <b>scroll</b> to zoom</span><span class="orbit-hint-short">Right-drag to look</span>' };
      const hud = createOrbitHud({ doc: page.document, storage, hostId: 'game-screen', id: 'orbit-hud-play', dock: false, layout: 'stage', hint, hintKey: 'play-hint-test' });
      assert.ok(page.document.getElementById('game-screen').contains(hud.root), 'inside the game screen, so the page hides it with the screen');
      assert.ok(hud.root.classList.contains('is-stage')); assert.equal(hud.root.querySelector('.toy-dock'), null, 'no toy dock in the game');
      assert.match(hud.root.querySelector('.orbit-hint').textContent, /Right-drag to look around/); assert.ok(hud.root.firstElementChild.classList.contains('orbit-hint'), 'the hint sits above the buttons');
      assert.equal(hud.root.querySelectorAll('.orbit-row button').length, 5);
      assert.equal(hintSeen(storage, 'play-hint-test'), false); hud.quiet(); assert.equal(hintSeen(storage, 'play-hint-test'), true, 'remembered under its own key');
      assert.equal(hintSeen(storage), false, 'the home page\'s hint is not used up by the game');
      rememberHint(storage); assert.equal(hintSeen(storage), true); hud.dispose();
      const again = createOrbitHud({ doc: page.document, storage, hostId: 'game-screen', id: 'orbit-hud-play', layout: 'stage', hintKey: 'play-hint-test' }); assert.ok(again.root.classList.contains('is-quiet')); again.dispose();
      const home = createOrbitHud({ doc: page.document, storage: { getItem: () => null, setItem() {} } });
      assert.match(home.root.querySelector('.orbit-hint').textContent, /scroll to zoom/i, 'the home hint tells about the wheel too'); assert.ok(!home.root.classList.contains('is-stage')); home.dispose();
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('Stage supplies control placement and composes interaction adjustments with its camera', () => {
    assert.match(stageSource, /new SceneInteraction\(\{/);
    assert.match(stageSource, /this\.interaction\.activate\(\)/);
    assert.match(stageSource, /this\.interaction\.dispose\(\)/);
    assert.match(stageSource, /this\.interaction\.placeHud\('play', rect\.x \+ rect\.w - 10, rect\.y \+ rect\.h - 12, dt\)/);
    assert.match(stageSource, /const ceiling = sr && sr\.height > 4 && sr\.top < H \? sr\.top - 10 : Infinity;/);
    assert.match(stageSource, /this\.placeCameraAt\([^;]*this\.rig\.yaw \+ uv\.yaw, this\.rig\.pitch \+ uv\.pitch, this\.rig\.zoom \* uv\.zoom, roll, shake\);/);
    assert.match(html, /elements\.gameCanvas\.addEventListener\('pointerdown'[^]*?event\.pointerType === 'mouse' && event\.button !== 0/);
  });
});

describe('the bottoms of the pages and the controls\' CSS (sabotage-stack.html)', () => {
  test('the strip under the home scene and the Drop row under the tower are rounded, padded glass (only while the 3D layer runs)', () => {
    assert.match(html, /html:root \.home-bottom \{\s*min-height: 44px; height: auto; padding: 8px 18px;[^}]*border: 1px solid var\(--edge\); border-radius: 16px;/, 'the strip keeps its 44px on one line and only grows when its words wrap');
    assert.match(html, /html:root \.control-row \{\s*width: auto; margin-top: 4px; padding: 9px 14px 11px; justify-content: center;[^}]*border-radius: 20px;/, 'one pill round the Drop key and its help');
    assert.match(html, /html:root \.control-help \{ background: transparent;/, 'the pill is the glass; the help does not double it');
    assert.match(html, /html:root \.play-card > \.position-audio-toggle \{ margin-top: 10px; \}/, 'the tone button has room of its own below the pill');
    assert.match(html, /@media \(max-width: 700px\) \{\s*html:root \.home-bottom \{ justify-content: center; padding: 8px 14px; text-align: center; \}/);
    // nothing of it leaks into the flat view
    const outside = html.replace(/html:root[^{}]*\{[^{}]*\}/g, '');
    assert.doesNotMatch(outside, /\.home-bottom \{[^}]*border-radius: 16px/); assert.doesNotMatch(outside, /\.control-row \{[^}]*border-radius: 20px/);
    // the layout contract the other tests pin stays as it was
    assert.match(html, /\.control-row \{ width: 100%; max-width: 420px; display: flex; align-items: center; gap: 12px; padding-top: 13px; touch-action: pan-y; \}/);
  });

  test('the game\'s view controls are styled for the stage: quiet until the pointer is near, the grab cursor while turning', () => {
    assert.match(html, /\.orbit-hud\.is-stage \{ gap: 6px; \}/);
    assert.match(html, /\.orbit-hud\.is-stage \.orbit-row \{ opacity: \.8; transition: opacity \.2s ease; \}/);
    assert.match(html, /\.orbit-hud\.is-stage:hover \.orbit-row, \.orbit-hud\.is-stage:focus-within \.orbit-row \{ opacity: 1; \}/);
    assert.match(html, /html\.orbiting #game-canvas \{ cursor: grabbing; \}/);
    assert.match(html, /\.orbit-row \{ flex-wrap: wrap; \}/, 'the row wraps on a phone instead of running off the screen');
    assert.match(html, /\.orbit-hud \{ position: fixed;[^}]*pointer-events: none;/); assert.match(html, /\.orbit-hud \.orbit-btn, \.orbit-hud \.toy-key \{ pointer-events: auto; \}/);
  });
});

describe('one bad pixel never blacks out the frame (client3d/shader-guards.js)', () => {
  test('three\'s bump mapping never normalises a vector it has no direction for', async () => {
    const { hardenBumpChunk, SAFE_NORMALIZE } = await load('shader-guards.js'); const THREE = await import('three');
    const original = THREE.ShaderChunk.bumpmap_pars_fragment; const patched = hardenBumpChunk(original);
    // (when this fails after a three upgrade, the chunk changed shape: update the patterns in shader-guards.js)
    assert.notEqual(patched, original, 'the chunk this was written for is the chunk three ships');
    assert.ok(patched.includes(SAFE_NORMALIZE));
    assert.match(SAFE_NORMALIZE, /vec3 safeNormalize\( vec3 v, vec3 fallback \) \{ float l = dot\( v, v \); return l > 1e-24 \? v \* inversesqrt\( l \) : fallback; \}/, 'the helper only normalises what has a length');
    assert.doesNotMatch(patched, /normalize\( dFd[xy]\(/, 'the screen-space derivatives of an edge-on sliver are exactly zero');
    assert.match(patched, /vec3 vSigmaX = safeNormalize\( dFdx\( surf_pos\.xyz \), vec3\( 1\.0, 0\.0, 0\.0 \) \);/);
    assert.match(patched, /vec3 vSigmaY = safeNormalize\( dFdy\( surf_pos\.xyz \), vec3\( 0\.0, 1\.0, 0\.0 \) \);/);
    assert.match(patched, /return safeNormalize\( abs\( fDet \) \* surf_norm - vGrad, surf_norm \);/, 'a vanishing perturbation keeps the surface normal');
    assert.equal(hardenBumpChunk(patched), patched, 'idempotent'); assert.equal(hardenBumpChunk('void main() {}'), 'void main() {}', 'a chunk of another shape is left alone'); assert.equal(hardenBumpChunk(null), null);
    assert.equal((patched.match(/uniform sampler2D bumpMap;/g) || []).length, 1, 'nothing else of the chunk moved');
    // the same arithmetic as the GLSL helper, in JS, on the cases that matter
    const safe = (v, fallback) => { const l = v[0] * v[0] + v[1] * v[1] + v[2] * v[2]; return l > 1e-24 ? v.map(c => c / Math.sqrt(l)) : fallback; };
    assert.deepEqual(safe([0, 0, 0], [1, 0, 0]), [1, 0, 0]); assert.ok(near(Math.hypot(...safe([3, 0, 4], [1, 0, 0])), 1)); assert.ok(near(safe([3, 0, 4], [1, 0, 0])[2], 0.8));
  });

  test('the bloom\'s high-pass filter drops NaN and Infinity, which would otherwise be blurred over the whole view', async () => {
    const { hardenHighPass, guardBloomPass } = await load('shader-guards.js'); const { LuminosityHighPassShader } = await import('three/examples/jsm/shaders/LuminosityHighPassShader.js');
    const original = LuminosityHighPassShader.fragmentShader; const patched = hardenHighPass(original);
    assert.notEqual(patched, original); assert.match(patched, /if \( any\( isnan\( texel \) \) \|\| any\( isinf\( texel \) \) \) texel = vec4\( 0\.0 \);/); assert.match(patched, /texel = min\( texel, vec4\( 64\.0 \) \);/);
    assert.ok(patched.indexOf('texture2D( tDiffuse, vUv )') < patched.indexOf('isnan'), 'the sample is checked after it is read and before it is used');
    assert.equal(hardenHighPass(patched), patched, 'idempotent'); assert.equal(hardenHighPass('void main() {}'), 'void main() {}');
    const pass = { materialHighPassFilter: { fragmentShader: original, needsUpdate: false } };
    assert.equal(guardBloomPass(pass), true); assert.equal(pass.materialHighPassFilter.needsUpdate, true); assert.equal(pass.materialHighPassFilter.fragmentShader, patched);
    assert.equal(guardBloomPass({}), false, 'a pass without a high-pass material is not an error'); assert.equal(guardBloomPass(null), false);
  });

  test('the engine installs both guards before its first program is compiled, and the guards are applied to three\'s own chunk list', async () => {
    const engine = fs.readFileSync(path.join(ROOT, 'client3d', 'engine.js'), 'utf8');
    assert.match(engine, /import \{ applyShaderGuards, guardBloomPass \} from '\.\/shader-guards\.js';/);
    assert.ok(engine.indexOf('applyShaderGuards();') > 0 && engine.indexOf('applyShaderGuards();') < engine.indexOf('new THREE.WebGLRenderer('), 'the chunk is read when a program is built');
    assert.match(engine, /this\.bloomPass = new UnrealBloomPass\([^;]*\); guardBloomPass\(this\.bloomPass\);/, 'every rebuilt composer gets a guarded bloom');
    const { applyShaderGuards } = await load('shader-guards.js'); const chunks = { bumpmap_pars_fragment: (await import('three')).ShaderChunk.bumpmap_pars_fragment };
    assert.equal(applyShaderGuards(chunks), true); assert.ok(chunks.bumpmap_pars_fragment.includes('safeNormalize')); assert.equal(applyShaderGuards(chunks), true, 'again is harmless');
  });
});

describe('the lobby and the podium turn and zoom like every other scene', () => {
  test('the lobby and the podium add the visitor\'s view on top of their own camera, close in on what is there, and keep their labels facing the viewer', () => {
    const lobby = stageSource.slice(stageSource.indexOf('  update_lobby(dt, view) {'), stageSource.indexOf('  dispose() {'));
    const podium = stageSource.slice(stageSource.indexOf('  update_celebrate(dt, view) {'), stageSource.indexOf('  // The lobby: one block of every colour'));
    for (const [name, text] of [['lobby', lobby], ['podium', podium]]) {
      assert.match(text, /const uv = this\.userView\(dt, [^;]*\{ idleReset: true \}\); this\.facing = uv\.yaw;/, `${name}: a scene on show returns to its default view by itself`);
      assert.match(text, /this\.placeCameraAt\([^;]*px \* uv\.par \+ [^;]*\+ uv\.yaw, 0\.1 \+ py \* uv\.par \+ uv\.pitch, uv\.zoom\);/, `${name}: the visitor's turn and zoom are added to the scene's camera, and the pointer's parallax steps aside while turning`);
      assert.match(text, /this\.world\.setViewYaw\(uv\.yaw\);/, `${name}: the crowd's galleries, the lights and the sky turn with the camera`);
    }
    assert.match(lobby, /tower\.setFacing\(uv\.yaw\)/); assert.match(podium, /tower\.setFacing\(uv\.yaw\)/, 'the Teamwork plaques turn too');
    assert.match(lobby, /this\.reduced, uv\.yaw\);/, 'the totems turn to face the viewer');
    assert.match(lobby, /const anchorY = lerp\(230, 70, zk\);[^]*?free\.x \+ free\.w \/ 2, screenY - \(anchorY - 230\) \* ppu1, free, 620, wide \? 760 : 640/, 'zooming in closes in on the totems, not on the air above them');
    assert.match(lobby, /this\.placeLobbyHud\(W, H, dt\)/); assert.match(podium, /this\.interaction\.placeHud\('results', wide \? W - 16 : free\.x \+ free\.w - 14, wide \? H - 14 : free\.y \+ free\.h - 12, dt\)/);
  });

  test('the totems turn on the spot to face the viewer, and the Teamwork plaques turn on their blocks', async () => {
    const { Totems } = await load('totems.js'); const { Tower } = await load('tower.js'); const { paletteFor } = await load('palette.js');
    const totems = new Totems('paper', paletteFor('paper')); const players = [{ id: 'a', name: 'Ann', color: '#E3A33B', ready: true }, { id: 'b', name: 'Bo', color: '#2F8478', ready: false }];
    totems.sync(players, 0.016, 5, { x: 0, y: 0 }, true); const front = [...totems.items.values()].map(item => item.group.rotation.y);
    totems.sync(players, 0.016, 5.016, { x: 0, y: 0 }, true, 1.1); const turned = [...totems.items.values()].map(item => item.group.rotation.y);
    assert.equal(front.length, 2); front.forEach((yaw, i) => assert.ok(near(turned[i] - yaw, 1.1, 1e-9), 'each figure turns by the view\'s yaw, in place'));
    const positions = [...totems.items.values()].map(item => [item.group.position.x, item.group.position.z]); totems.sync(players, 0.016, 5.032, { x: 0, y: 0 }, true, -2.4);
    [...totems.items.values()].forEach((item, i) => assert.deepEqual([item.group.position.x, item.group.position.z], positions[i], 'turning never moves the line-up'));
    totems.dispose();

    const plaque = () => ({ rotation: { y: 0 } }); const meshes = [{ userData: {} }, null, { userData: { plaque: plaque() } }, { userData: { plaque: plaque() } }];
    const stand = { facing: 0, meshes }; Tower.prototype.setFacing.call(stand, 0.8);
    assert.equal(stand.facing, 0.8); assert.equal(meshes[2].userData.plaque.rotation.y, 0.8); assert.equal(meshes[3].userData.plaque.rotation.y, 0.8);
    meshes[2].userData.plaque.rotation.y = 99; Tower.prototype.setFacing.call(stand, 0.8); assert.equal(meshes[2].userData.plaque.rotation.y, 99, 'the same view costs nothing');
    const tower = fs.readFileSync(path.join(ROOT, 'client3d', 'tower.js'), 'utf8'); assert.match(tower, /plane\.rotation\.y = this\.facing; mesh\.add\(plane\)/, 'a plaque added later starts out facing the view');
  });

  test('the lobby\'s controls stay out of the way where the cards cover the whole scene', () => {
    assert.match(html, /@media \(max-width: 899px\) \{ #orbit-hud-lobby \{ display: none; \} \}/);
    assert.match(stageSource, /const wide = W >= 900;/, 'the breakpoint the stage frames the lobby by is the one the page hides the controls at');
  });
});
