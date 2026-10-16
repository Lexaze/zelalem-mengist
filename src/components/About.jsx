import { GraduationCap, User } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { aboutStats, fundamentals } from '../data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        icon={User}
        eyebrow="about"
        title="From circuits to code"
        subtitle="An engineering foundation that makes me a stronger web developer."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed lg:col-span-3">
          <p>
            I started out in <strong className="text-slate-900 dark:text-white">Electrical and Computer
            Engineering</strong>, where I learned to reason about systems from the transistor up:
            signals, logic, memory and the tradeoffs that govern real hardware.
          </p>
          <p>
            My curiosity about how people actually interact with technology led me to web
            development. After completing an intensive{' '}
            <strong className="text-slate-900 dark:text-white">web development bootcamp</strong>, I
            began building full-stack applications with React, Node.js, Python and relational
            databases.
          </p>
          <p>
            That dual background is my edge. I debug methodically, design with data flow in mind,
            and care about performance and reliability as much as polish. I enjoy turning
            ambiguous problems into clean, maintainable software.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {aboutStats.map((s) => (
              <div key={s.label} className="card p-4">
                <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{s.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <div className="card p-6">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <GraduationCap size={20} className="text-cyan-600 dark:text-cyan-400" />
              Engineering fundamentals I bring
            </h3>
            <ul className="space-y-5">
              {fundamentals.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
