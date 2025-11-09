import { motion } from 'framer-motion';
import { LineChart, Shield, GraduationCap, BarChart3, Clock4 } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Analisa Market Harian',
    desc:
      'Daily outlook multi-timeframe: struktur market, liquidity map, dan area probabilitas tinggi.',
  },
  {
    icon: BarChart3,
    title: 'Signal & Execution Plan',
    desc:
      'Rencana eksekusi terukur lengkap dengan entry model, invalidation, dan target yang jelas.',
  },
  {
    icon: Shield,
    title: 'Risk Management System',
    desc:
      'Model sizing adaptif, drawdown rules, dan journaling template untuk menjaga konsistensi.',
  },
  {
    icon: GraduationCap,
    title: 'Program Edukasi Premium',
    desc:
      'Kurikulum berjenjang (Basic-Advance) + live session mingguan dan evaluasi performa.',
  },
  {
    icon: Clock4,
    title: 'Live Market Session',
    desc:
      'Sesi live saat market aktif: diskusi context, plan, dan review hasil eksekusi.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#06130d] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Unggulan</h2>
          <p className="mt-3 text-slate-300">
            Semua yang Anda butuhkan untuk membaca market dengan jelas dan eksekusi yang disiplin.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/5 to-transparent p-6 hover:border-emerald-300/40 hover:from-emerald-400/10"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-400/15 text-emerald-300 flex items-center justify-center">
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
