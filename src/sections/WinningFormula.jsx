import { useEffect, useRef, useState } from 'react';
import { formula } from '../data/content.js';
import Section from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import LeverBox from './levers/LeverBox.jsx';
import TrafficContent from './levers/TrafficContent.jsx';
import TrustContent from './levers/TrustContent.jsx';
import ConversionContent from './levers/ConversionContent.jsx';

/**
 * WinningFormula — the "T.T.C." section.
 *
 * Layout: the 3 levers are BOXES in a row. Clicking HOW? on a box opens
 * that lever's ENTIRE system in the full-width dropdown directly below
 * the boxes — laid out vertically.
 *
 * Rules:
 *  - Only one lever open at a time (clicking another swaps the panel).
 *  - Clicking the open box's HOW? (now "CLOSE") collapses the panel.
 *  - Nav links (#traffic / #trust / #conversion) scroll to the box and
 *    open its panel automatically.
 */
const contentById = {
  traffic: TrafficContent,
  trust: TrustContent,
  conversion: ConversionContent,
};

export default function WinningFormula() {
  const [openId, setOpenId] = useState(null); // null = all closed
  const [renderedId, setRenderedId] = useState(null); // lags openId so content can animate out
  const panelRef = useRef(null);

  // Open the lever that matches the URL hash (navbar / footer links)
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace('#', '');
      if (contentById[id]) setOpenId(id);
    };
    openFromHash(); // handle landing on a hash directly
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  // Keep the current content mounted while the panel collapses
  useEffect(() => {
    if (openId) setRenderedId(openId);
  }, [openId]);

  // If the panel opened off-screen (mostly mobile), bring it into view
  useEffect(() => {
    if (!openId) return;
    const t = setTimeout(
      () => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      250,
    );
    return () => clearTimeout(t);
  }, [openId]);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));
  const activeLever = formula.levers.find((l) => l.id === renderedId);
  const ActiveContent = contentById[renderedId];

  // data for the 4th gold "payoff" box lives in content.js → formula.result

  return (
    <Section
      id="formula"
      eyebrow={formula.eyebrow}
      title={formula.title}
      highlight={formula.highlight}
      sub={formula.sub}
      tinted
    >
      {/* ── the 3 lever boxes + the gold payoff box — always 4 in a row on desktop ── */}
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {formula.levers.map((lever, i) => (
          <Reveal key={lever.id} delay={i * 100} className="h-full">
            <LeverBox lever={lever} open={openId === lever.id} onToggle={() => toggle(lever.id)} />
          </Reveal>
        ))}
        <Reveal delay={300} className="h-full">
          <ResultBox result={formula.result} />
        </Reveal>
      </div>

      {/* ── the open lever's full system, dropped down below the boxes ── */}
      <div
        ref={panelRef}
        className={`grid transition-all duration-500 ease-in-out ${
          openId ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {ActiveContent && (
            <div className="rounded-2xl border border-volt/35 bg-panel px-5 pb-9 pt-7 sm:px-8">
              <p className="mb-7 font-display text-xs font-bold uppercase tracking-[0.26em] text-volt">
                Lever {activeLever.index} — {activeLever.title} · {activeLever.tagline}
              </p>
              <ActiveContent />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* The 4th gold "payoff" box — the "=" result of the 3 levers.
   Not a lever: no HOW?, no dropdown. Clicks through to the final CTA. */
function ResultBox({ result }) {
  return (
    <a
      href={result.href}
      className="group flex h-full flex-col justify-center gap-5 rounded-2xl border border-volt-2/60 bg-gradient-to-br from-volt-2 via-volt to-flame p-5 text-ink shadow-2xl shadow-volt/10 transition-transform duration-300 hover:scale-[1.02] xl:p-6"
    >
      <p className="text-2xl xl:text-3xl" aria-hidden>
        {result.emojis}
      </p>
      <h3 className="font-display text-base font-bold leading-[1.12] xl:text-lg">
        {result.text}
      </h3>
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 font-display text-[11px] font-bold tracking-[0.14em] text-volt">
        {result.chip}
      </span>
    </a>
  );
}
