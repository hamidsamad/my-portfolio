import { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import SkillSwapCard from '../components/SkillSwapCard';
import { normalizeCategory, getCategories, filterProjects } from '../utils/category';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => getCategories(projects), []);
  const filtered = useMemo(() => filterProjects(projects, activeCategory), [activeCategory]);

  const handleSelect = (c) => {
    setActiveCategory(normalizeCategory(c) === 'all' ? 'all' : c);
  };

  const isSelected = (c) => {
    return normalizeCategory(c) === normalizeCategory(activeCategory);
  };

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="My Projects"
        subtitle="Explore a selection of digital experiences I've designed and developed, ranging from modern websites and interactive applications to full-stack platforms and creative UI experiments. Each project reflects my passion for clean design, thoughtful functionality, continuous learning, and building meaningful solutions with modern web technologies."
      />
      <section className="section-padding border-t border-default">
        <div className="container-max">
          {/* Featured Project: SkillSwap PK */}
          <SkillSwapCard />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Project categories">
            {categories.map((c) => {
              const active = isSelected(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleSelect(c)}
                  role="tab"
                  aria-selected={active}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    active
                      ? 'btn-accent !py-2 !px-5 !text-sm font-semibold'
                      : 'border border-[var(--border)] text-secondary hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]'
                  }`}
                  data-cursor-hover
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="py-16 text-center text-secondary">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
