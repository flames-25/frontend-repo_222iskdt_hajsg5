import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ children, href = '#' }) => (
    <a
      href={href}
      className="text-sm md:text-base text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 via-green-500 to-lime-400 text-black shadow-lg shadow-emerald-500/30">
            <Rocket size={18} />
          </span>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Horizon Fx Indonesia</p>
            <p className="text-xs text-slate-400 -mt-0.5">Market Analysis & Trading Education</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Layanan</NavLink>
          <NavLink href="#about">Tentang</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 text-black px-4 py-2 text-sm font-medium hover:from-emerald-300 hover:to-lime-200 transition-colors"
          >
            Mulai Sekarang
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink href="#services">Layanan</NavLink>
            <NavLink href="#about">Tentang</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 text-black px-4 py-2 text-sm font-medium"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
