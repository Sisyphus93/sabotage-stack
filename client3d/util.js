// Small math/animation helpers shared by every 3D module. No THREE import: this file is also unit-tested in plain Node.

export const TAU = Math.PI * 2;
export const clamp = (v, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => (a === b ? 0 : clamp((v - a) / (b - a)));
export const smoothstep = (a, b, v) => { const t = invLerp(a, b, v); return t * t * (3 - 2 * t); };
export const smootherstep = (a, b, v) => { const t = invLerp(a, b, v); return t * t * t * (t * (t * 6 - 15) + 10); };
export const mix = lerp;
export const mod = (n, m) => ((n % m) + m) % m;
export const sign = v => (v < 0 ? -1 : 1);

// Frame-rate independent exponential smoothing: damp(current, target, lambda, dt). Larger lambda = snappier.
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt));

export const easeOutCubic = t => 1 - (1 - t) ** 3;
export const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2);
export const easeOutBack = (t, s = 1.70158) => 1 + (s + 1) * (t - 1) ** 3 + s * (t - 1) ** 2;
export const easeOutElastic = t => (t === 0 || t === 1 ? t : 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * (TAU / 3)) + 1);
export const easeOutBounce = t => {
  const n = 7.5625; const d = 2.75;
  if (t < 1 / d) return n * t * t;
  if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
  if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
  return n * (t -= 2.625 / d) * t + 0.984375;
};

// Deterministic PRNG (mulberry32) so the crowd, clouds and logo always look identical for a given seed.
export function rng(seed = 1) {
  let a = seed | 0;
  const next = () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  next.range = (lo, hi) => lo + (hi - lo) * next();
  next.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * next());
  next.pick = list => list[Math.floor(next() * list.length) % list.length];
  next.sign = () => (next() < 0.5 ? -1 : 1);
  return next;
}

export function hash01(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

// Cheap 1D value noise, used for hill silhouettes and wind.
export function noise1(x, seed = 0) {
  const i = Math.floor(x); const f = x - i;
  const a = hash01(i + seed * 17.13); const b = hash01(i + 1 + seed * 17.13);
  const u = f * f * (3 - 2 * f);
  return lerp(a, b, u) * 2 - 1;
}
export function fbm1(x, seed = 0, octaves = 4) {
  let total = 0; let amp = 0.5; let freq = 1;
  for (let o = 0; o < octaves; o += 1) { total += noise1(x * freq, seed + o * 3.7) * amp; amp *= 0.5; freq *= 2; }
  return total;
}

// A critically-damped-ish spring with velocity, for wobbling letters, bouncing blocks, camera follow.
export class Spring {
  constructor(value = 0, stiffness = 120, damping = 12) { this.value = value; this.target = value; this.velocity = 0; this.stiffness = stiffness; this.damping = damping; }
  step(dt) {
    // sub-step so big frame gaps (tab switches) stay stable
    const steps = Math.max(1, Math.ceil(dt / 0.008)); const h = dt / steps;
    for (let i = 0; i < steps; i += 1) {
      this.velocity += ((this.target - this.value) * this.stiffness - this.velocity * this.damping) * h;
      this.value += this.velocity * h;
    }
    return this.value;
  }
  snap(value) { this.value = value; this.target = value; this.velocity = 0; }
}

export function parseHex(color) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(color || ''));
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export function hexToRgb01(color, fallback = [1, 1, 1]) {
  const rgb = parseHex(color);
  return rgb ? rgb.map(v => v / 255) : fallback;
}
export function mixHex(a, b, t) {
  const ca = parseHex(a); const cb = parseHex(b);
  if (!ca || !cb) return a;
  return `#${ca.map((v, i) => Math.round(lerp(v, cb[i], t)).toString(16).padStart(2, '0')).join('')}`;
}
