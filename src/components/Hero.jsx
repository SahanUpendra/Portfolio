import ProfileImage from './ProfileImage.jsx';
import { profile } from '../data/portfolioData.js';

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-copy">
            {profile.intro}
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href={profile.cv} download>
              Download CV
            </a>
            <a
              className="button ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio profile visual">
          <ProfileImage image={profile.image} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
