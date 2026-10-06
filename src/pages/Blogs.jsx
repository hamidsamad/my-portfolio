import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import SectionHeader from '../components/SectionHeader';
import blogs from '../data/blogs';

function Blogs() {
  return (
    <>
      <PageHeader eyebrow="Knowledge Sharing" title="Blogs & Articles" subtitle="Documenting my learning journey, sharing tips, tutorials, and insights for fellow web developers." />
      <section className="section-padding border-t border-default">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(b=><BlogCard key={b.id} b={b} />)}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted text-sm mb-4">More articles coming soon — stay tuned!</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blogs;
