import { LuArrowRight, LuClock } from 'react-icons/lu';

function BlogCard({ b }) {
  return (
    <div className="card overflow-hidden card-glow group" data-cursor-hover>
      <div className="blog-img-overlay h-48">
        <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`tag ${b.bg} ${b.color} border ${b.border}`}>{b.category}</span>
          <span className="text-xs text-muted flex items-center gap-1"><LuClock size={12} /> {b.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-accent transition-colors line-clamp-2">{b.title}</h3>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2 mb-4">{b.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-3 transition-all">
          Read more <LuArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}
export default BlogCard;
