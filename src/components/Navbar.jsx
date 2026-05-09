import { navLinks } from '../data/portfolioData.js';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="logo" href="#hero" aria-label="Go to hero section">
          Sahan Upendra
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
