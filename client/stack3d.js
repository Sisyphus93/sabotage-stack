'use strict';

// client/stack3d.js — the 3D presentation layer for Sabotage Stack.
//
// A hand-written software 3D renderer: real perspective camera, orbit controls, lit and shaded box
// faces, projected ground grids, long shadows, billboards, 3D particles and post effects, all rasterised
// through the ordinary Canvas2D context the game already owns. No libraries, no WebGL, no network.
//
// Two rules this file never breaks:
//   1. PRESENTATION ONLY. It reads the authoritative game state (shared/game-core.js) and draws it. It
//      never moves a block, never widens a perfect window, never touches a landing calculation.
//   2. THE FRONT VIEW IS THE FAIR VIEW. At yaw 0 the projection is calibrated so the tower's front face
//      lands on exactly the same pixels the classic 2D renderer used: the base block's front-top edge sits
//      at y = BASELINE - BLOCK_H. Perspective, orbit and depth are added on top of that contract, never
//      instead of it, so a 3D player judges the same geometry a 2D player does.
//
// World units are game pixels. World X = game x - WIDTH / 2 (right), world Y = BASELINE - game y (up),
// world Z points at the viewer; every block is a slab DEPTH deep.
(function exposeStack3D(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  if (root) root.SabotageStack3D = api;
})(typeof window === 'object' && window ? window : globalThis, function createStack3D() {
  const WIDTH = 360;
  const HEIGHT = 520;
  const BASELINE = 480;
  const BLOCK_H = 22;
  const DEPTH = 30;
  const HALF_DEPTH = DEPTH / 2;
  const CENTRE_X = WIDTH / 2;

  // The camera looks at a target point that stays pinned to this screen position; scrolling the tower is
  // done by raising the target, exactly like the classic renderer's cameraOffset.
  const FOCAL = 940;
  const ANCHOR_X = CENTRE_X;
  const DEFAULT_PITCH = 0.31;
  const MIN_DISTANCE = 330;
  const MAX_DISTANCE = 2400;
  const NEAR = 12;
  // anchorY is solved once so the base block's front-top edge lands on BASELINE - BLOCK_H at the default
  // pitch and distance. Everything else in the scene follows from that single calibration.
  const ANCHOR_Y = (function calibrateAnchor() {
    const cp = Math.cos(DEFAULT_PITCH); const sp = Math.sin(DEFAULT_PITCH);
    const vy = (BLOCK_H / 2) * cp - HALF_DEPTH * sp;
    const depth = FOCAL - (BLOCK_H / 2) * sp - HALF_DEPTH * cp;
    return (BASELINE - BLOCK_H) + FOCAL * vy / depth;
  })();

  // The diorama slab the tower stands on, plus the low kerbs that mark the bounce walls at x = 0 and 360.
  const SLAB = Object.freeze({ minX: -212, maxX: 212, minZ: -104, maxZ: 104, top: 0, bottom: -58 });
  const WALL = Object.freeze({ halfWidth: 7, height: 15, z: 104 });
  const LANE_HALF = WIDTH / 2;

  // Key light: high, from the front-left. Long shadows fall back and to the right onto the slab.
  const LIGHT = Object.freeze(normalize3({ x: -0.52, y: 0.74, z: 0.42 }));
  const SHADOW_DIR = Object.freeze({ x: 0.78, z: -0.62 });

  /* ------------------------------------------------------------------ maths */

  function clamp(value, low, high) { return value < low ? low : value > high ? high : value; }
  function lerp(from, to, t) { return from + (to - from) * t; }
  function normalize3(v) {
    const length = Math.hypot(v.x, v.y, v.z) || 1;
    return { x: v.x / length, y: v.y / length, z: v.z / length };
  }
  function dot3(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
  function cross3(a, b) { return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x }; }
  // Frame-rate independent easing toward a target.
  function approach(current, target, smoothing, dt) {
    if (!(dt > 0) || smoothing <= 0) return target;
    return current + (target - current) * (1 - Math.exp(-dt / smoothing));
  }
  // Deterministic hash noise so decor and particles look organic but identical on every client.
  function hash01(n) {
    const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  }

  /* ------------------------------------------------------------------ colour */

  const colorCache = new Map();
  function parseColor(input) {
    if (typeof input !== 'string') return [128, 128, 128];
    const cached = colorCache.get(input);
    if (cached) return cached;
    let rgb = null;
    const hex = /^#([0-9a-f]{3,8})$/i.exec(input.trim());
    if (hex) {
      const body = hex[1];
      if (body.length === 3 || body.length === 4) {
        rgb = [0, 1, 2].map(index => parseInt(body[index] + body[index], 16));
      } else {
        rgb = [0, 2, 4].map(index => parseInt(body.slice(index, index + 2), 16));
      }
    } else {
      const fn = /^(?:rgba?|hsla?)\(([^)]+)\)$/i.exec(input.trim());
      if (fn) {
        const parts = fn[1].split(/[\s,/]+/).filter(Boolean).map(Number);
        if (parts.length >= 3 && parts.every(Number.isFinite)) rgb = parts.slice(0, 3).map(value => clamp(value, 0, 255));
      }
    }
    if (!rgb || rgb.some(value => !Number.isFinite(value))) rgb = [128, 128, 128];
    if (colorCache.size > 400) colorCache.clear();
    colorCache.set(input, rgb);
    return rgb;
  }
  function mixRgb(a, b, amount) {
    return [
      Math.round(clamp(lerp(a[0], b[0], amount), 0, 255)),
      Math.round(clamp(lerp(a[1], b[1], amount), 0, 255)),
      Math.round(clamp(lerp(a[2], b[2], amount), 0, 255))
    ];
  }
  function scaleRgb(rgb, amount) {
    return [
      Math.round(clamp(rgb[0] * amount, 0, 255)),
      Math.round(clamp(rgb[1] * amount, 0, 255)),
      Math.round(clamp(rgb[2] * amount, 0, 255))
    ];
  }
  function css(rgb, alpha) {
    return alpha == null || alpha >= 1
      ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
      : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${clamp(alpha, 0, 1).toFixed(3)})`;
  }
  function tint(input, target, amount, alpha) { return css(mixRgb(parseColor(input), parseColor(target), amount), alpha); }
  function brighten(input, amount, alpha) {
    const rgb = parseColor(input);
    return css(amount >= 0 ? mixRgb(rgb, [255, 255, 255], amount) : mixRgb(rgb, [0, 0, 0], -amount), alpha);
  }

  /* ------------------------------------------------------------------ camera */

  // A view is the user-controlled part of the camera (orbit + dolly). The rig adds the per-frame target,
  // shake and zoom on top of it. Views are plain data so the game can persist and restore them.
  function createView() {
    return { yaw: 0, pitch: DEFAULT_PITCH, distance: FOCAL, cinematic: false, orbiting: 0 };
  }
  function clampView(view) {
    view.yaw = clamp(Number(view.yaw) || 0, -1.15, 1.15);
    view.pitch = clamp(Number(view.pitch) || 0, -0.16, 0.72);
    view.distance = clamp(Number(view.distance) || FOCAL, MIN_DISTANCE, MAX_DISTANCE);
    return view;
  }

  function createRig() {
    return {
      yaw: 0, pitch: DEFAULT_PITCH, distance: FOCAL,
      targetX: 0, targetY: BLOCK_H / 2, targetZ: 0,
      anchorX: ANCHOR_X, anchorY: ANCHOR_Y,
      pos: { x: 0, y: 0, z: FOCAL }, right: { x: 1, y: 0, z: 0 }, up: { x: 0, y: 1, z: 0 }, forward: { x: 0, y: 0, z: -1 },
      scale: 1
    };
  }

  function updateRig(rig, options) {
    const yaw = Number(options.yaw) || 0;
    const pitch = Number(options.pitch) || 0;
    const distance = clamp(Number(options.distance) || FOCAL, MIN_DISTANCE, MAX_DISTANCE);
    const cp = Math.cos(pitch); const sp = Math.sin(pitch);
    const cy = Math.cos(yaw); const sy = Math.sin(yaw);
    rig.yaw = yaw; rig.pitch = pitch; rig.distance = distance;
    rig.targetX = Number(options.targetX) || 0;
    rig.targetY = Number.isFinite(options.targetY) ? options.targetY : BLOCK_H / 2;
    rig.targetZ = Number(options.targetZ) || 0;
    rig.anchorX = Number.isFinite(options.anchorX) ? options.anchorX : ANCHOR_X;
    rig.anchorY = Number.isFinite(options.anchorY) ? options.anchorY : ANCHOR_Y;
    // Camera sits up and around the target; forward points back at it.
    rig.forward = { x: -sy * cp, y: -sp, z: -cy * cp };
    rig.pos = {
      x: rig.targetX + sy * cp * distance,
      y: rig.targetY + sp * distance,
      z: rig.targetZ + cy * cp * distance
    };
    rig.right = normalize3(cross3(rig.forward, { x: 0, y: 1, z: 0 }));
    rig.up = cross3(rig.right, rig.forward);
    rig.scale = FOCAL / distance;
    return rig;
  }

  // World point -> screen point. depth is the distance along the view direction; scale sizes billboards.
  function projectPoint(rig, x, y, z, out) {
    const dx = x - rig.pos.x; const dy = y - rig.pos.y; const dz = z - rig.pos.z;
    const vx = dx * rig.right.x + dy * rig.right.y + dz * rig.right.z;
    const vy = dx * rig.up.x + dy * rig.up.y + dz * rig.up.z;
    const depth = dx * rig.forward.x + dy * rig.forward.y + dz * rig.forward.z;
    const target = out || {};
    if (depth < NEAR) { target.visible = false; target.depth = depth; target.x = 0; target.y = 0; target.scale = 0; return target; }
    const k = FOCAL / depth;
    target.visible = true;
    target.depth = depth;
    target.scale = k;
    target.x = rig.anchorX + vx * k;
    target.y = rig.anchorY - vy * k;
    target.vx = vx; target.vy = vy;
    return target;
  }

  function createViewTransform(rig) {
    const scratch = {};
    return {
      rig,
      project(x, y, z) { return projectPoint(rig, x, y, z, {}); },
      // Reuses one object: only for immediate, non-retained use inside a single draw call.
      fast(x, y, z) { return projectPoint(rig, x, y, z, scratch); }
    };
  }

  /* ------------------------------------------------------------------ geometry */

  // Local-space corner offsets (unit cube) and outward normals for the six faces, wound counter-clockwise
  // as seen from outside so the projected polygon stays front-facing.
  const FACES = Object.freeze([
    { kind: 'front', normal: Object.freeze({ x: 0, y: 0, z: 1 }), corners: Object.freeze([[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]) },
    { kind: 'back', normal: Object.freeze({ x: 0, y: 0, z: -1 }), corners: Object.freeze([[1, -1, -1], [-1, -1, -1], [-1, 1, -1], [1, 1, -1]]) },
    { kind: 'right', normal: Object.freeze({ x: 1, y: 0, z: 0 }), corners: Object.freeze([[1, -1, 1], [1, -1, -1], [1, 1, -1], [1, 1, 1]]) },
    { kind: 'left', normal: Object.freeze({ x: -1, y: 0, z: 0 }), corners: Object.freeze([[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]) },
    { kind: 'top', normal: Object.freeze({ x: 0, y: 1, z: 0 }), corners: Object.freeze([[-1, 1, 1], [1, 1, 1], [1, 1, -1], [-1, 1, -1]]) },
    { kind: 'bottom', normal: Object.freeze({ x: 0, y: -1, z: 0 }), corners: Object.freeze([[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]]) }
  ]);

  function identityRotation() { return [1, 0, 0, 0, 1, 0, 0, 0, 1]; }
  function rotationFromEuler(rollX, yawY, spinZ) {
    const cx = Math.cos(rollX || 0); const sx = Math.sin(rollX || 0);
    const cy = Math.cos(yawY || 0); const sy = Math.sin(yawY || 0);
    const cz = Math.cos(spinZ || 0); const sz = Math.sin(spinZ || 0);
    const rx = [1, 0, 0, 0, cx, -sx, 0, sx, cx];
    const ry = [cy, 0, sy, 0, 1, 0, -sy, 0, cy];
    const rz = [cz, -sz, 0, sz, cz, 0, 0, 0, 1];
    return multiplyMatrices(multiplyMatrices(rz, ry), rx);
  }
  // Rotation about an arbitrary world axis (used by the Pisa tilt, which swings the whole tower).
  function rotationAboutAxis(axis, angle) {
    const a = normalize3(axis); const c = Math.cos(angle); const s = Math.sin(angle); const t = 1 - c;
    return [
      t * a.x * a.x + c, t * a.x * a.y - s * a.z, t * a.x * a.z + s * a.y,
      t * a.x * a.y + s * a.z, t * a.y * a.y + c, t * a.y * a.z - s * a.x,
      t * a.x * a.z - s * a.y, t * a.y * a.z + s * a.x, t * a.z * a.z + c
    ];
  }
  function multiplyMatrices(a, b) {
    const out = new Array(9);
    for (let row = 0; row < 3; row += 1) {
      for (let column = 0; column < 3; column += 1) {
        out[row * 3 + column] = a[row * 3] * b[column] + a[row * 3 + 1] * b[3 + column] + a[row * 3 + 2] * b[6 + column];
      }
    }
    return out;
  }
  function applyMatrix(m, x, y, z) {
    return { x: m[0] * x + m[1] * y + m[2] * z, y: m[3] * x + m[4] * y + m[5] * z, z: m[6] * x + m[7] * y + m[8] * z };
  }

  // Bilinear point inside a projected quad: u along the bottom edge, v up the face. Used for rivets,
  // perfect stars and crack lines so surface detail follows the perspective.
  function quadPoint(quad, u, v) {
    const bx = lerp(quad[0].x, quad[1].x, u); const by = lerp(quad[0].y, quad[1].y, u);
    const tx = lerp(quad[3].x, quad[2].x, u); const ty = lerp(quad[3].y, quad[2].y, u);
    return { x: lerp(bx, tx, v), y: lerp(by, ty, v) };
  }

  function strokePolygon(ctx, points, close) {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let index = 1; index < points.length; index += 1) ctx.lineTo(points[index].x, points[index].y);
    if (close !== false) ctx.closePath();
    ctx.stroke();
  }
  function fillPolygon(ctx, points) {
    if (points.length < 3) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let index = 1; index < points.length; index += 1) ctx.lineTo(points[index].x, points[index].y);
    ctx.closePath();
    ctx.fill();
  }
  function polygonIsOnScreen(points, width, height, margin = 90) {
    let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
    for (const point of points) {
      if (point.x < minX) minX = point.x;
      if (point.x > maxX) maxX = point.x;
      if (point.y < minY) minY = point.y;
      if (point.y > maxY) maxY = point.y;
    }
    return maxX > -margin && minX < width + margin && maxY > -margin && minY < height + margin;
  }

  /* ------------------------------------------------------------------ 3D palettes */

  // The three house themes, translated into materials, atmosphere and set dressing. Block colours keep
  // coming from the caller's theme map so a mid-run theme switch recolours the tower exactly as before.
  const MATERIALS = Object.freeze({
    paper: Object.freeze({
      name: 'paper', pixel: false,
      slabTop: '#E9DFC7', slabTopShade: '#DCCFB1', slabSide: '#C6B693', slabSideDeep: '#9C8B69',
      slabEdge: '#2A2520', grid: 'rgba(42,37,32,0.13)', lane: 'rgba(47,132,120,0.16)',
      laneEdge: 'rgba(47,132,120,0.55)', wall: '#D9CBA9', wallTop: '#EFE6D2',
      ink: '#2A2520', shadow: 'rgba(42,37,32,0.20)', contact: 'rgba(42,37,32,0.34)',
      haze: '#F4EDDF', far: '#DCD2BB', far2: '#CBC0A6', cloud: '#FFFFFF', accent: '#2F8478',
      glow: '#E3A33B', danger: '#D5472F', particle: '#E3A33B', dust: '#C9BB9C',
      hillNear: '#D5C9AE', hillMid: '#E0D6BE', hillFar: '#EAE2CE', strobe: 'rgba(227,163,59,0.16)'
    }),
    sunset: Object.freeze({
      name: 'sunset', pixel: true,
      slabTop: '#3B1C6B', slabTopShade: '#2F1557', slabSide: '#2A1450', slabSideDeep: '#1B0C36',
      slabEdge: '#170B33', grid: 'rgba(255,89,100,0.30)', lane: 'rgba(46,196,182,0.20)',
      laneEdge: '#2EC4B6', wall: '#4A2287', wallTop: '#6B2FB5',
      ink: '#170B33', shadow: 'rgba(12,4,28,0.55)', contact: 'rgba(12,4,28,0.7)',
      haze: '#2B1155', far: '#43207A', far2: '#33175F', cloud: '#B983FF', accent: '#FFC53D',
      glow: '#FF5964', danger: '#FF5964', particle: '#FFC53D', dust: '#8B5CF6',
      hillNear: '#2A1450', hillMid: '#3A1B63', hillFar: '#4C2480', strobe: 'rgba(255,89,100,0.22)',
      neonGrid: 'rgba(255,89,100,0.42)', sun: '#FFC53D'
    }),
    primetime: Object.freeze({
      name: 'primetime', pixel: false,
      slabTop: '#1A3390', slabTopShade: '#142A78', slabSide: '#0D1F63', slabSideDeep: '#081546',
      slabEdge: '#061238', grid: 'rgba(255,255,255,0.16)', lane: 'rgba(255,200,61,0.16)',
      laneEdge: 'rgba(255,200,61,0.85)', wall: '#20399E', wallTop: '#2C4BC4',
      ink: '#061238', shadow: 'rgba(3,9,32,0.55)', contact: 'rgba(3,9,32,0.7)',
      haze: '#0A1A55', far: '#0E2270', far2: '#0A1A55', cloud: '#C9D6FF', accent: '#FFC83D',
      glow: '#FFC83D', danger: '#FF5A52', particle: '#FFC83D', dust: '#35D0E8',
      hillNear: '#0C1D5C', hillMid: '#0A1A55', hillFar: '#081546', strobe: 'rgba(255,200,61,0.18)'
    })
  });
  function materialsFor(name) { return MATERIALS[name] || MATERIALS.paper; }

  /* ------------------------------------------------------------------ box drawing */

  // Draws one lit box. `box` is { x, y, z (centre, world), w, h, d, rotation (3x3 or null), color, alpha,
  // emissive, perfect, style }. Faces are back-face culled, depth sorted and shaded against the key light.
  function drawBox(ctx, view, box, theme) {
    const rig = view.rig;
    const w = Math.max(0.6, box.w) / 2;
    const h = Math.max(0.6, box.h) / 2;
    const d = Math.max(0.6, box.d) / 2;
    const rotation = box.rotation || null;
    const cx = box.x; const cy = box.y; const cz = box.z;
    const alpha = box.alpha == null ? 1 : clamp(box.alpha, 0, 1);
    if (alpha <= 0.01) return null;

    // Eight projected corners, computed once and shared by every face.
    const corners = [];
    let minDepth = Infinity; let maxDepth = -Infinity;
    let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
    for (let index = 0; index < 8; index += 1) {
      const lx = (index & 1 ? 1 : -1) * w;
      const ly = (index & 2 ? 1 : -1) * h;
      const lz = (index & 4 ? 1 : -1) * d;
      const local = rotation ? applyMatrix(rotation, lx, ly, lz) : { x: lx, y: ly, z: lz };
      const point = view.project(cx + local.x, cy + local.y, cz + local.z);
      corners.push(point);
      if (point.visible) {
        if (point.depth < minDepth) minDepth = point.depth;
        if (point.depth > maxDepth) maxDepth = point.depth;
        if (point.x < minX) minX = point.x;
        if (point.x > maxX) maxX = point.x;
        if (point.y < minY) minY = point.y;
        if (point.y > maxY) maxY = point.y;
      }
    }
    if (!Number.isFinite(minDepth)) return null;
    if (maxX < -80 || minX > WIDTH + 80 || maxY < -80 || minY > HEIGHT + 80) return null;

    // Corner indices per face, matching the winding of FACES.
    const faceCorners = [
      [1, 5, 7, 3], // front  (+z)
      [0, 4, 6, 2], // back   (-z)
      [1, 5, 4, 0], // right  (+x)
      [3, 7, 6, 2], // left   (-x)
      [3, 1, 0, 2], // top    (+y)
      [4, 5, 7, 6]  // bottom (-y)
    ];
    const base = parseColor(box.color || theme.fallback || '#2F8478');
    const emissive = clamp(Number(box.emissive) || 0, 0, 1);
    const visible = [];
    for (let index = 0; index < FACES.length; index += 1) {
      const face = FACES[index];
      const ids = faceCorners[index];
      let nx = face.normal.x; let ny = face.normal.y; let nz = face.normal.z;
      if (rotation) {
        const rotated = applyMatrix(rotation, nx, ny, nz);
        nx = rotated.x; ny = rotated.y; nz = rotated.z;
      }
      // View-space centre of the box, for the facing test.
      const toEyeX = cx - rig.pos.x; const toEyeY = cy - rig.pos.y; const toEyeZ = cz - rig.pos.z;
      if (nx * toEyeX + ny * toEyeY + nz * toEyeZ >= 0) continue; // faces away from the camera
      const quad = ids.map(id => corners[id]);
      if (!quad.every(point => point.visible)) continue;
      let depth = 0;
      for (const point of quad) depth += point.depth;
      depth /= 4;
      const lambert = Math.max(0, nx * LIGHT.x + ny * LIGHT.y + nz * LIGHT.z);
      const sky = ny > 0 ? 0.16 : ny < 0 ? -0.10 : 0.02 * nx;
      let luminance = 0.72 + 0.42 * lambert + sky * 0.55;
      if (face.kind === 'top') luminance += 0.06;
      if (face.kind === 'front') luminance += 0.02;
      luminance = clamp(luminance + emissive * 0.55, 0.16, 1.6);
      visible.push({ face, quad, depth, luminance, kind: face.kind });
    }
    if (!visible.length) return null;
    visible.sort((a, b) => b.depth - a.depth);

    const pixel = Boolean(theme.pixel);
    const stroke = box.stroke == null ? true : Boolean(box.stroke);
    ctx.save();
    if (alpha < 1) ctx.globalAlpha = alpha;
    for (const item of visible) {
      const quad = item.quad;
      if (!polygonIsOnScreen(quad, WIDTH, HEIGHT, 40)) continue;
      let fill = scaleRgb(base, item.luminance);
      if (emissive > 0) fill = mixRgb(fill, parseColor(box.emissiveColor || theme.glow), emissive * 0.6);
      if (box.ghost) fill = mixRgb(fill, parseColor(theme.haze), 0.35);
      ctx.fillStyle = css(fill, alpha < 1 ? 1 : null);
      fillPolygon(ctx, quad);

      const faceHeight = Math.hypot(quad[3].x - quad[0].x, quad[3].y - quad[0].y);
      const faceWidth = Math.hypot(quad[1].x - quad[0].x, quad[1].y - quad[0].y);
      const detail = !pixel && faceHeight > 5 && faceWidth > 5 && item.kind !== 'bottom';

      if (detail) {
        // Top highlight strip and bottom shade strip keep the illustrated look of the classic blocks.
        const stripDepth = clamp(faceHeight * 0.20, 1, 4.5);
        const v = faceHeight > 0 ? stripDepth / faceHeight : 0;
        ctx.fillStyle = css(mixRgb(fill, [255, 255, 255], 0.42), 0.55 * (alpha < 1 ? alpha : 1));
        fillPolygon(ctx, [quad[3], quad[2], quadPoint(quad, 1, 1 - v), quadPoint(quad, 0, 1 - v)]);
        ctx.fillStyle = css(mixRgb(fill, [0, 0, 0], 0.34), 0.5 * (alpha < 1 ? alpha : 1));
        fillPolygon(ctx, [quad[0], quad[1], quadPoint(quad, 1, v * 0.8), quadPoint(quad, 0, v * 0.8)]);
      }
      if (stroke !== false) {
        ctx.strokeStyle = css(parseColor(theme.slabEdge || theme.ink), clamp(0.34 + 0.4 * (1 - item.depth / 1600), 0.2, 0.85));
        ctx.lineWidth = clamp(0.85 * (quad[0].scale || 1), 0.5, 2.1);
        ctx.lineJoin = pixel ? 'miter' : 'round';
        strokePolygon(ctx, quad, true);
      }
      if (detail && faceWidth > 26 && item.kind === 'front' && box.rivets !== false) {
        ctx.fillStyle = css(parseColor(theme.ink), 0.36);
        for (const u of [0.09, 0.91]) {
          const point = quadPoint(quad, u, 0.5);
          const size = clamp(1.5 * (quad[0].scale || 1), 0.9, 2.6);
          ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
        }
      }
      if (box.perfect && item.kind === 'front' && faceWidth > 12 && faceHeight > 8) {
        drawSurfaceStar(ctx, quad, 0.5, 0.5, Math.min(faceWidth, faceHeight) * 0.30, css(parseColor(theme.ink), 0.62));
      }
      if (box.crack && item.kind === 'front') drawSurfaceCrack(ctx, quad, css(parseColor(theme.ink), 0.7));
    }
    ctx.restore();
    return { depth: (minDepth + maxDepth) / 2, minX, maxX, minY, maxY };
  }

  function drawSurfaceStar(ctx, quad, u, v, radius, color) {
    if (!(radius > 1)) return;
    const centre = quadPoint(quad, u, v);
    const right = quadPoint(quad, clamp(u + 0.1, 0, 1), v);
    const up = quadPoint(quad, u, clamp(v + 0.1, 0, 1));
    const axisX = { x: (right.x - centre.x) / 0.1, y: (right.y - centre.y) / 0.1 };
    const axisY = { x: (up.x - centre.x) / 0.1, y: (up.y - centre.y) / 0.1 };
    const lengthX = Math.hypot(axisX.x, axisX.y) || 1;
    const lengthY = Math.hypot(axisY.x, axisY.y) || 1;
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let index = 0; index < 10; index += 1) {
      const size = index % 2 === 0 ? radius : radius * 0.45;
      const angle = -Math.PI / 2 + index * Math.PI / 5;
      const px = centre.x + (axisX.x / lengthX) * Math.cos(angle) * size + (axisY.x / lengthY) * Math.sin(angle) * size;
      const py = centre.y + (axisX.y / lengthX) * Math.cos(angle) * size + (axisY.y / lengthY) * Math.sin(angle) * size;
      if (index === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawSurfaceCrack(ctx, quad, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    const steps = [[0.30, 0.14], [0.38, 0.42], [0.30, 0.58], [0.42, 0.74], [0.36, 0.92]];
    steps.forEach(([u, v], index) => {
      const point = quadPoint(quad, u, v);
      if (index === 0) ctx.moveTo(point.x, point.y); else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  }

  /* ------------------------------------------------------------------ ground decals */

  // A world-space circle on a horizontal plane, projected. Perspective turns it into the right ellipse
  // automatically, which is what makes shadows and shockwave rings read as 3D.
  function horizontalRingPoints(view, cx, cy, cz, radius, segments = 26) {
    const points = [];
    for (let index = 0; index <= segments; index += 1) {
      const angle = (index / segments) * Math.PI * 2;
      const point = view.project(cx + Math.cos(angle) * radius, cy, cz + Math.sin(angle) * radius);
      if (!point.visible) return null;
      points.push(point);
    }
    return points;
  }

  function paintContactShadow(ctx, view, theme, x, z, halfWidth, halfDepth, strength) {
    if (strength <= 0.01) return;
    const points = [];
    const corners = [[-halfWidth, -halfDepth], [halfWidth, -halfDepth], [halfWidth, halfDepth], [-halfWidth, halfDepth]];
    for (const [dx, dz] of corners) {
      const point = view.project(x + dx + SHADOW_DIR.x * 7, 0.4, z + dz + SHADOW_DIR.z * 7);
      if (!point.visible) return;
      points.push(point);
    }
    ctx.save();
    ctx.fillStyle = css(parseColor(theme.contact), strength);
    fillPolygon(ctx, points);
    ctx.restore();
  }

  function paintLongShadow(ctx, view, theme, x, z, halfWidth, height, length, strength) {
    if (strength <= 0.01 || length <= 0) return;
    const ox = SHADOW_DIR.x * length; const oz = SHADOW_DIR.z * length;
    const points = [];
    for (const [dx, dz] of [[-halfWidth, HALF_DEPTH], [halfWidth, HALF_DEPTH], [halfWidth + ox, HALF_DEPTH + oz], [-halfWidth + ox, HALF_DEPTH + oz]]) {
      const point = view.project(x + dx, 0.5 + (dz === HALF_DEPTH + oz ? 0 : 0), z + dz);
      if (!point.visible) return;
      points.push(point);
    }
    ctx.save();
    ctx.fillStyle = css(parseColor(theme.shadow), strength);
    fillPolygon(ctx, points);
    ctx.restore();
  }

  /* ------------------------------------------------------------------ renderer */

  function createRenderer(options = {}) {
    const ctx = options.ctx;
    if (!ctx || typeof ctx.fillRect !== 'function') throw new Error('stack3d needs a 2D drawing context');
    const state = {
      view: createView(),
      rig: createRig(),
      smoothed: { yaw: 0, pitch: DEFAULT_PITCH, distance: FOCAL, targetY: BLOCK_H / 2, punch: 0, kick: 0 },
      particles: [],
      rings: [],
      trails: [],
      flashes: [],
      settle: {},
      landedLevels: -1,
      lastBlockCount: 0,
      lastEffectId: '',
      lastMoverLeft: null,
      clock: 0,
      decor: buildDecor(),
      quality: 1,
      frameCount: 0,
      reducedMotion: false,
      onError: typeof options.onError === 'function' ? options.onError : null
    };

    /* ------------------------------------------------------------- particles */

    function emitBurst(scene, origin, count, config) {
      if (scene.reducedMotion && config.reduced !== true) count = Math.min(count, 6);
      const budget = 220 - state.particles.length;
      count = Math.max(0, Math.min(count, budget));
      for (let index = 0; index < count; index += 1) {
        const spread = config.spread == null ? 1 : config.spread;
        const angle = hash01(state.particles.length + index * 7.13 + state.clock * 3) * Math.PI * 2;
        const power = (0.35 + hash01(index * 3.7 + state.clock * 11) * 0.65) * (config.speed || 90);
        state.particles.push({
          x: origin.x + (hash01(index * 1.7) - 0.5) * (config.jitter || 6),
          y: origin.y + (hash01(index * 2.3) - 0.5) * (config.jitter || 4),
          z: origin.z + (hash01(index * 5.1) - 0.5) * (config.jitter || 6),
          vx: Math.cos(angle) * power * spread,
          vy: (config.up == null ? 0.9 : config.up) * power * (0.6 + hash01(index * 9.2) * 0.8),
          vz: Math.sin(angle) * power * spread * 0.7,
          gravity: config.gravity == null ? 300 : config.gravity,
          drag: config.drag == null ? 1.6 : config.drag,
          life: 0, maxLife: (config.life || 0.7) * (0.7 + hash01(index * 4.4) * 0.6),
          size: (config.size || 2.6) * (0.6 + hash01(index * 6.6) * 0.8),
          color: config.color || scene.theme.particle,
          additive: config.additive !== false,
          spin: config.spin || 0
        });
      }
    }
    function emitRing(scene, origin, config) {
      if (state.rings.length > 14) state.rings.shift();
      state.rings.push({
        x: origin.x, y: origin.y, z: origin.z,
        from: config.from == null ? 6 : config.from,
        to: config.to == null ? 90 : config.to,
        life: 0, maxLife: config.life || 0.55,
        width: config.width || 3,
        color: config.color || scene.theme.accent,
        vertical: Boolean(config.vertical),
        alpha: config.alpha == null ? 0.85 : config.alpha
      });
    }
    function updateParticles(dt) {
      const particles = state.particles;
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.life += dt;
        if (particle.life >= particle.maxLife) { particles.splice(index, 1); continue; }
        const damping = Math.exp(-particle.drag * dt);
        particle.vy -= particle.gravity * dt;
        particle.vx *= damping; particle.vy *= damping; particle.vz *= damping;
        particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.z += particle.vz * dt;
        if (particle.y < 0.5 && particle.vy < 0) { particle.y = 0.5; particle.vy *= -0.32; particle.vx *= 0.7; particle.vz *= 0.7; }
      }
      for (let index = state.rings.length - 1; index >= 0; index -= 1) {
        const ring = state.rings[index];
        ring.life += dt;
        if (ring.life >= ring.maxLife) state.rings.splice(index, 1);
      }
      for (let index = state.flashes.length - 1; index >= 0; index -= 1) {
        state.flashes[index].life += dt;
        if (state.flashes[index].life >= state.flashes[index].maxLife) state.flashes.splice(index, 1);
      }
    }
    function paintParticles(ctx2, view, scene) {
      if (!state.particles.length) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (const particle of state.particles) {
        const point = view.project(particle.x, particle.y, particle.z);
        if (!point.visible) continue;
        if (point.x < -20 || point.x > WIDTH + 20 || point.y < -20 || point.y > HEIGHT + 20) continue;
        const t = particle.life / particle.maxLife;
        const fade = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        const radius = Math.max(0.5, particle.size * point.scale * (1 - t * 0.45));
        ctx2.fillStyle = css(parseColor(particle.color), clamp(fade, 0, 1) * 0.85);
        ctx2.beginPath();
        ctx2.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx2.fill();
      }
      ctx2.restore();
      const solid = state.particles.filter(particle => !particle.additive);
      if (solid.length) {
        ctx2.save();
        for (const particle of solid) {
          const point = view.project(particle.x, particle.y, particle.z);
          if (!point.visible) continue;
          ctx2.fillStyle = css(parseColor(particle.color), 0.8);
          ctx2.fillRect(point.x - 1, point.y - 1, 2, 2);
        }
        ctx2.restore();
      }
    }
    function paintRings(ctx2, view, scene) {
      if (!state.rings.length) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (const ring of state.rings) {
        const t = ring.life / ring.maxLife;
        const eased = 1 - Math.pow(1 - t, 2.4);
        const radius = lerp(ring.from, ring.to, eased);
        const alpha = clamp((1 - t) * ring.alpha, 0, 1);
        if (alpha <= 0.01) continue;
        ctx2.strokeStyle = css(parseColor(ring.color), alpha);
        ctx2.lineWidth = Math.max(0.8, ring.width * (1 - t * 0.6));
        let points;
        if (ring.vertical) {
          points = [];
          for (let index = 0; index <= 24; index += 1) {
            const angle = (index / 24) * Math.PI * 2;
            const point = view.project(ring.x + Math.cos(angle) * radius, ring.y + Math.sin(angle) * radius, ring.z);
            if (!point.visible) { points = null; break; }
            points.push(point);
          }
        } else {
          points = horizontalRingPoints(view, ring.x, ring.y, ring.z, radius, 30);
        }
        if (points) strokePolygon(ctx2, points, true);
      }
      ctx2.restore();
    }

    /* ------------------------------------------------------------- decor data */

    function buildDecor() {
      const clouds = [];
      for (let index = 0; index < 16; index += 1) {
        clouds.push({
          x: (hash01(index * 3.1) - 0.5) * 1500,
          y: 40 + hash01(index * 7.7) * 380,
          z: -180 - hash01(index * 5.3) * 1500,
          size: 26 + hash01(index * 2.9) * 62,
          speed: 4 + hash01(index * 11.3) * 12,
          puffs: 3 + Math.floor(hash01(index * 13.1) * 3)
        });
      }
      const hills = [];
      for (let layer = 0; layer < 3; layer += 1) {
        for (let index = 0; index < 9; index += 1) {
          const seed = layer * 31 + index * 7.3;
          hills.push({
            layer,
            x: (index - 4) * (320 + layer * 190) + (hash01(seed) - 0.5) * 160,
            z: -620 - layer * 520 - hash01(seed * 1.7) * 160,
            width: 300 + hash01(seed * 2.3) * 260 + layer * 120,
            height: 62 + hash01(seed * 3.9) * 84 + layer * 30,
            base: -150 - layer * 40
          });
        }
      }
      const stars = [];
      for (let index = 0; index < 46; index += 1) {
        stars.push({
          x: (hash01(index * 1.37) - 0.5) * 2200,
          y: 260 + hash01(index * 4.91) * 900,
          z: -900 - hash01(index * 8.13) * 1200,
          size: 1 + hash01(index * 2.71) * 2.4,
          twinkle: hash01(index * 6.13) * 6.28
        });
      }
      const bulbs = [];
      for (let index = 0; index < 34; index += 1) {
        bulbs.push({
          x: (hash01(index * 3.31) - 0.5) * 1500,
          y: -60 + hash01(index * 5.17) * 320,
          z: -320 - hash01(index * 9.71) * 1100,
          size: 2 + hash01(index * 2.11) * 5,
          phase: hash01(index * 7.77) * 6.28
        });
      }
      return { clouds, hills, stars, bulbs };
    }

    /* ------------------------------------------------------------- backdrop */

    function paintBillboard(ctx2, view, item, draw) {
      const point = view.project(item.x, item.y, item.z);
      if (!point.visible) return null;
      if (point.x < -400 || point.x > WIDTH + 400 || point.y < -400 || point.y > HEIGHT + 400) return null;
      draw(point, item);
      return point;
    }

    function paintHills(ctx2, view, theme) {
      const tints = [theme.hillNear, theme.hillMid, theme.hillFar];
      for (let layer = 2; layer >= 0; layer -= 1) {
        ctx2.fillStyle = tint(tints[layer], theme.haze, layer * 0.26);
        for (const hill of state.decor.hills) {
          if (hill.layer !== layer) continue;
          const base = view.project(hill.x, hill.base, hill.z);
          if (!base.visible) continue;
          const scale = base.scale;
          const width = hill.width * scale;
          const height = hill.height * scale;
          if (base.x + width / 2 < -60 || base.x - width / 2 > WIDTH + 60) continue;
          ctx2.beginPath();
          ctx2.moveTo(base.x - width / 2, base.y);
          ctx2.lineTo(base.x - width * 0.16, base.y - height * 0.72);
          ctx2.lineTo(base.x + width * 0.04, base.y - height);
          ctx2.lineTo(base.x + width * 0.26, base.y - height * 0.62);
          ctx2.lineTo(base.x + width / 2, base.y);
          ctx2.closePath();
          ctx2.fill();
        }
      }
    }

    function paintClouds(ctx2, view, theme, time, altitude) {
      ctx2.save();
      for (const cloud of state.decor.clouds) {
        const drift = ((cloud.x + time * cloud.speed + 1400) % 2800) - 1400;
        const point = view.project(drift, cloud.y, cloud.z);
        if (!point.visible) continue;
        if (point.x < -300 || point.x > WIDTH + 300) continue;
        // Clouds the tower has climbed above thin out and sink below the platform.
        const above = clamp((altitude - cloud.y) / 260, 0, 1);
        const alpha = clamp(0.30 * (1 - above * 0.75) * clamp(point.scale * 1.6, 0.2, 1), 0, 0.42);
        if (alpha < 0.02) continue;
        const size = cloud.size * point.scale;
        ctx2.fillStyle = css(parseColor(theme.cloud), alpha);
        for (let puff = 0; puff < cloud.puffs; puff += 1) {
          const offset = (puff - (cloud.puffs - 1) / 2) * size * 0.62;
          const radius = size * (0.62 - Math.abs(puff - (cloud.puffs - 1) / 2) * 0.13);
          ctx2.beginPath();
          ctx2.ellipse(point.x + offset, point.y + Math.sin(puff * 1.7) * size * 0.10, radius, radius * 0.55, 0, 0, Math.PI * 2);
          ctx2.fill();
        }
      }
      ctx2.restore();
    }

    function paintNeonFloor(ctx2, view, theme, time) {
      // Synthwave grid: an enormous plane far below the platform, converging on the horizon.
      const planeY = -260;
      ctx2.save();
      ctx2.strokeStyle = theme.neonGrid || 'rgba(255,89,100,0.35)';
      ctx2.lineWidth = 1;
      const spacing = 90;
      for (let index = -14; index <= 14; index += 1) {
        const x = index * spacing;
        const near = view.project(x, planeY, -120);
        const far = view.project(x * 5.5, planeY, -4200);
        if (!near.visible || !far.visible) continue;
        ctx2.globalAlpha = clamp(1 - Math.abs(index) / 16, 0.15, 0.85);
        ctx2.beginPath(); ctx2.moveTo(near.x, near.y); ctx2.lineTo(far.x, far.y); ctx2.stroke();
      }
      for (let index = 1; index <= 26; index += 1) {
        const z = -120 - Math.pow(index, 1.75) * 12;
        const left = view.project(-4200, planeY, z);
        const right = view.project(4200, planeY, z);
        if (!left.visible || !right.visible) continue;
        ctx2.globalAlpha = clamp(0.75 - index / 34, 0.05, 0.7);
        ctx2.beginPath(); ctx2.moveTo(left.x, left.y); ctx2.lineTo(right.x, right.y); ctx2.stroke();
      }
      ctx2.restore();
    }

    function paintStudio(ctx2, view, theme, time) {
      // A broadcast set: cyclorama wall, truss, and two sweeping light cones.
      const wall = [];
      for (const [x, y] of [[-1500, -300], [1500, -300], [1500, 1200], [-1500, 1200]]) {
        const point = view.project(x, y, -900);
        if (!point.visible) { wall.length = 0; break; }
        wall.push(point);
      }
      if (wall.length === 4) {
        ctx2.save();
        // The gradient runs down the wall's own vertical axis (edge midpoints, not corners) so that a
        // point's screen x never leaks into its darkness: the top of the frame stays pure themed sky.
        const topMid = { x: (wall[3].x + wall[2].x) / 2, y: (wall[3].y + wall[2].y) / 2 };
        const bottomMid = { x: (wall[0].x + wall[1].x) / 2, y: (wall[0].y + wall[1].y) / 2 };
        const gradient = ctx2.createLinearGradient(topMid.x, topMid.y, bottomMid.x, bottomMid.y);
        gradient.addColorStop(0, 'rgba(6,18,56,0)');
        gradient.addColorStop(0.55, 'rgba(6,18,56,0)');
        gradient.addColorStop(0.8, 'rgba(10,26,85,0.45)');
        gradient.addColorStop(1, 'rgba(3,9,32,0.85)');
        ctx2.fillStyle = gradient;
        fillPolygon(ctx2, wall);
        ctx2.restore();
      }
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (let index = 0; index < 2; index += 1) {
        const side = index === 0 ? -1 : 1;
        const swing = Math.sin(time * 0.32 + index * 2.1) * 190;
        const origin = view.project(side * 300 + swing * 0.2, 620, -160);
        const leftFoot = view.project(side * 120 + swing, -180, 120);
        const rightFoot = view.project(side * 520 + swing, -180, 120);
        if (!origin.visible || !leftFoot.visible || !rightFoot.visible) continue;
        const gradient = ctx2.createLinearGradient(origin.x, origin.y, leftFoot.x, leftFoot.y);
        gradient.addColorStop(0, 'rgba(255,232,160,0.24)');
        gradient.addColorStop(1, 'rgba(255,200,61,0)');
        ctx2.fillStyle = gradient;
        fillPolygon(ctx2, [origin, leftFoot, rightFoot]);
      }
      ctx2.restore();
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (const bulb of state.decor.bulbs) {
        const point = view.project(bulb.x, bulb.y, bulb.z);
        if (!point.visible) continue;
        const pulse = 0.45 + 0.55 * Math.sin(time * 1.4 + bulb.phase);
        const radius = Math.max(0.6, bulb.size * point.scale);
        ctx2.fillStyle = css(parseColor('#FFE9A8'), 0.10 + 0.22 * pulse);
        ctx2.beginPath(); ctx2.arc(point.x, point.y, radius * 2.4, 0, Math.PI * 2); ctx2.fill();
        ctx2.fillStyle = css(parseColor('#FFF7DC'), 0.35 + 0.4 * pulse);
        ctx2.beginPath(); ctx2.arc(point.x, point.y, radius, 0, Math.PI * 2); ctx2.fill();
      }
      ctx2.restore();
    }

    function paintStars(ctx2, view, theme, time, weight) {
      if (weight <= 0.02) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (const star of state.decor.stars) {
        const point = view.project(star.x, star.y, star.z);
        if (!point.visible) continue;
        const twinkle = 0.55 + 0.45 * Math.sin(time * 1.7 + star.twinkle);
        ctx2.fillStyle = css(parseColor('#FFF6E2'), clamp(weight * twinkle * 0.8, 0, 0.9));
        const radius = Math.max(0.6, star.size * point.scale * 1.6);
        ctx2.fillRect(point.x - radius / 2, point.y - radius / 2, radius, radius);
      }
      ctx2.restore();
    }

    function paintBackdrop(ctx2, view, scene) {
      const theme = scene.theme;
      const altitude = scene.altitude || 0;
      const time = scene.time || 0;
      // Climbing past the clouds thins the air: stars fade in, haze cools.
      const space = clamp((altitude - 320) / 420, 0, 1);
      if (theme.name === 'sunset') {
        paintNeonFloor(ctx2, view, theme, time);
        paintHills(ctx2, view, theme);
        paintStars(ctx2, view, theme, time, space * 0.9);
        paintClouds(ctx2, view, theme, time, altitude);
      } else if (theme.name === 'primetime') {
        paintStudio(ctx2, view, theme, time);
        paintStars(ctx2, view, theme, time, space * 0.6);
        paintClouds(ctx2, view, theme, time * 0.5, altitude);
      } else {
        paintHills(ctx2, view, theme);
        paintClouds(ctx2, view, theme, time, altitude);
        paintStars(ctx2, view, theme, time, space);
      }
    }

    /* ------------------------------------------------------------- platform */

    function paintSlab(ctx2, view, scene) {
      const theme = scene.theme;
      const corners3 = [
        [SLAB.minX, SLAB.top, SLAB.maxZ], [SLAB.maxX, SLAB.top, SLAB.maxZ],
        [SLAB.maxX, SLAB.top, SLAB.minZ], [SLAB.minX, SLAB.top, SLAB.minZ]
      ];
      const top = corners3.map(([x, y, z]) => view.project(x, y, z));
      if (!top.every(point => point.visible)) return;

      // Soft shadow under the floating island, then the slab body.
      ctx2.save();
      const under = view.project(0, SLAB.bottom - 26, 0);
      if (under.visible) {
        const radius = 250 * under.scale;
        const gradient = ctx2.createRadialGradient(under.x, under.y, radius * 0.1, under.x, under.y, radius);
        gradient.addColorStop(0, css(parseColor(theme.shadow), 0.35));
        gradient.addColorStop(1, css(parseColor(theme.shadow), 0));
        ctx2.fillStyle = gradient;
        ctx2.beginPath();
        ctx2.ellipse(under.x, under.y, radius, radius * 0.32, 0, 0, Math.PI * 2);
        ctx2.fill();
      }
      ctx2.restore();

      drawBox(ctx2, view, {
        x: 0, y: (SLAB.top + SLAB.bottom) / 2, z: 0,
        w: SLAB.maxX - SLAB.minX, h: SLAB.top - SLAB.bottom, d: SLAB.maxZ - SLAB.minZ,
        color: theme.slabSide, stroke: false, rivets: false
      }, theme);

      // Strata bands on the visible sides sell the "cut of earth" look.
      ctx2.save();
      ctx2.globalAlpha = 0.5;
      for (let index = 1; index <= 3; index += 1) {
        const y = SLAB.top - (SLAB.top - SLAB.bottom) * (index / 4);
        for (const z of [SLAB.maxZ, SLAB.minZ]) {
          const left = view.project(SLAB.minX, y, z);
          const right = view.project(SLAB.maxX, y, z);
          if (!left.visible || !right.visible) continue;
          ctx2.strokeStyle = css(parseColor(theme.slabSideDeep), 0.6);
          ctx2.lineWidth = Math.max(1, 2.4 * left.scale);
          ctx2.beginPath(); ctx2.moveTo(left.x, left.y); ctx2.lineTo(right.x, right.y); ctx2.stroke();
        }
        for (const x of [SLAB.minX, SLAB.maxX]) {
          const near = view.project(x, y, SLAB.maxZ);
          const far = view.project(x, y, SLAB.minZ);
          if (!near.visible || !far.visible) continue;
          ctx2.strokeStyle = css(parseColor(theme.slabSideDeep), 0.5);
          ctx2.lineWidth = Math.max(1, 2.2 * near.scale);
          ctx2.beginPath(); ctx2.moveTo(near.x, near.y); ctx2.lineTo(far.x, far.y); ctx2.stroke();
        }
      }
      ctx2.restore();

      // Walking surface.
      ctx2.save();
      const surfaceGradient = ctx2.createLinearGradient(top[2].x, top[2].y, top[0].x, top[0].y);
      surfaceGradient.addColorStop(0, theme.slabTopShade);
      surfaceGradient.addColorStop(1, theme.slabTop);
      ctx2.fillStyle = surfaceGradient;
      fillPolygon(ctx2, top);
      ctx2.restore();

      // Perspective grid, then the stacking lane and its walls.
      ctx2.save();
      ctx2.lineWidth = 1;
      ctx2.strokeStyle = theme.grid;
      ctx2.globalAlpha = 1;
      for (let gx = SLAB.minX; gx <= SLAB.maxX + 1; gx += 26) {
        const near = view.project(gx, SLAB.top + 0.2, SLAB.maxZ);
        const far = view.project(gx, SLAB.top + 0.2, SLAB.minZ);
        if (!near.visible || !far.visible) continue;
        ctx2.globalAlpha = clamp(0.85 - Math.abs(gx) / 320, 0.15, 0.85);
        ctx2.beginPath(); ctx2.moveTo(near.x, near.y); ctx2.lineTo(far.x, far.y); ctx2.stroke();
      }
      for (let gz = SLAB.minZ; gz <= SLAB.maxZ + 1; gz += 26) {
        const left = view.project(SLAB.minX, SLAB.top + 0.2, gz);
        const right = view.project(SLAB.maxX, SLAB.top + 0.2, gz);
        if (!left.visible || !right.visible) continue;
        ctx2.globalAlpha = clamp(0.9 - Math.abs(gz) / 150, 0.12, 0.9);
        ctx2.beginPath(); ctx2.moveTo(left.x, left.y); ctx2.lineTo(right.x, right.y); ctx2.stroke();
      }
      ctx2.restore();

      // The lane: the exact 360px playfield, marked so the bounce walls are readable in perspective.
      ctx2.save();
      const lane = [
        view.project(-LANE_HALF, SLAB.top + 0.4, SLAB.maxZ),
        view.project(LANE_HALF, SLAB.top + 0.4, SLAB.maxZ),
        view.project(LANE_HALF, SLAB.top + 0.4, SLAB.minZ),
        view.project(-LANE_HALF, SLAB.top + 0.4, SLAB.minZ)
      ];
      if (lane.every(point => point.visible)) {
        ctx2.fillStyle = css(parseColor(theme.laneEdge), 0.07);
        fillPolygon(ctx2, lane);
        ctx2.strokeStyle = theme.laneEdge;
        ctx2.lineWidth = 1.4;
        ctx2.globalAlpha = 0.5;
        strokePolygon(ctx2, lane, true);
      }
      ctx2.restore();

      // Baseline: the bright edge the tower grows from.
      ctx2.save();
      const edgeLeft = view.project(SLAB.minX, SLAB.top + 0.6, SLAB.maxZ);
      const edgeRight = view.project(SLAB.maxX, SLAB.top + 0.6, SLAB.maxZ);
      if (edgeLeft.visible && edgeRight.visible) {
        ctx2.strokeStyle = css(parseColor(theme.accent), 0.75);
        ctx2.lineWidth = Math.max(1.4, 2.4 * edgeLeft.scale);
        ctx2.beginPath(); ctx2.moveTo(edgeLeft.x, edgeLeft.y); ctx2.lineTo(edgeRight.x, edgeRight.y); ctx2.stroke();
      }
      ctx2.restore();
    }

    /* ------------------------------------------------------------- effects art */

    function paintPortalGates(ctx2, view, scene) {
      const theme = scene.theme;
      const elapsed = scene.effectElapsed || 0;
      const top = Math.max(60, (scene.topWorldY || 60) + 40);
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (const side of [-1, 1]) {
        const x = side * LANE_HALF;
        const a = view.project(x, 0, SLAB.maxZ);
        const b = view.project(x, top, SLAB.maxZ);
        const c = view.project(x, top, SLAB.minZ);
        const d = view.project(x, 0, SLAB.minZ);
        if (!a.visible || !b.visible || !c.visible || !d.visible) continue;
        const gradient = ctx2.createLinearGradient(a.x, a.y, c.x, c.y);
        gradient.addColorStop(0, css(parseColor(theme.accent), 0.55));
        gradient.addColorStop(0.5, css(parseColor(theme.glow), 0.24));
        gradient.addColorStop(1, css(parseColor(theme.accent), 0.55));
        ctx2.fillStyle = gradient;
        fillPolygon(ctx2, [a, b, c, d]);
        // Swirling rings inside the gate.
        for (let index = 0; index < 5; index += 1) {
          const t = ((elapsed * 0.55 + index / 5) % 1);
          const z = lerp(SLAB.maxZ, SLAB.minZ, t);
          const radius = 12 + Math.sin(t * Math.PI) * 16;
          const centreY = top * 0.5;
          const points = [];
          let ok = true;
          for (let step = 0; step <= 16; step += 1) {
            const angle = (step / 16) * Math.PI * 2;
            const point = view.project(x, centreY + Math.sin(angle) * radius, z + Math.cos(angle) * radius * 0.35);
            if (!point.visible) { ok = false; break; }
            points.push(point);
          }
          if (!ok) continue;
          ctx2.strokeStyle = css(parseColor(index % 2 ? theme.glow : theme.accent), 0.55 * Math.sin(t * Math.PI));
          ctx2.lineWidth = 1.6;
          strokePolygon(ctx2, points, true);
        }
        ctx2.strokeStyle = css(parseColor(theme.accent), 0.95);
        ctx2.lineWidth = 2.4;
        ctx2.beginPath(); ctx2.moveTo(a.x, a.y); ctx2.lineTo(b.x, b.y); ctx2.stroke();
        ctx2.beginPath(); ctx2.moveTo(d.x, d.y); ctx2.lineTo(c.x, c.y); ctx2.stroke();
        // Energy bars scrolling up the gate.
        for (let bar = 0; bar < 6; bar += 1) {
          const t = ((elapsed * 0.35 + bar / 6) % 1);
          const from = view.project(x, t * top, SLAB.maxZ);
          const to = view.project(x, t * top, SLAB.minZ);
          if (!from.visible || !to.visible) continue;
          ctx2.strokeStyle = css(parseColor(theme.glow), 0.5 * Math.sin(t * Math.PI));
          ctx2.lineWidth = 3 * Math.sin(t * Math.PI) + 0.5;
          ctx2.beginPath(); ctx2.moveTo(from.x, from.y); ctx2.lineTo(to.x, to.y); ctx2.stroke();
        }
      }
      ctx2.restore();
    }

    function paintCaliperRails(ctx2, view, scene) {
      const theme = scene.theme;
      const bounds = scene.caliperBounds;
      if (!bounds) return;
      const top = Math.max(70, (scene.topWorldY || 70) + 46);
      ctx2.save();
      for (const edge of [bounds.minLeft, bounds.maxLeft]) {
        const x = edge - CENTRE_X;
        const a = view.project(x, 0, SLAB.maxZ * 0.7);
        const b = view.project(x, top, SLAB.maxZ * 0.7);
        const c = view.project(x, top, SLAB.minZ * 0.7);
        const d = view.project(x, 0, SLAB.minZ * 0.7);
        if (!a.visible || !b.visible || !c.visible || !d.visible) continue;
        ctx2.fillStyle = css(parseColor(theme.accent), 0.10);
        fillPolygon(ctx2, [a, b, c, d]);
        ctx2.strokeStyle = css(parseColor(theme.accent), 0.9);
        ctx2.lineWidth = 2;
        ctx2.beginPath(); ctx2.moveTo(a.x, a.y); ctx2.lineTo(b.x, b.y); ctx2.stroke();
        // Measurement teeth along the rail.
        ctx2.lineWidth = 1.2;
        ctx2.strokeStyle = css(parseColor(theme.accent), 0.55);
        for (let y = 8; y < top; y += 18) {
          const from = view.project(x, y, SLAB.maxZ * 0.7);
          const to = view.project(x, y, SLAB.maxZ * 0.7 - 12);
          if (!from.visible || !to.visible) continue;
          ctx2.beginPath(); ctx2.moveTo(from.x, from.y); ctx2.lineTo(to.x, to.y); ctx2.stroke();
        }
      }
      ctx2.restore();
    }

    function paintRollercoasterRail(ctx2, view, scene) {
      const theme = scene.theme;
      const rail = scene.rollerRail;
      if (!rail || rail.length < 2) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      ctx2.strokeStyle = css(parseColor(theme.glow), 0.55);
      ctx2.lineWidth = 2.2;
      const points = [];
      for (const sample of rail) {
        const point = view.project(sample.x, sample.y, sample.z);
        if (!point.visible) continue;
        points.push(point);
      }
      if (points.length > 1) strokePolygon(ctx2, points, false);
      ctx2.strokeStyle = css(parseColor(theme.accent), 0.3);
      ctx2.lineWidth = 6;
      if (points.length > 1) strokePolygon(ctx2, points, false);
      ctx2.restore();
    }

    function paintMagnetField(ctx2, view, scene) {
      const theme = scene.theme;
      const target = scene.magnetTarget;
      if (!target) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      for (let index = 0; index < 4; index += 1) {
        const phase = ((scene.effectElapsed || 0) * 0.9 + index / 4) % 1;
        const radius = 24 + phase * 90;
        const points = horizontalRingPoints(view, target.x, target.y, target.z, radius, 22);
        if (!points) continue;
        ctx2.strokeStyle = css(parseColor(theme.accent), 0.5 * (1 - phase));
        ctx2.lineWidth = 2 * (1 - phase) + 0.6;
        strokePolygon(ctx2, points, true);
      }
      ctx2.restore();
    }

    function paintSpotlightCone(ctx2, view, scene) {
      const theme = scene.theme;
      const anchor = scene.spotlightAnchor;
      if (!anchor) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      const lamp = view.project(anchor.x, anchor.y + 320, anchor.z - 40);
      const left = view.project(anchor.x - 62, anchor.y - 6, anchor.z + 62);
      const right = view.project(anchor.x + 62, anchor.y - 6, anchor.z + 62);
      const back = view.project(anchor.x, anchor.y - 6, anchor.z - 62);
      if (lamp.visible && left.visible && right.visible && back.visible) {
        const gradient = ctx2.createLinearGradient(lamp.x, lamp.y, left.x, left.y);
        gradient.addColorStop(0, css(parseColor(theme.glow), 0.34));
        gradient.addColorStop(1, css(parseColor(theme.glow), 0.02));
        ctx2.fillStyle = gradient;
        fillPolygon(ctx2, [lamp, left, right]);
        fillPolygon(ctx2, [lamp, right, back]);
        fillPolygon(ctx2, [lamp, back, left]);
        ctx2.fillStyle = css(parseColor('#FFF6DC'), 0.5);
        ctx2.beginPath(); ctx2.arc(lamp.x, lamp.y, Math.max(2, 7 * lamp.scale), 0, Math.PI * 2); ctx2.fill();
      }
      ctx2.restore();
    }

    function paintGlueStrands(ctx2, view, scene) {
      const theme = scene.theme;
      const link = scene.glueLink;
      if (!link) return;
      ctx2.save();
      ctx2.strokeStyle = css(parseColor(theme.glow), 0.75);
      ctx2.lineWidth = 1.6;
      for (let index = 0; index < 5; index += 1) {
        const u = (index + 0.5) / 5;
        const sag = 4 + Math.sin(scene.time * 3 + index) * 2.5;
        const from = view.project(lerp(link.fromX, link.toX, u), link.fromY, link.z);
        const mid = view.project(lerp(link.fromX, link.toX, u), lerp(link.fromY, link.toY, 0.5) - sag, link.z);
        const to = view.project(lerp(link.fromX, link.toX, u), link.toY, link.z);
        if (!from.visible || !mid.visible || !to.visible) continue;
        ctx2.beginPath();
        ctx2.moveTo(from.x, from.y);
        ctx2.quadraticCurveTo(mid.x, mid.y, to.x, to.y);
        ctx2.stroke();
      }
      ctx2.restore();
    }

    function paintCrumbleCue(ctx2, view, scene) {
      const theme = scene.theme;
      const top = scene.topBlock;
      if (!top) return;
      ctx2.save();
      ctx2.strokeStyle = css(parseColor(theme.ink), 0.65);
      ctx2.lineWidth = 1.2;
      const y = (top.level + 1) * BLOCK_H;
      for (const side of [-1, 1]) {
        const x = side < 0 ? top.left - CENTRE_X : top.right - CENTRE_X;
        const points = [];
        for (let index = 0; index <= 5; index += 1) {
          const t = index / 5;
          const point = view.project(x + side * (2 + t * 5), y - t * BLOCK_H * 0.85, HALF_DEPTH + 0.6);
          if (!point.visible) continue;
          points.push(point);
        }
        if (points.length > 1) {
          ctx2.setLineDash([3, 3]);
          strokePolygon(ctx2, points, false);
          ctx2.setLineDash([]);
        }
      }
      ctx2.restore();
    }

    function paintCentreTick(ctx2, view, scene) {
      const theme = scene.theme;
      const block = scene.topBlock;
      if (!block) return;
      const y = (block.level + 1) * BLOCK_H;
      const halfWidth = Math.max(2.4, (block.right - block.left) * 0.012);
      // Front face tick (the classic reference) plus a mark on the top face for the 3D read.
      const dark = [];
      const light = [];
      for (const [dx, dy] of [[-halfWidth, 0], [halfWidth, 0]]) {
        const a = view.project(dx, y - 1, HALF_DEPTH + 0.7);
        const b = view.project(dx, y - 8, HALF_DEPTH + 0.7);
        if (!a.visible || !b.visible) continue;
        dark.push([a, b]);
      }
      ctx2.save();
      ctx2.lineWidth = Math.max(1.6, 2.4);
      ctx2.strokeStyle = css(parseColor(theme.ink), 0.85);
      for (const [a, b] of dark) { ctx2.beginPath(); ctx2.moveTo(a.x, a.y); ctx2.lineTo(b.x, b.y); ctx2.stroke(); }
      ctx2.lineWidth = Math.max(0.8, 1.1);
      ctx2.strokeStyle = css(parseColor('#FFFFFF'), 0.9);
      for (const [a, b] of dark) { ctx2.beginPath(); ctx2.moveTo(a.x, a.y - 0.6); ctx2.lineTo(b.x, b.y - 0.6); ctx2.stroke(); }
      // Top-face centre line.
      const t1 = view.project(0, y + 0.6, -halfWidth * 3);
      const t2 = view.project(0, y + 0.6, halfWidth * 3);
      if (t1.visible && t2.visible) {
        ctx2.strokeStyle = css(parseColor(theme.ink), 0.55);
        ctx2.lineWidth = 1.4;
        ctx2.beginPath(); ctx2.moveTo(t1.x, t1.y); ctx2.lineTo(t2.x, t2.y); ctx2.stroke();
      }
      ctx2.restore();
    }

    /* ------------------------------------------------------------- post */

    function paintAtmosphere(ctx2, scene) {
      const theme = scene.theme;
      const altitude = scene.altitude || 0;
      ctx2.save();
      // A floor-weighted vignette grounds the diorama. The top of the frame is left completely to the
      // themed sky so the canvas keeps the exact palette the classic renderer promised.
      const vignette = ctx2.createLinearGradient(0, HEIGHT * 0.34, 0, HEIGHT);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, css(parseColor(theme.name === 'paper' ? '#2A2520' : '#05030F'), theme.name === 'paper' ? 0.15 : 0.38));
      ctx2.fillStyle = vignette;
      ctx2.fillRect(0, 0, WIDTH, HEIGHT);
      // Thin air above the clouds cools the whole frame.
      const thin = clamp((altitude - 300) / 520, 0, 1);
      if (thin > 0.01) {
        ctx2.globalCompositeOperation = 'lighter';
        ctx2.fillStyle = css(parseColor(theme.name === 'sunset' ? '#6D28C4' : '#3F6BD8'), thin * 0.14);
        ctx2.fillRect(0, 0, WIDTH, HEIGHT);
      }
      ctx2.restore();
      // Landing flashes: a one-frame bloom over everything.
      for (const flash of state.flashes) {
        const t = flash.life / flash.maxLife;
        ctx2.save();
        ctx2.globalCompositeOperation = 'lighter';
        ctx2.fillStyle = css(parseColor(flash.color), clamp((1 - t) * flash.strength, 0, 0.5));
        ctx2.fillRect(0, 0, WIDTH, HEIGHT);
        ctx2.restore();
      }
    }

    function paintSpeedLines(ctx2, view, scene) {
      const intensity = clamp((scene.speedRatio || 1) - 1, 0, 1.4);
      if (intensity <= 0.02 || scene.reducedMotion) return;
      const mover = scene.mover;
      if (!mover) return;
      ctx2.save();
      ctx2.globalCompositeOperation = 'lighter';
      ctx2.strokeStyle = css(parseColor(scene.theme.glow), 0.10 + 0.22 * intensity);
      ctx2.lineWidth = 1.4;
      const direction = mover.direction < 0 ? 1 : -1;
      for (let index = 0; index < 7; index += 1) {
        const offset = (index - 3) * 7;
        const length = (26 + hash01(index * 3.3 + scene.time * 6) * 46) * intensity;
        const from = view.project(mover.x + direction * (mover.w / 2 + 6), mover.y + offset, HALF_DEPTH + 4);
        const to = view.project(mover.x + direction * (mover.w / 2 + 6 + length), mover.y + offset, HALF_DEPTH + 4);
        if (!from.visible || !to.visible) continue;
        ctx2.beginPath(); ctx2.moveTo(from.x, from.y); ctx2.lineTo(to.x, to.y); ctx2.stroke();
      }
      ctx2.restore();
    }

    function paintTrails(ctx2, view, scene) {
      if (scene.reducedMotion || state.trails.length < 2) return;
      ctx2.save();
      for (let index = 0; index < state.trails.length; index += 1) {
        const trail = state.trails[index];
        const t = index / state.trails.length;
        drawBox(ctx2, view, {
          x: trail.x, y: trail.y, z: trail.z, w: trail.w, h: trail.h, d: trail.d * 0.7,
          color: trail.color, alpha: 0.05 + 0.20 * t * t, emissive: 0.5 * t, stroke: false, rivets: false,
          emissiveColor: scene.theme.glow
        }, scene.theme);
      }
      ctx2.restore();
    }

    /* ------------------------------------------------------------- frame */

    function render(scene) {
      if (!scene) return false;
      const dt = clamp(Number(scene.dt) || 0, 0, 0.05);
      state.clock += dt;
      state.frameCount += 1;
      state.reducedMotion = Boolean(scene.reducedMotion);
      const theme = scene.theme || MATERIALS.paper;
      const view = createViewTransform(state.rig);

      updateCameraRig(scene, dt);
      updateParticles(dt);
      updateEventDetection(scene, dt);

      // 1. Sky. The caller owns the themed sky so the classic palette contract is untouched.
      if (typeof scene.paintSky === 'function') scene.paintSky(ctx, WIDTH, HEIGHT);
      else { ctx.fillStyle = theme.haze; ctx.fillRect(0, 0, WIDTH, HEIGHT); }

      void view;
      const liveView = createViewTransform(state.rig);

      // 2. Backdrop billboards and set dressing.
      paintBackdrop(ctx, liveView, { theme, time: state.clock, altitude: scene.altitude || 0, reducedMotion: scene.reducedMotion });

      // 3. Screen-space camera effects: zoom sabotage, collapse shake, earthquake tremor.
      ctx.save();
      const shakeX = Number(scene.shakeX) || 0;
      const shakeY = Number(scene.shakeY) || 0;
      const zoom = clamp(Number(scene.zoomScale) || 1, 0.4, 4);
      const punch = state.smoothed.punch;
      if (shakeX || shakeY) ctx.translate(shakeX, shakeY);
      if (Math.abs(zoom - 1) > 0.001 || Math.abs(punch) > 0.001) {
        const focus = scene.zoomFocus || { x: CENTRE_X, y: HEIGHT * 0.45 };
        const scale = zoom * (1 + punch * 0.05);
        ctx.translate(focus.x, focus.y);
        ctx.scale(scale, scale);
        ctx.translate(-focus.x, -focus.y);
      }

      // 4. The world: platform, decals, then every box sorted far to near.
      paintSlab(ctx, liveView, { theme, time: state.clock });
      paintGroundDecals(ctx, liveView, scene, theme);
      const drawables = collectDrawables(liveView, scene, theme);
      drawables.sort((a, b) => b.depth - a.depth);
      for (const item of drawables) item.draw();
      paintTrails(ctx, liveView, scene);
      paintParticles(ctx, liveView, scene);
      paintRings(ctx, liveView, scene);
      ctx.restore();

      // 5. Overlays that live in screen space. The spotlight veil goes last: outside its beam the frame
      // must be one single opaque colour, exactly like the classic renderer.
      paintAtmosphere(ctx, { theme, altitude: scene.altitude || 0 });
      if (scene.spotlightVeil) paintVeil(ctx, scene.spotlightVeil, theme);
      return true;
    }

    function updateCameraRig(scene, dt) {
      const targetView = scene.view || state.view;
      const smoothing = scene.reducedMotion ? 0 : 0.085;
      state.smoothed.yaw = approach(state.smoothed.yaw, Number(targetView.yaw) || 0, smoothing, dt);
      state.smoothed.pitch = approach(state.smoothed.pitch, Number.isFinite(targetView.pitch) ? targetView.pitch : DEFAULT_PITCH, smoothing, dt);
      state.smoothed.distance = approach(state.smoothed.distance, clamp(Number(targetView.distance) || FOCAL, MIN_DISTANCE, MAX_DISTANCE), smoothing, dt);
      // A landing nudges the camera; it always settles back to the fair frontal view.
      state.smoothed.punch = approach(state.smoothed.punch, 0, 0.12, dt);
      const autoYaw = targetView.cinematic && !scene.reducedMotion ? Math.sin(state.clock * 0.22) * 0.34 : 0;
      const cameraOffset = Number(scene.cameraOffset) || 0;
      updateRig(state.rig, {
        yaw: state.smoothed.yaw + autoYaw + state.smoothed.punch * 0.16,
        pitch: state.smoothed.pitch,
        distance: state.smoothed.distance,
        targetX: Number.isFinite(scene.targetX) ? scene.targetX : 0,
        targetY: Number.isFinite(scene.targetY) ? scene.targetY : BLOCK_H / 2 + cameraOffset,
        targetZ: Number.isFinite(scene.targetZ) ? scene.targetZ : 0,
        anchorX: Number.isFinite(scene.anchorX) ? scene.anchorX : ANCHOR_X,
        anchorY: Number.isFinite(scene.anchorY) ? scene.anchorY : ANCHOR_Y
      });
    }

    // Everything that owns depth goes in here with a sort key; painter's algorithm does the rest.
    function collectDrawables(view, scene, theme) {
      const items = [];
      const push = (x, y, z, draw) => {
        const point = view.fast(x, y, z);
        if (!point.visible) return;
        items.push({ depth: point.depth, draw });
      };

      // Walls / kerbs at the bounce limits.
      const portal = scene.effectId === 'portal';
      if (!portal) {
        for (const side of [-1, 1]) {
          const x = side * (LANE_HALF + WALL.halfWidth);
          push(x, WALL.height / 2, 0, () => drawBox(ctx, view, {
            x, y: WALL.height / 2, z: 0, w: WALL.halfWidth * 2, h: WALL.height, d: WALL.z * 2,
            color: theme.wall, rivets: false, alpha: 0.92
          }, theme));
        }
      }

      // Settled tower blocks.
      const blocks = scene.blocks || [];
      const hidden = scene.hiddenLevels;
      for (let index = 0; index < blocks.length; index += 1) {
        const block = blocks[index];
        if (!block) continue;
        if (hidden && hidden.has(block.level)) continue;
        const width = Math.max(1, block.right - block.left);
        const x = (block.left + block.right) / 2 - CENTRE_X;
        const y = block.level * BLOCK_H + BLOCK_H / 2;
        const settle = state.settle[block.level] || 0;
        const lift = settle > 0 ? Math.sin(clamp(settle, 0, 1) * Math.PI) * 5 : 0;
        const squash = settle > 0 ? 1 - Math.sin(clamp(settle, 0, 1) * Math.PI) * 0.14 : 1;
        const tilt = scene.towerTilt ? scene.towerTilt : null;
        push(x, y + lift, 0, () => {
          const placed = {
            x, y: y + lift, z: 0,
            w: width, h: (BLOCK_H - 1) * squash, d: DEPTH,
            color: scene.mapColor ? scene.mapColor(block.color) : block.color,
            perfect: Boolean(block.perfect),
            rotation: tilt ? tilt.rotation : null
          };
          if (tilt) {
            const pivoted = applyMatrix(tilt.rotation, x, y + lift - tilt.pivotY, 0);
            placed.x = pivoted.x + tilt.pivotX;
            placed.y = pivoted.y + tilt.pivotY;
          }
          drawBox(ctx, view, placed, theme);
          if (!tilt) paintTopCastShadow(ctx, view, theme, block, blocks[index + 1]);
          if (scene.teamTags && block.placer && block.placer !== 'Base') {
            paintBlockTag(ctx, view, placed, block, theme, scene);
          }
        });
      }

      // Falling debris and collapse actors, tumbling in three dimensions.
      for (const actor of scene.debris || []) {
        if (actor.collapseActor && !actor.started) continue;
        const age = Number(actor.age) || 0;
        const alpha = Math.max(0.18, 1 - age / 1.35);
        const x = actor.x + actor.width / 2 - CENTRE_X;
        const y = BASELINE - (actor.y + actor.height / 2);
        const z = Math.sin(age * 2.4 + actor.spin) * 14;
        const tilted = tiltPoint(scene, x, y);
        const tx = tilted.x; const ty = tilted.y;
        push(tx, ty, z, () => drawBox(ctx, view, {
          x: tx, y: ty, z, w: Math.max(1, actor.width), h: Math.max(1, actor.height - 1), d: DEPTH * 0.92,
          rotation: multiplyMatrices(tilted.rotation || identityRotation(), rotationFromEuler(actor.angle * 0.55, actor.spin * age * 0.5, actor.angle)),
          color: scene.mapColor ? scene.mapColor(actor.color) : actor.color, alpha
        }, theme));
      }

      // The moving block (and its shell-game decoy).
      const mover = scene.mover;
      if (mover) {
        paintMover(items, view, scene, theme, mover, false);
        if (mover.decoy) paintMover(items, view, scene, theme, mover.decoy, true);
      }

      // Effect furniture that belongs in the depth sort.
      if (portal) push(0, 40, 0, () => paintPortalGates(ctx, view, scene));
      if (scene.effectId === 'calipers') push(0, 30, SLAB.maxZ * 0.7, () => paintCaliperRails(ctx, view, scene));
      if (scene.effectId === 'rollercoaster') push(0, 60, -40, () => paintRollercoasterRail(ctx, view, scene));
      if (scene.effectId === 'magnet') push(scene.magnetTarget ? scene.magnetTarget.x : 0, 40, 0, () => paintMagnetField(ctx, view, scene));
      if (scene.effectId === 'spotlight') push(scene.spotlightAnchor ? scene.spotlightAnchor.x : 0, 120, 0, () => paintSpotlightCone(ctx, view, scene));
      if (scene.effectId === 'superglue') push(0, 30, HALF_DEPTH, () => paintGlueStrands(ctx, view, scene));
      if (scene.effectId === 'crumble') push(0, 30, HALF_DEPTH, () => paintCrumbleCue(ctx, view, scene));
      if (scene.topBlock && !scene.hideCentreTick) push(0, (scene.topBlock.level + 1) * BLOCK_H, HALF_DEPTH, () => paintCentreTick(ctx, view, scene));
      paintSpeedLines(ctx, view, scene);
      return items;
    }

    function tiltPoint(scene, x, y) {
      const tilt = scene.towerTilt;
      if (!tilt) return { x, y, rotation: null };
      const rotated = applyMatrix(tilt.rotation, x - tilt.pivotX, y - tilt.pivotY, 0);
      return { x: rotated.x + tilt.pivotX, y: rotated.y + tilt.pivotY, rotation: tilt.rotation };
    }

    function paintMover(items, view, scene, theme, mover, isDecoy) {
      const width = Math.max(1, mover.width);
      const rawX = mover.left + mover.width / 2 - CENTRE_X;
      const rawY = BASELINE - (mover.y2d + (BLOCK_H - 1) / 2);
      const tilted = tiltPoint(scene, rawX, rawY);
      const x = tilted.x;
      const y = tilted.y;
      const tiltRotation = tilted.rotation;
      const alpha = mover.alpha == null ? 1 : mover.alpha;
      const z = isDecoy ? -HALF_DEPTH * 0.4 : 0;
      const glow = scene.effectId === 'superglue' && !isDecoy ? 0.55 : 0;
      const color = scene.mapColor ? scene.mapColor(mover.color) : mover.color;
      items.push({
        depth: (function () { const point = view.fast(x, y, z); return point.visible ? point.depth : -Infinity; })(),
        draw() {
          if (alpha <= 0.01) return;
          if (glow > 0) {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = css(parseColor(theme.glow), 0.22);
            const point = view.project(x, y, z);
            if (point.visible) {
              ctx.beginPath();
              ctx.ellipse(point.x, point.y, width * point.scale * 0.62, BLOCK_H * point.scale * 1.1, 0, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          }
          drawBox(ctx, view, {
            x, y, z, w: width, h: BLOCK_H - 1, d: DEPTH,
            color, alpha, emissive: glow || (isDecoy ? 0.12 : 0),
            rotation: tiltRotation,
            crack: Boolean(scene.effectId === 'double' && !isDecoy),
            emissiveColor: isDecoy ? theme.danger : theme.glow
          }, theme);
        }
      });
    }

    function paintBlockTag(ctx2, view, box, block, theme, scene) {
      const tag = String(block.placer).slice(0, 12);
      const point = view.project(box.x, box.y + box.h / 2 + 1, HALF_DEPTH + 1);
      if (!point.visible) return;
      ctx2.save();
      ctx2.font = scene.tagFont || '700 9px sans-serif';
      const width = Math.min(78, ctx2.measureText(tag).width + 8);
      const height = 12;
      ctx2.fillStyle = css(parseColor(theme.ink), 0.78);
      ctx2.beginPath();
      if (typeof ctx2.roundRect === 'function') ctx2.roundRect(point.x - width / 2, point.y - height / 2, width, height, 4);
      else ctx2.rect(point.x - width / 2, point.y - height / 2, width, height);
      ctx2.fill();
      ctx2.fillStyle = css(parseColor(theme.name === 'paper' ? '#F4EDDF' : '#FFFFFF'), 0.95);
      ctx2.textAlign = 'center';
      ctx2.textBaseline = 'middle';
      ctx2.fillText(tag, point.x, point.y + 0.5, width - 4);
      ctx2.restore();
    }

    // The block above leaves its shadow on the top face below: a cheap, very readable depth cue.
  function paintTopCastShadow(ctx2, view, theme, below, above) {
    if (!above) return;
    const y = (below.level + 1) * BLOCK_H + 0.35;
    const inset = 9;
    const minX = Math.max(below.left, above.left + SHADOW_DIR.x * inset);
    const maxX = Math.min(below.right, above.right + SHADOW_DIR.x * inset);
    if (maxX - minX < 2) return;
    const zNear = HALF_DEPTH + SHADOW_DIR.z * inset;
    const zFar = -HALF_DEPTH + SHADOW_DIR.z * inset;
    const points = [];
    for (const [px, pz] of [[minX, zNear], [maxX, zNear], [maxX, zFar], [minX, zFar]]) {
      const point = view.project(px - CENTRE_X, y, pz);
      if (!point.visible) return;
      points.push(point);
    }
    ctx2.save();
    ctx2.fillStyle = css(parseColor(theme.contact), 0.42);
    fillPolygon(ctx2, points);
    ctx2.restore();
  }

  function paintGroundDecals(ctx2, view, scene, theme) {
      const blocks = scene.blocks || [];
      ctx2.save();
      // Long shadows from the key light, painted onto the slab before any box.
      for (const block of blocks) {
        if (scene.hiddenLevels && scene.hiddenLevels.has(block.level)) continue;
        const width = Math.max(1, block.right - block.left);
        const x = (block.left + block.right) / 2 - CENTRE_X;
        const height = (block.level + 1) * BLOCK_H;
        paintLongShadow(ctx2, view, theme, x, 0, width / 2, height, clamp(height * 0.5, 16, 210), clamp(0.22 - block.level * 0.004, 0.05, 0.22));
      }
      // Contact shadows tighten the tower to the slab.
      for (const block of blocks.slice(0, 3)) {
        const width = Math.max(1, block.right - block.left);
        const x = (block.left + block.right) / 2 - CENTRE_X;
        paintContactShadow(ctx2, view, theme, x, 0, width / 2 + 2, HALF_DEPTH + 3, 0.20);
      }
      ctx2.restore();
      // Shockwave rings sit on the surface too.
      paintRingDecals(ctx2, view, scene);
    }

    function paintRingDecals(ctx2, view, scene) {
      if (!state.rings.length) return;
      ctx2.save();
      for (const ring of state.rings) {
        if (ring.vertical) continue;
        const t = ring.life / ring.maxLife;
        const eased = 1 - Math.pow(1 - t, 2.6);
        const radius = lerp(ring.from, ring.to, eased);
        const alpha = clamp((1 - t) * ring.alpha * 0.5, 0, 1);
        if (alpha <= 0.01) continue;
        const points = horizontalRingPoints(view, ring.x, ring.y + 0.6, ring.z, radius, 28);
        if (!points) continue;
        ctx2.strokeStyle = css(parseColor(ring.color), alpha);
        ctx2.lineWidth = Math.max(1, ring.width * (1 - t * 0.5));
        strokePolygon(ctx2, points, true);
      }
      ctx2.restore();
    }

    function paintVeil(ctx2, veil, theme) {
      // Spotlight: an opaque veil with a round hole, exactly as the classic renderer does it, so the
      // sabotage keeps its guaranteed "nothing leaks" contract in 3D.
      ctx2.save();
      ctx2.fillStyle = theme.name === 'paper' ? '#2A2520' : theme.name === 'sunset' ? '#170B33' : '#061238';
      ctx2.beginPath();
      ctx2.rect(veil.x, veil.y, veil.width, veil.height);
      ctx2.moveTo(veil.beamX + veil.radius, veil.beamY);
      ctx2.arc(veil.beamX, veil.beamY, veil.radius, 0, Math.PI * 2);
      ctx2.closePath();
      ctx2.fill('evenodd');
      ctx2.strokeStyle = css(parseColor(theme.glow), 0.95);
      ctx2.lineWidth = 1.2;
      ctx2.beginPath();
      ctx2.arc(veil.beamX, veil.beamY, veil.radius, 0, Math.PI * 2);
      ctx2.stroke();
      ctx2.restore();
    }

    /* ------------------------------------------------------------- events */

    function updateEventDetection(scene, dt) {
      const blocks = scene.blocks || [];
      const count = blocks.length;
      const previousCount = state.lastBlockCount;
      state.lastBlockCount = count;
      if (previousCount && count > previousCount) {
        const block = blocks[count - 1];
        const width = Math.max(1, block.right - block.left);
        const origin = { x: (block.left + block.right) / 2 - CENTRE_X, y: block.level * BLOCK_H + 2, z: HALF_DEPTH };
        if (!scene.reducedMotion) state.settle[block.level] = 1;
        if (block.perfect) {
          emitBurst(scene, origin, 26, { color: scene.theme.glow, speed: 150, life: 0.75, size: 3.1, up: 1.15, spread: 1.2 });
          emitBurst(scene, origin, 12, { color: '#FFFFFF', speed: 90, life: 0.5, size: 2.2, up: 0.9 });
          emitRing(scene, { x: origin.x, y: 1, z: 0 }, { from: 8, to: 132, life: 0.62, color: scene.theme.glow, width: 4 });
          emitRing(scene, { x: origin.x, y: block.level * BLOCK_H + BLOCK_H / 2, z: HALF_DEPTH + 2 }, { from: 4, to: 58, life: 0.45, color: '#FFFFFF', width: 2, vertical: true, alpha: 0.6 });
          state.flashes.push({ life: 0, maxLife: 0.22, color: scene.theme.glow, strength: 0.20 });
          state.smoothed.punch = scene.reducedMotion ? 0 : 1;
        } else {
          emitBurst(scene, { x: origin.x - width / 2, y: block.level * BLOCK_H + 2, z: HALF_DEPTH }, 8, { color: scene.theme.dust, speed: 62, life: 0.55, size: 2.4, up: 0.7, gravity: 210 });
          emitBurst(scene, { x: origin.x + width / 2, y: block.level * BLOCK_H + 2, z: HALF_DEPTH }, 8, { color: scene.theme.dust, speed: 62, life: 0.55, size: 2.4, up: 0.7, gravity: 210 });
          emitRing(scene, { x: origin.x, y: 1, z: 0 }, { from: 6, to: 62, life: 0.4, color: scene.theme.accent, width: 2.4, alpha: 0.5 });
          state.smoothed.punch = scene.reducedMotion ? 0 : 0.45;
        }
      } else if (count < previousCount) {
        state.trails.length = 0;
      }

      // Effect changes get a coloured burst so a sabotage landing is felt, not just read.
      const effectId = scene.effectId || '';
      if (effectId !== state.lastEffectId) {
        if (effectId) {
          const top = scene.topBlock;
          const origin = { x: 0, y: top ? (top.level + 1) * BLOCK_H + 26 : 60, z: 0 };
          emitBurst(scene, origin, 20, { color: effectColor(scene.theme, effectId), speed: 120, life: 0.7, size: 2.8, up: 0.5, spread: 1.4 });
          emitRing(scene, { x: 0, y: origin.y, z: 0 }, { from: 5, to: 68, life: 0.45, color: effectColor(scene.theme, effectId), width: 2.6, vertical: true, alpha: 0.45 });
        }
        state.lastEffectId = effectId;
      }

      // Portal wraps: the mover teleports across the lane, so spark both gates.
      const mover = scene.mover;
      if (mover) {
        const left = Number(mover.left);
        if (state.lastMoverLeft != null && Number.isFinite(left)) {
          const jump = Math.abs(left - state.lastMoverLeft);
          if (jump > WIDTH * 0.55) {
            for (const side of [-1, 1]) {
              emitBurst(scene, { x: side * LANE_HALF, y: BASELINE - mover.y2d, z: 0 }, 14, {
                color: scene.theme.accent, speed: 110, life: 0.5, size: 2.6, up: 0.4, spread: 0.6
              });
            }
          }
        }
        state.lastMoverLeft = Number.isFinite(left) ? left : null;
        // Motion trails on the fast sabotages.
        const trailWanted = !scene.reducedMotion && ['turbo', 'slowmo', 'drunk', 'magnet', 'rollercoaster'].includes(scene.effectId);
        if (trailWanted) {
          state.trails.push({
            x: mover.left + mover.width / 2 - CENTRE_X, y: BASELINE - (mover.y2d + (BLOCK_H - 1) / 2), z: 0,
            w: mover.width, h: BLOCK_H - 1, d: DEPTH, color: scene.mapColor ? scene.mapColor(mover.color) : mover.color
          });
          if (state.trails.length > 9) state.trails.shift();
        } else if (state.trails.length) {
          state.trails.shift();
        }
      } else {
        state.lastMoverLeft = null;
        if (state.trails.length) state.trails.shift();
      }

      // Collapse: dust from the slab while the tower comes down.
      if (scene.phase === 'collapse' && !scene.reducedMotion && state.frameCount % 3 === 0) {
        emitBurst(scene, { x: (hash01(state.frameCount) - 0.5) * 240, y: 2, z: (hash01(state.frameCount * 2.3) - 0.5) * 120 }, 3, {
          color: scene.theme.dust, speed: 40, life: 0.9, size: 4.2, up: 0.5, gravity: 40, drag: 0.9
        });
      }

      // Settle animations decay.
      for (const key of Object.keys(state.settle)) {
        state.settle[key] = Math.max(0, state.settle[key] - dt * 3.4);
        if (state.settle[key] <= 0) delete state.settle[key];
      }
    }

    function effectColor(theme, id) {
      switch (id) {
        case 'turbo': return theme.danger;
        case 'drunk': return theme.glow;
        case 'slowmo': return theme.accent;
        case 'magnet': return theme.accent;
        case 'portal': return theme.accent;
        case 'rollercoaster': return theme.glow;
        case 'earthquake': return theme.danger;
        case 'pisa': return theme.glow;
        case 'spotlight': return theme.glow;
        case 'peekaboo': return theme.cloud;
        case 'zoom': return theme.danger;
        case 'double': return theme.danger;
        case 'accordion': return theme.accent;
        case 'crumble': return theme.dust;
        case 'superglue': return theme.glow;
        case 'calipers': return theme.accent;
        default: return theme.particle;
      }
    }

    /* ------------------------------------------------------------- public surface */

    return {
      render,
      view: state.view,
      materials: MATERIALS,
      constants: Object.freeze({ WIDTH, HEIGHT, BASELINE, BLOCK_H, DEPTH, FOCAL, ANCHOR_X, ANCHOR_Y, DEFAULT_PITCH, MIN_DISTANCE, MAX_DISTANCE, SLAB }),
      orbit(deltaYaw, deltaPitch) {
        state.view.yaw = clamp(state.view.yaw + deltaYaw, -1.15, 1.15);
        state.view.pitch = clamp(state.view.pitch + deltaPitch, -0.16, 0.72);
        return state.view;
      },
      zoomBy(factor) {
        state.view.distance = clamp(state.view.distance * factor, MIN_DISTANCE, MAX_DISTANCE);
        return state.view;
      },
      setView(patch) {
        if (patch && Number.isFinite(patch.yaw)) state.view.yaw = patch.yaw;
        if (patch && Number.isFinite(patch.pitch)) state.view.pitch = patch.pitch;
        if (patch && Number.isFinite(patch.distance)) state.view.distance = patch.distance;
        if (patch && typeof patch.cinematic === 'boolean') state.view.cinematic = patch.cinematic;
        clampView(state.view);
        return state.view;
      },
      getView() { return { ...state.view }; },
      resetView() {
        state.view.yaw = 0; state.view.pitch = DEFAULT_PITCH; state.view.distance = FOCAL;
        state.smoothed.yaw = 0; state.smoothed.pitch = DEFAULT_PITCH; state.smoothed.distance = FOCAL;
        return state.view;
      },
      resetEffects() {
        state.particles.length = 0;
        state.rings.length = 0;
        state.trails.length = 0;
        state.flashes.length = 0;
        state.lastBlockCount = 0;
        state.lastEffectId = '';
        state.lastMoverLeft = null;
        state.smoothed.punch = 0;
      },
      rig: state.rig,
      particleCount() { return state.particles.length; }
    };
  }

  return Object.freeze({
    createRenderer,
    createView,
    clampView,
    createRig,
    updateRig,
    projectPoint,
    rotationFromEuler,
    rotationAboutAxis,
    multiplyMatrices,
    applyMatrix,
    identityRotation,
    drawBox,
    parseColor,
    mixRgb,
    scaleRgb,
    css,
    tint,
    brighten,
    materialsFor,
    horizontalRingPoints,
    hash01,
    clamp,
    lerp,
    approach,
    constants: Object.freeze({
      WIDTH, HEIGHT, BASELINE, BLOCK_H, DEPTH, FOCAL, ANCHOR_X, ANCHOR_Y, DEFAULT_PITCH,
      MIN_DISTANCE, MAX_DISTANCE, SLAB, WALL, LANE_HALF, LIGHT
    })
  });
});
