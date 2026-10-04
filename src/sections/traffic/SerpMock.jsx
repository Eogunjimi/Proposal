import { MapPinIcon, SearchIcon, StarIcon } from '../../components/ui/icons.jsx';

/**
 * SerpMock — a simulated Google results preview showing the client at #1.
 * ✏️  TODO: once the site is live and ranking, swap this component for a
 * real screenshot of the Google result.
 */
export default function SerpMock({ serp }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white text-zinc-800">
      {/* mock search bar */}
      <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-3.5">
        <SearchIcon className="size-4.5 text-zinc-400" />
        <p className="text-sm text-zinc-700">{serp.query}</p>
        <span className="ml-auto hidden text-xs text-zinc-400 sm:block">About 1,240,000 results (0.41s)</span>
      </div>

      <div className="space-y-1 bg-white p-4 sm:p-5">
        {/* #1 — the client */}
        <div className="relative rounded-xl border-2 border-volt bg-amber-50/60 p-4">
          <span className="absolute -top-3 right-4 rounded-full bg-volt px-2.5 py-0.5 font-display text-[10px] font-bold tracking-widest text-ink">
            #1 RESULT
          </span>
          <p className="text-xs text-zinc-500">{serp.resultUrl}</p>
          <p className="mt-0.5 text-base font-medium text-blue-700 sm:text-lg">{serp.resultTitle}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-800">{serp.rating}</span>
            <span className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-3" />
              ))}
            </span>
            <span>({serp.reviews} reviews)</span>
          </p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-600">{serp.snippet}</p>
          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-700">
            <MapPinIcon className="size-3.5" />
            Google Guaranteed · Serves your area
          </p>
        </div>

        {/* competitors — deliberately faded */}
        {serp.competitors.map((c, i) => (
          <div key={c} className="rounded-xl p-4 opacity-45">
            <p className="text-xs text-zinc-500">{c}</p>
            <p className="mt-0.5 text-base text-blue-700">
              {i === 0 ? 'Solar Company in Lagos | Free Quote' : 'Electricians & Solar — Lagos'}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Some description text that nobody reads because the result above already won…
            </p>
          </div>
        ))}
      </div>

      <p className="border-t border-zinc-200 bg-zinc-50 px-5 py-2.5 text-center text-[10px] font-semibold tracking-[0.22em] text-zinc-400">
        SIMULATED PREVIEW — REPLACE WITH YOUR REAL RANKING SCREENSHOT
      </p>
    </div>
  );
}
