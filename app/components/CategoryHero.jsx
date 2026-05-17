import SmartBreadcrumb from "../ui/smart-breadcrumb";

export default function CategoryHero({ hero }) {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={hero.image ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${hero.image}')`,
        } : undefined}
      ></div>
      <SmartBreadcrumb />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.title.map((line, i) => (
              <span className="hero-title-line" key={i}>
                {i === 0 ? line : <span className="text-orange">{line}</span>}
              </span>
            ))}
          </h1>
          <p className="hero-tagline">{hero.tagline}</p>
          <p className="hero-body">{hero.body}</p>
          {hero.body2 && <p className="hero-body">{hero.body2}</p>}
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>Phone Is Usually The Fastest Way To Reach You,</strong> But We&apos;re Happy To Follow Up However Works Best.
          </div>
          <form className="hero-form" action="#" method="post">
            <div className="form-row-2">
              <input type="text" placeholder="First &amp; Last name *" required />
              <input type="tel" placeholder="Phone number *" required />
            </div>
            <input type="email" placeholder="Email*" required />
            <button type="submit" className="btn-orange-full">NEXT</button>
          </form>
        </div>
      </div>
    </section>
  );
}
