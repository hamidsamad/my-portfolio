import { LuUser, LuMapPin, LuTarget, LuLanguages, LuHeart, LuQuote } from 'react-icons/lu';
import useReveal from '../hooks/useReveal';

function About() {
  useReveal();
  const values = ['Clean, maintainable code', 'Accessibility for every user', 'Performance is a feature', 'Continuous learning', 'Clear communication', 'Attention to detail'];
  return (
    <>
      <section className="section !pt-40">
        <div className="container grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 reveal-element">
            <div className="aspect-[4/5] rounded-[var(--radius)] glass flex items-center justify-center relative overflow-hidden group border border-[var(--border-strong)] shadow-2xl">
              <div className="bg-blob" style={{ width: 320, height: 320, background: 'var(--accent)', opacity: 0.22, top: '15%', left: '10%' }} />
              <img
                src="/hamid-ali-baloch.jpeg"
                alt="Hamid Ali Baloch"
                className="absolute top-0 left-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  // Fallback in case of path or extension variations
                  e.currentTarget.src = '/hamid-ali-baloch.jpg';
                }}
              />
              {/* Subtle dark gradient scrim to guarantee text legibility over light-toned clothing */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-[1]" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-2xl font-bold text-white drop-shadow-sm font-serif">Hamid Ali Baloch</h3>
                <p className="text-[var(--accent-2)] text-sm font-medium">Web Developer & Designer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { i: LuMapPin, l: 'Location', v: 'Pakistan' }, { i: LuTarget, l: 'Focus', v: 'Web Dev' },
                { i: LuLanguages, l: 'Languages', v: 'English, Urdu' }, { i: LuHeart, l: 'Status', v: 'Available', accent: true }
              ].map((c, i) => (
                <div key={i} className="card p-4 reveal-element">
                  <c.i className={`mb-2 ${c.accent ? 'text-[var(--accent)]' : 'text-[var(--text-2)]'}`} size={18} />
                  <div className="text-[10px] text-[var(--text-3)] uppercase tracking-wider mb-1">{c.l}</div>
                  <div className={`text-sm font-medium ${c.accent ? 'text-[var(--accent)]' : 'text-[var(--text)]'}`}>{c.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="reveal-element">
              <span className="eyebrow">About Me</span>
              <h1 className="h-xl mt-6 mb-6">Passionate about<br />crafting the<br /><span className="accent-text">modern web.</span></h1>
              <div className="space-y-5 text-[var(--text-2)] leading-relaxed text-base max-w-2xl">
                <p>Hello! I'm <span className="text-[var(--text)] font-semibold">Hamid Ali Baloch</span>, a dedicated web developer from Balochistan, Pakistan. I specialize in building responsive, performant, and beautifully designed websites using React, JavaScript, Node.js, and MongoDB.</p>
                <p>My journey started with a simple curiosity: how do websites work? That question turned into a deep passion. I've spent countless hours mastering fundamentals, building projects, and refining my craft.</p>
                <p>Beyond code, I care deeply about user experience, accessibility, performance, and writing code that other humans can read and maintain. Every project is an opportunity to learn something new and push my limits.</p>
              </div>
            </div>
            <div className="reveal-element mt-12">
              <h3 className="h-md mb-6">What I value</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[var(--text-2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote */}
      <section className="section !pt-0">
        <div className="container-sm text-center reveal-element">
          <LuQuote className="text-[var(--accent)]/20 mx-auto mb-8" size={64} />
          <blockquote className="h-md leading-tight italic gradient-text">"The best code is the code you don't have to write — but when you do, write it with care."</blockquote>
          <p className="text-sm text-[var(--text-3)] mt-6 uppercase tracking-widest">— My philosophy</p>
        </div>
      </section>
    </>
  );
}
export default About;
