import { NavLink, Link } from 'react-router-dom';
import { LuX } from 'react-icons/lu';

function MobileMenu({ open, onClose }) {
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/skills', label: 'Skills' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' }
  ];
  return (
    <>
      <div className={`mobile-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button onClick={onClose} className="theme-btn absolute top-6 right-6" data-cursor><LuX size={18} /></button>
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[var(--border)] pt-2">
          <img
            src="/logo.jpg"
            alt="Hamid Ali Logo"
            className="w-10 h-10 rounded-full object-cover border border-[var(--accent)]/60 shadow-md"
          />
          <div>
            <span className="font-serif font-bold text-lg block leading-tight">Hamid Ali<span className="text-[var(--accent)]">.</span></span>
            <span className="text-[9px] uppercase tracking-widest text-[var(--accent)] font-semibold block mt-0.5">Full Stack Developer</span>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={onClose}
              className={({isActive}) => isActive ? 'active' : ''} data-cursor>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" onClick={onClose} className="btn btn-accent mt-10 w-full justify-center" data-cursor>Let's Talk</Link>
        <p className="text-xs text-[var(--text-3)] mt-8 text-center">hamidsamad0786@gmail.com</p>
      </div>
    </>
  );
}
export default MobileMenu;
