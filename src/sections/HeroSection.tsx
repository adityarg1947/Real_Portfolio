import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, PlayCircle, Cloud, Terminal, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import portraitImg from '../assets/aditya_portrait.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[95vh] flex items-center"
    >
      {/* Animated Ambient Warm Glow Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 z-10 space-y-6 text-center lg:text-left"
          >
            {/* Location & Status Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#101522]/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {HERO_DATA.location}
              </span>
              <span className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {HERO_DATA.availability}
              </span>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-2">
              <p className="text-amber-400 font-heading text-xs uppercase tracking-widest font-semibold">
                {HERO_DATA.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Hey, I'm <span className="text-amber-400">{HERO_DATA.name}</span>.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-300/90 font-heading pt-1">
                {HERO_DATA.role}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {HERO_DATA.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="tactile-btn inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#07090e] font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 text-sm tracking-wide"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#journey"
                className="tactile-btn inline-flex items-center gap-2 bg-[#161c2c]/90 hover:bg-slate-700/90 border border-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm backdrop-blur-sm"
              >
                <PlayCircle className="w-4 h-4 text-amber-400" />
                <span>My Journey</span>
              </motion.a>
            </div>

            {/* Handwritten Quote Signature */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <div className="h-0.5 w-8 bg-amber-500/40"></div>
              <p className="font-hand text-2xl text-amber-200 tracking-wide">
                {HERO_DATA.quote}
              </p>
            </div>
          </motion.div>

          {/* Hero Right Column — Big Animated Circular Portrait with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative group">
              {/* Outer Animated Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity"
              />

              {/* Big Circle Image Container */}
              <motion.div
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full p-2 bg-[#101522] border-4 border-slate-700/80 shadow-[0_0_60px_rgba(245,158,11,0.25)] overflow-hidden"
              >
                <img
                  src={portraitImg}
                  alt="Aditya Golhar"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Floating Badge 1: Top-Right (Cloud & Infra) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 bg-[#101522]/95 border border-amber-500/40 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold text-white z-10"
              >
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">Specialization</span>
                  <span className="block text-amber-300 font-heading">Cloud & DevOps</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom-Left (Backend Engineering) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-4 bg-[#101522]/95 border border-sky-500/40 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold text-white z-10"
              >
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">Backend Systems</span>
                  <span className="block text-sky-300 font-heading">APIs & Linux</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom-Right (GTU Engineer) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 -right-6 bg-[#101522]/95 border border-emerald-500/40 rounded-2xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-emerald-300 z-10"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[11px]">B.E. Computer Science</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
