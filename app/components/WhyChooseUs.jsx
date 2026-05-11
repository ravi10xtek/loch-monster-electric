const placeholderReviews = [
  { initial: 'J', name: 'Joshua Williams', time: 'a month ago', text: "Couldn't recommend more! Brad was efficient, knowledgeable, and always willing to explain the work along the way. Super happy with my new lights and electrical panel!" },
  { initial: 'S', name: 'Sarah Olson', time: '2 months ago', text: "Showed up on time, fair pricing, and the work was clean. They walked me through every option before starting. Will absolutely call them again." },
  { initial: 'M', name: 'Michael Anderson', time: '3 months ago', text: "Top-notch service from start to finish. Honest, friendly, and skilled — exactly what you want from your local electrician. Highly recommend." },
  { initial: 'E', name: 'Emily Johnson', time: '4 months ago', text: "Quick response, transparent pricing, and the job was done right the first time. It's clear they really care about doing things properly." },
  { initial: 'D', name: 'David Peterson', time: '5 months ago', text: "Best electrical experience I've had. Professional, on time, and they took the time to make sure everything was perfect before leaving." },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="wrap">
        <p className="eyebrow-center light-eye">Why Choose Us</p>
        <h2 className="center-heading white-head">
          WE OFFER A WIDE RANGE OF <span className="text-orange">ELECTRICAL SERVICES</span>,<br />
          FROM NEW CONSTRUCTION TO TROUBLESHOOTING.
        </h2>
        <div className="reviews-row">
          <button className="cnav-btn cnav-side" id="wPrev" aria-label="Previous reviews">&#8249;</button>
          <div className="why-carousel-wrap">
            <div className="why-track" id="whyTrack" data-state="placeholder">
              {placeholderReviews.map((r) => (
                <div className="review-card" key={r.name}>
                  <div className="rc-head">
                    <div className="rc-avatar">{r.initial}</div>
                    <div className="rc-meta">
                      <div className="rc-name">{r.name}</div>
                      <div className="rc-time">{r.time}</div>
                    </div>
                  </div>
                  <div className="rc-stars" aria-label="5 stars">★★★★★</div>
                  <div className="rc-text">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
          <button className="cnav-btn cnav-side" id="wNext" aria-label="Next reviews">&#8250;</button>
        </div>
        <div className="review-cta">
          <p className="review-cta-label">Review Us On</p>
          <a
            className="review-google-btn"
            id="reviewGoogleBtn"
            href="https://www.google.com/maps/search/?api=1&query=Loch+Monster+Electric"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="rg-text">GOOGLE</span>
            <svg className="rg-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
