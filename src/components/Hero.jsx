import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#04110b]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays in emerald theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#04110b]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-64 blur-2xl bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs">
            Trading • Edukasi • Analisa Market
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Horizon Fx Indonesia
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            Layanan analisa market dan edukasi trading modern dengan fokus risk management dan konsistensi hasil.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 text-black px-6 py-3 font-medium shadow-[0_0_50px_-12px_rgba(16,185,129,0.8)] hover:shadow-[0_0_60px_-10px_rgba(163,230,53,0.8)] transition-shadow"
            >
              Jelajahi Layanan
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 text-white px-6 py-3 font-medium hover:border-emerald-300"
            >
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
