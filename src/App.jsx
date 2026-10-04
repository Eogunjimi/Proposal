// ─────────────────────────────────────────────────────────────
//  App — the whole proposal is ONE page, assembled section by
//  section. Reorder, delete or add sections here.
//  Copy for every section lives in src/data/content.js
// ─────────────────────────────────────────────────────────────
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import WinningFormula from './sections/WinningFormula.jsx';
import TrafficSection from './sections/TrafficSection.jsx';
import TrustSection from './sections/TrustSection.jsx';
import ConversionSection from './sections/ConversionSection.jsx';
import FinalCTA from './sections/FinalCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-zinc-200 antialiased">
      <Navbar />
      <main>
        <Hero />            {/* headline + 3 promises + "=" result line */}
        <WinningFormula />  {/* T.T.C. — 3 lever boxes, each with a HOW? dropdown */}
        <TrafficSection />  {/* LEVER 01 — SEO/AEO · Facebook Ads · Local Service Ads */}
        <TrustSection />    {/* LEVER 02 — win them in 5 seconds */}
        <ConversionSection /> {/* LEVER 03 — visitors → booked estimates */}
        <FinalCTA />        {/* "= MORE SOLAR INSTALLATIONS …" + button */}
      </main>
      <Footer />
    </div>
  );
}
