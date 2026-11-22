'use strict';
// An Idle Scene (title, lobby, results) draws at a capped rate after settling; any visitor input wakes it back to the
// full rAF rate. This uses the real bundle, so it also proves the Stage exposes its pace for QA.
const { test, expect } = require('@playwright/test');
const { createGameServer } = require('../../server');

let app; let origin;
test.beforeAll(async () => {
  app = createGameServer();
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${app.server.address().port}`;
});
test.afterAll(async () => { if (app) await app.close(); });

test('an Idle Scene caps render calls after quiet and input restores full rate', async ({ browser }) => {
  const context = await browser.newContext();
  const errors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
    window.addEventListener('unhandledrejection', event => window.cspViolations.push({ rejection: String(event.reason) }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  try {
    await page.goto(`${origin}/?tier=low&scale=0.5`);
    await expect(page.locator('#stage3d')).toBeAttached();
    await expect.poll(() => page.evaluate(() => Boolean(window.__stack3d?.pace))).toBe(true);

    // Count real draws by wrapping the engine, and turn the cap right down: a software-rendered browser here runs at a
    // low rAF rate, so a tiny target makes the difference between idle and awake unmistakable.
    await page.evaluate(() => {
      const stage = window.__stack3d; stage.pace.targetFps = 1;
      const engine = stage.engine; window.__renders = 0; const real = engine.render.bind(engine);
      engine.render = (...args) => { window.__renders += 1; return real(...args); };
    });

    await expect.poll(() => page.evaluate(() => window.__stack3d.pace.idle), { timeout: 30_000 }).toBe(true);
    const before = await page.evaluate(() => window.__stack3d.time);
    await page.evaluate(() => { window.__renders = 0; });
    await page.waitForTimeout(3200);
    const idleRenders = await page.evaluate(() => window.__renders);
    const after = await page.evaluate(() => window.__stack3d.time);
    expect(after).toBeGreaterThan(before, 'the simulation keeps running while drawing is capped');
    const idleRate = idleRenders / 3.2;
    expect(idleRate).toBeLessThanOrEqual(1.6, `idle drew ${idleRenders} times in 3.2 s`);

    // A pointer move is a wake: the flag falls at once and the next window draws at the full rAF rate again.
    await page.mouse.move(420, 320);
    await page.mouse.move(480, 360);
    await expect.poll(() => page.evaluate(() => window.__stack3d.pace.idle)).toBe(false);
    await page.evaluate(() => { window.__renders = 0; });
    await page.waitForTimeout(2000);
    const awakeRenders = await page.evaluate(() => window.__renders);
    expect(awakeRenders / 2).toBeGreaterThan(idleRate * 2, `awake drew ${awakeRenders} times in 2 s (idle ${idleRate}/s)`);

    expect(await page.evaluate(() => window.__stack3d.pace.targetFps)).toBe(1);
    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
    expect(errors).toEqual([]);
  } finally { await context.close(); }
});
