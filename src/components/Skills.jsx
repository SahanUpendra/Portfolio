import SectionHeader from './SectionHeader.jsx';
import SkillGroupCard from './SkillGroupCard.jsx';
import { skillGroups } from '../data/portfolioData.js';

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Engineering, creative operations, and professional practice"
        />
        <div className="skills-grid" aria-label="Grouped skills">
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
