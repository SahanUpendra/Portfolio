function TagList({ items, className = 'tag-list', ariaLabel }) {
  return (
    <div className={className} aria-label={ariaLabel}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default TagList;
