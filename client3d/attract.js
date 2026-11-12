// The title screen's self-playing tower. It is a tiny imitation of a run (slide, drop, trim, eventually miss) that feeds
// the same Tower renderer the real game uses. It never touches the rules module or any game state.
const WIDTH = 360;
const PALETTE = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];

export class Attract {
  constructor() { this.runs = 0; this.reset(); }
  reset() {
    this.runs += 1;
    this.model = {
      key: `attract:${this.runs}`, stack: [{ left: 80, right: 280, color: PALETTE[0], perfect: false, level: 0 }], moving: null,
      playing: true, effect: null, collapsed: false, collapseStartLevel: null, fallen: [], animateLanding: true
    };
    this.limit = 8 + Math.floor(Math.random() * 5);
    this.rest = 0; this.spawn(0.6);
  }
  spawn(wait) {
    const stack = this.model.stack; const top = stack[stack.length - 1];
    const width = top.right - top.left;
    const fromLeft = stack.length % 2 === 1;
    this.model.moving = { left: fromLeft ? 0 : WIDTH - width, width, color: PALETTE[stack.length % PALETTE.length], level: stack.length };
    this.direction = fromLeft ? 1 : -1;
    this.speed = 150 + stack.length * 7;
    this.wait = wait; this.passes = 0;
    const doomed = stack.length >= this.limit;
    const roll = Math.random();
    this.error = doomed ? (Math.random() < 0.5 ? -1 : 1) * (width + 14) : roll < 0.5 ? 0 : (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * Math.min(22, width * 0.22));
    this.dropPass = Math.random() < 0.35 ? 1 : 0;
  }
  update(dt) {
    const model = this.model;
    if (model.collapsed) { this.rest -= dt; if (this.rest <= 0) this.reset(); return model; }
    if (this.wait > 0) { this.wait -= dt; return model; }
    const moving = model.moving; const stack = model.stack; const top = stack[stack.length - 1];
    const before = moving.left + moving.width / 2;
    moving.left += this.direction * this.speed * dt;
    if (moving.left <= 0) { moving.left = 0; this.direction = 1; this.passes += 1; }
    if (moving.left + moving.width >= WIDTH) { moving.left = WIDTH - moving.width; this.direction = -1; this.passes += 1; }
    const after = moving.left + moving.width / 2;
    const target = Math.max(moving.width / 2, Math.min(WIDTH - moving.width / 2, (top.left + top.right) / 2 + this.error));
    if (this.passes >= this.dropPass && (before - target) * (after - target) <= 0 && before !== after) {
      moving.left = target - moving.width / 2;
      const left = Math.max(moving.left, top.left); const right = Math.min(moving.left + moving.width, top.right);
      const level = stack.length;
      if (right - left <= 0) {
        model.fallen = model.fallen.concat({ left: moving.left, right: moving.left + moving.width, color: moving.color, level, kind: 'miss' });
        model.collapsed = true; model.collapseStartLevel = Math.max(1, level - 5); model.playing = false; model.moving = null; this.rest = 3.4;
        return model;
      }
      const perfect = Math.abs(this.error) < 3;
      if (!perfect) {
        const cutLeft = moving.left < top.left;
        model.fallen = model.fallen.concat(cutLeft ? { left: moving.left, right: left, color: moving.color, level } : { left: right, right: moving.left + moving.width, color: moving.color, level });
      }
      model.stack = stack.concat({ left: perfect ? top.left : left, right: perfect ? top.right : right, color: moving.color, perfect, level });
      this.spawn(0.28);
    }
    return model;
  }
}
