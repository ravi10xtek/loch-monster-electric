# Broken Links Report

**Target:** https://loch-monster-electric.vercel.app  
**Pages crawled:** 83  
**Unique internal `<a href>` links checked:** 87  
**External `<a href>` links discovered:** 24  
**Broken internal links:** 1

> _Note: this report only checks `<a href>` links. Canonical URLs (`<link rel="canonical">`) and meta-tag URLs are excluded — those intentionally point at the future production domain `www.lochmonsterelectric.com`, which currently still serves the old Wix site._

## ❌ Broken internal links

| URL | Status | First seen on |
|---|---|---|
| `https://loch-monster-electric.vercel.app/journal` | 404 | `https://loch-monster-electric.vercel.app/blog/electrical-panel-recalls-minnesota` |

## External `<a href>` links — sample

- http://energystar.gov/
- http://www.saferproducts.gov/
- http://www.se.com/us/en/
- http://www.se.com/us/qoloadcenter-safetyrecallnotice
- http://www.usa.siemens.com/
- https://facebook.com/sharer/sharer.php
- https://tools.google.com/dlpage/gaoptout
- https://twitter.com/intent/tweet
- https://www.cpsc.gov/Recalls/2010/siemens-recalls-circuit-breakers-due-to-fire-hazard
- https://www.cpsc.gov/Recalls/2022/Schneider-ElectricTM-Recalls-1-4-Million-Electrical-Panels-Due-to-Thermal-Burn-and-Fire-Hazards
- https://www.cpsc.gov/s3fs-public/2017-to-2019-Residential-Fire-Loss-Estimates.pdf
- https://www.cpsc.gov/s3fs-public/CPSC-FY24-Annual-Report_0.pdf
- https://www.esfi.org/program/fire-prevention/
- https://www.facebook.com/lochmonsterelectric
- https://www.facebook.com/reel/1590588875500749
- https://www.facebook.com/reel/928757819754138
- https://www.google.com/maps/place/Loch+Monster+Electric/@44.9552941,-93.3789942,17z/data=!4m6!3m5!1s0x52b335f6c847b343:0x648f82f10becbaa1!8m2!3d44.9552941!4d-93.3764193
- https://www.google.com/maps/search/
- https://www.instagram.com/lochmonsterelectric/
- https://www.instagram.com/p/DU_EkUoDdy0/
- … +4 more

## Methodology
- Crawled all 83 sitemap URLs in parallel
- Extracted every `<a href>` value
- Excluded `mailto:`, `tel:`, `#`, `javascript:` schemes (not HTTP-fetchable)
- Excluded canonical/meta hrefs (they intentionally point at production-domain placeholders)
- HEAD-checked each unique internal URL; fell back to GET when HEAD wasn't supported (e.g. some Google endpoints)
- Anything other than 200/301/302/304 flagged as broken
