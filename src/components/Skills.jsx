import { Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skillGroups } from '../data/content';

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200 bg-slate-50/70 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          icon={Layers}
          eyebrow="skills"
          title="Technical toolkit"
          subtitle="The technologies I use to design, build and ship full-stack products."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="card h-full p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{group.description}</p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-400"
                    >
                      <Icon
                        size={20}
                        className="shrink-0 text-cyan-600 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-400"
                      />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
