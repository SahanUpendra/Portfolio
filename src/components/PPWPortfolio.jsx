import { ppwItems } from '../data/portfolio.js';

function PPWPortfolio() {
  return (
    <section id="ppw-portfolio" className="section section-muted">
      <div className="container split-section">
        <div>
          <p className="eyebrow">PPW Portfolio</p>
          <h2>A focused space for practice, progress, and web work.</h2>
        </div>
        <div className="ppw-list">
          {ppwItems.map((item) => (
            <div className="ppw-item" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PPWPortfolio;
