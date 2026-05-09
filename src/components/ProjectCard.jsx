import TagList from './TagList.jsx';

function ProjectCard({ title, description, tech }) {
  return (
    <article className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card-footer">
        <TagList items={tech} ariaLabel={`${title} technologies`} />
      </div>
    </article>
  );
}

export default ProjectCard;
