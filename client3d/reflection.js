// Floor reflections: the plinth the tower stands on is a mirror. Everything that stands on it (the tower and the bricks it throws,
// the title, the ring of icons, the lettering) is drawn again, upside down, into a small off-screen picture (three's Reflector does
// the mirrored camera and the oblique clipping), which the floor shows softened and fading towards its rim. The sky, the crowd and
// the far decor are left out of the mirror, so it costs little. How sharp it is depends on the quality tier (0: off).
import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

const STRENGTH = { paper: 0.82, sunset: 0.86, primetime: 0.92 };
const SHADER = {
  name: 'FloorMirror',
  uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null }, uStrength: { value: 0.3 }, uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) }, uRadius: { value: 250 } },
  vertexShader: /* glsl */`
    uniform mat4 textureMatrix; varying vec4 vUv; varying vec2 vFloor;
    void main() { vUv = textureMatrix * vec4(position, 1.0); vFloor = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    uniform vec3 color; uniform sampler2D tDiffuse; uniform float uStrength; uniform vec2 uTexel; uniform float uRadius; varying vec4 vUv; varying vec2 vFloor;
    void main() {
      vec2 uv = vUv.xy / vUv.w; vec4 c = texture2D(tDiffuse, uv) * 0.36;
      c += texture2D(tDiffuse, uv + vec2(uTexel.x * 2.0, 0.0)) * 0.16 + texture2D(tDiffuse, uv - vec2(uTexel.x * 2.0, 0.0)) * 0.16;
      c += texture2D(tDiffuse, uv + vec2(0.0, uTexel.y * 2.0)) * 0.16 + texture2D(tDiffuse, uv - vec2(0.0, uTexel.y * 2.0)) * 0.16;
      float r = length(vFloor) / uRadius; float fade = 1.0 - 0.55 * smoothstep(0.3, 1.0, r); float edge = 1.0 - smoothstep(0.93, 0.99, r); // strongest at the foot of what stands there, a ghost at the rim
      gl_FragColor = vec4(c.rgb * color * 1.22, clamp(c.a, 0.0, 1.0) * uStrength * fade * edge);
    }`
};

export class FloorMirror {
  // hide: the objects that are left out of the mirror (sky, crowd, ground, decor)
  constructor(theme, palette, { hide = [], radius = 250 } = {}) {
    this.theme = theme; this.hide = hide; this.scale = 0; this.radius = radius; this.size = [0, 0];
    const geometry = new THREE.CircleGeometry(radius - 4, 96); geometry.rotateX(-Math.PI / 2);
    this.mirror = new Reflector(geometry, { textureWidth: 256, textureHeight: 256, clipBias: 0.02, color: 0xffffff, multisample: 0, shader: SHADER });
    const mesh = this.mirror; mesh.name = 'floor-mirror'; mesh.position.y = 0.6; mesh.renderOrder = 2;
    mesh.material.transparent = true; mesh.material.depthWrite = false; mesh.material.polygonOffset = true; mesh.material.polygonOffsetFactor = -3; mesh.material.polygonOffsetUnits = -3;
    mesh.material.uniforms.uStrength.value = STRENGTH[theme] || 0.3; mesh.material.uniforms.uRadius.value = radius - 4;
    const before = mesh.onBeforeRender; const keep = new THREE.Color();
    mesh.onBeforeRender = (renderer, scene, camera) => {
      if (!this.scale) return;
      const alpha = renderer.getClearAlpha(); renderer.getClearColor(keep); renderer.setClearColor(0x000000, 0); // a clear picture, so only what stands on the floor is in it
      const hidden = this.hide.filter(o => o && o.visible); for (const o of hidden) o.visible = false;
      before.call(mesh, renderer, scene, camera);
      for (const o of hidden) o.visible = true; renderer.setClearColor(keep, alpha);
    };
    mesh.visible = false; this.mesh = mesh;
  }

  // scale: 0 switches the mirror off, else the size of its picture as a fraction of the screen's
  setQuality(scale, width, height) {
    this.scale = scale; this.mesh.visible = scale > 0; if (!scale) return;
    const w = Math.max(64, Math.round(width * scale)); const h = Math.max(64, Math.round(height * scale));
    if (w !== this.size[0] || h !== this.size[1]) { this.size = [w, h]; this.mirror.getRenderTarget().setSize(w, h); this.mirror.material.uniforms.uTexel.value.set(1 / w, 1 / h); }
  }
  dispose() { this.mirror.getRenderTarget().dispose(); this.mirror.geometry.dispose(); this.mirror.material.dispose(); if (this.mirror.parent) this.mirror.parent.remove(this.mirror); }
}
