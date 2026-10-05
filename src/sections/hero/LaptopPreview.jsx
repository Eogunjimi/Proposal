import { useLayoutEffect, useRef, useState } from 'react';
import { hero } from '../../data/content.js';
import { BoltIcon } from '../../components/ui/icons.jsx';

/**
 * LaptopPreview — a CSS laptop showing a miniature mock of the future
 * aaoengineering.com site ("your live preview").
 *
 * HOW IT STAYS FULLY VISIBLE ON EVERY SCREEN:
 * The mini site is designed ONCE at a fixed width (DESIGN_WIDTH = 640px).
 * A ResizeObserver measures the real laptop-screen width and scales the
 * whole mock down/up with CSS transform — so the complete site (browser
 * bar included) is always visible, perfectly proportioned, never clipped.
 *
 * All text is editable via src/data/content.js → hero.preview
 */
const DESIGN_WIDTH = 640;

export default function LaptopPreview() {
  const { preview } = hero;

  const frameRef = useRef(null); // available space inside the screen bezel
  const contentRef = useRef(null); // the unscaled 640px-wide mock
  const [scale, setScale] = useState(0);
  const [scaledHeight, setScaledHeight] = useState(0);

  useLayoutEffect(() => {
    const fit = () => {
      const w = frameRef.current?.clientWidth ?? 0;
      const h = contentRef.current?.scrollHeight ?? 0;
      if (w > 0 && h > 0) {
        const s = w / DESIGN_WIDTH;
        setScale(s);
        setScaledHeight(h * s);
      }
    };
    fit();
    const observer = new ResizeObserver(fit);
    if (frameRef.current) observer.observe(frameRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    window.addEventListener('resize', fit);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);

  return (
    <div className="relative">
      {/* ── Screen (lid) ── */}
      <div className="rounded-t-2xl border border-zinc-700 bg-zinc-800 p-1.5 pb-0 shadow-2xl shadow-black/70">
        <div ref={frameRef} className="overflow-hidden rounded-t-lg bg-ink ring-1 ring-black">
          {/* scaled mock — measured wrapper keeps exact scaled height */}
          <div style={{ height: scaledHeight || undefined }}>
            <div
              ref={contentRef}
              style={{
                width: DESIGN_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                visibility: scale ? 'visible' : 'hidden', // no flash before first measure
              }}
            >
              {/* browser chrome */}
              <div className="flex items-center gap-3 border-b border-line bg-zinc-900 px-4 py-2.5">
                <span className="flex gap-1.5">
                  <i className="size-2.5 rounded-full bg-red-500/80" />
                  <i className="size-2.5 rounded-full bg-yellow-400/80" />
                  <i className="size-2.5 rounded-full bg-green-500/80" />
                </span>
                <span className="mx-auto flex items-center gap-1.5 rounded-md bg-ink px-4 py-1.5 text-[11px] text-mute">
                  🔒 {preview.url}{' '}
                  <span className="text-volt/80">{preview.urlNote}</span>
                </span>
              </div>

              {/* site nav */}
              <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3">
                <p className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded bg-volt text-ink">
                    <BoltIcon className="size-3" />
                  </span>
                  <span className="font-display text-[12px] font-bold tracking-[0.14em] text-white">
                    AAO ENGINEERING
                  </span>
                </p>
                <nav className="flex gap-3 text-[9.5px] text-mute">
                  {preview.nav.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </nav>
                <span className="shrink-0 rounded bg-volt px-2.5 py-1.5 text-[9px] font-bold text-ink">
                  FREE QUOTE
                </span>
              </div>

              {/* site hero */}
              <div className="bg-gradient-to-b from-panel-2/60 to-transparent px-5 py-8 text-center">
                <p className="text-[9px] font-semibold tracking-[0.32em] text-volt">
                  {preview.siteHero.eyebrow}
                </p>
                <h4 className="mx-auto mt-2 max-w-sm font-display text-[22px] font-bold leading-snug text-white">
                  {preview.siteHero.headline}
                </h4>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="rounded-full bg-volt px-4 py-1.5 text-[10px] font-bold text-ink">
                    {preview.siteHero.primaryBtn}
                  </span>
                  <span className="rounded-full border border-line px-4 py-1.5 text-[10px] font-medium text-zinc-300">
                    {preview.siteHero.secondaryBtn}
                  </span>
                </div>
              </div>

              {/* review cards */}
              <div className="grid grid-cols-3 gap-2.5 px-5 pb-4">
                {preview.reviews.map((r) => (
                  <div key={r.name} className="rounded-lg border border-line bg-panel-2 p-3">
                    <p className="flex items-center gap-1.5">
                      <span className="text-[10px] tracking-tight text-flame">★★★★★</span>
                      <span className="rounded bg-ink px-1.5 py-0.5 text-[8px] font-bold text-mute">
                        5.0
                      </span>
                    </p>
                    <p className="mt-1.5 text-[9.5px] leading-[1.45] text-zinc-400">“{r.text}”</p>
                    <p className="mt-1.5 text-[8px] font-semibold text-mute">{r.name}</p>
                  </div>
                ))}
              </div>

              {/* review buttons */}
              <div className="flex justify-center gap-2.5 pb-4">
                <span className="rounded border border-line bg-ink px-3 py-1.5 text-[8px] font-semibold tracking-wider text-zinc-400">
                  <span className="text-[#4285F4]">G</span> SEE ALL GOOGLE REVIEWS
                </span>
                <span className="rounded border border-line bg-ink px-3 py-1.5 text-[8px] font-semibold tracking-wider text-zinc-400">
                  <span className="text-[#1877F2]">f</span> SEE ALL FACEBOOK REVIEWS
                </span>
              </div>

              {/* service-areas marquee */}
              <div className="overflow-hidden border-y border-line bg-panel py-2.5">
                <div className="animate-marquee flex w-max items-center gap-5 text-[10px] font-semibold tracking-[0.22em] text-mute">
                  {[...preview.areas, ...preview.areas].map((area, i) => (
                    <span key={i} className="flex items-center gap-5">
                      {area} <span className="text-volt">·</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* about strip */}
              <div className="flex items-center gap-4 px-5 py-4">
                <div className="grid h-16 w-24 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-panel-2 to-line">
                  <BoltIcon className="size-6 text-volt" />
                </div>
                <div>
                  <p className="text-[8px] tracking-[0.3em] text-mute">{preview.about.eyebrow}</p>
                  <p className="font-display text-[13px] font-bold text-white">
                    {preview.about.line}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Base (keyboard deck) ── */}
      <div className="mx-[-12px] h-2.5 rounded-b-2xl border-x border-b border-zinc-600 bg-gradient-to-b from-zinc-500 to-zinc-800" />
      <div className="mx-auto h-1.5 w-1/3 rounded-b-xl bg-zinc-800/90" aria-hidden />
    </div>
  );
}
