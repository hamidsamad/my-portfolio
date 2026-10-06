import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Marquee({ items }) {
  const track = useRef(null);
  useEffect(() => {
    if (!track.current) return;
    const el = track.current;
    const w = el.scrollWidth / 2;
    gsap.to(el, { x: -w, duration: 30, ease: 'none', repeat: -1 });
  }, []);
  return (
    <div className="marquee">
      <div ref={track} className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item} <span className="accent-dot" /></span>
        ))}
      </div>
    </div>
  );
}
export default Marquee;
