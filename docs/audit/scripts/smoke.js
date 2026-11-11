const { launch, ctx, shot, URL } = require('./lib');
(async () => {
  const b = await launch();
  const c = await ctx(b, {});
  const p = await c.newPage();
  await p.goto(URL);
  console.log('title:', await p.title());
  console.log('ua:', await p.evaluate(() => navigator.userAgent));
  console.log('api:', await p.evaluate(() => Object.keys(window.SabotageStack || {}).join(',')));
  console.log('fonts:', await p.evaluate(async () => { await document.fonts.ready; return [...document.fonts].map(f => f.family + ':' + f.status).join(' | '); }));
  await shot(p, '_smoke');
  await b.close();
})().catch(e => { console.error('FAIL', e.message.slice(0, 800)); process.exit(1); });
