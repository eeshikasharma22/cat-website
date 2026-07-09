function CatGallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-head">
        <p className="eyebrow">Gallery</p>
        <h2>Charming cat moments</h2>
      </div>
      <div className="gallery-grid">
        <article className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80"
            alt="Cat looking at camera"
          />
          <h3>Curious stare</h3>
          <p>Bright eyes and a gentle personality in every frame.</p>
        </article>
        <article className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80"
            alt="Cat sitting gracefully"
          />
          <h3>Elegant pose</h3>
          <p>Soft fur, calm pose, and a warm afternoon glow.</p>
        </article>
        <article className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1516684669134-de6aa98f61a0?auto=format&fit=crop&w=800&q=80"
            alt="Cat relaxing"
          />
          <h3>Lazy afternoon</h3>
          <p>Dreamy naps and cozy comfort, perfect for cat lovers.</p>
        </article>
      </div>
    </section>
  );
}

export default CatGallery;
