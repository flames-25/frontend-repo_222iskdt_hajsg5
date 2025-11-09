import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function About() {
  return (
    <section id="about" className="relative bg-[#07140e] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Mindset, Metode, Manajemen</h2>
          <p className="mt-4 text-slate-300">
            Kami memadukan 3 pilar utama untuk menghasilkan trader yang tangguh: mindset yang sehat,
            metode yang terukur, dan manajemen risiko yang disiplin. Materi dikemas praktis, dapat
            dieksekusi, dan relevan dengan dinamika market.
          </p>
          <ul className="mt-6 space-y-2 text-slate-300 text-sm">
            <li>• Framework analisa modern (structure, liquidity, order blocks)</li>
            <li>• Playbook entry yang jelas dengan checklist</li>
            <li>• Risk model adaptif untuk berbagai kondisi volatilitas</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/25 via-green-500/25 to-lime-400/25 blur-2xl rounded-3xl" aria-hidden />
          <div className="relative rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">7+</p>
                <p className="text-slate-300 text-xs">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15K</p>
                <p className="text-slate-300 text-xs">Member Terbina</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-slate-300 text-xs">Kepuasan Peserta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}
