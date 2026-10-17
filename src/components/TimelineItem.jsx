import Icon from './Icon';

function TimelineItem({ item }) {
  return (
    <div className="reveal relative pb-12">
      <div className="timeline-dot" />
      <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-300">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {item.badge && <span className={`px-2.5 py-1 rounded text-[10px] uppercase tracking-wider ${item.badgeBg} ${item.badgeColor} border ${item.badgeBorder}`}>{item.badge}</span>}
          <span className="text-xs text-[var(--text-3)]">{item.period}</span>
        </div>
        <h3 className="text-lg font-medium mb-1">{item.title}</h3>
        <ul className="mt-4 space-y-2">
          {item.items.map((p,i)=>(
            <li key={i} className="flex items-start gap-2 text-sm font-light text-[var(--text-2)]">
              <Icon name="LuCheck" className="text-emerald-500 text-xs mt-1 flex-shrink-0" />{p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TimelineItem;
