import { useEffect, useState } from 'react';
import { nav, site } from '../../data/content.js';
import { BoltIcon, CloseIcon, MenuIcon } from '../ui/icons.jsx';

/**
 * Navbar — fixed to the top, blurs once you scroll.
 * Links jump to each section (all on this one page).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-line bg-ink/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-volt text-ink">
            <BoltIcon className="size-4.5" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.14em] text-white">
            {site.agencyShort}
            <span className="ml-2 hidden font-normal tracking-normal text-mute sm:inline">
              × {site.client}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-mute transition-colors hover:text-volt"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#final"
            className="rounded-full bg-volt px-4.5 py-2 text-sm font-bold text-ink transition-transform hover:scale-[1.04]"
          >
            Start the build
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-lg border border-line text-white md:hidden"
        >
          {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-line bg-ink/95 px-5 pb-6 pt-3 backdrop-blur-xl md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-line/60 py-3.5 font-display text-base font-medium text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#final"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-xl bg-volt py-3 text-center font-display font-bold text-ink"
          >
            Start the build
          </a>
        </div>
      )}
    </header>
  );
}
