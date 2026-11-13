// "SABOTAGE STACK" as a precarious two-tier stack of real bricks: a bottom slab carrying STACK, and on top of those letters a wider
// slab carrying SABOTAGE, every letter built row by row from bricks cut out of the theme's own typeface (brick-layout.js).
//
// One instanced mesh draws all of it. Every brick is in one of a handful of states:
//   wait    not yet in the world (its turn in the rain has not come)
//   drop    falling from the sky onto its place in the wall (rain, and the way knocked-out bricks come home)
//   home    in the wall, moving with its letter and its tier
//   loose   a free body (knocked out, shaken off, blown up) tumbling under gravity in world space
//   rest    lying where it landed, until it is called home
//   recall  flying back up above its place, to drop in again
// The tiers (and so everything on them) lean, slide and shake as a whole for the sabotages (title-effects.js).
import * as THREE from 'three';
import { brickWord } from './brick-layout.js';
import { titlePose } from './title-effects.js';
import { themedBlockColor } from './palette.js';
import { clamp, damp, lerp, smoothstep, rng, TAU } from './util.js';
import { offsetFromPointer } from './hover.js';

export const BRICK_DEPTH = 34;
const SLAB_T = [22, 27]; // bottom, top: thickness
const SLAB_D = [112, 128]; // depth
const GRAVITY = 2500;
const CHUNKS = 14; // pieces a slab breaks into
const WAIT = 0; const DROP = 1; const HOME = 2; const LOOSE = 3; const REST = 4; const RECALL = 5; const HIDDEN = 6;

// The look of the bricks per theme. Colours follow the reference: the same four block colours cycle letter by letter (the page's own
// palette, mapped to each theme), the lower word starting one colour on from the upper one.
const CYCLE_B = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F']; const CYCLE_T = ['#2F8478', '#7FA6BD', '#D5472F', '#E3A33B'];
const BRICK_LOOK = {
  paper: { rough: 0.82, metal: 0, emit: 0, line: 1.35, slab: '#F2E8D3', cycleB: CYCLE_B, cycleT: CYCLE_T, rows: 19, cap: 124, xScale: 0.86, tone: [0.07, -0.07] },
  sunset: { rough: 0.7, metal: 0, emit: 1.55, line: 1.5, ink: '#3A0F66', slab: '#4A1D8C', cycleB: CYCLE_B, cycleT: CYCLE_T, rows: 0, cap: 112, xScale: 1, tone: [0.14, 0.03] },
  primetime: { rough: 0.34, metal: 0.12, emit: 0.04, line: 1.4, slab: '#10256E', cycleB: CYCLE_B, cycleT: CYCLE_T, rows: 19, cap: 124, xScale: 0.88, tone: [0.04, -0.03] }
};

const euler = new THREE.Euler(); const tq = new THREE.Quaternion(); const tp = new THREE.Vector3(); const ts = new THREE.Vector3(); const tm = new THREE.Matrix4(); const tv = new THREE.Vector3();
const ONE = new THREE.Vector3(1, 1, 1); const ZERO_SCALE = new THREE.Vector3(0, 0, 0); const IDENT = new THREE.Quaternion();

// The brick material: a standard lit material plus, in the shader, an ink outline round every face of every brick (so the wall
// reads as bricks and the slabs as slabs), a glow for the arcade theme, and the superglue sheen. All three are driven by uniforms.
export function makeBrickMaterial(theme, palette, { line = 0, clip = true } = {}) {
  const look = BRICK_LOOK[theme] || BRICK_LOOK.paper;
  const material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: look.rough, metalness: look.metal, flatShading: theme === 'sunset' });
  const uniforms = { uInk: { value: new THREE.Color(look.ink || palette.ink) }, uLine: { value: line || look.line }, uEmit: { value: look.emit }, uGlue: { value: 0 }, uGlueX: { value: 0 }, uGhost: { value: 0 } };
  material.userData.uniforms = uniforms;
  if (clip) material.clippingPlanes = [new THREE.Plane(new THREE.Vector3(1, 0, 0), 1e5), new THREE.Plane(new THREE.Vector3(-1, 0, 0), 1e5)];
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vBrickLocal; varying vec3 vBrickSize; varying float vBrickX;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vBrickLocal = position;
        #ifdef USE_INSTANCING
          vBrickSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vBrickX = (modelMatrix * instanceMatrix * vec4(position, 1.0)).x;
        #else
          vBrickSize = vec3(1.0); vBrickX = 0.0;
        #endif`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vBrickLocal; varying vec3 vBrickSize; varying float vBrickX; uniform vec3 uInk; uniform float uLine; uniform float uEmit; uniform float uGlue; uniform float uGlueX; uniform float uGhost;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        #ifdef USE_INSTANCING_COLOR
          totalEmissiveRadiance += vColor * uEmit;
        #endif`)
      .replace('#include <opaque_fragment>', `
        {
          vec3 a = abs(vBrickLocal); float m = max(a.x, max(a.y, a.z)); vec3 e = (vec3(0.5) - a) * vBrickSize; float d = 1e3;
          if (a.x < m - 0.002) d = min(d, e.x);
          if (a.y < m - 0.002) d = min(d, e.y);
          if (a.z < m - 0.002) d = min(d, e.z);
          float minDim = min(vBrickSize.x, min(vBrickSize.y, vBrickSize.z));
          float lw = min(uLine * (0.85 + 0.55 * clamp(minDim / 9.0, 0.0, 2.2)), minDim * 0.24); // thicker ink round the big slabs than round the small bricks, never more than a quarter of a piece
          float edge = smoothstep(lw * 0.45, lw, d);
          outgoingLight = mix(uInk, outgoingLight, edge);
          float band = exp(-pow((vBrickX - uGlueX) / 52.0, 2.0));
          outgoingLight += uGlue * vec3(1.0, 0.76, 0.26) * (0.1 + band * 0.75) * edge;
          outgoingLight = mix(outgoingLight, vec3(dot(outgoingLight, vec3(0.3, 0.59, 0.11))) * 0.92, uGhost * 0.5);
        }
        #include <opaque_fragment>`);
  };
  material.customProgramCacheKey = () => `brick-${theme}${clip ? '' : '-free'}`;
  return material;
}

export class TitleStack {
  constructor(theme, palette, fx) {
    this.theme = theme; this.palette = palette; this.fx = fx; this.group = new THREE.Group(); this.group.name = 'title-stack';
    this.look = BRICK_LOOK[theme] || BRICK_LOOK.paper; this.random = rng(31);
    this.bricks = []; this.letters = []; this.mesh = null; this.ghost = null; this.material = null; this.geometry = null; this.marquee = null;
    this.bounds = { x0: -520, x1: 520, y0: 0, y1: 300 }; this.tierM = [new THREE.Matrix4(), new THREE.Matrix4()]; this.events = [];
    this.age = 0; this.introDuration = 4.4; this.speed = 1; this.exploded = false; this.gone = false; this.pose = null; this.effectKey = '';
    this.floor = () => 0; this.toCamera = new THREE.Vector3(0, 0.1, 1); this.sway = 0;
    this.layout = { bottomTop: 0, slabBW: 0, slabTW: 0, topOffsetX: 0, topBase: 0, capHeight: 112, halfTop: 0 };
    this.poseB = { x: 0, y: 0, rz: 0, sx: 1 }; this.poseT = { x: 0, y: 0, rz: 0, sx: 1 };
    this.shedClock = 0; this.recallClock = 0; this.rebuildAt = -1;
  }

  // ---- building -------------------------------------------------------------------------------------------------
  clear() {
    if (this.mesh) { this.group.remove(this.mesh); this.mesh.dispose(); this.mesh = null; }
    if (this.ghost) { this.group.remove(this.ghost); this.ghost = null; }
    if (this.geometry) { this.geometry.dispose(); this.geometry = null; }
    if (this.material) { this.material.dispose(); this.material = null; }
    if (this.ghostMaterial) { this.ghostMaterial.dispose(); this.ghostMaterial = null; }
    if (this.marquee) { this.group.remove(this.marquee.group); for (const g of this.marquee.geos) g.dispose(); for (const m of this.marquee.mats) m.dispose(); this.marquee = null; }
    this.bricks.length = 0; this.letters.length = 0;
  }

  // speed > 1 plays the rain faster (coming back to the menu is not the first visit)
  build({ speed = 1, instant = false } = {}) {
    this.clear(); this.speed = speed; this.exploded = false; this.gone = false; this.age = 0; this.effectKey = ''; this.rebuildAt = -1;
    const key = this.palette.fontKey; const look = this.look; const cap = look.cap;
    const wordB = brickWord(key, 'STACK', { capHeight: cap, rows: look.rows, xScale: look.xScale }); const wordT = brickWord(key, 'SABOTAGE', { capHeight: cap, rows: look.rows, xScale: look.xScale });
    const slabBW = wordB.width + 96; const slabTW = wordT.width + 120;
    const L = this.layout; L.capHeight = cap; L.slabBW = slabBW; L.slabTW = slabTW;
    L.letterCount = wordT.letters.length; L.bottomTop = SLAB_T[0] + cap + 1; L.topOffsetX = -0.04 * slabTW; L.halfTop = slabTW / 2; L.baseB = SLAB_T[0]; L.baseT = SLAB_T[1];
    const R = this.random; const colorOf = hex => new THREE.Color(themedBlockColor(this.theme, hex));
    const bricks = this.bricks;
    const add = b => { b.i = bricks.length; if (b.state === undefined) b.state = WAIT; b.t = 0; b.oy = 0; b.vy = 0; b.bounces = 0; b.pos = new THREE.Vector3(); b.vel = new THREE.Vector3(); b.quat = new THREE.Quaternion(); b.spin = new THREE.Vector3(); b.rest = 0; b.recallT = 0; b.recallAt = -1; b.from = new THREE.Vector3(); bricks.push(b); return b; };
    // slabs (kind 1): the bottom one first, then the top one
    const slabColor = new THREE.Color(this.look.slab);
    const slabs = [0, 1].map(tier => add({ kind: 1, tier: tier === 0 ? 1 : 0, letter: -1, lx: 0, ly: SLAB_T[tier] / 2, lz: 0, w: tier === 0 ? slabBW : slabTW, h: SLAB_T[tier], d: SLAB_D[tier], color: slabColor.clone(), row: 0, edge: false, delay: 0 }));
    slabs[0].tier = 1; slabs[1].tier = 0; // [bottom slab belongs to tier 1 (the lower tier), top slab to tier 0]
    // chunks (kind 2): what each slab breaks into when the title is blown up; they wait invisibly
    for (const slab of slabs) {
      const cols = 7; const rowsN = 2;
      for (let c = 0; c < cols; c += 1) for (let r = 0; r < rowsN; r += 1) {
        add({ kind: 2, tier: slab.tier, letter: -1, parent: slab, lx: -slab.w / 2 + (c + 0.5) * slab.w / cols, ly: slab.ly, lz: -slab.d / 2 + (r + 0.5) * slab.d / rowsN, w: slab.w / cols, h: slab.h, d: slab.d / rowsN, color: slabColor.clone().multiplyScalar(0.94 + R() * 0.1), row: 0, edge: false, delay: 0, state: HIDDEN });
      }
    }
    // letters and their bricks
    const letters = this.letters; let letterBase = 0;
    const lay = (word, tier, baseY, cycle, letterOffset, startDelay) => {
      word.letters.forEach((l, i) => letters.push({ ch: l.ch, tier, cx: l.cx, rows: l.rows, hop: 0, vhop: 0, rz: 0, vrz: 0, rx: 0, vrx: 0, swell: 0, waveDelay: -1, seed: R() * TAU, baseY, vis: 1, visTarget: 1, ox: 0, line: tier }));
      const spans = new Map();
      for (const b of word.bricks) { const k = `${b.letter}:${b.row}`; const s = spans.get(k) || []; s.push(b); spans.set(k, s); }
      for (const b of word.bricks) {
        const li = letterOffset + b.letter; const letter = letters[li];
        const run = spans.get(`${b.letter}:${b.row}`); const ownIndex = run.indexOf(b);
        const edge = ownIndex === 0 || ownIndex === run.length - 1;
        const color = colorOf(cycle[b.letter % cycle.length]); if (look.tone[0] || look.tone[1]) color.offsetHSL(0, look.tone[0], look.tone[1]); color.multiplyScalar(0.94 + R() * 0.12);
        add({ kind: 0, tier, letter: li, lx: b.x - letter.cx, ly: b.y, lz: 0, w: b.w, h: b.h, d: BRICK_DEPTH, color, row: b.row, edge, delay: startDelay + b.letter * 0.085 + b.row * 0.031 + R() * 0.06, localX: b.x });
      }
      return word.letters.length;
    };
    const nB = lay(wordB, 1, SLAB_T[0], look.cycleB, 0, 0.62);
    // the top slab drops once the lower word is nearly built, and lands on the tops of its letters
    const lowerDone = Math.max(...bricks.filter(b => b.kind === 0 && b.tier === 1).map(b => b.delay)) + 0.42;
    slabs[0].delay = 0.1; slabs[1].delay = lowerDone - 0.5;
    lay(wordT, 0, SLAB_T[1], look.cycleT, nB, slabs[1].delay + 0.62);
    this.introDuration = Math.max(...bricks.map(b => b.delay)) + 0.5;
    for (const b of bricks) { if (b.kind === 2) continue; b.oy0 = 560 + R() * 720; if (b.kind === 1) b.oy0 = 900; b.vy0 = -240 - R() * 260; }
    // mesh
    this.geometry = new THREE.BoxGeometry(1, 1, 1); this.material = makeBrickMaterial(this.theme, this.palette);
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, bricks.length); this.mesh.name = 'bricks'; this.mesh.frustumCulled = false; this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    bricks.forEach(b => this.mesh.setColorAt(b.i, b.color));
    this.mesh.instanceColor.needsUpdate = true; this.group.add(this.mesh);
    this.ghostMaterial = makeBrickMaterial(this.theme, this.palette);
    this.mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 150, 0), 2400); // picking must not depend on where the bricks happened to be when it was first computed
    this.ghost = new THREE.InstancedMesh(this.geometry, this.ghostMaterial, bricks.length); this.ghost.name = 'bricks-ghost'; this.ghost.frustumCulled = false; this.ghost.visible = false; this.ghost.raycast = () => {};
    this.ghost.instanceMatrix = this.mesh.instanceMatrix; this.ghost.instanceColor = this.mesh.instanceColor; this.ghost.castShadow = false; this.ghost.receiveShadow = false; this.group.add(this.ghost);
    const top = L.bottomTop + SLAB_T[1] + cap + 8;
    this.bounds = { x0: -slabTW / 2 - 8, x1: slabTW / 2 + 8, y0: 0, y1: top };
    if (this.theme === 'sunset') this.addMarquee(slabTW + 80, top + 24);
    // initial state
    if (instant) { for (const b of bricks) if (b.kind !== 2) { b.state = HOME; b.oy = 0; } this.age = this.introDuration + 1; }
    this.updateMatrices(0, 0, {});
  }

  // everything lands at once (Reduced Motion, or a rushed build)
  finish() { for (const b of this.bricks) if (b.kind !== 2 && (b.state === WAIT || b.state === DROP)) { b.state = HOME; b.oy = 0; } this.age = Math.max(this.age, this.introDuration + 0.01); }
  // Sunset only: the stack stands in front of an arcade marquee, a dark plate with a neon border, so the pale pixel letters stay
  // readable against the big sun. It powers on (a few flickers) as the first bricks fall.
  addMarquee(w, h) {
    const geos = []; const mats = []; const group = new THREE.Group(); group.position.set(0, h / 2 - 8, -98);
    const plateGeo = new THREE.PlaneGeometry(w, h); const plateMat = new THREE.MeshBasicMaterial({ color: '#10052A', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });
    group.add(new THREE.Mesh(plateGeo, plateMat)); geos.push(plateGeo); mats.push(plateMat);
    const bar = (mat, bw, bh, x, y) => { const geo = new THREE.PlaneGeometry(bw, bh); const mesh = new THREE.Mesh(geo, mat); mesh.position.set(x, y, 1); group.add(mesh); geos.push(geo); };
    const outer = new THREE.MeshBasicMaterial({ color: '#FF4FB0', toneMapped: false, side: THREE.DoubleSide }); const inner = new THREE.MeshBasicMaterial({ color: '#2EE6D6', toneMapped: false, side: THREE.DoubleSide }); mats.push(outer, inner);
    const t = 5; bar(outer, w, t, 0, h / 2); bar(outer, w, t, 0, -h / 2); bar(outer, t, h, -w / 2, 0); bar(outer, t, h, w / 2, 0);
    const i = 13; const t2 = 2.5; bar(inner, w - i * 2, t2, 0, h / 2 - i); bar(inner, w - i * 2, t2, 0, -h / 2 + i); bar(inner, t2, h - i * 2, -w / 2 + i, 0); bar(inner, t2, h - i * 2, w / 2 - i, 0);
    group.scale.y = 0.001; this.group.add(group); this.marquee = { group, geos, mats, plateMat, outer, inner };
  }
  updateMarquee(time, yaw, reduced, energy) {
    const m = this.marquee; if (!m) return;
    // seen from behind, the dark plate would hide the bricks standing in front of it: it turns see-through instead
    m.plateMat.opacity = 0.9 * (0.22 + 0.78 * smoothstep(-0.25, 0.45, Math.cos(yaw))) * (this.exploded ? 0 : 1);
    const k = this.exploded ? 0 : clamp(this.age / 0.6); m.group.scale.y = Math.max(0.001, 1 - (1 - k) ** 3); m.group.visible = k > 0.002;
    const power = reduced || k >= 1 ? 1 : (Math.sin(this.age * 55) > -0.3 ? 1 : 0.35); const hum = (reduced ? 1 : 0.94 + 0.06 * Math.sin(time * 3.1) * Math.sin(time * 1.7)) * (1 + energy * 0.28);
    m.outer.color.set('#FF4FB0').multiplyScalar(power * hum * 1.25); m.inner.color.set('#2EE6D6').multiplyScalar(power * hum);
  }
  get complete() { return this.age >= this.introDuration; }
  get topCenterY() { return this.layout.bottomTop + SLAB_T[1] + this.layout.capHeight * 0.5; }

  // ---- the frame --------------------------------------------------------------------------------------------------
  update(dt, time, { pointer = null, pointerSpeed = 0, reduced = false, energy = 0, yaw = 0, effect = null, floor = null, toCamera = null } = {}) {
    if (!this.mesh) return;
    this.age += dt * (this.age < this.introDuration ? this.speed : 1); if (floor) this.floor = floor; if (toCamera) this.toCamera.copy(toCamera);
    const bricks = this.bricks; const L = this.layout;
    // ---- the sabotage (if any): a pose for each tier and a few knobs
    let pose = null;
    if (effect && this.complete && !this.exploded) {
      pose = titlePose(effect.id, effect.elapsed, effect.duration, { reduced, dir: effect.dir || 1 });
      if (this.effectKey !== `${effect.id}:${effect.n}`) { this.effectKey = `${effect.id}:${effect.n}`; this.onEffectStart(effect); }
    } else if (this.effectKey) { this.effectKey = ''; this.onEffectEnd(); }
    this.pose = pose;
    const rzIdle = reduced ? 0 : Math.sin(time * 0.55) * 0.0035; const xIdle = reduced ? 0 : Math.sin(time * 0.41 + 1) * 2.2;
    const pb = this.poseB; const pt = this.poseT; const eb = pose ? pose.bottom : null; const et = pose ? pose.top : null;
    pb.x = eb ? eb.x : 0; pb.y = eb ? eb.y : 0; pb.rz = (eb ? eb.rz : 0) - rzIdle * 0.4; pb.sx = eb ? eb.sx : 1;
    pt.x = (et ? et.x : 0) + xIdle; pt.y = et ? et.y : 0; pt.rz = (et ? et.rz : 0) + rzIdle; pt.sx = et ? et.sx : 1;
    const settle = this.complete ? 1 : smoothstep(0.4, 1, this.age / this.introDuration);
    if (this.age < this.introDuration) { pt.rz *= settle; pt.x *= settle; }
    // portal: the upper tier travels one full loop between the gates, so it ends where it began
    this.gateX = L.halfTop + 14; // the gates stand at the ends of the upper slab, inside the picture: the title scrolls out of one and back in through the other
    if (pose && pose.clip) { pt.x += pose.wrap * this.gateX * 2; }
    // ---- ghost copy (double / portal), clipping planes (portal)
    const clip = pose && pose.clip ? this.gateX : 1e5;
    for (const m of [this.material, this.ghostMaterial]) { m.clippingPlanes[0].constant = clip; m.clippingPlanes[1].constant = clip; }
    const gu = this.ghostMaterial.userData.uniforms;
    if (pose && pose.clip && Math.abs(pose.wrap) > 0.001) { this.ghost.visible = true; this.ghost.position.x = -Math.sign(pose.wrap) * this.gateX * 2; gu.uGhost.value = 0; }
    else if (pose && pose.ghost > 0.02) { this.ghost.visible = true; this.ghost.position.x = pose.ghostDx || 0; gu.uGhost.value = 1; } // the decoy of the shell game: a duller copy that slides the other way
    else { this.ghost.visible = false; gu.uGhost.value = 0; }
    for (const m of [this.material, this.ghostMaterial]) { const u = m.userData.uniforms; u.uGlue.value = pose ? pose.glue : 0; u.uGlueX.value = pose && pose.glue > 0 ? Math.sin(time * 1.5) * L.halfTop * 1.1 : 0; }
    // ---- letters: springs for hops, leans and the pointer
    this.updateMarquee(time, yaw, reduced, energy);
    this.updateLetters(dt, time, pointer, pointerSpeed, reduced, energy, pose);
    // ---- bricks
    this.updateBricks(dt, time, pose, reduced);
    this.updateMatrices(dt, time, pose);
  }

  onEffectStart(effect) {
    this.shedClock = 0; // (bricks a visitor has knocked out still come home on their own timer; the ones the sabotage shakes loose wait for it to end)
  }
  onEffectEnd() { this.rebuild(0.1); }

  updateLetters(dt, time, pointer, pointerSpeed, reduced, energy, pose) {
    const letters = this.letters; const off = this.off || (this.off = { dx: 0, dy: 0 }); const L = this.layout;
    const n = letters.length; const wave = pose && pose.letter;
    for (let i = 0; i < n; i += 1) {
      const l = letters[i]; let tz = 0; let tx = 0; let push = 0; let swell = 0;
      if (pointer && !reduced && this.complete) {
        tp.set(l.cx, l.baseY + L.capHeight / 2, 0).applyMatrix4(this.tierM[l.tier]);
        offsetFromPointer(pointer, tp.x, tp.y, tp.z, off);
        const d = Math.hypot(off.dx, off.dy); const near = smoothstep(190, 0, d);
        tz = -Math.sign(off.dx || 1) * near * 0.16; tx = -near * 0.1; push = near * (1 + pointerSpeed * 0.01) * 4; swell = near * 0.05;
        if (near > 0.55 && pointerSpeed > 700 && l.vhop <= 0 && l.hop < 0.5) { l.vhop = Math.min(420, 170 + pointerSpeed * 0.05); l.vrz += -Math.sign(off.dx || 1) * 2.4; }
      }
      if (l.waveDelay >= 0) { l.waveDelay -= dt; if (l.waveDelay < 0) { l.vhop = Math.max(l.vhop, 260); l.vrz += (this.random() - 0.5) * 3.6; l.waveDelay = -1; } }
      l.swell = damp(l.swell, swell, 12, dt);
      const kz = 150; const cz = 10;
      l.vrz += ((tz - l.rz) * kz - l.vrz * cz) * dt; l.rz += l.vrz * dt;
      l.vrx += ((tx - l.rx) * kz - l.vrx * cz) * dt; l.rx += l.vrx * dt;
      l.vhop -= 2400 * dt; l.hop += l.vhop * dt; if (l.hop < 0) { if (l.vhop < -160) l.vhop = -l.vhop * 0.3; else { l.hop = 0; l.vhop = 0; } }
      const breathe = reduced ? 0 : Math.sin(time * 1.4 + l.seed) * 0.8;
      const ripple = reduced ? 0 : energy * (0.5 + 0.5 * Math.sin(time * 4.6 - l.cx * 0.013 + l.tier * 1.3)) * 2.4;
      const w = wave ? wave(i, n) : null;
      l.y = l.hop + breathe + ripple + push * 0.4 + (w ? w.y : 0);
      l.zr = l.rz + (w ? w.rz : 0); l.xr = l.rx;
      l.visTarget = w ? w.vis : 1; l.vis = damp(l.vis, l.visTarget, 40, dt);
    }
  }

  updateBricks(dt, time, pose, reduced) {
    const bricks = this.bricks; const age = this.age; const R = this.random;
    const rainDt = dt * (age < this.introDuration + 0.5 ? this.speed : 1);
    let shedBudget = 0;
    if (pose && pose.shed > 0 && !reduced) { this.shedClock += dt * pose.shed * 18; shedBudget = Math.floor(this.shedClock); this.shedClock -= shedBudget; }
    for (const b of bricks) {
      switch (b.state) {
        case WAIT:
          if (b.kind === 2) break;
          if (age >= b.delay) { b.state = DROP; b.oy = b.oy0; b.vy = b.vy0; b.bounces = 0; if (b.kind === 1) b.drop = true; }
          break;
        case DROP: {
          b.vy -= GRAVITY * rainDt; b.oy += b.vy * rainDt;
          if (b.oy <= 0) {
            if (b.vy < -420 && b.bounces < 1 && b.kind === 0) { b.oy = 0.01; b.vy = -b.vy * 0.16; b.bounces += 1; this.landed(b, false); }
            else { b.oy = 0; b.vy = 0; b.state = HOME; this.landed(b, true); }
          }
          break;
        }
        case LOOSE: this.stepLoose(b, dt); break;
        case REST:
          b.rest += dt;
          if (b.recallAt >= 0 && age >= b.recallAt) { b.state = RECALL; b.recallT = 0; b.from.copy(b.pos); }
          break;
        case RECALL: {
          b.recallT += dt / 0.5; const k = clamp(b.recallT); const e = k * k * (3 - 2 * k);
          this.homeWorld(b, tv, 150); // where it must be to drop in: above its place
          b.pos.lerpVectors(b.from, tv, e); b.pos.y += Math.sin(k * Math.PI) * 90;
          b.quat.slerp(IDENT, 0.12 + 0.2 * k);
          if (k >= 1) { b.state = DROP; b.oy = 150; b.vy = 0; b.bounces = 0; }
          break;
        }
        default: break;
      }
    }
    // things shaken loose by a sabotage
    if (shedBudget > 0) this.shed(shedBudget, pose);
    // the explosion's rubble goes when it has had its moment
    if (this.exploded) {
      this.explodeT += dt;
      if (this.explodeT > 2.6) { const k = clamp((this.explodeT - 2.6) / 0.7); for (const b of bricks) b.shrink = 1 - k; if (k >= 1) this.gone = true; }
    }
  }

  // a brick (or slab) reaches its place
  landed(b, final) {
    if (b.kind === 1) { this.events.push({ type: 'thud', tier: b.tier, power: b.tier === 0 ? 1 : 0.7 }); for (const l of this.letters) if (l.tier === 1 && b.tier === 0) { l.vhop = Math.max(l.vhop, 190 + this.random() * 70); l.vrz += (this.random() - 0.5) * 2.5; } }
    if (final && this.fx && this.random() < 0.06) { this.homeWorld(b, tv, 0); this.fx.dust([tv.x, tv.y - b.h / 2, tv.z + 8], 2); }
  }

  // the world position of a brick's place in the wall (plus `lift` straight up)
  homeWorld(b, out, lift = 0) {
    if (b.kind === 0) {
      const l = this.letters[b.letter]; this.letterMatrix(l, tm); out.set(b.lx, b.ly + lift, b.lz).applyMatrix4(tm);
    } else out.set(b.lx, b.ly + lift, b.lz).applyMatrix4(this.tierM[b.tier]);
    return out;
  }
  letterMatrix(l, out) {
    euler.set(l.xr || 0, 0, l.zr || 0); tq.setFromEuler(euler); tp.set(l.cx, l.baseY + (l.y || 0), 0); const s = 1 + l.swell; ts.set(s, s, s);
    return out.compose(tp, tq, ts).premultiply(this.tierM[l.tier]);
  }

  // ---- loose bodies -------------------------------------------------------------------------------------------------
  release(b, velocity, spin) {
    this.homeWorld(b, b.pos, 0); // keep its place in the world
    if (b.kind === 0) { const l = this.letters[b.letter]; this.letterMatrix(l, tm); tq.setFromRotationMatrix(tm); b.quat.copy(tq); } else { tq.setFromRotationMatrix(this.tierM[b.tier]); b.quat.copy(tq); }
    b.vel.copy(velocity); b.spin.copy(spin); b.state = LOOSE; b.rest = 0; b.recallAt = -1; b.oy = 0; b.vy = 0; b.landedOnce = false;
  }
  stepLoose(b, dt) {
    b.vel.y -= GRAVITY * dt; b.pos.addScaledVector(b.vel, dt);
    // spin (angular velocity in world axes)
    const w = b.spin.length();
    if (w > 1e-4) { tq.setFromAxisAngle(tv.copy(b.spin).multiplyScalar(1 / w), w * dt); b.quat.premultiply(tq); }
    const half = Math.max(2, Math.min(b.h, b.d) / 2 * (b.kind === 0 ? 1 : 1));
    const floor = this.surfaceAt(b.pos.x, b.pos.z, b.pos.y);
    if (b.pos.y - half <= floor && b.vel.y <= 0) {
      b.pos.y = floor + half;
      if (b.vel.y < -140) { b.vel.y = -b.vel.y * 0.26; b.vel.x *= 0.72; b.vel.z *= 0.72; b.spin.multiplyScalar(0.6); if (!b.landedOnce && this.fx && b.kind !== 1 && this.random() < 0.18 && b.vel.y > 70) this.fx.dust([b.pos.x, b.pos.y, b.pos.z + 6], 2); b.landedOnce = true; }
      else { b.vel.set(0, 0, 0); b.spin.set(0, 0, 0); b.state = REST; b.rest = 0; this.flatten(b); }
    }
    if (b.pos.y < -400) { b.state = REST; b.vel.set(0, 0, 0); b.spin.set(0, 0, 0); }
  }
  // lie down flat where it landed: a random turn about the vertical axis only
  flatten(b) { euler.set(0, this.random() * TAU, 0); b.quat.setFromEuler(euler); }
  // the height of whatever is beneath a point: a slab if it is over one, else the plinth, else the ground
  surfaceAt(x, z, y) {
    const L = this.layout; let h = this.floor(x, z);
    const m0 = this.tierM[1].elements; const m1 = this.tierM[0].elements;
    const bTop = m0[13] + SLAB_T[0]; const tTop = m1[13] + SLAB_T[1];
    if (Math.abs(x - m0[12]) < L.slabBW / 2 && Math.abs(z) < SLAB_D[0] / 2 && y >= bTop - 6) h = Math.max(h, bTop);
    if (Math.abs(x - m1[12]) < L.slabTW / 2 && Math.abs(z) < SLAB_D[1] / 2 && y >= tTop - 6) h = Math.max(h, tTop);
    return h;
  }

  // Knocks bricks out of the wall: everything within `radius` of `point` (world space), nearest first. They fly away from the
  // point and towards the viewer, tumble, and (unless `keep`) call themselves home after a moment.
  knock(point, radius = 58, { max = 46, power = 1, keep = false, hold = 1.3 } = {}) {
    const found = [];
    for (const b of this.bricks) {
      if (b.kind !== 0 || (b.state !== HOME && b.state !== DROP)) continue;
      this.homeWorld(b, tv, 0); const d = tv.distanceTo(point); if (d < radius) found.push([d, b]);
    }
    found.sort((p, q) => p[0] - q[0]);
    const R = this.random; const cam = this.toCamera; let count = 0;
    for (const [d, b] of found.slice(0, max)) {
      this.homeWorld(b, tv, 0); const away = tv.clone().sub(point); const len = away.length() || 1; away.multiplyScalar(1 / len);
      const speed = (170 + R() * 230) * power * (1 - 0.5 * d / radius);
      const v = away.multiplyScalar(speed).addScaledVector(cam, (140 + R() * 260) * power); v.y += (160 + R() * 330) * power;
      const spin = new THREE.Vector3((R() - 0.5) * 16, (R() - 0.5) * 16, (R() - 0.5) * 16);
      this.release(b, v, spin);
      if (!keep) b.recallAt = this.age + hold + R() * 0.9 + d / radius * 0.5;
      count += 1;
    }
    if (count && this.fx) this.fx.dust([point.x, point.y, point.z + 10], Math.min(14, 4 + count / 3));
    return count;
  }

  // the stage's click: what the ray hits is where the wall is poked
  pick(raycaster) {
    if (!this.mesh || this.exploded) return null;
    const hit = raycaster.intersectObject(this.mesh, false)[0];
    return hit ? { point: hit.point.clone(), instanceId: hit.instanceId, brick: this.bricks[hit.instanceId] } : null;
  }
  poke(raycaster, { power = 1 } = {}) {
    const hit = this.pick(raycaster); if (!hit) return 0;
    const glued = this.pose && this.pose.glue > 0.4;
    if (glued) { // superglue: the bricks hold; the whole wall just shivers
      for (const l of this.letters) { l.vhop = Math.max(l.vhop, 120); l.vrz += (this.random() - 0.5) * 3; }
      return 0;
    }
    const count = this.knock(hit.point, 62 * power, { max: 52, power });
    // the wall answers around the hit
    for (const l of this.letters) { tp.set(l.cx, l.baseY + 50, 0).applyMatrix4(this.tierM[l.tier]); const d = tp.distanceTo(hit.point); if (d < 220) { l.vhop = Math.max(l.vhop, 260 * (1 - d / 260)); l.vrz += (this.random() - 0.5) * 4 * (1 - d / 260); } }
    return count;
  }

  // a sabotage shakes bricks out of the stack
  shed(n, pose) {
    const L = this.layout; const R = this.random; const mode = pose.shedMode; const sign = pose.id === 'pisa' ? Math.sign(this.poseT.rz || 1) : 0;
    let tries = 0;
    while (n > 0 && tries < 90) {
      tries += 1; const b = this.bricks[Math.floor(R() * this.bricks.length)];
      if (!b || b.kind !== 0 || b.state !== HOME) continue;
      const l = this.letters[b.letter];
      if (mode === 'top' && (b.tier !== 0 || b.ly < L.capHeight * 0.45)) continue;
      if (mode === 'lean' && (b.tier !== 0 || b.ly < L.capHeight * 0.3 || (sign && Math.sign(b.lx + l.cx - this.layout.topOffsetX) !== sign))) continue;
      if (mode === 'edges' && !b.edge) continue;
      this.homeWorld(b, tv, 0); const v = new THREE.Vector3((R() - 0.5) * 120 + (sign || (R() - 0.5)) * 90, 20 + R() * 100, 60 + R() * 120);
      this.release(b, v, new THREE.Vector3((R() - 0.5) * 9, (R() - 0.5) * 9, (R() - 0.5) * 9));
      b.recallAt = -1; n -= 1;
      if (this.fx && R() < 0.3) this.fx.dust([tv.x, tv.y, tv.z + 8], 2);
    }
  }

  // everything on the floor, and everything still flying, is called home: bottom rows first, so the wall goes up again layer by layer
  rebuild(delay = 0) {
    let order = 0; const loose = this.bricks.filter(b => b.kind === 0 && (b.state === LOOSE || b.state === REST));
    loose.sort((p, q) => p.row - q.row || p.letter - q.letter);
    for (const b of loose) { b.recallAt = this.age + delay + 0.25 + order * 0.0035 + this.random() * 0.25 + b.row * 0.012; order += 1; }
  }

  // Everything blows apart (the Play button): the bricks fly out and down, the slabs break into chunks.
  explode(power = 1) {
    if (this.exploded) return; this.exploded = true; this.explodeT = 0; const R = this.random; const cam = this.toCamera;
    const centre = new THREE.Vector3(0, 150, 0);
    const landed = new Map(this.bricks.filter(b => b.kind === 1).map(b => [b, b.state === HOME])); // a slab that never arrived breaks into nothing
    for (const b of this.bricks) {
      if (b.kind === 1) { b.state = HIDDEN; continue; }
      if (b.kind === 2) { if (!landed.get(b.parent)) { b.state = HIDDEN; continue; } b.state = HOME; b.oy = 0; }
      else if (b.state === WAIT) { b.state = HIDDEN; continue; }
      this.homeWorld(b, tv, 0); const away = tv.clone().sub(centre); const len = away.length() || 1; away.multiplyScalar(1 / len);
      const s = (360 + R() * 640) * power;
      const v = away.multiplyScalar(s * 0.9).addScaledVector(cam, 220 + R() * 520); v.y = Math.abs(v.y) * 0.5 + 220 + R() * 520 * (b.kind === 2 ? 0.7 : 1);
      this.release(b, v, new THREE.Vector3((R() - 0.5) * 22, (R() - 0.5) * 22, (R() - 0.5) * 22));
      b.recallAt = -1; b.shrink = 1;
    }
    if (this.fx) { this.fx.dust([0, 20, 40], 24); this.fx.dust([-200, 10, 30], 12); this.fx.dust([200, 10, 30], 12); }
  }

  // A wave runs through the title from `originX` outwards (the pointer arriving, a click): each letter hops a beat after the one before.
  wave(originX = 0, speed = 1500) {
    for (const l of this.letters) l.waveDelay = Math.abs(l.cx - originX) / speed + l.tier * 0.05;
  }

  // ---- matrices -----------------------------------------------------------------------------------------------------
  updateMatrices(dt, time, pose) {
    const L = this.layout; const pb = this.poseB; const pt = this.poseT;
    tq.setFromAxisAngle(tv.set(0, 0, 1), pb.rz); tp.set(pb.x, pb.y, 0); ts.set(pb.sx, 1, 1);
    this.tierM[1].compose(tp, tq, ts);
    tq.setFromAxisAngle(tv.set(0, 0, 1), pt.rz); tp.set(L.topOffsetX + pt.x, L.bottomTop + pt.y, 0); ts.set(pt.sx, 1, 1);
    tm.compose(tp, tq, ts); this.tierM[0].multiplyMatrices(this.tierM[1], tm);
    // a matrix per letter
    const lm = this.letterMats || (this.letterMats = []);
    while (lm.length < this.letters.length) lm.push(new THREE.Matrix4());
    this.letters.forEach((l, i) => this.letterMatrix(l, lm[i]));
    const mesh = this.mesh; const M = this.scratchM || (this.scratchM = new THREE.Matrix4());
    for (const b of this.bricks) {
      let visible = true;
      switch (b.state) {
        case WAIT: case HIDDEN: visible = false; break;
        case HOME: case DROP: {
          if (b.kind === 0) {
            const l = this.letters[b.letter]; if (l.vis < 0.02) { visible = false; break; }
            tp.set(b.lx, b.ly + b.oy, b.lz); ts.set(b.w, b.h, b.d); M.compose(tp, IDENT, ts).premultiply(lm[b.letter]);
            if (l.vis < 0.98) M.scale(tv.set(l.vis, l.vis, l.vis));
          } else {
            tp.set(b.lx, b.ly + b.oy, b.lz); ts.set(b.w, b.h, b.d); M.compose(tp, IDENT, ts).premultiply(this.tierM[b.tier]);
          }
          break;
        }
        default: {
          const s = b.shrink === undefined ? 1 : Math.max(0.0001, b.shrink); ts.set(b.w * s, b.h * s, b.d * s); M.compose(b.pos, b.quat, ts);
        }
      }
      if (!visible) M.compose(tp.set(0, -9999, 0), IDENT, ZERO_SCALE);
      mesh.setMatrixAt(b.i, M);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  dispose() { this.clear(); }
}
