# PageSpeed Performance Report

**Target:** https://loch-monster-electric.vercel.app  
**Tool:** Google PageSpeed Insights (Lighthouse)  
**Status:** Manual run recommended — Google's free API rate-limits unauthenticated requests after 1-2 queries, making automated batch testing unreliable.

## How to run

1. Open https://pagespeed.web.dev
2. Paste a URL from the table below
3. Capture mobile + desktop scores for each
4. Re-run any page 2-3× to average out variance (single runs can swing ±5 points)

## Pages to test (representative sample)

| Priority | Page | Direct PageSpeed link |
|---|---|---|
| 🔴 Critical | Home | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app) |
| 🔴 Critical | Residential hub | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fresidential-electrical-services) |
| 🔴 Critical | Commercial hub | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fcommercial-electrical-services) |
| 🔴 Critical | HOA hub | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fhoa-electrical-services) |
| 🟡 Important | Pricing | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fpricing-estimates) |
| 🟡 Important | Contact | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fcontact-us) |
| 🟡 Important | Service detail (sample) | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fresidential-electrical-services%2Felectrical-upgrades%2Felectrical-panel-upgrade) |
| 🟡 Important | City page (sample) | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fservice-areas%2Fshoreview-mn) |
| 🟢 Spot-check | Blog post (sample) | [Run](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Floch-monster-electric.vercel.app%2Fblog%2Fwhy-are-my-lights-flickering-causes-dangers-and-fixes-for-minnesota-wisconsin-homes) |

## Pass criteria

| Metric | Good | Needs improvement | Poor |
|---|---|---|---|
| Performance score | 90+ | 50-89 | < 50 |
| Accessibility score | 95+ | 80-94 | < 80 |
| Best Practices score | 95+ | 80-94 | < 80 |
| SEO score | 95+ | 80-94 | < 80 |
| LCP (Largest Contentful Paint) | < 2.5s | 2.5-4.0s | > 4.0s |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |
| INP (Interaction to Next Paint) | < 200ms | 200-500ms | > 500ms |
| TBT (Total Blocking Time, lab) | < 200ms | 200-600ms | > 600ms |

## Known optimizations already in place

- ✅ **Next.js App Router** — automatic code splitting, route-level prefetching
- ✅ **Image optimization** — `<Image>` component with auto WebP/AVIF, lazy loading, responsive `srcset`
- ✅ **Static site generation** — every hub, service, city, blog page rendered to static HTML
- ✅ **CDN edge delivery** — Vercel's global edge network
- ✅ **Font subsetting** — `next/font` for self-hosted, subset web fonts
- ✅ **Sharp image processing** — CMS uploads pre-resized to thumbnail, card, hero, and OG variants
- ✅ **HTTP/2 + Brotli compression** — Vercel default

## Expected performance baseline

For a static-first Next.js marketing site on Vercel, baseline expectation:

| Category | Mobile | Desktop |
|---|---|---|
| Performance | 75-95 | 90-99 |
| Accessibility | 90-100 | 90-100 |
| Best Practices | 95-100 | 95-100 |
| SEO | 95-100 | 95-100 |

## If a page scores < 80 on mobile Performance

Likely culprits:
1. **Hero background image** — too large; check if Sharp produced a smaller hero variant
2. **Embedded YouTube video** (home, about) — lazy-load via facade or `loading="lazy"` on iframe
3. **Google Maps iframe** (footer, city pages) — defer load with intersection observer
4. **Render-blocking CSS** — already inlined critical CSS via Next.js
5. **Third-party analytics** (when added) — load via Next.js `<Script strategy="afterInteractive">`

## Sign-off checklist

- [ ] All 4 hub pages scored on mobile + desktop
- [ ] Pricing + contact + 1 service detail page tested
- [ ] Average mobile Performance ≥ 80
- [ ] LCP < 2.5s on all key pages
- [ ] CLS < 0.1 on all key pages
- [ ] No errors in Lighthouse "Best Practices" or "SEO" categories
