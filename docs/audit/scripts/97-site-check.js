// Sanity check of the summary site build (dist/index.html): console errors, axe, overflow, filter interaction. Screenshots go to /tmp.
const path = require('path'); const { launch, axe, sleep } = require('./lib');
(async () => {
  const url = 'file://' + path.resolve(__dirname, '../../../dist/index.html'); const b = await launch(); const res = {};
  for (const [name, vp] of [['desktop', { width: 1280, height: 800 }], ['phone', { width: 390, height: 844 }]]) {
    const c = await b.newContext({ viewport: vp }); const p = await c.newPage(); const errs = [];
    p.on('console', m => { if (['error', 'warning'].includes(m.type())) errs.push(m.text().slice(0, 160)); }); p.on('pageerror', e => errs.push('pageerror ' + String(e.message).slice(0, 160)));
    await p.goto(url); await sleep(500);
    const a = await axe(p);
    const info = await p.evaluate(() => ({ h1: document.querySelector('h1').textContent.slice(0, 60), findings: document.querySelectorAll('#findings details[id^="F-"]').length, imgs: Array.from(document.images).filter(i => i.complete && i.naturalWidth > 0).length, overflowX: document.scrollingElement.scrollWidth > innerWidth + 1, small: Array.from(document.querySelectorAll('button, a, summary, input')).filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.height < 44 || r.width < 24) && !e.classList.contains('sr-only'); }).map(e => e.textContent.trim().slice(0, 20) + ' ' + Math.round(e.getBoundingClientRect().height)).slice(0, 6) }));
    await p.screenshot({ path: `/tmp/site-${name}-top.png` });
    await p.click('button[aria-pressed]:has-text("P1")'); await sleep(150);
    const p1 = await p.evaluate(() => ({ shown: document.querySelectorAll('#findings details[id^="F-"]').length, status: document.querySelector('#findings [role="status"]').textContent }));
    await p.fill('#finding-search', 'zzzz'); await sleep(100); const empty = await p.evaluate(() => /No findings match/.test(document.body.innerText));
    await p.click('text=Clear filters'); await sleep(100);
    await p.click('ol button:has-text("F-004")'); await sleep(500);
    const revealed = await p.evaluate(() => ({ open: document.getElementById('F-004').open, focus: document.activeElement.closest('details') && document.activeElement.closest('details').id }));
    await p.screenshot({ path: `/tmp/site-${name}-finding.png` });
    await p.evaluate(() => document.getElementById('evidence').scrollIntoView()); await sleep(400); const imgs2 = await p.evaluate(() => Array.from(document.images).filter(i => i.complete && i.naturalWidth > 0).length + '/' + document.images.length); await p.screenshot({ path: `/tmp/site-${name}-evidence.png` }); info.imgsLoaded = imgs2;
    res[name] = { errs, axe: a.violations.map(v => v.id + '×' + v.nodes.length + ' ' + v.nodes.slice(0, 2).map(n => n.target).join(' | ')), info, p1, empty, revealed };
    await c.close();
  }
  await b.close(); console.log(JSON.stringify(res, null, 1).slice(0, 2600));
})().catch(e => { console.error('FAIL', e.message.slice(0, 600)); process.exit(1); });
