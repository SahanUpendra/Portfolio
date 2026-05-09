import SkillBadge from './SkillBadge.jsx';

function SkillGroupCard({ title, skills }) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </article>
  );
}

export default SkillGroupCard;
