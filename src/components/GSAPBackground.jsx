import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function GSAPBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const shapes = containerRef.current.querySelectorAll('.bg-shape');
    const ctx = gsap.context(() => {
      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          scale: `random(0.8, 1.4)`,
          rotation: `random(-30, 30)`,
          duration: `random(8, 16)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="bg-shape" style={{ width: 500, height: 500, background: 'var(--accent)', top: '-10%', left: '-5%' }} />
      <div className="bg-shape" style={{ width: 400, height: 400, background: 'var(--accent-light)', top: '40%', right: '-10%', opacity: 0.25 }} />
      <div className="bg-shape" style={{ width: 350, height: 350, background: '#6366f1', bottom: '-5%', left: '30%', opacity: 0.15 }} />
      <div className="bg-shape" style={{ width: 300, height: 300, background: 'var(--accent)', top: '60%', left: '10%', opacity: 0.1 }} />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
export default GSAPBackground;
