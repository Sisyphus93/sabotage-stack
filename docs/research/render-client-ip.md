# Render client identity for per-client limits

**Date:** 2026-11-27  
**Question:** Which `CLIENT_IP_SOURCE` value should production use on Render so per-client room/join limits key on the real client, and what is actually documented?

## Bottom line

Use **`CLIENT_IP_SOURCE=header:cf-connecting-ip`**. Confidence: **high** that this is the correct public-edge header on Render; **medium-high** that Render's load balancer preserves it unchanged end-to-end (Render's own docs assume the app receives it, but there is no explicit "we never rewrite it" guarantee).

- Do **not** use `x-forwarded-for`: Cloudflare appends to an existing chain, and community reports say Render does not strip caller-supplied values, so the leftmost entry is caller-controlled. Render's own PocketBase article says this.
- `true-client-ip` is a **fallback only after a live test** proves a client-supplied value is overwritten. Cloudflare marks it Enterprise-only and warns it can be spoofed in a stacked-CDN setup.
- `x-real-ip` is stripped by Cloudflare; `Forwarded` is undocumented on Render. Neither is suitable.

**Correction to the issue's premise:** Cloudflare does **not** overwrite a client-supplied `CF-Connecting-IP`. It **rejects the request** with HTTP 403 / Cloudflare error 1000. The security property is "the caller cannot set it", not "Render overwrites it". Render's own article states this explicitly.

**Still unverifiable from docs:** byte-for-byte preservation of `CF-Connecting-IP` by Render's LB on every plan/region and on WebSocket upgrades; whether `True-Client-IP` is enabled and overwritten on Render's Cloudflare zone; the exact number of X-Forwarded-For hops.

## Live verification (2026-11-27)

- `https://sabotage-stack.onrender.com/healthz` returned `server: cloudflare`, `cf-ray`, and `x-render-origin-server: Render`.
- A caller-supplied `CF-Connecting-IP: 203.0.113.9` got `403` / `error code: 1000` on both `/healthz` and the `/ws` upgrade; a normal `/ws` upgrade returned `101`.
- With `CLIENT_IP_SOURCE=header:cf-connecting-ip` set on the service, 30 WebSocket upgrades from one address were accepted and the 31st got `503`.

## Findings

### 1. Render's public edge is Cloudflare (primary)

- Render DDoS docs: *"We're using Cloudflare’s industry-leading DDoS protection infrastructure behind the scenes, and you don't have to do anything to benefit."* — https://render.com/docs/ddos-protection
- Render uptime docs: *"All inbound requests to Render web services pass through Cloudflare for DDoS protection"* and *"Cloudflare assigns a unique ID to each request and sets it as the value of the `CF-Ray` HTTP header. Render includes this header in the request it sends along to your service."* — https://render.com/docs/uptime-best-practices#log-the-cf-ray-id-of-each-request
- Render article: *"All inbound traffic to Render web services passes through Cloudflare's global network before reaching your application."* — https://render.com/articles/how-render-handles-ddos-attacks
- **Live observation (2026-11-27, this deployment):** `sabotage-stack.onrender.com` CNAMEs through `gcp-us-west1-1.origin.onrender.com` to `gcp-us-west1-1.origin.onrender.com.cdn.cloudflare.net`; `/healthz` returns `server: cloudflare`, `cf-ray`, and `x-render-origin-server: Render`. This is the app path, not just Render's docs site.

### 2. Render documents XFF append and CF-Connecting-IP rejection (primary)

From Render's PocketBase article (2026-07-08), https://render.com/articles/host-pocketbase-on-render:

> *"For public requests that reach PocketBase through Cloudflare, set the trusted proxy header to `CF-Connecting-IP`. Cloudflare adds this header when forwarding the request to Render. If a client supplies its own `CF-Connecting-IP` on a public request, Cloudflare rejects the request with HTTP 403 (Cloudflare error 1000); it does not overwrite the supplied value and forward the request."*

> *"Cloudflare appends to `X-Forwarded-For` rather than replacing it, so a caller who sends their own copy of the header controls the leftmost entry and can claim any address."*

> *"Requests over Render's private network bypass Cloudflare, so Cloudflare does not add or validate `CF-Connecting-IP`. A private-network caller can set it to any value, and it arrives as sent."*

From Render's analytics-proxy article (2026-11-20), https://render.com/articles/how-to-proxy-analytics-through-your-own-domain:

> *"Render appended the visitor IP to `X-Forwarded-For` and also sent it in `True-Client-Ip` and `CF-Connecting-Ip`. Plausible's debug response (`X-Debug-Request`) reported the real visitor IP even when the request carried a fake `X-Forwarded-For`."*

This is the strongest Render-side evidence that (a) XFF is append-only, (b) both `CF-Connecting-IP` and `True-Client-IP` reach the upstream, and (c) a fake XFF does not override the real IP used by those headers.

**Conflicting official guidance:** Render's DDoS article (2026-04-01) says *"To get the real client IP, read the `x-forwarded-for` header"* and its Express example keys on `x-forwarded-for?.split(',')[0]`. — https://render.com/articles/how-render-handles-ddos-attacks. That is unsafe for adversarial limits given the append behavior above; the newer PocketBase article explicitly warns that the leftmost XFF entry is caller-controlled. Treat the DDoS example as tracing/analytics guidance, not as a security control.

### 3. Cloudflare's documented semantics (primary)

- `CF-Connecting-IP`: *"provides the client IP address connecting to Cloudflare to the origin web server. This header will only be sent on the traffic from Cloudflare's edge to your origin web server."* — https://developers.cloudflare.com/fundamentals/reference/http-headers/#cf-connecting-ip
- Error 1000 causes: *"The request includes a `CF-Connecting-IP` header."* (HTTP 403) — https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1000/
- XFF: *"If ... an `X-Forwarded-For` header was already present in the request to Cloudflare, Cloudflare will append the IP address of the HTTP proxy connecting to Cloudflare to the header."* and *"Cloudflare recommends that your logs or applications look at `CF-Connecting-IP` or `True-Client-IP` instead of `X-Forwarded-For`."* — https://developers.cloudflare.com/fundamentals/reference/http-headers/#x-forwarded-for
- `True-Client-IP`: *"only available on an Enterprise plan"*; *"There is no difference between the `True-Client-IP` and `CF-Connecting-IP` headers besides the name of the header."*; *"To add a `True-Client-IP` HTTP header to requests, enable the Add 'True-Client-IP' header Managed Transform."* Caution: *"If you are using Cloudflare in a stacked CDN and authenticating HTTP requests based on the IP address value in the `True-Client-IP` header, you must add a `True-Client-IP` header to your requests. If you do not add this header, its value can be spoofed to any value."* — https://developers.cloudflare.com/fundamentals/reference/http-headers/#true-client-ip-enterprise-plan-only
- `X-Real-IP`: *"Cloudflare removes the `x-real-ip` header before the request reaches your origin server"* — https://developers.cloudflare.com/rules/transform/request-header-modification/
- `X-Forwarded-Proto`: *"For incoming requests, the value of this header will be set to the protocol the client used (`http` or `https`). If the client set a different value, it will be overwritten."* — https://developers.cloudflare.com/fundamentals/reference/http-headers/#x-forwarded-proto

Cloudflare does **not** say "CF-Connecting-IP is overwritten"; it says the header is edge-set and that a request carrying it is rejected (error 1000). The trust boundary is the network path: if an origin is reachable directly, the header can be forged — *"It is advised that you also only accept traffic from Cloudflare's IP addresses; otherwise, the header could be spoofed."* — https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/

### 4. Does Render overwrite or pass through? (primary + inference)

- Render says it *"includes"* `CF-Ray` in the request it sends to the service, and the analytics test says it sends `True-Client-Ip` and `CF-Connecting-Ip`. No Render doc says it rewrites `CF-Connecting-IP`.
- The PocketBase guidance only works if the app receives the Cloudflare-set `CF-Connecting-IP`; that is implicit official confirmation of pass-through.
- **Live test:** a client-supplied `CF-Connecting-IP` is rejected at the edge (403 / `error code: 1000`) on both `/healthz` and the `/ws` upgrade. The app therefore never sees a caller-controlled value on the public path.
- **Still unverified:** byte-for-byte preservation on every plan/region and on WebSocket upgrades; whether Render ever sets its own `CF-Connecting-IP` from `remoteAddress` (which would be a proxy IP and would break the guidance). Use the checklist below.

### 5. Header verdict

| Header | What the primary docs say | Verdict |
|---|---|---|
| `CF-Connecting-IP` | Cloudflare edge-set; caller-supplied value causes 403/1000; Render sends it to the app | **Use** (`header:cf-connecting-ip`) |
| `X-Forwarded-For` | Append-only; leftmost entry caller-controlled; Render appends visitor IP | **Do not use** for identity |
| `True-Client-IP` | Enterprise-only, optional managed transform; Render sends it; caller-supplied value is not rejected (live test) | **Only after live overwrite test** |
| `X-Real-IP` | Cloudflare strips it before the origin | **Do not use** |
| `Forwarded` | No Render/Cloudflare guarantee found | **Do not use** |
| `X-Forwarded-Proto` | Cloudflare sets/overwrites it; describes scheme, not identity | Not for identity |

### 6. Secondary/community evidence (not documented fact)

- Render community (2025): a user reports Render *"does not filter out any incoming X-Forwarded-For headers, but it just appends the proxy IP to that list"*; a Render community answer (John_B) recommends `True-Client-IP`. — https://community.render.com/t/accessing-client-ips-in-a-node-express-app/36282
- A second Render community answer (John_B) recommends `True-Client-IP` for proxy hop count. — https://community.render.com/t/what-number-of-proxies-sit-in-front-of-an-express-app-deployed-on-render/35981
- CodeCrafters blog: *"Render uses Cloudflare in front of all its services"*; claims Render support recommends `True-Client-Ip`/`Cf-Connecting-Ip`; notes Render appends XFF. — https://rohitpaulk.com/articles/render-rails-remote-ip
- Arcjet issue (2025-04-16) contains an actual Render request dump: `cf-connecting-ip: 81.97.145.24`, `true-client-ip: 81.97.145.24`, `x-forwarded-for: 81.97.145.24, 172.71.195.123, 10.226.90.65`, `x-forwarded-proto: https`. — https://github.com/arcjet/arcjet-js/issues/3899 (third-party observation; matches Render's articles)
- Render feedback thread (2021): Render's Anurag Goel replies *"we set the first IP in the list to the real client IP."* — https://feedback.render.com/features/p/send-the-correct-x-forwarded-for. This conflicts with the 2026 PocketBase article and observed append behavior; treat it as **stale**.

## What this means for `render.yaml` vs the Render dashboard

- Blueprint spec: *"A Blueprint can create new environment variables or modify the values of existing ones. Render preserves existing environment variables, even if you omit them from the Blueprint file."* — https://render.com/docs/blueprint-spec#setting-environment-variables
- Infrastructure as Code: *"The resource retains any existing environment variable values that aren't overwritten by the Blueprint."* and *"if any such changes conflict with Blueprint-defined configuration, the next Blueprint sync overwrites them."* — https://render.com/docs/infrastructure-as-code#adding-an-existing-resource
- `sync: false` prompts only on initial Blueprint creation; *"When you update an existing Blueprint, Render ignores any environment variables with `sync: false`."* Add new secrets manually. — https://render.com/docs/blueprint-spec#prompting-for-secret-values
- Generated/exported Blueprints: *"The generated `render.yaml` file does not include environment variable values. This is a security precaution. Instead, the generated file sets `sync: false` for all environment variables."* — https://render.com/docs/infrastructure-as-code#generating-a-blueprint-from-existing-services
- The `projects`/`environments` format is supported. — https://render.com/docs/projects#blueprint-support

For this repo: `render.yaml` is an exported file (`# Exported from Render on 2026-11-03...`) using `projects`/`environments` with **no `envVars`**. It is authoritative only if a Blueprint is actually created from it and synced; the file alone changes nothing. If the service **is Blueprint-managed**, omitting `envVars` does not delete dashboard variables — Render preserves them, so a dashboard-set `CLIENT_IP_SOURCE` survives Blueprint syncs. If you add `envVars` to `render.yaml`, the Blueprint becomes the source of truth for those keys and overwrites dashboard values on sync. Use a plain `value:` for this non-secret; `sync: false` is for secrets and is ignored on updates.

**Recommendation:** set `CLIENT_IP_SOURCE=header:cf-connecting-ip` in the **dashboard** first (immediate, low risk), verify it survives a Blueprint sync, then optionally codify it in `render.yaml` with:

```yaml
envVars:
  - key: CLIENT_IP_SOURCE
    value: header:cf-connecting-ip
```

If the service is **not** Blueprint-managed, the dashboard is the only source of truth; editing `render.yaml` has no effect until a Blueprint is created/adopted.

## Live verification checklist

Do this on a preview/staging service; it needs a temporary diagnostic because the app has no header-echo endpoint.

### A. Edge and forgery rejection (safe, no code change)

1. `dig +short <host>` → CNAME chain ending in `cdn.cloudflare.net`; `curl -sSI https://<host>/healthz` → `server: cloudflare`, `cf-ray`, `x-render-origin-server: Render`.
2. `curl -sS -o /dev/null -w '%{http_code}\n' -H 'CF-Connecting-IP: 203.0.113.9' https://<host>/healthz` → `403`, body `error code: 1000`.
3. Same header on the `/ws` upgrade → `403` + `error code: 1000`. This proves the edge rejects caller-supplied `CF-Connecting-IP`; it does not yet prove the app receives the edge-set value.
4. `True-Client-IP`, `X-Forwarded-For`, `X-Real-IP`, and `Forwarded` are **not** rejected with a single short value (they return 200). That is why `true-client-ip` needs an app-level check before you trust it.

### B. What the app actually receives (temporary diagnostic)

Add a temporary `/__headers` route (or a one-line log in the `/ws` upgrade handler) that returns/logs `cf-connecting-ip`, `true-client-ip`, `x-forwarded-for`, `x-real-ip`, `forwarded`, `x-forwarded-proto`, and `socket.remoteAddress`. Use a preview environment or short-lived branch; remove it after. Do not log full IPs in production if privacy-sensitive.

Then send:

- **No custom headers.** Expect `cf-connecting-ip` = your public IP; `true-client-ip` = same (if enabled); `x-forwarded-for` = your IP + Cloudflare edge + Render private hop(s); `x-forwarded-proto` = `https`.
- **`-H 'X-Forwarded-For: 203.0.113.9'`.** Expect XFF to contain `203.0.113.9` at the left and your real IP to its right (append). `cf-connecting-ip` must remain your real IP. If it becomes `203.0.113.9`, do not use it.
- **`-H 'True-Client-IP: 203.0.113.9'`.** If the app sees `203.0.113.9`, `true-client-ip` is spoofable; if it sees your real IP, it was overwritten. Do not choose `header:true-client-ip` unless this test passes.
- **`-H 'CF-Connecting-IP: 203.0.113.9'`.** Expect 403/1000 at the edge; if it reaches the app as `203.0.113.9`, the trust model is broken.
- **`-H 'X-Real-IP: 203.0.113.9'` and `-H 'Forwarded: for=203.0.113.9'`.** Expect absent/ignored or pass-through; do not use either for identity.

**Passed-through vs overwritten:** passed through = the app sees the exact value you sent (bad for identity); overwritten/set = the app sees your real public IP (good); rejected = 403/1000 before the app (good, no caller value reaches it). For XFF, if your forged value appears anywhere, it is append-only and the leftmost entry is not trustworthy.

### C. WebSocket `/ws` upgrade

Baseline:

```bash
curl -sS -i --http1.1 -N --max-time 5 \
  -H 'Connection: Upgrade' -H 'Upgrade: websocket' \
  -H 'Sec-WebSocket-Version: 13' -H 'Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==' \
  -H 'Origin: https://<host>' https://<host>/ws
```

Expect `101 Switching Protocols` and a `{"type":"connected"...}` frame.

1. Add `-H 'CF-Connecting-IP: 203.0.113.9'` → expect `403` + `error code: 1000`.
2. Add `-H 'X-Forwarded-For: 203.0.113.9'` → expect `101`; the temporary log must show the resolved key = your real IP (from `CF-Connecting-IP`), not `203.0.113.9`.
3. Add `-H 'True-Client-IP: 203.0.113.9'` → expect `101`; check the log. If the resolved key is `203.0.113.9`, never use `True-Client-IP`.

### D. After choosing the value

1. Set `CLIENT_IP_SOURCE=header:cf-connecting-ip` in the dashboard (or `envVars` in `render.yaml`), redeploy/restart, and confirm `process.env.CLIENT_IP_SOURCE`.
2. Confirm the per-key cap: from one network, open `CLIENTS_PER_KEY + 1` WebSockets; the extra should get `503`. From a different network, a new connection should be allowed.
3. Confirm absence behavior: a request without `CF-Connecting-IP` (internal/private path) resolves to `null`, so the per-key cap is skipped and the global cap remains — the current fail-safe.
4. Validate the value: one bare IPv4/IPv6 (`net.isIP`), no comma or port. Reject or fall back to `null` otherwise.

## Open questions for Render support

1. Does Render's load balancer preserve `CF-Connecting-IP` unchanged on the request to the app, including WebSocket upgrades, on Free and all regions? Is there any path where Render rewrites it?
2. Is `True-Client-IP` enabled on Render's Cloudflare zone for all services/plans, and does Render/Cloudflare overwrite a caller-supplied value? Our live test shows a caller-supplied `True-Client-IP` is not rejected.
3. Is Cloudflare guaranteed to remain the public edge for `onrender.com` and custom domains? Any planned change?
4. Is there a documented request-header contract for Render (`X-Forwarded-For`, `X-Forwarded-Proto`, `X-Real-IP`, `Forwarded`), including append-vs-replace semantics and the number of hops?
5. Does the DDoS article's advice to key rate limits on `x-forwarded-for.split(',')[0]` still stand? It conflicts with the PocketBase article's warning that the leftmost XFF entry is caller-controlled. Which should we follow?
6. For private-network traffic that bypasses Cloudflare, is there a recommended identity source (mTLS, signed header, etc.)?
