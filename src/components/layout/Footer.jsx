import { site } from '../../data/content.js';
import { BoltIcon } from '../ui/icons.jsx';

/** Footer — a single quiet line to close the one-pager. */
export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-volt text-ink">
            <BoltIcon className="size-4" />
          </span>
          <p className="font-display text-sm font-bold tracking-[0.14em] text-white">
            {site.agency}
          </p>
        </div>
        <p className="text-xs text-mute">
          Prepared for <span className="text-zinc-300">{site.client}</span> · Solar · CCTV ·
          Electrical · {site.year}
        </p>
        <p className="text-xs text-mute">Traffic · Trust · Conversion</p>
      </div>
    </footer>
  );
}
