import OrangeBannerView from './OrangeBannerView';
import FaqAccordion from './FaqAccordion';
import AuthorCard from './AuthorCard';
import { DEFAULT_AUTHOR } from '../data/authors';

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function JournalPost({ post, related }) {
  return (
    <main>

      {/* ── Full-width hero with breadcrumb overlay ──────── */}
      <section className="jp-hero" style={post.coverImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('${post.coverImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : { background: post.coverGradient || '#1a1a1a' }}>
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <div className="wrap">
            <ol className="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
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
            <p className="jp-hero-meta">
              <span className="jp-hero-author">By {post.authorName || DEFAULT_AUTHOR.name}</span>
              &nbsp;·&nbsp; {formatDate(post.date)} &nbsp;·&nbsp; {post.readTime}
            </p>
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

          {/* FAQ accordion — populated from CMS */}
          <FaqAccordion items={post.faq} title={post.faqTitle} />

          {/* Author bio card */}
          <AuthorCard authorSlug={post.authorSlug} />

          {/* Tags + share */}
          <div className="jp-post-footer">
            <div className="jp-post-tags">
              {post.tags.map(t => (
                <span key={t} className="jbadge">{t.toUpperCase()}</span>
              ))}
            </div>
            <div className="jp-share">
              <span className="jp-share-label">Share:</span>
              <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://lochmonsterelectric.com/blog/' + post.slug)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on Facebook">f</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://lochmonsterelectric.com/blog/' + post.slug)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="jp-share-btn" aria-label="Share on X">𝕏</a>
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
                  <a href={`/blog/${rel.slug}`}>{rel.title}</a>
                </h3>
                <a href={`/blog/${rel.slug}`} className="ji-card-cta">READ MORE</a>
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
            <a href="/blog" className="explore-btn" style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}>EXPLORE</a>
          </div>
          <div className="journal-track jp-recent-track">
            {related.concat(related).slice(0, 4).map((rel, i) => (
              <article className="jcard" key={`${rel.slug}-${i}`}>
                <h4 className="jcard-title">{rel.title}</h4>
                <div className="jcard-img" style={{ background: rel.coverGradient }} />
                <p className="jcard-excerpt">{rel.excerpt}</p>
                <a href={`/blog/${rel.slug}`} className="jcard-cta">READ MORE</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OrangeBannerView
        heading='WHERE <span class="ob-white">MINNESOTA</span> &amp; WISCONSIN<br /><span class="ob-white">LIVE, WORK &amp; MANAGE</span>&mdash;WE&apos;RE THERE'
        body="If you've got an emergency—sparking wires, no power, or something that just doesn't feel right—call our 24/7 emergency line. We'll get someone out as soon as possible."
        note="WE RESPOND FAST. NO RUNAROUND."
        ctaLabel="📞 CALL NOW!  763-292-1191"
      />
    </main>
  );
}
