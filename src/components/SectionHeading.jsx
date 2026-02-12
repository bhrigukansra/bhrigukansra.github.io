function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
