import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Projects() {
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="My Projects" subtitle="A selection of websites, clones, interactive apps, and UI experiments I've built to practice and showcase my skills." />
      <section className="section-padding border-t border-default">
        <div className="container-max">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(c=>(
              <button
                key={c}
                onClick={()=>setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all data-cursor-hover ${filter===c?'bg-accent text-white':'border border-default text-secondary hover:border-accent hover:text-accent'}`}
                data-cursor-hover
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p=><ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
