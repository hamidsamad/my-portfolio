import { useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import projects from '../data/projects';
import useReveal from '../hooks/useReveal';

function Work() {
  useReveal();
  const cats = ['All', ...new Set(projects.map(p => p.cat))];
  const [f, setF] = useState('All');
  const list = f === 'All' ? projects : projects.filter(p => p.cat === f);
  return (
    <section className="section !pt-40">
      <div className="container">
        <div className="reveal-element max-w-3xl">
          <span className="eyebrow">Portfolio</span>
          <h1 className="h-xl mt-6 mb-6">Selected<br /><span className="accent-text">Work.</span></h1>
          <p className="text-[var(--text-2)] text-lg max-w-xl leading-relaxed">A curated selection of websites, clones, interactive applications, and UI projects I've built to learn, practice, and showcase my skills.</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-12 mb-12 reveal-element">
          {cats.map(c=>(
            <button key={c} onClick={()=>setF(c)} data-cursor
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${f===c?'bg-[var(--accent)] text-white':'border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((p,i)=>(
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="card p-0 group reveal-element" data-cursor>
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy"/>
                <div className="project-arrow"><LuArrowUpRight size={18}/></div>
              </div>
              <div className="project-info">
                <span className="project-cat">{p.cat} / {p.year}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="text-sm text-[var(--text-2)] line-clamp-2 mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">{p.tags.map((t,j)=><span key={j} className="tag tag-outline">{t}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Work;
