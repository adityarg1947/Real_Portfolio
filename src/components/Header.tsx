import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Toolkit', href: '#toolkit', id: 'toolkit' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Cloud', href: '#cloud', id: 'cloud' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'journey', 'toolkit', 'projects', 'cloud', 'contact']);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto max-w-5xl w-full bg-[#0b0f17]/90 backdrop-blur-md border border-slate-700/60 rounded-full py-2.5 px-5 flex items-center justify-between shadow-2xl shadow-black/80">
        {/* Brand Logo Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 flex items-center justify-center font-heading font-extrabold text-[#07090e] text-base shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
            AG
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400">Portfolio</span>
            <span className="block text-sm font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
              Aditya Golhar
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-xs md:text-sm font-medium text-slate-300">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-slate-800/80 font-semibold'
                      : 'hover:text-amber-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action & Motto */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-block font-hand text-amber-300 text-lg tracking-wide transform -rotate-2">
            "Good Code Good Life"
          </span>
          <a
            href="#contact"
            className="tactile-btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#07090e] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-md inline-flex items-center gap-1"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[#0b0f17]/95 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black text-xs">
                AG
              </div>
              <span className="font-heading font-bold text-white text-sm">Aditya Golhar</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-2 mb-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-hand text-amber-300 text-base">"Good Code Good Life"</span>
            <span>Surat, India</span>
          </div>
        </div>
      )}
    </header>
  );
};
