'use client';
import { useState } from 'react';
import { ALL_TAGS } from '../data/journal';

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function JournalIndex({ posts }) {
  const featured = posts.find(p => p.featured) || posts[0];
  const [activeTag, setActiveTag] = useState('all');
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const filtered = activeTag === 'all'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.tags.includes(activeTag));

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleTag(tag) {
    setActiveTag(tag);
    setPage(1);
  }

  return (
    <>
      {/* ── Featured post ─────────────────────────────────── */}
      <section className="ji-featured">
        <div className="ji-feat-content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ji-breadcrumb">
              <li><a href="/">Home</a></li>
              <li aria-current="page">Blog</li>
            </ol>
          </nav>
          <p className="ji-feat-eyebrow">Featuring</p>
          <div className="ji-feat-tags">
            {featured.tags.map(t => (
              <span key={t} className="jbadge">{t.toUpperCase()}</span>
            ))}
          </div>
          <h1 className="ji-feat-title">{featured.title}</h1>
          <p className="ji-feat-excerpt">{featured.excerpt}</p>
          <div className="ji-feat-actions">
            <a href="/blog" className="btn-dark-sm">MORE ARTICLES</a>
            <a href={`/blog/${featured.slug}`} className="btn-outline-sm">READ MORE</a>
          </div>
        </div>
        <div
          className="ji-feat-img"
          style={featured.coverImage
            ? { backgroundImage: `url('${featured.coverImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { background: featured.coverGradient }
          }
        />
      </section>

      {/* ── Filter sidebar + article list ─────────────────── */}
      <div className="ji-body">
        {/* Sidebar */}
        <aside className="ji-sidebar">
          <button
            className={`ji-all-btn${activeTag === 'all' ? ' active' : ''}`}
            onClick={() => handleTag('all')}
          >
            <span className="ji-all-dot" />
            ALL
          </button>
          <p className="ji-tags-label">TAGS</p>
          <div className="ji-tags">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                className={`ji-tag${activeTag === tag ? ' active' : ''}`}
                onClick={() => handleTag(tag)}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        {/* Article list */}
        <div className="ji-list">
          {visible.length === 0 && (
            <p className="ji-empty">No articles found for this tag.</p>
          )}
          {visible.map(post => (
            <article key={post.slug} className="ji-card">
              <a
                href={`/blog/${post.slug}`}
                className="ji-card-img"
                style={post.coverImage
                  ? { backgroundImage: `url('${post.coverImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: post.coverGradient }
                }
                aria-hidden="true"
              />
              <div className="ji-card-content">
                <div className="ji-card-tags">
                  {post.tags.map(t => (
                    <span key={t} className="jbadge jbadge-sm">{t.toUpperCase()}</span>
                  ))}
                </div>
                <h2 className="ji-card-title">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <p className="ji-card-meta">Updated: {formatDate(post.date)}</p>
                <p className="ji-card-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="ji-card-cta">READ MORE</a>
              </div>
            </article>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="ji-pagination">
              <button
                className="ji-page-btn ji-page-arrow"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >&#8592;</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  className={`ji-page-btn${page === n ? ' active' : ''}`}
                  onClick={() => setPage(n)}
                >{n}</button>
              ))}
              <button
                className="ji-page-btn ji-page-arrow"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >&#8594;</button>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
