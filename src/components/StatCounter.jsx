import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function StatCounter({ value, suffix='', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: value, duration: 2, ease: 'power2.out',
            onUpdate: () => setCount(Math.floor(obj.val))
          });
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="text-4xl lg:text-5xl font-bold text-primary">{count}{suffix}</div>
      <div className="text-xs text-muted uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}
export default StatCounter;
