function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="page-header hero-glow px-6 relative">
      <div className="container-max">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">{eyebrow}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text leading-[1.1]">{title}</h1>
          {subtitle && <p className="text-lg text-secondary mt-6 max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
export default PageHeader;
