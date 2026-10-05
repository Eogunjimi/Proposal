// ─────────────────────────────────────────────────────────────
//  App — the whole proposal is ONE page, assembled section by
//  section. Reorder, delete or add sections here.
//  Copy for every section lives in src/data/content.js
// ─────────────────────────────────────────────────────────────
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import WinningFormula from './sections/WinningFormula.jsx';
import FinalCTA from './sections/FinalCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-zinc-200 antialiased">
      <Navbar />
      <main>
        <Hero />           {/* headline + emoji bullets + laptop live-preview */}
        <WinningFormula /> {/* T.T.C. — each lever's HOW? opens its FULL system inline */}
        <FinalCTA />       {/* "= MORE SOLAR INSTALLATIONS …" + button */}
      </main>
      <Footer />
    </div>
  );
}
