import SectionHeader from './SectionHeader.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolioData.js';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected software and research projects"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
