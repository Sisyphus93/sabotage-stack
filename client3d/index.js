// Sabotage Stack 3D view. Presentation only: it never decides a drop. The page hands it the same plain game state
// the 2D canvas draws from, and it renders that state as a lit, shadowed, post-processed scene.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { THEMES, DEPTH, BLOCK_H, HALF_W, makeBackdrop, makeEnvironment, disposeTree } from './themes.js';
import { Particles } from './particles.js';
import { Tower, Kit } from './tower.js';
import { VoxelText } from './voxel.js';
import { Emblems, EMBLEM_IDS } from './emblems.js';
import { Attract } from './attract.js';

const FOV = 35;
const TAN_HALF = Math.tan(FOV * Math.PI / 360);
const SINGLE_DISTANCE = 1010;
const ELEVATION = 13.5 * Math.PI / 180;
const BASE_YAW = -9 * Math.PI / 180;
const TOWER_SPACING = 430;
const STRIPES = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
const CAROUSEL = EMBLEM_IDS.filter(id => id !== 'empty');
const easeOut = k => 1 - Math.pow(1 - k, 3);
const easeInOut = k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

// Spotlight sabotage: an opaque veil with one circular opening, applied after bloom so nothing leaks through it.
const VeilShader = {
  uniforms: {
    tDiffuse: { value: null }, uCentre: { value: new THREE.Vector2(0.5, 0.5) }, uRadius: { value: 0.1 }, uAspect: { value: 1 },
    uVeil: { value: new THREE.Color('#000000') }, uBeam: { value: new THREE.Color('#ffffff') }, uPixel: { value: 0.002 }
  },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform vec2 uCentre; uniform float uRadius; uniform float uAspect; uniform float uPixel;
    uniform vec3 uVeil; uniform vec3 uBeam;
    void main() {
      vec2 d = (vUv - uCentre) * vec2(uAspect, 1.0);
      float r = length(d);
      vec3 scene = texture2D(tDiffuse, vUv).rgb;
      float inside = 1.0 - smoothstep(uRadius - uPixel, uRadius + uPixel, r);
      // A faint shaft above the opening is painted on the veil itself; it never reveals the scene.
      float up = vUv.y - uCentre.y;
      float halfWidth = mix(uRadius, uRadius * 0.28, clamp(up / max(0.001, 1.0 - uCentre.y), 0.0, 1.0));
      float shaft = step(0.0, up) * (1.0 - smoothstep(halfWidth * 0.7, halfWidth, abs(d.x))) * 0.07;
      vec3 veil = uVeil + uBeam * shaft;
      float ring = 1.0 - smoothstep(uPixel * 0.6, uPixel * 2.2, abs(r - uRadius));
      vec3 col = mix(veil, scene, inside);
      col = mix(col, uBeam, ring * 0.95);
      gl_FragColor = vec4(col, 1.0);
    }`
};

function isWebGL2(gl) { return Boolean(gl && typeof gl.createShader === 'function' && typeof gl.createVertexArray === 'function' && typeof gl.getParameter === 'function'); }

export function supported() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    const ok = isWebGL2(gl);
    if (ok) { const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); }
    return ok;
  } catch (_) { return false; }
}

class View {
  constructor({ core, onContextLost } = {}) {
    this.core = core;
    this.canvas = document.createElement('canvas');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: false });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.localClippingEnabled = true;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.lost = true; if (onContextLost) onContextLost(); });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV, 360 / 520, 20, 12000);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const room = new RoomEnvironment();
    this.envTexture = pmrem.fromScene(room, 0.04).texture;
    this.scene.environment = this.envTexture;
    pmrem.dispose(); disposeTree(room);

    this.hemi = new THREE.HemisphereLight('#ffffff', '#888888', 1);
    this.sun = new THREE.DirectionalLight('#ffffff', 2);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera; sc.left = -520; sc.right = 520; sc.top = 520; sc.bottom = -520; sc.near = 50; sc.far = 2600;
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.6;
    this.scene.add(this.hemi, this.sun, this.sun.target);

    this.world = new THREE.Group(); this.scene.add(this.world);
    this.particles = new Particles(1100); this.scene.add(this.particles.points);
    this.towers = new Map();
    this.mode = ''; this.time = 0; this.reduced = false; this.themeName = ''; this.theme = null; this.kit = null;
    this.width = 360; this.height = 520; this.pixelRatio = 1; this.devicePixelRatio = 1;
    this.quality = 0; this.frameSamples = []; this.lastNow = 0;
    this.rig = { y: 258, zoom: 1, kick: 0, punch: 0, collapse: 0, shake: 0, orbit: 0.55, distance: SINGLE_DISTANCE, x: 0, snap: true };
    this.cameraFloor = 0; this.railY = null;
    this.tmp = new THREE.Vector3(); this.tmp2 = new THREE.Vector3(); this.tmp3 = new THREE.Vector3(); this.quat = new THREE.Quaternion();
    // The canvas covers the whole page. `focus` is the rectangle (CSS pixels) each scene is composed for; the rest of
    // the window simply sees more of the same world around it.
    this.focus = { x: 0, y: 0, w: 360, h: 520 }; this.focusNow = { x: 0, y: 0, w: 360, h: 520 };
    this.blend = null; this.pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false };
    this.monument = new VoxelText(440); this.monument.group.position.set(0, 330, -260); this.world.add(this.monument.group);
    this.numeral = new VoxelText(200); this.world.add(this.numeral.group);
    this.attract = new Attract(); this.sceneClock = 0; this.fxClock = 5; this.fx = null; this.emblems = null; this.portraitCache = null;
    this.raycaster = new THREE.Raycaster(); this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const target = new THREE.WebGLRenderTarget(360, 520, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(this.renderer, target);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(360, 520), 0.5, 0.6, 0.8);
    this.veil = new ShaderPass(VeilShader); this.veil.enabled = false;
    this.output = new OutputPass();
    this.composer.addPass(this.renderPass); this.composer.addPass(this.bloom); this.composer.addPass(this.veil); this.composer.addPass(this.output);
    this.setTheme('paper', null);
  }

  setTheme(name, colorMap) {
    const next = THEMES[name] ? name : 'paper';
    if (next === this.themeName && colorMap === this.colorMapRef) return;
    this.themeName = next; this.colorMapRef = colorMap; this.theme = THEMES[next];
    if (this.kit) this.kit.dispose();
    this.kit = new Kit(next, this.theme, colorMap || {});
    if (this.emblems) { this.world.remove(this.emblems.group); this.emblems.dispose(); }
    this.emblems = new Emblems(this.kit, this.theme); this.world.add(this.emblems.group); this.portraitCache = null;
    this.stripes = STRIPES.map(hex => this.kit.color(hex));
    this.monument.setStyle(this.theme.style); this.numeral.setStyle(this.theme.style);
    if (this.env) { this.world.remove(this.env.group); disposeTree(this.env.group); }
    if (this.backdrop) { this.scene.remove(this.backdrop); this.backdrop.geometry.dispose(); this.backdrop.material.dispose(); }
    this.env = makeEnvironment(next); this.world.add(this.env.group);
    this.backdrop = makeBackdrop(next); this.scene.add(this.backdrop);
    const theme = this.theme;
    this.hemi.color.set(theme.hemi[0]); this.hemi.groundColor.set(theme.hemi[1]); this.hemi.intensity = theme.hemi[2];
    this.sun.color.set(theme.sun[0]); this.sun.intensity = theme.sun[1];
    this.scene.environmentIntensity = theme.ambientEnv;
    this.particles.setStyle(theme.particles); this.particles.clear();
    this.veil.uniforms.uVeil.value.set(theme.veil); this.veil.uniforms.uBeam.value.set(theme.glow);
    this.applyQuality();
  }

  resize(cssWidth, cssHeight, devicePixelRatio) {
    const w = Math.max(16, Math.round(cssWidth)); const h = Math.max(16, Math.round(cssHeight));
    const dpr = Math.max(1, Math.min(2, Number(devicePixelRatio) || 1));
    if (w === this.width && h === this.height && dpr === this.devicePixelRatio && this.sized) return;
    this.width = w; this.height = h; this.devicePixelRatio = dpr; this.sized = true;
    this.applySize();
  }
  applySize() {
    const cap = this.quality >= 2 ? 1 : this.quality === 1 ? 1.5 : 2;
    // A full window at 2x is a lot of pixels to post-process: hold the drawing buffer to about three megapixels.
    const budget = Math.sqrt(3.2e6 / Math.max(1, this.width * this.height));
    this.pixelRatio = Math.max(0.75, Math.min(this.devicePixelRatio, cap, budget));
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(this.width, this.height, false);
    this.composer.setPixelRatio(this.pixelRatio);
    this.composer.setSize(this.width, this.height);
  }
  setFocus(x, y, w, h) {
    const f = this.focus; f.x = Number(x) || 0; f.y = Number(y) || 0; f.w = Math.max(16, Number(w) || 16); f.h = Math.max(16, Number(h) || 16);
  }
  get focusAspect() { return this.focus.w / this.focus.h; }
  setPointer(nx, ny) { this.pointer.x = Math.max(-1, Math.min(1, nx)); this.pointer.y = Math.max(-1, Math.min(1, ny)); this.pointer.active = true; }
  icons() {
    if (!this.portraitCache) this.portraitCache = this.emblems.portraits(this.renderer, this.envTexture);
    return this.portraitCache;
  }
  // Scene changes are flights, not cuts: the camera and the framing rectangle ease from wherever they were.
  applyCamera() {
    const camera = this.camera; const target = this.focus; const now = this.focusNow; const b = this.blend;
    if (b && !this.reduced && b.t < 1) {
      b.t = Math.min(1, b.t + this.dt / b.duration);
      const e = easeInOut(b.t);
      camera.position.lerpVectors(b.position, this.tmp2.copy(camera.position), e);
      camera.quaternion.slerpQuaternions(b.quaternion, this.quat.copy(camera.quaternion), e);
      now.x = b.rect.x + (target.x - b.rect.x) * e; now.y = b.rect.y + (target.y - b.rect.y) * e;
      now.w = b.rect.w + (target.w - b.rect.w) * e; now.h = b.rect.h + (target.h - b.rect.h) * e;
      camera.zoom = b.zoom + (camera.zoom - b.zoom) * e;
    } else { this.blend = null; now.x = target.x; now.y = target.y; now.w = target.w; now.h = target.h; }
    camera.aspect = now.w / now.h;
    camera.setViewOffset(now.w, now.h, -now.x, -now.y, this.width, this.height);
    camera.updateMatrixWorld(true);
    this.particles.setPixelScale(now.h * this.pixelRatio / (2 * TAN_HALF));
  }
  applyQuality() {
    const theme = this.theme;
    this.bloom.enabled = this.quality < 2 && theme.bloom.strength > 0.01;
    this.bloom.strength = theme.bloom.strength; this.bloom.radius = theme.bloom.radius; this.bloom.threshold = theme.bloom.threshold;
    this.sun.castShadow = this.quality < 3;
    if (this.sized) this.applySize();
  }
  // Slow devices step down automatically: resolution first, then bloom, then shadows.
  measure() {
    const now = performance.now();
    if (this.lastNow) {
      const delta = now - this.lastNow;
      if (delta < 250) this.frameSamples.push(delta);
      if (this.frameSamples.length >= 90) {
        const sorted = this.frameSamples.slice().sort((a, b) => a - b);
        const median = sorted[sorted.length >> 1];
        this.frameSamples.length = 0;
        if (median > 27 && this.quality < 3) { this.quality += 1; this.applyQuality(); }
      }
    }
    this.lastNow = now;
  }

  setMode(mode) {
    if (this.mode === mode) return;
    if (this.mode && this.rendered) {
      const duration = (mode === 'game' || mode === 'board') ? 1.15 : 1.5;
      this.blend = { t: 0, duration, position: this.camera.position.clone(), quaternion: this.camera.quaternion.clone(), rect: { ...this.focusNow }, zoom: this.camera.zoom };
    }
    this.mode = mode;
    for (const tower of this.towers.values()) tower.dispose();
    this.towers.clear();
    this.particles.clear();
    this.rig.snap = true; this.rig.kick = 0; this.rig.punch = 0; this.rig.collapse = 0; this.rig.shake = 0; this.rig.zoom = 1;
    this.veil.enabled = false;
  }
  ensureTower(id) {
    let tower = this.towers.get(id);
    if (!tower) { tower = new Tower(this); this.towers.set(id, tower); this.world.add(tower.group); }
    return tower;
  }
  pruneTowers(ids) {
    for (const [id, tower] of this.towers) if (!ids.has(id)) { tower.dispose(); this.towers.delete(id); }
  }

  onLand(tower, perfect) {
    if (this.reduced || this.mode !== 'game') return;
    this.rig.kick = Math.min(9, this.rig.kick + (perfect ? 2 : 5));
    if (perfect) this.rig.punch = 0.05;
  }
  onCollapse() { if (!this.reduced && this.mode === 'game') { this.rig.collapse = 0.001; this.rig.shake = 0.7; } }

  begin(dt, reduced) {
    this.reduced = Boolean(reduced);
    this.dt = Math.max(0, Math.min(0.1, Number(dt) || 0));
    this.time += this.reduced ? 0 : this.dt;
    this.measure();
  }
  finish(spotTower) {
    const rig = this.rig;
    this.applyCamera();
    this.monument.push = null;
    if (this.pushFrom) {
      // Where the pointer's ray meets the plane of the sign, the blocks lean away from it.
      this.pushFrom = false;
      const nx = this.pointer.x; const ny = -this.pointer.y;
      this.raycaster.setFromCamera(this.tmp3.set(nx, ny, 0), this.camera);
      this.plane.constant = -this.monument.group.position.z;
      const hit = this.raycaster.ray.intersectPlane(this.plane, this.tmp3);
      if (hit) this.monument.push = { x: hit.x - this.monument.group.position.x, y: hit.y - this.monument.group.position.y, radius: 105 };
    }
    this.monument.update(this.dt, this.reduced); this.numeral.update(this.dt, this.reduced);
    this.emblems.update(this.dt, this.time, this.reduced);
    this.rendered = true;
    this.env.update({ t: this.time, targetY: rig.y, reduced: this.reduced });
    this.particles.update(this.reduced ? 0 : this.dt);
    const uniforms = this.backdrop.material.uniforms;
    uniforms.uTime.value = this.time; uniforms.uAlt.value = rig.y; uniforms.uAspect.value = this.width / this.height;
    const far = this.tmp.set(this.camera.position.x * 0.2, 0, -1750).project(this.camera);
    uniforms.uHorizon.value = 0.5 + 0.5 * far.y;
    this.sun.position.set(rig.x - 380, rig.y + 820, 560);
    this.sun.target.position.set(rig.x, rig.y, 0);
    this.sun.target.updateMatrixWorld();
    const sc = this.sun.shadow.camera;
    const span = this.mode === 'board' ? Math.max(520, this.boardSpan || 520) : this.mode === 'results' ? Math.max(520, this.resultSpan || 520) : 520;
    if (sc.right !== span) { sc.left = -span; sc.right = span; sc.top = span; sc.bottom = -span; sc.far = 2600 + span * 2; sc.updateProjectionMatrix(); }

    const spot = spotTower && spotTower.spot;
    if (spot) {
      const centre = this.tmp.copy(spot).project(this.camera);
      const edgePoint = new THREE.Vector3(0, 52, 0).applyQuaternion(this.camera.quaternion).add(spot).project(this.camera);
      const u = this.veil.uniforms;
      u.uCentre.value.set(0.5 + 0.5 * centre.x, 0.5 + 0.5 * centre.y);
      u.uRadius.value = Math.abs(edgePoint.y - centre.y) * 0.5;
      u.uAspect.value = this.width / this.height;
      u.uPixel.value = 1 / this.height;
      this.veil.enabled = true;
    } else this.veil.enabled = false;
    if (!this.lost) this.composer.render(this.dt);
  }

  /* ---------------------------------------------------------------- the playable view */
  renderGame(model) {
    this.setMode('game');
    this.begin(model.dt, model.reduced);
    const rig = this.rig; const dt = this.dt; const reduced = this.reduced;
    if (this.env.ground) this.env.ground.scale.x = 1;
    const tower = this.ensureTower('solo');
    this.pruneTowers(new Set(['solo']));
    tower.group.position.x = 0;
    const firstSight = tower.key !== model.tower.key;
    if (firstSight) { rig.snap = true; rig.collapse = 0; rig.shake = 0; rig.kick = 0; this.particles.clear(); }
    const top = (model.tower.stack || []).length * BLOCK_H;
    const half = SINGLE_DISTANCE * TAN_HALF;
    const desiredY = Math.max(half * 0.36, top - half * 0.16);
    this.cameraFloor = rig.y - half; this.railY = rig.y;
    tower.sync(model.tower, dt);

    const effect = model.tower.effect || null;
    const id = effect ? effect.id : '';
    const zoomTarget = id === 'zoom' ? 1.85 : 1;
    if (reduced || rig.snap) { rig.y = desiredY; rig.zoom = zoomTarget; }
    else {
      rig.y += (desiredY - rig.y) * (1 - Math.exp(-dt / 0.14));
      rig.zoom += (zoomTarget - rig.zoom) * Math.min(1, dt / 0.12);
      if (Math.abs(rig.zoom - zoomTarget) < 0.001) rig.zoom = zoomTarget;
    }
    rig.snap = false;
    rig.kick *= Math.exp(-dt * 9); rig.punch *= Math.exp(-dt * 6);
    if (rig.collapse > 0) rig.collapse = Math.min(1, rig.collapse + dt / 0.9);
    if (!model.tower.collapsed) rig.collapse = 0;
    rig.shake = Math.max(0, rig.shake - dt);

    const zoomAmount = (rig.zoom - 1) / 0.85;
    let tx = tower.topCentre * zoomAmount;
    let ty = rig.y + (top - BLOCK_H / 2 - rig.y) * zoomAmount - rig.kick;
    if (id === 'earthquake') {
      const tremor = this.core.earthquakeOffset(Number(effect.elapsed) || 0, effect.remaining, reduced);
      tx -= tremor.x; ty += tremor.y;
    }
    if (rig.shake > 0) {
      const s = rig.shake / 0.7; const k = (0.7 - rig.shake) * 70;
      tx += Math.sin(k) * 5 * s; ty += Math.cos(k * 1.3) * 2.4 * s;
    }
    const yaw = BASE_YAW + (reduced ? 0 : Math.sin(this.time * 0.21) * 0.055) + rig.collapse * 0.16;
    const distance = SINGLE_DISTANCE * (1 + rig.collapse * 0.16);
    const elevation = ELEVATION + rig.collapse * 0.05;
    this.camera.position.set(tx + Math.sin(yaw) * Math.cos(elevation) * distance, ty + Math.sin(elevation) * distance, Math.cos(yaw) * Math.cos(elevation) * distance);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(tx, ty, 0);
    if (id === 'pisa') {
      const angle = this.core.pisaAngle(Number(effect.elapsed) || 0, effect.remaining, effect.tiltDirection, reduced);
      if (angle) {
        // Roll about the line of sight through the top platform, so that platform stays put exactly as in the 2D view.
        const axis = this.tmp.set(tower.topCentre, top - BLOCK_H / 2, 0).sub(this.camera.position).normalize();
        this.camera.rotateOnWorldAxis(axis, -angle);
      }
    }
    const zoom = rig.zoom * (1 + rig.punch);
    if (this.camera.zoom !== zoom) { this.camera.zoom = zoom; this.camera.updateProjectionMatrix(); }
    rig.x = 0;
    this.gameProps(model, tower, top);
    this.finish(tower);
  }

  // The scenery that reacts to a run: the height as a stack of blocks beside the lane, the three candidates hovering
  // over the tower while chat votes, and the winning sabotage keeping watch while it is live.
  gameProps(model, tower, top) {
    this.monument.clear();
    const height = Math.max(0, (model.tower.stack || []).length - 1);
    this.numeral.set([String(height)], { cell: 24, depth: 30, colors: this.stripes, colorBy: 'letter', enter: 'morph' });
    this.numeral.group.position.set(-HALF_W - 150 - this.numeral.width / 2, this.rig.y - 10, -170);
    this.numeral.group.rotation.set(0, 0.3, 0);
    const bob = this.reduced ? 0 : Math.sin(this.time * 1.7) * 5;
    const vote = model.vote;
    const effect = model.tower.effect;
    const hidden = effect && (effect.id === 'spotlight');
    if (vote && Array.isArray(vote.options) && !hidden) {
      let total = 0; for (const id of vote.options) total += Number(vote.counts && vote.counts[id]) || 0;
      vote.options.forEach((id, index) => {
        const share = total ? (Number(vote.counts[id]) || 0) / total : 1 / 3;
        this.emblems.aim(id, this.tmp.set((index - 1) * 104, top + 178 + (index === 1 ? 14 : 0) + bob * (index % 2 ? -1 : 1), -70), 22 + 26 * share);
      });
    }
    if (effect && effect.id && !hidden && !(vote && vote.options && vote.options.includes(effect.id))) {
      this.emblems.aim(effect.id, this.tmp.set(128, top + 104 + bob, -84), 30);
    }
  }

  /* ---------------------------------------------------------------- title, lobby and other non-playing scenes */
  renderScene(model) {
    const kind = model.kind === 'lobby' ? 'lobby' : model.kind === 'ambient' ? 'ambient' : 'title';
    this.setMode(kind);
    this.begin(model.dt, model.reduced);
    const rig = this.rig; const dt = this.dt; const reduced = this.reduced;
    if (this.env.ground) this.env.ground.scale.x = 1;
    this.cameraFloor = -1000; this.railY = 258;
    this.sceneClock += reduced ? 10 : dt;
    let lines = ['SABOTAGE', 'STACK']; let cell = 14; let colorBy = 'letter';
    if (kind === 'title') {
      const tower = this.ensureTower('attract'); this.pruneTowers(new Set(['attract']));
      tower.group.position.x = 0;
      const attract = reduced ? this.attract.model : this.attract.update(dt); attract.rails = false;
      tower.sync(attract, dt);
    } else if (kind === 'lobby') {
      const tower = this.ensureTower('crew'); this.pruneTowers(new Set(['crew']));
      tower.group.position.x = 0;
      const players = Array.isArray(model.players) ? model.players : [];
      const code = String(model.code || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 6);
      const stack = [{ left: 80, right: 280, color: STRIPES[0], perfect: false, level: 0 }];
      players.forEach((player, index) => {
        const seed = String(player.id || player.name || index); let hash = 0;
        for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 997;
        const left = 104 + (hash % 37) - 18;
        stack.push({ left, right: left + 152, color: player.color || STRIPES[(index + 1) % 4], perfect: hash % 3 === 0, level: index + 1 });
      });
      tower.sync({ key: `crew:${code}`, stack, moving: null, playing: false, effect: null, collapsed: false, fallen: [], rails: false }, dt);
      if (code) { lines = [code]; cell = code.length > 4 ? 22 : 30; colorBy = 'letter'; } else lines = ['ROOM'];
    } else {
      this.pruneTowers(new Set());
      if (Array.isArray(model.lines) && model.lines.length) lines = model.lines.map(line => String(line).slice(0, 10));
    }
    const first = !this.monumentShown;
    this.monument.set(lines, { cell, depth: cell * 2.2, colors: this.stripes, colorBy, enter: first || kind !== this.monumentKind || this.monument.active === 0 ? 'rain' : 'morph', instant: reduced });
    this.monumentShown = true; this.monumentKind = kind;
    this.numeral.clear();

    // Every so often chat sabotages the sign itself.
    if (!reduced) {
      if (this.fx) { this.fx.k += dt / this.fx.duration; if (this.fx.k >= 1) this.fx = null; }
      else { this.fxClock -= dt; if (this.fxClock <= 0) { const kinds = ['wave', 'hop', 'shiver', 'slip']; this.fx = { kind: kinds[Math.floor(Math.random() * kinds.length)], k: 0, duration: 1.7 }; this.fxClock = 6 + Math.random() * 5; } }
    } else this.fx = null;
    this.monument.fx = this.fx;
    const centre = this.monument.group.position;
    centre.set(0, 330 + (reduced ? 0 : Math.sin(this.time * 0.6) * 6), -260);
    this.monument.group.rotation.z = this.fx && this.fx.kind === 'slip' ? 0 : (reduced ? 0 : Math.sin(this.time * 0.31) * 0.012);

    const pointer = this.pointer;
    const pk = reduced ? 1 : 1 - Math.exp(-dt * 3);
    pointer.sx += (pointer.x - pointer.sx) * pk; pointer.sy += (pointer.y - pointer.sy) * pk;
    const signWidth = Math.max(this.monument.width, 420);
    const signTop = 330 + (this.monument.height || 220);
    const fitWidth = signWidth + 150; const fitHeight = signTop + 110;
    const aspect = this.focusAspect;
    let distance = Math.max(fitWidth / (2 * aspect * TAN_HALF), fitHeight / (2 * TAN_HALF));
    const intro = reduced ? 0 : 1 - easeOut(Math.min(1, this.sceneClock / 3.4));
    let yaw = -0.1 + (reduced ? 0 : Math.sin(this.time * 0.17) * 0.1 + pointer.sx * 0.13) + intro * 1.05;
    let elevation = 0.085 + (reduced ? 0 : -pointer.sy * 0.05) + intro * 0.42;
    distance *= 1 + intro * 0.75;
    const ty = fitHeight / 2 - 40 + intro * 190;
    rig.y = 258; rig.x = 0;
    this.camera.position.set(Math.sin(yaw) * Math.cos(elevation) * distance, ty + Math.sin(elevation) * distance, -110 + Math.cos(yaw) * Math.cos(elevation) * distance);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, ty, -110);
    if (this.camera.zoom !== 1) this.camera.zoom = 1;

    // Sabotages circle the sign like moons.
    const radiusX = Math.min(470, fitWidth * 0.5); const count = CAROUSEL.length;
    for (let i = 0; i < count; i += 1) {
      const a = i / count * Math.PI * 2 + (reduced ? 0.3 : this.time * 0.13);
      this.emblems.aim(CAROUSEL[i], this.tmp.set(Math.sin(a) * radiusX, 236 + Math.cos(a) * -46 + (reduced ? 0 : Math.sin(a * 3 + this.time * 0.7) * 12), -120 + Math.cos(a) * 230), 33);
    }
    this.pushFrom = pointer.active && !reduced;
    this.finish(null);
  }

  /* ---------------------------------------------------------------- Competitive host/spectator board */
  renderBoard(model) {
    this.setMode('board');
    this.begin(model.dt, model.reduced);
    const players = model.players || [];
    const ids = new Set(players.map(player => player.key));
    this.pruneTowers(ids);
    const count = Math.max(1, players.length);
    const span = count * TOWER_SPACING;
    this.boardSpan = span / 2 + 300;
    if (this.env.ground) this.env.ground.scale.x = Math.max(1, span / 860);
    let maxTop = BLOCK_H; let minTop = Infinity;
    players.forEach((player, index) => {
      const tower = this.ensureTower(player.key);
      tower.group.position.x = (index - (count - 1) / 2) * TOWER_SPACING;
      const top = (player.tower.stack || []).length * BLOCK_H;
      maxTop = Math.max(maxTop, top); minTop = Math.min(minTop, top);
    });
    if (!Number.isFinite(minTop)) minTop = BLOCK_H;
    const aspect = this.focusAspect;
    this.monument.clear(); this.numeral.clear();
    const widthDistance = (span / 2 + 20) / (aspect * TAN_HALF);
    const rangeDistance = ((maxTop - minTop) + 420) / (2 * TAN_HALF);
    const distance = Math.max(SINGLE_DISTANCE * 0.9, widthDistance, rangeDistance);
    const half = distance * TAN_HALF;
    const desiredY = Math.max(half * 0.8, maxTop + 120 - half * 0.86);
    const rig = this.rig;
    if (this.reduced || rig.snap) { rig.y = desiredY; rig.distance = distance; }
    else { const k = 1 - Math.exp(-this.dt / 0.25); rig.y += (desiredY - rig.y) * k; rig.distance += (distance - rig.distance) * k; }
    rig.snap = false; rig.x = 0;
    this.cameraFloor = rig.y - rig.distance * TAN_HALF; this.railY = rig.y;
    for (const player of players) this.towers.get(player.key).sync(player.tower, this.dt);
    const elevation = 10 * Math.PI / 180;
    this.camera.position.set(0, rig.y + Math.sin(elevation) * rig.distance, Math.cos(elevation) * rig.distance);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, rig.y, 0);
    if (this.camera.zoom !== 1) { this.camera.zoom = 1; this.camera.updateProjectionMatrix(); }
    this.finish(null);
  }

  /* ---------------------------------------------------------------- results turntable */
  renderResults(model) {
    this.setMode('results');
    this.begin(model.dt, model.reduced);
    if (this.env.ground) this.env.ground.scale.x = 1;
    const tower = this.ensureTower('result');
    this.pruneTowers(new Set(['result']));
    tower.group.position.x = 0;
    const fresh = tower.key !== model.tower.key || tower.kit !== this.kit;
    this.cameraFloor = -1000; this.railY = 0;
    tower.sync(model.tower, this.dt);
    const levels = Math.max(1, model.totalLevels || 1);
    if (fresh) { this.resultRubbleFor = null; }
    if (this.resultRubbleFor !== model.tower.key && (model.tower.stack || []).length >= levels) {
      // The marker and rubble arrive once the reveal has rebuilt the whole tower.
      this.resultRubbleFor = model.tower.key;
      tower.setRubble(model.rubble || [], model.marker ? levels * BLOCK_H + 4 : null);
    }
    const total = Math.max(6, levels) * BLOCK_H;
    const aspect = this.focusAspect;
    const distance = Math.max((total + 300) / (2 * TAN_HALF), 255 / (aspect * TAN_HALF));
    this.monument.clear();
    this.resultSpan = Math.max(520, total * 0.7);
    const rig = this.rig;
    rig.y = total / 2 + 100; rig.x = 0;
    if (!this.reduced) rig.orbit += this.dt * 0.24;
    const yaw = (this.reduced ? 0.5 : rig.orbit) + (this.reduced ? 0 : this.pointer.x * 0.2);
    // The score stands over the tower and always faces the camera.
    this.numeral.set([String(model.score == null ? Math.max(0, levels - 1) : model.score)], { cell: 15, depth: 30, colors: this.stripes, colorBy: 'letter', enter: 'morph' });
    this.numeral.group.position.set(0, levels * BLOCK_H + 62, 0);
    this.numeral.group.rotation.set(0, yaw, 0);
    const elevation = 11 * Math.PI / 180;
    this.camera.position.set(Math.sin(yaw) * Math.cos(elevation) * distance, rig.y + Math.sin(elevation) * distance, Math.cos(yaw) * Math.cos(elevation) * distance);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, rig.y, 0);
    if (this.camera.zoom !== 1) { this.camera.zoom = 1; this.camera.updateProjectionMatrix(); }
    this.finish(null);
  }

  // Game coordinates (x: 0-360 play width, y: world units above the floor) to CSS pixels on the canvas.
  project(towerId, gameX, y, z = DEPTH / 2) {
    const tower = this.towers.get(towerId);
    const v = this.tmp.set(gameX - HALF_W + (tower ? tower.group.position.x : 0), y, z).project(this.camera);
    return { x: (0.5 + 0.5 * v.x) * this.width - this.focusNow.x, y: (0.5 - 0.5 * v.y) * this.height - this.focusNow.y, visible: v.z > -1 && v.z < 1 };
  }

  dispose() {
    for (const tower of this.towers.values()) tower.dispose();
    this.towers.clear();
    if (this.env) disposeTree(this.env.group);
    if (this.emblems) this.emblems.dispose();
    this.monument.dispose(); this.numeral.dispose();
    if (this.kit) this.kit.dispose();
    this.particles.dispose();
    this.envTexture.dispose();
    this.composer.dispose();
    this.renderer.dispose();
  }
}

export function create(options) { return new View(options); }
