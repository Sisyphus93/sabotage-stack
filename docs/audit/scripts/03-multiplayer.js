// Phase 2 multiplayer smoke test. Host is a non-playing "stream view", so a playable room needs host + 2 players (3 contexts).
// Teamwork: lobby, 1-player start check, play, host vote, wait-out / auto-drop timeline, finish, rematch, socket drop + resume.
// Competitive: play, leader targeting log, mid-round reduced-motion change, socket drop + resume, finish, rematch, close.
const { launch, ctx, watch, shot, save, sleep, URL } = require('./lib');
const { measure } = require('./inpage');
const out = { console: [], steps: [], teamwork: {}, competitive: {}, errors: [] };
const note = (k, v) => { out.steps.push({ at: new Date().toISOString().slice(11, 19), k, v }); console.log(k, typeof v === 'string' ? v.slice(0, 160) : JSON.stringify(v).slice(0, 220)); };
async function phase(name, fn) { try { await fn(); } catch (e) { out.errors.push({ phase: name, error: String(e.message).slice(0, 300) }); console.log('PHASE ERROR', name, String(e.message).slice(0, 200)); } }

const snapFn = () => {
  const t = id => { const e = document.getElementById(id); return e ? e.textContent.replace(/\s+/g, ' ').trim() : null; };
  const a = window.__audit; const g = a.lastState && a.lastState.game;
  return { screen: document.body.dataset.screen, conn: t('connection-mode-label'), round: t('round-status'), turnH: t('multiplayer-turn-heading'), turnS: t('multiplayer-turn-status'), timer: t('multiplayer-turn-timer'),
    effect: t('effect-name'), effTime: t('effect-time'), drop: t('drop-label'), dropDisabled: document.getElementById('drop-button').disabled, help: t('control-help'), hint: t('canvas-hint'), toast: t('canvas-toast'), chip: t('motion-chip'),
    voteState: t('vote-state-label'), voteSub: t('vote-subtitle'), voteDisabled: Array.from(document.querySelectorAll('.vote-option')).map(b => b.disabled), heading: t('game-heading'), kicker: t('game-mode-kicker'), mpStatus: t('multiplayer-status'), lobby: t('room-lobby-status'),
    phase: g && g.phase, height: g && g.team ? g.team.stack.length - 1 : null, cur: g && g.team ? g.team.currentPlayerId : null };
};
const snap = page => page.evaluate(snapFn);
const visibleButtons = page => page.evaluate(() => Array.from(document.querySelectorAll('button')).filter(b => b.offsetParent && !b.closest('dialog:not([open])')).map(b => ({ id: b.id, text: b.textContent.replace(/\s+/g, ' ').trim().slice(0, 28), disabled: b.disabled })));
const gameOf = page => page.evaluate(() => { const s = window.__audit.lastState; const g = s && s.game; if (!g) return null; return { phase: g.phase, round: g.roundNumber, elapsed: Math.round(g.elapsed * 10) / 10, cur: g.team ? g.team.currentPlayerId : null, turnRemaining: g.team ? Math.round(g.team.turnRemaining * 10) / 10 : null, awaiting: g.team ? g.team.awaitingAutoDrop : null, height: g.team ? g.team.stack.length - 1 : null, heights: g.players ? g.players.map(p => ({ id: p.playerId || p.id, h: p.height, ended: p.ended, collapsed: p.collapsed, disconnected: p.disconnected, connected: p.connected })) : null, effects: g.activeEffects, vote: g.vote ? g.vote.options : null, remaining: g.remainingSeconds }; });
const setBot = (page, mode, extra = {}) => page.evaluate(([m, e]) => { Object.assign(window.__audit, e); window.__audit.mode = m; }, [mode, extra]);
const logOf = page => page.evaluate(() => ({ log: window.__audit.log, recv: window.__audit.recv, recvMax: window.__audit.recvMax, sent: window.__audit.sent, live: window.__audit.live, myId: window.__audit.myId }));
async function join(page, code, name) {
  await page.click('#join-game-button'); await sleep(250);
  await page.fill('#join-room-code', code); await page.fill('#join-display-name', name);
  await page.click('#join-form button[type="submit"]');
  await page.waitForFunction(() => document.body.dataset.screen === 'lobby', null, { timeout: 8000 });
}
async function waitScreen(page, name, timeout = 15000) { await page.waitForFunction(n => document.body.dataset.screen === n, name, { timeout }); }
async function waitVoteOpen(host, timeout = 30000) { await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.vote; }, null, { timeout }); }
async function setup(browser, mode, rmP2) {
  const hc = await ctx(browser, { theme: 'paper', vp: '1280x800' });
  const c1 = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true });
  const c2 = await ctx(browser, { theme: 'sunset', vp: '390x844', touch: true, reducedMotion: rmP2 });
  const host = await hc.newPage(); const p1 = await c1.newPage(); const p2 = await c2.newPage();
  watch(host, mode + ':host', out.console); watch(p1, mode + ':p1', out.console); watch(p2, mode + ':p2', out.console);
  await Promise.all([host.goto(URL), p1.goto(URL), p2.goto(URL)]); await sleep(500);
  await host.click(`#${mode}-button`);
  await host.waitForFunction(() => document.body.dataset.screen === 'lobby' && /^[A-Z]{4}$/.test(document.getElementById('room-code-display').textContent.trim()), null, { timeout: 8000 });
  const code = (await host.textContent('#room-code-display')).trim();
  return { hc, c1, c2, host, p1, p2, code };
}

async function teamwork(browser) {
  const R = out.teamwork; const s = await setup(browser, 'teamwork', true); const { host, p1, p2, code } = s;
  await phase('tw.lobby', async () => {
    await join(p1, code, 'Ada'); await sleep(500);
    R.onePlayer = { host: await snap(host), startDisabled: await host.$eval('#room-start-button', b => b.disabled), hostButtons: await visibleButtons(host), hostLobbyText: (await host.innerText('#room-screen')).replace(/\s+/g, ' ').slice(0, 420) };
    await shot(host, 'mp-lobby-oneplayer-host_paper_1280x800');
    note('tw.onePlayer start disabled', String(R.onePlayer.startDisabled) + ' :: ' + R.onePlayer.host.lobby);
    await join(p2, code, 'Bo'); await sleep(600);
    R.lobbyHost = await snap(host); R.playerLobbyText = (await p1.innerText('#room-screen')).replace(/\s+/g, ' ').slice(0, 420); R.playerLobbyButtons = await visibleButtons(p1);
    await shot(host, 'mp-lobby-teamwork-host_paper_1280x800'); await shot(p1, 'mp-lobby-teamwork-player_paper_390x844');
    R.ids = { p1: await p1.evaluate(() => window.__audit.myId), p2: await p2.evaluate(() => window.__audit.myId) };
  });
  await phase('tw.play', async () => {
    await setBot(p1, 'good'); await setBot(p2, 'good');
    await host.click('#room-start-button');
    await Promise.all([waitScreen(host, 'game'), waitScreen(p1, 'game'), waitScreen(p2, 'game')]);
    await sleep(2500);
    R.early = { host: await snap(host), p1: await snap(p1), p2: await snap(p2), hostCard: (await host.innerText('#multiplayer-card')).replace(/\s+/g, ' ').slice(0, 300), p1Measure: (await p1.evaluate(measure)).key, hostMeasure: (await host.evaluate(measure)).key, hostButtons: await visibleButtons(host), p1Buttons: await visibleButtons(p1) };
    await shot(host, 'mp-teamwork-host-game_paper_1280x800'); await shot(p1, 'mp-teamwork-player-game_paper_390x844'); await shot(p2, 'mp-teamwork-player-game_sunset_390x844');
    note('tw.early p1', R.early.p1); note('tw.early p2', R.early.p2);
  });
  await phase('tw.vote', async () => {
    await waitVoteOpen(host);
    await setBot(p1, 'off'); await setBot(p2, 'off');
    await sleep(700);
    R.vote = { host: await snap(host), p1: await snap(p1), p2: await snap(p2), game: await gameOf(host), p1VoteKey: (await p1.evaluate(measure)).key['vote-card'] || 'not visible' };
    await shot(host, 'mp-teamwork-host-vote_paper_1280x800'); await shot(p1, 'mp-teamwork-player-vote_paper_390x844');
    R.vote.playerSubmit = await p1.evaluate(() => window.SabotageStack.voteAdapter.submit(0));
    for (let i = 0; i < 3; i++) { await host.click('.vote-option[data-option-index="0"]'); await sleep(120); }
    await sleep(300);
    R.vote.afterHostClicks = (await logOf(host)).log.filter(e => e.type === 'vote.updated').slice(-1)[0];
    note('tw.vote host 3 clicks ->', R.vote.afterHostClicks || 'none'); note('tw.vote player view', R.vote.p1);
    await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && !g.vote; }, null, { timeout: 9000 });
    await sleep(350);
    const g = await gameOf(host); R.afterVote = g;
    const target = g.cur === R.ids.p1 ? p1 : p2; const other = target === p1 ? p2 : p1; R.waitOut = { targetIs: target === p1 ? 'p1' : 'p2', effects: g.effects, timeline: [] };
    for (let i = 0; i < 27; i++) {
      const a = await snap(target); const b = i % 4 === 0 ? await snap(other) : null;
      R.waitOut.timeline.push({ i, t: Math.round(i * 0.5 * 10) / 10, timer: a.timer, effect: a.effect, effTime: a.effTime, drop: a.drop, turnH: a.turnH, turnS: a.turnS, toast: a.toast, hint: a.hint, screen: a.screen, height: a.height, otherEffect: b && b.effect, otherTurnS: b && b.turnS });
      if (i === 3) { await shot(target, `mp-teamwork-target-effect_${target === p1 ? 'paper' : 'sunset'}_390x844`); await shot(other, `mp-teamwork-waiting-player_${other === p1 ? 'paper' : 'sunset'}_390x844`); }
      if (i === 12) await shot(target, `mp-teamwork-target-effect-expired_${target === p1 ? 'paper' : 'sunset'}_390x844`);
      if (i === 21) await shot(target, `mp-teamwork-target-autodrop_${target === p1 ? 'paper' : 'sunset'}_390x844`);
      if (a.screen !== 'game') break;
      await sleep(500);
    }
    R.waitOut.after = await gameOf(host);
    R.waitOut.events = (await logOf(target)).log.filter(e => /turn\.|player\.drop|drop\.ack|block\.|sabotage|round\.results|error/.test(e.type)).slice(-14);
    note('tw.waitOut after', R.waitOut.after);
  });
  await phase('tw.finish', async () => {
    if ((await snap(host)).screen === 'game') {
      await setBot(p1, 'good'); await setBot(p2, 'good'); await sleep(6000);
      R.mid = await gameOf(host);
      await setBot(p1, 'miss');
      await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.phase === 'results'; }, null, { timeout: 60000 });
    }
    await sleep(2200);
    R.results = { host: await snap(host), p1: await snap(p1), hostText: (await host.innerText('#results-screen')).replace(/\s+/g, ' ').slice(0, 500), p1Text: (await p1.innerText('#results-screen')).replace(/\s+/g, ' ').slice(0, 500), hostButtons: await visibleButtons(host), p1Buttons: await visibleButtons(p1), p1Focus: await p1.evaluate(() => document.activeElement && (document.activeElement.id || document.activeElement.tagName)) };
    await shot(host, 'mp-teamwork-host-results_paper_1280x800'); await shot(p1, 'mp-teamwork-player-results_paper_390x844');
    note('tw.results host buttons', R.results.hostButtons); note('tw.results p1 buttons', R.results.p1Buttons);
  });
  await phase('tw.rematch', async () => {
    const clicked = await host.evaluate(() => { const b = Array.from(document.querySelectorAll('button')).find(x => x.offsetParent && !x.disabled && /rematch|again/i.test(x.textContent)); if (b) { b.click(); return b.id || b.textContent; } return null; });
    R.rematchClicked = clicked;
    await setBot(p1, 'good'); await setBot(p2, 'good');
    await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.phase === 'playing' && g.roundNumber >= 2; }, null, { timeout: 10000 });
    await sleep(1500);
    R.rematch = { game: await gameOf(host), p1: await snap(p1) };
    note('tw.rematch', R.rematch.game);
  });
  await phase('tw.disconnect', async () => {
    // wait until it is p1's turn, then kill p1's socket mid-turn
    await setBot(p1, 'off');
    await host.waitForFunction(id => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.team && g.team.currentPlayerId === id && g.team.turnActive; }, R.ids.p1, { timeout: 20000 });
    await sleep(600);
    const before = await gameOf(host);
    await p1.evaluate(() => { const a = window.__audit; a.dcAt = performance.now(); a.ws[a.ws.length - 1].close(); });
    const tl = [];
    for (const wait of [150, 500, 800, 1200, 2000]) { await sleep(wait); const a = await snap(p1); tl.push({ after: wait, conn: a.conn, round: a.round, turnH: a.turnH, turnS: a.turnS, toast: a.toast, drop: a.drop, screen: a.screen }); if (wait === 150) await shot(p1, 'mp-teamwork-player-reconnecting_paper_390x844'); }
    const hostView = await snap(host);
    await setBot(p1, 'good');
    let gotTurn = false;
    try { await host.waitForFunction(id => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.team && g.team.currentPlayerId === id; }, R.ids.p1, { timeout: 15000 }); gotTurn = true; } catch (_) {}
    R.disconnect = { before, timeline: tl, hostTurnStatusDuring: hostView.turnS, p1BackInRotation: gotTurn, after: await gameOf(host), p1Events: (await logOf(p1)).log.filter(e => /socket|room\.resume|room\.resumed|turn\.forfeited|error/.test(e.type)).slice(-10) };
    note('tw.disconnect', { tl: tl.map(x => x.conn), back: gotTurn, ev: R.disconnect.p1Events.map(e => e.type) });
    // page refresh resume (sessionStorage)
    await p2.reload(); await sleep(1800);
    R.reload = { p2: await snap(p2), events: (await logOf(p2)).log.filter(e => /socket|resume|error/.test(e.type)).slice(-6) };
    note('tw.reload p2', R.reload.p2.screen + ' ' + R.reload.p2.conn);
  });
  await phase('tw.wrap', async () => {
    await setBot(p1, 'miss'); await setBot(p2, 'good');
    try { await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.phase === 'results'; }, null, { timeout: 45000 }); } catch (_) {}
    const [h, a, b] = [await logOf(host), await logOf(p1), await logOf(p2)];
    R.logs = { host: h.log, p1: a.log, p2: b.log };
    R.traffic = { host: { recv: h.recv, recvMax: h.recvMax, sent: h.sent }, p1: { recv: a.recv, recvMax: a.recvMax, sent: a.sent } };
    R.live = { host: h.live, p1: a.live, p2: b.live };
    R.voteOptionsSeen = h.log.filter(e => e.type === 'vote.open').map(e => e.options);
    R.sabotageTargets = h.log.filter(e => e.type === 'sabotage.active').map(e => ({ id: e.id, target: e.targetPlayerId === R.ids.p1 ? 'p1' : e.targetPlayerId === R.ids.p2 ? 'p2' : e.targetPlayerId }));
    R.joinMsgs = [...a.log, ...b.log].filter(e => e.dir === 'out' && /room\.join|client\.preferences|room\.resume/.test(e.type));
    R.playerStateKeys = await p1.evaluate(() => { const s = window.__audit.lastState; const j = JSON.stringify(s); const g = s.game || {}; return { top: Object.keys(s), game: Object.keys(g), team: g.team ? Object.keys(g.team) : null, hasToken: /token/i.test(j), bytes: j.length, hostText: /reduced|motion/i.test(document.body.innerText) }; });
    R.hostMentionsMotion = await host.evaluate(() => { const m = document.body.innerText.match(/[^.\n]*(reduced|motion)[^.\n]*/i); return m ? m[0].slice(0, 160) : null; });
  });
  await s.hc.close(); await s.c1.close(); await s.c2.close();
}

async function competitive(browser) {
  const R = out.competitive; const s = await setup(browser, 'competitive', false); const { host, p1, p2, code } = s;
  await phase('co.lobby', async () => {
    await join(p1, code, 'Ada'); await join(p2, code, 'Bo'); await sleep(600);
    R.ids = { p1: await p1.evaluate(() => window.__audit.myId), p2: await p2.evaluate(() => window.__audit.myId) };
    await shot(host, 'mp-lobby-competitive-host_paper_1280x800');
    await setBot(p1, 'good', { gap: 380 }); await setBot(p2, 'good', { gap: 1700 });
    await host.click('#room-start-button');
    await Promise.all([waitScreen(host, 'game'), waitScreen(p1, 'game'), waitScreen(p2, 'game')]);
    R.startedAt = Date.now();
    await sleep(3000);
    R.early = { host: await snap(host), p1: await snap(p1), p2: await snap(p2), hostCard: (await host.innerText('#multiplayer-card')).replace(/\s+/g, ' ').slice(0, 300), hostButtons: await visibleButtons(host) };
    await shot(host, 'mp-competitive-host-game_paper_1280x800'); await shot(p1, 'mp-competitive-player-game_paper_390x844'); await shot(p2, 'mp-competitive-player-game_sunset_390x844');
    note('co.early p1', R.early.p1);
  });
  await phase('co.vote', async () => {
    await waitVoteOpen(host); await sleep(600);
    R.vote = { host: await snap(host), p1: await snap(p1), game: await gameOf(host) };
    await shot(host, 'mp-competitive-host-vote_paper_1280x800'); await shot(p1, 'mp-competitive-player-vote_paper_390x844');
    await host.keyboard.press('Digit2'); await sleep(300);
    R.vote.hostKey2 = (await logOf(host)).log.filter(e => e.type === 'vote.updated' || (e.dir === 'out' && e.type === 'vote.cast')).slice(-2);
    await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && !g.vote && g.activeEffects.length; }, null, { timeout: 9000 });
    await sleep(500);
    R.effect = { game: await gameOf(host), p1: await snap(p1), p2: await snap(p2) };
    await shot(host, 'mp-competitive-host-effect_paper_1280x800'); await shot(p1, 'mp-competitive-player-effect_paper_390x844');
    note('co.effect', { eff: R.effect.game.effects.map(e => e.id + '->' + (e.targetPlayerId === R.ids.p1 ? 'p1' : 'p2')), heights: R.effect.game.heights.map(h => h.h) });
  });
  await phase('co.prefs', async () => {
    await p2.emulateMedia({ reducedMotion: 'reduce' }); await sleep(800);
    R.prefs = (await logOf(p2)).log.filter(e => /preferences/.test(e.type)).slice(-3);
    R.prefsAt = Math.round((Date.now() - R.startedAt) / 1000);
    note('co.prefs', R.prefs);
  });
  await phase('co.disconnect', async () => {
    const wait = Math.max(0, 36000 - (Date.now() - R.startedAt)); await sleep(wait);
    const before = await gameOf(host);
    await p2.evaluate(() => { const a = window.__audit; a.ws[a.ws.length - 1].close(); });
    const tl = [];
    for (const w of [200, 800, 1500, 2500]) { await sleep(w); const a = await snap(p2); tl.push({ after: w, conn: a.conn, round: a.round, turnH: a.turnH, turnS: a.turnS, toast: a.toast, drop: a.drop, dropDisabled: a.dropDisabled, hint: a.hint }); }
    await shot(p2, 'mp-competitive-player-after-reconnect_sunset_390x844'); await shot(host, 'mp-competitive-host-after-disconnect_paper_1280x800');
    const after = await gameOf(host);
    R.disconnect = { before: before.heights, timeline: tl, after: after.heights, p2Events: (await logOf(p2)).log.filter(e => /socket|resume|error/.test(e.type)).slice(-8), p2Card: (await p2.innerText('#multiplayer-card')).replace(/\s+/g, ' ').slice(0, 260) };
    note('co.disconnect after', R.disconnect.after); note('co.disconnect p2 view', tl[tl.length - 1]);
  });
  await phase('co.finish', async () => {
    const wait = Math.max(0, 62000 - (Date.now() - R.startedAt)); await sleep(wait);
    R.late = await gameOf(host);
    await setBot(p1, 'miss');
    await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.phase === 'results'; }, null, { timeout: 40000 });
    R.endedAfter = Math.round((Date.now() - R.startedAt) / 1000);
    await sleep(2200);
    R.results = { hostText: (await host.innerText('#results-screen')).replace(/\s+/g, ' ').slice(0, 600), p1Text: (await p1.innerText('#results-screen')).replace(/\s+/g, ' ').slice(0, 400), p2Text: (await p2.innerText('#results-screen')).replace(/\s+/g, ' ').slice(0, 400), hostButtons: await visibleButtons(host), p1Buttons: await visibleButtons(p1) };
    await shot(host, 'mp-competitive-host-results_paper_1280x800'); await shot(p1, 'mp-competitive-player-results_paper_390x844'); await shot(p2, 'mp-competitive-player-results_sunset_390x844');
    note('co.results', R.results.hostText.slice(0, 200));
  });
  await phase('co.rematch+close', async () => {
    const clicked = await host.evaluate(() => { const b = Array.from(document.querySelectorAll('button')).find(x => x.offsetParent && !x.disabled && /rematch|again/i.test(x.textContent)); if (b) { b.click(); return b.id || b.textContent; } return null; });
    await host.waitForFunction(() => { const g = window.__audit.lastState && window.__audit.lastState.game; return g && g.phase === 'playing' && g.roundNumber >= 2; }, null, { timeout: 10000 });
    await sleep(1200);
    R.rematch = { clicked, game: await gameOf(host) };
    note('co.rematch heights', R.rematch.game.heights);
    const [h, a, b] = [await logOf(host), await logOf(p1), await logOf(p2)];
    R.logs = { host: h.log, p1: a.log, p2: b.log };
    R.traffic = { host: { recv: h.recv, recvMax: h.recvMax, sent: h.sent }, p1: { recv: a.recv, recvMax: a.recvMax, sent: a.sent } };
    R.live = { host: h.live, p1: a.live };
    R.voteOptionsSeen = h.log.filter(e => e.type === 'vote.open').map(e => ({ t: Math.round(e.t / 1000), options: e.options }));
    R.sabotageTargets = h.log.filter(e => e.type === 'sabotage.active').map(e => ({ t: Math.round(e.t / 1000), id: e.id, target: e.targetPlayerId === R.ids.p1 ? 'p1' : e.targetPlayerId === R.ids.p2 ? 'p2' : e.targetPlayerId }));
    R.playerStateKeys = await p1.evaluate(() => { const s = window.__audit.lastState; const j = JSON.stringify(s); const g = s.game || {}; return { game: Object.keys(g), player: g.players && g.players[0] ? Object.keys(g.players[0]) : null, hasToken: /token/i.test(j), bytes: j.length }; });
    // host closes the room mid-round: what do players see?
    await host.evaluate(() => { const b = document.getElementById('menu-button'); if (b && b.offsetParent) b.click(); });
    await sleep(700);
    R.hostAfterMenu = { snap: await snap(host), buttons: await visibleButtons(host) };
    await host.evaluate(() => { const b = [document.getElementById('room-close-button'), document.getElementById('room-leave-button')].find(x => x && x.offsetParent); if (b) b.click(); });
    await sleep(1200);
    R.closed = { p1: await snap(p1), host: await snap(host), p1Body: (await p1.innerText('body')).replace(/\s+/g, ' ').slice(0, 300) };
    await shot(p1, 'mp-room-closed-player_paper_390x844');
    note('co.closed p1', R.closed.p1.screen + ' :: ' + R.closed.p1.mpStatus);
  });
  await s.hc.close(); await s.c1.close(); await s.c2.close();
}

(async () => {
  const browser = await launch();
  await teamwork(browser); save('multiplayer.json', out);
  await competitive(browser); save('multiplayer.json', out);
  await browser.close();
  console.log('console entries', out.console.length, 'phase errors', out.errors.length);
  console.log('MULTIPLAYER COMPLETE');
})().catch(e => { console.error('FATAL', e); save('multiplayer.json', out); process.exit(1); });
