import { motion } from 'framer-motion';
import { LineChart, Shield, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Analisa Market Harian',
    desc:
      'Analisa multi-timeframe dengan fokus pada struktur market, order flow, dan level berprobabilitas tinggi.',
  },
  {
    icon: Shield,
    title: 'Risk Management & Journal',
    desc:
      'Framework manajemen risiko, position sizing, dan journaling untuk menjaga konsistensi performa.',
  },
  {
    icon: GraduationCap,
    title: 'Edukasi Trading Premium',
    desc:
      'Kurikulum step-by-step dari basic hingga advance dengan live session dan review chart mingguan.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0b12] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Unggulan</h2>
          <p className="mt-3 text-slate-300">
            Paket lengkap untuk membantu Anda membaca market dengan jelas, mengeksekusi dengan disiplin,
            dan meningkatkan skill dari waktu ke waktu.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 hover:from-white/10" 
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <s.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
