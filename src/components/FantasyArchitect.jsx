import ResponsibilityCard from './ResponsibilityCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import TagList from './TagList.jsx';
import { venture } from '../data/portfolioData.js';

function FantasyArchitect() {
  return (
    <section id="fantasy-architect" className="section venture-section">
      <div className="container">
        <SectionHeader
          eyebrow="Entrepreneurial Venture"
          title={venture.title}
          subtitle={venture.subtitle}
          wide
        />

        <div className="venture-layout">
          <div className="venture-copy">
            {venture.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="venture-panel">
            <h3>Tools Used and Planned</h3>
            <TagList
              items={venture.tools}
              className="tool-list"
              ariaLabel="Tools used and planned"
            />
          </div>
        </div>

        <div className="responsibility-grid">
          {venture.responsibilities.map((item) => (
            <ResponsibilityCard key={item} title={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FantasyArchitect;
