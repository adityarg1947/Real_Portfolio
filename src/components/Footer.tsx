import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090e] border-t border-slate-800/80 py-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-bold text-[#07090e] text-xs shadow-md">
            AG
          </div>
          <div>
            <span className="block text-sm font-bold text-white font-heading">ADITYA GOLHAR</span>
            <span className="block text-[11px] text-slate-400">Cloud Engineer | DevOps | Backend Developer</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
          <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
          <a href="#cloud" className="hover:text-amber-400 transition-colors">Cloud</a>
          <a href="#journey" className="hover:text-amber-400 transition-colors">Journey</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Philosophy & Location */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-slate-300 italic font-sans text-xs">"Building systems for the world beyond the screen."</p>
          <p className="text-[11px] text-slate-500 flex items-center justify-center md:justify-end gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            Surat, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
};
