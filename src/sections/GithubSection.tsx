import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { useGithubData } from '../hooks/useGithubData';
import { Github, ArrowUpRight, GitCommit, Users, BookOpen } from 'lucide-react';

export const GithubSection: React.FC = () => {
  const { data, isLive, loading } = useGithubData('adityarg1947');

  return (
    <section id="github" className="py-20 bg-[#0b0f17]/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          badge="Source Control"
          title="GitHub"
          subtitle="The code behind the work."
          handwrittenQuote='"Consistent Progress."'
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#101522] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* User Meta Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-heading font-extrabold text-black text-xl shadow-lg shrink-0 overflow-hidden">
                  {data.avatarUrl ? (
                    <img src={data.avatarUrl} alt={data.name} className="w-full h-full object-cover" />
                  ) : (
                    'AG'
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{data.name}</h3>
                  <p className="text-xs font-mono text-amber-400">@{data.username}</p>
                  <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {isLive ? 'Live API Synced' : 'Verified Stats'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {data.bio}
              </p>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={data.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/20"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Metrics & Heatmap Simulation */}
            <div className="lg:col-span-7 space-y-6">
              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 bg-[#07090e] border border-slate-800 rounded-2xl">
                  <BookOpen className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="block text-2xl font-bold text-white font-mono">{loading ? '...' : data.publicRepos}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Public Repos</span>
                </div>

                <div className="p-4 bg-[#07090e] border border-slate-800 rounded-2xl">
                  <Users className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                  <span className="block text-2xl font-bold text-white font-mono">{loading ? '...' : data.followers}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Followers</span>
                </div>

                <div className="p-4 bg-[#07090e] border border-slate-800 rounded-2xl">
                  <GitCommit className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="block text-2xl font-bold text-white font-mono">{loading ? '...' : data.following}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Following</span>
                </div>
              </div>

              {/* Contribution Map Visual Representation */}
              <div className="bg-[#07090e] border border-slate-800 rounded-2xl p-4">
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-2">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
                <div className="grid grid-cols-12 gap-1.5">
                  <div className="h-3 rounded bg-emerald-950"></div>
                  <div className="h-3 rounded bg-emerald-500"></div>
                  <div className="h-3 rounded bg-emerald-400"></div>
                  <div className="h-3 rounded bg-emerald-900"></div>
                  <div className="h-3 rounded bg-emerald-500"></div>
                  <div className="h-3 rounded bg-emerald-400"></div>
                  <div className="h-3 rounded bg-emerald-600"></div>
                  <div className="h-3 rounded bg-emerald-300"></div>
                  <div className="h-3 rounded bg-emerald-500"></div>
                  <div className="h-3 rounded bg-emerald-400"></div>
                  <div className="h-3 rounded bg-emerald-700"></div>
                  <div className="h-3 rounded bg-emerald-400"></div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Recent Activity Log</span>
                  <span className="text-emerald-400">Active Committer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
