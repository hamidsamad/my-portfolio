import { useEffect, useState } from 'react';
function Toast() {
  const [t, setT] = useState(null);
  useEffect(() => {
    const h = e => { setT(e.detail); setTimeout(()=>setT(null), 3500); };
    window.addEventListener('show-toast', h);
    return () => window.removeEventListener('show-toast', h);
  }, []);
  return <div className={`toast ${t?'show':''}`}>{t?.message || ''}</div>;
}
export const toast = m => window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: m } }));
export default Toast;
