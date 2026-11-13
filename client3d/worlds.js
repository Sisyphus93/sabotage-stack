// The three worlds. Each is a self-contained group (sky, lights, set dressing, crowd) built from the theme palette.
// The shared contract: world.update({ time, dt, focusY, altitude, dim, camera }) every frame, world.dispose() on theme change.
import * as THREE from 'three';
import { createSky, createEnvironment, createPlinth, createGround, createMotes, cloudShape, hillGeometry, colorOf } from './world-common.js';
import { Crowd } from './audience.js';
import { backdropYaw } from './orbit.js';
import { rng, TAU, lerp, mod, clamp, smoothstep, fbm1 } from './util.js';

const mix3 = (a, b, t) => a.clone().lerp(b, t);

function makeLights(palette, theme) {
  const group = new THREE.Group();
  const key = new THREE.DirectionalLight(colorOf(palette.key), theme === 'paper' ? 2.3 : theme === 'sunset' ? 2.4 : 3.0);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0007; key.shadow.normalBias = 0.6; key.shadow.radius = theme === 'paper' ? 5 : 2.5;
  const s = 560; Object.assign(key.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 20, far: 2600 });
  key.position.set(-420, 640, 760); key.target.position.set(0, 0, 0);
  const hemi = new THREE.HemisphereLight(colorOf(palette.fill), colorOf(palette.ground), theme === 'paper' ? 0.6 : 0.85);
  const rim = new THREE.DirectionalLight(colorOf(palette.rim), theme === 'paper' ? 0.8 : 2.2);
  rim.position.set(520, 260, -640);
  const front = new THREE.DirectionalLight(colorOf(palette.fill), theme === 'paper' ? 0.35 : 0.55);
  front.position.set(120, 120, 900);
  group.add(key, key.target, hemi, rim, front);
  return { group, key, hemi, rim, front };
}

// ---------------------------------------------------------------------------------------------------------------------
function paperDecor(root, palette, ctx) {
  const random = rng(3);
  const decor = new THREE.Group(); decor.name = 'decor'; root.add(decor);
  const disposables = [];
  // layered paper-cut hills; slightly lit from the front so each ridge reads as a separate card
  const layers = [];
  palette.hills.forEach((color, i) => {
    const geo = hillGeometry({ width: 9000 + i * 1800, base: -150 + i * 40, amp: 220 - i * 22, freq: 0.00085 + i * 0.0002, seed: i * 3 + 1, bottom: -1200 });
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, emissive: color, emissiveIntensity: 0.16, fog: true });
    const mesh = new THREE.Mesh(geo, mat); mesh.position.set(0, -60 - i * 6, -1100 - i * 760); mesh.receiveShadow = false;
    decor.add(mesh); layers.push(mesh); disposables.push(geo, mat);
  });
  // paper-cut clouds in thick layers, wrapped around the camera's altitude
  const cloudGeos = [1, 2, 3, 4].map(seed => { const g = new THREE.ExtrudeGeometry(cloudShape(seed), { depth: 0.22, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2, curveSegments: 6 }); g.center(); return g; });
  const cloudMat = new THREE.MeshStandardMaterial({ color: '#FFFDF6', roughness: 0.95, emissive: '#FFF0D2', emissiveIntensity: 0.16, fog: true });
  const clouds = [];
  const period = 3200;
  for (let i = 0; i < 30; i += 1) {
    const mesh = new THREE.Mesh(cloudGeos[i % 4], cloudMat);
    const depth = -650 - random() * 2300; const scale = 34 + random() * 60 + (-depth) * 0.022;
    mesh.userData = { x: (random() - 0.5) * 3600, y: random() * period, z: depth, speed: 4 + random() * 9, scale };
    mesh.scale.set(scale, scale, scale * 0.5); mesh.castShadow = false; mesh.receiveShadow = false;
    decor.add(mesh); clouds.push(mesh);
  }
  disposables.push(...cloudGeos, cloudMat);
  // big paper sun-ray fan behind everything, very faint
  const rays = new THREE.Mesh(new THREE.CircleGeometry(4200, 48, 0, TAU), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: 'varying vec2 vP; uniform float uTime; void main(){ float a = atan(vP.y, vP.x); float r = length(vP)/4200.; float s = smoothstep(.35,.5,.5+.5*sin(a*14.+uTime*.05)); gl_FragColor = vec4(1.,.93,.75, s*.1*(1.-r)*smoothstep(0.,.25,r)); }'
  }));
  rays.position.set(-1200, 500, -3600); rays.renderOrder = -50; decor.add(rays); disposables.push(rays.geometry, rays.material);
  return {
    group: decor,
    update({ time, focusY, altitude, dim }) {
      for (const c of clouds) {
        const u = c.userData; const wrapped = mod(u.y - focusY * 0.62 + period / 2, period) - period / 2;
        c.position.set(u.x + time * u.speed * 0.4, focusY + wrapped, u.z);
        c.visible = true;
      }
      cloudMat.emissiveIntensity = 0.16 * (1 - altitude * 0.7); cloudMat.color.set('#FFFDF6').lerp(new THREE.Color('#7f8fb8'), clamp(altitude * 1.2 - 0.2, 0, 0.85));
      layers.forEach((m, i) => { m.position.y = -60 - i * 6 - focusY * (0.2 + i * 0.09); m.material.emissiveIntensity = 0.16 * (1 - altitude * 0.8) * dim; });
      rays.material.uniforms.uTime.value = time; rays.position.y = 500 + focusY * 0.3; rays.material.opacity = 1 - altitude;
    },
    dispose() { for (const d of disposables) d.dispose(); root.remove(decor); }
  };
}

// ---------------------------------------------------------------------------------------------------------------------
function sunsetDecor(root, palette) {
  const decor = new THREE.Group(); root.add(decor);
  const disposables = [];
  const ridges = [];
  const colors = [['#2a0b52', '#FF4FD8'], ['#1d0840', '#7a3cff'], ['#13052c', '#2EC4B6']];
  colors.forEach(([fill, line], i) => {
    const geo = hillGeometry({ width: 9000, base: 20 + i * 10, amp: 520 - i * 120, freq: 0.0011 + i * 0.0004, seed: 9 + i * 2, step: 220, bottom: -1000 });
    const mat = new THREE.MeshBasicMaterial({ color: fill, fog: true });
    const mesh = new THREE.Mesh(geo, mat); mesh.position.set(0, -52, -2600 + i * 700);
    // neon ridge line
    const points = []; const pos = geo.attributes.position;
    for (let k = 1; k < pos.count; k += 1) { if (pos.getY(k) > -900 && pos.getY(k) < 2000) points.push(new THREE.Vector3(pos.getX(k), pos.getY(k), 0.5)); }
    points.sort((a, b) => a.x - b.x);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points.filter((p, idx) => idx % 1 === 0));
    const lineMat = new THREE.LineBasicMaterial({ color: line, transparent: true, opacity: 0.9, fog: true });
    mesh.add(new THREE.Line(lineGeo, lineMat));
    decor.add(mesh); ridges.push(mesh); disposables.push(geo, mat, lineGeo, lineMat);
  });
  // floating neon pyramids + a ring: the 1994 clip-art cosmos
  const shapes = [];
  const pyramidGeo = new THREE.ConeGeometry(1, 1.4, 4, 1, true).toNonIndexed();
  const edgeGeo = new THREE.EdgesGeometry(new THREE.ConeGeometry(1, 1.4, 4));
  const random = rng(8);
  for (let i = 0; i < 16; i += 1) {
    const mat = new THREE.LineBasicMaterial({ color: ['#FF4FD8', '#2EC4B6', '#FFC53D', '#9B5DE5'][i % 4], transparent: true, opacity: 0.85 });
    const m = new THREE.LineSegments(i % 5 === 4 ? new THREE.EdgesGeometry(new THREE.TorusGeometry(1, 0.12, 6, 14)) : edgeGeo, mat);
    m.userData = { x: (random() - 0.5) * 3600, y: random() * 3000, z: -700 - random() * 1500, s: 36 + random() * 70, sp: 0.2 + random() * 0.6, ph: random() * TAU };
    decor.add(m); shapes.push(m); disposables.push(mat);
  }
  disposables.push(pyramidGeo, edgeGeo);
  return {
    group: decor,
    update({ time, focusY, altitude, dim }) {
      ridges.forEach((m, i) => { m.position.y = -52 - focusY * (0.22 + i * 0.12); });
      for (const s of shapes) { const u = s.userData; s.position.set(u.x, focusY * 0.55 + mod(u.y - focusY * 0.4, 3000) - 800 + Math.sin(time * u.sp + u.ph) * 24, u.z); s.rotation.set(time * u.sp * 0.7, time * u.sp, 0); s.scale.setScalar(u.s); }
    },
    dispose() { for (const d of disposables) d.dispose(); root.remove(decor); }
  };
}

// ---------------------------------------------------------------------------------------------------------------------
function primetimeDecor(root, palette) {
  const decor = new THREE.Group(); root.add(decor);
  const disposables = [];
  // giant rotating sunburst logo disc behind the stage
  const burst = new THREE.Mesh(new THREE.CircleGeometry(1500, 96), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uGold: { value: colorOf(palette.amber) }, uBlue: { value: colorOf('#2447C9') } },
    vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: /* glsl */`varying vec2 vP; uniform float uTime; uniform vec3 uGold, uBlue;
      void main(){
        float r = length(vP)/1500.; float a = atan(vP.y, vP.x);
        float rays = smoothstep(.0,.06, abs(sin(a*12.+uTime*.12))-.35);
        float ring = smoothstep(.02,.0,abs(r-.62))+smoothstep(.015,.0,abs(r-.9))*.8+smoothstep(.02,.0,abs(r-.3))*.6;
        vec3 c = mix(uBlue*.8, uGold, rays*.55+ring);
        float alpha = (1.-smoothstep(.85,1.,r))*(.1+rays*.16+ring*.22);
        gl_FragColor = vec4(c, alpha);
      }`
  }));
  burst.position.set(0, 520, -1400); decor.add(burst); disposables.push(burst.geometry, burst.material);
  // LED wall: dot matrix with scrolling chevrons
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(2600, 2600, 2800, 64, 1, true, Math.PI * 0.65, Math.PI * 0.7), new THREE.ShaderMaterial({
    side: THREE.BackSide, transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uGold: { value: colorOf(palette.amber) }, uCyan: { value: colorOf(palette.teal) }, uShift: { value: 0 } },
    vertexShader: 'varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`varying vec2 vUv; varying vec3 vW; uniform float uTime, uShift; uniform vec3 uGold, uCyan;
      void main(){
        vec2 g = vec2(vUv.x * 150., (vUv.y*2800. + uShift*.6) / 34.);
        vec2 f = fract(g) - .5; float dotm = smoothstep(.42,.2,length(f));
        float chev = abs(sin((g.x*.12 + g.y*.5 + uTime*.7)));
        float band = smoothstep(.55,.95,chev);
        vec3 c = mix(uCyan, uGold, smoothstep(.2,.8,.5+.5*sin(g.y*.08 + uTime*.4)));
        float a = dotm * (.06 + band * .5) * smoothstep(0.,.5,vUv.y) ;
        gl_FragColor = vec4(c, a);
      }`
  }));
  wall.position.set(0, 600, -200); decor.add(wall); disposables.push(wall.geometry, wall.material);
  // sweeping beam cones from a truss overhead
  const beams = [];
  const coneGeo = new THREE.ConeGeometry(1, 1, 32, 1, true); coneGeo.translate(0, -0.5, 0);
  const coneMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uColor: { value: colorOf('#FFF1CF') }, uOpacity: { value: 0.05 } },
    vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
    fragmentShader: 'varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uOpacity; void main(){ float fres = pow(abs(dot(vN,vV)),1.5); gl_FragColor = vec4(uColor, uOpacity * fres * (1.+vY) ); }'
  });
  const colorsCycle = ['#FFF1CF', '#FFC83D', '#4F7BFF', '#FF7FA8', '#35D0E8'];
  for (let i = 0; i < 7; i += 1) {
    const mat = coneMat.clone(); mat.uniforms = { uColor: { value: colorOf(colorsCycle[i % colorsCycle.length]) }, uOpacity: { value: 0.045 + (i % 3) * 0.01 } };
    const cone = new THREE.Mesh(coneGeo, mat); cone.scale.set(160, 1900, 160);
    cone.userData = { x: (i - 3) * 360, ph: i * 1.3, sp: 0.35 + (i % 3) * 0.12 };
    decor.add(cone); beams.push(cone); disposables.push(mat);
  }
  disposables.push(coneGeo, coneMat);
  // truss
  const trussMat = new THREE.MeshStandardMaterial({ color: '#0b1b5c', metalness: 0.85, roughness: 0.25, emissive: palette.amber, emissiveIntensity: 0.06 });
  const truss = new THREE.Mesh(new THREE.BoxGeometry(3400, 22, 22), trussMat); decor.add(truss);
  disposables.push(truss.geometry, trussMat);
  const bulbs = []; const bulbGeo = new THREE.SphereGeometry(7, 10, 8);
  const bulbMat = new THREE.MeshBasicMaterial({ color: palette.amber });
  for (let i = 0; i < 28; i += 1) { const b = new THREE.Mesh(bulbGeo, bulbMat); b.position.set((i - 13.5) * 120, -16, 14); truss.add(b); bulbs.push(b); }
  disposables.push(bulbGeo, bulbMat);
  return {
    group: decor,
    update({ time, focusY, altitude }) {
      burst.material.uniforms.uTime.value = time; burst.position.y = 520 + focusY * 0.82; burst.rotation.z = time * 0.02;
      wall.material.uniforms.uTime.value = time; wall.position.y = 600 + focusY * 0.9; wall.material.uniforms.uShift.value = focusY;
      truss.position.set(0, focusY + 760, -300);
      beams.forEach(b => { const u = b.userData; b.position.set(u.x, focusY + 760, -300); b.rotation.z = Math.sin(time * u.sp + u.ph) * 0.5; b.rotation.x = Math.cos(time * u.sp * 0.8 + u.ph) * 0.18; });
      bulbs.forEach((b, i) => { b.scale.setScalar(0.7 + 0.5 * Math.max(0, Math.sin(time * 4 - i * 0.55))); });
    },
    dispose() { for (const d of disposables) d.dispose(); root.remove(decor); }
  };
}

// ---------------------------------------------------------------------------------------------------------------------
export function createWorld(theme, engine, { crowdDensity = 1 } = {}) {
  const palette = engine.palette; const root = new THREE.Group();
  if (engine.scene && engine.scene.environmentRotation) engine.scene.environmentRotation.y = 0; // the scene outlives its worlds
  const lights = makeLights(palette, theme); root.add(lights.group);
  const sky = createSky(palette, theme === 'paper'
    ? { stars: 1, sunSize: 0.0035, sunDir: [-0.42, 0.16, -1], sunColor: '#FFE2A8', sunGlow: 0.75 }
    : theme === 'sunset'
      ? { stars: 1, stripedSun: true, sunSize: 0.0042, sunDir: [0.02, -0.006, -1], sunColor: '#FF8C42', sunGlow: 0.16 }
      : { stars: 0, sunSize: 0.0, sunDir: [0, 0.5, -1], sunColor: '#8CAEFF', sunGlow: 0.15 });
  sky.mesh.name = 'sky'; root.add(sky.mesh);
  const envTexture = createEnvironment(engine.renderer, palette, { boxes: theme === 'primetime'
    ? [{ w: 60, h: 30, pos: [20, 40, 30], color: '#FFF1CF', intensity: 6 }, { w: 40, h: 40, pos: [-40, 10, -20], color: '#4F7BFF', intensity: 3 }]
    : theme === 'sunset' ? [{ w: 50, h: 30, pos: [0, 10, -40], color: '#FF6B35', intensity: 3 }, { w: 40, h: 20, pos: [-30, 30, 10], color: '#9B5DE5', intensity: 2 }]
      : [{ w: 55, h: 28, pos: [-25, 38, 30], color: '#FFF4DC', intensity: 4 }, { w: 36, h: 22, pos: [35, 12, -10], color: '#CFE8EA', intensity: 1.6 }] });
  const plinth = createPlinth(theme, palette); plinth.name = 'plinth'; root.add(plinth);
  const ground = createGround(theme, palette); ground.name = 'ground'; root.add(ground);
  const motes = createMotes({ count: theme === 'paper' ? 220 : 160, color: theme === 'paper' ? '#FFE7B8' : theme === 'sunset' ? '#FF9BE8' : '#BBD0FF', size: theme === 'paper' ? 5 : 4.2, opacity: theme === 'paper' ? 0.8 : 0.9 }); motes.name = 'motes'; root.add(motes);
  const decor = theme === 'paper' ? paperDecor(root, palette) : theme === 'sunset' ? sunsetDecor(root, palette) : primetimeDecor(root, palette);
  const crowd = new Crowd(theme, palette, { max: 520, density: crowdDensity }); crowd.group.name = 'crowd'; root.add(crowd.group);

  const fog = new THREE.FogExp2(colorOf(palette.fog), palette.fogDensity);
  const tmpA = new THREE.Color(); const tmpB = new THREE.Color();
  const baseExposure = {}; let lastDim = 1; let viewYaw = 0;
  const baseKey = lights.key.intensity; const baseHemi = lights.hemi.intensity; const baseRim = lights.rim.intensity; const baseFront = lights.front.intensity;

  return {
    theme, root, lights, sky, plinth, ground, crowd, motes, envTexture, fog, palette,
    update({ time, dt, focusY, altitude, dim = 1, camera, shadowFocus = null, fogDist = 1000 }) {
      const u = sky.material.uniforms;
      u.uAltitude.value = altitude; u.uTime.value = time; u.uDim.value = dim;
      sky.mesh.position.copy(camera.position);
      // fog follows the sky journey so distant layers melt into the right colour
      const j = palette.journey; const t = clamp(altitude, 0, 1) * 3; const i0 = Math.min(2, Math.floor(t)); const f = t - i0;
      tmpA.set(palette.fog); tmpB.set(j[i0]).lerp(tmpA.clone().set(j[Math.min(3, i0 + 1)]), f);
      fog.color.copy(tmpA.set(palette.fog).lerp(tmpB, 0.12 + 0.88 * smoothstep(0.03, 0.4, altitude))).multiplyScalar(dim);
      // exp² fog scaled to the camera distance: ~8% haze at the subject, thick atmosphere far behind it, however far the camera pulls back
      fog.density = (palette.fogDensity / 0.00032) * 0.2884 / Math.max(300, fogDist) * (1 + altitude * 0.5);
      const day = 1 - altitude * (theme === 'paper' ? 0.62 : 0.4);
      lights.key.intensity = baseKey * day * dim; lights.hemi.intensity = baseHemi * (0.55 + 0.45 * day) * (0.35 + 0.65 * dim);
      lights.rim.intensity = baseRim * (1 + altitude * 0.6) * dim; lights.front.intensity = baseFront * dim;
      const f0 = shadowFocus || { x: 0, y: focusY };
      lights.key.target.position.set(f0.x, f0.y, 0);
      lights.key.position.set(f0.x - 420, f0.y + 640, 760);
      lights.key.target.updateMatrixWorld(); lights.key.updateMatrixWorld();
      ground.userData.update(time);
      motes.material.uniforms.uTime.value = time; motes.material.uniforms.uCenter.value.set(0, focusY, 0); motes.material.uniforms.uScale.value = engine.height * 0.9;
      decor.update({ time, dt, focusY, altitude, dim });
      crowd.setCenterY(focusY); crowd.update(dt, time);
      lastDim = dim;
    },
    setCrowdDensity(d) { crowd.setDensity(d); },
    // Orbit view. The stage (plinth, floor, tower, headline, icons) stays where it is while the camera circles it, and the set
    // dressing turns with the camera so that every angle is as well lit and as well composed as the default one and nothing
    // ever shows its back: the crowd galleries, the key / rim / fill lights and the reflections follow exactly; the sky and the
    // far backdrop follow with a gentle drift (backdropYaw in orbit.js), which is what depth looks like.
    // yaw 0 is the default view and renders exactly as before.
    setViewYaw(yaw) {
      if (Math.abs(yaw - viewYaw) < 1e-5) return;
      viewYaw = yaw;
      const far = backdropYaw(yaw);
      lights.group.rotation.y = yaw; crowd.group.rotation.y = yaw;
      decor.group.rotation.y = far; sky.mesh.rotation.y = far;
      ground.userData.setViewYaw(yaw);
      if (engine.scene && engine.scene.environmentRotation) engine.scene.environmentRotation.y = yaw;
    },
    get viewYaw() { return viewYaw; },
    dispose() {
      decor.dispose(); crowd.dispose(); plinth.userData.dispose(); ground.userData.dispose(); motes.userData.dispose();
      sky.mesh.geometry.dispose(); sky.material.dispose(); envTexture.dispose();
      lights.key.shadow.map && lights.key.shadow.map.dispose();
    }
  };
}
