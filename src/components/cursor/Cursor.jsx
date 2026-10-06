import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };

    const xTo = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    const move = (e) => {
      pos.x = e.clientX; pos.y = e.clientY;
      xTo(pos.x); yTo(pos.y);
      ringXTo(pos.x); ringYTo(pos.y);
    };

    window.addEventListener('mousemove', move);

    // Hover effect on interactive elements
    const hoverables = 'a, button, input, textarea, select, [data-cursor-hover]';
    const enterHandler = () => document.body.classList.add('cursor-hover');
    const leaveHandler = () => document.body.classList.remove('cursor-hover');
    const downHandler = () => document.body.classList.add('cursor-click');
    const upHandler = () => document.body.classList.remove('cursor-click');

    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
    });
    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);

    // Observer for dynamically added elements
    const obs = new MutationObserver(() => {
      document.querySelectorAll(hoverables).forEach(el => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
        el.addEventListener('mouseenter', enterHandler);
        el.addEventListener('mouseleave', leaveHandler);
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
export default Cursor;
