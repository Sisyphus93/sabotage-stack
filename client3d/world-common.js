// Building blocks shared by the three worlds: sky dome with an altitude "journey", studio environment map, plinth, floor grid, dust motes.
import * as THREE from 'three';
import { fbm1, rng, TAU, hexToRgb01, smoothstep } from './util.js';

const col = hex => new THREE.Color(hex);
const vec3 = hex => { const [r, g, b] = hexToRgb01(hex); return new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace); };

// ---------------------------------------------------------------------------------------------------------------------
// Sky dome. The same shader paints all three skies; uniforms decide whether it is a paper morning, a synthwave sunset or a studio void.
export function createSky(palette, { stars = 0, stripedSun = false, sunSize = 0.035, sunDir = [-0.34, 0.2, -1], sunColor = '#FFE2A8', sunGlow = 0.5 } = {}) {
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      uHorizon: { value: vec3(palette.skyHorizon) }, uMid: { value: vec3(palette.skyMid) }, uZenith: { value: vec3(palette.skyZenith) },
      uJ0: { value: vec3(palette.journey[0]) }, uJ1: { value: vec3(palette.journey[1]) }, uJ2: { value: vec3(palette.journey[2]) }, uJ3: { value: vec3(palette.journey[3]) },
      uAltitude: { value: 0 }, uJourney: { value: 1 }, uTime: { value: 0 }, uStars: { value: stars },
      uSunDir: { value: new THREE.Vector3(...sunDir).normalize() }, uSunColor: { value: vec3(sunColor) }, uSunSize: { value: sunSize }, uSunGlow: { value: sunGlow },
      uStripes: { value: stripedSun ? 1 : 0 }, uDim: { value: 1 }
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() { vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }
    `,
    fragmentShader: /* glsl */`
      varying vec3 vDir;
      uniform vec3 uHorizon, uMid, uZenith, uJ0, uJ1, uJ2, uJ3, uSunDir, uSunColor;
      uniform float uAltitude, uJourney, uTime, uStars, uSunSize, uSunGlow, uStripes, uDim;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      vec3 journey(float a) {
        a = clamp(a, 0.0, 1.0) * 3.0;
        vec3 c = mix(uJ0, uJ1, smoothstep(0.0, 1.0, a));
        c = mix(c, uJ2, smoothstep(1.0, 2.0, a));
        return mix(c, uJ3, smoothstep(2.0, 3.0, a));
      }
      void main() {
        vec3 dir = normalize(vDir);
        float h = dir.y;
        vec3 base = mix(uHorizon, uMid, smoothstep(-0.08, 0.22, h));
        base = mix(base, uZenith, smoothstep(0.18, 0.9, h));
        vec3 j = journey(uAltitude);
        base = mix(base, j, uJourney * (0.18 + 0.82 * smoothstep(-0.1, 0.55, h)) * smoothstep(0.02, 0.35, uAltitude));
        // below the horizon: fade into the floor haze colour so the world has no visible seam
        base = mix(base, uHorizon * 0.92, smoothstep(0.0, -0.25, h));
        // sun disc + halo
        float sd = max(dot(dir, normalize(uSunDir)), 0.0);
        float sunMask = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.72, sd);
        if (uStripes > 0.5) {
          float sy = dir.y - normalize(uSunDir).y;
          float cut = step(0.5, fract(sy * 120.0 + 0.2)) ;
          float band = smoothstep(0.02, -0.12, sy);
          sunMask *= mix(1.0, cut, band);
          vec3 sunCol = mix(vec3(1.0, 0.82, 0.25), vec3(1.0, 0.18, 0.55), smoothstep(0.08, -0.12, sy));
          base += sunCol * sunMask * 1.05;
        } else {
          base = mix(base, uSunColor * 1.15, sunMask * (1.0 - uAltitude * 0.8));
        }
        float halo = pow(sd, 6.0) * 0.28 + pow(sd, 48.0) * 0.55;
        base += uSunColor * halo * uSunGlow * (1.0 - uAltitude * 0.7);
        // stars appear with altitude and with a high sky
        float starFade = uStars * smoothstep(0.2, 0.8, uAltitude) * smoothstep(0.0, 0.35, h);
        if (starFade > 0.0) {
          vec3 g = floor(dir * 190.0);
          float r = hash(g);
          float on = step(0.9965, r);
          float tw = 0.55 + 0.45 * sin(uTime * (1.2 + r * 3.0) + r * 60.0);
          base += vec3(1.0, 0.96, 0.85) * on * tw * starFade * 1.6;
        }
        gl_FragColor = vec4(base * uDim, 1.0);
      }
    `
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(9000, 48, 24), material);
  mesh.frustumCulled = false; mesh.renderOrder = -100;
  return { mesh, material };
}

// ---------------------------------------------------------------------------------------------------------------------
// Studio environment: a gradient dome plus a few soft boxes, baked into a PMREM so glossy blocks get believable reflections.
export function createEnvironment(renderer, palette, { boxes = [] } = {}) {
  const scene = new THREE.Scene();
  const dome = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: { top: { value: vec3(palette.skyZenith) }, mid: { value: vec3(palette.skyMid) }, bottom: { value: vec3(palette.ground) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: 'varying vec3 vP; uniform vec3 top, mid, bottom; void main(){ float h = vP.y; vec3 c = h > 0. ? mix(mid, top, smoothstep(0., .9, h)) : mix(mid, bottom, smoothstep(0., -.7, h)); gl_FragColor = vec4(c, 1.); }'
  }));
  scene.add(dome);
  for (const box of boxes) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(box.w, box.h), new THREE.MeshBasicMaterial({ color: vec3(box.color).multiplyScalar(box.intensity || 4), side: THREE.DoubleSide }));
    m.position.set(...box.pos); m.lookAt(0, 0, 0); scene.add(m);
  }
  const generator = new THREE.PMREMGenerator(renderer);
  const target = generator.fromScene(scene, 0.035);
  generator.dispose();
  dome.geometry.dispose(); dome.material.dispose();
  scene.traverse(o => { if (o.isMesh && o !== dome) { o.geometry.dispose(); o.material.dispose(); } });
  return target.texture;
}

// ---------------------------------------------------------------------------------------------------------------------
// Plinth: a stepped round podium. The top is a printed disc (cutting-mat protractor in Paper, neon polar grid in Sunset, gold sunburst in Prime Time).
export function plinthPrint(theme, palette, size = 1024) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d'); const c = size / 2; const R = size / 2 - 4;
  const polar = (r, a) => [c + Math.cos(a) * r * R, c + Math.sin(a) * r * R];
  if (theme === 'paper') {
    ctx.fillStyle = palette.plinth; ctx.fillRect(0, 0, size, size);
    const grad = ctx.createRadialGradient(c, c, 0, c, c, R); grad.addColorStop(0, 'rgba(255,255,255,.55)'); grad.addColorStop(1, 'rgba(120,90,40,.10)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = palette.teal; ctx.globalAlpha = 0.55;
    for (const r of [0.25, 0.5, 0.75]) { ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(c, c, r * R, 0, TAU); ctx.stroke(); }
    ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(c, c, 0.12 * R, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1; ctx.strokeStyle = palette.ink;
    for (let d = 0; d < 360; d += 5) {
      const a = (d * Math.PI) / 180; const major = d % 45 === 0; const mid = d % 15 === 0;
      const [x1, y1] = polar(0.935, a); const [x2, y2] = polar(major ? 0.86 : mid ? 0.895 : 0.915, a);
      ctx.lineWidth = major ? 4 : mid ? 2.6 : 1.6; ctx.globalAlpha = major ? 0.9 : 0.6;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.strokeStyle = palette.amber; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(c, c, R * 0.97, 0, TAU); ctx.stroke();
    ctx.strokeStyle = palette.ink; ctx.globalAlpha = 0.55; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(c - R * 0.1, c); ctx.lineTo(c + R * 0.1, c); ctx.moveTo(c, c - R * 0.1); ctx.lineTo(c, c + R * 0.1); ctx.stroke();
    ctx.globalAlpha = 0.8; ctx.fillStyle = palette.ink; ctx.font = `700 ${size * 0.034}px Fraunces, serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const [label, a] of [['0', 0], ['90', Math.PI / 2], ['180', Math.PI], ['270', -Math.PI / 2]]) { const [x, y] = polar(0.8, a); ctx.fillText(label, x, y); }
    // a few fibres of ink-bleed so it reads as printed card, not vector art
    const random = rng(11); ctx.globalAlpha = 0.05;
    for (let i = 0; i < 700; i += 1) { ctx.fillStyle = random() > 0.5 ? '#6b5a3a' : '#ffffff'; ctx.fillRect(random() * size, random() * size, 1 + random() * 2, 1 + random() * 2); }
  } else if (theme === 'sunset') {
    ctx.fillStyle = '#10062a'; ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = '#FF4FD8'; ctx.shadowColor = '#FF4FD8'; ctx.shadowBlur = 10; ctx.lineWidth = 3;
    for (let k = 1; k <= 6; k += 1) { ctx.beginPath(); ctx.arc(c, c, (k / 6) * R * 0.96, 0, TAU); ctx.stroke(); }
    ctx.strokeStyle = '#2EC4B6'; ctx.shadowColor = '#2EC4B6';
    for (let k = 0; k < 24; k += 1) { const a = (k / 24) * TAU; ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(...polar(0.96, a)); ctx.stroke(); }
    ctx.shadowBlur = 0; ctx.strokeStyle = palette.amber; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(c, c, R * 0.985, 0, TAU); ctx.stroke();
  } else {
    const grad = ctx.createRadialGradient(c, c, 0, c, c, R); grad.addColorStop(0, '#2447C9'); grad.addColorStop(0.7, '#0B1B5C'); grad.addColorStop(1, '#050C26');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = palette.amber; ctx.globalAlpha = 0.9;
    for (let k = 0; k < 36; k += 1) {
      const a = (k / 36) * TAU; ctx.lineWidth = k % 3 === 0 ? 5 : 2; ctx.globalAlpha = k % 3 === 0 ? 0.85 : 0.35;
      ctx.beginPath(); ctx.moveTo(...polar(0.2, a)); ctx.lineTo(...polar(0.94, a)); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.lineWidth = 6; for (const r of [0.2, 0.58, 0.97]) { ctx.beginPath(); ctx.arc(c, c, r * R, 0, TAU); ctx.stroke(); }
    ctx.fillStyle = palette.amber; ctx.beginPath(); ctx.arc(c, c, 0.05 * R, 0, TAU); ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 8; texture.generateMipmaps = true; texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

export function createPlinth(theme, palette, radius = 250) {
  const group = new THREE.Group();
  const profile = [
    [0, -70], [radius + 64, -70], [radius + 64, -42], [radius + 58, -36], [radius + 22, -30], [radius + 18, -20], [radius + 10, -11], [radius + 4, -5], [radius, 0], [0, 0]
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const sideMaterial = theme === 'primetime'
    ? new THREE.MeshPhysicalMaterial({ color: palette.plinth, roughness: 0.18, metalness: 0.5, clearcoat: 1, envMapIntensity: 1.3 })
    : theme === 'sunset'
      ? new THREE.MeshStandardMaterial({ color: palette.plinth, roughness: 0.6, metalness: 0.1, emissive: '#3a0f66', emissiveIntensity: 0.5 })
      : new THREE.MeshStandardMaterial({ color: '#EADFC8', roughness: 0.82, metalness: 0 });
  const body = new THREE.Mesh(new THREE.LatheGeometry(profile, 128), sideMaterial);
  body.receiveShadow = true; body.castShadow = false;
  group.add(body);
  const topTexture = plinthPrint(theme, palette);
  const topMaterial = theme === 'primetime'
    ? new THREE.MeshPhysicalMaterial({ map: topTexture, roughness: 0.2, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2 })
    : theme === 'sunset'
      ? new THREE.MeshStandardMaterial({ map: topTexture, emissiveMap: topTexture, emissive: '#ffffff', emissiveIntensity: 0.55, roughness: 0.7 })
      : new THREE.MeshStandardMaterial({ map: topTexture, roughness: 0.9, metalness: 0 });
  const top = new THREE.Mesh(new THREE.CircleGeometry(radius - 2, 128).rotateX(-Math.PI / 2), topMaterial);
  top.position.y = 0.2; top.receiveShadow = true;
  group.add(top);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(radius + 1, 2.6, 10, 160).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: palette.plinthRim, emissive: palette.plinthRim, emissiveIntensity: theme === 'paper' ? 0.0 : 1.2, roughness: 0.35, metalness: theme === 'paper' ? 0 : 0.8 }));
  rim.position.y = 0.4;
  group.add(rim);
  group.userData.dispose = () => { body.geometry.dispose(); sideMaterial.dispose(); top.geometry.dispose(); topMaterial.dispose(); topTexture.dispose(); rim.geometry.dispose(); rim.material.dispose(); };
  return group;
}

// ---------------------------------------------------------------------------------------------------------------------
// Ground: a lit floor plus an anti-aliased grid overlay that fades into the horizon haze.
export function createGround(theme, palette, { y = -64, radius = 8800 } = {}) {
  const group = new THREE.Group();
  const floorMaterial = theme === 'primetime'
    ? new THREE.MeshPhysicalMaterial({ color: palette.floor, roughness: 0.22, metalness: 0.4, clearcoat: 0.6, envMapIntensity: 0.9 })
    : theme === 'sunset'
      ? new THREE.MeshStandardMaterial({ color: palette.floor, roughness: 0.9, metalness: 0 })
      : new THREE.MeshStandardMaterial({ color: palette.floor, roughness: 0.95, metalness: 0 });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(radius, 96).rotateX(-Math.PI / 2), floorMaterial);
  floor.position.y = y; floor.receiveShadow = true;
  group.add(floor);
  const grid = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    uniforms: {
      uColor: { value: vec3(palette.floorLine) }, uTime: { value: 0 }, uCell: { value: theme === 'sunset' ? 90 : 48 },
      uFade: { value: theme === 'sunset' ? 4200 : 2600 }, uStrength: { value: theme === 'paper' ? 0.5 : theme === 'sunset' ? 1.5 : 0.35 },
      uScroll: { value: theme === 'sunset' ? 1 : 0 }, uMajor: { value: theme === 'paper' ? 5 : 4 }
    },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      varying vec3 vW; uniform vec3 uColor; uniform float uTime, uCell, uFade, uStrength, uScroll, uMajor;
      float line(vec2 p, float cell) {
        vec2 g = p / cell; vec2 d = abs(fract(g - 0.5) - 0.5) / fwidth(g);
        return 1.0 - min(min(d.x, d.y), 1.0);
      }
      void main() {
        vec2 p = vW.xz; p.y += uScroll * uTime * 70.0;
        float minor = line(p, uCell);
        float major = line(p, uCell * uMajor);
        float dist = length(vW.xz);
        float fade = smoothstep(uFade, 0.0, dist) * smoothstep(120.0, 420.0, dist);
        float a = (minor * 0.45 + major * 0.9) * fade * uStrength;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `
  });
  grid.extensions = { derivatives: true };
  const overlay = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.55, 64).rotateX(-Math.PI / 2), grid);
  overlay.position.y = y + 0.4; overlay.renderOrder = -20;
  group.add(overlay);
  group.userData.update = (t) => { grid.uniforms.uTime.value = t; };
  group.userData.dispose = () => { floor.geometry.dispose(); floorMaterial.dispose(); overlay.geometry.dispose(); grid.dispose(); };
  group.userData.floorMesh = floor;
  return group;
}

// ---------------------------------------------------------------------------------------------------------------------
// Dust motes drifting through the key light. GPU-animated and wrapped around a moving centre, so they follow the camera up the tower.
export function createMotes({ count = 260, box = [1200, 900, 900], color = '#FFE7B8', size = 5, speed = 1, opacity = 0.7 } = {}) {
  const random = rng(33);
  const base = new Float32Array(count * 3); const seed = new Float32Array(count * 2);
  for (let i = 0; i < count; i += 1) {
    base[i * 3] = (random() - 0.5) * box[0]; base[i * 3 + 1] = (random() - 0.5) * box[1]; base[i * 3 + 2] = (random() - 0.5) * box[2];
    seed[i * 2] = random() * TAU; seed[i * 2 + 1] = 0.4 + random() * 1.2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(base, 3)); geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 2));
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uCenter: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(...box) }, uColor: { value: vec3(color) }, uSize: { value: size }, uScale: { value: 800 }, uOpacity: { value: opacity }, uSpeed: { value: speed } },
    vertexShader: /* glsl */`
      attribute vec2 aSeed; uniform float uTime, uSize, uScale, uSpeed; uniform vec3 uCenter, uBox; varying float vA;
      void main() {
        vec3 p = position + vec3(sin(uTime * 0.21 * uSpeed + aSeed.x), sin(uTime * 0.33 * uSpeed + aSeed.x * 1.7) * 0.6 - uTime * 3.0 * uSpeed * 0.1, cos(uTime * 0.17 * uSpeed + aSeed.x * 2.3)) * 34.0 * aSeed.y;
        p = uCenter + mod(p - uCenter + uBox * 0.5, uBox) - uBox * 0.5;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float tw = 0.55 + 0.45 * sin(uTime * 1.3 + aSeed.x * 9.0);
        vA = tw * smoothstep(1400.0, 300.0, -mv.z) * smoothstep(0.0, 180.0, -mv.z);
        gl_PointSize = max(1.0, uSize * aSeed.y * uScale / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uColor; uniform float uOpacity; varying float vA;
      void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = (1.0 - smoothstep(0.0, 1.0, d)); a *= a; gl_FragColor = vec4(uColor, a * vA * uOpacity); }
    `
  });
  const points = new THREE.Points(geometry, material); points.frustumCulled = false; points.renderOrder = 6;
  points.userData.dispose = () => { geometry.dispose(); material.dispose(); };
  return points;
}

// ---------------------------------------------------------------------------------------------------------------------
// A paper-cut cloud: the upper envelope of a few overlapping circles over a flat base, like a child's scissors would cut it.
export function cloudShape(seed = 1) {
  const random = rng(seed * 31 + 7); const bumps = []; const count = 4 + Math.floor(random() * 3);
  for (let i = 0; i < count; i += 1) { const t = count === 1 ? 0 : i / (count - 1); const edge = 1 - Math.abs(t - 0.5) * 2; bumps.push({ x: (t - 0.5) * 3.2 + (random() - 0.5) * 0.2, r: 0.5 + edge * 0.5 + random() * 0.18 }); }
  const shape = new THREE.Shape(); const left = bumps[0].x - bumps[0].r * 0.92; const right = bumps[count - 1].x + bumps[count - 1].r * 0.92;
  shape.moveTo(left, 0);
  for (let i = 0; i <= 90; i += 1) {
    const x = left + ((right - left) * i) / 90; let y = 0;
    for (const b of bumps) { const d = (x - b.x) / b.r; if (Math.abs(d) < 1) y = Math.max(y, Math.sqrt(1 - d * d) * b.r); }
    shape.lineTo(x, y * 0.9);
  }
  shape.lineTo(right, 0); shape.closePath();
  return shape;
}

export function hillGeometry({ width = 6000, base = -200, amp = 160, freq = 0.0012, seed = 1, step = 40, bottom = -900 }) {
  const shape = new THREE.Shape(); shape.moveTo(-width / 2, bottom);
  for (let x = -width / 2; x <= width / 2; x += step) shape.lineTo(x, base + fbm1(x * freq, seed, 4) * amp + (Math.abs(x) / width) ** 2 * amp * 1.4);
  shape.lineTo(width / 2, bottom); shape.closePath();
  return new THREE.ShapeGeometry(shape);
}

export { vec3 as colorOf, col, smoothstep };
