import { conversion } from '../../data/content.js';
import { PhoneIcon } from '../../components/ui/icons.jsx';

/**
 * ConversionContent — the ENTIRE Lever 03 system, displayed vertically
 * inside its HOW? dropdown.
 * ✏️  Copy lives in src/data/content.js → `conversion` (placeholder — build out)
 */
export default function ConversionContent() {
  return (
    <div>
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        <span className="font-semibold text-volt">Turn visits into booked estimates. </span>
        {conversion.sub}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {conversion.cards.map((card, i) => (
          <div
            key={card.head}
            className="group h-full rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-volt/30 sm:p-7"
          >
            <p className="flex items-center justify-between font-display text-xs font-bold tracking-[0.2em] text-volt">
              {String(i + 1).padStart(2, '0')}
              <PhoneIcon className="size-4 text-mute transition-colors group-hover:text-volt" />
            </p>
            <h4 className="mt-3 font-display text-lg font-semibold text-white">{card.head}</h4>
            <p className="mt-2 text-sm leading-relaxed text-mute">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
