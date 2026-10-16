import { useState } from 'react';
import { Check, ExternalLink, Github } from 'lucide-react';

const hasLink = (url) => Boolean(url) && url !== '#';

const linkClass =
  'inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400';

export default function ProjectCard({ project }) {
  const { icon: Icon, gradient, image, title, tagline, description, features, tags, github, live } = project;
  // If the screenshot file is missing, fall back to the gradient + icon visual.
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(image) && !imgFailed;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/5 dark:hover:border-cyan-400/50">
      <div
        className={`relative flex aspect-video items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 ${
          showImage ? 'bg-slate-100 dark:bg-slate-800' : `bg-gradient-to-br ${gradient}`
        }`}
      >
        {showImage ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-cyan-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400">
              <Icon size={30} />
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">{tagline}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>

        <ul className="mt-5 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        {/* Buttons only appear once a real URL is set in content.js */}
        {(hasLink(github) || hasLink(live)) && (
          <div className="mt-auto flex gap-4 pt-6">
            {hasLink(github) && (
              <a href={github} target="_blank" rel="noreferrer" className={linkClass}>
                <Github size={16} /> Code
              </a>
            )}
            {hasLink(live) && (
              <a href={live} target="_blank" rel="noreferrer" className={linkClass}>
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
