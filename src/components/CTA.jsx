import { Link } from 'react-router-dom';
import Icon from './Icon';

function CTA() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto text-center reveal">
        <div className="p-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden backdrop-blur-md">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-4 gradient-text">Let's Work Together</h2>
            <p className="text-sm font-light text-[var(--text-2)] leading-relaxed mb-8 max-w-md mx-auto">If you're looking for a reliable developer to bring your ideas to life, I'd love to hear about your project.</p>
            <Link to="/contact" className="btn-emerald">
              <Icon name="LuMail" className="text-base" />
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;
