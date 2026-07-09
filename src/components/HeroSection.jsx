function HeroSection() {
  return (
    <section className="hero" id="about">
      <div className="hero-copy">
        <p className="eyebrow">Welcome to the cozy cat space</p>
        <h1>Adorable cats, vibrant styling, and playful frontend design.</h1>
        <p className="hero-text">
          A modern cat showcase made with React. No backend, no data fetching, only
          rich visual storytelling and beautiful layout.
        </p>
        <div className="hero-buttons">
          <button className="primary">View gallery</button>
          <button className="secondary">Meet breeds</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-glow" />
        <img
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80"
          alt="Cute cat"
        />
      </div>
    </section>
  );
}

export default HeroSection;
