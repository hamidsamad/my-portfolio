import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from '../components/SectionHeader';
import { services, techStack, skillBars, testimonials } from '../data/skills';
import useReveal from '../hooks/useReveal';
import { LuQuote } from 'react-icons/lu';

function Skills() {
  useReveal();
  const bars = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-fill').forEach((b, i) => {
        gsap.to(b, { scaleX: parseInt(b.dataset.lvl)/100, duration: 1.2, delay: i*0.07, ease: 'power2.out',
          scrollTrigger: { trigger: b, start: 'top 90%' }
        });
      });
    }, bars);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section !pt-40" ref={bars}>
        <div className="container">
          <div className="reveal-element max-w-3xl">
            <span className="eyebrow">Skills & Expertise</span>
            <h1 className="h-xl mt-6 mb-6">Tools I use to<br /><span className="accent-text">build things.</span></h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {services.map((s,i)=>{
              const Icon = s.icon;
              return (
                <div key={i} className="card p-8 reveal-element" data-cursor style={{transitionDelay:`${i*70}ms`}}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-5"><Icon size={22}/></div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div className="reveal-element">
            <h2 className="h-md mb-8">Proficiency Levels</h2>
            <div className="space-y-6">
              {skillBars.map((s,i)=>(
                <div key={i}>
                  <div className="flex justify-between mb-2"><span className="text-sm font-medium">{s.name}</span><span className="text-sm text-[var(--accent)] font-semibold">{s.level}%</span></div>
                  <div className="skill-bar"><div className="skill-fill" data-lvl={s.level}/></div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-element">
            <h2 className="h-md mb-8">Tech Stack</h2>
            <div className="grid grid-cols-4 gap-3">
              {techStack.map((t,i)=>{
                const Icon = t.icon;
                return (
                  <div key={i} className="card p-5 flex flex-col items-center gap-2" data-cursor>
                    <Icon size={28} style={{color:t.color}}/>
                    <span className="text-[10px] text-[var(--text-3)] font-medium text-center">{t.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container">
          <h2 className="h-md mb-12 text-center reveal-element">Kind Words</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t,i)=>(
              <div key={i} className="card p-8 reveal-element" style={{transitionDelay:`${i*100}ms`}}>
                <LuQuote className="text-[var(--accent)] mb-5" size={24}/>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
                <div><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-[var(--text-3)] mt-1">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Skills;
