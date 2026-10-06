import { useEffect, useState } from 'react';
import { LuChevronUp } from 'react-icons/lu';
function BackToTop() {
  const [v, setV] = useState(false);
  useEffect(() => {
    const h = () => setV(window.scrollY > 500);
    window.addEventListener('scroll', h, {passive:true});
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className={`back-to-top ${v?'visible':''}`} data-cursor aria-label="Back to top">
      <LuChevronUp size={18} />
    </button>
  );
}
export default BackToTop;
