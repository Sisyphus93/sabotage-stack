'use strict';
/* Sabotage Stack — 3D stage. This file is the source of truth; scripts/sync-scene3d.js
   inlines it into sabotage-stack.html between the SCENE3D markers so the client stays a
   single file. The 2D canvas renderer remains the fallback whenever WebGL (or the vendored
   Three.js in <script type="text/plain" id="three-vendor-source">) is unavailable. */
(function attachScene3D(root) {
  const api = {
    supported: false,
    active: false,
    start,
    stop,
    isActive: () => active,
    render,
    resize,
    setTheme,
    setReducedMotion,
    reset
  };
  root.SabotageStack3D = api;

  // ---- world scale: 1 game px = 0.1 world units ------------------------------------------
  const S = 0.1;
  const PX_W = 360;            // game playfield width in px
  const PX_BASELINE = 480;
  const BLOCK_H = 22 * S;      // 2.2 world units per level
  const WORLD_W = PX_W * S;    // 36
  const HALF_W = WORLD_W / 2;
  const BLOCK_DEPTH = 4.2;
  const BLOCK_R = 0.22;
  const MAX_LEVELS = 80;

  let THREE = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let canvas = null;
  let stage = null;
  let started = false;
  let active = false;
  let failed = false;
  let theme = 'paper';
  let reducedMotion = false;
  let clock = 0;
  let failures = 0;
  let lastGameRef = null;

  // Theme tables mirror the 2D canvas palettes (themedColor in the main script).
  const COLOR_MAPS = {
    sunset: { '#E3A33B': '#FFC53D', '#2F8478': '#2EC4B6', '#7FA6BD': '#9B5DE5', '#D5472F': '#FF5964', '#7A6AA6': '#B983FF', '#C96F8A': '#FF8FAB' },
    primetime: { '#E3A33B': '#FFC83D', '#2F8478': '#35D0E8', '#7FA6BD': '#F2F5FF', '#D5472F': '#E5322D', '#7A6AA6': '#9B8CFF', '#C96F8A': '#FF7FA8' }
  };
  function themeColor(hex) {
    const map = COLOR_MAPS[theme];
    if (!map || typeof hex !== 'string') return hex || '#2F8478';
    return map[hex.toUpperCase()] || hex;
  }
  const VOTE_ORB_COLORS = ['#2F8478', '#7FA6BD', '#D5472F'];

  // ---- small utilities -------------------------------------------------------------------
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * Math.max(0, dt)));
  const x3 = px => (px - PX_W / 2) * S;
  const pxToY = px => (PX_BASELINE - px) * S;
  const blockBottom = level => level * BLOCK_H;

  function webglSupported() {
    try {
      const probe = document.createElement('canvas');
      const gl = probe.getContext('webgl2') || probe.getContext('webgl');
      return Boolean(gl && typeof gl.createShader === 'function' && typeof gl.getParameter === 'function');
    } catch (_) { return false; }
  }

  function loadVendor() {
    if (root.THREE) return true;
    const node = document.getElementById('three-vendor-source');
    if (!node || !node.textContent) return false;
    const script = document.createElement('script');
    script.textContent = node.textContent;
    (document.head || document.documentElement).appendChild(script);
    return Boolean(root.THREE);
  }

  // ---- textures --------------------------------------------------------------------------
  function makeDotTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.45, 'rgba(255,255,255,.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }
  function makeSoftTexture(hard = 0.55) {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(hard, 'rgba(255,255,255,.28)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }
  function makeGradientDomeTexture(stops) {
    const c = document.createElement('canvas');
    c.width = 8; c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    for (const [at, color] of stops) g.addColorStop(at, color);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 8, 256);
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }
  function makeGridTexture(line, bg, size = 256, cells = 8, glow = null) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);
    if (glow) {
      const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.06, size / 2, size / 2, size * 0.7);
      g.addColorStop(0, glow);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
    }
    ctx.strokeStyle = line;
    ctx.lineWidth = Math.max(1, size / 128);
    const step = size / cells;
    for (let i = 0; i <= cells; i += 1) {
      ctx.beginPath(); ctx.moveTo(i * step, 0); ctx.lineTo(i * step, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * step); ctx.lineTo(size, i * step); ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }
  function makeWindowsTexture() {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 128;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#061238';
    ctx.fillRect(0, 0, 64, 128);
    for (let y = 6; y < 122; y += 12) {
      for (let x = 6; x < 58; x += 12) {
        const lit = ((x * 7 + y * 13) % 31) > 12;
        ctx.fillStyle = lit ? ((x + y) % 24 === 0 ? '#FFC83D' : '#35D0E8') : '#0A1A55';
        ctx.fillRect(x, y, 6, 7);
      }
    }
    const texture = new THREE.CanvasTexture(c);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  const labelCache = new Map();
  function makeLabelSprite(text, options = {}) {
    const key = `${text}|${options.color || ''}|${options.bg || ''}|${options.big ? 1 : 0}`;
    if (labelCache.has(key)) return labelCache.get(key).clone();
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const font = options.big ? '700 58px "DM Sans", Arial, sans-serif' : '700 52px "DM Sans", Arial, sans-serif';
    ctx.font = font;
    const width = Math.min(480, ctx.measureText(text).width + 44);
    const rx = (512 - width) / 2;
    ctx.fillStyle = options.bg || 'rgba(20,16,12,.78)';
    ctx.beginPath();
    ctx.roundRect(rx, 22, width, 84, 22);
    ctx.fill();
    ctx.fillStyle = options.color || '#F4EDDF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = font;
    ctx.fillText(text, 256, 66, width - 20);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, fog: false });
    const sprite = new THREE.Sprite(material);
    const worldW = (width / 512) * 6.4;
    sprite.scale.set(worldW, worldW / 4, 1);
    sprite.center.set(0.5, 0);
    labelCache.set(key, sprite);
    return sprite.clone();
  }

  // ---- geometry / material caches ---------------------------------------------------------
  const geoCache = new Map();
  function roundedBlockGeometry(width, height = BLOCK_H - 0.12, depth = BLOCK_DEPTH) {
    const key = `${width.toFixed(2)}|${height.toFixed(2)}|${depth.toFixed(2)}`;
    if (geoCache.has(key)) return geoCache.get(key);
    const w = Math.max(0.4, width);
    const shape = new THREE.Shape();
    const x = -w / 2, y = -height / 2, r = Math.min(BLOCK_R, w / 2.2, height / 2.2);
    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + height - r);
    shape.quadraticCurveTo(x + w, y + height, x + w - r, y + height);
    shape.lineTo(x + r, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);
    const bevel = Math.min(0.06, height / 6);
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: Math.max(0.2, depth - bevel * 2), bevelEnabled: true,
      bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 2
    });
    geometry.translate(0, 0, -depth / 2 + bevel);
    // Cache grows monotonically (bounded by distinct widths × heights). Entries are never
    // disposed while cached: a live mesh may still reference them until the tower rebuilds.
    geoCache.set(key, geometry);
    return geometry;
  }
  function quantizedWidth(width) {
    return Math.round(clamp(width, 0.4, WORLD_W) * 20) / 20;
  }

  const matCache = new Map();
  function blockMaterial(color, variant = 'plain') {
    const key = `${theme}|${color}|${variant}`;
    if (matCache.has(key)) return matCache.get(key);
    const base = themeColor(color);
    let material;
    if (theme === 'primetime') {
      material = new THREE.MeshStandardMaterial({
        color: base, roughness: 0.32, metalness: 0.3,
        emissive: base, emissiveIntensity: variant === 'moving' ? 0.34 : 0.14
      });
    } else if (theme === 'sunset') {
      material = new THREE.MeshStandardMaterial({
        color: base, roughness: 0.62, metalness: 0.08,
        emissive: base, emissiveIntensity: variant === 'moving' ? 0.22 : 0.06
      });
    } else {
      material = new THREE.MeshStandardMaterial({
        color: base, roughness: 0.82, metalness: 0.02,
        emissive: base, emissiveIntensity: variant === 'moving' ? 0.12 : 0.03
      });
    }
    if (variant === 'ghost') { material.transparent = true; material.opacity = 0.34; material.depthWrite = false; }
    if (variant === 'perfect') material.emissiveIntensity = (theme === 'primetime' ? 0.4 : 0.18);
    matCache.set(key, material);
    return material;
  }
  function disposeMaterialCache() {
    for (const material of matCache.values()) material.dispose();
    matCache.clear();
  }

  // ---- particles -------------------------------------------------------------------------
  function makeParticleSystem(count, size, texture, blending) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size, map: texture, vertexColors: true, transparent: true,
      depthWrite: false, blending, sizeAttenuation: true
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    const particles = [];
    for (let i = 0; i < count; i += 1) {
      particles.push({ life: 0, maxLife: 1, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0, gravity: 0, drag: 0, r: 1, g: 1, b: 1, twinkle: 0 });
    }
    return { points, positions, colors, particles, cursor: 0, size };
  }
  function spawnParticle(system, x, y, z, options = {}) {
    const p = system.particles[system.cursor];
    system.cursor = (system.cursor + 1) % system.particles.length;
    p.life = p.maxLife = options.life || 0.8;
    p.x = x; p.y = y; p.z = z;
    p.vx = options.vx || 0; p.vy = options.vy || 0; p.vz = options.vz || 0;
    p.gravity = options.gravity || 0;
    p.drag = options.drag || 0;
    p.twinkle = options.twinkle || 0;
    const color = options.color ? new THREE.Color(themeColor(options.color)) : new THREE.Color(1, 1, 1);
    p.r = color.r; p.g = color.g; p.b = color.b;
  }
  function updateParticles(system, dt) {
    const { particles, positions, colors } = system;
    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      if (p.life <= 0) { positions[i * 3 + 1] = -999; continue; }
      p.life -= dt;
      if (p.life <= 0) { positions[i * 3 + 1] = -999; continue; }
      p.vy -= p.gravity * dt;
      if (p.drag) { const k = Math.exp(-p.drag * dt); p.vx *= k; p.vy *= k; p.vz *= k; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      const fade = clamp(p.life / p.maxLife, 0, 1);
      const twinkle = p.twinkle ? (0.65 + 0.35 * Math.sin(clock * 22 + i * 1.7)) : 1;
      positions[i * 3] = p.x; positions[i * 3 + 1] = p.y; positions[i * 3 + 2] = p.z;
      colors[i * 3] = p.r * fade * twinkle;
      colors[i * 3 + 1] = p.g * fade * twinkle;
      colors[i * 3 + 2] = p.b * fade * twinkle;
    }
    system.points.geometry.attributes.position.needsUpdate = true;
    system.points.geometry.attributes.color.needsUpdate = true;
  }

  function makeConfettiSystem(count) {
    const geometry = new THREE.PlaneGeometry(0.32, 0.2);
    const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 0.95 });
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    const items = [];
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < count; i += 1) {
      items.push({ life: 0, maxLife: 1, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0, rx: 0, ry: 0, rz: 0, wx: 0, wy: 0, wz: 0, scale: 1 });
      matrix.makeTranslation(0, -999, 0);
      mesh.setMatrixAt(i, matrix);
    }
    return { mesh, items, cursor: 0, matrix, quaternion: new THREE.Quaternion(), euler: new THREE.Euler(), scale: new THREE.Vector3(1, 1, 1) };
  }
  function spawnConfetti(system, x, y, z, color, power = 1) {
    const item = system.items[system.cursor];
    system.cursor = (system.cursor + 1) % system.items.length;
    const angle = Math.random() * Math.PI * 2;
    const speed = (2.2 + Math.random() * 3.4) * power;
    item.life = item.maxLife = 1.1 + Math.random() * 0.9;
    item.x = x; item.y = y; item.z = z;
    item.vx = Math.cos(angle) * speed * 0.55;
    item.vy = (2.6 + Math.random() * 3.2) * power;
    item.vz = Math.sin(angle) * speed * 0.55;
    item.rx = Math.random() * Math.PI; item.ry = Math.random() * Math.PI; item.rz = Math.random() * Math.PI;
    item.wx = (Math.random() - 0.5) * 9; item.wy = (Math.random() - 0.5) * 9; item.wz = (Math.random() - 0.5) * 9;
    item.scale = 0.8 + Math.random() * 0.7;
    system.mesh.setColorAt(system.cursor === 0 ? system.items.length - 1 : system.cursor - 1, new THREE.Color(themeColor(color)));
    if (system.mesh.instanceColor) system.mesh.instanceColor.needsUpdate = true;
  }
  function updateConfetti(system, dt) {
    const { items, matrix, quaternion, euler, scale } = system;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      if (item.life <= 0) {
        matrix.makeTranslation(0, -999, 0);
        system.mesh.setMatrixAt(i, matrix);
        continue;
      }
      item.life -= dt;
      item.vy -= 8.5 * dt;
      item.vx *= Math.exp(-1.1 * dt);
      item.vz *= Math.exp(-1.1 * dt);
      item.x += item.vx * dt; item.y += item.vy * dt; item.z += item.vz * dt;
      item.rx += item.wx * dt; item.ry += item.wy * dt; item.rz += item.wz * dt;
      const shrink = clamp(item.life / item.maxLife, 0, 1);
      euler.set(item.rx, item.ry, item.rz);
      quaternion.setFromEuler(euler);
      scale.setScalar(Math.max(0.001, item.scale * (0.35 + 0.65 * shrink)));
      matrix.compose(new THREE.Vector3(item.x, item.y, item.z), quaternion, scale);
      system.mesh.setMatrixAt(i, matrix);
    }
    system.mesh.instanceMatrix.needsUpdate = true;
  }

  function makeRingPool(count = 10) {
    const rings = [];
    for (let i = 0; i < count; i += 1) {
      const geometry = new THREE.RingGeometry(0.86, 1, 48);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      rings.push({ mesh, life: 0, maxLife: 1, from: 1, to: 6 });
    }
    return rings;
  }
  function spawnRing(rings, x, y, z, color, from = 1, to = 6, life = 0.55) {
    const ring = rings.find(r => r.life <= 0) || rings[0];
    ring.life = ring.maxLife = life;
    ring.from = from; ring.to = to;
    ring.mesh.visible = true;
    ring.mesh.position.set(x, y, z);
    ring.mesh.material.color.set(themeColor(color));
  }
  function updateRings(rings, dt) {
    for (const ring of rings) {
      if (ring.life <= 0) { if (ring.mesh.visible) ring.mesh.visible = false; continue; }
      ring.life -= dt;
      const t = 1 - clamp(ring.life / ring.maxLife, 0, 1);
      const eased = 1 - Math.pow(1 - t, 2.4);
      ring.mesh.scale.setScalar(lerp(ring.from, ring.to, eased));
      ring.mesh.material.opacity = 0.85 * (1 - t);
      if (ring.life <= 0) ring.mesh.visible = false;
    }
  }

  // ---- environment -----------------------------------------------------------------------
  const env = {
    group: null, dust: null, embers: null, stars: null, searchlights: [],
    hemi: null, key: null, fill: null, accentA: null, accentB: null,
    floor: null, sun: null, sunGlow: null, skyline: null, pmrem: null, textureList: []
  };

  function disposeEnvironment() {
    const dispose = obj => {
      if (!obj) return;
      obj.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          for (const material of materials) {
            for (const value of Object.values(material)) {
              if (value && value.isTexture && !env.textureList.includes(value)) value.dispose();
            }
            material.dispose();
          }
        }
      });
      if (obj.parent) obj.parent.remove(obj);
    };
    dispose(env.group);
    for (const texture of env.textureList) texture.dispose();
    if (env.envRT) env.envRT.dispose();
    if (env.pmrem) env.pmrem.dispose();
    env.group = null; env.dust = null; env.embers = null; env.stars = null; env.floor = null;
    env.sun = null; env.sunGlow = null; env.skyline = null; env.pmrem = null; env.envRT = null;
    env.searchlights = [];
    env.textureList = [];
  }

  function registerTexture(texture) {
    env.textureList.push(texture);
    return texture;
  }

  function buildEnvironment() {
    disposeEnvironment();
    disposeMaterialCache();
    const group = new THREE.Group();
    env.group = group;
    scene.add(group);
    scene.fog = new THREE.FogExp2(0xffffff, 0.008);
    const T = THREE;

    if (theme === 'sunset') {
      scene.fog.color.set('#4A1E4B');
      scene.fog.density = 0.011;
      const domeTex = registerTexture(makeGradientDomeTexture([
        [0, '#170B33'], [0.38, '#5B2160'], [0.62, '#B23A5B'], [0.82, '#E8703A'], [1, '#FFC53D']
      ]));
      const dome = new T.Mesh(new T.SphereGeometry(220, 24, 16), new T.MeshBasicMaterial({ map: domeTex, side: T.BackSide, fog: false }));
      group.add(dome);
      const sunTex = registerTexture(makeSoftTexture(0.32));
      const sun = new T.Mesh(new T.SphereGeometry(9, 20, 16), new T.MeshBasicMaterial({ color: '#FFE9B8', fog: false }));
      sun.position.set(-64, 14, -150);
      group.add(sun);
      const glow = new T.Sprite(new T.SpriteMaterial({ map: sunTex, color: '#FFB25E', transparent: true, opacity: 0.85, blending: T.AdditiveBlending, depthWrite: false, fog: false }));
      glow.position.copy(sun.position);
      glow.scale.setScalar(90);
      group.add(glow);
      env.sun = sun; env.sunGlow = glow;
      const floorTex = registerTexture(makeGridTexture('rgba(255,197,61,.10)', '#241041', 256, 6));
      floorTex.repeat.set(10, 10);
      env.floor = new T.Mesh(new T.CircleGeometry(160, 48), new T.MeshStandardMaterial({ map: floorTex, color: '#2B1155', roughness: 0.95, metalness: 0.05 }));
      env.floor.rotation.x = -Math.PI / 2;
      env.floor.receiveShadow = true;
      group.add(env.floor);
      for (let i = 0; i < 5; i += 1) {
        const dune = new T.Mesh(new T.SphereGeometry(18 + i * 6, 16, 10), new T.MeshStandardMaterial({ color: '#3A1552', roughness: 1 }));
        dune.position.set(-90 + i * 46, -12 - i * 2, -95 - (i % 3) * 24);
        dune.scale.y = 0.36;
        group.add(dune);
      }
      env.hemi = new T.HemisphereLight('#FF9E5E', '#2B1155', 0.85);
      env.key = new T.DirectionalLight('#FFB27A', 2.3);
      env.key.position.set(-34, 26, -22);
      env.fill = new T.DirectionalLight('#8FA6D8', 0.4);
      env.fill.position.set(18, 12, 22);
      env.embers = makeParticleSystem(90, 0.42, registerTexture(makeDotTexture()), T.AdditiveBlending);
      for (const p of env.embers.particles) {
        spawnParticle(env.embers, (Math.random() - 0.5) * 90, Math.random() * 16, (Math.random() - 0.5) * 40, {
          vx: (Math.random() - 0.5) * 0.5, vy: 0.6 + Math.random() * 1.1, vz: (Math.random() - 0.5) * 0.4,
          life: 6 + Math.random() * 6, color: Math.random() > 0.5 ? '#FFC53D' : '#FF7A45', twinkle: 1
        });
      }
      group.add(env.embers.points);
    } else if (theme === 'primetime') {
      scene.fog.color.set('#081436');
      scene.fog.density = 0.0125;
      const domeTex = registerTexture(makeGradientDomeTexture([
        [0, '#02061C'], [0.45, '#061238'], [0.8, '#0A1A55'], [1, '#16307E']
      ]));
      const dome = new T.Mesh(new T.SphereGeometry(220, 24, 16), new T.MeshBasicMaterial({ map: domeTex, side: T.BackSide, fog: false }));
      group.add(dome);
      const starCount = 260;
      const starPositions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i += 1) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.42;
        const r = 190;
        starPositions[i * 3] = Math.cos(theta) * Math.sin(phi + 0.12) * r;
        starPositions[i * 3 + 1] = Math.cos(phi) * r * 0.9;
        starPositions[i * 3 + 2] = Math.sin(theta) * Math.sin(phi + 0.12) * r;
      }
      const starGeometry = new T.BufferGeometry();
      starGeometry.setAttribute('position', new T.BufferAttribute(starPositions, 3));
      env.stars = new T.Points(starGeometry, new T.PointsMaterial({ size: 1.15, color: '#C9D6FF', transparent: true, opacity: 0.9, fog: false, sizeAttenuation: true }));
      group.add(env.stars);
      const windowsTex = registerTexture(makeWindowsTexture());
      env.skyline = new T.Group();
      for (let i = 0; i < 16; i += 1) {
        const h = 16 + ((i * 37) % 26);
        const tower = new T.Mesh(new T.BoxGeometry(9 + (i % 4) * 3, h, 9), new T.MeshStandardMaterial({
          color: '#0A1A55', map: windowsTex, emissiveMap: windowsTex, emissive: '#7FA6BD',
          emissiveIntensity: 0.75, roughness: 0.7, metalness: 0.2
        }));
        tower.position.set(-120 + i * 16, h / 2 - 2, -110 - (i % 5) * 14);
        env.skyline.add(tower);
      }
      group.add(env.skyline);
      const floorTex = registerTexture(makeGridTexture('rgba(53,208,232,.42)', '#04102E', 256, 10, 'rgba(53,208,232,.14)'));
      floorTex.repeat.set(14, 14);
      env.floor = new T.Mesh(new T.CircleGeometry(170, 48), new T.MeshStandardMaterial({
        map: floorTex, emissiveMap: floorTex, emissive: '#35D0E8', emissiveIntensity: 0.5,
        color: '#061238', roughness: 0.42, metalness: 0.55
      }));
      env.floor.rotation.x = -Math.PI / 2;
      env.floor.receiveShadow = true;
      group.add(env.floor);
      env.hemi = new T.HemisphereLight('#2A3F8F', '#04102E', 0.85);
      env.key = new T.DirectionalLight('#BFD4FF', 1.35);
      env.key.position.set(16, 30, 18);
      env.fill = new T.DirectionalLight('#35D0E8', 0.5);
      env.fill.position.set(-20, 8, -10);
      env.accentA = new T.PointLight('#35D0E8', 320, 140, 2);
      env.accentA.position.set(-24, 10, -12);
      env.accentB = new T.PointLight('#FF7FA8', 260, 140, 2);
      env.accentB.position.set(26, 8, -14);
      for (let i = 0; i < 2; i += 1) {
        const cone = new T.Mesh(new T.ConeGeometry(12, 90, 18, 1, true), new T.MeshBasicMaterial({
          color: i ? '#FF7FA8' : '#35D0E8', transparent: true, opacity: 0.06,
          blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide, fog: false
        }));
        cone.position.set(i ? 70 : -70, 44, -120);
        cone.rotation.z = i ? 0.5 : -0.5;
        group.add(cone);
        env.searchlights.push(cone);
      }
    } else {
      scene.fog.color.set('#EDE4CF');
      scene.fog.density = 0.0075;
      const domeTex = registerTexture(makeGradientDomeTexture([
        [0, '#FDF8ED'], [0.55, '#F4EDDF'], [1, '#E2D4B4']
      ]));
      const dome = new T.Mesh(new T.SphereGeometry(220, 24, 16), new T.MeshBasicMaterial({ map: domeTex, side: T.BackSide, fog: false }));
      group.add(dome);
      const floorTex = registerTexture(makeGridTexture('rgba(42,37,32,.10)', '#E9DFC8', 256, 8, 'rgba(227,163,59,.12)'));
      floorTex.repeat.set(12, 12);
      env.floor = new T.Mesh(new T.CircleGeometry(160, 48), new T.MeshStandardMaterial({ map: floorTex, color: '#E7DCC5', roughness: 0.94, metalness: 0.02 }));
      env.floor.rotation.x = -Math.PI / 2;
      env.floor.receiveShadow = true;
      group.add(env.floor);
      env.hemi = new T.HemisphereLight('#FFF6E6', '#C9B99A', 0.95);
      env.key = new T.DirectionalLight('#FFE9C4', 1.7);
      env.key.position.set(18, 30, 20);
      env.fill = new T.DirectionalLight('#BFD4E2', 0.45);
      env.fill.position.set(-18, 12, -14);
      env.dust = makeParticleSystem(110, 0.3, registerTexture(makeDotTexture()), T.AdditiveBlending);
      for (const p of env.dust.particles) {
        spawnParticle(env.dust, (Math.random() - 0.5) * 70, Math.random() * 26, (Math.random() - 0.5) * 36, {
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.22, vz: (Math.random() - 0.5) * 0.35,
          life: 8 + Math.random() * 8, color: '#C9B99A', twinkle: 1
        });
      }
      group.add(env.dust.points);
    }

    for (const light of [env.hemi, env.key, env.fill, env.accentA, env.accentB]) {
      if (light) group.add(light);
    }
    if (env.key) {
      env.key.castShadow = true;
      env.key.shadow.mapSize.set(2048, 2048);
      env.key.shadow.camera.left = -34;
      env.key.shadow.camera.right = 34;
      env.key.shadow.camera.top = 60;
      env.key.shadow.camera.bottom = -8;
      env.key.shadow.camera.near = 2;
      env.key.shadow.camera.far = 130;
      env.key.shadow.bias = -0.0004;
      env.key.shadow.normalBias = 0.025;
    }
    if (env.key && env.floor) {
      env.key.target.position.set(0, 6, 0);
      group.add(env.key.target);
    }
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envScene = new THREE.Scene();
      const envTex = makeGradientDomeTexture(theme === 'sunset'
        ? [[0, '#FFB27A'], [1, '#2B1155']]
        : theme === 'primetime' ? [[0, '#35D0E8'], [1, '#04102E']] : [[0, '#FFF6E6'], [1, '#C9B99A']]);
      envScene.add(new THREE.Mesh(new THREE.SphereGeometry(60, 16, 12), new THREE.MeshBasicMaterial({ map: envTex, side: THREE.BackSide })));
      const rt = pmrem.fromScene(envScene, 0.1);
      envTex.dispose();
      env.pmrem = pmrem;
      env.envRT = rt;
      scene.environment = rt.texture;
    } catch (_) { /* environment lighting is an enhancement only */ }
  }

  // ---- towers -----------------------------------------------------------------------------
  const towers = [];
  function makeTower(originX = 0, scale = 1) {
    const group = new THREE.Group();
    group.position.x = originX;
    group.scale.x = scale;
    const blocksGroup = new THREE.Group();
    group.add(blocksGroup);
    const fx = new THREE.Group();
    group.add(fx);
    const mover = new THREE.Mesh(roundedBlockGeometry(10), blockMaterial('#E3A33B', 'moving'));
    mover.castShadow = true;
    mover.visible = false;
    group.add(mover);
    // Ghosts and the shell-game decoy keep private materials (per-frame opacity edits must not
    // touch the shared material cache).
    const makeGhostMesh = () => {
      const material = new THREE.MeshStandardMaterial({
        color: '#E3A33B', transparent: true, opacity: 0.3, depthWrite: false,
        emissive: '#E3A33B', emissiveIntensity: 0.1
      });
      const mesh = new THREE.Mesh(roundedBlockGeometry(10), material);
      mesh.visible = false;
      return mesh;
    };
    const decoy = makeGhostMesh();
    group.add(decoy);
    const ghosts = [];
    for (let i = 0; i < 3; i += 1) {
      const ghost = makeGhostMesh();
      group.add(ghost);
      ghosts.push(ghost);
    }
    const crackMarks = new THREE.Group();
    crackMarks.visible = false;
    const crackMaterial = new THREE.MeshBasicMaterial({ color: '#171018', transparent: true, opacity: 0.85 });
    for (let i = 0; i < 2; i += 1) {
      const mark = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.15, 0.06), crackMaterial);
      mark.position.set(i ? 1.1 : -1.1, 0, BLOCK_DEPTH / 2 + 0.04);
      mark.rotation.z = i ? -0.5 : 0.5;
      crackMarks.add(mark);
    }
    mover.add(crackMarks);
    const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softTexture(), color: '#E3A33B', transparent: true, opacity: 0.0,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    glowSprite.scale.set(12, 6.4, 1);
    group.add(glowSprite);

    const tower = {
      group, blocksGroup, mover, decoy, ghosts, crackMarks, glowSprite, fx,
      blockEntries: new Map(), actorEntries: new Map(), seenActors: new WeakSet(),
      keys: new Set(), prevTop: null, prevMovingLeft: null, prevMovingLevel: null,
      topKey: null, labelSprite: null, nameplate: null,
      portal: null, calipers: null, magnetLines: null, glueDrips: null, crumbleCracks: null,
      rail: null, spot: null, spotCone: null, autoRing: null, voteOrbs: null,
      settleT: 1, labelFor: null, flashLight: null, flashLife: 0
    };
    towers.push(tower);
    scene.add(group);
    return tower;
  }
  function clearTowers() {
    for (const tower of towers) {
      scene.remove(tower.group);
      if (tower.nameplate) scene.remove(tower.nameplate);
      if (tower.magnetLines) disposeObject(tower.magnetLines);
    }
    towers.length = 0;
  }

  function ensurePortal(tower) {
    if (tower.portal) return tower.portal;
    const group = new THREE.Group();
    const gateMat = new THREE.MeshStandardMaterial({
      color: themeColor('#2F8478'), emissive: themeColor('#2F8478'), emissiveIntensity: 1.6,
      transparent: true, opacity: 0.85, roughness: 0.4
    });
    const curtainMat = new THREE.MeshBasicMaterial({
      color: themeColor('#2F8478'), transparent: true, opacity: 0.16,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.55, 26, 0.55), gateMat);
      post.position.set(side * (HALF_W + 0.55), 11, 0);
      group.add(post);
      const curtain = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 24), curtainMat);
      curtain.position.set(side * (HALF_W + 0.55), 11, 0);
      group.add(curtain);
    }
    group.visible = false;
    tower.fx.add(group);
    tower.portal = group;
    return group;
  }
  function ensureCalipers(tower) {
    if (tower.calipers) return tower.calipers;
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color: themeColor('#E3A33B'), transparent: true, opacity: 0.85 });
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 16, 0.18), material);
      rail.position.x = side * 8;
      group.add(rail);
      const tipTop = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.18, 0.18), material);
      const tipBottom = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.18, 0.18), material);
      tipTop.position.x = side * 8;
      tipBottom.position.x = side * 8;
      tipTop.position.y = 8;
      tipBottom.position.y = -8;
      group.add(tipTop, tipBottom);
    }
    group.visible = false;
    tower.fx.add(group);
    tower.calipers = group;
    return group;
  }
  function ensureCracks(tower) {
    if (tower.crumbleCracks) return tower.crumbleCracks;
    const group = new THREE.Group();
    const material = new THREE.LineBasicMaterial({ color: themeColor('#D5472F'), transparent: true, opacity: 0.9 });
    for (const fraction of [-0.24, 0.24]) {
      const points = [];
      for (let i = 0; i <= 5; i += 1) {
        points.push(new THREE.Vector3(fraction * 8 + (i % 2 ? 0.35 : -0.35), 1.2 - i * 0.5, BLOCK_DEPTH / 2 + 0.06));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      group.add(new THREE.Line(geometry, material));
    }
    group.visible = false;
    tower.fx.add(group);
    tower.crumbleCracks = group;
    return group;
  }
  function ensureGlueDrips(tower) {
    if (tower.glueDrips) return tower.glueDrips;
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: themeColor('#E3A33B'), emissive: themeColor('#E3A33B'), emissiveIntensity: 0.9,
      roughness: 0.35
    });
    for (let i = 0; i < 3; i += 1) {
      const drop = new THREE.Mesh(new THREE.SphereGeometry(0.34 - i * 0.06, 10, 8), material);
      drop.position.set((i - 1) * 1.8, -1.2 - i * 0.5, BLOCK_DEPTH / 2 - 0.4);
      group.add(drop);
    }
    group.visible = false;
    tower.group.add(group);
    tower.glueDrips = group;
    return group;
  }
  function ensureAutoRing(tower) {
    if (tower.autoRing) return tower.autoRing;
    const geometry = new THREE.TorusGeometry(1.6, 0.16, 8, 40, Math.PI * 2);
    const material = new THREE.MeshBasicMaterial({
      color: themeColor('#E3A33B'), transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2;
    ring.visible = false;
    tower.group.add(ring);
    tower.autoRing = ring;
    return ring;
  }
  function ensureVoteOrbs(tower) {
    if (tower.voteOrbs) return tower.voteOrbs;
    const group = new THREE.Group();
    for (let i = 0; i < 3; i += 1) {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 14, 10),
        new THREE.MeshStandardMaterial({
          color: themeColor(VOTE_ORB_COLORS[i]), emissive: themeColor(VOTE_ORB_COLORS[i]),
          emissiveIntensity: 1.2, roughness: 0.3
        })
      );
      group.add(orb);
    }
    group.visible = false;
    tower.group.add(group);
    tower.voteOrbs = group;
    return group;
  }
  function ensureRail(tower, level, width) {
    const key = `${level}|${width.toFixed(1)}`;
    if (tower.rail && tower.railKey === key) return tower.rail;
    if (tower.rail) disposeObject(tower.rail);
    const points = [];
    const half = Math.max(4, width / 2);
    for (let i = 0; i <= 24; i += 1) {
      const t = i / 24;
      const x = lerp(-half - 2, half + 2, t);
      const y = Math.sin(t * Math.PI * 2.2) * 2.25;
      points.push(new THREE.Vector3(x, y, 0));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 48, 0.09, 6, false);
    const material = new THREE.MeshBasicMaterial({
      color: themeColor('#7FA6BD'), transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const rail = new THREE.Mesh(geometry, material);
    tower.fx.add(rail);
    tower.rail = rail;
    tower.railKey = key;
    return rail;
  }
  function ensureSpot(tower) {
    if (tower.spot) return tower.spot;
    const light = new THREE.SpotLight('#FFE9B8', 0, 60, 0.42, 0.45, 1.2);
    light.castShadow = false;
    tower.group.add(light);
    tower.group.add(light.target);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(4.4, 18, 20, 1, true), new THREE.MeshBasicMaterial({
      color: '#FFE9B8', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending,
      depthWrite: false, side: THREE.DoubleSide
    }));
    cone.visible = false;
    tower.group.add(cone);
    tower.spot = light;
    tower.spotCone = cone;
    return light;
  }

  function softTexture() {
    if (!softTexture.cache) softTexture.cache = makeSoftTexture(0.4);
    return softTexture.cache;
  }
  function dotTexture() {
    if (!dotTexture.cache) dotTexture.cache = makeDotTexture();
    return dotTexture.cache;
  }

  // ---- block sync -------------------------------------------------------------------------
  function blockKey(block) {
    return `${block.level}|${(block.left || 0).toFixed(2)}|${(block.right || 0).toFixed(2)}|${block.color || ''}|${block.perfect ? 1 : 0}`;
  }
  function syncBlocks(tower, blocks, options = {}) {
    const collapsing = options.collapsingLevels || new Set();
    const wanted = new Set();
    const tags = Boolean(options.placerTags);
    for (const block of blocks) {
      if (collapsing.has(block.level)) continue;
      const key = blockKey(block);
      wanted.add(key);
      let entry = tower.blockEntries.get(key);
      if (!entry) {
        const width = quantizedWidth(Math.max(0.6, (block.right - block.left)));
        const mesh = new THREE.Mesh(roundedBlockGeometry(width), blockMaterial(block.color || '#2F8478', block.perfect ? 'perfect' : 'plain'));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.set(x3((block.left + block.right) / 2), blockBottom(block.level) + BLOCK_H / 2, 0);
        tower.blocksGroup.add(mesh);
        entry = { mesh, settleT: 0 };
        tower.blockEntries.set(key, entry);
        if (tower.topKey && tower.topKey !== key && tower.blockEntries.has(tower.topKey)) {
          tower.settleT = 0;
        }
      }
      if (tags && block.placer && block.placer !== 'Base' && entry.mesh && !entry.tag) {
        const sprite = makeLabelSprite(String(block.placer).slice(0, 12), { bg: 'rgba(20,16,12,.8)' });
        sprite.position.set(entry.mesh.position.x, entry.mesh.position.y + 1.5, BLOCK_DEPTH / 2 + 0.4);
        sprite.scale.multiplyScalar(0.62);
        tower.blocksGroup.add(sprite);
        entry.tag = sprite;
      }
    }
    for (const [key, entry] of tower.blockEntries) {
      if (wanted.has(key)) continue;
      if (entry.tag) tower.blocksGroup.remove(entry.tag);
      tower.blocksGroup.remove(entry.mesh);
      tower.blockEntries.delete(key);
    }
    tower.keys = wanted;
    const top = blocks.length ? blocks[blocks.length - 1] : null;
    tower.topKey = top && !collapsing.has(top.level) ? blockKey(top) : null;
  }

  function updateSettle(tower, dt) {
    tower.settleT = Math.min(1, (tower.settleT == null ? 1 : tower.settleT) + dt / 0.26);
    if (!tower.topKey) return;
    const entry = tower.blockEntries.get(tower.topKey);
    if (!entry || !entry.mesh) return;
    const t = tower.settleT;
    if (t >= 1) { entry.mesh.scale.set(1, 1, 1); return; }
    const squash = t < 0.5 ? lerp(1.3, 0.9, t * 2) : lerp(0.9, 1, (t - 0.5) * 2);
    entry.mesh.scale.set(1 / Math.sqrt(squash), squash, 1 / Math.sqrt(squash));
  }

  function syncActorMeshes(tower, actors) {
    if (!fallingRoot) return;
    const alive = new Set();
    for (const actor of actors) {
      if (actor.collapseActor && !actor.started) continue;
      alive.add(actor);
      let entry = tower.actorEntries.get(actor);
      if (!entry) {
        const width = Math.max(0.6, (actor.width || 20) * S);
        const height = Math.max(0.3, (actor.height || 22) * S);
        const mesh = new THREE.Mesh(roundedBlockGeometry(width, height, BLOCK_DEPTH * 0.92), blockMaterial(actor.color || '#2F8478'));
        mesh.castShadow = true;
        entry = { mesh, z: (Math.random() - 0.5) * 3.2, spin: (actor.spin || 1) * 0.9, tilt: Math.random() * Math.PI };
        tower.actorEntries.set(actor, entry);
        if (fallingRoot) fallingRoot.add(mesh);
      }
      const cx = x3(actor.x + (actor.width || 0) / 2);
      const cy = pxToY(actor.y + (actor.height || 0) / 2);
      entry.mesh.position.set(cx, cy, entry.z);
      entry.mesh.rotation.set(entry.tilt + actor.age * entry.spin * 0.7, entry.spin * actor.age * 1.1, actor.angle || 0);
      const fade = clamp(1 - actor.age / 1.35, 0.15, 1);
      entry.mesh.scale.setScalar(0.6 + 0.4 * fade);
    }
    for (const [actor, entry] of tower.actorEntries) {
      if (alive.has(actor)) continue;
      fallingRoot.remove(entry.mesh);
      tower.actorEntries.delete(actor);
    }
  }

  // ---- world FX systems (shared) -----------------------------------------------------------
  let sparks = null;
  let dustPuffs = null;
  let confetti = null;
  let rings = null;
  let flashPool = [];

  function ensureFxSystems() {
    if (sparks) return;
    sparks = makeParticleSystem(320, 0.55, dotTexture(), THREE.AdditiveBlending);
    dustPuffs = makeParticleSystem(160, 1.15, softTexture(), THREE.NormalBlending);
    confetti = makeConfettiSystem(120);
    rings = makeRingPool(12);
    scene.add(sparks.points);
    scene.add(dustPuffs.points);
    scene.add(confetti.mesh);
    for (const ring of rings) scene.add(ring.mesh);
    for (let i = 0; i < 3; i += 1) {
      const light = new THREE.PointLight('#FFE9B8', 0, 26, 2);
      scene.add(light);
      flashPool.push({ light, life: 0, maxLife: 1 });
    }
  }
  function flashAt(x, y, z, color, intensity = 60, life = 0.4) {
    const flash = flashPool.find(f => f.life <= 0) || flashPool[0];
    flash.life = flash.maxLife = life;
    flash.light.color.set(themeColor(color));
    flash.light.position.set(x, y, z);
    flash.light.intensity = intensity;
  }
  function updateFlashLights(dt) {
    for (const flash of flashPool) {
      if (flash.life <= 0) { flash.light.intensity = 0; continue; }
      flash.life -= dt;
      flash.light.intensity = 60 * Math.pow(clamp(flash.life / flash.maxLife, 0, 1), 1.6);
    }
  }

  function burstSparks(x, y, z, color, count = 14, power = 1) {
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const lift = 1.6 + Math.random() * 3.2;
      spawnParticle(sparks, x, y, z, {
        vx: Math.cos(angle) * (1.5 + Math.random() * 3.5) * power,
        vy: lift * power,
        vz: Math.sin(angle) * (1.5 + Math.random() * 3.5) * power,
        gravity: 7.5, drag: 1.2, life: 0.5 + Math.random() * 0.5, color
      });
    }
  }
  function puffDust(x, y, z, color = '#C9B99A', count = 8, power = 1) {
    for (let i = 0; i < count; i += 1) {
      spawnParticle(dustPuffs, x, y, z, {
        vx: (Math.random() - 0.5) * 3 * power,
        vy: (0.6 + Math.random() * 1.6) * power,
        vz: (Math.random() - 0.5) * 3 * power,
        gravity: 1.4, drag: 1.6, life: 0.8 + Math.random() * 0.6, color
      });
    }
  }

  // ---- effect helpers ---------------------------------------------------------------------
  const Core = () => root.SabotageStackCore;
  function disposeObject(obj) {
    if (!obj) return;
    obj.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        for (const material of materials) material.dispose();
      }
    });
    if (obj.parent) obj.parent.remove(obj);
  }
  function effectProps(effect) {
    return {
      id: (effect && effect.id) || '',
      elapsed: Number(effect && effect.elapsed) || 0,
      remaining: Number(effect && effect.remaining) || 0
    };
  }
  function resetTowerFx(tower) {
    for (const key of ['portal', 'calipers', 'magnetLines', 'glueDrips', 'crumbleCracks', 'rail', 'autoRing', 'voteOrbs']) {
      if (tower[key]) disposeObject(tower[key]);
      tower[key] = null;
    }
    if (tower.spot) {
      tower.group.remove(tower.spot);
      tower.group.remove(tower.spot.target);
      tower.spot.dispose();
      tower.spot = null;
    }
    if (tower.spotCone) disposeObject(tower.spotCone);
    tower.spotCone = null;
    tower.railKey = null;
    tower.fxTheme = theme;
    for (const [key, entry] of tower.blockEntries) {
      if (entry.tag) tower.blocksGroup.remove(entry.tag);
      tower.blocksGroup.remove(entry.mesh);
    }
    tower.blockEntries.clear();
    if (fallingRoot) {
      for (const [, entry] of tower.actorEntries) fallingRoot.remove(entry.mesh);
    }
    tower.actorEntries.clear();
  }
  function syncTowerEffect(tower, state, dt) {
    const { id, elapsed, remaining } = effectProps(state.effect);
    const mover = tower.mover;
    const below = state.below;
    const towerHeight = (state.blocks.length || 1) * BLOCK_H;

    // Portal gates
    const portal = ensurePortal(tower);
    portal.visible = id === 'portal';
    if (portal.visible) {
      portal.scale.y = clamp(towerHeight / 24, 0.6, 2.3);
      portal.position.y = towerHeight * 0.5 + 2;
      for (const child of portal.children) {
        if (child.material && child.material.opacity !== undefined) {
          child.material.opacity = child.geometry && child.geometry.type === 'PlaneGeometry'
            ? 0.14 + 0.06 * Math.sin(clock * 3.1) : 0.85;
        }
      }
    }

    // Caliper rails
    const calipers = ensureCalipers(tower);
    calipers.visible = id === 'calipers' && Boolean(below && state.moving);
    if (calipers.visible) {
      const bounds = Core().caliperBounds(below, state.moving);
      const [railL, tipTL, tipBL, railR, tipTR, tipBR] = calipers.children;
      const leftX = x3(bounds.minLeft);
      const rightX = x3(bounds.maxLeft + state.moving.width);
      railL.position.x = leftX;
      tipTL.position.x = leftX + 0.75;
      tipBL.position.x = leftX + 0.75;
      railR.position.x = rightX;
      tipTR.position.x = rightX - 0.75;
      tipBR.position.x = rightX - 0.75;
      calipers.position.y = blockBottom(state.moving.level || 0) + 2.2;
      calipers.scale.y = 1 + 0.05 * Math.sin(clock * 4);
    }

    // Crumble cracks on the top block
    const cracks = ensureCracks(tower);
    cracks.visible = id === 'crumble';
    if (cracks.visible && tower.topKey && tower.blockEntries.has(tower.topKey)) {
      const topMesh = tower.blockEntries.get(tower.topKey).mesh;
      cracks.position.copy(topMesh.position);
    }

    // Superglue drips + glow
    const drips = ensureGlueDrips(tower);
    drips.visible = id === 'superglue' && Boolean(state.moving);
    if (drips.visible) {
      drips.position.set(x3(state.moving.left + state.moving.width / 2), blockBottom(state.moving.level || 0) - 0.2 + (state.movingYOffset || 0), 0);
      drips.children.forEach((drop, index) => {
        drop.position.y = -1.1 - index * 0.55 - 0.25 * Math.sin(clock * 3 + index * 2);
        drop.scale.y = 1 + 0.28 * Math.sin(clock * 2.2 + index);
      });
    }
    const glowTarget = id === 'superglue' ? 0.5 : id === 'magnet' ? 0.28 : 0;
    tower.glowSprite.material.opacity = damp(tower.glowSprite.material.opacity, glowTarget, 8, dt);
    if (state.moving) {
      tower.glowSprite.position.set(x3(state.moving.left + state.moving.width / 2), blockBottom(state.moving.level || 0) + BLOCK_H / 2 + (state.movingYOffset || 0), 0);
    }

    // Magnet arcs
    if (id === 'magnet' && state.moving && below) {
      if (tower.magnetLines) disposeObject(tower.magnetLines);
      const group = new THREE.Group();
      const from = new THREE.Vector3(x3(state.moving.left + state.moving.width / 2), blockBottom(state.moving.level || 0) + (state.movingYOffset || 0), 0);
      const to = new THREE.Vector3(x3((below.left + below.right) / 2), blockBottom(below.level || 0) + BLOCK_H, 0);
      for (let i = 0; i < 3; i += 1) {
        const mid = from.clone().lerp(to, 0.5);
        mid.y -= 1.6 + i * 0.5;
        mid.x += (i - 1) * 0.9;
        const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
        const geometry = new THREE.TubeGeometry(curve, 18, 0.055, 5, false);
        const material = new THREE.MeshBasicMaterial({
          color: themeColor('#2F8478'), transparent: true,
          opacity: 0.45 + 0.2 * Math.sin(clock * 6 + i), blending: THREE.AdditiveBlending, depthWrite: false
        });
        group.add(new THREE.Mesh(geometry, material));
      }
      tower.fx.add(group);
      tower.magnetLines = group;
    } else if (tower.magnetLines) {
      disposeObject(tower.magnetLines);
      tower.magnetLines = null;
    }

    // Rollercoaster rail
    if (id === 'rollercoaster' && state.moving) {
      const rail = ensureRail(tower, state.moving.level || 0, Math.max(12, state.moving.width));
      rail.position.y = blockBottom(state.moving.level || 0) + BLOCK_H + (state.movingYOffset || 0);
      rail.material.opacity = 0.5 + 0.2 * Math.sin(clock * 5);
    } else if (tower.rail) {
      disposeObject(tower.rail);
      tower.rail = null;
      tower.railKey = null;
    }

    // Spotlight
    const spot = ensureSpot(tower);
    const spotOn = id === 'spotlight';
    spot.intensity = damp(spot.intensity, spotOn ? 240 : 0, 6, dt);
    tower.spotCone.visible = spotOn;
    if (spotOn && below) {
      const side = Number(state.effect.spotlightSide) < 0 ? -1 : 1;
      const beamX = side < 0 ? below.left + 7 : below.right - 7;
      const targetY = blockBottom(below.level || 0) + BLOCK_H / 2;
      spot.position.set(x3(beamX) + side * 5, targetY + 13, 9);
      spot.target.position.set(x3(beamX), targetY, 0);
      tower.spotCone.position.set(x3(beamX) + side * 2.2, targetY + 8.5, 3);
      tower.spotCone.rotation.set(0.12, 0, side * -0.32);
    }

    // Shell-game crack marks + decoy
    tower.crackMarks.visible = id === 'double';
    tower.decoy.visible = Boolean(id === 'double' && state.moving && state.moving.decoy);
    if (tower.decoy.visible) {
      const d = state.moving.decoy;
      tower.decoy.position.set(x3(d.left + d.width / 2), blockBottom(d.level || 0) + BLOCK_H / 2 + (state.movingYOffset || 0), 0);
      tower.decoy.geometry = roundedBlockGeometry(quantizedWidth(d.width));
      tower.decoy.material.color.set(themeColor(d.color || state.moving.color || '#E3A33B'));
      tower.decoy.material.emissive.set(themeColor(d.color || state.moving.color || '#E3A33B'));
    }

    // Auto-drop fuse ring (solo)
    const autoRing = ensureAutoRing(tower);
    const showAuto = Boolean(state.autoRemaining != null && state.autoRemaining > 0 && state.autoRemaining < state.autoTotal);
    autoRing.visible = showAuto && Boolean(state.moving);
    if (autoRing.visible) {
      const fraction = clamp(state.autoRemaining / state.autoTotal, 0.02, 1);
      autoRing.geometry.dispose();
      autoRing.geometry = new THREE.TorusGeometry(1.75, 0.14, 8, 40, Math.PI * 2 * fraction);
      autoRing.material.color.set(state.autoRemaining <= 1 ? themeColor('#D5472F') : themeColor('#E3A33B'));
      autoRing.position.set(x3(state.moving.left + state.moving.width / 2), blockBottom(state.moving.level || 0) + BLOCK_H + 1.6 + (state.movingYOffset || 0), 0);
      autoRing.rotation.z = clock * 0.8;
    }

    // Vote orbs
    const orbs = ensureVoteOrbs(tower);
    orbs.visible = Boolean(state.voting);
    if (orbs.visible) {
      const topY = towerHeight + 3.2;
      orbs.position.y = topY;
      orbs.children.forEach((orb, index) => {
        const angle = clock * 1.1 + index * (Math.PI * 2 / 3);
        orb.position.set(Math.cos(angle) * 3.4, Math.sin(clock * 2 + index * 1.4) * 0.55, Math.sin(angle) * 3.4);
        orb.material.emissiveIntensity = 1 + 0.5 * Math.sin(clock * 4 + index * 2);
      });
    }
  }

  function syncMover(tower, state, dt) {
    const moving = state.moving;
    if (!moving || !state.showMoving) {
      tower.mover.visible = false;
      for (const ghost of tower.ghosts) ghost.visible = false;
      return;
    }
    const width = quantizedWidth(moving.width);
    tower.mover.geometry = roundedBlockGeometry(width);
    tower.mover.material = blockMaterial(moving.color || '#E3A33B', 'moving');
    const cx = x3(moving.left + moving.width / 2);
    const cy = blockBottom(moving.level || 0) + BLOCK_H / 2 + (state.movingYOffset || 0);
    tower.mover.position.set(cx, cy, 0);
    tower.mover.visible = state.moverVisible !== false;

    // Kinetic cue: drunk wobble + slow-mo windup squash
    let scaleX = 1, scaleY = 1, roll = 0;
    const { id, elapsed } = effectProps(state.effect);
    if (id === 'slowmo') {
      const windup = Core().slowToDartWindup(elapsed);
      scaleX = 1 - 0.1 * windup;
      scaleY = 1 + 0.14 * windup;
    }
    if (id === 'accordion') {
      const widthRatio = moving.width / Math.max(1, state.belowWidth || moving.width);
      scaleY = 1 + (1 - clamp(widthRatio, 0.4, 1)) * 0.35;
    }
    if (id === 'drunk' && state.drunkMultiplier != null) {
      roll = Math.sin(clock * 2.1) * 0.16 * clamp(1.4 - state.drunkMultiplier, -0.6, 1.1);
    }
    tower.mover.scale.set(scaleX, scaleY, 1);
    tower.mover.rotation.z = roll;

    // Ghost trail
    const ghostStrength = id === 'slowmo' ? 0.4 : id === 'turbo' ? 0.3 : 0.12;
    tower.ghostHistory = tower.ghostHistory || [];
    if (!reducedMotion) {
      tower.ghostHistory.push({ x: cx, y: cy, w: width });
      if (tower.ghostHistory.length > 16) tower.ghostHistory.shift();
    }
    tower.ghosts.forEach((ghost, index) => {
      const sample = tower.ghostHistory[tower.ghostHistory.length - (index + 1) * 4];
      if (!sample || reducedMotion) { ghost.visible = false; return; }
      ghost.visible = tower.mover.visible && ghostStrength > 0.15;
      ghost.geometry = roundedBlockGeometry(sample.w);
      ghost.material.color.set(themeColor(moving.color || '#E3A33B'));
      ghost.material.emissive.set(themeColor(moving.color || '#E3A33B'));
      ghost.material.opacity = ghostStrength * (1 - index * 0.28);
      ghost.position.set(sample.x, sample.y, 0);
    });

    // Turbo streaks
    if (id === 'turbo' && !reducedMotion && Math.random() < 0.5) {
      const dir = moving.direction < 0 ? -1 : 1;
      spawnParticle(sparks, cx - dir * (width / 2 + 1), cy + (Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 3, {
        vx: -dir * (8 + Math.random() * 10), vy: 0, vz: 0, drag: 0.8, life: 0.32, color: '#E3A33B'
      });
    }
    // Super-glue drop shake
    if (id === 'superglue' && Math.random() < 0.06) {
      spawnParticle(dustPuffs, cx + (Math.random() - 0.5) * width * 0.7, cy - 1, BLOCK_DEPTH / 2, {
        vx: 0, vy: -1.2, vz: 0.2, gravity: 2.2, life: 0.7, color: '#E3A33B'
      });
    }
    // Rollercoaster sparks under the wheels
    if (id === 'rollercoaster' && !reducedMotion && Math.random() < 0.18) {
      burstSparks(cx, cy - BLOCK_H / 2, 0, '#7FA6BD', 2, 0.5);
    }
    // Portal wrap flash
    if (id === 'portal' && tower.prevMovingLeft != null && Math.abs(moving.left - tower.prevMovingLeft) > PX_W * 0.5) {
      burstSparks(cx, cy, 0, '#2F8478', 22, 1.2);
      flashAt(cx, cy, 2, '#2F8478', 80, 0.3);
      spawnRing(rings, cx, cy, 0, '#2F8478', 0.6, 5, 0.5);
    }
    tower.prevMovingLeft = moving.left;
    tower.prevMovingLevel = moving.level;
  }

  function onBlockPlaced(tower, block, options = {}) {
    const cx = x3((block.left + block.right) / 2);
    const topY = blockBottom(block.level) + BLOCK_H;
    if (block.perfect) {
      spawnRing(rings, cx, topY + 0.1, 0, block.color, 1, 7.5, 0.7);
      spawnRing(rings, cx, topY + 0.1, 0, '#E3A33B', 0.6, 4.2, 0.45);
      burstSparks(cx, topY + 0.4, 0, block.color, 26, 1.35);
      for (let i = 0; i < 16; i += 1) spawnConfetti(confetti, cx, topY + 0.6, 0, i % 2 ? block.color : '#E3A33B', 1.05);
      flashAt(cx, topY + 1.4, 3, block.color, 120, 0.5);
      puffDust(cx, topY, 0, '#D8C7A6', 6, 0.7);
    } else {
      puffDust(cx, topY, 0, options.dustColor || '#C9B99A', 5, 0.6);
      spawnRing(rings, cx, topY + 0.1, 0, block.color, 0.5, 3.2, 0.4);
    }
    if (options.crumble) {
      burstSparks(x3(block.left), topY - 0.4, 0, '#D5472F', 8, 0.8);
      burstSparks(x3(block.right), topY - 0.4, 0, '#D5472F', 8, 0.8);
    }
    if (options.glue) {
      burstSparks(cx, topY + 0.3, 0, '#E3A33B', 12, 0.8);
    }
    tower.settleT = 0;
  }

  // ---- camera ------------------------------------------------------------------------------
  const cam = {
    lookY: 5, dist: 62, yaw: -0.16, pitch: 0.16, fov: 42, roll: 0,
    shakeX: 0, shakeY: 0, distBoost: 0, intro: 1
  };
  function updateCamera(dt, view, topY, hostBoard) {
    const game = view.game;
    const core = Core();
    cam.intro = Math.max(0, cam.intro - dt / 1.6);
    let targetFov = 42;
    let targetDist = hostBoard ? 78 + (towers.length || 1) * 7 : 55 + Math.min(26, topY * 0.42);
    let targetLook = hostBoard ? 8 : Math.max(2.6, topY * 0.86);
    const effect = effectProps(game && game.activeEffect);

    if (effect.id === 'zoom' && !hostBoard) {
      targetDist *= 0.52;
      targetFov = 33;
      targetLook = Math.max(3, topY * 0.96);
    }
    if (effect.id === 'turbo') targetFov = 46;
    if (effect.id === 'drunk') targetFov = 40;
    if (game && game.phase === 'collapse') {
      targetDist += 24 + cam.distBoost;
      cam.distBoost = damp(cam.distBoost, 16, 1.2, dt);
      targetLook = Math.max(3, topY * 0.55);
    }

    cam.dist = damp(cam.dist, targetDist, 1.6, dt);
    cam.lookY = damp(cam.lookY, targetLook, 2.2, dt);
    cam.fov = damp(cam.fov, targetFov, 3, dt);
    if (!reducedMotion) {
      const drift = hostBoard ? 0.22 : 0.14;
      cam.yaw = -0.16 + Math.sin(clock * (hostBoard ? 0.06 : 0.09)) * drift + Math.sin(clock * 0.023) * 0.05;
      cam.pitch = 0.16 + Math.sin(clock * 0.05) * 0.03;
    }
    let roll = 0;
    if (effect.id === 'drunk' && !reducedMotion) roll = Math.sin(clock * 1.7) * 0.045;
    if (effect.id === 'pisa' && !reducedMotion) roll = -Math.sin(clock * 0.7) * 0.02;
    cam.roll = damp(cam.roll, roll, 4, dt);

    let shakeX = 0, shakeY = 0;
    if (game && game.activeEffect && game.activeEffect.id === 'earthquake') {
      const tremor = core.earthquakeOffset(effect.elapsed, game.activeEffect.remaining, reducedMotion);
      shakeX = tremor.x * S * 2.4;
      shakeY = tremor.y * S * 2.4;
    }
    if (game && game.phase === 'collapse' && game.collapseShake > 0 && !reducedMotion) {
      const t = game.collapseShake / 0.62;
      shakeX += Math.sin(clock * 60) * 0.65 * t;
      shakeY += Math.cos(clock * 52) * 0.4 * t;
    }
    cam.shakeX = damp(cam.shakeX, shakeX, 18, dt);
    cam.shakeY = damp(cam.shakeY, shakeY, 18, dt);

    const introEase = reducedMotion ? 0 : cam.intro * cam.intro;
    const dist = cam.dist + introEase * 26;
    const yaw = cam.yaw + introEase * 0.85;
    camera.position.set(
      Math.sin(yaw) * dist * Math.cos(cam.pitch) + cam.shakeX,
      cam.lookY + 3.4 + Math.sin(cam.pitch) * dist + cam.shakeY + introEase * 5,
      Math.cos(yaw) * dist * Math.cos(cam.pitch)
    );
    camera.lookAt(0, cam.lookY, 0);
    camera.rotateZ(cam.roll);
    if (Math.abs(camera.fov - cam.fov) > 0.01) {
      camera.fov = cam.fov;
      camera.updateProjectionMatrix();
    }
  }

  // ---- per-frame sync ----------------------------------------------------------------------
  let fallingRoot = null; // created in start(): THREE is not loaded at parse time
  function syncSingle(view, dt) {
    const game = view.game;
    while (towers.length > 1) {
      const extra = towers.pop();
      scene.remove(extra.group);
    }
    const tower = towers[0] || makeTower(0, 1);
    const blocks = game.stack || [];
    const collapsingLevels = new Set(game.collapsingLevels || []);
    syncBlocks(tower, blocks, { collapsingLevels, placerTags: Boolean(game.multiplayer && game.mode === 'teamwork') });
    updateSettle(tower, dt);

    const effect = game.activeEffect;
    const { id, elapsed } = effectProps(effect);
    let movingYOffset = 0;
    if (id === 'rollercoaster' && game.moving && !reducedMotion) {
      movingYOffset = -Core().rollercoasterOffset(elapsed, Number(game.moving.rollerPhase) || 0) * S;
    }
    const below = blocks.length ? blocks[blocks.length - 1] : null;
    const moverVisible = game.phase === 'playing' && !(id === 'peekaboo' && !reducedMotion && Core().peekabooOpacity(elapsed) < 0.5);
    syncMover(tower, {
      moving: game.moving,
      showMoving: game.phase === 'playing',
      moverVisible,
      movingYOffset,
      effect,
      below,
      belowWidth: below ? below.right - below.left : 0,
      drunkMultiplier: game.drunkMultiplier
    }, dt);
    syncTowerEffect(tower, {
      effect, moving: game.moving, below, blocks,
      movingYOffset, voting: Boolean(game.vote && game.phase === 'playing'),
      autoRemaining: (game.phase === 'playing' && !game.multiplayer && !game.devMode && Number(game.autoDropSeconds) > 0)
        ? Math.max(0, Number(game.autoDropSeconds) - Number(game.blockClock || 0)) : null,
      autoTotal: Number(game.autoDropSeconds) || 3.5
    }, dt);
    syncActorMeshes(tower, game.fallingActors || []);

    // Landing detection via top-key change.
    if (tower.topKey && tower.topKey !== tower.prevTopKey) {
      if (tower.prevTopKey !== null && tower.blockEntries.has(tower.topKey)) {
        const block = blocks[blocks.length - 1];
        onBlockPlaced(tower, block, { crumble: id === 'crumble', glue: id === 'superglue' });
      }
      tower.prevTopKey = tower.topKey;
    } else if (!tower.topKey) {
      tower.prevTopKey = null;
    }

    // Collapse burst on phase edge.
    if (game.phase === 'collapse' && tower.prevPhase !== 'collapse') {
      const topY = (blocks.length || 1) * BLOCK_H;
      burstSparks(0, topY + 1, 0, '#D5472F', 30, 1.7);
      puffDust(0, topY * 0.6, 0, '#B9A88A', 18, 1.8);
      flashAt(0, topY, 5, '#D5472F', 150, 0.6);
      spawnRing(rings, 0, 0.2, 0, '#D5472F', 1, 16, 0.9);
      setStageFx('collapse');
    } else if (game.phase !== 'collapse' && tower.prevPhase === 'collapse') {
      setStageFx(id);
    }
    tower.prevPhase = game.phase;
    if (id !== tower.prevEffectId) {
      if (id) {
        burstSparks(0, (blocks.length || 1) * BLOCK_H + 1, 0, '#E3A33B', 12, 1);
        spawnRing(rings, 0, (blocks.length || 1) * BLOCK_H, 0, '#E3A33B', 0.8, 6, 0.6);
      }
      tower.prevEffectId = id;
      if (game.phase !== 'collapse') setStageFx(id);
    }
    return (blocks.length || 1) * BLOCK_H;
  }

  function syncHostBoard(view, dt) {
    const game = view.game;
    const players = game.remotePlayers || [];
    while (towers.length > players.length) {
      const extra = towers.pop();
      scene.remove(extra.group);
    }
    const spacing = clamp(46 / Math.max(1, players.length), 10, 20);
    const squeeze = clamp((spacing - 3) / WORLD_W, 0.16, 1);
    let maxTop = 8;
    players.forEach((player, index) => {
      const tower = towers[index] || makeTower();
      tower.group.position.x = (index - (players.length - 1) / 2) * spacing;
      tower.group.scale.x = squeeze;
      const blocks = player.blocks || [];
      const effect = (game.remoteEffects || []).find(item => item.targetPlayerId === player.playerId || item.targetPlayerId == null) || null;
      const { id, elapsed } = effectProps(effect);
      const collapsing = new Set();
      syncBlocks(tower, blocks, { collapsingLevels: collapsing });
      const below = blocks.length ? blocks[blocks.length - 1] : null;
      const moving = player.moving;
      let movingYOffset = 0;
      if (id === 'rollercoaster' && moving && !reducedMotion) {
        movingYOffset = -Core().rollercoasterOffset(elapsed, Number(moving.rollerPhase) || 0) * S;
      }
      syncMover(tower, {
        moving,
        showMoving: Boolean(moving) && !player.ended && !player.collapsed && !player.disconnected,
        moverVisible: Boolean(moving) && !(id === 'peekaboo' && !reducedMotion && Core().peekabooOpacity(elapsed) < 0.5),
        movingYOffset,
        effect, below,
        belowWidth: below ? below.right - below.left : 0,
        drunkMultiplier: 1
      }, dt);
      syncTowerEffect(tower, {
        effect, moving, below, blocks, movingYOffset, voting: Boolean(game.vote), autoRemaining: null, autoTotal: 1
      }, dt);
      syncActorMeshes(tower, []);
      const topY = (blocks.length || 1) * BLOCK_H;
      maxTop = Math.max(maxTop, topY);
      const status = player.disconnected ? ' · OFFLINE' : player.collapsed ? ' · COLLAPSED' : player.ended ? ' · FINISHED' : '';
      const plateText = `${String(player.name || 'Player').slice(0, 9)} · ${player.height || 0}${status}`;
      if (!tower.nameplate || tower.labelFor !== plateText) {
        if (tower.nameplate) scene.remove(tower.nameplate);
        // Nameplates live on the scene (not the squeezed tower group) so text keeps its aspect.
        tower.nameplate = makeLabelSprite(plateText, { big: true, bg: 'rgba(10,14,30,.82)' });
        tower.labelFor = plateText;
        scene.add(tower.nameplate);
      }
      tower.nameplate.position.set(tower.group.position.x, topY + 4.2, 0);
    });
    return maxTop;
  }

  // ---- stage DOM accents --------------------------------------------------------------------
  let currentStageFx = '';
  function setStageFx(id) {
    if (!stage) return;
    const next = id || '';
    if (next !== currentStageFx) {
      stage.dataset.fx3d = next;
      currentStageFx = next;
    }
  }

  // ---- main render --------------------------------------------------------------------------
  function render(view) {
    if (!active || !renderer || !view || !view.game) return active;
    try {
      const dt = clamp(Number(view.dt) || 0, 0, 0.1);
      clock += dt;
      reducedMotion = Boolean(view.reducedMotion);
      if (view.theme && view.theme !== theme) setTheme(view.theme);
      const game = view.game;
      if (game !== lastGameRef) {
        lastGameRef = game;
        if (game && game.phase === 'playing' && towers[0]) towers[0].prevTopKey = towers[0].topKey;
      }
      for (const tower of towers) {
        if (tower.fxTheme !== theme) resetTowerFx(tower);
      }
      const hostBoard = Boolean(game.multiplayer && game.mode === 'competitive' && view.role && view.role !== 'player');
      const topY = hostBoard ? syncHostBoard(view, dt) : syncSingle(view, dt);
      updateCamera(dt, view, topY, hostBoard);
      updateParticles(sparks, dt);
      updateParticles(dustPuffs, dt);
      updateConfetti(confetti, dt);
      updateRings(rings, dt);
      updateFlashLights(dt);
      if (env.dust) {
        env.dust.points.rotation.y = clock * 0.012;
        updateParticles(env.dust, reducedMotion ? 0 : dt * 0.25);
      }
      if (env.embers) {
        updateParticles(env.embers, reducedMotion ? 0 : dt);
        if (!reducedMotion && Math.random() < 0.2) {
          spawnParticle(env.embers, (Math.random() - 0.5) * 90, -1, (Math.random() - 0.5) * 40, {
            vx: (Math.random() - 0.5) * 0.5, vy: 0.7 + Math.random(), vz: (Math.random() - 0.5) * 0.4,
            life: 5 + Math.random() * 5, color: Math.random() > 0.5 ? '#FFC53D' : '#FF7A45', twinkle: 1
          });
        }
      }
      if (env.stars) env.stars.rotation.y = clock * 0.004;
      for (const cone of env.searchlights) {
        cone.rotation.z = (cone.position.x > 0 ? 0.5 : -0.5) + Math.sin(clock * 0.22 + cone.position.x) * 0.35;
      }
      renderer.render(scene, camera);
      failures = 0;
      return true;
    } catch (error) {
      failures += 1;
      if (failures >= 4) {
        try { console.warn('SabotageStack3D disabled itself after render failures:', error); } catch (_) { /* console optional */ }
        stop();
      }
      return false;
    }
  }

  function resize() {
    if (!active || !renderer || !canvas) return;
    const width = Math.max(2, canvas.clientWidth || 360);
    const height = Math.max(2, canvas.clientHeight || 520);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function setTheme(name) {
    theme = name === 'sunset' || name === 'primetime' ? name : 'paper';
    if (!scene) return;
    buildEnvironment();
  }

  function setReducedMotion(flag) {
    reducedMotion = Boolean(flag);
  }

  function reset() {
    lastGameRef = null;
    for (const tower of towers) {
      tower.prevTopKey = null;
      tower.prevPhase = null;
      tower.prevEffectId = '';
      tower.ghostHistory = [];
      tower.settleT = 1;
    }
    cam.intro = 1;
    cam.distBoost = 0;
    if (sparks) {
      for (const p of sparks.particles) p.life = 0;
      for (const p of dustPuffs.particles) p.life = 0;
      for (const item of confetti.items) item.life = 0;
      for (const ring of rings) ring.life = 0;
    }
    setStageFx('');
  }

  // ---- lifecycle ---------------------------------------------------------------------------
  function start() {
    if (active) return true;
    if (failed || started && !renderer) return active;
    started = true;
    try {
      // Probe WebGL BEFORE evaluating the vendored blob: headless test environments and
      // browsers without WebGL should never pay for (or touch) the 700 KB library.
      if (!webglSupported()) return false;
      if (!root.THREE && !loadVendor()) return false;
      THREE = root.THREE;
      stage = document.getElementById('game-stage');
      canvas = document.getElementById('game-canvas-3d');
      if (!stage || !canvas) return false;
      renderer = new THREE.WebGLRenderer({
        canvas, antialias: true, alpha: false, powerPreference: 'high-performance',
        stencil: false
      });
      renderer.setPixelRatio(Math.min(2, Number(root.devicePixelRatio) || 1));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, 360 / 520, 0.5, 520);
      fallingRoot = new THREE.Group();
      scene.add(fallingRoot);
      buildEnvironment();
      ensureFxSystems();
      canvas.addEventListener('webglcontextlost', event => {
        event.preventDefault();
        stop();
      }, false);
      resize();
      active = true;
      canvas.hidden = false;
      if (stage) stage.classList.add('is-3d');
      return true;
    } catch (error) {
      failed = true;
      try { console.warn('SabotageStack3D could not start; using the 2D stage.', error); } catch (_) { /* console optional */ }
      teardown();
      return false;
    }
  }

  function stop() {
    active = false;
    if (canvas) canvas.hidden = true;
    if (stage) stage.classList.remove('is-3d');
  }

  function teardown() {
    stop();
    try {
      clearTowers();
      disposeEnvironment();
      if (renderer) renderer.dispose();
    } catch (_) { /* teardown must never throw */ }
    renderer = null;
    scene = null;
    camera = null;
  }
})(typeof window === 'object' && window ? window : globalThis);
