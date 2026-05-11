export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            <span className="hero-title-line">PROFESSIONAL <span className="text-orange">ELECTRICAL</span></span>
            <span className="hero-title-line"><span className="text-orange">SERVICES</span> FOR MINNESOTA</span>
            <span className="hero-title-line">AND WISCONSIN</span>
          </h1>
          <p className="hero-tagline">Serving Homes, Businesses &amp; HOAs Across the Twin Cities</p>
          <p className="hero-body">
            When something electrical goes wrong, it can throw your whole day off. That&rsquo;s where we come in.
            Loch Monster Electric helps homeowners, businesses, and community associations keep their power safe,
            reliable, and up to code &mdash; without the runaround. From troubleshooting and repairs to major
            upgrades, we show up ready to get the job done right.
          </p>
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
