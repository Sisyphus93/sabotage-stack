// Phase 2 frame timing: rAF interval sampling for 5 s per effect at 390x844, with CDP 4x CPU throttle (and an unthrottled baseline).
const { launch, ctx, watch, save, sleep, URL } = require('./lib');
const q = (arr, p) => { const s = arr.slice().sort((a, b) => a - b); return Math.round(s[Math.min(s.length - 1, Math.floor(p * s.length))] * 10) / 10; };
const sampler = ms => new Promise(res => { const d = []; let last = performance.now(); const t0 = last; function s(now) { d.push(now - last); last = now; if (now - t0 < ms) requestAnimationFrame(s); else res(d.slice(1)); } requestAnimationFrame(s); });
(async () => {
  const out = { console: [], throttled4x: {}, unthrottled: {}, env: { cpus: require('os').cpus().length, note: 'headless-shell, software rendering, shared 2-vCPU sandbox' } };
  const browser = await launch();
  for (const [key, rate, ms] of [['unthrottled', 1, 2500], ['throttled4x', 4, 5000]]) {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true });
    const page = await c.newPage(); watch(page, 'frametiming', out.console);
    await page.goto(URL); await sleep(400);
    await page.click('#dev-mode-button'); await sleep(700);
    const ids = await page.evaluate(() => window.SabotageStack.Core.SABOTAGE_IDS.slice());
    const cdp = await c.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate });
    for (const id of ['normal', ...ids]) {
      await page.evaluate(i => document.querySelector(`.dev-effect-button[data-dev-effect="${i}"]`).click(), id);
      await sleep(500);
      const d = await page.evaluate(sampler, ms);
      out[key][id] = { n: d.length, p50: q(d, 0.5), p95: q(d, 0.95), max: q(d, 1), over33ms: d.filter(x => x > 33.4).length, over50ms: d.filter(x => x > 50).length };
    }
    await c.close();
    console.log(key, 'done');
  }
  await browser.close();
  save('frametiming.json', out);
  console.log('FRAMETIMING COMPLETE');
})().catch(e => { console.error('FATAL', e); process.exit(1); });
