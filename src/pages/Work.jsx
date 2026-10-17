import { LuArrowUpRight } from 'react-icons/lu';
import projects from '../data/projects';
import useReveal from '../hooks/useReveal';
import SkillSwapCard from '../components/SkillSwapCard';

function Work() {
  useReveal();

  return (
    <section className="section !pt-40">
      <div className="container">
        {/* Header */}
        <div className="reveal-element max-w-3xl">
          <span className="eyebrow">Portfolio</span>
          <h1 className="h-xl mt-6 mb-6">
            Selected<br />
            <span className="accent-text">Work.</span>
          </h1>
          <p className="text-[var(--text-2)] text-lg max-w-2xl leading-relaxed">
            Explore a selection of digital experiences I've designed and developed, ranging from modern websites and interactive applications to full-stack platforms and creative UI experiments. Each project reflects my passion for clean design, thoughtful functionality, continuous learning, and building meaningful solutions with modern web technologies.
          </p>
        </div>

        {/* Featured Flagship Project: SkillSwap PK */}
        <div className="mt-12">
          <SkillSwapCard />
        </div>

        {/* Project grid displaying all projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-12" aria-live="polite">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card project-card p-0 group project-item-fade"
              data-cursor
            >
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="project-arrow">
                  <LuArrowUpRight size={18} />
                </div>
              </div>
              <div className="project-info">
                <span className="project-cat">
                  {(p.cat || p.category)} / {p.year}
                </span>
                <h3 className="project-title">{p.title}</h3>
                <p className="text-sm text-[var(--text-2)] line-clamp-2 mb-4">
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {(p.tags || []).map((t, j) => (
                    <span key={j} className="tag tag-outline">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
