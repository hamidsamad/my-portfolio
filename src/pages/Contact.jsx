import { useState } from 'react';
import { LuMail, LuPhoneCall, LuMapPin, LuClock, LuGithub, LuLinkedin, LuTwitter, LuSend, LuArrowUpRight, LuUser, LuAtSign, LuMessageSquare } from 'react-icons/lu';
import { toast } from '../components/Toast';
import useReveal from '../hooks/useReveal';

function Contact() {
  useReveal();
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const onChange = e => { setForm(p=>({...p,[e.target.name]:e.target.value})); if (err[e.target.name]) setErr(p=>({...p,[e.target.name]:''})); };
  const submit = e => {
    e.preventDefault();
    const errs = {};
    if (form.name.trim().length<2) errs.name='Enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email='Enter a valid email';
    if (form.message.trim().length<10) errs.message='Message must be 10+ characters';
    setErr(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(()=>{ setLoading(false); setForm({name:'',email:'',message:''}); toast('Message sent! Will reply within 24h.'); }, 1200);
  };
  const info = [
    {i:LuMail,bg:'bg-emerald-500/10',tc:'text-emerald-500',l:'Email',v:'hamidsamad0786@gmail.com',href:'mailto:hamidsamad0786@gmail.com'},
    {i:LuPhoneCall,bg:'bg-blue-500/10',tc:'text-blue-500',l:'Phone',v:'+92 333 2203340',href:'tel:03332203340'},
    {i:LuMapPin,bg:'bg-amber-500/10',tc:'text-amber-500',l:'Location',v:'Balochistan, Pakistan'},
    {i:LuClock,bg:'bg-purple-500/10',tc:'text-purple-500',l:'Availability',v:'Open for freelance',dot:true}
  ];
  return (
    <section className="section !pt-40">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="reveal-element">
            <span className="eyebrow">Get in Touch</span>
            <h1 className="h-xl mt-6 mb-6">Let's build<br />something<br /><span className="accent-text">together.</span></h1>
            <p className="text-[var(--text-2)] leading-relaxed mb-10 max-w-md">Have a project, question, or just want to say hi? I'd love to hear from you. Fill out the form or reach out directly.</p>
          </div>
          <div className="space-y-5 reveal-element">
            {info.map((c,i)=>(
              <div key={i} className="flex items-start gap-4 group">
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.tc} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                  <c.i size={20}/>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-3)] mb-1">{c.l}</div>
                  {c.dot ? (
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--accent)]"/><span className="text-sm">{c.v}</span></div>
                  ) : c.href ? (
                    <a href={c.href} className="text-sm hover:text-[var(--accent)] transition-colors">{c.v}</a>
                  ) : <span className="text-sm">{c.v}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-10 reveal-element">
            {[{i:LuGithub,h:'https://github.com/hamidsamad'},{i:LuLinkedin,h:'#'},{i:LuTwitter,h:'#'},{i:LuMail,h:'mailto:hamidsamad0786@gmail.com'}].map((s,i)=>(
              <a key={i} href={s.h} target="_blank" rel="noreferrer" className="social-link" data-cursor><s.i size={16}/></a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 reveal-element">
          <form onSubmit={submit} className="card p-8 md:p-10">
            <h2 className="text-xl font-bold mb-2">Send a Message</h2>
            <p className="text-sm text-[var(--text-3)] mb-8">I'll get back to you within 24 hours.</p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="form-group">
                <label className="form-label">Name *</label>
                <div className="relative"><LuUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-3)]" size={14}/>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className={`form-input pl-11 ${err.name?'!border-red-500':''}`}/>
                </div>
                {err.name && <p className="text-xs text-red-400 mt-1">{err.name}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <div className="relative"><LuAtSign className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-3)]" size={14}/>
                  <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" className={`form-input pl-11 ${err.email?'!border-red-500':''}`}/>
                </div>
                {err.email && <p className="text-xs text-red-400 mt-1">{err.email}</p>}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Message *</label>
              <div className="relative"><LuMessageSquare className="absolute left-5 top-5 text-[var(--text-3)]" size={14}/>
                <textarea name="message" value={form.message} onChange={onChange} rows="6" placeholder="Tell me about your project..." className={`form-textarea pl-11 ${err.message?'!border-red-500':''}`}/>
              </div>
              {err.message && <p className="text-xs text-red-400 mt-1">{err.message}</p>}
            </div>
            <button disabled={loading} className="btn btn-accent w-full justify-center" data-cursor>
              {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending...</> : <><LuSend/> Send Message <LuArrowUpRight/></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
