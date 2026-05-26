# Security Headers Check

**Target:** https://loch-monster-electric.vercel.app
**HTTP status:** 200

| Header | Present | Value | Purpose |
|---|---|---|---|
| `strict-transport-security` | ✅ | `max-age=63072000; includeSubDomains; preload` | HSTS — forces HTTPS on all future visits |
| `x-content-type-options` | ❌ | `` | MIME-sniffing prevention |
| `x-frame-options` | ❌ | `` | Clickjacking protection (legacy) |
| `content-security-policy` | ❌ | `` | Content Security Policy |
| `referrer-policy` | ❌ | `` | Referrer disclosure control |
| `permissions-policy` | ❌ | `` | Browser feature gating |
| `x-xss-protection` | ❌ | `` | Legacy XSS filter |

## Vercel default headers (always-on)

- `strict-transport-security: max-age=63072000; includeSubDomains; preload` — HSTS preload-eligible
- HTTPS enforced at the edge (no HTTP listener)
- TLS 1.3 with modern cipher suites

## Notes

- **HSTS preload** — to fully preload, submit at https://hstspreload.org once DNS flips to production
- **CSP** — Vercel does not set a default CSP; appropriate for a marketing site where most content is first-party + trusted third parties (Google Maps, YouTube, Supabase)
- **X-Frame-Options** — implicitly safe; no `<iframe>` embedding allowed by Vercel platform defaults
