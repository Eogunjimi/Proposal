import { useState } from 'react';
import { traffic } from '../../data/content.js';
import Steps from '../../components/ui/Steps.jsx';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckIcon,
  GlobeIcon,
  MegaphoneIcon,
  PhoneIcon,
  SparkIcon,
} from '../../components/ui/icons.jsx';
import SiteDiagram from '../traffic/SiteDiagram.jsx';
import SerpMock from '../traffic/SerpMock.jsx';

/**
 * TrafficContent — Lever 01's system as a TABBED interface:
 * a tab bar (SEO · INCLUDED / FACEBOOK ADS · $2,500/MO / LOCAL SERVICE
 * ADS · $1,000/MO) and a panel below that shows the active tab.
 * Copy lives in src/data/content.js → `traffic`
 */
export default function TrafficContent() {
  const { seo, facebook, lsa } = traffic;

  const TABS = [
    { key: 'seo', label: seo.tab, badge: seo.badge, tone: 'green' },
    { key: 'facebook', label: facebook.tab, badge: facebook.price, tone: 'amber' },
    { key: 'lsa', label: lsa.tab, badge: lsa.price, tone: 'amber' },
  ];

  const [active, setActive] = useState('seo');

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="flex flex-col gap-2 rounded-2xl border border-line bg-panel p-2 sm:flex-row">
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              aria-pressed={isActive}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 font-display text-xs font-bold tracking-[0.14em] transition-all sm:text-sm ${
                isActive ? 'bg-volt text-ink' : 'text-mute hover:bg-panel-2 hover:text-white'
              }`}
            >
              {t.label}
              <span
                className={`rounded-full border px-2 py-0.5 font-display text-[10px] font-bold tracking-normal ${
                  isActive
                    ? 'border-ink/30 bg-ink/10 text-ink'
                    : t.tone === 'green'
                      ? 'border-leaf/40 bg-leaf/10 text-leaf'
                      : 'border-volt/40 bg-volt/10 text-volt'
                }`}
              >
                {t.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Active tab panel ── */}
      <div key={active} className="mt-4 rounded-2xl border border-line bg-panel-2/50 p-6 sm:p-8">
        {active === 'seo' && <SeoPanel seo={seo} />}
        {active === 'facebook' && <FacebookPanel facebook={facebook} />}
        {active === 'lsa' && <LsaPanel lsa={lsa} />}
      </div>
    </div>
  );
}

/* ═══ Shared panel header: icon + title + note, chip on the right ═══ */
function PanelHeader({ icon: Icon, title, note, chip }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-volt/30 bg-volt/10 text-volt">
          <Icon className="size-5" />
        </span>
        <div>
          <h4 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
            {title}
          </h4>
          <p className="mt-1 text-sm text-mute">{note}</p>
        </div>
      </div>
      <span className="hidden shrink-0 rounded-full border border-volt/40 bg-volt/10 px-3 py-1 font-display text-[10px] font-bold tracking-[0.14em] text-volt sm:block">
        {chip}
      </span>
    </div>
  );
}

/* ═══ TAB 1 · SEO + AEO ═══ */
function SeoPanel({ seo }) {
  return (
    <div>
      <PanelHeader icon={GlobeIcon} title={seo.panelTitle} note={seo.summary} chip={seo.chip} />

      {/* bold lead-in bullets */}
      <ul className="mt-6 space-y-3">
        {seo.bullets.map((b) => (
          <li key={b.head} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300 sm:text-base">
            <CheckIcon className="mt-1 size-4 shrink-0 text-leaf" />
            <span>
              <span className="font-semibold text-white">{b.head}</span>, {b.body}
            </span>
          </li>
        ))}
      </ul>

      {/* why it works — highlighted callout */}
      <div className="mt-6 flex items-center gap-4 rounded-xl border border-volt/30 bg-volt/[0.08] px-5 py-4 sm:gap-6 sm:px-6">
        <p className="shrink-0 font-display text-4xl font-bold text-volt sm:text-5xl">
          {seo.why.stat}
        </p>
        <p className="text-sm leading-relaxed text-zinc-300">
          <span className="font-semibold text-volt">Why this works: </span>
          {seo.why.text}
        </p>
      </div>

      {/* CTA → scrolls to the service-area grid below */}
      <a
        href={seo.cta.href}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-volt px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03] sm:text-sm"
      >
        {seo.cta.label}
        <ArrowDownIcon className="size-4" />
      </a>

      {/* service-area grid / sitemap */}
      <div id="seo-diagram" className="mt-8 scroll-mt-28">
        <h5 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
          {seo.diagramTitle}
        </h5>
        <SiteDiagram />
      </div>

      {/* 10 things */}
      <h5 className="mb-4 mt-10 font-display text-xs font-bold uppercase tracking-[0.24em] text-mute">
        {seo.tenTitle}
      </h5>
      <ol className="grid gap-2.5 sm:grid-cols-2">
        {seo.ten.map((item, i) => (
          <li key={item.head} className="flex gap-3 rounded-xl border border-line bg-panel px-4 py-3.5">
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

      {/* SERP preview */}
      <div className="mt-10">
        <h5 className="font-display text-lg font-semibold text-white">
          {seo.serp.title} <span className="text-mute">— {seo.serp.sub}</span>
        </h5>
        <div className="mt-4">
          <SerpMock serp={seo.serp} />
        </div>
      </div>
    </div>
  );
}

/* ═══ TAB 2 · Facebook Ads ═══ */
function FacebookPanel({ facebook }) {
  return (
    <div>
      <PanelHeader icon={MegaphoneIcon} title={facebook.title} note={facebook.tagline} chip={facebook.chip} />

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        {facebook.intro}
      </p>

      <div className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-leaf/40 bg-leaf/10 px-4 py-2">
        <SparkIcon className="size-4 text-leaf" />
        <p className="font-display text-sm font-semibold text-leaf">{facebook.statLabel}</p>
        <span className="text-xs text-mute">{facebook.statNote}</span>
      </div>

      <div className="mt-6">
        <Steps steps={facebook.steps} />
      </div>
    </div>
  );
}

/* ═══ TAB 3 · Local Service Ads ═══ */
function LsaPanel({ lsa }) {
  return (
    <div>
      <PanelHeader icon={PhoneIcon} title={lsa.title} note={lsa.tagline} chip={lsa.chip} />

      <p className="mt-6 font-display text-lg font-semibold text-white">{lsa.headline}</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">{lsa.body}</p>

      {/* lead → booked chain */}
      <ol className="mt-6 flex flex-wrap items-center gap-2.5">
        {lsa.steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2.5">
            <span className="rounded-lg border border-line bg-panel px-3.5 py-2 font-display text-xs font-semibold text-white sm:text-sm">
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
    </div>
  );
}
