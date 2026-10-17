import Icon from './Icon';

function AchievementCard({ a }) {
  return (
    <div className="reveal group flex items-start gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-300">
      <div className={`w-10 h-10 rounded-lg ${a.iconBg} border ${a.iconBorder} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
        <Icon name={a.icon} className={a.iconColor} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">{a.title}</h3>
        <p className="text-sm font-light text-[var(--text-2)] leading-relaxed">{a.description}</p>
      </div>
    </div>
  );
}
export default AchievementCard;
