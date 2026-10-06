import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LuCode, LuMenu, LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from '../context/ThemeContext';

function Navbar({ onMenu }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/skills', label: 'Skills' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' }
  ];
  return (
    <nav className={`nav-fixed ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" data-cursor>
          <div className="nav-logo-mark"><LuCode size={16} /></div>
          <span>Hamid<span className="text-[var(--accent)]">.</span></span>
        </Link>
        <div className="nav-links">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} data-cursor>
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-controls">
          <button onClick={toggle} className="theme-btn" aria-label="Toggle theme" data-cursor>
            {theme === 'dark' ? <LuSun size={16} /> : <LuMoon size={16} />}
          </button>
          <Link to="/contact" className="btn btn-accent hidden md:inline-flex !py-2 !px-5 !text-xs" data-cursor>Let's Talk</Link>
          <button onClick={onMenu} className="menu-btn" data-cursor><LuMenu size={16} /></button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
