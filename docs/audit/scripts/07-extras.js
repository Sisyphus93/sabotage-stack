// Extras: definitive digit-key vote test, "your pick" feedback, raw touch events, host close / host disconnect / late join, 400% zoom canvas size.
const { launch, ctx, watch, shot, save, sleep, URL } = require('./lib');
const out = { console: [], errors: [], digits: {}, pick: {}, touch: {}, hostClose: {}, hostGone: {}, lateJoin: {}, zoom: {} };
async function phase(name, fn) { try { await fn(); console.log('ok', name); } catch (e) { out.errors.push({ phase: name, error: String(e.message).slice(0, 300) }); console.log('PHASE ERROR', name, String(e.message).slice(0, 200)); } }
const you = page => page.evaluate(() => window.__audit.youVotes.length);
const waitVote = (page, open = true) => page.waitForFunction(o => { const b = document.querySelector('.vote-option'); return b && (o ? !b.disabled : b.disabled); }, open, { timeout: 16000 });
const ui = page => page.evaluate(() => { const t = id => { const e = document.getElementById(id); return e ? e.textContent.replace(/\s+/g, ' ').trim() : null; }; const s = window.__audit.lastState; return { screen: document.body.dataset.screen, status: t('multiplayer-status'), conn: t('connection-mode-label'), round: t('round-status'), turnH: t('multiplayer-turn-heading'), turnS: t('multiplayer-turn-status'), drop: t('drop-label'), toast: t('canvas-toast'), lobby: t('room-lobby-status'), roomConn: t('room-connection-status'), voteSub: t('vote-subtitle'), hostConnected: s ? s.hostConnected : null, focus: document.activeElement && (document.activeElement.id || document.activeElement.tagName), hostMention: (document.body.innerText.match(/[^.\n]*\bhost\b[^.\n]*/gi) || []).slice(0, 4).map(x => x.trim().slice(0, 90)) }; });
async function room(browser, mode) {
  const hc = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const c1 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const c2 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true });
  const host = await hc.newPage(); const p1 = await c1.newPage(); const p2 = await c2.newPage();
  const dialogs = []; host.on('dialog', d => { dialogs.push({ type: d.type(), message: d.message().slice(0, 120) }); d.accept().catch(() => {}); });
  for (const [p, l] of [[host, 'host'], [p1, 'p1'], [p2, 'p2']]) watch(p, mode + ':' + l, out.console);
  await Promise.all([host.goto(URL), p1.goto(URL), p2.goto(URL)]); await sleep(400);
  await host.click(`#${mode}-button`);
  await host.waitForFunction(() => document.body.dataset.screen === 'lobby' && /^[A-Z]{4}$/.test(document.getElementById('room-code-display').textContent.trim()));
  const code = (await host.textContent('#room-code-display')).trim();
  for (const [p, n] of [[p1, 'Ada'], [p2, 'Bo']]) { await p.click('#join-game-button'); await sleep(200); await p.fill('#join-room-code', code); await p.fill('#join-display-name', n); await p.click('#join-form button[type="submit"]'); await p.waitForFunction(() => document.body.dataset.screen === 'lobby'); await p.evaluate(() => { window.__audit.mode = 'good'; }); }
  await sleep(400); await host.click('#room-start-button'); await p1.waitForFunction(() => document.body.dataset.screen === 'game'); await sleep(2500);
  return { hc, c1, c2, host, p1, p2, code, dialogs };
}
(async () => {
  const browser = await launch();
  await phase('digits', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const page = await c.newPage(); watch(page, 'digits', out.console);
    await page.goto(URL); await sleep(300); await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button');
    await waitVote(page); await sleep(200);
    const D = out.digits; const step = async (label, prep) => { await prep(); await sleep(60); const f = await page.evaluate(() => document.activeElement.id || document.activeElement.tagName); const n0 = await you(page); await page.keyboard.press(label.key); await sleep(150); const n1 = await you(page); D[label.name] = { focus: f, key: label.key, voteRegistered: n1 > n0 }; };
    await step({ name: 'focusDropButton_Digit1', key: 'Digit1' }, () => page.focus('#drop-button'));
    await step({ name: 'focusCanvas_Digit2', key: 'Digit2' }, () => page.focus('#game-canvas'));
    await step({ name: 'focusBody_Digit3', key: 'Digit3' }, () => page.evaluate(() => document.activeElement.blur()));
    await step({ name: 'focusBody_Numpad1', key: 'Numpad1' }, () => page.evaluate(() => document.activeElement.blur()));
    await step({ name: 'focusMenuButton_Digit2', key: 'Digit2' }, () => page.focus('#menu-button'));
    // "your pick" feedback after a mouse click
    await waitVote(page, false); await waitVote(page, true); await sleep(250);
    const style = () => page.evaluate(() => Array.from(document.querySelectorAll('.vote-option')).map(b => { const cs = getComputedStyle(b); return { cls: b.className, pressed: b.getAttribute('aria-pressed'), border: cs.borderColor, bg: cs.backgroundColor, shadow: cs.boxShadow.slice(0, 40), text: b.innerText.replace(/\s+/g, ' ').slice(0, 60), label: b.getAttribute('aria-label') }; }));
    const txt = () => page.evaluate(() => ({ state: document.getElementById('vote-state-label').textContent, sub: document.getElementById('vote-subtitle').textContent, count: document.getElementById('vote-countdown').textContent }));
    const before = { styles: await style(), txt: await txt() };
    const n0 = await you(page); await page.click('.vote-option[data-option-index="1"]'); await page.mouse.move(600, 150); await page.evaluate(() => document.activeElement.blur()); await sleep(200);
    out.pick = { registered: (await you(page)) > n0, before, after: { styles: await style(), txt: await txt() } };
    await shot(page, 'vote-picked_paper_1280x800');
    await c.close();
  });
  await phase('touch', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true, extra: { isMobile: true, deviceScaleFactor: 2 } }); const page = await c.newPage(); watch(page, 'touch', out.console);
    await page.goto(URL); await sleep(300); await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button'); await sleep(900); await page.evaluate(() => { window.__audit.mode = 'off'; });
    const cdp = await c.newCDPSession(page);
    const drag = async (label, x, y) => { await page.evaluate(() => scrollTo(0, 0)); await sleep(80); await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] }); for (let i = 1; i <= 10; i++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y - i * 24 }] }); await sleep(16); } await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(350); return { label, scrolledTo: await page.evaluate(() => Math.round(scrollY)) }; };
    const pos = sel => page.$eval(sel, e => { const r = e.getBoundingClientRect(); return [Math.round(r.left + r.width / 2), Math.round(r.top + r.height / 2)]; });
    const T = out.touch; T.drags = [];
    T.drags.push(await drag('game: drag starting on header text', 120, 130));
    T.drags.push(await drag('game: drag starting on control help text', ...(await pos('#control-help'))));
    T.drags.push(await drag('game: drag starting on canvas', ...(await pos('#game-canvas'))));
    T.drags.push(await drag('game: drag starting on Drop button', ...(await pos('#drop-button'))));
    await page.evaluate(() => scrollTo(0, 0)); await sleep(100);
    const d0 = await page.evaluate(() => window.__audit.drops.length); const [cx, cy] = await pos('#game-canvas');
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: cx, y: cy }] }); await sleep(30); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(250);
    T.tapCanvasDrops = (await page.evaluate(() => window.__audit.drops.length)) - d0; T.screen = await page.evaluate(() => document.body.dataset.screen);
    T.css = await page.evaluate(() => ({ canvas: getComputedStyle(document.getElementById('game-canvas')).touchAction, drop: getComputedStyle(document.getElementById('drop-button')).touchAction, body: getComputedStyle(document.body).touchAction, html: getComputedStyle(document.documentElement).touchAction, bodyOverflow: getComputedStyle(document.body).overflowY, vote: getComputedStyle(document.querySelector('.vote-option')).touchAction }));
    await c.close();
  });
  await phase('zoom', async () => {
    for (const vp of [{ width: 320, height: 256 }, { width: 320, height: 480 }, { width: 640, height: 400 }]) { const c = await ctx(browser, { theme: 'paper', vp }); const page = await c.newPage(); await page.goto(URL); await sleep(300); await page.click('#start-button'); await sleep(600); out.zoom[vp.width + 'x' + vp.height] = await page.evaluate(() => { const r = document.getElementById('game-canvas').getBoundingClientRect(); const st = document.getElementById('game-stage').getBoundingClientRect(); return { canvas: [Math.round(r.width), Math.round(r.height)], stage: [Math.round(st.width), Math.round(st.height)], scrollW: document.scrollingElement.scrollWidth, vw: innerWidth }; }); await c.close(); }
  });
  await phase('hostClose', async () => {
    const r = await room(browser, 'competitive'); const { host, p1, p2 } = r; const H = out.hostClose;
    H.hostGameButtons = await host.evaluate(() => Array.from(document.querySelectorAll('button')).filter(b => b.getClientRects().length).map(b => (b.id || '?') + ':' + b.textContent.replace(/\s+/g, ' ').trim().slice(0, 22)));
    await host.evaluate(() => { const b = Array.from(document.querySelectorAll('button')).find(x => x.getClientRects().length && /^room$/i.test(x.textContent.trim())); if (b) b.click(); });
    await sleep(600);
    H.hostLobbyMidRound = { screen: await host.evaluate(() => document.body.dataset.screen), buttons: await host.evaluate(() => Array.from(document.querySelectorAll('#room-screen button')).filter(b => b.getClientRects().length).map(b => b.textContent.trim() + (b.disabled ? ' (disabled)' : ''))), status: await host.textContent('#room-lobby-status') };
    await shot(host, 'mp-host-room-midround_paper_1280x800');
    await host.evaluate(() => { const b = Array.from(document.querySelectorAll('#room-screen button')).find(x => x.getClientRects().length && /close room/i.test(x.textContent)); if (b) b.click(); });
    await sleep(1300);
    H.dialogs = r.dialogs; H.hostAfter = await ui(host); H.p1After = await ui(p1); H.p1Live = await p1.evaluate(() => window.__audit.live.slice(-3)); H.p1Events = await p1.evaluate(() => window.__audit.log.filter(e => /room\.closed|room\.left|socket/.test(e.type)).slice(-4));
    await shot(p1, 'mp-room-closed-player_paper_390x844');
    await r.hc.close(); await r.c1.close(); await r.c2.close();
  });
  await phase('hostGone+lateJoin', async () => {
    const r = await room(browser, 'teamwork'); const { host, p1, p2, code } = r; const G = out.hostGone;
    const c3 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const p3 = await c3.newPage(); await p3.goto(URL); await sleep(300);
    await p3.click('#join-game-button'); await sleep(200); await p3.fill('#join-room-code', code); await p3.fill('#join-display-name', 'Cy'); await p3.click('#join-form button[type="submit"]'); await sleep(1200);
    out.lateJoin = { status: await p3.textContent('#join-status'), dialogOpen: await p3.$eval('#join-dialog', d => d.open), screen: await p3.evaluate(() => document.body.dataset.screen) };
    await shot(p3, 'join-locked_paper_390x844'); await c3.close();
    G.before = await ui(p1);
    await r.hc.close(); await sleep(1500);
    G.after1s = await ui(p1);
    await sleep(16000);
    G.after17s = await ui(p1);
    await shot(p1, 'mp-host-gone-player_paper_390x844');
    G.votes = await p1.evaluate(() => window.__audit.log.filter(e => /vote\.open|vote\.resolved|sabotage\.active|round\.results/.test(e.type)).map(e => ({ t: Math.round(e.t / 1000), type: e.type, winner: e.winner, counts: e.counts, options: e.options })).slice(-8));
    G.height = await p1.evaluate(() => { const g = window.__audit.lastState.game; return g.team ? g.team.stack.length - 1 : null; });
    await r.c1.close(); await r.c2.close();
  });
  await browser.close();
  save('extras.json', out);
  console.log('errors', out.errors.length, 'console', out.console.length); console.log('EXTRAS COMPLETE');
})().catch(e => { console.error('FATAL', e); save('extras.json', out); process.exit(1); });
