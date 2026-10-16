import { FolderGit2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        icon={FolderGit2}
        eyebrow="projects"
        title="Selected work"
        subtitle="Full-stack builds that combine clean interfaces, solid APIs and thoughtful data design."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
