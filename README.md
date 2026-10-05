# AAO Engineering × POWERGROWTHZ — One-Page Proposal

A one-page React website proposal built by **POWERGROWTHZ AGENCY** for **AAO Engineering**
(solar · CCTV · electrical services). Everything lives on a single page, broken into
sections with dropdowns (accordions) you can expand and edit.

## Quick start

```bash
npm install     # first time only
npm run dev     # local dev server with hot reload
npm run build   # production build → dist/
```

## Project structure

```
├── index.html                  # fonts + <title> + favicon
├── vite.config.js              # Vite + React + Tailwind CSS v4
└── src/
    ├── main.jsx                # React entry (do not touch)
    ├── index.css               # 🎨 theme tokens (colors/fonts) + helpers
    ├── App.jsx                 # 🧩 the page: sections assembled in order
    ├── data/
    │   └── content.js          # ✏️  ALL copy for the site — edit text here
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx      # fixed top nav + mobile menu
    │   │   └── Footer.jsx
    │   └── ui/
    │       ├── Accordion.jsx   # ⤵ reusable dropdown panel
    │       ├── Section.jsx     # shared section wrapper (id, heading, sub)
    │       ├── Reveal.jsx      # fade-in-on-scroll wrapper
    │       ├── Steps.jsx       # numbered process cards (01–04)
    │       └── icons.jsx       # inline SVG icon set
    └── sections/
        ├── Hero.jsx            # headline, emoji bullets, "=" result + laptop
        │   └── hero/
        │       └── LaptopPreview.jsx  # CSS laptop w/ mini client-site mock
        ├── WinningFormula.jsx  # T.T.C. — 3 lever boxes; HOW? opens full system below
        │   ├── levers/
        │   │   ├── LeverBox.jsx        # lever card (one open at a time)
        │   │   ├── TrafficContent.jsx  # LEVER 01 — SEO/AEO + FB Ads + LSA, all vertical
        │   │   ├── TrustContent.jsx    # LEVER 02 (placeholder — build it out)
        │   │   └── ConversionContent.jsx # LEVER 03 (placeholder — build it out)
        │   └── traffic/
        │       ├── SiteDiagram.jsx     # sitemap tree (Home → tiers → pages)
        │       └── SerpMock.jsx        # mock Google #1 result preview
        └── FinalCTA.jsx        # "= MORE SOLAR INSTALLATIONS…" + CTA
```

## How editing works

- **Text / copy** → almost everything is in `src/data/content.js`. Change it there.
- **Colors & fonts** → `src/index.css` (`@theme` block: `--color-volt`, `--color-ink`, …).
- **Add a dropdown** → use `<Accordion title="…" tagline="…">…anything…</Accordion>`.
- **Add a section** → create a file in `src/sections/`, then import it in `App.jsx`.
- **Section anchors** → `#top` `#formula` `#traffic` `#trust` `#conversion` `#final`.

## To-do (placeholders to replace)

- `TrustSection` / `ConversionSection` — currently generic cards, flesh out with the real system.
- `SerpMock.jsx` — swap for a real Google ranking screenshot when available.
- `FinalCTA.jsx` — point the button `href` at your WhatsApp / Calendly / email.
