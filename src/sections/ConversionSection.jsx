import { conversion } from '../data/content.js';
import Section from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { PhoneIcon } from '../components/ui/icons.jsx';

/**
 * ConversionSection — LEVER 03.
 * ✏️  Placeholder content lives in src/data/content.js → `conversion`.
 */
export default function ConversionSection() {
  return (
    <Section
      id="conversion"
      eyebrow={conversion.eyebrow}
      title={conversion.title}
      highlight={conversion.highlight}
      sub={conversion.sub}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {conversion.cards.map((card, i) => (
          <Reveal key={card.head} delay={i * 90}>
            <div className="group h-full rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-volt/30 sm:p-7">
              <p className="flex items-center justify-between font-display text-xs font-bold tracking-[0.2em] text-volt">
                {String(i + 1).padStart(2, '0')}
                <PhoneIcon className="size-4 text-mute transition-colors group-hover:text-volt" />
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{card.head}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
