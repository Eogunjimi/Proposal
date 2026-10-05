import { useEffect, useState } from 'react';
import { site } from '../../data/content.js';
import { BoltIcon } from '../ui/icons.jsx';

/**
 * Navbar — fixed top bar.
 * Left:  the POWERGROWTHZ agency mark (links back to the top).
 * Right: "PREPARED EXCLUSIVELY FOR:" + divider + the client's logo lockup.
 * No nav links / CTA — the page flows: hero → formula boxes → final CTA.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-ink/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* agency brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-volt text-ink">
            <BoltIcon className="size-4.5" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.14em] text-white">
            {site.agencyShort}
          </span>
        </a>

        {/* prepared-for lockup */}
        <div className="flex items-center gap-3 sm:gap-4">
          <p className="font-display text-[8px] font-medium leading-[1.5] tracking-[0.22em] text-volt sm:text-[10px]">
            PREPARED
            <br />
            EXCLUSIVELY FOR:
          </p>
          <span className="h-9 w-px bg-line" aria-hidden />

          {/* client logo — two-tone lockup */}
          <div className="leading-none">
            <p className="font-display text-xl font-bold tracking-[0.06em] text-white sm:text-2xl">
              AAO
            </p>
            <p className="mt-1.5 font-display text-[8px] font-semibold tracking-[0.36em] text-volt sm:text-[10px]">
              ENGINEERING
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
