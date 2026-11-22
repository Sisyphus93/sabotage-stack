'use strict';
const { test, expect } = require('@playwright/test');
const { createGameServer } = require('../../server');

let app; let origin;
test.beforeAll(async () => {
  app = createGameServer();
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${app.server.address().port}`;
});
test.afterAll(async () => { if (app) await app.close(); });

async function openGame(browser, route = '/', background = false) {
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
  const sockets = [];
  page.on('websocket', socket => sockets.push(socket.url()));
  await page.goto(`${origin}${route}?tier=low&scale=0.5`);
  await expect(page.locator('#stage3d')).toBeAttached();
  await expect.poll(() => page.evaluate(() => {
    const gl = document.querySelector('#stage3d')?.getContext('webgl2');
    return Boolean(gl && !gl.isContextLost() && window.SabotageStackHost?.active);
  })).toBe(true);
  if (background) {
    // Use the existing QA draw-only switch after real rendering/icon baking. Keep simulation and WebSockets live
    // while other tabs compile their shaders on the shared software GPU; render each round again before asserting.
    await expect(page.locator('.brand-mark svg image[href^="data:"]')).toHaveCount(1);
    await page.evaluate(() => { window.__stack3dNoRender = true; });
  }
  return { page, context, errors, sockets };
}

async function assertClean(client) {
  await client.page.evaluate(async () => {
    window.__stack3dNoRender = false;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await expect(client.page.locator('#stage3d')).toBeAttached();
  await expect(client.page.locator('#webgl-required')).toHaveCount(0);
  // Icon baking is deferred until after the first rendered frame. Wait for its images, not merely load/networkidle.
  await expect(client.page.locator('.brand-mark svg image[href^="data:"]')).toHaveCount(1);
  await client.page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
    await Promise.all([...document.querySelectorAll('svg image')].map(async node => {
      const image = new Image(); image.src = node.getAttribute('href'); await image.decode();
    }));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  expect(await client.page.evaluate(() => window.cspViolations)).toEqual([]);
  expect(client.errors).toEqual([]);
}

test('real 3D solo client can drop a Mover without CSP violations', async ({ browser }) => {
  const client = await openGame(browser);
  try {
    await client.page.locator('#solo-auto-drop-select').selectOption('off');
    await client.page.locator('#start-button').click();
    await expect(client.page.locator('body')).toHaveAttribute('data-screen', 'game');
    await client.page.locator('#drop-button').click();
    await expect.poll(() => client.page.evaluate(() => document.body.dataset.screen === 'results' || Number(document.querySelector('#height-display').textContent) > 0)).toBe(true);
    await assertClean(client);
  } finally { await client.context.close(); }
});

for (const mode of ['teamwork', 'competitive']) {
  test(`real 3D ${mode} host and players join and start over same-host WebSockets`, async ({ browser }) => {
    const clients = [];
    try {
      const host = await openGame(browser, '/sabotage-stack.html', true); clients.push(host);
      await host.page.locator(`[data-host-mode="${mode}"]`).click();
      await expect(host.page.locator('#room-code-display')).toHaveText(/^[A-Z]{4}$/);
      const code = (await host.page.locator('#room-code-display').textContent()).trim();
      for (const name of ['Ada', 'Bo']) {
        const player = await openGame(browser, '/', true); clients.push(player);
        await player.page.locator('#join-game-button').click();
        await player.page.locator('#join-room-code').fill(code);
        await player.page.locator('#join-display-name').fill(name);
        await player.page.locator('#join-form button[type="submit"]').click();
        await expect(player.page.locator('body')).toHaveAttribute('data-screen', 'lobby');
      }
      await expect(host.page.locator('#room-start-button')).toBeEnabled();
      await host.page.locator('#room-start-button').click();
      for (const client of clients) {
        await expect(client.page.locator('body')).toHaveAttribute('data-screen', 'game');
        expect(client.sockets).toContain(origin.replace('http:', 'ws:') + '/ws');
        await assertClean(client);
        await client.page.evaluate(() => { window.__stack3dNoRender = true; });
      }
    } finally { await Promise.allSettled(clients.map(client => client.context.close())); }
  });
}
