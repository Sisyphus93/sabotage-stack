// A tiny rigid-box physics world: boxes tumble, bounce and settle on a height-field floor (the plinth and the ground below it).
// Pure math with no THREE dependency, so it is unit-tested in plain Node. Units match the game board (1 unit = 1 board px).

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = a => Math.hypot(a[0], a[1], a[2]);

export function quatNormalize(q) {
  const n = Math.hypot(q[0], q[1], q[2], q[3]) || 1;
  q[0] /= n; q[1] /= n; q[2] /= n; q[3] /= n;
}
export function quatFromEuler(x, y, z) {
  const c1 = Math.cos(x / 2); const c2 = Math.cos(y / 2); const c3 = Math.cos(z / 2);
  const s1 = Math.sin(x / 2); const s2 = Math.sin(y / 2); const s3 = Math.sin(z / 2);
  return [s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3];
}
function quatToMat(q) {
  const [x, y, z, w] = q;
  return [
    1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w),
    2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w),
    2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)
  ];
}
const mulMatVec = (m, v) => [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
const mulMatTVec = (m, v) => [m[0] * v[0] + m[3] * v[1] + m[6] * v[2], m[1] * v[0] + m[4] * v[1] + m[7] * v[2], m[2] * v[0] + m[5] * v[1] + m[8] * v[2]];

export function makeBody({ pos, half, vel = [0, 0, 0], angVel = [0, 0, 0], quat = [0, 0, 0, 1], density = 0.0012, restitution = 0.32, friction = 0.55, life = Infinity, data = null }) {
  const [hx, hy, hz] = half;
  const mass = 8 * hx * hy * hz * density;
  // inverse principal inertia of a solid box (full extents = 2*half)
  const ix = (mass / 12) * ((2 * hy) ** 2 + (2 * hz) ** 2);
  const iy = (mass / 12) * ((2 * hx) ** 2 + (2 * hz) ** 2);
  const iz = (mass / 12) * ((2 * hx) ** 2 + (2 * hy) ** 2);
  return {
    pos: [...pos], half: [...half], vel: [...vel], angVel: [...angVel], quat: [...quat],
    mass, invMass: 1 / mass, invInertia: [1 / ix, 1 / iy, 1 / iz],
    restitution, friction, age: 0, life, resting: 0, asleep: false, data
  };
}

export class PhysicsWorld {
  constructor({ gravity = -520, floorY = () => 0, linearDamping = 0.04, angularDamping = 0.35 } = {}) {
    this.gravity = gravity; this.floorY = floorY; this.linearDamping = linearDamping; this.angularDamping = angularDamping;
    this.bodies = [];
  }

  add(body) { this.bodies.push(body); return body; }
  remove(body) { const i = this.bodies.indexOf(body); if (i >= 0) this.bodies.splice(i, 1); }
  clear() { this.bodies.length = 0; }

  step(dt) {
    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let s = 0; s < steps; s += 1) for (const body of this.bodies) if (!body.asleep) this.integrate(body, h);
    for (const body of this.bodies) body.age += dt;
  }

  corners(body) {
    const m = quatToMat(body.quat); const out = [];
    for (let sx = -1; sx <= 1; sx += 2) for (let sy = -1; sy <= 1; sy += 2) for (let sz = -1; sz <= 1; sz += 2) {
      const local = [sx * body.half[0], sy * body.half[1], sz * body.half[2]];
      out.push(mulMatVec(m, local));
    }
    return out;
  }

  integrate(body, h) {
    body.vel[1] += this.gravity * h;
    const ld = Math.max(0, 1 - this.linearDamping * h); const ad = Math.max(0, 1 - this.angularDamping * h);
    for (let i = 0; i < 3; i += 1) { body.vel[i] *= ld; body.angVel[i] *= ad; body.pos[i] += body.vel[i] * h; }
    const [wx, wy, wz] = body.angVel; const q = body.quat;
    const dq = [0.5 * (wx * q[3] + wy * q[2] - wz * q[1]), 0.5 * (wy * q[3] + wz * q[0] - wx * q[2]), 0.5 * (wz * q[3] + wx * q[1] - wy * q[0]), 0.5 * (-wx * q[0] - wy * q[1] - wz * q[2])];
    q[0] += dq[0] * h; q[1] += dq[1] * h; q[2] += dq[2] * h; q[3] += dq[3] * h;
    quatNormalize(q);
    this.collideFloor(body);
    const speed = len(body.vel) + len(body.angVel) * Math.max(...body.half);
    body.resting = speed < 14 && body.pos[1] - body.half[1] < this.floorY(body.pos[0], body.pos[2]) + Math.max(...body.half) * 1.6 ? body.resting + h : 0;
    if (body.resting > 0.7) { body.asleep = true; body.vel = [0, 0, 0]; body.angVel = [0, 0, 0]; }
  }

  invInertiaWorld(body, v) {
    const m = quatToMat(body.quat);
    const local = mulMatTVec(m, v);
    return mulMatVec(m, [local[0] * body.invInertia[0], local[1] * body.invInertia[1], local[2] * body.invInertia[2]]);
  }

  collideFloor(body) {
    const n = [0, 1, 0];
    let deepest = 0;
    for (let pass = 0; pass < 3; pass += 1) {
      for (const r of this.corners(body)) {
        const wx = body.pos[0] + r[0]; const wy = body.pos[1] + r[1]; const wz = body.pos[2] + r[2];
        const pen = this.floorY(wx, wz) - wy;
        if (pen <= 0) continue;
        deepest = Math.max(deepest, pen);
        const vc = [body.vel[0] + body.angVel[1] * r[2] - body.angVel[2] * r[1], body.vel[1] + body.angVel[2] * r[0] - body.angVel[0] * r[2], body.vel[2] + body.angVel[0] * r[1] - body.angVel[1] * r[0]];
        const vn = vc[1];
        if (vn >= 0) continue;
        const rxn = cross(r, n);
        const k = body.invMass + dot(cross(this.invInertiaWorld(body, rxn), r), n);
        const bounce = vn < -90 ? body.restitution : 0;
        const j = (-(1 + bounce) * vn) / k;
        body.vel[1] += j * body.invMass;
        let dw = this.invInertiaWorld(body, rxn);
        body.angVel[0] += dw[0] * j; body.angVel[1] += dw[1] * j; body.angVel[2] += dw[2] * j;
        // Coulomb friction along the sliding direction
        const vt = [vc[0], 0, vc[2]]; const speed = len(vt);
        if (speed > 1e-3) {
          const t = [vt[0] / speed, 0, vt[2] / speed];
          const rxt = cross(r, t);
          const kt = body.invMass + dot(cross(this.invInertiaWorld(body, rxt), r), t);
          const jt = Math.min(speed / kt, body.friction * j);
          body.vel[0] -= t[0] * jt * body.invMass; body.vel[2] -= t[2] * jt * body.invMass;
          dw = this.invInertiaWorld(body, rxt);
          body.angVel[0] -= dw[0] * jt; body.angVel[1] -= dw[1] * jt; body.angVel[2] -= dw[2] * jt;
        }
      }
    }
    if (deepest > 0) body.pos[1] += deepest * 0.85;
  }

  // Run the simulation forward without rendering (used to lay out the settled rubble pile on the results screen).
  settle(seconds = 3, dt = 1 / 60) { for (let t = 0; t < seconds; t += dt) this.step(dt); }
}

// The stage: a circular plinth whose top is y = 0, falling away to the ground around it.
export function stageFloor({ plinthRadius = 250, ground = -64 } = {}) {
  return (x, z) => {
    const r = Math.hypot(x, z);
    if (r <= plinthRadius) return 0;
    if (r >= plinthRadius + 22) return ground;
    return ground * ((r - plinthRadius) / 22);
  };
}
