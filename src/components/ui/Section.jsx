import Reveal from './Reveal.jsx';

/**
 * Section — shared page-block wrapper.
 * Handles the anchor id, scroll offset, consistent width, and the
 * eyebrow + big display heading pattern used across the page.
 */
export default function Section({
  id,
  eyebrow,
  title,
  highlight,
  sub,
  children,
  className = '',
  tinted = false,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-20 sm:py-28 ${
        tinted ? 'border-y border-line bg-panel/50' : ''
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-3xl sm:mb-16">
            {eyebrow && (
              <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.28em] text-volt">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold leading-[1.08] text-white sm:text-5xl">
                {title} {highlight && <span className="text-gradient">{highlight}</span>}
              </h2>
            )}
            {sub && <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{sub}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
