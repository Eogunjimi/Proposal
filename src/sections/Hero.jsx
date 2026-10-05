import { hero } from '../data/content.js';
import Reveal from '../components/ui/Reveal.jsx';
import LaptopPreview from './hero/LaptopPreview.jsx';
import { ArrowRightIcon } from '../components/ui/icons.jsx';

/**
 * Hero — the top of the one-pager.
 * Left: eyebrow, big 3-line headline, emoji-icon bullets, "=" result line.
 * Right: a laptop showing the client's "live preview" + ghost CTA.
 * Copy lives in src/data/content.js → `hero`
 */
export default function Hero() {
  const { title } = hero;

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32">
      {/* backdrop: blueprint grid + glows */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="glow-volt absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2" aria-hidden />
      <div className="glow-leaf absolute -right-40 top-1/3 size-[30rem]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* ── Left: copy ── */}
        <div className="min-w-0">
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.26em] text-volt sm:text-xs">
              — {hero.eyebrow.toUpperCase()}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] text-white lg:text-[clamp(2rem,3.6vw,3.5rem)]">
              <span className="sm:block">{title.line1}</span>{' '}
              <span className="bracket sm:block">{title.line2}</span>{' '}
              <span className="sm:block">
                <span className="text-zinc-500">{title.forText}</span>{' '}
                <span className="text-volt">{title.client}</span>
              </span>
            </h1>
          </Reveal>

          {/* bullets */}
          <Reveal delay={200}>
            <ul className="mt-9 space-y-4 border-y border-line py-6">
              {hero.bullets.map((b) => (
                <li key={b.bold + b.after} className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-panel-2 text-xl">
                    {b.icon}
                  </span>
                  <p className="font-display text-base font-medium uppercase tracking-wide text-zinc-300 sm:text-lg">
                    {b.before && `${b.before} `}
                    <span className="font-bold text-white">{b.bold}</span>
                    {b.after && ` ${b.after}`}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* "= you sell more …" result line */}
          <Reveal delay={300}>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-volt/40 bg-volt/10 text-xl">
                {hero.result.icon}
              </span>
              <p className="font-display text-base font-bold uppercase tracking-wide text-zinc-300 sm:text-xl">
                {hero.result.before}{' '}
                <span className="text-volt">{hero.result.bold}</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Right: laptop + ghost CTA ── */}
        <Reveal delay={250} className="min-w-0">
          <LaptopPreview />
          <div className="mt-8 text-center">
            <a
              href={hero.cta.href}
              className="group inline-flex items-center gap-2 border-b-2 border-volt pb-1.5 font-display text-sm font-bold uppercase tracking-[0.18em] text-volt transition-colors hover:text-volt-2"
            >
              {hero.cta.label}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
