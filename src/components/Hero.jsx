import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#07070b]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#07070b]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Horizon Fx Indonesia
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            Layanan analisa market dan edukasi trading paling komprehensif di Indonesia. 
            Didesain untuk trader modern yang ingin konsisten, disiplin, dan bertumbuh.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-[0_0_50px_-12px_rgba(168,85,247,0.8)] hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.8)] transition-shadow"
            >
              Jelajahi Layanan
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:border-white/40"
            >
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
