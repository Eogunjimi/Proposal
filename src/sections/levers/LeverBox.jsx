import { ChevronDownIcon, leverIcons } from '../../components/ui/icons.jsx';

/**
 * LeverBox — one T.T.C. lever as a CARD (3 boxes sit in a grid).
 * The box itself stays a small summary; clicking HOW? opens this
 * lever's full system in the shared dropdown panel BELOW the boxes
 * (managed by WinningFormula — only one open at a time).
 *
 * Props:
 *  - lever     lever data from content.js (id, index, icon, title, tagline, points)
 *  - open      boolean — is this the lever currently expanded?
 *  - onToggle  () => void — parent flips this lever (and closes the rest)
 */
export default function LeverBox({ lever, open, onToggle }) {
  const Icon = leverIcons[lever.icon];

  return (
    <div
      id={lever.id}
      className={`flex h-full scroll-mt-24 flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-7 ${
        open ? 'border-volt/40 bg-panel-2/70' : 'border-line bg-panel hover:border-volt/25'
      }`}
    >
      {/* icon + index */}
      <div className="flex items-start justify-between">
        <span
          className={`grid size-12 place-items-center rounded-xl border transition-colors ${
            open ? 'border-volt bg-volt text-ink' : 'border-volt/30 bg-volt/10 text-volt'
          }`}
        >
          <Icon className="size-6" />
        </span>
        <span className="font-display text-sm font-semibold text-mute">{lever.index}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold tracking-wide text-white">
        {lever.title}
      </h3>
      <p className="mt-1 text-sm text-mute">{lever.tagline}</p>

      {/* HOW? — toggles this lever's dropdown below the boxes */}
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-display text-xs font-bold tracking-[0.18em] transition-all ${
            open ? 'border-volt bg-volt text-ink' : 'border-volt/40 text-volt hover:bg-volt/10'
          }`}
        >
          {open ? 'CLOSE' : 'HOW?'}
          <ChevronDownIcon
            className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}
