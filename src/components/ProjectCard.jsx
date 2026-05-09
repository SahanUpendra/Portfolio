function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card-footer">
        <div className="tag-list" aria-label={`${title} tags`}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href={link}>View Details</a>
      </div>
    </article>
  );
}

export default ProjectCard;
