import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TechTile } from '../components/TechTile';
import { TOOLKIT_ITEMS } from '../data/portfolioData';
import { Flame } from 'lucide-react';

export const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit" className="py-20 bg-[#0b0f17]/70 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            number="03"
            badge="Capabilities"
            title="My Toolkit"
            subtitle="Technologies I work with, build upon, and explore."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-wood-900 border-2 border-wood-800 rounded-xl px-5 py-2.5 shadow-md flex items-center gap-3 shrink-0 self-start md:self-auto mb-12"
          >
            <span className="text-2xl">🤖</span>
            <p className="font-hand text-xl text-amber-200">
              "Tools don't make a developer. Curiosity does."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Tiles Grid (18 items) with Stagger Animation */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {TOOLKIT_ITEMS.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <TechTile item={tech} />
              </motion.div>
            ))}
          </div>

          {/* Dev Cycle Stacked Wooden Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-wood-900 border border-amber-900/60 rounded-3xl p-6 shadow-xl flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-xs uppercase font-mono text-amber-400 tracking-wider">
                  Dev Cycle Blocks
                </span>
              </div>
              <div className="space-y-2.5 text-center font-mono font-bold text-sm">
                <div className="p-2.5 rounded-xl bg-wood-800 border border-amber-800/40 text-amber-200 shadow-sm">
                  01. PLAN
                </div>
                <div className="p-2.5 rounded-xl bg-wood-800 border border-amber-800/40 text-amber-200 shadow-sm">
                  02. CODE
                </div>
                <div className="p-2.5 rounded-xl bg-wood-800 border border-amber-800/40 text-amber-200 shadow-sm">
                  03. BUILD
                </div>
                <div className="p-2.5 rounded-xl bg-wood-800 border border-amber-800/40 text-amber-200 shadow-sm">
                  04. DEPLOY
                </div>
                <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-sm">
                  05. REPEAT 🔄
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-950 flex items-center justify-between text-xs text-amber-300/70">
              <span>Candlelit Focus</span>
              <span className="text-base">🕯️</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
