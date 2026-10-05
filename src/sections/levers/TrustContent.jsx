import { trust } from '../../data/content.js';
import { ShieldIcon } from '../../components/ui/icons.jsx';

/**
 * TrustContent — the ENTIRE Lever 02 system, displayed vertically
 * inside its HOW? dropdown.
 * ✏️  Copy lives in src/data/content.js → `trust` (placeholder — build out)
 */
export default function TrustContent() {
  return (
    <div>
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        <span className="font-semibold text-volt">Win them in 5 seconds. </span>
        {trust.sub}
      </p>

      <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.6fr]">
        {/* big stat card */}
        <div className="flex h-full flex-col justify-between rounded-2xl border border-volt/30 bg-gradient-to-b from-volt/15 to-transparent p-7">
          <ShieldIcon className="size-8 text-volt" />
          <div className="mt-10">
            <p className="font-display text-6xl font-bold text-white sm:text-7xl">
              {trust.stat.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{trust.stat.label}</p>
          </div>
        </div>

        {/* trust cards */}
        <div className="grid content-start gap-4">
          {trust.cards.map((card, i) => (
            <div
              key={card.head}
              className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-volt/30"
            >
              <p className="font-display text-xs font-bold tracking-[0.2em] text-volt">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h4 className="mt-2 font-display text-lg font-semibold text-white">{card.head}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mute">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
