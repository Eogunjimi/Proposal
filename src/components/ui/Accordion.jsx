import { useState } from 'react';
import { ChevronDownIcon } from './icons.jsx';

/**
 * Accordion — a reusable dropdown panel.
 * Click the header to expand/collapse with a smooth animation.
 *
 * Props:
 *  - index      string like "01" shown in a small chip (optional)
 *  - badge      string label, e.g. "SEO INCLUDED" / "MONTHLY FEE" (optional)
 *  - badgeTone  'green' | 'amber'  (badge color, default 'amber')
 *  - title      main heading text
 *  - tagline    smaller muted line under the title (optional)
 *  - defaultOpen  start expanded? (default false)
 *  - children   anything — the dropdown body
 */
export default function Accordion({
  index,
  badge,
  badgeTone = 'amber',
  title,
  tagline,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const badgeStyles = {
    green: 'border-leaf/40 bg-leaf/10 text-leaf',
    amber: 'border-volt/40 bg-volt/10 text-volt',
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-panel transition-colors duration-300 ${
        open ? 'border-volt/35' : 'border-line hover:border-volt/25'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7"
      >
        {index && (
          <span
            className={`hidden font-display text-sm font-semibold sm:block ${
              open ? 'text-volt' : 'text-mute'
            }`}
          >
            {index}
          </span>
        )}

        <span className="min-w-0 flex-1">
          {badge && (
            <span
              className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] ${badgeStyles[badgeTone]}`}
            >
              {badge}
            </span>
          )}
          <span className="block font-display text-lg font-semibold text-white sm:text-xl">
            {title}
          </span>
          {tagline && <span className="mt-1 block text-sm text-mute">{tagline}</span>}
        </span>

        <span
          className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open
              ? 'rotate-180 border-volt bg-volt text-ink'
              : 'border-line bg-panel-2 text-mute group-hover:text-white'
          }`}
        >
          <ChevronDownIcon className="size-5" />
        </span>
      </button>

      {/* grid-rows trick = smooth height animation without JS measuring */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line px-5 pb-7 pt-6 sm:px-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
