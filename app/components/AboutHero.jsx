import HeroForm from './HeroForm'

export default function AboutHero() {
  return (
    <section className="hero about-hero" id="home">
      <div className="hero-bg"></div>

      <nav className="breadcrumb-nav" aria-label="breadcrumb">
        <div className="wrap">
          <ol className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li aria-current="page">About Us</li>
          </ol>
        </div>
      </nav>

      <div className="hero-inner about-hero-inner">
        <div className="hero-left">
          <h1 className="about-hero-h1">
            FROM PIPES TO POWER&mdash;<br />
            <span className="text-orange">SAME CREW, SAME HEART.</span>
          </h1>
          <p className="about-hero-author">By Mike Lochner Jr.</p>
          <p className="hero-body">Because we kept hearing it.</p>
          <p className="about-hero-quote">&ldquo;Do you do electrical?&rdquo;</p>
          <p className="about-hero-quote">&ldquo;I wish you could just handle the whole thing.&rdquo;</p>
          <p className="hero-body">
            So now we can. If we&rsquo;re already the crew you trust for plumbing, it makes sense to
            handle the rest. Remodels, panel upgrades, service calls&mdash;we&rsquo;ve got the team,
            the tools, and the mindset to do it right. Different trade. Same neighbors. Same you.
          </p>
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>Phone Is Usually The Fastest Way To Reach You,</strong>{' '}But We&apos;re Happy To Follow Up However Works Best.
          </div>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
