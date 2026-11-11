// Phase 2 sandbox: 16 effects x (3 themes @390x844 + paper @1280x800) screenshots, then per-frame canvas sampling
// (luminance change + "does the static tower region move") with and without prefers-reduced-motion.
const { launch, ctx, watch, shot, save, sleep, URL, THEMES, AUDIT } = require('./lib');
const path = require('path');
const out = { console: [], meta: {}, shots: [], sample: {}, sampleReduced: {}, sabotages: null, devText: {}, devTextReduced: {} };

// In-page: sample the game canvas every rAF for `ms`, downscaled to 72x104, return compact per-frame stats.
function sampleFrames(ms) {
  return new Promise(resolve => {
    const src = document.getElementById('game-canvas');
    const W = 72, H = 104, N = W * H; const off = document.createElement('canvas'); off.width = W; off.height = H;
    const cx = off.getContext('2d', { willReadFrequently: true });
    const lut = new Float32Array(256); for (let i = 0; i < 256; i++) { const v = i / 255; lut[i] = v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    const row0 = Math.floor(H * 0.68); const towerN = (H - row0) * W;
    let prev = null; const frames = []; const t0 = performance.now(); let last = t0;
    function step(now) {
      cx.drawImage(src, 0, 0, W, H);
      const d = cx.getImageData(0, 0, W, H).data; const L = new Float32Array(N); let mean = 0;
      for (let i = 0, j = 0; i < d.length; i += 4, j++) { const l = 0.2126 * lut[d[i]] + 0.7152 * lut[d[i + 1]] + 0.0722 * lut[d[i + 2]]; L[j] = l; mean += l; }
      mean /= N;
      if (prev) {
        let n = 0, up = 0, any = 0, tower = 0;
        for (let j = 0; j < N; j++) {
          const dl = L[j] - prev[j]; const ad = dl < 0 ? -dl : dl;
          if (ad >= 0.1 && Math.min(L[j], prev[j]) < 0.8) { n++; if (dl > 0) up++; }
          if (ad > 0.02) { any++; if (((j / W) | 0) >= row0) tower++; }
        }
        frames.push([Math.round((now - last) * 10) / 10, n / N, up / Math.max(1, n), any / N, tower / towerN, mean]);
      }
      prev = L; last = now;
      if (now - t0 < ms) requestAnimationFrame(step); else resolve(frames);
    }
    requestAnimationFrame(step);
  });
}
function analyse(frames, cssArea) {
  const dur = frames.reduce((s, f) => s + f[0], 0) / 1000;
  const thrWcag = Math.min(1, 21824 / cssArea); // 25% of a 10-degree field (341x256 CSS px) as a share of the displayed canvas
  const pairsPerSec = thr => {
    const ev = []; let t = 0;
    for (const f of frames) { t += f[0]; if (f[1] >= thr) ev.push({ t, sign: f[2] >= 0.5 ? 1 : -1 }); }
    let best = 0;
    for (let i = 0; i < ev.length; i++) {
      let pairs = 0; let prevSign = ev[i].sign;
      for (let j = i + 1; j < ev.length && ev[j].t - ev[i].t <= 1000; j++) { if (ev[j].sign !== prevSign) { pairs += 0.5; prevSign = ev[j].sign; } }
      best = Math.max(best, Math.floor(pairs + 0.5));
    }
    return { events: ev.length, maxFlashesIn1s: best };
  };
  const means = frames.map(f => f[5]);
  const q = (arr, p) => { const s = arr.slice().sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; };
  return {
    frames: frames.length, seconds: Math.round(dur * 100) / 100, fps: Math.round(frames.length / dur),
    maxChangedArea: Math.round(Math.max(...frames.map(f => f[1])) * 1000) / 1000,
    p95ChangedArea: Math.round(q(frames.map(f => f[1]), 0.95) * 1000) / 1000,
    wcagAreaThreshold: Math.round(thrWcag * 1000) / 1000,
    flashWcagArea: pairsPerSec(thrWcag), flashQuarterCanvas: pairsPerSec(0.25), flashLocal1pct: pairsPerSec(0.01),
    meanLumMin: Math.round(Math.min(...means) * 1000) / 1000, meanLumMax: Math.round(Math.max(...means) * 1000) / 1000,
    anyMotionMean: Math.round(frames.reduce((s, f) => s + f[3], 0) / frames.length * 1000) / 1000,
    towerMovingFrames: Math.round(frames.filter(f => f[4] > 0.015).length / frames.length * 100) / 100,
    towerMotionMean: Math.round(frames.reduce((s, f) => s + f[4], 0) / frames.length * 1000) / 1000
  };
}
async function openDev(page) {
  await page.goto(URL); await sleep(500);
  await page.click('#dev-mode-button');
  await page.waitForFunction(() => document.body.dataset.screen === 'game' && !document.getElementById('dev-panel').hidden, null, { timeout: 6000 });
  await sleep(400);
}
const pick = (page, id) => page.evaluate(i => { const b = document.querySelector(`.dev-effect-button[data-dev-effect="${i}"]`); if (!b) return false; b.click(); return true; }, id);
const devText = page => page.evaluate(() => ({ desc: document.getElementById('dev-effect-description').textContent.trim(), chip: document.getElementById('motion-chip').textContent.trim(), name: document.getElementById('effect-name').textContent.trim(), caption: document.getElementById('effect-caption').textContent.trim(), feedback: document.getElementById('dev-feedback').textContent.trim(), panel: document.getElementById('dev-panel-description').textContent.trim(), hint: document.getElementById('canvas-hint').textContent.trim() }));

(async () => {
  const browser = await launch();
  // ---- A. screenshots
  const variants = [...THEMES.map(t => [t, '390x844']), ['paper', '1280x800']];
  let ids = null;
  for (const [theme, vp] of variants) {
    const c = await ctx(browser, { theme, vp, touch: vp.startsWith('3') });
    const page = await c.newPage(); watch(page, `sandbox_${theme}_${vp}`, out.console);
    await openDev(page);
    if (!ids) {
      ids = await page.evaluate(() => window.SabotageStack.Core.SABOTAGE_IDS.slice());
      out.sabotages = await page.evaluate(() => JSON.parse(JSON.stringify(window.SabotageStack.sabotages)));
      out.meta.devButtons = await page.evaluate(() => Array.from(document.querySelectorAll('.dev-effect-button')).map(b => ({ id: b.dataset.devEffect, label: b.getAttribute('aria-label'), text: b.textContent.trim().slice(0, 40), w: Math.round(b.getBoundingClientRect().width), h: Math.round(b.getBoundingClientRect().height) })));
      out.meta.devReach = 'title #dev-mode-button visible: ' + await page.evaluate(() => Boolean(document.getElementById('dev-mode-button')));
    }
    await shot(page, `sandbox-panel_${theme}_${vp}`, { fullPage: true });
    for (const id of ['normal', ...ids]) {
      if (!(await pick(page, id))) { out.shots.push({ id, theme, vp, error: 'no button' }); continue; }
      await sleep(1300);
      await page.locator('#game-stage').screenshot({ path: path.join(AUDIT, 'screenshots', `sandbox-${id}_${theme}_${vp}.png`) });
      if (theme === 'paper' && vp === '390x844') out.devText[id] = await devText(page);
      out.shots.push({ id, theme, vp });
    }
    if (theme === 'paper' && vp === '390x844') await shot(page, `sandbox-view_${theme}_${vp}`);
    await c.close();
    console.log('shots', theme, vp);
  }
  // ---- B. frame sampling, normal motion then reduced motion (paper, 390x844)
  for (const reduced of [false, true]) {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', reducedMotion: reduced, touch: true });
    const page = await c.newPage(); watch(page, `sample_${reduced ? 'reduced' : 'normal'}`, out.console);
    await openDev(page);
    const rect = await page.evaluate(() => { const r = document.getElementById('game-canvas').getBoundingClientRect(); return { w: r.width, h: r.height, mm: matchMedia('(prefers-reduced-motion: reduce)').matches, anims: document.getAnimations().filter(a => a.playState === 'running').length }; });
    out.meta[reduced ? 'reducedCtx' : 'normalCtx'] = rect;
    for (const id of ['normal', ...ids]) {
      await pick(page, id); await sleep(700);
      const frames = await page.evaluate(sampleFrames, 3200);
      const a = analyse(frames, rect.w * rect.h);
      (reduced ? out.sampleReduced : out.sample)[id] = a;
      if (reduced) {
        out.devTextReduced[id] = await devText(page);
        await page.locator('#game-stage').screenshot({ path: path.join(AUDIT, 'screenshots', `sandbox-${id}_paper-reducedmotion_390x844.png`) });
      } else if (['portal', 'rollercoaster', 'pisa', 'earthquake', 'spotlight', 'peekaboo', 'zoom', 'double'].includes(id)) {
        for (let k = 0; k < 6; k++) { await page.locator('#game-canvas').screenshot({ path: path.join(AUDIT, 'screenshots', `seq-${id}-${k}_paper_390x844.png`) }); await sleep(60); }
      }
    }
    await c.close();
    console.log('sampled', reduced ? 'reduced' : 'normal');
  }
  await browser.close();
  save('sandbox.json', out);
  console.log('SANDBOX COMPLETE; console entries', out.console.length);
})().catch(e => { console.error('FATAL', e); save('sandbox.json', out); process.exit(1); });
