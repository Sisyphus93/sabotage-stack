// Phase 5 (note-only): what players see when /ws hangs (cold start), is refused, is slow, or drops mid-lobby; hidden-tab behaviour.
// A local TCP pass-through on :3101 forwards to the local game server on :3100 and lets this script hang/refuse/delay ONLY the /ws upgrade.
// Nothing leaves 127.0.0.1.
const net = require('net');
const { launch, ctx, watch, shot, save, sleep } = require('./lib');
const out = { console: [], errors: [], hang: {}, refuse: {}, slow: {}, outage: {}, hidden: {}, soloHidden: {}, soloReduced: {} };
async function phase(name, fn) { try { await fn(); console.log('ok', name); } catch (e) { out.errors.push({ phase: name, error: String(e.message).slice(0, 300) }); console.log('PHASE ERROR', name, String(e.message).slice(0, 200)); } }
let mode = 'pass'; const held = new Set();
const proxy = net.createServer(client => {
  client.on('error', () => {});
  client.once('data', chunk => {
    const isWs = /^GET \/ws/.test(chunk.toString('latin1'));
    const connect = () => { const up = net.connect(3100, '127.0.0.1', () => { up.write(chunk); client.pipe(up); up.pipe(client); }); up.on('error', () => client.destroy()); client.on('close', () => up.destroy()); held.add(up); held.add(client); };
    if (!isWs || mode === 'pass') return connect();
    if (mode === 'refuse') return client.destroy();
    if (mode === 'hang') { held.add(client); return; }
    if (mode === 'slow') return setTimeout(connect, 7000);
  });
});
const P = 'http://127.0.0.1:3101/';
const ui = page => page.evaluate(() => { const t = id => { const e = document.getElementById(id); return e ? e.textContent.replace(/\s+/g, ' ').trim() : null; }; return { screen: document.body.dataset.screen, status: t('multiplayer-status'), conn: t('connection-mode-label'), roomConn: t('room-connection-status'), lobby: t('room-lobby-status'), join: t('join-status'), joinOpen: document.getElementById('join-dialog').open, hostButtonsDisabled: Array.from(document.querySelectorAll('[data-host-mode]')).map(b => b.disabled), busy: document.querySelectorAll('[aria-busy="true"]').length, turnS: t('multiplayer-turn-status'), turnH: t('multiplayer-turn-heading'), round: t('round-status'), toast: t('canvas-toast'), timer: t('multiplayer-turn-timer') }; });
async function sampleUi(page, marks) { const tl = []; let last = 0; for (const m of marks) { await sleep((m - last) * 1000); last = m; tl.push({ t: m, ...(await ui(page)) }); } return tl; }
const hiddenInit = () => {
  const raf = window.requestAnimationFrame.bind(window); const q = [];
  window.requestAnimationFrame = cb => { if (window.__hidden) { q.push(cb); return 0; } return raf(cb); };
  window.__setHidden = v => { window.__hidden = v; Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => (v ? 'hidden' : 'visible') }); Object.defineProperty(document, 'hidden', { configurable: true, get: () => v }); document.dispatchEvent(new Event('visibilitychange')); if (!v) { const c = q.splice(0); c.forEach(cb => raf(cb)); } };
};

(async () => {
  await new Promise(r => proxy.listen(3101, '127.0.0.1', r));
  const browser = await launch();
  const fresh = async (label, vp = '390x844') => { const c = await ctx(browser, { theme: 'paper', vp, touch: vp.startsWith('3') }); const page = await c.newPage(); watch(page, label, out.console); await page.goto(P); await sleep(400); return { c, page }; };

  await phase('hang', async () => {
    mode = 'hang'; const { c, page } = await fresh('hang');
    await page.click('#teamwork-button');
    out.hang.host = await sampleUi(page, [0.3, 2, 5, 10, 20]);
    await shot(page, 'ws-hang-host_paper_390x844');
    await page.click('#competitive-button').catch(() => {}); await sleep(600);
    out.hang.afterSecondClick = await ui(page);
    out.hang.sockets = await page.evaluate(() => window.__audit.log.filter(e => e.dir === 'ws'));
    await c.close();
    const j = await fresh('hang-join');
    await j.page.click('#join-game-button'); await sleep(200); await j.page.fill('#join-room-code', 'ABCD'); await j.page.fill('#join-display-name', 'Kay'); await j.page.click('#join-form button[type="submit"]');
    out.hang.join = await sampleUi(j.page, [0.3, 3, 8]);
    await shot(j.page, 'ws-hang-join_paper_390x844');
    await j.c.close();
  });
  await phase('refuse', async () => {
    mode = 'refuse'; const { c, page } = await fresh('refuse');
    await page.click('#teamwork-button');
    out.refuse.host = await sampleUi(page, [0.3, 2, 6]);
    await shot(page, 'ws-refused-host_paper_390x844');
    out.refuse.sockets = await page.evaluate(() => window.__audit.log.filter(e => e.dir === 'ws'));
    out.refuse.soloStillWorks = await (async () => { await page.click('#start-button'); await sleep(400); return page.evaluate(() => document.body.dataset.screen); })();
    await c.close();
  });
  await phase('slow', async () => {
    mode = 'slow'; const { c, page } = await fresh('slow');
    const t0 = Date.now(); await page.click('#teamwork-button');
    out.slow.host = await sampleUi(page, [0.3, 3, 6]);
    await shot(page, 'ws-slow-host_paper_390x844');
    try { await page.waitForFunction(() => document.body.dataset.screen === 'lobby', null, { timeout: 12000 }); out.slow.lobbyAfterMs = Date.now() - t0; } catch (_) { out.slow.lobbyAfterMs = null; }
    out.slow.final = await ui(page);
    await c.close();
  });
  await phase('outage', async () => {
    mode = 'pass'; const { c, page } = await fresh('outage');
    await page.click('#teamwork-button');
    await page.waitForFunction(() => document.body.dataset.screen === 'lobby', null, { timeout: 8000 });
    await sleep(400); mode = 'refuse';
    await page.evaluate(() => { const a = window.__audit; a.ws[a.ws.length - 1].close(); });
    out.outage.during = await sampleUi(page, [0.3, 2, 6, 12]);
    await shot(page, 'ws-outage-lobby_paper_390x844');
    out.outage.attempts = await page.evaluate(() => window.__audit.log.filter(e => e.dir === 'ws').map(e => ({ t: Math.round(e.t / 100) / 10, type: e.type })));
    mode = 'pass'; const t0 = Date.now();
    try { await page.waitForFunction(() => /^Connected$/i.test(document.getElementById('room-connection-status').textContent.trim()), null, { timeout: 15000 }); out.outage.recoveredAfterMs = Date.now() - t0; } catch (_) { out.outage.recoveredAfterMs = null; }
    out.outage.after = await ui(page);
    await c.close();
  });

  // hidden tab: Teamwork active player hidden (rAF paused, sockets alive), observed from host
  await phase('hidden', async () => {
    mode = 'pass';
    const hc = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const c1 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const c2 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true });
    await c1.addInitScript(hiddenInit);
    const host = await hc.newPage(); const p1 = await c1.newPage(); const p2 = await c2.newPage();
    watch(host, 'hidden:host', out.console); watch(p1, 'hidden:p1', out.console); watch(p2, 'hidden:p2', out.console);
    await Promise.all([host.goto(P), p1.goto(P), p2.goto(P)]); await sleep(400);
    await host.click('#teamwork-button');
    await host.waitForFunction(() => document.body.dataset.screen === 'lobby' && /^[A-Z]{4}$/.test(document.getElementById('room-code-display').textContent.trim()));
    const code = (await host.textContent('#room-code-display')).trim();
    for (const [p, n] of [[p1, 'Ada'], [p2, 'Bo']]) { await p.click('#join-game-button'); await sleep(200); await p.fill('#join-room-code', code); await p.fill('#join-display-name', n); await p.click('#join-form button[type="submit"]'); await p.waitForFunction(() => document.body.dataset.screen === 'lobby'); }
    const id1 = await p1.evaluate(() => window.__audit.myId);
    await p1.evaluate(() => { window.__audit.mode = 'good'; }); await p2.evaluate(() => { window.__audit.mode = 'good'; });
    await sleep(400); await host.click('#room-start-button');
    await host.waitForFunction(id => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.team && g.team.currentPlayerId === id && g.team.turnActive && !g.vote; }, id1, { timeout: 20000 });
    const t0 = Date.now(); const h0 = await host.evaluate(() => window.__audit.lastState.game.team.stack.length - 1);
    await p1.evaluate(() => window.__setHidden(true));
    const tl = [];
    for (let i = 0; i < 30; i++) {
      const s = await host.evaluate(() => { const g = window.__audit.lastState.game; const t = id => document.getElementById(id).textContent.replace(/\s+/g, ' ').trim(); return { phase: g.phase, cur: g.team ? g.team.currentPlayerId : null, h: g.team ? g.team.stack.length - 1 : null, awaiting: g.team ? g.team.awaitingAutoDrop : null, turnS: t('multiplayer-turn-status'), timer: t('multiplayer-turn-timer'), vote: Boolean(g.vote) }; });
      tl.push({ t: Math.round((Date.now() - t0) / 100) / 10, cur: s.cur === id1 ? 'p1(hidden)' : s.cur ? 'p2' : '-', h: s.h, awaiting: s.awaiting, timer: s.timer, turnS: s.turnS, vote: s.vote, phase: s.phase });
      if (i === 8) await shot(host, 'hidden-player-host-view_paper_1280x800');
      if (i === 8) await shot(p2, 'hidden-player-teammate-view_paper_390x844');
      if (s.phase !== 'playing') break;
      await sleep(1000);
    }
    out.hidden.heightAtHide = h0; out.hidden.timeline = tl;
    out.hidden.p1Events = await p1.evaluate(() => window.__audit.log.filter(e => /turn\.|player\.drop|drop\.ack|block\.|round\.results|error/.test(e.type)).slice(-16).map(e => ({ t: Math.round(e.t / 100) / 10, dir: e.dir, type: e.type, auto: e.auto, code: e.code })));
    await p1.evaluate(() => window.__setHidden(false)); await sleep(1500);
    out.hidden.afterUnhide = await ui(p1);
    await hc.close(); await c1.close(); await c2.close();
  });

  // solo: hidden tab pauses? and does solo ever tell a reduced-motion player that the pool is reduced?
  await phase('soloHidden', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); await c.addInitScript(hiddenInit); const page = await c.newPage(); watch(page, 'soloHidden', out.console);
    await page.goto(P); await sleep(300); await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button'); await sleep(2000);
    const read = () => page.evaluate(() => ({ h: document.getElementById('height-display').textContent, vote: document.getElementById('vote-countdown').textContent, drops: window.__audit.drops.length, screen: document.body.dataset.screen }));
    const before = await read(); await page.evaluate(() => window.__setHidden(true)); await sleep(6000); const during = await read();
    await page.evaluate(() => window.__setHidden(false)); await sleep(1200); const after = await read();
    out.soloHidden = { before, during, after };
    await c.close();
  });
  await phase('soloReduced', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '1280x800', reducedMotion: true }); const page = await c.newPage(); watch(page, 'soloReduced', out.console);
    await page.goto(P); await sleep(400);
    const find = () => page.evaluate(() => { const m = document.body.innerText.match(/[^.\n]*(reduced|motion)[^.\n]*/gi); return m ? m.map(x => x.trim().slice(0, 140)) : []; });
    out.soloReduced.titleMentions = await find();
    await page.click('#how-button'); await sleep(300); out.soloReduced.howMentions = await page.evaluate(() => { const m = document.getElementById('how-dialog').innerText.match(/[^.\n]*(reduced|motion)[^.\n]*/gi); return m || []; });
    out.soloReduced.guideCount = await page.evaluate(() => { const d = document.querySelector('#how-dialog details'); d.open = true; return { items: document.querySelectorAll('#sabotage-list > li').length, summary: d.querySelector('summary').textContent, text: document.getElementById('sabotage-list').innerText.replace(/\s+/g, ' ').slice(0, 1500) }; });
    await page.keyboard.press('Escape');
    await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button');
    const seen = [];
    for (let k = 0; k < 4; k++) {
      await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && !b.disabled; }, null, { timeout: 16000 });
      await sleep(300); seen.push(await page.evaluate(() => Array.from(document.querySelectorAll('.vote-option .vote-name')).map(e => e.textContent)));
      if (k === 0) { out.soloReduced.gameMentions = await find(); out.soloReduced.chip = await page.textContent('#motion-chip'); await shot(page, 'vote-reducedmotion_paper_1280x800'); }
      await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && b.disabled; }, null, { timeout: 9000 }).catch(() => {});
      if ((await page.evaluate(() => document.body.dataset.screen)) !== 'game') break;
    }
    out.soloReduced.voteOptionsSeen = seen;
    await c.close();
  });

  await browser.close(); for (const s of held) { try { s.destroy(); } catch (_) {} } proxy.close();
  save('network.json', out);
  console.log('errors', out.errors.length, 'console', out.console.length);
  console.log('NETWORK COMPLETE');
  process.exit(0);
})().catch(e => { console.error('FATAL', e); save('network.json', out); process.exit(1); });
