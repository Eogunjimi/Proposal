import { trust } from '../data/content.js';
import Section from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { ShieldIcon } from '../components/ui/icons.jsx';

/**
 * TrustSection — LEVER 02.
 * ✏️  Placeholder content lives in src/data/content.js → `trust`.
 *     Swap the cards for your final trust system as you build it out.
 */
export default function TrustSection() {
  return (
    <Section
      id="trust"
      eyebrow={trust.eyebrow}
      title={trust.title}
      highlight={trust.highlight}
      sub={trust.sub}
      tinted
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.6fr]">
        {/* big stat card */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-volt/30 bg-gradient-to-b from-volt/15 to-transparent p-7">
            <ShieldIcon className="size-8 text-volt" />
            <div className="mt-10">
              <p className="font-display text-6xl font-bold text-white sm:text-7xl">
                {trust.stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{trust.stat.label}</p>
            </div>
          </div>
        </Reveal>

        {/* trust cards */}
        <div className="grid content-start gap-4">
          {trust.cards.map((card, i) => (
            <Reveal key={card.head} delay={i * 100}>
              <div className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-volt/30">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-volt">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{card.head}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
