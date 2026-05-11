/**
 * RichTextBlock — renders Payload rich text content.
 * For now renders a prose container; full HTML serialization can be
 * added via a Pages beforeChange hook later (similar to Posts).
 */
export default function RichTextBlock({ content }) {
  if (!content) return null

  // If content has been pre-serialized to HTML (future hook), render it directly
  if (typeof content === 'string') {
    return (
      <section className="jp-prose-section">
        <div className="jp-prose wrap" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    )
  }

  // Fallback: content is a Payload Lexical JSON object — render placeholder
  // until a beforeChange hook serializes it to HTML
  return (
    <section className="jp-prose-section">
      <div className="jp-prose wrap">
        <p><em>[Rich text content — serialization hook pending]</em></p>
      </div>
    </section>
  )
}
