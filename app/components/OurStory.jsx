export default function OurStory() {
  return (
    <section className="pipes-section" id="story">
      <div className="wrap">
        <div className="pipes-grid">
          <div className="pipes-text">
            <p className="pipes-eyebrow">Our Story</p>
            <h2 className="pipes-heading">
              FROM PIPES TO POWER&mdash;<span className="text-orange">SAME CREW, SAME HEART.</span>
            </h2>
            <p className="pipes-body">
              Loch Monster started in plumbing. One truck. One goal: do the kind of work we&rsquo;d want done in
              our own homes. Over the years, customers kept asking the same thing: &ldquo;Do you guys do electrical
              too?&rdquo; Now we do.
            </p>
            <p className="pipes-body">
              Loch Monster Electric brings the same mindset to wiring &mdash; honest pricing, respectful service,
              and a crew that shows up when they say they will. Different trade. Same commitment to doing the job right.
            </p>
            <a href="/about-us" className="pipes-cta">LEARN MORE</a>
          </div>
          <div className="pipes-video">
            <div className="pipes-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Y-slwgEpWgc?rel=0"
                title="Loch Monster Electric — Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
