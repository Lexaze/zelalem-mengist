import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content';

export default function Footer() {
  const links = [
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="border-t border-slate-200 transition-colors duration-300 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex gap-3">
          {links.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
