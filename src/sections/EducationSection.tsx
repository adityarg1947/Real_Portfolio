import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0b0f17]/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="Academic Record"
          title="Education"
          subtitle="My academic background."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-[#101522] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    {index === 0 ? <Award className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900 border border-slate-700 text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-300 mb-3">
                  {item.institution} • {item.location}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">Gujarat Technological University</span>
                <span className="font-hand text-amber-300 text-lg">"Academic Base"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
