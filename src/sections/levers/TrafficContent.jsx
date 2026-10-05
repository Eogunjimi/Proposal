import { traffic } from '../../data/content.js';
import Steps from '../../components/ui/Steps.jsx';
import { ArrowRightIcon, CheckIcon, SparkIcon } from '../../components/ui/icons.jsx';
import SiteDiagram from '../traffic/SiteDiagram.jsx';
import SerpMock from '../traffic/SerpMock.jsx';

/**
 * TrafficContent — the ENTIRE Lever 01 system, displayed vertically
 * inside the HOW? dropdown:
 *   01 · SEO + AEO Architecture   (included)
 *   02 · Facebook Ads Strategy    (monthly fee)
 *   03 · Local Service Ads        (monthly fee)
 * Copy lives in src/data/content.js → `traffic`
 */
export default function TrafficContent() {
  const { seo, facebook, lsa } = traffic;

  return (
    <div className="space-y-10">
      {/* intro line */}
      <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        <span className="font-semibold text-volt">Get found first on Google + AI. </span>
        {traffic.sub}
      </p>

      {/* ── 01 · SEO + AEO Architecture ── */}
      <SubBlock index="01" badge={seo.badge} tone="green" title={seo.title} tagline={seo.tagline}>
        <p className="font-display text-lg font-semibold text-white">{seo.summary}</p>

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

        <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-volt/30 bg-volt/[0.06] p-5 sm:flex-row sm:items-center">
          <p className="font-display text-4xl font-bold text-volt">{seo.why.stat}</p>
          <p className="text-sm leading-relaxed text-zinc-300">
            <span className="font-semibold text-white">Why this works: </span>
            {seo.why.text}
          </p>
        </div>

        <h5 className="mb-4 mt-8 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
          {seo.diagramTitle}
        </h5>
        <SiteDiagram />

        <h5 className="mb-4 mt-8 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
          {seo.tenTitle}
        </h5>
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
                <span className="mt-0.5 block text-xs leading-relaxed text-mute">{item.body}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <h5 className="font-display text-lg font-semibold text-white">
            {seo.serp.title} <span className="text-mute">— {seo.serp.sub}</span>
          </h5>
          <div className="mt-4">
            <SerpMock serp={seo.serp} />
          </div>
        </div>
      </SubBlock>

      {/* ── 02 · Facebook Ads ── */}
      <SubBlock index="02" badge={facebook.badge} tone="amber" title={facebook.title} tagline={facebook.tagline}>
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
      </SubBlock>

      {/* ── 03 · Local Service Ads ── */}
      <SubBlock index="03" badge={lsa.badge} tone="amber" title={lsa.title} tagline={lsa.tagline}>
        <p className="font-display text-lg font-semibold text-white">{lsa.headline}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          {lsa.body}
        </p>

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

        <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-leaf/35 bg-leaf/[0.07] p-5 sm:flex-row sm:items-center">
          <p className="font-display text-4xl font-bold text-leaf">{lsa.roas.stat}</p>
          <div>
            <p className="font-display text-sm font-semibold text-white">{lsa.roas.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-mute">{lsa.roas.note}</p>
          </div>
        </div>
      </SubBlock>
    </div>
  );
}

/** Labeled sub-section inside a lever dropdown — vertical rail on the left. */
function SubBlock({ index, badge, tone = 'amber', title, tagline, children }) {
  const tones = {
    green: 'border-leaf/40 bg-leaf/10 text-leaf',
    amber: 'border-volt/40 bg-volt/10 text-volt',
  };

  return (
    <div className="border-l-2 border-line pl-5 sm:pl-7">
      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-display text-sm font-semibold text-volt">{index}</span>
        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] ${tones[tone]}`}>
          {badge}
        </span>
        <h4 className="font-display text-lg font-semibold text-white sm:text-xl">{title}</h4>
        {tagline && <p className="w-full text-sm text-mute sm:ml-[4.5rem]">{tagline}</p>}
      </div>
      {children}
    </div>
  );
}
