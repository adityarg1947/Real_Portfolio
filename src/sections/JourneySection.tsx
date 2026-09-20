import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Terminal, Layout, Database, Cpu, Box, Cloud, Compass } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'layout': return <Layout className="w-5 h-5 text-sky-400" />;
      case 'database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-yellow-400" />;
      case 'box': return <Box className="w-5 h-5 text-blue-400" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-amber-400" />;
      default: return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="Milestones"
          title="My Journey"
          subtitle="A path of curiosity, learning, and continuous building."
          handwrittenQuote='"Still Learning... Still Building..."'
          align="center"
        />

        {/* Desktop 7-Step Horizontal Diorama Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-stretch relative">
          {JOURNEY_MILESTONES.map((item, index) => {
            const isLast = index === JOURNEY_MILESTONES.length - 1;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-4 flex flex-col justify-between text-center transition-all shadow-lg ${
                  isLast
                    ? 'bg-gradient-to-b from-amber-500/20 to-[#101522] border border-amber-500/60 shadow-amber-500/10'
                    : 'bg-[#101522] border border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <div
                    className={`h-10 w-10 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                      isLast ? 'bg-amber-400 text-black font-bold' : 'bg-slate-900 border border-slate-700'
                    }`}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <span
                    className={`text-xs font-bold font-mono block mb-1 ${
                      isLast ? 'text-amber-300' : 'text-amber-400'
                    }`}
                  >
                    {item.yearOrCategory}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1 font-heading">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">{item.description}</p>
                </div>

                <div
                  className={`mt-4 pt-2 border-t text-[10px] font-mono uppercase tracking-wider ${
                    isLast
                      ? 'border-amber-500/30 text-amber-400 font-bold'
                      : 'border-slate-800/80 text-slate-500'
                  }`}
                >
                  {item.badgeLabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
