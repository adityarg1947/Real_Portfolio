import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { Plus } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          badge="Portfolio Works"
          title="Featured Projects"
          subtitle="Real projects. Real learning. Real progress."
        />

        {/* Project Cards Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}

          {/* More Projects Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: PROJECTS_DATA.length * 0.08 }}
            className="bg-gradient-to-b from-[#101522] to-[#0b0f17] border-2 border-dashed border-slate-700/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-amber-400 transition-colors"
          >
            <div className="h-14 w-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
              <Plus className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">More Projects Coming Soon...</h3>
            <p className="text-xs text-slate-400 mb-4 max-w-xs">
              Exploring, learning, and building new cloud-native applications.
            </p>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
              Stay Tuned
            </span>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
