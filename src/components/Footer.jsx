import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h4 className="text-white text-xl font-semibold">Horizon Fx Indonesia</h4>
          <p className="text-slate-400 mt-2 max-w-md">
            Partner Anda untuk analisa market profesional dan edukasi trading yang relevan dengan kondisi market saat ini.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium"
          >
            Gabung Komunitas
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Instagram size={18} />
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Youtube size={18} />
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Horizon Fx Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
