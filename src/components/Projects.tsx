import { useState } from 'react';
import { ExternalLink, Sparkles, Check, Copy } from 'lucide-react';
import { Project } from '../types';
import xolaraImg from '../assets/images/project_xolara_fashion_1791364751801.jpg';
import sasBahuImg from '../assets/images/project_sas_bahu_1791364765469.jpg';
import ScrollReveal from './ScrollReveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const featuredProjects: (Project & { fullUrl: string })[] = [
    {
      id: 'xolara-premium',
      title: 'XOLARA PREMIUM',
      category: 'Fashion / E-commerce / Creative Web Design',
      description:
        'A high-fashion digital storefront redefining luxury retail with editorial layouts, silky micro-interactions, responsive lookbook curation, and high-conversion checkout architecture.',
      longDescription:
        'Xolara Premium merges high-fashion editorial aesthetics with e-commerce conversion mechanics. Built from the ground up to eliminate generic template tropes, it features fluid product transitions, tactile filtering, and cinematic lookbook storytelling tailored for luxury apparel lovers.',
      technologies: ['React', 'E-commerce Architecture', 'Tailwind CSS', 'Motion Physics', 'Responsive UI'],
      image: xolaraImg,
      fullUrl: 'https://xolarapremium.floot.app',
      liveUrl: 'https://xolarapremium.floot.app',
      buttonText: 'View Live Project →',
      featured: true,
      isVerifiedLive: true,
      stats: [
        { label: 'Domain', value: 'High Fashion E-Commerce' },
        { label: 'Architecture', value: 'Headless React SPA' },
        { label: 'Performance', value: 'Ultra Fast Render' },
      ],
      deliverables: ['Full E-Commerce Design', 'Interactive Prototype', 'Frontend Engineering', 'Deployment & CI/CD'],
    },
    {
      id: 'sas-bahu-collection',
      title: 'SAS BAHU COLLECTION',
      category: 'Fashion / Creative Website',
      description:
        'A royal ethnic bridal couture digital showroom presenting bespoke seasonal collections with rich textile zoom showcases, fluid gallery transitions, and cultural brand storytelling.',
      longDescription:
        'Sas Bahu Collection honors artisanal bridal attire through an opulent digital gallery. Designed to evoke royal prestige, the platform implements tactile textile inspection, layered navigation, and immersive brand presentation across all devices.',
      technologies: ['React', 'Creative Web Design', 'Interactive Showroom', 'Editorial Motion', 'Tailwind CSS'],
      image: sasBahuImg,
      fullUrl: 'https://sas-bahu-colaction.ai.studio',
      liveUrl: 'https://sas-bahu-colaction.ai.studio',
      buttonText: 'View Live Project →',
      featured: true,
      isVerifiedLive: true,
      stats: [
        { label: 'Domain', value: 'Bridal Couture & Ethnic Wear' },
        { label: 'Experience', value: 'Digital Showroom' },
        { label: 'Aesthetic', value: 'Opulent Editorial' },
      ],
      deliverables: ['Visual Art Direction', 'Custom UI/UX System', 'Full Frontend Implementation', 'Mobile Optimization'],
    },
  ];

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>See My Work In Action</span>
            </div>
            <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="font-editorial italic font-normal text-cyan-400">Live Projects</span>
            </h2>
            <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
              Don’t just take my word for it — explore the websites I’ve designed and developed.
            </div>
          </div>
        </ScrollReveal>

        {/* Live Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 150}>
              <div className="glass-panel rounded-3xl overflow-hidden border border-white/[0.1] hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl shadow-xl hover:shadow-cyan-500/10">
                {/* Browser Frame Header */}
                <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex-1 max-w-sm mx-2 px-3 py-1 bg-black/50 rounded-xl border border-white/[0.08] text-cyan-300 text-[11px] truncate flex items-center justify-between font-mono">
                    <span className="truncate">{project.fullUrl}</span>
                    <button
                      onClick={() => handleCopy(project.fullUrl, project.id)}
                      className="ml-2 text-neutral-400 hover:text-white p-0.5 rounded transition-colors"
                      title="Copy URL"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Media Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Quick Click Overlay */}
                  <a
                    href={project.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]"
                  >
                    <span className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-xl flex items-center gap-2">
                      <span>{project.buttonText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                      <span className="font-bebas text-lg tracking-wider text-cyan-300">
                        {project.category}
                      </span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="text-neutral-400">Verified Web</span>
                    </div>

                    <h3 className="font-italiana text-3xl sm:text-4xl text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-5 font-outfit">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <a
                      href={project.fullUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95"
                    >
                      <span>{project.buttonText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-white transition-colors p-2"
                    >
                      Case Study Specs &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
