function TechCard({ icon: Icon, name, color }) {
  return (
    <div className="card p-6 flex flex-col items-center gap-3 card-glow" data-cursor-hover>
      <Icon size={36} style={{ color }} />
      <span className="text-xs text-muted font-medium group-hover:text-primary transition-colors">{name}</span>
    </div>
  );
}
export default TechCard;
