import { finalCta } from '../data/content.js';
import Reveal from '../components/ui/Reveal.jsx';
import { ArrowRightIcon } from '../components/ui/icons.jsx';

/** FinalCTA — the "=" payoff line that closes the one-pager. */
export default function FinalCTA() {
  return (
    <section id="final" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="glow-volt absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2" aria-hidden />

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-mute">
            {finalCta.kicker}
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            <span className="text-gradient">=</span> {finalCta.line1}
            <br />
            {finalCta.line2}
            <br />
            <span className="text-gradient">{finalCta.line3}</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            {finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center gap-4">
            {/* ✏️  point this href at your WhatsApp / Calendly / email */}
            <a
              href="mailto:hello@powergrowthz.agency"
              className="group inline-flex items-center gap-2.5 rounded-full bg-volt px-8 py-4 font-display text-base font-bold text-ink transition-transform hover:scale-[1.05]"
            >
              {finalCta.cta}
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs tracking-[0.2em] text-mute">{finalCta.note.toUpperCase()}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
