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
    className={`group inline-flex items-center gap-2 hover:text-emerald-400 transition ${className}`}
  >
    {children}
    <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
  </Link>
);

const SectionTitle = ({ number, title }) => (
  <div>
    <span className="text-xs uppercase tracking-[.3em] text-emerald-400">
      {number} / {title}
    </span>
    <h2 className="text-4xl md:text-6xl font-semibold tracking-[-.04em] mt-5">
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
        <div className="blob-1 absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl -top-20 -left-20" />
        <div className="blob-2 absolute w-[32rem] h-[32rem] rounded-full bg-blue-500/10 blur-3xl top-1/3 -right-40" />
        <div className="blob-3 absolute w-80 h-80 rounded-full bg-purple-500/10 blur-3xl bottom-0 left-1/3" />

        <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
          <div className="max-w-5xl">
            <div className="hero-eyebrow flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm uppercase tracking-[.25em] text-emerald-400">
                Frontend Developer & Digital Craftsman
              </span>
            </div>

            <h1 className="hero-title text-[clamp(3.5rem,10vw,9rem)] leading-[.85] tracking-[-.06em] font-bold">
              Hamid Ali
              <br />
              <span className="text-[var(--text-3)]">Baloch.</span>
            </h1>

            <p className="hero-description mt-10 max-w-2xl text-lg md:text-xl text-[var(--text-2)] leading-relaxed">
              I build modern digital experiences that combine clean design,
              thoughtful interactions, and powerful technology.
            </p>

            <div className="hero-actions flex flex-wrap gap-4 mt-10">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition font-medium"
              >
                View My Work <LuArrowUpRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition font-medium"
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
          <span className="text-xs uppercase tracking-[.3em] text-emerald-400">
            01 / About
          </span>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[.95]">
              Crafting web experiences
              <span className="text-[var(--text-3)]"> that actually feel good.</span>
            </h2>

            <p className="mt-8 text-lg text-[var(--text-2)] leading-relaxed">
              I'm a frontend developer who enjoys turning ideas into polished,
              interactive digital experiences. I care about performance,
              accessibility, design, and the small details that make a website
              memorable.
            </p>

            <ArrowLink to="/about" className="mt-8 text-emerald-400">
              More about me
            </ArrowLink>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[var(--border)]">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <b className="text-3xl md:text-4xl">{number}</b>
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
              <span className="text-xs uppercase tracking-[.3em] text-emerald-400">
                02 / Services
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-5">
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
                  className="group p-7 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--surface-solid)] transition"
                >
                  <div className="flex justify-between">
                    <span className="text-xs text-[var(--text-3)]">
                      {service.num || `0${i + 1}`}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center border ${service.iconBg} ${service.iconBorder}`}
                    >
                      <Icon className={service.iconColor} size={27} />
                    </div>
                  </div>

                  <h3 className="text-2xl mt-12 group-hover:text-emerald-400">
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
              <span className="text-xs uppercase tracking-[.3em] text-emerald-400">
                03 / Selected Work
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-5">
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                      <LuArrowUpRight size={24} />
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs text-[var(--text-3)] uppercase">
                    {project.cat} • {project.year}
                  </p>

                  <h3 className="text-2xl md:text-3xl mt-3 group-hover:text-emerald-400">
                    {project.title}
                  </h3>

                  {project.desc && (
                    <p className="text-[var(--text-2)] mt-3">{project.desc}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full border border-[var(--border)] text-[var(--text-3)]"
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
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 lg:p-20">
            <div className="flex items-center gap-2 text-emerald-400 mb-8">
              <LuStar fill="currentColor" />
              Have a project in mind?
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-[-.05em]">
              Let's build something
              <span className="text-[var(--text-3)]"> great together.</span>
            </h2>

            <p className="text-lg text-[var(--text-2)] max-w-xl mt-8">
              Have an idea, project, or opportunity? I'd love to hear about it
              and see how we can turn it into something meaningful.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--text)] hover:text-[var(--bg)] transition font-medium"
            >
              Start a conversation <LuArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;

