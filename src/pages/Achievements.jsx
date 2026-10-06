import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import achievements from '../data/achievements';
import { achievementStats } from '../data/stats';

function Achievements() {
  return (
    <>
      <PageHeader eyebrow="Milestones" title="Achievements" subtitle="Every milestone represents dedication, practice, and growth on my journey as a developer." />
      <section className="py-16 px-6 border-t border-default">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementStats.map((s,i)=>(
              <div key={i} className="card p-8 text-center card-glow">
                <div className="mb-2"><StatCounter value={s.value} suffix={s.suffix} /></div>
                <div className="text-xs text-muted uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-default">
        <div className="container-max">
          <SectionHeader eyebrow="Highlights" title="Key Milestones" centered />
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {achievements.map((a,i)=>{
              const Icon = a.icon;
              return (
                <div key={i} className="card p-6 flex items-start gap-4 card-glow" data-cursor-hover>
                  <div className={`w-12 h-12 rounded-xl ${a.color.bg} ${a.color.text} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{a.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{a.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Achievements;
