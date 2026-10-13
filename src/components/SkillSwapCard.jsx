import { LuExternalLink, LuArrowUpRight, LuSparkles } from 'react-icons/lu';

function SkillSwapCard() {
  const projectUrl = 'https://skillsswap67.vercel.app/';
  const imageUrl = '/skillswap-pk.jpg';

  const technologies = [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Socket.io',
    'Tailwind CSS',
    'Google OAuth'
  ];

  const descriptionLines = [
    'SkillSwap PK is a peer-to-peer platform where people can exchange skills and knowledge with one another.',
    'Users can teach what they know and learn new skills from other people.',
    'The platform helps users find suitable learning partners through smart skill matching.',
    'It includes user profiles, a skills directory, live chat, and skill-swap agreements.',
    'Its modern, responsive UI provides a smooth experience across desktop and mobile devices.',
    'The mission is to make learning accessible through collaboration, connection, and mutual growth.'
  ];

  return (
    <article
      aria-label="SkillSwap PK Project Showcase"
      className="group relative rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-emerald-950/20 overflow-hidden mb-16 transition-all duration-300 hover:border-emerald-500/40"
    >
      {/* Decorative ambient gradient backdrop */}
      <div
        className="absolute -top-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* Project Image Preview */}
        <div className="lg:col-span-7 xl:col-span-7">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg group/img"
            data-cursor
            title="Open SkillSwap PK live application"
          >
            <div className="aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-slate-900/60">
              <img
                src={imageUrl}
                alt="SkillSwap PK - Peer-to-Peer Skill Exchange Platform"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                Explore Platform <LuExternalLink size={15} />
              </span>
            </div>
          </a>
        </div>

        {/* Project Details & Description */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between">
          <div>
            {/* Top Eyebrow Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <LuSparkles size={13} className="text-emerald-400 animate-pulse" />
                Featured Platform
              </span>
              <span className="text-xs text-white/40 font-mono">2026</span>
            </div>

            {/* Project Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              SkillSwap <span className="text-emerald-400">PK</span>
            </h3>

            {/* Project Description (Exactly 6 Lines) */}
            <div className="space-y-2.5 text-xs sm:text-sm lg:text-[13.5px] xl:text-sm text-white/70 leading-relaxed mb-6 font-normal">
              {descriptionLines.map((line, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-1.5 shrink-0" />
                  <span>{line}</span>
                </p>
              ))}
            </div>

            {/* Technology Badges */}
            <div className="mb-8">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.04] text-white/80 font-medium hover:border-emerald-400/40 hover:text-emerald-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: Live Demo and View Project */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-400 text-black font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              data-cursor
            >
              <span>Live Demo</span>
              <LuExternalLink size={16} />
            </a>

            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm transition-all active:scale-95"
              data-cursor
            >
              <span>View Project</span>
              <LuArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SkillSwapCard;
