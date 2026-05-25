import { getPosts } from '../lib/cms'

const FALLBACK_ARTICLES = [
  {
    title: 'WHY ARE MY LIGHTS FLICKERING? CAUSES, DANGERS, AND FIXES FOR MINNESOTA & WISCONSIN HOMES',
    img: 'bulb',
    excerpt: "Flickering lights aren't just a nuisance — they're often an early sign of electrical issues. Learn what causes light flicker in Minnesota and Wisconsin homes, from loose bulbs to wiring or panel problems, and when to call a licensed electrician.",
    href: '/blog/why-are-my-lights-flickering-causes-dangers-and-fixes-for-minnesota-wisconsin-homes',
  },
  {
    title: 'PANEL UPGRADES: WHEN YOUR HOME IS ASKING FOR MORE POWER',
    img: 'house',
    excerpt: "Older panels weren't built for modern loads — EVs, heat pumps, induction ranges, hot tubs. We'll walk through how to spot the signs your panel is at its limit and what a clean, code-compliant upgrade looks like.",
    href: '/blog/panel-upgrades-when-your-home-needs-more-power',
  },
  {
    title: 'EV CHARGER INSTALLATION AT HOME: WHAT YOU ACTUALLY NEED',
    img: 'panel',
    excerpt: "Level 2 charging changes how you live with an electric vehicle. Here's the real-world breakdown of circuits, panels, permits, and pricing for installing a home EV charger in the Twin Cities metro.",
    href: '/blog/ev-charger-installation-at-home-what-you-actually-need',
  },
  {
    title: 'ELECTRICAL SAFETY CHECKLIST EVERY MN HOMEOWNER SHOULD KNOW',
    img: 'home',
    excerpt: "Outdated outlets, missing GFCIs, scorched switches — small things that quietly become big problems. Use this homeowner-friendly checklist to spot what needs attention before it turns into an emergency call.",
    href: '/blog/electrical-safety-checklist-mn-homeowners',
  },
  {
    title: 'SMART HOME WIRING: WHAT TO PLAN BEFORE THE DRYWALL GOES UP',
    img: 'smart',
    excerpt: "A little planning during a remodel saves a lot of patching later. Here's what to wire for — from smart switches to networked lighting — so your home is ready for whatever you add next.",
    href: '/blog/smart-home-wiring-what-to-plan-before-drywall',
  },
]

const IMG_CYCLE = ['bulb', 'house', 'panel', 'home', 'smart']

export default async function Journal() {
  const cmsPosts = await getPosts()
  const useCMS = cmsPosts?.length > 0

  return (
    <section className="journal-section" id="journal">
      <div className="wrap">
        <div className="journal-header">
          <h2 className="journal-heading">THE <span className="text-orange">ELECTRICAL</span> JOURNAL</h2>
          <a href="/blog" className="explore-btn">EXPLORE</a>
        </div>
        <div className="journal-carousel-wrap">
          <div className="journal-track" id="journalTrack">
            {useCMS
              ? cmsPosts.map((post, i) => (
                  <article className="jcard" key={post.slug}>
                    <h4 className="jcard-title">{post.title?.toUpperCase()}</h4>
                    <div
                      className="jcard-img"
                      data-img={post.coverImage ? null : IMG_CYCLE[i % IMG_CYCLE.length]}
                      style={post.coverImage ? { backgroundImage: `url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                    />
                    <p className="jcard-excerpt">{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} className="jcard-cta">READ MORE</a>
                  </article>
                ))
              : FALLBACK_ARTICLES.map((article) => (
                  <article className="jcard" key={article.img}>
                    <h4 className="jcard-title">{article.title}</h4>
                    <div className="jcard-img" data-img={article.img} />
                    <p className="jcard-excerpt">{article.excerpt}</p>
                    <a href={article.href} className="jcard-cta">READ MORE</a>
                  </article>
                ))
            }
          </div>
        </div>
        <div className="journal-nav">
          <button className="cnav-btn cnav-journal" id="jPrev" aria-label="Previous articles">&#8249;</button>
          <button className="cnav-btn cnav-journal" id="jNext" aria-label="Next articles">&#8250;</button>
        </div>
      </div>
    </section>
  )
}
