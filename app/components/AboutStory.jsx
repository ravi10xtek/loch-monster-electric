export default function AboutStory() {
  return (
    <div className="hub-alt-grid about-story">

      {/* Left — crew photo */}
      <div className="hub-alt-img about-story-img"></div>

      {/* Right — copy */}
      <div className="hub-alt-content about-story-content">
        <p className="about-story-eyebrow">About Loch Monster Electric</p>
        <h2>
          WORK WE&rsquo;D WANT IN OUR <span className="text-orange">OWN HOME.</span>
        </h2>
        <p>
          We started with plumbing. One truck, one guy, and one goal: take care of people and do the
          kind of work we&rsquo;d want done in our own homes. Over the years, customers kept asking —
          and we kept hearing the same things done.
        </p>
        <p>
          Turns out, when you show up, do good work, and treat folks right — they ask if you do other
          things too.
        </p>
        <p>So yeah&hellip; now we do electrical.</p>
        <p>
          Loch Monster Electric is the same Loch Monster mindset, just with wires instead of water.
          Same crew (well, different licenses). Same commitment to showing up when we say we will.
          Same honest pricing — time and materials, so you only pay for what the job actually saves.
          Same respect for your time, your home, and your budget.
        </p>
        <p>
          We&rsquo;re not trying to be the biggest company in town — we&rsquo;re focused on being the
          most legendary. The crew you call first. The one you tell your neighbors about. The one you
          know will handle it right, every time.
        </p>
        <p className="about-story-cta-label">Having an Electrical Problem?</p>
        <div className="hub-alt-actions">
          <a href="/#contact" className="btn-dark-sm">BOOK NOW</a>
          <a href="/pricing-estimates" className="btn-outline-sm">OUR PRICING</a>
        </div>
      </div>
    </div>
  );
}
