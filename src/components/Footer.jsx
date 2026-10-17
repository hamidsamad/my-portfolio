import { Link } from 'react-router-dom';
import { LuCode, LuGithub, LuMail, LuLinkedin, LuTwitter, LuArrowUpRight } from 'react-icons/lu';

function Footer() {
  return (
    <footer className="section !pb-10 !pt-20 border-t border-[var(--border)]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="nav-logo mb-6" data-cursor>
              <div className="nav-logo-mark"><LuCode size={16} /></div>
              <span className="font-serif font-bold tracking-tight text-lg">Hamid Ali<span className="text-[var(--accent)]">.</span></span>
            </Link>
            <p className="text-[var(--text-2)] text-sm leading-relaxed max-w-md mb-8 mt-4">
              A passionate frontend developer crafting modern, performant, and accessible web experiences. Available for freelance worldwide.
            </p>
            <div className="flex gap-3">
              {[{i:LuGithub,h:'https://github.com/hamidsamad'},{i:LuLinkedin,h:'#'},{i:LuTwitter,h:'#'},{i:LuMail,h:'mailto:hamidsamad0786@gmail.com'}].map((s,i)=>(
                <a key={i} href={s.h} target="_blank" rel="noreferrer" className="social-link" data-cursor><s.i size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-3)] mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {['Home','About','Work','Skills','Resume','Contact'].map(p=>(
                <Link key={p} to={p==='Home'?'/':'/'+p.toLowerCase()} className="text-sm text-[var(--text-2)] hover:text-[var(--accent)] transition-colors" data-cursor>{p}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-3)] mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-[var(--text-2)]">
              <a href="mailto:hamidsamad0786@gmail.com" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2" data-cursor>hamidsamad0786@gmail.com <LuArrowUpRight size={12} /></a>
              <a href="tel:03332203340" className="hover:text-[var(--accent)] transition-colors">+92 333 2203340</a>
              <p>Balochistan, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-3)]">© 2025 Hamid Ali Baloch. Crafted with React & GSAP.</p>
          <p className="text-xs text-[var(--text-3)]">Available for freelance</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
