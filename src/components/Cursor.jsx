import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.1, ease: 'power2.out' });
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.1, ease: 'power2.out' });
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3.out' });

    const move = e => {
      pos.x = e.clientX; pos.y = e.clientY;
      xDot(pos.x); yDot(pos.y);
      xRing(pos.x); yRing(pos.y);
    };
    window.addEventListener('mousemove', move);

    const addHover = el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    };
    const addView = el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-view');
        if (text.current) text.current.textContent = el.dataset.cursorText || 'View';
      });
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-view'));
    };
    document.querySelectorAll('a, button, [data-cursor]').forEach(addHover);
    document.querySelectorAll('[data-cursor-view]').forEach(addView);
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

    const mo = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(addHover);
      document.querySelectorAll('[data-cursor-view]').forEach(addView);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={text} className="cursor-text">View</div>
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
export default Cursor;
