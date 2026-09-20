import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/portfolio';
import { X, Github, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#101522] border border-slate-700/80 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-slate-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Visual */}
            <div className={`h-40 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-6 bg-gradient-to-tr ${project.gradient} mb-6 flex flex-col justify-end relative`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  project.status === 'Completed'
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/30 text-amber-300 border border-amber-500/40'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs font-mono text-white/80">{project.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {project.title}
              </h3>
            </div>

            {/* Content Body */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold mb-1">Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-amber-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Verified Project from Aditya Golhar's GitHub repository. Built with clean software standards.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-3 justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>View Source</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs shadow-lg shadow-amber-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
