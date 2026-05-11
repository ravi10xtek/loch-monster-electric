import OrangeBanner from './OrangeBanner';

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function JournalPost({ post, related }) {
  return (
    <main>

      {/* ── Full-width hero with breadcrumb overlay ──────── */}
      <section className="jp-hero" style={{ background: post.coverGradient }}>
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <div className="wrap">
            <ol className="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/journal">Journal</a></li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </div>
        </nav>
      </section>

      {/* ── Two-column body ──────────────────────────────── */}
      <div className="jp-body-wrap">

        {/* Main article column */}
        <article className="jp-article">

          {/* Article header — tags, meta, title, intro */}
          <div className="jp-article-header">
            <div className="jp-hero-tags">
              {post.tags.map(t => (
                <span key={t} className="jbadge">{t.toUpperCase()}</span>
              ))}
            </div>
            <p className="jp-hero-meta">{formatDate(post.date)} &nbsp;·&nbsp; {post.readTime}</p>
            <h1 className="jp-hero-title">{post.title}</h1>
            <p className="jp-post-updated">Updated: {formatDate(post.date)}</p>
            <p className="jp-hero-excerpt">{post.excerpt}</p>
          </div>

          {/* Table of contents */}
          {post.toc?.length > 0 && (
            <div className="jp-toc">
              <p className="jp-toc-label">Table of Contents</p>
              <ol className="jp-toc-list">
                {post.toc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Body HTML from CMS */}
          <div
            className="jp-prose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Tags + share */}
          <div className="jp-post-footer">
            <div className="jp-post-tags">
              {post.tags.map(t => (
                <span key={t} className="jbadge">{t.toUpperCase()}</span>
              ))}
            </div>
            <div className="jp-share">
              <span className="jp-share-label">Share:</span>
              <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://lochmonsterelectric.com/journal/' + post.slug)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on Facebook">f</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://lochmonsterelectric.com/journal/' + post.slug)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on X">𝕏</a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="jp-sidebar">
          {related.map(rel => (
            <div key={rel.slug} className="jp-sidebar-card">
              <div className="jp-sidebar-card-img" style={{ background: rel.coverGradient }} />
              <div className="jp-sidebar-card-body">
                <div className="ji-card-tags">
                  {rel.tags.map(t => (
                    <span key={t} className="jbadge jbadge-sm">{t.toUpperCase()}</span>
                  ))}
                </div>
                <h3 className="jp-sidebar-card-title">
                  <a href={`/journal/${rel.slug}`}>{rel.title}</a>
                </h3>
                <a href={`/journal/${rel.slug}`} className="ji-card-cta">READ MORE</a>
              </div>
            </div>
          ))}

          {/* Tag cloud */}
          <div className="jp-sidebar-tags">
            <p className="ji-tags-label">TAGS</p>
            <div className="ji-tags">
              {['guides','warnings','safety','upgrades','compliance','products','insurance'].map(t => (
                <a key={t} href={`/journal?tag=${t}`} className="ji-tag">{t.toUpperCase()}</a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── Recent posts ─────────────────────────────────── */}
      <section className="jp-recent">
        <div className="wrap">
          <div className="journal-header">
            <h2 className="journal-heading" style={{ color: '#1a1a1a' }}>RECENT <span className="text-orange">POSTS</span></h2>
            <a href="/journal" className="explore-btn" style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}>EXPLORE</a>
          </div>
          <div className="journal-track jp-recent-track">
            {related.concat(related).slice(0, 4).map((rel, i) => (
              <article className="jcard" key={`${rel.slug}-${i}`}>
                <h4 className="jcard-title">{rel.title}</h4>
                <div className="jcard-img" style={{ background: rel.coverGradient }} />
                <p className="jcard-excerpt">{rel.excerpt}</p>
                <a href={`/journal/${rel.slug}`} className="jcard-cta">READ MORE</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OrangeBanner />
    </main>
  );
}
