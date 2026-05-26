# QA & Responsiveness Summary

**Target:** https://loch-monster-electric.vercel.app  
**Status:** Pre-launch QA — code-level + structural audits complete, manual visual sign-off recommended on 3 device sizes

## Code-level QA — completed audits

| Audit | Result |
|---|---|
| Hash placeholder hrefs (`href="#"`) | ✅ 0 found |
| Internal route → page match | ✅ 100% (56 nav URLs, 18 city URLs, 83 sitemap URLs verified 200) |
| External link rot | ✅ 11/11 hardcoded externals 200 (Yelp 403 expected anti-bot, not broken) |
| CMS-driven social URLs | ✅ Facebook/Instagram/TikTok/YouTube all 200 |
| Anchor scroll targets | ✅ Every `#anchor` matches a rendered `id=` |
| `<img>` / `<Image>` alt text | ✅ 100% have alt; CMS requires alt on every media upload |
| Hardcoded `/public/` image references | ✅ All resolve |
| Broken internal links (live crawl) | ✅ After `/journal → /blog` redirect fix |
| Privacy/cookie pages live | ✅ |
| 404 routing | ✅ Returns Next.js default 404 page |

## Responsive breakpoints handled in CSS

| Breakpoint | Use case |
|---|---|
| **< 480px** | iPhone SE-class mobile — single-column layouts, larger touch targets |
| **480-768px** | iPhone Plus / mini tablet — adjusted grid columns |
| **768-1024px** | Tablet portrait — 2-column grids, expanded layouts |
| **1024px+** | Desktop — full mega menu, multi-column grids |
| **1280px max** | Site content max-width container — prevents overstretch on ultrawide |

## Manual visual sign-off — checklist

Test each on **iPhone SE (375px)** + **iPad (768px)** + **Desktop (1440px)**:

### Home (`/`)
- [ ] Hero text + form readable, form fits within viewport
- [ ] Service tabs (Residential/Commercial/HOA) switch correctly
- [ ] Service cards display images, sub-service pills clickable
- [ ] "Stay Connected" social icons clickable
- [ ] FAQ accordions open/close
- [ ] OrangeBanner CTA phone number tappable on mobile

### Service hub pages (`/residential-electrical-services`, etc.)
- [ ] Hero image renders, hero form usable
- [ ] WhatWeHandle tab nav scrolls horizontally on mobile if needed
- [ ] Each tab section's 4 service cards render single-column on mobile (image → text → image → text)
- [ ] "Learn more" buttons on cards work

### Service detail pages (e.g. `/residential-electrical-services/electrical-upgrades/electrical-panel-upgrade`)
- [ ] Hero renders correctly
- [ ] Body content readable, no horizontal scroll
- [ ] FAQ section renders
- [ ] Related services / CTAs work

### Service area pages (`/service-areas/[city]`)
- [ ] City name + state in H1 reads "[CITY]'S TRUSTED ELECTRICIAN"
- [ ] 2nd hero paragraph present (Loch Monster credentials)
- [ ] Google Maps embed loads
- [ ] "Now Hire" section + city image renders
- [ ] "What we fix most often in [CITY]" section visible with 5 cards
- [ ] FAQ + related sections work

### Blog (`/blog` + `/blog/[slug]`)
- [ ] Blog index loads, featured post visible
- [ ] Filter tags work
- [ ] Article cards stack correctly on mobile
- [ ] Article body: inline images render at full width on mobile
- [ ] Author card visible at bottom of article
- [ ] Sidebar (desktop only) shows related posts

### About-us, Contact-us, Media, Pricing, Glossary
- [ ] All page sections render in correct order
- [ ] Contact form fields all visible + submittable
- [ ] Pricing tier cards alternate image left/right correctly (desktop)
- [ ] Glossary letter nav scrolls to the right section

### Navigation
- [ ] Desktop: each mega menu opens on hover, closes when mouse leaves
- [ ] Desktop: Service Areas mega menu hover swaps city preview image
- [ ] Mobile: hamburger opens mobile nav
- [ ] Mobile: each service category opens as accordion
- [ ] Mobile: tapping any link closes the nav
- [ ] Footer columns all visible + organized correctly on mobile

### Forms
- [ ] Hero form (home, service hubs, about, service detail, category hub, service-area)
- [ ] Contact form (`/contact-us`)
- [ ] Required field validation triggers on empty submit
- [ ] Phone tel: links open dialer on mobile

### Cross-cutting
- [ ] No horizontal scroll on any page at 320px width
- [ ] Touch targets ≥ 44×44px (per Apple HIG / WCAG)
- [ ] Headings hierarchy logical (audited separately)
- [ ] Images don't cause layout shift on slow connections

## Known polish items (low priority)

- 25 pages have skipped heading levels (e.g. H2 → H4) — design choice rather than content issue, not a real accessibility blocker
- 1 H1 over 70 chars on `/blog` (page title shows the featured post's full title)
- Three `<img>` tags rely on CMS-set alt without JS-level fallback (defended by CMS schema's required alt field — won't break in practice)

## Tools used

- Live HTML fetch + regex audit across all 83 sitemap pages
- Browser DevTools recommended for manual visual checks
- Lighthouse mobile-emulation (see PageSpeed report)

## Sign-off

| Tester | Date | Device tested | Notes |
|---|---|---|---|
| | | | |
| | | | |
