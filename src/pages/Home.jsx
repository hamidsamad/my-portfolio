import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LuArrowUpRight,
  LuMail,
  LuMapPin,
  LuArrowDownRight,
  LuStar,
} from "react-icons/lu";

import Marquee from "../components/Marquee";
import SkillSwapCard from "../components/SkillSwapCard";
import projects from "../data/projects";
import services from "../data/services";

gsap.registerPlugin(ScrollTrigger);

const tech = [
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "GSAP",
  "Next.js",
  "Figma",
  "Framer Motion",
];

const stats = [
  ["30+", "Projects"],
  ["50+", "Challenges"],
  ["2+", "Years Learning"],
];

const ArrowLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-2)] transition font-medium ${className}`}
  >
    {children}
    <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
  </Link>
);

const SectionTitle = ({ number, title }) => (
  <div>
    <span className="text-xs uppercase tracking-[.3em] text-[var(--accent)] font-semibold">
      {number} / {title}
    </span>
    <h2 className="text-4xl md:text-6xl font-semibold tracking-[-.03em] mt-5 font-serif">
      {title === "About" ? "Crafting web experiences" : title}
    </h2>
  </div>
);

const Home = () => {
  const hero = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".hero-eyebrow", { y: 30, opacity: 0, duration: .7 })
        .from(".hero-title", { y: 60, opacity: 0, duration: .9 }, "-=.4")
        .from(".hero-description", { y: 25, opacity: 0, duration: .6 }, "-=.4")
        .from(".hero-actions", { y: 20, opacity: 0, duration: .5 }, "-=.3");

      [".blob-1", ".blob-2", ".blob-3"].forEach((el, i) =>
        gsap.to(el, {
          x: [80, -60, 40][i],
          y: [-50, 40, 60][i],
          duration: [5, 6, 7][i],
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      const move = (e) => {
        const x = (e.clientX / innerWidth - .5) * 30;
        const y = (e.clientY / innerHeight - .5) * 30;

        gsap.to(".blob-1", { x, y, duration: 1 });
        gsap.to(".blob-2", { x: -x * .7, y: -y * .7, duration: 1.2 });
        gsap.to(".blob-3", { x: x * .5, y: y * .5, duration: 1.4 });
      };

      addEventListener("mousemove", move);

      gsap.to(".hero-content", {
        y: -80,
        opacity: .4,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => removeEventListener("mousemove", move);
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        ref={hero}
        className="hero-section relative min-h-screen overflow-hidden flex items-center"
      >
        <div className="blob-1 absolute w-[34rem] h-[34rem] rounded-full bg-[var(--accent)]/15 blur-[120px] -top-20 -left-20 pointer-events-none" />
        <div className="blob-2 absolute w-[30rem] h-[30rem] rounded-full bg-[var(--emerald)]/20 blur-[120px] top-1/3 -right-32 pointer-events-none" />
        <div className="blob-3 absolute w-96 h-96 rounded-full bg-[var(--accent-2)]/12 blur-[100px] bottom-0 left-1/3 pointer-events-none" />

        <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
          <div className="max-w-5xl">
            <div className="hero-eyebrow flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_12px_var(--accent)] shrink-0" />
              <span className="text-xs uppercase tracking-[.25em] text-[var(--accent)] font-semibold">
                Full Stack Developer (Frontend &amp; Backend)
              </span>
            </div>

            <h1 className="hero-title text-[clamp(3.5rem,10vw,9rem)] leading-[.90] tracking-[-.03em] font-bold font-serif">
              Hamid Ali
              <br />
              <span className="accent-text italic">Baloch.</span>
            </h1>

            <p className="hero-description mt-10 max-w-3xl text-lg md:text-xl text-[var(--text-2)] leading-relaxed">
              I believe great digital experiences begin with thoughtful ideas, purposeful design, and attention to every detail. I combine creativity and technology to build intuitive interfaces, meaningful interactions, and powerful web solutions that balance simplicity with functionality, delivering digital experiences that feel effortless, perform beautifully, and stand out for all the right reasons.
            </p>

            <div className="hero-actions flex flex-wrap gap-4 mt-10">
              <Link
                to="/work"
                className="btn-accent inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold shadow-xl transition"
                data-cursor
              >
                View My Work <LuArrowUpRight />
              </Link>

              <Link
                to="/contact"
                className="btn-ghost inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition"
                data-cursor
              >
                Let's Talk <LuMail />
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-14 text-[var(--text-3)]">
              <LuMapPin />
              Quetta, Pakistan
              <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] mx-2" />
              Available for work
            </div>
          </div>

          <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-3 text-[var(--text-3)]">
            <span className="text-xs uppercase [writing-mode:vertical-rl]">
              Scroll to explore
            </span>
            <LuArrowDownRight />
          </div>
        </div>
      </section>

      <Marquee items={tech} />

      <section className="py-28 md:py-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24">
          <span className="text-xs uppercase tracking-[.3em] text-[var(--accent)] font-semibold">
            01 / About
          </span>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.02] font-serif">
              Crafting web experiences
              <span className="accent-text italic"> that actually feel good.</span>
            </h2>

            <p className="mt-8 text-lg text-[var(--text-2)] leading-relaxed">
              I'm a full stack developer who enjoys turning ideas into polished,
              end-to-end digital experiences. I care about performance,
              accessibility, design, and the small details that make a website
              memorable.
            </p>

            <ArrowLink to="/about" className="mt-8">
              More about me
            </ArrowLink>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[var(--border)]">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <b className="text-3xl md:text-4xl font-serif">{number}</b>
                  <p className="text-sm text-[var(--text-3)] mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 px-6 bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[.3em] text-[var(--accent)] font-semibold">
                02 / Services
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-5 font-serif">
                What I do.
              </h2>
            </div>

            <p className="text-[var(--text-2)] max-w-md">
              I build digital products that are useful, fast, responsive, and
              visually engaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <Link
                  to="/services"
                  key={service.num || i}
                  className="group p-7 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition"
                >
                  <div className="flex justify-between">
                    <span className="text-xs text-[var(--text-3)]">
                      {service.num || `0${i + 1}`}
                    </span>

                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border border-[var(--accent)]/30 bg-[var(--accent-soft)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#141009] transition-all"
                    >
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3 className="text-2xl mt-12 group-hover:text-[var(--accent)] font-serif transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[var(--text-2)] leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs uppercase tracking-[.3em] text-[var(--accent)] font-semibold">
                03 / Selected Work
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-5 font-serif">
                Recent projects.
              </h2>
            </div>

            <ArrowLink to="/work" className="hidden md:flex text-[var(--text-2)]">
              View all projects
            </ArrowLink>
          </div>

          {/* Featured Project: SkillSwap PK */}
          <SkillSwapCard />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, i) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id || i}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition backdrop-blur-[2px]">
                    <span className="w-16 h-16 rounded-full bg-[var(--accent)] text-[#161108] flex items-center justify-center shadow-xl font-bold">
                      <LuArrowUpRight size={24} />
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs text-[var(--text-3)] uppercase">
                    {project.cat} • {project.year}
                  </p>

                  <h3 className="text-2xl md:text-3xl mt-3 group-hover:text-[var(--accent)] font-serif transition-colors">
                    {project.title}
                  </h3>

                  {project.desc && (
                    <p className="text-[var(--text-2)] mt-3">{project.desc}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full border border-[var(--border)] text-[var(--text-3)] bg-[var(--accent-soft)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-[var(--border-strong)] bg-[var(--surface)] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--emerald)]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[var(--accent)] mb-8 font-medium">
                <LuStar fill="currentColor" />
                Have a project in mind?
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-[-.03em] font-serif">
                Let's build something
                <span className="accent-text italic"> great together.</span>
              </h2>

              <p className="text-lg text-[var(--text-2)] max-w-xl mt-8">
                Have an idea, project, or opportunity? I'd love to hear about it
                and see how we can turn it into something meaningful.
              </p>

              <Link
                to="/contact"
                className="btn-accent inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full font-semibold shadow-xl transition"
                data-cursor
              >
                Start a conversation <LuArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;

