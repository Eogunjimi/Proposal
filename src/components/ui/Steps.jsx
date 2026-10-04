/**
 * Steps — numbered process cards ("01 — Ad Campaign", ...).
 * steps: [{ head, body }]
 */
export default function Steps({ steps }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {steps.map((step, i) => (
        <li
          key={step.head}
          className="group relative overflow-hidden rounded-xl border border-line bg-panel-2 p-5 transition-colors hover:border-volt/30"
        >
          <span className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl font-bold text-line/70 transition-colors group-hover:text-volt/15">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-volt">
            {String(i + 1).padStart(2, '0')}
          </p>
          <h4 className="relative font-display text-base font-semibold text-white">{step.head}</h4>
          <p className="relative mt-2 text-sm leading-relaxed text-mute">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
