import SkillBadge from './SkillBadge.jsx';
import { skills } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools and technologies</h2>
        </div>
        <div className="skills-list" aria-label="Skills list">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
