function SectionHeader({ eyebrow, title, subtitle, wide = false }) {
  return (
    <div className={`section-heading${wide ? ' wide' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
