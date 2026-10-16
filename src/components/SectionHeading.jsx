export default function SectionHeading({ icon: Icon, eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 py-1 pl-2 pr-3 font-mono text-xs font-medium uppercase tracking-wider text-cyan-700 transition-colors duration-300 dark:text-cyan-300">
        {Icon && <Icon size={14} aria-hidden="true" />}
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}
