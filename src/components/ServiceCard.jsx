function ServiceCard({ icon: Icon, title, description, color='emerald', idx }) {
  const colors = {
    emerald: 'bg-accent/10 text-accent border-accent/20',
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    rose: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
  };
  return (
    <div className="card p-8 card-glow" data-cursor-hover>
      <div className={`w-12 h-12 rounded-xl border ${colors[color]} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
export default ServiceCard;
