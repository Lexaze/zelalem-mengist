import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import useActiveSection from '../hooks/useActiveSection';
import { navLinks, profile } from '../data/content';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      active === id
        ? 'text-cyan-600 dark:text-cyan-400'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-mono text-base font-semibold text-slate-900 transition-colors duration-300 dark:text-white"
        >
          <span className="text-cyan-600 dark:text-cyan-400">&lt;</span>
          {profile.name.split(' ')[0]}
          <span className="text-cyan-600 dark:text-cyan-400"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors duration-300 md:hidden dark:border-slate-700 dark:text-slate-200"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-3 transition-colors duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(link.id)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
