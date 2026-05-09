function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Personal Portfolio</p>
          <h1>Your Name</h1>
          <p className="hero-copy">
            I build clean, responsive web experiences with a focus on simple
            structure, readable code, and thoughtful design.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio profile visual">
          <img src="/profile-placeholder.svg" alt="Abstract profile placeholder" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
