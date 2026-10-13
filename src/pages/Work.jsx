import { useState, useMemo } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import projects from '../data/projects';
import useReveal from '../hooks/useReveal';
import SkillSwapCard from '../components/SkillSwapCard';
import { normalizeCategory, getCategories, filterProjects } from '../utils/category';

function Work() {
  useReveal();

  // One reliable source of truth for the selected category ('all' by default)
  const [activeCategory, setActiveCategory] = useState('all');

  // Stable category tabs derived from projects data while preserving 'All' first
  const categories = useMemo(() => getCategories(projects), []);

  // Filtered projects derived freshly from the original complete projects array
  const filteredProjects = useMemo(() => {
    return filterProjects(projects, activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (cat) => {
    if (normalizeCategory(cat) === 'all') {
      setActiveCategory('all');
    } else {
      setActiveCategory(cat);
    }
  };

  const isSelected = (cat) => {
    return normalizeCategory(cat) === normalizeCategory(activeCategory);
  };

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
          <p className="text-[var(--text-2)] text-lg max-w-xl leading-relaxed">
            A curated selection of websites, clones, interactive applications, and UI projects I've built to learn, practice, and showcase my skills.
          </p>
        </div>

        {/* Featured Flagship Project: SkillSwap PK */}
        <div className="mt-12">
          <SkillSwapCard />
        </div>

        {/* Category filter tabs */}
        <div
          className="flex flex-wrap gap-2 mt-12 mb-12 reveal-element"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((c) => {
            const active = isSelected(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => handleCategoryClick(c)}
                data-cursor
                role="tab"
                aria-selected={active}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6" aria-live="polite">
          {filteredProjects.map((p) => (
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

        {/* Fallback empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-[var(--text-2)]">
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Work;
