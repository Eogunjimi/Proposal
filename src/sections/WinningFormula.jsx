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

  return (
    <Section
      id="formula"
      eyebrow={formula.eyebrow}
      title={formula.title}
      highlight={formula.highlight}
      sub={formula.sub}
      tinted
    >
      {/* ── the 3 boxes ── */}
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {formula.levers.map((lever, i) => (
          <Reveal key={lever.id} delay={i * 100} className="h-full">
            <LeverBox lever={lever} open={openId === lever.id} onToggle={() => toggle(lever.id)} />
          </Reveal>
        ))}
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
