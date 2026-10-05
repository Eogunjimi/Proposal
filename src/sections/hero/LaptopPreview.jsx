import { useLayoutEffect, useRef, useState } from 'react';
import { hero } from '../../data/content.js';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  HomeIcon,
  RefreshIcon,
} from '../../components/ui/icons.jsx';

/**
 * LaptopPreview — a WORKING mini-browser inside a CSS laptop frame.
 *
 * Features:
 *  - Editable address bar — type any URL + Enter (or GO) to load it
 *  - Back / forward / reload / home buttons
 *  - The page inside is a live iframe: clickable AND scrollable
 *  - Default load is a local demo AAO site (public/aao-site/) so the
 *    preview always works offline; external URLs load too — note some
 *    sites (Google, X, banks…) refuse to be embedded via X-Frame-Options,
 *    use the ↗ button to open them in a new tab instead.
 *
 * The whole browser is designed once at DESIGN_WIDTH and scale-to-fits
 * every screen, so it is always fully visible (never clipped).
 * Defaults live in src/data/content.js → hero.preview
 */
const DESIGN_WIDTH = 640;
const SCREEN_HEIGHT = 430; // design height of the viewport area

export default function LaptopPreview() {
  const { preview } = hero;
  const demoLabel = preview.url; // shown in the address bar by default
  const demoSrc = preview.demoPath; // local demo site

  const frameRef = useRef(null); // available space inside the bezel
  const contentRef = useRef(null); // the unscaled 640px-wide browser
  const iframeRef = useRef(null);
  const [scale, setScale] = useState(0);
  const [scaledHeight, setScaledHeight] = useState(0);
  const [address, setAddress] = useState(demoLabel);
  const [src, setSrc] = useState(demoSrc);

  // scale-to-fit: whole browser always fully visible on any screen
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

  // "aaoengineering.com" (or empty) → the local demo site; anything else → real URL
  const resolveTarget = (raw) => {
    const v = raw.trim();
    if (!v || v === demoLabel) return demoSrc;
    if (v.startsWith('/') || /^https?:\/\//i.test(v)) return v;
    return `https://${v}`;
  };

  const go = (e) => {
    e?.preventDefault();
    setSrc(resolveTarget(address));
  };
  const goHome = () => {
    setAddress(demoLabel);
    setSrc(demoSrc);
  };
  const reload = () => {
    if (iframeRef.current) iframeRef.current.src = iframeRef.current.src; // reassign = reload
  };
  const back = () => {
    try {
      iframeRef.current?.contentWindow?.history.back();
    } catch {
      /* cross-origin restriction — ignore */
    }
  };
  const forward = () => {
    try {
      iframeRef.current?.contentWindow?.history.forward();
    } catch {
      /* cross-origin restriction — ignore */
    }
  };

  const navBtn =
    'grid size-7 shrink-0 place-items-center rounded-md text-mute transition-colors hover:bg-line/60 hover:text-white';

  return (
    <div className="relative">
      {/* ── Screen (lid) ── */}
      <div className="rounded-t-2xl border border-zinc-700 bg-zinc-800 p-1.5 pb-0 shadow-2xl shadow-black/70">
        <div ref={frameRef} className="overflow-hidden rounded-t-lg bg-ink ring-1 ring-black">
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
              {/* ── browser chrome — functional toolbar + editable URL ── */}
              <form onSubmit={go} className="flex items-center gap-1.5 border-b border-line bg-zinc-900 px-3 py-2">
                <span className="mr-1 flex gap-1.5">
                  <i className="size-2.5 rounded-full bg-red-500/80" />
                  <i className="size-2.5 rounded-full bg-yellow-400/80" />
                  <i className="size-2.5 rounded-full bg-green-500/80" />
                </span>

                <button type="button" onClick={back} className={navBtn} title="Back" aria-label="Back">
                  <ArrowRightIcon className="size-4 rotate-180" />
                </button>
                <button type="button" onClick={forward} className={navBtn} title="Forward" aria-label="Forward">
                  <ArrowRightIcon className="size-4" />
                </button>
                <button type="button" onClick={reload} className={navBtn} title="Reload" aria-label="Reload">
                  <RefreshIcon className="size-4" />
                </button>
                <button type="button" onClick={goHome} className={navBtn} title="Home (demo site)" aria-label="Home">
                  <HomeIcon className="size-4" />
                </button>

                {/* editable address bar */}
                <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 ring-1 ring-line transition-shadow focus-within:ring-volt/70">
                  <span className="text-[11px]" aria-hidden>🔒</span>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onFocus={(e) => e.target.select()}
                    spellCheck={false}
                    autoCapitalize="off"
                    autoCorrect="off"
                    aria-label="Address bar — type a URL and press Enter"
                    placeholder="Type any URL, press Enter…"
                    className="min-w-0 flex-1 bg-transparent text-[12px] text-zinc-200 outline-none placeholder:text-mute"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded bg-volt px-2 py-0.5 text-[9px] font-bold text-ink transition hover:brightness-110"
                  >
                    GO
                  </button>
                </span>

                <a href={src} target="_blank" rel="noreferrer" className={navBtn} title="Open in new tab" aria-label="Open in new tab">
                  <ExternalLinkIcon className="size-4" />
                </a>
              </form>

              {/* ── live viewport — clickable & scrollable ── */}
              <iframe
                ref={iframeRef}
                src={src}
                title="Live website preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                style={{ width: DESIGN_WIDTH, height: SCREEN_HEIGHT, display: 'block', border: 0 }}
              />
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
