import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { MINDSET_PRINCIPLES } from '../data/portfolioData';
import { Hammer, Search, Cpu, TrendingUp, BookOpen } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'hammer': return <Hammer className="w-4 h-4 text-amber-400" />;
      case 'search': return <Search className="w-4 h-4 text-sky-400" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'trending-up': return <TrendingUp className="w-4 h-4 text-purple-400" />;
      default: return <BookOpen className="w-4 h-4 text-rose-400" />;
    }
  };

  const getNumberColor = (num: number) => {
    switch (num) {
      case 1: return 'bg-amber-500/20 text-amber-400';
      case 2: return 'bg-sky-500/20 text-sky-400';
      case 3: return 'bg-emerald-500/20 text-emerald-400';
      case 4: return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-rose-500/20 text-rose-400';
    }
  };

  return (
    <section id="mindset" className="py-20 bg-[#0b0f17]/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          badge="Philosophy"
          title="Engineering Mindset"
          subtitle="Principles that guide how I learn and build."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {MINDSET_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#101522] border border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center text-sm ${getNumberColor(principle.number)}`}>
                    {principle.number}
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    {getIcon(principle.icon)}
                  </div>
                </div>

                <h4 className="text-base font-bold text-white font-heading mb-2">{principle.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{principle.explanation}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Principle #0{principle.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
