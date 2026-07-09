function TopBreeds() {
  return (
    <section className="breeds" id="breeds">
      <div className="section-head">
        <p className="eyebrow">Top picks</p>
        <h2>Featured cat breeds</h2>
      </div>
      <div className="breeds-grid">
        <article className="breed-card">
          <span className="tag">01</span>
          <h3>Ragdoll</h3>
          <p>Soft, affectionate, and always ready for a cuddle.</p>
        </article>
        <article className="breed-card">
          <span className="tag">02</span>
          <h3>Scottish Fold</h3>
          <p>Adorable folded ears and a playful charm.</p>
        </article>
        <article className="breed-card">
          <span className="tag">03</span>
          <h3>British Shorthair</h3>
          <p>Round face, plush coat, and calm, loving energy.</p>
        </article>
      </div>
    </section>
  );
}

export default TopBreeds;
