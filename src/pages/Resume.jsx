import { LuBriefcase, LuGraduationCap, LuDownload, LuCheck } from 'react-icons/lu';
import { experiences, education } from '../data/resume';
import useReveal from '../hooks/useReveal';

function Timeline({ items, icon: Icon }) {
  return (
    <div className="relative pl-10">
      <div className="timeline-line"/>
      {items.map((item,i)=>(
        <div key={i} className="relative pb-10 last:pb-0 reveal-element">
          <div className="timeline-dot"/>
          <div className="card p-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              {item.badge && <span className="tag">{item.badge}</span>}
              <span className="text-xs text-[var(--text-3)]">{item.period}</span>
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-[var(--accent)] mt-1 mb-3">{item.company || item.institution}</p>
            <ul className="space-y-2">{item.items.map((p,j)=>(
              <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-2)]"><LuCheck className="text-[var(--accent)] mt-0.5 flex-shrink-0" size={14}/>{p}</li>
            ))}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Resume() {
  useReveal();
  return (
    <section className="section !pt-40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal-element">
          <div>
            <span className="eyebrow">Resume</span>
            <h1 className="h-xl mt-6">Experience &<br /><span className="accent-text">Education.</span></h1>
          </div>
          <a
            href="/Hamid_Ali_Baloch_CV.pdf"
            download="Hamid_Ali_Baloch_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent self-start inline-flex items-center gap-2 shadow-lg hover:shadow-[var(--accent-glow)] transition"
            data-cursor
          >
            <LuDownload size={18} /> Download CV
          </a>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8 reveal-element">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center border border-[var(--border)]"><LuBriefcase size={20}/></div>
              <h2 className="text-2xl font-bold font-serif">Experience</h2>
            </div>
            <Timeline items={experiences} icon={LuBriefcase}/>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8 reveal-element">
              <div className="w-10 h-10 rounded-xl bg-[var(--emerald-soft)] text-[var(--emerald-light)] flex items-center justify-center border border-[var(--emerald)]/25"><LuGraduationCap size={20}/></div>
              <h2 className="text-2xl font-bold font-serif">Education</h2>
            </div>
            <Timeline items={education} icon={LuGraduationCap}/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
