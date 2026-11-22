# Testing

Use the Node version in `.nvmrc`, then run `npm ci`.

- `npm test`: browser-free Node/jsdom tests, including generated-artifact freshness checks.
- `node --test test/csp.test.js`: HTTP security headers, CSP hash freshness and mutation regressions.
- `npm run build`: regenerate the committed font copies/page font faces, the 3D bundle and `public/csp-hashes.json` after editing `fonts/`, the client or inline HTML scripts/styles.
- `npm run typeface`: regenerate `client3d/assets/typeface-*.json` after editing the fonts those 3D lettering assets use.
- `npm run build:check`: reject stale generated artifacts without writing them.
- `npm run benchmark:publication`: time the full room-publication path at 20, 80 and 320 history entries per tower; exits non-zero above the 2x scaling smoke target.

## Chromium smoke tests

Install the browser and its system dependencies once:

```sh
npx playwright install --with-deps chromium
npm run test:browser
```

On a system with browser libraries already installed, `npx playwright install chromium` is enough. Installing system dependencies may require administrator privileges. Missing Chromium or WebGL support fails the command; it is never silently skipped. CI explicitly installs Chromium and runs this check as part of its required test job.

The smoke suite starts the real HTTP/WebSocket server on an ephemeral loopback port. It loads the committed external 3D bundle with WebGL 2 (SwiftShader for headless machines), drops a Mover in solo play, and hosts/joins/starts both multiplayer modes with two players. It collects CSP violations before navigation and checks client errors and asynchronous fonts/icon images. Browser tests live outside the ordinary Node test-file glob.

To avoid starving shader compilation on a shared software GPU, multiplayer clients use the existing QA draw-only pause after their first real rendering and icon bake. Simulation and sockets stay live; each client's drawing resumes for its round checks. Solo rendering runs continuously.

## Content security policy

Every HTML GET/HEAD/304 response includes `X-Frame-Options: DENY` and an enforced CSP. The baseline is same-origin; framing, objects and base-URL overrides are forbidden. Inline executable scripts and the stylesheet use SHA-256 hashes, never `unsafe-inline` or `unsafe-eval`. WebSocket permissions name only the request's host/port (both ws/wss to support direct HTTP and TLS-terminating proxies).

The build commits the hashes so `npm ci && npm start` needs no production build. The server binds the metadata to the exact HTML digest. For supported live edits it recomputes inline hashes from the same cached buffer it serves, including conditional responses; restart is not required. The build freshness check still rejects unregenerated metadata before committing.

`img-src` permits data URLs for generated icon sprites and the page texture. Fonts are served from same-origin, content-versioned woff2 files (`fonts/` sources, `public/fonts/` copies), so `font-src` permits only `'self'`.
