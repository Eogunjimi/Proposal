import { hero } from '../data/content.js';
import Reveal from '../components/ui/Reveal.jsx';
import { ArrowDownIcon, CheckIcon, StarIcon } from '../components/ui/icons.jsx';

/**
 * Hero — the top of the one-pager.
 * Left: headline + the 3 promises + the "=" result line.
 * Right (desktop): floating "proof" cards (Google #1, Lighthouse, AI callback).
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-44">
      {/* backdrop: blueprint grid + glows */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="glow-volt absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2" aria-hidden />
      <div className="glow-leaf absolute -right-40 top-1/3 size-[30rem]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        {/* ── Copy ── */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-volt">
              <span className="size-1.5 rounded-full bg-volt" />
              {hero.eyebrow.toUpperCase()}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
              {hero.titleStart}{' '}
              <span className="text-gradient">{hero.titleHighlight}</span>{' '}
              <span className="text-zinc-400">{hero.titleEnd}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 space-y-3.5">
              {hero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base text-zinc-200 sm:text-lg">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-leaf/40 bg-leaf/10 text-leaf">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-volt/35 bg-volt/[0.07] p-5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-volt font-display text-lg font-bold text-ink">
                =
              </span>
              <p className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                {hero.result.replace(/^=\s*/, '')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#formula"
                className="inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:scale-[1.04]"
              >
                See the winning formula
                <ArrowDownIcon className="size-4" />
              </a>
              <a
                href="#traffic"
                className="text-sm font-semibold text-mute transition-colors hover:text-volt"
              >
                Skip to the 3 levers ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Floating proof cards ── */}
        <Reveal delay={250} className="relative hidden lg:block">
          <div className="absolute inset-0 -z-10 rounded-[2rem] border border-line bg-panel/40" />
          <div className="space-y-4 p-6">
            {hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel-2 px-5 py-4 shadow-2xl shadow-black/40 ${
                  i === 1 ? 'translate-x-8' : i === 2 ? 'translate-x-3' : ''
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-xs text-mute">{s.label}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                    {s.note}
                    {i === 0 && <StarIcon className="size-3.5 text-volt" />}
                  </p>
                </div>
                <p className="font-display text-3xl font-bold text-volt">{s.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
