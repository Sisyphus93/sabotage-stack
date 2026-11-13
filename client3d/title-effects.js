// How the brick title answers each of the sixteen sabotages. Pure functions (no three.js, no DOM): given the sabotage, the time
// since it landed and how long it lasts, they return a "pose": where each tier of the title stands, which letters misbehave,
// what the camera and the post chain do. The stage applies the pose; tests check that every sabotage has one.
import { clamp, smoothstep } from './util.js';

export const TITLE_EFFECT_IDS = Object.freeze(['turbo', 'drunk', 'slowmo', 'magnet', 'portal', 'rollercoaster', 'earthquake', 'pisa', 'spotlight', 'peekaboo', 'zoom', 'double', 'accordion', 'crumble', 'superglue', 'calipers']);
// the five the game itself leaves out of reduced-motion rooms; the title keeps their caption and look but not their movement
export const TITLE_MOTION_HEAVY = Object.freeze(['accordion', 'pisa', 'rollercoaster', 'peekaboo', 'earthquake']);

const TAU = Math.PI * 2;
const easeOut = k => 1 - (1 - k) * (1 - k);
const easeIn = k => k * k;

// 0 -> 1 as the sabotage arrives, back to 0 as it ends
export function envelope(t, dur, rise = 0.45, fall = 0.6) { return smoothstep(0, rise, t) * (1 - smoothstep(Math.max(rise, dur - fall), dur, t)); }

const rest = () => ({ x: 0, y: 0, rz: 0, sx: 1 });

// The Pisa Tilt in the title: a lean of up to 16 degrees that eases in, sways, and eases out.
export function pisaLean(t, dur, dir = 1) { return dir * 0.2792 * envelope(t, dur, 0.9, 1.0) * (0.86 + 0.14 * Math.sin(t * 2.3)); } // 0.2792 rad: never past the game's 16 degrees

// pose(id, t, dur, { reduced, dir, count }) -> { env, top, bottom, letter(i, n) -> { y, rz, vis }, shed, post, cam, veil, ghost, gates, jaws, glue, streaks }
export function titlePose(id, t, dur = 4.6, { reduced = false, dir = 1 } = {}) {
  const env = envelope(t, dur);
  const m = reduced ? 0 : 1; // movement scale: Reduced Motion keeps the look, not the motion
  const p = {
    id, env, t, top: rest(), bottom: rest(), letter: null, shed: 0, shedMode: '',
    post: {}, cam: { zoom: 1, focus: 0, roll: 0, shake: 0 }, veil: 0, spotSweep: 0, ghost: 0, ghostDx: 0, gates: 0, wrap: 0, jaws: 0, glue: 0, streaks: 0, clip: false, rail: 0
  };
  const e = env * m;
  switch (id) {
    case 'turbo': {
      p.top.x = e * (Math.sin(t * 5.6) * 40 + Math.sin(t * 23) * 3.5); p.bottom.x = -e * Math.sin(t * 5.6) * 16;
      p.top.sx = 1 + e * 0.015 * Math.sin(t * 23); p.streaks = env; p.post.zoomBlur = 0.28 * env; p.post.ca = 0.0014 * env;
      break;
    }
    case 'drunk': {
      p.top.rz = e * (Math.sin(t * 2.1) * 0.06 + Math.sin(t * 3.7) * 0.03); p.top.x = e * Math.sin(t * 1.6) * 26;
      p.bottom.rz = e * Math.sin(t * 1.9 + 1) * 0.026; p.bottom.x = -e * Math.sin(t * 1.6) * 8;
      p.letter = (i, n) => ({ y: e * Math.abs(Math.sin(t * 2.6 + i * 1.4)) * 4, rz: e * Math.sin(t * 3.1 + i * 1.3) * 0.09, vis: 1 });
      p.post.wobble = 0.8 * env;
      break;
    }
    case 'slowmo': {
      // creeps for most of a beat, then darts, on a 1.4 s cycle (the game's own rhythm)
      const beat = (t % 1.4) / 1.4; const creep = 0.56; const lap = Math.floor(t / 1.4);
      const travel = beat < creep ? (beat / creep) * 0.3 : 0.3 + 0.7 * easeOut((beat - creep) / (1 - creep));
      const side = lap % 2 ? -1 : 1; p.top.x = e * side * (travel - 0.5) * 120; p.bottom.x = -p.top.x * 0.22;
      p.post.desat = 0.5 * env; p.post.tint = [0.9, 0.97, 1.12];
      break;
    }
    case 'magnet': {
      // pulled back to the stack's centre, then whipped out like a slingshot
      const cyc = 1.25; const k = (t % cyc) / cyc; const lap = Math.floor(t / cyc); const side = (lap % 2 ? -1 : 1) * dir;
      const x = k < 0.66 ? -side * 62 * easeOut(k / 0.66) : -side * 62 + side * 150 * easeIn((k - 0.66) / 0.34) * (1 - 0.35 * (k - 0.66));
      p.top.x = e * x; p.top.sx = 1 + e * (k < 0.66 ? -0.04 * k : 0.07 * (1 - k)); p.top.rz = e * side * 0.03 * (k < 0.66 ? k : 1 - k); p.bottom.x = e * x * -0.12;
      p.cam.shake = 0.15 * env;
      break;
    }
    case 'portal': {
      // the upper tier slides out through one gate and comes back in through the other
      // `wrap` is how far round the loop it has come (0..1, signed by direction); the stage turns it into distance, because it
      // knows how far apart the gates stand. The tier ends exactly where it started.
      p.gates = env; p.clip = true; p.wrap = m ? dir * smoothstep(0.3, Math.max(0.6, dur - 0.5), t) : 0;
      break;
    }
    case 'rollercoaster': {
      p.letter = (i, n) => ({ y: e * (Math.sin(t * 3.2 - i * 0.55) * 22 + 6), rz: e * Math.cos(t * 3.2 - i * 0.55) * 0.1, vis: 1 });
      p.top.y = e * Math.sin(t * 3.2 + 1.2) * 6; p.rail = env;
      break;
    }
    case 'earthquake': {
      p.top.x = e * (Math.sin(t * 47) * 5.5 + Math.sin(t * 31 + 1) * 4); p.top.y = e * Math.sin(t * 53) * 2.4; p.top.rz = e * Math.sin(t * 41) * 0.007;
      p.bottom.x = e * (Math.sin(t * 43 + 2) * 4 + Math.sin(t * 29) * 3); p.bottom.y = e * Math.sin(t * 59) * 1.6;
      p.cam.shake = 1 * env; p.shed = e * 0.28; p.shedMode = 'top'; p.post.ca = 0.0022 * env;
      break;
    }
    case 'pisa': {
      const a = pisaLean(t, dur, dir) * m;
      p.cam.roll = a * 0.62; p.top.rz = a * 0.55; p.bottom.rz = a * 0.3; p.top.x = a * 70; p.bottom.x = a * 14;
      p.shed = Math.max(0, Math.abs(a) - 0.1) * 5.2; p.shedMode = 'lean';
      if (reduced) { p.cam.roll = pisaLean(t, dur, dir) * 0.3; }
      break;
    }
    case 'spotlight': {
      p.veil = env; p.spotSweep = Math.sin(t * 0.9 + (dir > 0 ? 0 : Math.PI)) * 0.42 * (reduced ? 0 : 1);
      break;
    }
    case 'peekaboo': {
      p.letter = (i, n) => ({ y: 0, rz: 0, vis: env > 0.02 && ((t * 1.5 + i * 0.37) % 1) < 0.66 ? 1 : 0 });
      break;
    }
    case 'zoom': {
      p.cam.zoom = 1 + 0.85 * env; p.cam.focus = env; break;
    }
    case 'double': {
      const dx = 74 * env * (m ? Math.sin(t * 1.8) : 0.55);
      p.ghost = env; p.ghostDx = dx; p.top.x = -dx * 0.55; p.bottom.x = -dx * 0.3;
      break;
    }
    case 'accordion': {
      const breathe = 0.5 - 0.5 * Math.cos(t * 7.85); // 0.8 s cycle
      p.top.sx = 1 - 0.55 * breathe * e; p.bottom.sx = 1 - 0.4 * (0.5 - 0.5 * Math.cos(t * 7.85 + 0.9)) * e;
      break;
    }
    case 'crumble': {
      p.shed = env * 0.9; p.shedMode = 'edges'; p.cam.shake = 0.18 * env;
      break;
    }
    case 'superglue': {
      p.glue = env; p.top.rz = e * Math.sin(t * 2) * 0.004; p.top.sx = 1 + e * 0.012 * Math.sin(t * 5);
      break;
    }
    case 'calipers': {
      const close = smoothstep(0, 1.1, t) * (1 - smoothstep(dur - 0.7, dur, t));
      p.jaws = close; p.top.sx = 1 - 0.07 * close; p.bottom.sx = 1 - 0.05 * close;
      break;
    }
    default: break;
  }
  return p;
}

// What a sabotage is, in the captions: "CHAT VOTED: THE PISA TILT"
export function captionFor(name) { return `CHAT VOTED: ${String(name || '').toUpperCase()}`; }

// The demo's chat: picks a sabotage every few seconds, runs a short vote (the crowd raises its cards), then lets it play out
// while the title rebuilds. Pure timeline; the stage reads `stage`, `ballot` and `effect` from it each frame.
export class TitleDirector {
  constructor(ids = TITLE_EFFECT_IDS, random = Math.random, { reduced = false } = {}) {
    this.ids = ids.slice(); this.random = random; this.order = []; this.next = 0; this.reduced = reduced;
    this.stage = 'idle'; this.timer = 0; this.idle = 2.2; this.ballot = null; this.effect = null; this.forced = null; this.count = 0; this.dir = 1;
  }
  setReduced(reduced) { this.reduced = Boolean(reduced); }
  pool() { return this.reduced ? this.ids.filter(id => !TITLE_MOTION_HEAVY.includes(id)) : this.ids; }
  pick() {
    const pool = this.pool();
    if (!this.order.length || this.next >= this.order.length || this.order.some(id => !pool.includes(id))) {
      this.order = pool.slice(); for (let i = this.order.length - 1; i > 0; i -= 1) { const j = Math.floor(this.random() * (i + 1)); [this.order[i], this.order[j]] = [this.order[j], this.order[i]]; } this.next = 0;
    }
    return this.order[this.next++];
  }
  // a click on the icon ring (or the "Trigger sabotage" key): this one, at once. An open vote is decided in its favour and wrapped up;
  // a running sabotage is wound down so that this one follows straight away (no idle wait, no vote: chat has spoken).
  force(id) {
    if (!id) return;
    if (this.stage === 'vote' && this.ballot) { const at = this.ballot.options.indexOf(id); if (at > 0) this.ballot.options[at] = this.ballot.options[0]; this.ballot.options[0] = id; this.ballot.winner = id; this.timer = Math.max(this.timer, 1.45); return; }
    this.forced = id; if (this.stage === 'effect' && this.effect) this.effect.remaining = Math.min(this.effect.remaining, 0.3);
  }
  begin(id) { this.dir = this.random() < 0.5 ? -1 : 1; this.effect = { id, elapsed: 0, remaining: 4.4, duration: 4.4, dir: this.dir, n: ++this.count }; this.stage = 'effect'; this.timer = 0; }
  openVote(winner) {
    const options = [winner]; const others = this.ids.filter(id => id !== winner).sort(() => this.random() - 0.5);
    while (options.length < 3) options.push(others[options.length - 1]);
    const base = [0.3 + this.random() * 0.2, 0.18 + this.random() * 0.18, 0.16 + this.random() * 0.18];
    this.ballot = { options, base, fractions: base.slice(), voted: 0, winner }; this.stage = 'vote'; this.timer = 0;
  }
  update(dt) {
    this.timer += dt;
    if (this.stage === 'idle') {
      if (this.forced) { const id = this.forced; this.forced = null; this.begin(id); }
      else if (this.timer >= this.idle) this.openVote(this.pick());
    } else if (this.stage === 'vote') {
      const t = this.timer; const f = this.ballot.fractions; const b = this.ballot.base;
      for (let i = 0; i < 3; i += 1) f[i] = clamp(b[i] * (0.4 + t * 0.55) + (i === 0 ? t * 0.07 : 0) + Math.sin(t * 5 + i * 2) * 0.04, 0.02, 1);
      this.ballot.voted = clamp(t / 1.4);
      if (t >= 1.9) { const id = this.ballot.winner; this.ballot = null; this.begin(id); }
    } else if (this.stage === 'effect') {
      const e = this.effect; e.elapsed += dt; e.remaining -= dt;
      if (e.remaining <= 0) { this.effect = null; this.stage = 'idle'; this.timer = 0; this.idle = this.reduced ? 3.2 : 1.7; if (this.forced) { const id = this.forced; this.forced = null; this.begin(id); } }
    }
  }
}
