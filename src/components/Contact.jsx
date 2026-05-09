function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-content">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something simple and useful.</h2>
        <p>
          Replace this text with your preferred contact message. Add your email,
          social profiles, or a short invitation for project inquiries.
        </p>
        <div className="contact-links" aria-label="Contact links">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
