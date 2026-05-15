# Loch Monster Electric — Website

Next.js 15 marketing site for Loch Monster Electric, a residential, commercial, and HOA electrical contractor. Content is driven by the companion CMS at `../lme-cms`.

## Stack

- **Framework:** Next.js 15 (App Router, RSC)
- **Language:** JavaScript (no TypeScript)
- **Styling:** Plain CSS (global stylesheets, no CSS-in-JS)
- **CMS:** Payload CMS v3 at `http://localhost:3001` (dev) — see `../lme-cms`
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

Both the website (port 3000) and the CMS (port 3001) need to be running for CMS-driven pages to work. Start the CMS first:

```bash
cd ../lme-cms && npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values. Required variables:

| Variable | Purpose |
|---|---|
| `CMS_URL` | Internal URL of the Payload CMS (server-side fetches) |
| `NEXT_PUBLIC_CMS_URL` | Public URL of the CMS (client-side previews) |
| `REVALIDATION_SECRET` | Shared secret for ISR webhook — must match `LME_REVALIDATE_SECRET` in the CMS |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps JS API key (service area map) |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | Google Place ID for the LME Google listing (reviews) |
| `SITE_URL` | Production domain — used for sitemap and OG canonical URLs |

## Project Structure

```
app/
  components/       # Shared UI components (one file per component)
  components/blocks/ # Block-renderer components for CMS page builder
  data/             # Static fallback data (used when CMS is unavailable)
  lib/
    cms.js          # All Payload CMS fetch functions — single source of truth
    normalize.js    # Transforms raw CMS API responses into component-ready shapes
    utils.js        # Shared utilities (formatDate, etc.)
  ui/               # Client-side interactive JS (maps, sliders, reviews)
  api/
    contact/        # Contact form submission handler
    revalidate/     # ISR webhook endpoint called by the CMS on content changes
  service-areas/    # Dynamic city pages ([city]/page.js)
  preview/          # Live preview routes for Payload CMS editor
```

## Data Flow

1. Pages call functions from `app/lib/cms.js` to fetch content from Payload
2. Raw API responses are normalized via `app/lib/normalize.js` into a consistent shape
3. Components receive normalized data as props; they fall back to `app/data/*.js` if data is missing
4. On content change, the CMS POSTs to `/api/revalidate` with a secret — Next.js rerenders the affected page via ISR

## Key Conventions

- **CMS-first, fallback-safe:** Every page/component that renders CMS data must handle `null`/`undefined` gracefully and fall back to static data in `app/data/`
- **No prop drilling through many levels** — pages fetch data at the top and pass it down one level to page-level components
- **One component per file** — components live in `app/components/`, named with PascalCase
- **Shared utilities go in `app/lib/utils.js`** — don't duplicate helpers like `formatDate` across components
- **No TypeScript** — the project is plain JS; add JSDoc comments on complex function signatures instead

## Content Collections (managed in CMS)

| Collection | Website usage |
|---|---|
| Locations | `/service-areas/[city]` dynamic pages |
| Services | Sub-service detail pages |
| ServiceHubs | Category landing pages (residential/commercial/HOA) |
| CategoryHubs | Top-level service category pages |
| Posts | `/journal/[slug]` blog posts |
| PageSEO | Meta title, description, OG image per page |
| Pages | Block-based custom pages via the page builder |
| FAQs | Shared FAQ content |
| ContactSubmissions | Form submissions (CMS only, not rendered on site) |

## Forms

The contact form in `ContactHero.jsx` is the reference implementation — it submits to `/api/contact` via `fetch` with proper validation, success, and error states. Any new forms should follow this pattern. The `action="#"` on hero form variants is intentional — these forms are handled by client-side JS in `app/ui/home-interactions.js`.

## ISR Revalidation

The CMS calls `POST /api/revalidate` after every save. The route in `app/api/revalidate/route.js` maps collection slugs to Next.js cache tags and paths. When adding a new CMS collection that affects the website, add an entry to `COLLECTION_MAP` in that file.
