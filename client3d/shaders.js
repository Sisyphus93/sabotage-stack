import { Vector4 } from 'three';

// Post-processing shaders. Pass A runs in linear HDR (blur, distortion, pixelation); pass B runs after tone mapping in
// display space (vignette, grain, dithering, scanlines, fades).

export const passAShader = {
  name: 'StackFinishA',
  uniforms: {
    tDiffuse: { value: null },
    uRes: { value: [1, 1] },
    uTime: { value: 0 },
    uTiltCenter: { value: 0.52 },
    uTiltRange: { value: 0.18 },
    uBlur: { value: 0 },
    uCA: { value: 0 },
    uWobble: { value: 0 },
    uPixel: { value: 0 },
    uZoomBlur: { value: 0 },
    uDesat: { value: 0 },
    uTint: { value: [1, 1, 1] },
    uFlash: { value: 0 },
    uFlashColor: { value: [1, 0.95, 0.8] }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime, uTiltCenter, uTiltRange, uBlur, uCA, uWobble, uPixel, uZoomBlur, uDesat, uFlash;
    uniform vec3 uTint, uFlashColor;
    varying vec2 vUv;
    #define TAPS 12
    vec3 tap(vec2 uv) { return texture2D(tDiffuse, clamp(uv, vec2(0.001), vec2(0.999))).rgb; }
    void main() {
      vec2 uv = vUv;
      if (uWobble > 0.0) {
        float w = uWobble;
        uv += w * 0.006 * vec2(sin(uv.y * 16.0 + uTime * 2.1) + 0.5 * sin(uv.y * 41.0 - uTime * 3.3), cos(uv.x * 13.0 + uTime * 1.7));
      }
      if (uPixel > 0.5) {
        vec2 cell = uRes / uPixel;
        uv = (floor(uv * cell) + 0.5) / cell;
      }
      vec2 dir = uv - 0.5;
      float band = abs(uv.y - uTiltCenter);
      float amount = uBlur * smoothstep(uTiltRange, uTiltRange + 0.34, band);
      vec3 col;
      if (amount > 0.35) {
        col = vec3(0.0);
        for (int i = 0; i < TAPS; i++) {
          float r = sqrt((float(i) + 0.5) / float(TAPS));
          float a = float(i) * 2.39996323;
          col += tap(uv + vec2(cos(a), sin(a)) * r * amount / uRes);
        }
        col /= float(TAPS);
      } else if (uCA > 0.0) {
        col = vec3(tap(uv + dir * uCA).r, tap(uv).g, tap(uv - dir * uCA).b);
      } else {
        col = tap(uv);
      }
      if (uCA > 0.0 && amount > 0.35) {
        vec2 o = dir * uCA * 1.5;
        col.r = mix(col.r, tap(uv + o).r, 0.6);
        col.b = mix(col.b, tap(uv - o).b, 0.6);
      }
      if (uZoomBlur > 0.0) {
        vec3 acc = col; float n = 1.0;
        for (int i = 1; i < 6; i++) { acc += tap(uv - dir * uZoomBlur * float(i) * 0.045); n += 1.0; }
        col = acc / n;
      }
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, vec3(luma) * vec3(0.86, 0.95, 1.1), uDesat);
      col *= uTint;
      col += uFlashColor * uFlash;
      gl_FragColor = vec4(col, 1.0);
    }
  `
};

export const passBShader = {
  name: 'StackFinishB',
  uniforms: {
    tDiffuse: { value: null },
    uRes: { value: [1, 1] },
    uTime: { value: 0 },
    uVignette: { value: 0.3 },
    uGrain: { value: 0.04 },
    uLevels: { value: 0 },
    uPixel: { value: 1 },
    uScan: { value: 0 },
    uFade: { value: 0 },
    uFadeColor: { value: [0, 0, 0] },
    uAspect: { value: 1 },
    uLift: { value: [0, 0, 0] },
    uSat: { value: 1 },
    uContrast: { value: 1 },
    uVeilColor: { value: [0.1, 0.1, 0.1] },
    uSpot: { value: Array.from({ length: 6 }, () => new Vector4(0, 0, 0, 0)) },
    uSpotRect: { value: Array.from({ length: 6 }, () => new Vector4(0, 0, 1, 1)) }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime, uVignette, uGrain, uLevels, uPixel, uScan, uFade, uAspect, uSat, uContrast;
    uniform vec3 uFadeColor, uLift, uVeilColor;
    uniform vec4 uSpot[6];
    uniform vec4 uSpotRect[6];
    varying vec2 vUv;
    float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
    float bayer4(vec2 p) {
      vec2 q = mod(floor(p), 4.0);
      float i = q.x + q.y * 4.0;
      // 4x4 ordered-dither matrix (0..15)/16
      float m = 0.0;
      if (i < 0.5) m = 0.0; else if (i < 1.5) m = 8.0; else if (i < 2.5) m = 2.0; else if (i < 3.5) m = 10.0;
      else if (i < 4.5) m = 12.0; else if (i < 5.5) m = 4.0; else if (i < 6.5) m = 14.0; else if (i < 7.5) m = 6.0;
      else if (i < 8.5) m = 3.0; else if (i < 9.5) m = 11.0; else if (i < 10.5) m = 1.0; else if (i < 11.5) m = 9.0;
      else if (i < 12.5) m = 15.0; else if (i < 13.5) m = 7.0; else if (i < 14.5) m = 13.0; else m = 5.0;
      return m / 16.0 - 0.5;
    }
    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      col += uLift;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, uSat);
      col = (col - 0.5) * uContrast + 0.5;
      // Spotlight sabotage: everything inside a spot's rectangle is hidden by an opaque veil except its soft-edged circles of light.
      // Spots that share a rectangle light it together (the veil is laid once, over the union of their holes).
      float veiled = 0.0; float lit = 0.0; float rimSum = 0.0;
      for (int i = 0; i < 6; i++) {
        vec4 sp = uSpot[i];
        if (sp.w > 0.5) {
          vec4 rc = uSpotRect[i];
          if (vUv.x >= rc.x && vUv.x <= rc.z && vUv.y >= rc.y && vUv.y <= rc.w) {
            vec2 d = (vUv - sp.xy) * vec2(uAspect, 1.0);
            float dist = length(d);
            float hole = 1.0 - smoothstep(sp.z * 0.985, sp.z * 1.02, dist);
            float rim = smoothstep(sp.z * 0.93, sp.z, dist) * (1.0 - smoothstep(sp.z, sp.z * 1.05, dist));
            veiled = 1.0; lit = max(lit, hole); rimSum += rim;
          }
        }
      }
      col = mix(col, mix(uVeilColor, col, lit), veiled);
      col += min(rimSum, 1.0) * veiled * vec3(1.0, 0.78, 0.25) * 0.6;
      vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
      float vig = 1.0 - uVignette * smoothstep(0.25, 1.05, length(p) * 1.35);
      col *= vig;
      if (uLevels > 1.5) {
        vec2 virtualPx = floor(vUv * uRes / max(1.0, uPixel));
        col = floor(col * (uLevels - 1.0) + 0.5 + bayer4(virtualPx) * 0.55) / (uLevels - 1.0);
      }
      if (uScan > 0.0) {
        float line = 0.5 + 0.5 * sin(vUv.y * uRes.y / max(1.0, uPixel) * 3.14159265);
        col *= 1.0 - uScan * (1.0 - line);
      }
      col += (hash(vUv * uRes + fract(uTime) * 91.7) - 0.5) * uGrain;
      col = mix(col, uFadeColor, uFade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `
};
