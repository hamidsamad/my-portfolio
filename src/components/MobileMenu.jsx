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
        <nav className="flex flex-col gap-2 mt-8">
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
