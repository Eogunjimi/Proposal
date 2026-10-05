import { ArrowDownIcon } from '../../components/ui/icons.jsx';

/**
 * SiteDiagram — the sitemap tree: HOME → Tier pages → pillar pages
 * → the pages that grow out of Services and Locations.
 * Pure JSX/CSS so you can edit labels like any other text.
 */

const pill =
  'rounded-lg border border-line bg-panel-2 px-3.5 py-2 font-display text-xs font-medium text-zinc-200 sm:text-sm';
const pillarPill =
  'rounded-lg border border-volt/30 bg-volt/10 px-3.5 py-2 font-display text-xs font-semibold text-volt sm:text-sm';

function TierLabel({ children }) {
  return (
    <p className="mb-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.26em] text-mute">
      {children}
    </p>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1.5 text-volt/60" aria-hidden>
      <ArrowDownIcon className="size-4" />
    </div>
  );
}

export default function SiteDiagram() {
  return (
    <div className="rounded-2xl border border-line bg-ink/60 p-5 sm:p-8">
      {/* HOME */}
      <TierLabel>Home</TierLabel>
      <div className="flex justify-center">
        <span className="rounded-lg bg-volt px-5 py-2 font-display text-sm font-bold text-ink">
          HOME — aaoengineering.com
        </span>
      </div>

      <Connector />

      {/* TIER 1 */}
      <TierLabel>Tier 1 — Core pages</TierLabel>
      <div className="flex flex-wrap justify-center gap-2.5">
        {['About', 'Projects', 'Contact'].map((p) => (
          <span key={p} className={pill}>{p}</span>
        ))}
      </div>

      <Connector />

      {/* TIER 2 */}
      <TierLabel>Tier 2 — Pillar pages</TierLabel>
      <div className="flex flex-wrap justify-center gap-2.5">
        {['Services', 'Locations', 'Why Us', 'Process', 'Blog'].map((p) => (
          <span key={p} className={pillarPill}>{p}</span>
        ))}
      </div>

      <Connector />

      {/* Branches from Services + Locations */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-panel p-4">
          <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-volt">
            ↳ From Services
          </p>
          <ul className="flex flex-wrap gap-2">
            {['Residential Solar', 'Commercial Solar', 'CCTV Installation', 'Other Service'].map(
              (p) => (
                <li key={p} className={pill}>{p}</li>
              ),
            )}
          </ul>
          <p className="mt-3 text-[11px] font-semibold tracking-wider text-leaf">6–12 PAGES</p>
        </div>

        <div className="rounded-xl border border-line bg-panel p-4">
          <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-volt">
            ↳ From Locations
          </p>
          <ul className="flex flex-wrap gap-2">
            {['Lekki Phase 1', 'Victoria Island', 'Ikeja', '+9 more'].map((p) => (
              <li key={p} className={pill}>{p}</li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] font-semibold tracking-wider text-leaf">12 CITY PAGES</p>
        </div>
      </div>
    </div>
  );
}
