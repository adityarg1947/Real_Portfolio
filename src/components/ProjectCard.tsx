import { Project } from '../types/portfolio';
import { ArrowRight, Navigation, ShoppingBag, Film, BookOpen, CheckCheck, Coffee, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'navigation': return <Navigation className="w-4 h-4 text-sky-400" />;
      case 'shopping-bag': return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      case 'film': return <Film className="w-4 h-4 text-rose-400" />;
      case 'book-open': return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'check-check': return <CheckCheck className="w-4 h-4 text-yellow-400" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-amber-300" />;
      default: return <ImageIcon className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <article
      onClick={() => onSelect(project)}
      className="bg-[#101522] border border-slate-700/80 rounded-2xl overflow-hidden shadow-card-depth flex flex-col justify-between hover:border-amber-400/50 transition-all hover:-translate-y-1.5 cursor-pointer group"
    >
      <div className="p-5">
        {/* Card Visual Header / Gradient Box */}
        <div className={`h-32 rounded-xl bg-gradient-to-tr ${project.gradient} border border-slate-700/40 p-3.5 mb-4 flex flex-col justify-between relative overflow-hidden`}>
          <div className="flex justify-between items-start z-10">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              project.status === 'Completed'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {project.status}
            </span>
            <div className="p-1.5 bg-black/40 rounded-lg backdrop-blur-sm border border-white/10">
              {getIcon(project.iconName)}
            </div>
          </div>
          <p className="text-xs font-mono text-white/90 font-medium z-10">{project.category}</p>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs text-slate-400">
        <span className="font-mono text-[11px] text-slate-400">{project.category}</span>
        <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
