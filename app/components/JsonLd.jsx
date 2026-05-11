/**
 * JsonLd — drops a <script type="application/ld+json"> tag into the page.
 * Works in any React Server Component (layout, page, or nested component).
 *
 * Usage:
 *   import JsonLd from './JsonLd'
 *   <JsonLd schema={{ "@context": "https://schema.org", "@type": "...", ... }} />
 */
export default function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
