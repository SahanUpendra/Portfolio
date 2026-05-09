import { profile } from '../data/portfolioData.js';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-content">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect around software, systems, and digital operations.</h2>
        <p>
          I am open to software engineering opportunities, full-stack projects,
          and professional collaborations connected to digital workflows.
        </p>
        <div className="contact-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
