import { profile } from '../data/portfolioData.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <a href="#hero">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
