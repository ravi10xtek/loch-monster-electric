import SmartBreadcrumb from '../ui/smart-breadcrumb'

export default function MediaHero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <SmartBreadcrumb />
      <div className="hero-inner media-hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">Our Work</p>
          <h1>
            <span className="hero-title-line">EXPLORE OUR</span>
            <span className="hero-title-line"><span className="text-orange">WORK IN ACTION</span></span>
          </h1>
          <p className="hero-tagline">Real projects. Real results. From panel upgrades to full commercial builds.</p>
          <p className="hero-body">Step into our world of precision, safety, and innovation. Every project tells the story of how we deliver reliable electrical solutions every day.</p>
          <div className="media-hero-ctas">
            <a href="#projects" className="btn-dark-outline">VIEW PROJECTS</a>
            <a href="#stay-connected" className="btn-orange">FOLLOW US</a>
          </div>
        </div>
      </div>
    </section>
  )
}
