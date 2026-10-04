import { traffic } from '../data/content.js';
import Section from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import Steps from '../components/ui/Steps.jsx';
import { ArrowRightIcon, CheckIcon, SparkIcon } from '../components/ui/icons.jsx';
import SiteDiagram from './traffic/SiteDiagram.jsx';
import SerpMock from './traffic/SerpMock.jsx';

/**
 * TrafficSection — LEVER 01.
 * Three dropdown packages:
 *   01 · SEO + AEO Architecture   (included — open by default)
 *   02 · Facebook Ads Strategy    (monthly fee)
 *   03 · Local Service Ads        (monthly fee)
 */
export default function TrafficSection() {
  const { seo, facebook, lsa } = traffic;

  return (
    <Section
      id="traffic"
      eyebrow={traffic.eyebrow}
      title={traffic.title}
      highlight={traffic.highlight}
      sub={traffic.sub}
    >
      <div className="space-y-5">
        {/* ── 01 · SEO + AEO ── */}
        <Reveal>
          <Accordion
            index="01"
            badge={seo.badge}
            badgeTone="green"
            title={seo.title}
            tagline={seo.tagline}
            defaultOpen
          >
            <p className="font-display text-lg font-semibold text-white">{seo.summary}</p>

            {/* 3 core bullets */}
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {seo.bullets.map((b) => (
                <li key={b.head} className="rounded-xl border border-line bg-panel-2 p-4">
                  <p className="flex items-start gap-2 font-display text-sm font-semibold text-white">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
                    {b.head}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{b.body}</p>
                </li>
              ))}
            </ul>

            {/* why it works */}
            <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-volt/30 bg-volt/[0.06] p-5 sm:flex-row sm:items-center">
              <p className="font-display text-4xl font-bold text-volt">{seo.why.stat}</p>
              <p className="text-sm leading-relaxed text-zinc-300">
                <span className="font-semibold text-white">Why this works: </span>
                {seo.why.text}
              </p>
            </div>

            {/* architecture diagram */}
            <h4 className="mb-4 mt-10 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
              {seo.diagramTitle}
            </h4>
            <SiteDiagram />

            {/* 10 things checklist */}
            <h4 className="mb-4 mt-10 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
              {seo.tenTitle}
            </h4>
            <ol className="grid gap-2.5 sm:grid-cols-2">
              {seo.ten.map((item, i) => (
                <li
                  key={item.head}
                  className="flex gap-3 rounded-xl border border-line bg-panel-2/60 px-4 py-3.5"
                >
                  <span className="font-display text-sm font-bold text-volt">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.head}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-mute">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            {/* SERP preview */}
            <div className="mt-10">
              <h4 className="font-display text-lg font-semibold text-white">
                {seo.serp.title}{' '}
                <span className="text-mute">— {seo.serp.sub}</span>
              </h4>
              <div className="mt-4">
                <SerpMock serp={seo.serp} />
              </div>
            </div>
          </Accordion>
        </Reveal>

        {/* ── 02 · Facebook Ads ── */}
        <Reveal delay={80}>
          <Accordion index="02" badge={facebook.badge} title={facebook.title} tagline={facebook.tagline}>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {facebook.intro}
            </p>

            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-leaf/40 bg-leaf/10 px-4 py-2">
              <SparkIcon className="size-4 text-leaf" />
              <p className="font-display text-sm font-semibold text-leaf">{facebook.statLabel}</p>
              <span className="text-xs text-mute">{facebook.statNote}</span>
            </div>

            <div className="mt-6">
              <Steps steps={facebook.steps} />
            </div>
          </Accordion>
        </Reveal>

        {/* ── 03 · Local Service Ads ── */}
        <Reveal delay={160}>
          <Accordion index="03" badge={lsa.badge} title={lsa.title} tagline={lsa.tagline}>
            <p className="font-display text-lg font-semibold text-white">{lsa.headline}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {lsa.body}
            </p>

            {/* lead → booked chain */}
            <ol className="mt-6 flex flex-wrap items-center gap-2.5">
              {lsa.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2.5">
                  <span className="rounded-lg border border-line bg-panel-2 px-3.5 py-2 font-display text-xs font-semibold text-white sm:text-sm">
                    <span className="mr-1.5 text-volt">{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </span>
                  {i < lsa.steps.length - 1 && (
                    <ArrowRightIcon className="size-4 shrink-0 text-volt/60" />
                  )}
                </li>
              ))}
            </ol>

            {/* ROAS callout */}
            <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-leaf/35 bg-leaf/[0.07] p-5 sm:flex-row sm:items-center">
              <p className="font-display text-4xl font-bold text-leaf">{lsa.roas.stat}</p>
              <div>
                <p className="font-display text-sm font-semibold text-white">{lsa.roas.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">{lsa.roas.note}</p>
              </div>
            </div>
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
