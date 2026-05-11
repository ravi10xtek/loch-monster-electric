function ColorHeading({ heading }) {
  const words = heading.trim().split(' ');
  if (words.length < 3) return <h2>{heading}</h2>;
  const first = words[0];
  const last = words[words.length - 1];
  const middle = words.slice(1, -1).join(' ');
  return (
    <h2>
      {first} <span className="text-orange">{middle}</span>{' '}
      {last}
    </h2>
  );
}

export default function WhenDoYouNeed({ data }) {
  const { whenHeading, scenarios, gradient, color } = data;
  return (
    <section className="wynd-section">
      <div className="wynd-img" style={{ background: gradient || color }}></div>
      <div className="wynd-content">
        <p className="eyebrow-left">When Do You Need</p>
        <ColorHeading heading={whenHeading} />
        <div className="wynd-scenarios">
          {scenarios.map((s) => (
            <div className="wynd-card" key={s.heading}>
              <strong>{s.heading}</strong>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="wynd-want">Want {whenHeading.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</p>
        <div className="wynd-actions">
          <a href="#contact" className="btn-dark-sm">BOOK NOW</a>
          <a href="#pricing" className="btn-outline-sm">OUR PRICING</a>
        </div>
      </div>
    </section>
  );
}
