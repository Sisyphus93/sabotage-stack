// Phase 2 matrix: every screen x theme x viewport. Screenshots + axe (390 & 1280) + computed contrast + targets + console.
const { launch, ctx, watch, shot, save, sleep, URL, THEMES, VIEWPORTS, axe } = require('./lib');
const { measure } = require('./inpage');
const AXE_VPS = new Set(['390x844', '1280x800']);
const out = { startedAt: new Date().toISOString(), combos: {}, console: [] };

async function runCombo(browser, theme, vp) {
  const label = `${theme}_${vp}`; const res = { screens: {} };
  const c = await ctx(browser, { theme, vp, touch: vp.startsWith('3') });
  const page = await c.newPage(); watch(page, label, out.console);
  const doAxe = AXE_VPS.has(vp);
  async function capture(name, { full = false, runAxe = doAxe } = {}) {
    await shot(page, `${name}_${label}`);
    if (full) await shot(page, `${name}-full_${label}`, { fullPage: true });
    const m = await page.evaluate(measure);
    const a = runAxe ? await axe(page) : null;
    res.screens[name] = { measure: m, axe: a };
  }
  try {
    await page.goto(URL); await sleep(600);
    res.themeApplied = await page.evaluate(() => ({ data: document.documentElement.dataset.theme || 'paper', select: document.getElementById('theme-select').value, fonts: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family), coreWrapped: Boolean(window.__audit && window.__audit.core), wrapErr: window.__audit.coreWrapError || null }));
    await capture('title', { full: true });
    await page.click('#how-button'); await sleep(350);
    await capture('how');
    await page.evaluate(() => { const d = document.querySelector('#how-dialog details'); if (d) d.open = true; }); await sleep(300);
    await shot(page, `how-guide_${label}`);
    res.screens.howGuide = { measure: await page.evaluate(measure), axe: doAxe ? await axe(page) : null };
    await page.keyboard.press('Escape'); await sleep(250);
    await page.click('#join-game-button'); await sleep(350);
    await capture('join');
    await page.keyboard.press('Escape'); await sleep(250);
    for (const mode of ['teamwork', 'competitive']) {
      await page.click(`#${mode}-button`);
      await page.waitForFunction(() => document.body.dataset.screen === 'lobby' && /^[A-Z]{4}$/.test(document.getElementById('room-code-display').textContent.trim()), null, { timeout: 8000 });
      await sleep(400);
      await capture(`lobby-${mode}`, { full: true });
      await page.evaluate(() => { const b = [document.getElementById('room-close-button'), document.getElementById('room-leave-button')].find(x => x && x.offsetParent); if (b) b.click(); });
      await page.waitForFunction(() => document.body.dataset.screen === 'title', null, { timeout: 8000 });
      await sleep(300);
    }
    await page.evaluate(() => { const a = window.__audit; a.mode = 'good'; a.t0 = performance.now(); a.live.length = 0; a.drops.length = 0; });
    await page.click('#start-button');
    await sleep(3000);
    await capture('game', { full: true, runAxe: doAxe });
    try {
      await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && !b.disabled; }, null, { timeout: 15000 });
      await sleep(900);
      await capture('vote', {});
      res.voteText = await page.evaluate(() => ({ options: document.getElementById('vote-options').innerText.replace(/\s+/g, ' ').slice(0, 400), state: document.getElementById('vote-state-label').textContent, countdown: document.getElementById('vote-countdown').textContent, subtitle: document.getElementById('vote-subtitle').textContent }));
      await page.waitForFunction(() => { const t = document.getElementById('effect-name').textContent.trim(); return window.SabotageStack.sabotages.some(s => s.name === t); }, null, { timeout: 9000 });
      await sleep(800);
      await capture('effect', { runAxe: false });
      res.effect = await page.evaluate(() => ({ name: document.getElementById('effect-name').textContent, caption: document.getElementById('effect-caption').textContent, time: document.getElementById('effect-time').textContent, chip: document.getElementById('motion-chip').textContent }));
    } catch (e) { res.midRunError = String(e.message).slice(0, 200); }
    await page.evaluate(() => { window.__audit.mode = 'miss'; });
    await page.waitForFunction(() => document.body.dataset.screen === 'results', null, { timeout: 30000 });
    await sleep(1800);
    await capture('results', { full: true });
    res.drops = await page.evaluate(() => window.__audit.drops);
    res.live = await page.evaluate(() => window.__audit.live);
    res.liveRegions = await page.evaluate(() => window.__audit.liveRegions);
    res.resultText = await page.evaluate(() => document.getElementById('results-screen').innerText.replace(/\s+/g, ' ').slice(0, 300));
  } catch (e) { res.error = String(e.message).slice(0, 300); try { await shot(page, `error_${label}`); } catch (_) {} }
  await c.close();
  out.combos[label] = res;
  console.log('done', label, res.error ? 'ERROR ' + res.error : 'ok', res.midRunError || '');
}

(async () => {
  const browser = await launch();
  const queue = [];
  for (const vp of Object.keys(VIEWPORTS)) for (const theme of THEMES) queue.push([theme, vp]);
  const workers = Array.from({ length: 3 }, async () => { while (queue.length) { const [t, v] = queue.shift(); await runCombo(browser, t, v); } });
  await Promise.all(workers);
  await browser.close();
  out.finishedAt = new Date().toISOString();
  save('matrix.json', out);
  console.log('console entries:', out.console.length);
  console.log('MATRIX COMPLETE');
})().catch(e => { console.error('FATAL', e); save('matrix.json', out); process.exit(1); });
