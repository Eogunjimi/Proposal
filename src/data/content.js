// ═════════════════════════════════════════════════════════════════
//  CONTENT — the copy for the whole one-pager lives in this file.
//  Edit text here and every section updates. Components are in
//  src/components (reusable UI) and src/sections (page blocks).
// ═════════════════════════════════════════════════════════════════

export const site = {
  agency: 'POWERGROWTHZ AGENCY',
  agencyShort: 'POWERGROWTHZ',
  client: 'AAO Engineering',
  year: new Date().getFullYear(),
};

// ── Navbar links ────────────────────────────────────────────────
export const nav = [
  { label: 'The Formula', href: '#formula' },
  { label: '01 · Traffic', href: '#traffic' },
  { label: '02 · Trust', href: '#trust' },
  { label: '03 · Conversion', href: '#conversion' },
];

// ── Hero ────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'Prepared exclusively for AAO Engineering · by POWERGROWTHZ AGENCY',
  title: {
    line1: 'Ultimate Solar & Electrical',
    line2: 'Engineering Website', // wrapped in volt corner-brackets on desktop
    forText: 'for',
    client: 'AAO Engineering.',
  },
  // icon = emoji shown in the box, bold = the highlighted keyword
  bullets: [
    { icon: '📈', before: 'GENERATES MORE', bold: 'TRAFFIC', after: '' },
    { icon: '🤝', before: 'WINS', bold: 'TRUST', after: 'OF HOMEOWNERS & BUSINESSES' },
    { icon: '📅', before: '', bold: 'CONVERTS', after: 'THEM INTO LEADS' },
  ],
  result: {
    icon: '💰',
    before: '= YOU SELL MORE',
    bold: 'SOLAR INSTALLATIONS, CCTV INSTALLATIONS & OTHER ELECTRICAL SERVICES',
  },
  cta: { label: 'See the winning formula', href: '#formula' },
  // ── The laptop "live preview" mini-site ──
  preview: {
    url: 'aaoengineering.com',
    urlNote: '( your live preview )',
    nav: ['Home', 'About', 'Services', 'Projects', 'Service Areas', 'Blog', 'Contact'],
    siteHero: {
      eyebrow: 'SOLAR · CCTV · ELECTRICAL',
      headline: 'Power Your Home. Secure Your Business.',
      primaryBtn: 'Get Free Estimate',
      secondaryBtn: 'See Projects',
    },
    reviews: [
      { name: 'Chidi A. — Lekki', text: 'AAO gave us 24/7 light with solar. Clean, professional work.' },
      { name: 'Mrs. Bello — Ikoyi', text: 'CCTV installed neatly, everything explained clearly.' },
      { name: 'Tunde O. — Ikeja', text: 'DB upgrade + inverter for the whole office. Solid team.' },
    ],
    areas: ['LEKKI', 'IKOYI', 'VICTORIA ISLAND', 'IKEJA', 'YABA', 'AJAH', 'SURULERE', 'GBAGADA'],
    about: { eyebrow: 'MEET THE TEAM', line: 'OWNER-LED. QUALITY-DRIVEN.' },
  },
};

// ── The Winning Formula (T.T.C.) — the 3 levers / HOW? boxes ───
export const formula = {
  eyebrow: 'The Winning Formula — T · T · C',
  title: 'There are 3 levers.',
  highlight: 'Pull all three and the math works every time.',
  sub: 'Tap HOW? on a lever and its entire system unfolds right here — one lever at a time.',
  levers: [
    { id: 'traffic', index: '01', icon: 'target', title: 'TRAFFIC', tagline: 'First on Google' },
    { id: 'trust', index: '02', icon: 'shield', title: 'TRUST', tagline: 'Win them in 5 seconds' },
    {
      id: 'conversion',
      index: '03',
      icon: 'bolt',
      title: 'CONVERSION',
      tagline: 'Turn visitors into booked estimates',
    },
  ],
};

// ── LEVER 01 · TRAFFIC ─────────────────────────────────────────
export const traffic = {
  eyebrow: 'Lever 01 — Traffic',
  title: 'Get found first',
  highlight: 'on Google + AI.',
  sub: '50% of homeowners and businesses now ask AI before Google. Your new site shows up in both. Your competitor’s old site doesn’t.',

  seo: {
    badge: 'SEO INCLUDED',
    title: 'SEO + AEO Architecture',
    tagline: 'Location pages, schema, AI-ready — the answer ChatGPT cites',
    summary: '12 city pages + schema = the answer ChatGPT cites.',
    bullets: [
      {
        head: '12 location landing pages',
        body: 'One per city you serve. Indexed for "solar installer near me" intent.',
      },
      {
        head: 'Schema + FAQ markup',
        body: 'Entity-pair structure ChatGPT and Gemini can cite directly.',
      },
      {
        head: 'Pillar → silo internal linking',
        body: 'Authority flows down so every silo page ranks.',
      },
    ],
    why: {
      stat: '50%',
      text: 'of homeowners and businesses now ask AI before Google. Your new site shows up in both — your competitor’s old site doesn’t.',
    },
    tenTitle: '10 things we do on your SEO',
    ten: [
      { head: '12 high-income location pages', body: 'Ikoyi, Lekki, Ikeja + 9 more — indexed for "solar installer near me".' },
      { head: 'Schema + FAQ markup', body: 'Entity-pair structure ChatGPT and Gemini cite directly.' },
      { head: 'Pillar → silo internal linking', body: 'Authority flows down so every silo page ranks.' },
      { head: 'LocalBusiness + Service schema', body: 'In JSON-LD on every page.' },
      { head: 'AEO answer blocks', body: 'Positioned as the answer, not just a result.' },
      { head: 'Real reviews + GBP sync', body: 'In the trust spine above the fold.' },
      { head: 'Speed-optimized', body: 'Lighthouse 90+ on every page.' },
      { head: 'Mobile-first metadata', body: 'Canonical hygiene + sitemap auto-ping.' },
      { head: 'Per-page meta + OG tags', body: 'Written for the keyword + intent.' },
      { head: '60-second AI callback', body: 'So leads don’t bounce while traffic ramps.' },
    ],
    diagramTitle: 'Site architecture — authority flows down',
    serp: {
      title: 'This could be you',
      sub: 'What homeowners & business owners see when they search',
      query: 'solar installer near me',
      resultTitle: 'AAO Engineering — Solar, CCTV & Electrical Services | Lagos',
      resultUrl: 'aaoengineering.com',
      rating: '4.9',
      reviews: '87',
      snippet: 'Serving Lekki, Ikoyi, Victoria Island, Ikeja + 8 more areas. Free site assessment & quote — response within 60 seconds.',
      competitors: ['solarfix-ng.com', 'lagospowerpros.com'],
    },
  },

  facebook: {
    badge: 'MONTHLY FEE',
    title: 'Proprietary Facebook Ads Strategy',
    tagline: 'A 4-step funnel that runs while you work',
    intro:
      'A 4-step funnel that runs in the background while you swing hammers. Built around YOUR service area, YOUR average ticket, YOUR ideal job.',
    statLabel: '# Average Cost Per Lead',
    statNote: 'tracked on every campaign',
    steps: [
      {
        head: 'Ad Campaign',
        body: 'Facebook campaign targets homeowners in your service area actively browsing solar, backup power, or electrical content. Lead-form pre-qualified.',
      },
      {
        head: 'The Four-Step Funnel',
        body: 'A conversion-rate-optimized landing page built specifically for solar & electrical work. It speaks directly to the homeowner — where they submit their details.',
      },
      {
        head: 'The AI Lead Connector',
        body: 'The instant a lead submits, an SMS + AI auto-dial hits within 60 seconds. "Just curious" turns into "What’s your address?" before they tab away.',
      },
      {
        head: 'Inspection Booked',
        body: 'Qualified leads land on your calendar as confirmed site inspections. You show up, assess the site, write the estimate. Close.',
      },
    ],
  },

  lsa: {
    badge: 'MONTHLY FEE',
    title: 'Local Service Ads — Google Guaranteed',
    tagline: 'Pay only when the phone rings',
    headline: 'Google Guaranteed leads. Pay only when the phone rings.',
    body: 'Local Service Ads sit ABOVE the regular search results in Yaba. You get the "Google Guaranteed" green check and a pay-per-call model. No clicks wasted.',
    steps: ['Lead', 'Call booked', 'AI call qualified', 'Inspection booked'],
    roas: {
      stat: '5–8×',
      label: 'Typical HIGH ROAS for installers',
      note: 'Because every paid lead is search intent + geo-matched. The monthly budget covers Google spend + management + the AI receptionist routing.',
    },
  },
};

// ── LEVER 02 · TRUST ───────────────────────────────────────────
// ✏️  EDIT: flesh this lever out with your final trust content.
export const trust = {
  eyebrow: 'Lever 02 — Trust',
  title: 'Win them',
  highlight: 'in 5 seconds.',
  sub: 'A stranger decides in about five seconds whether you’re real, local and worth calling. The top of this site is engineered to pass that test before they ever scroll.',
  stat: { value: '5s', label: 'That’s how long a visitor gives you before hitting the back button.' },
  cards: [
    {
      head: 'Reviews above the fold',
      body: 'Google rating, review count and real customer quotes pulled into the hero — synced live with your Google Business Profile.',
    },
    {
      head: 'Proof of work',
      body: 'Real project photos from Lekki to Ikeja — panels on roofs, CCTV installs, DB upgrades — tagged with areas homeowners recognise.',
    },
    {
      head: 'Badges & guarantees',
      body: 'Certifications, insurance, workmanship warranty and the Google Guaranteed check — the small marks that quietly say "safe hands".',
    },
  ],
};

// ── LEVER 03 · CONVERSION ──────────────────────────────────────
// ✏️  EDIT: flesh this lever out with your final conversion content.
export const conversion = {
  eyebrow: 'Lever 03 — Conversion',
  title: 'Turn visits',
  highlight: 'into booked estimates.',
  sub: 'Traffic without conversion is a leaky bucket. Every page is built to move a visitor one step: from reading, to trusting, to booking a site inspection.',
  cards: [
    {
      head: 'One-tap quote forms',
      body: 'A short "Get my free estimate" form on every page — name, phone, area, service. Twenty seconds to complete.',
    },
    {
      head: 'Sticky call & WhatsApp',
      body: 'Phone and WhatsApp buttons follow the scroll on mobile — the two channels your customers actually use.',
    },
    {
      head: '60-second AI callback',
      body: 'Every form lead gets an SMS + AI call within 60 seconds, so hot leads never cool off or bounce to a competitor.',
    },
    {
      head: 'Straight to your calendar',
      body: 'Qualified leads book as confirmed site inspections. You just show up, assess and quote.',
    },
  ],
};

// ── Final CTA ──────────────────────────────────────────────────
export const finalCta = {
  kicker: 'The math',
  line1: '= MORE SOLAR INSTALLATIONS,',
  line2: 'CCTV INSTALLATIONS &',
  line3: 'OTHER ELECTRICAL SERVICES.',
  body: 'Traffic brings them in. Trust makes them believe. Conversion puts them on your calendar. That’s the whole formula — and it’s all in this build.',
  cta: 'Approve the proposal',
  note: 'POWERGROWTHZ AGENCY × AAO Engineering',
};
