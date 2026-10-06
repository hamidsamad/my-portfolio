function SectionHeader({ eyebrow, title, centered }) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="h-lg mt-4 gradient-text">{title}</h2>}
    </div>
  );
}
export default SectionHeader;
