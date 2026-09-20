import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Chalkboard } from '../components/Chalkboard';
import { ABOUT_DATA } from '../data/portfolioData';
import {
  MapPin,
  Award,
  GraduationCap,
  Zap,
  Code2,
  BookOpen,
  Users,
  Compass,
  Sparkles,
  Plane,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'hobbies' | 'routine'>('story');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'map-pin': return <MapPin className="w-5 h-5" />;
      case 'award': return <Award className="w-5 h-5" />;
      case 'graduation-cap': return <GraduationCap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const traitIcons = [
    <Code2 className="w-5 h-5 text-amber-400" key="1" />,
    <BookOpen className="w-5 h-5 text-sky-400" key="2" />,
    <Users className="w-5 h-5 text-emerald-400" key="3" />,
    <Compass className="w-5 h-5 text-purple-400" key="4" />,
  ];

  return (
    <section id="about" className="py-20 bg-[#0b0f17]/80 border-t border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number={ABOUT_DATA.sectionNumber}
          badge="Personal Background"
          title={ABOUT_DATA.title}
          subtitle={ABOUT_DATA.subtitle}
        />

        {/* Animated Highlight Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 bg-[#101522] border border-slate-800 rounded-2xl text-center shadow-lg hover:border-amber-500/40 transition-colors"
          >
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">2019</span>
            <span className="text-xs text-slate-400 font-medium">Started Coding</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 bg-[#101522] border border-slate-800 rounded-2xl text-center shadow-lg hover:border-sky-500/40 transition-colors"
          >
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-sky-400">24+</span>
            <span className="text-xs text-slate-400 font-medium">GitHub Repos</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 bg-[#101522] border border-slate-800 rounded-2xl text-center shadow-lg hover:border-emerald-500/40 transition-colors"
          >
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">18+</span>
            <span className="text-xs text-slate-400 font-medium">Tech Tools</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 bg-[#101522] border border-slate-800 rounded-2xl text-center shadow-lg hover:border-purple-500/40 transition-colors"
          >
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">100%</span>
            <span className="text-xs text-slate-400 font-medium">Passion & Curiosity</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Story & Tab Switcher */}
          <div className="lg:col-span-7 bg-[#101522]/90 border border-slate-700/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Interactive Story Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-3">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'story'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  📖 My Story
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'values'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚡ Working Style
                </button>
                <button
                  onClick={() => setActiveTab('hobbies')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'hobbies'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🎌 Beyond Code
                </button>
                <button
                  onClick={() => setActiveTab('routine')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'routine'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ☕ Daily Routine
                </button>
              </div>

              {/* Tab Content Display */}
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-300 text-base leading-relaxed">
                      {ABOUT_DATA.bio}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      My journey is driven by an obsessive curiosity for how systems operate under the hood. Whether it's crafting high-performance REST APIs, configuring Docker containers, or provisioning cloud infrastructure with Terraform and AWS, I love solving real technical problems.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {ABOUT_DATA.traits.map((trait, idx) => (
                      <div key={trait.title} className="p-3.5 bg-[#07090e] border border-slate-800 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          {traitIcons[idx]}
                          <h5 className="text-xs font-bold text-white font-heading">{trait.title}</h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{trait.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'hobbies' && (
                  <motion.div
                    key="hobbies"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="p-3.5 bg-[#07090e] border border-slate-800 rounded-xl flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-white font-heading">Anime & Visual Storytelling</h5>
                        <p className="text-xs text-slate-400">Big fan of inspiring anime series, world-building narrative arcs, and creative character design.</p>
                      </div>
                    </div>
                    <div className="p-3.5 bg-[#07090e] border border-slate-800 rounded-xl flex items-start gap-3">
                      <Plane className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-white font-heading">Dream Goal: Travel to Japan ⛩️</h5>
                        <p className="text-xs text-slate-400">Excited to explore Tokyo, Akihabara, Kyoto shrines, and experience authentic culture & technology.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'routine' && (
                  <motion.div
                    key="routine"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2.5 font-mono text-xs"
                  >
                    <div className="p-3 bg-[#07090e] border border-slate-800 rounded-xl flex items-center justify-between">
                      <span className="text-slate-300">01. MORNING</span>
                      <span className="text-amber-400">Coffee ☕ + Reviewing Code & Commits</span>
                    </div>
                    <div className="p-3 bg-[#07090e] border border-slate-800 rounded-xl flex items-center justify-between">
                      <span className="text-slate-300">02. AFTERNOON</span>
                      <span className="text-sky-400">Building Backend Systems & Cloud Labs</span>
                    </div>
                    <div className="p-3 bg-[#07090e] border border-slate-800 rounded-xl flex items-center justify-between">
                      <span className="text-slate-300">03. EVENING</span>
                      <span className="text-emerald-400">Reading Linux & System Specs / Anime</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Fact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800">
                {ABOUT_DATA.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start gap-3.5 p-3.5 bg-[#0b0f17]/80 border border-slate-800 rounded-xl hover:border-amber-500/40 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${fact.bg} ${fact.color}`}>
                      {getIcon(fact.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-400 font-medium">{fact.label}</h4>
                      <p className="text-sm font-semibold text-white">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Whimsical Diorama Badge */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="font-hand text-2xl text-amber-300">
                "Same Guy... Bigger Dreams..."
              </span>
              <span className="text-xs text-slate-500 font-mono">EST. 2019 → INFINITY</span>
            </div>
          </div>

          {/* Right Column: Interactive Chalkboard Widget */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Chalkboard items={ABOUT_DATA.chalkboardItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
