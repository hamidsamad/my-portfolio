import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Toast from './Toast';
import Cursor from './Cursor';
import SmoothScroll from './SmoothScroll';
import Preloader from './Preloader';

function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <div className="noise relative min-h-screen">
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Navbar onMenu={() => setOpen(true)} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <main><Outlet /></main>
      <Footer />
      <BackToTop />
      <Toast />
    </div>
  );
}
export default Layout;
