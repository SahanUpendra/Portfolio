import SectionHeader from './SectionHeader.jsx';
import { aboutParagraphs } from '../data/portfolioData.js';

function About() {
  return (
    <section id="about" className="section">
      <div className="container split-section">
        <SectionHeader
          eyebrow="About"
          title="Software engineering shaped by design thinking and disciplined execution."
        />
        <div className="section-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
