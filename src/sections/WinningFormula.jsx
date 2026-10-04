import { useState } from 'react';
import { formula } from '../data/content.js';
import Section from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { ArrowRightIcon, CheckIcon, ChevronDownIcon, leverIcons } from '../components/ui/icons.jsx';

/**
 * WinningFormula — the "T.T.C." section.
 * Three lever boxes (TRAFFIC / TRUST / CONVERSION). Each box has a
 * "HOW?" button that drops the summary down inside the card.
 */
export default function WinningFormula() {
  return (
    <Section
      id="formula"
      eyebrow={formula.eyebrow}
      title={formula.title}
      highlight={formula.highlight}
      sub={formula.sub}
      tinted
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {formula.levers.map((lever, i) => (
          <Reveal key={lever.id} delay={i * 120}>
            <LeverCard lever={lever} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* One lever box with its own HOW? dropdown */
function LeverCard({ lever }) {
  const [open, setOpen] = useState(false);
  const Icon = leverIcons[lever.icon];

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-panel transition-colors duration-300 ${
        open ? 'border-volt/40' : 'border-line hover:border-volt/25'
      }`}
    >
      <div className="flex-1 p-6 sm:p-7">
        {/* index + icon */}
        <div className="flex items-start justify-between">
          <span className="grid size-12 place-items-center rounded-xl border border-volt/30 bg-volt/10 text-volt">
            <Icon className="size-6" />
          </span>
          <span className="font-display text-sm font-semibold text-mute">{lever.index}</span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-bold tracking-wide text-white">
          {lever.title}
        </h3>
        <p className="mt-1 text-sm text-mute">{lever.tagline}</p>

        {/* HOW? — toggles the dropdown */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-display text-xs font-bold tracking-[0.18em] transition-all ${
            open
              ? 'border-volt bg-volt text-ink'
              : 'border-volt/40 text-volt hover:bg-volt/10'
          }`}
        >
          HOW?
          <ChevronDownIcon
            className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Dropdown body */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line bg-panel-2/60 px-6 pb-6 pt-5 sm:px-7">
            <ul className="space-y-3">
              {lever.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={lever.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-volt hover:underline"
            >
              {lever.cta}
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
