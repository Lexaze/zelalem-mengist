import { useState } from 'react';
import { CheckCircle2, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '../data/content';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend required: opens the visitor's mail client with the message prefilled.
  // To use a service like Formspree or EmailJS instead, replace this handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  ];

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50/70 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          icon={MessageCircle}
          eyebrow="contact"
          title="Let's build something"
          subtitle="Have a project, role or idea in mind? Send a message and I'll get back to you."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 dark:hover:border-cyan-400"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Icon size={20} />
                    </span>
                    <span className="break-all text-sm font-medium text-slate-800 dark:text-slate-200">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={update}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary">
                  <Send size={16} /> Send message
                </button>
                {sent && (
                  <p role="status" className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} /> Opening your email app...
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
