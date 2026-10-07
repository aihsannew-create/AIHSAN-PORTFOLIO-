import { X, ExternalLink, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0c12] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl my-auto text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white text-lg">
              {project.title}
            </span>
            <span className="text-xs font-mono text-blue-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Main Visual Image Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 font-mono">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Verified
                </span>
              )}
            </div>
          </div>

          {/* Overview & Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-blue-400 mb-2">
              Overview &amp; Concept
            </h4>
            <p className="text-neutral-300 text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features & Architecture Grid */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-blue-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Engineered Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-start gap-2.5 text-xs text-neutral-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-blue-400 mb-2 flex items-center gap-2">
              <Code className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats if available */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              {project.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] text-neutral-500 font-mono">{s.label}</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white/[0.03] border-t border-white/[0.08] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            Close Details
          </button>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>{project.buttonText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs font-mono text-neutral-500">
              Experimental Studio Build
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
