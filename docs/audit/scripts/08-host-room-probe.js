// Probe: can the host reach the lobby / Close room during a live round? Samples the active screen every 50 ms after clicking "Room".
const { launch, ctx, shot, save, sleep, URL } = require('./lib');
(async () => {
  const out = {}; const browser = await launch();
  const hc = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const c1 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const c2 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true });
  const host = await hc.newPage(); const p1 = await c1.newPage(); const p2 = await c2.newPage();
  const dialogs = []; for (const p of [host, p1]) p.on('dialog', d => { dialogs.push(d.type() + ': ' + d.message().slice(0, 100)); d.accept().catch(() => {}); });
  await Promise.all([host.goto(URL), p1.goto(URL), p2.goto(URL)]); await sleep(400);
  await host.click('#competitive-button');
  await host.waitForFunction(() => document.body.dataset.screen === 'lobby' && /^[A-Z]{4}$/.test(document.getElementById('room-code-display').textContent.trim()));
  const code = (await host.textContent('#room-code-display')).trim();
  for (const [p, n] of [[p1, 'Ada'], [p2, 'Bo']]) { await p.click('#join-game-button'); await sleep(200); await p.fill('#join-room-code', code); await p.fill('#join-display-name', n); await p.click('#join-form button[type="submit"]'); await p.waitForFunction(() => document.body.dataset.screen === 'lobby'); await p.evaluate(() => { window.__audit.mode = 'good'; }); }
  await sleep(400); await host.click('#room-start-button'); await p1.waitForFunction(() => document.body.dataset.screen === 'game'); await sleep(2000);
  const sample = page => page.evaluate(() => new Promise(res => { const seen = []; const t0 = performance.now(); const iv = setInterval(() => { const s = document.body.dataset.screen; if (!seen.length || seen[seen.length - 1][1] !== s) seen.push([Math.round(performance.now() - t0), s]); if (performance.now() - t0 > 2500) { clearInterval(iv); res(seen); } }, 40); }));
  const hs = sample(host); await sleep(100); await host.click('#menu-button'); out.hostScreensAfterRoomClick = await hs;
  out.hostNow = await host.evaluate(() => ({ screen: document.body.dataset.screen, lobbyButtons: Array.from(document.querySelectorAll('#room-screen button')).filter(b => b.getClientRects().length).map(b => b.textContent.trim() + (b.disabled ? ' (disabled)' : '')), status: document.getElementById('room-lobby-status').textContent }));
  await shot(host, 'mp-host-room-midround_paper_1280x800');
  if (out.hostNow.screen === 'lobby') {
    await host.click('#room-close-button').catch(e => { out.closeErr = String(e.message).slice(0, 100); }); await sleep(1300);
    out.afterClose = { dialogs: dialogs.slice(), host: await host.evaluate(() => ({ screen: document.body.dataset.screen, status: document.getElementById('multiplayer-status').textContent })), p1: await p1.evaluate(() => ({ screen: document.body.dataset.screen, status: document.getElementById('multiplayer-status').textContent, focus: document.activeElement.id || document.activeElement.tagName, live: window.__audit.live.slice(-2).map(e => e.region + ': ' + e.text) })) };
    await shot(p1, 'mp-room-closed-player_paper_390x844');
  }
  // player side: what does the header button do mid-round? (p2, only if room still open)
  out.p2Header = await p2.evaluate(() => ({ screen: document.body.dataset.screen, menuText: document.getElementById('menu-button').textContent.trim(), menuVisible: document.getElementById('menu-button').getClientRects().length > 0 }));
  if (out.p2Header.screen === 'game' && out.p2Header.menuVisible) { const ps = sample(p2); await sleep(100); await p2.click('#menu-button'); out.p2ScreensAfterClick = await ps; out.p2Now = await p2.evaluate(() => ({ screen: document.body.dataset.screen, lobbyButtons: Array.from(document.querySelectorAll('#room-screen button')).filter(b => b.getClientRects().length).map(b => b.textContent.trim()) })); }
  out.dialogs = dialogs;
  await browser.close(); save('host-room-probe.json', out); console.log(JSON.stringify(out).slice(0, 1800));
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });
