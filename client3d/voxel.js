// Lettering built the way the game builds towers: every glyph is a 5x7 grid, and each horizontal run of cells in a row
// is one block. Words therefore arrive as layers of blocks of different widths, bottom layer first, exactly like a stack.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const G = {
  A: '.###./#...#/#...#/#####/#...#/#...#/#...#', B: '####./#...#/#...#/####./#...#/#...#/####.',
  C: '.###./#...#/#..../#..../#..../#...#/.###.', D: '####./#...#/#...#/#...#/#...#/#...#/####.',
  E: '#####/#..../#..../####./#..../#..../#####', F: '#####/#..../#..../####./#..../#..../#....',
  G: '.###./#...#/#..../#.###/#...#/#...#/.###.', H: '#...#/#...#/#...#/#####/#...#/#...#/#...#',
  I: '#####/..#../..#../..#../..#../..#../#####', J: '..###/...#./...#./...#./...#./#..#./.##..',
  K: '#...#/#..#./#.#../##.../#.#../#..#./#...#', L: '#..../#..../#..../#..../#..../#..../#####',
  M: '#...#/##.##/#.#.#/#.#.#/#...#/#...#/#...#', N: '#...#/##..#/#.#.#/#..##/#...#/#...#/#...#',
  O: '.###./#...#/#...#/#...#/#...#/#...#/.###.', P: '####./#...#/#...#/####./#..../#..../#....',
  Q: '.###./#...#/#...#/#...#/#.#.#/#..#./.##.#', R: '####./#...#/#...#/####./#.#../#..#./#...#',
  S: '.####/#..../#..../.###./....#/....#/####.', T: '#####/..#../..#../..#../..#../..#../..#..',
  U: '#...#/#...#/#...#/#...#/#...#/#...#/.###.', V: '#...#/#...#/#...#/#...#/#...#/.#.#./..#..',
  W: '#...#/#...#/#...#/#.#.#/#.#.#/##.##/#...#', X: '#...#/#...#/.#.#./..#../.#.#./#...#/#...#',
  Y: '#...#/#...#/.#.#./..#../..#../..#../..#..', Z: '#####/....#/...#./..#../.#.../#..../#####',
  0: '.###./#...#/#..##/#.#.#/##..#/#...#/.###.', 1: '..#../.##../..#../..#../..#../..#../.###.',
  2: '.###./#...#/....#/...#./..#../.#.../#####', 3: '####./....#/....#/.###./....#/....#/####.',
  4: '...#./..##./.#.#./#..#./#####/...#./...#.', 5: '#####/#..../####./....#/....#/#...#/.###.',
  6: '.###./#..../#..../####./#...#/#...#/.###.', 7: '#####/....#/...#./..#../.#.../.#.../.#...',
  8: '.###./#...#/#...#/.###./#...#/#...#/.###.', 9: '.###./#...#/#...#/.####/....#/....#/.###.',
  '!': '..#../..#../..#../..#../..#../...../..#..', '-': '...../...../...../#####/...../...../.....',
  '?': '.###./#...#/....#/...#./..#../...../..#..', '.': '...../...../...../...../...../...../..#..',
  ' ': '...../...../...../...../...../...../.....'
};
const GLYPHS = {};
for (const key of Object.keys(G)) GLYPHS[key] = G[key].split('/');

// Runs of cells for a set of lines. Coordinates are in cells, x centred per line, y measured up from the bottom line.
export function layout(lines, lineGap = 2) {
  const runs = [];
  const total = lines.length * 7 + (lines.length - 1) * lineGap;
  lines.forEach((raw, lineIndex) => {
    const text = String(raw).toUpperCase();
    const width = text.length * 6 - 1;
    for (let c = 0; c < text.length; c += 1) {
      const glyph = GLYPHS[text[c]] || GLYPHS['?'];
      for (let r = 0; r < 7; r += 1) {
        const row = glyph[r];
        let start = -1;
        for (let i = 0; i <= 5; i += 1) {
          const on = i < 5 && row[i] === '#';
          if (on && start < 0) start = i;
          if (!on && start >= 0) {
            const n = i - start;
            const fromBottom = total - 1 - (lineIndex * (7 + lineGap) + r);
            runs.push({ x: c * 6 + start + n / 2 - width / 2, y: fromBottom + 0.5, n, letter: c, line: lineIndex, row: fromBottom });
            start = -1;
          }
        }
      }
    }
  });
  runs.sort((a, b) => a.x - b.x || a.y - b.y);
  return { runs, rows: total };
}

function bounce(k) {
  const n = 7.5625, d = 2.75;
  if (k < 1 / d) return n * k * k;
  if (k < 2 / d) { k -= 1.5 / d; return n * k * k + 0.75; }
  if (k < 2.5 / d) { k -= 2.25 / d; return n * k * k + 0.9375; }
  k -= 2.625 / d; return n * k * k + 0.984375;
}
const smooth = k => k * k * (3 - 2 * k);
const back = k => { const c = 1.70158; const j = k - 1; return 1 + (c + 1) * j * j * j + c * j * j; };

const STRIDE = 10; // x y z sx sy(=scale) | from x y z sx s
export class VoxelText {
  constructor(capacity = 420) {
    this.capacity = capacity;
    this.material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6, metalness: 0 });
    this.geometry = new RoundedBoxGeometry(1, 1, 1, 2, 0.12);
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, capacity);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.castShadow = true; this.mesh.receiveShadow = false; this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.group = new THREE.Group(); this.group.add(this.mesh);
    this.to = new Float32Array(capacity * 5); this.from = new Float32Array(capacity * 5); this.now = new Float32Array(capacity * 5);
    this.start = new Float32Array(capacity); this.dur = new Float32Array(capacity); this.kind = new Uint8Array(capacity);
    this.seed = new Float32Array(capacity);
    for (let i = 0; i < capacity; i += 1) this.seed[i] = Math.random();
    this.live = 0; this.active = 0; this.clock = 0; this.cell = 14; this.depth = 30; this.signature = '';
    this.dummy = new THREE.Object3D(); this.color = new THREE.Color();
    this.push = null; this.fx = null;
  }
  setStyle(style, glowing) {
    this.material.roughness = style.roughness; this.material.metalness = style.metalness; this.material.envMapIntensity = style.env;
    this.material.emissive.set(glowing ? '#ffffff' : '#000000'); this.material.emissiveIntensity = 0;
    if (this.geometry) this.geometry.dispose();
    this.geometry = style.rounded ? new RoundedBoxGeometry(1, 1, 1, 2, 0.14) : new THREE.BoxGeometry(1, 1, 1);
    this.mesh.geometry = this.geometry;
    this.signature = '';
  }
  // enter: 'rain' drops blocks layer by layer; 'morph' flies existing blocks to their new places; 'pop' scales them in.
  set(lines, { cell = 14, depth = 30, colors = ['#ffffff'], colorBy = 'row', enter = 'morph', instant = false, key = '' } = {}) {
    const signature = `${lines.join('\n')}|${cell}|${depth}|${colors.join()}|${colorBy}|${key}`;
    if (signature === this.signature) return false;
    this.signature = signature; this.cell = cell; this.depth = depth;
    const { runs, rows } = lines.length ? layout(lines) : { runs: [], rows: 0 };
    const count = Math.min(this.capacity, runs.length);
    const previous = this.active;
    this.height = rows * cell;
    for (let i = 0; i < Math.max(count, this.live); i += 1) {
      const o = i * 5;
      const existed = i < previous;
      // Whatever is on screen now is where the motion starts.
      if (i < this.live) for (let j = 0; j < 5; j += 1) this.from[o + j] = this.now[o + j];
      if (i < count) {
        const run = runs[i];
        this.to[o] = run.x * cell; this.to[o + 1] = run.y * cell; this.to[o + 2] = 0; this.to[o + 3] = run.n * cell - cell * 0.1; this.to[o + 4] = 1;
        const index = colorBy === 'letter' ? run.letter + run.line : colorBy === 'line' ? run.line : run.row;
        this.mesh.setColorAt(i, this.color.set(colors[((index % colors.length) + colors.length) % colors.length]));
        if (enter === 'rain' || !existed) {
          const rain = enter === 'rain';
          this.from[o] = this.to[o]; this.from[o + 1] = this.to[o + 1] + (rain ? 520 + this.seed[i] * 260 : 0); this.from[o + 2] = rain ? 0 : -40;
          this.from[o + 3] = this.to[o + 3]; this.from[o + 4] = rain ? 1 : 0;
          this.kind[i] = rain ? 1 : 2;
          this.start[i] = this.clock + (rain ? run.row * 0.085 + run.letter * 0.035 + this.seed[i] * 0.12 : this.seed[i] * 0.18);
          this.dur[i] = rain ? 0.95 : 0.5;
        } else { this.kind[i] = 0; this.start[i] = this.clock + this.seed[i] * 0.14; this.dur[i] = 0.55; }
      } else {
        // No longer needed: lift away and vanish.
        this.to[o] = this.from[o]; this.to[o + 1] = this.from[o + 1] + 60 + this.seed[i] * 90; this.to[o + 2] = this.from[o + 2];
        this.to[o + 3] = this.from[o + 3]; this.to[o + 4] = 0;
        this.kind[i] = 0; this.start[i] = this.clock + this.seed[i] * 0.2; this.dur[i] = 0.45;
      }
      if (instant) { this.start[i] = this.clock - 10; }
    }
    this.live = Math.max(count, this.live); this.active = count;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    return true;
  }
  clear(instant) { this.set([], { instant, key: 'empty' }); }
  get width() { let max = 0; for (let i = 0; i < this.active; i += 1) max = Math.max(max, Math.abs(this.to[i * 5]) + this.to[i * 5 + 3] / 2); return max * 2; }
  // push: {x, y, radius} in the text's own plane; blocks near it lean back. fx: {kind: 'wave'|'shiver'|'hop', k: 0..1}
  update(dt, reduced) {
    this.clock += dt;
    const dummy = this.dummy; const push = reduced ? null : this.push; const fx = reduced ? null : this.fx;
    let lastVisible = 0;
    for (let i = 0; i < this.live; i += 1) {
      const o = i * 5;
      let k = this.dur[i] > 0 ? (this.clock - this.start[i]) / this.dur[i] : 1;
      k = reduced ? 1 : Math.max(0, Math.min(1, k));
      const kind = this.kind[i];
      const e = kind === 1 ? bounce(k) : kind === 2 ? back(k) : smooth(k);
      const linear = kind === 1 ? Math.min(1, k * 1.6) : e;
      let x = this.from[o] + (this.to[o] - this.from[o]) * linear;
      let y = this.from[o + 1] + (this.to[o + 1] - this.from[o + 1]) * e;
      let z = this.from[o + 2] + (this.to[o + 2] - this.from[o + 2]) * linear;
      const w = this.from[o + 3] + (this.to[o + 3] - this.from[o + 3]) * linear;
      const s = Math.max(0, this.from[o + 4] + (this.to[o + 4] - this.from[o + 4]) * (kind === 2 ? e : linear));
      this.now[o] = x; this.now[o + 1] = y; this.now[o + 2] = z; this.now[o + 3] = w; this.now[o + 4] = s;
      let rz = 0; let rx = 0;
      if (kind === 1 && k < 1) rz = (1 - Math.min(1, k * 1.7)) * (this.seed[i] - 0.5) * 1.6;
      if (fx) {
        const env = Math.sin(Math.PI * fx.k);
        if (fx.kind === 'wave') { const phase = x * 0.012 - fx.k * 9; y += Math.sin(phase) * 13 * env; z += Math.cos(phase) * 16 * env; }
        else if (fx.kind === 'shiver') { x += Math.sin(this.clock * 61 + i * 1.7) * 2.6 * env; y += Math.cos(this.clock * 53 + i * 2.3) * 1.8 * env; }
        else if (fx.kind === 'hop') { const lag = Math.max(0, Math.min(1, fx.k * 2.2 - (x / 900 + 0.5) * 1.2)); y += Math.sin(Math.PI * lag) * 26; rz += Math.sin(Math.PI * lag) * 0.1 * (this.seed[i] - 0.5); }
        else if (fx.kind === 'slip') { x += Math.sin(Math.PI * fx.k) * ((Math.floor(y / this.cell) % 2) ? 1 : -1) * 15; }
      }
      if (push) {
        const dx = x - push.x; const dy = y - push.y; const d2 = dx * dx + dy * dy; const r2 = push.radius * push.radius;
        if (d2 < r2) { const f = 1 - d2 / r2; z -= f * f * 46; rx = -dy / push.radius * f * 0.5; rz += dx / push.radius * f * 0.22; }
      }
      dummy.position.set(x, y, z); dummy.rotation.set(rx, 0, rz); dummy.scale.set(Math.max(0.001, w * s), Math.max(0.001, this.cell * 0.9 * s), Math.max(0.001, this.depth * s));
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
      if (s > 0.002) lastVisible = i + 1;
    }
    if (this.live > this.active && lastVisible <= this.active) this.live = this.active;
    this.mesh.count = this.live;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  dispose() { this.geometry.dispose(); this.material.dispose(); this.mesh.dispose(); }
}
