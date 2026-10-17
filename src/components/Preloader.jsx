import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [count, setCount] = useState(0);
  const bar = useRef(null);
  const wrap = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrap.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut', onComplete: () => setHidden(true) });
      }
    });
    const obj = { val: 0 };
    tl.to(obj, {
      val: 100, duration: 2, ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.floor(obj.val));
        if (bar.current) bar.current.style.width = obj.val + '%';
      }
    });
    return () => tl.kill();
  }, []);

  if (hidden) return null;
  return (
    <div ref={wrap} className="preloader noise">
      <img
        src="/logo.jpg"
        alt="Hamid Ali Logo"
        className="w-16 h-16 rounded-full object-cover border border-[var(--accent)] shadow-[0_0_24px_var(--accent-glow)] mb-6 animate-pulse"
      />
      <div className="preloader-label">Hamid Ali — Portfolio</div>
      <div className="preloader-count">{String(count).padStart(3, '0')}</div>
      <div className="preloader-bar"><div ref={bar} className="preloader-bar-fill" /></div>
    </div>
  );
}
export default Preloader;
