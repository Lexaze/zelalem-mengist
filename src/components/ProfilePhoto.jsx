import { useState } from 'react';
import { profile } from '../data/content';

// Circular profile frame. Drop your photo at public/profile.jpg.
// If the file is missing, initials are shown instead so the layout never breaks.
export default function ProfilePhoto({ size = 'h-28 w-28' }) {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      className={`${size} shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 p-[3px] shadow-lg shadow-cyan-500/20 transition-shadow duration-300 dark:shadow-cyan-400/20`}
    >
      <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-slate-100 transition-colors duration-300 dark:border-slate-950 dark:bg-slate-800">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-cyan-600 dark:text-cyan-400">
            {initials}
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
