import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function useReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-element').forEach(el => {
        gsap.to(el, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      });
    });
    return () => ctx.revert();
  }, []);
}
export default useReveal;
