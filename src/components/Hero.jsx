import { ArrowRight, CircuitBoard, Download, Mail } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import useTyping from '../hooks/useTyping';
import { profile, typedPhrases } from '../data/content';

export default function Hero() {
  const typed = useTyping(typedPhrases);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <p className="text-2xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-sm text-cyan-600 dark:text-cyan-400">{profile.role}</p>

          <div className="mt-5 flex items-center gap-4">
            <ProfilePhoto />
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 font-mono text-xs text-slate-600 backdrop-blur transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to new opportunities
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 sm:text-5xl lg:text-6xl dark:text-white">
            Engineering logic.
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent dark:from-cyan-300 dark:to-sky-400">
              Web creativity.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I&rsquo;m {profile.name}, an Electrical &amp; Computer Engineer turned {profile.role.toLowerCase()}.
            I bring circuit-level rigor to modern web apps, building products that are fast,
            reliable and a pleasure to use.
          </p>

          <p className="mt-6 font-mono text-base text-slate-700 dark:text-slate-300" aria-live="off">
            <span className="text-cyan-600 dark:text-cyan-400">&gt;</span> building with{' '}
            <span className="font-semibold text-slate-900 dark:text-white">{typed}</span>
            <span className="animate-blink ml-0.5 inline-block h-5 w-0.5 translate-y-1 bg-cyan-500" />
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={profile.resume} download="Resume.pdf" className="btn-secondary">
              <Download size={16} /> Download resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Get in touch
            </a>
          </div>
        </div>

        {/* Decorative "signal to screen" card */}
        <div className="animate-floaty relative mx-auto w-full max-w-md" aria-hidden="true">
          <div className="card p-6 shadow-xl shadow-slate-900/5 dark:shadow-black/30">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <CircuitBoard className="text-cyan-600 dark:text-cyan-400" size={20} />
            </div>
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-slate-700 dark:text-slate-300">
              <code>
                <span className="text-slate-400">// from hardware to the browser</span>
                {'\n'}
                <span className="text-violet-600 dark:text-violet-400">const</span> engineer = {'{'}
                {'\n'}
                {'  '}degree: <span className="text-emerald-600 dark:text-emerald-400">&apos;B.Sc. ECE&apos;</span>,
                {'\n'}
                {'  '}mindset: <span className="text-emerald-600 dark:text-emerald-400">&apos;systems&apos;</span>,
                {'\n'}
                {'  '}stack: [<span className="text-emerald-600 dark:text-emerald-400">&apos;React&apos;</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;Node&apos;</span>],
                {'\n'}
                {'  '}ships: <span className="text-sky-600 dark:text-sky-400">true</span>,
                {'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
