import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          badge="Get In Touch"
          title="Let's Build Something."
          subtitle="Have a system worth building? Let's connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#101522] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white">
                Always open to backend, DevOps, and cloud engineering opportunities.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you want to discuss cloud architecture, collaborate on open-source tools, or talk technology, my inbox is always open.
              </p>

              <div className="p-4 bg-wood-900/60 border border-amber-900/40 rounded-2xl">
                <p className="font-hand text-xl text-amber-200">
                  "Good Ideas + Great People = Awesome Systems"
                </p>
              </div>
            </div>

            {/* Right Contact Quick Grid */}
            <div className="md:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://github.com/adityarg1947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#07090e] hover:bg-[#161c2c] border border-slate-800 rounded-2xl text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="block text-xs font-bold text-white font-heading">GitHub</span>
                      <span className="block text-[11px] text-slate-400">@adityarg1947</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#07090e] hover:bg-[#161c2c] border border-slate-800 rounded-2xl text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-sky-400" />
                    <div>
                      <span className="block text-xs font-bold text-white font-heading">LinkedIn</span>
                      <span className="block text-[11px] text-slate-400">Aditya Golhar</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:adityargolhar@example.com"
                  className="flex items-center justify-between p-4 bg-[#07090e] hover:bg-[#161c2c] border border-slate-800 rounded-2xl text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="block text-xs font-bold text-white font-heading">Email</span>
                      <span className="block text-[11px] text-slate-400">adityargolhar@example.com</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#hero"
                  className="flex items-center justify-between p-4 bg-[#07090e] hover:bg-[#161c2c] border border-slate-800 rounded-2xl text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-yellow-400" />
                    <div>
                      <span className="block text-xs font-bold text-white font-heading">Resume</span>
                      <span className="block text-[11px] text-slate-400">Available on request</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                </motion.a>
              </div>

              {/* Status Footer */}
              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Studio Dog Status</span>
                <span className="text-amber-300 font-medium">Sleeping Peacefully 💤</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
