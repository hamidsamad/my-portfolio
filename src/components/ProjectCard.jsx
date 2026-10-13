import { LuExternalLink, LuGithub } from 'react-icons/lu';

function ProjectCard({ p }) {
  const imageUrl = p.image || p.img;
  const description = p.description || p.desc;
  const liveUrl = p.liveUrl || p.link;
  const tags = p.tags || [];

  return (
    <div className="card project-card overflow-hidden card-glow" data-cursor-hover>
      <div className="h-56 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={p.title}
          loading="lazy"
          className="project-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t, i) => {
            if (typeof t === 'string') {
              return (
                <span key={i} className="tag tag-outline">
                  {t}
                </span>
              );
            }
            return (
              <span
                key={i}
                className={`tag ${t.bg || ''} ${t.color || ''} border ${t.border || ''}`}
              >
                {t.label || t}
              </span>
            );
          })}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2 mb-5">
          {description}
        </p>
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
            >
              <LuExternalLink size={14} /> Live Demo
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary"
            >
              <LuGithub size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
