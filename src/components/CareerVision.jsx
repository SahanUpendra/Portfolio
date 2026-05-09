import { careerVision } from '../data/portfolioData.js';

function CareerVision() {
  return (
    <section id="career-vision" className="section section-muted">
      <div className="container vision-content">
        <p className="eyebrow">Career Vision</p>
        <h2>{careerVision}</h2>
      </div>
    </section>
  );
}

export default CareerVision;
