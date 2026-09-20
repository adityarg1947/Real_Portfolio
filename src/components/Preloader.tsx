import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Core Systems...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }

        if (prev === 25) setLoadingText('Loading Cloud Infrastructure...');
        if (prev === 60) setLoadingText('Fetching Portfolio Projects...');
        if (prev === 85) setLoadingText('Setting Up Developer Studio...');

        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] bg-[#07090e] flex flex-col items-center justify-center p-4 selection:bg-amber-500"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-sm w-full text-center space-y-6">
        {/* Brand Logo Badge with Glowing Pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 flex items-center justify-center font-heading font-extrabold text-[#07090e] text-2xl shadow-2xl shadow-amber-500/40 mx-auto">
            AG
          </div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border-2 border-amber-400 pointer-events-none"
          />
        </motion.div>

        {/* Title & Tagline */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold font-heading text-white tracking-wide">
            ADITYA GOLHAR
          </h2>
          <p className="text-xs font-mono text-amber-400">
            Cloud Engineer | DevOps | Backend Developer
          </p>
        </div>

        {/* Progress Bar & Text */}
        <div className="space-y-2 pt-2">
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-sky-400" />
              {loadingText}
            </span>
            <span className="font-bold text-amber-300">{progress}%</span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="pt-4 flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Surat, India • Code to Cloud</span>
        </div>
      </div>
    </motion.div>
  );
};
