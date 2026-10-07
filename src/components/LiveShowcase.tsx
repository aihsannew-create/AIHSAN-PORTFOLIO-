import { useState } from 'react';
import { ExternalLink, Copy, Check, Monitor, Tablet, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';
import { Project } from '../types';
import xolaraImg from '../assets/images/project_xolara_fashion_1791364751801.jpg';
import sasBahuImg from '../assets/images/project_sas_bahu_1791364765469.jpg';
import ScrollReveal, { LeftOpenRightCloseText } from './ScrollReveal';

interface LiveShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export default function LiveShowcase({ onSelectProject }: LiveShowcaseProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const liveProjects: (Project & { fullUrl: string })[] = [
    {
      id: 'xolara-premium',
      title: 'XOLARA PREMIUM',
      category: 'Fashion / E-commerce / Creative Web Design',
      description:
        'A high-fashion digital storefront redefining luxury retail with editorial lookbooks, fluid product transitions, tactile filtering, and high-conversion checkout architecture.',
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
      keyFeatures: [
        'Interactive couture lookbook gallery',
        'Dynamic product curation & bag state',
        'Editorial typography with dark luxury styling',
        'Zero layout shift on mobile viewports',
      ],
      deliverables: ['Full E-Commerce Design', 'Interactive Prototype', 'Frontend Engineering', 'Deployment & CI/CD'],
    },
    {
      id: 'sas-bahu-collection',
      title: 'SAS BAHU COLLECTION',
      category: 'Fashion / Creative Website / Digital Showroom',
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
      keyFeatures: [
        'Curated bridal & festive collection lookbooks',
        'High-fidelity embroidery & textile showcases',
        'Smooth scroll-synchronized storytelling',
        'Bespoke consultation booking workflow',
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
    <section id="live-showcase" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verified Live E-Commerce &amp; Catalogue Platforms</span>
              </div>
              <h2 className="font-unbounded text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                See My <span className="font-editorial italic font-normal text-cyan-400">Live Work</span> In Action
              </h2>
              <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
                Don’t just take my word for it — explore the websites I’ve designed and developed.
              </div>
            </div>

            {/* Device Mockup Toggle Controls */}
            <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl self-start md:self-end">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Desktop viewport frame"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Tablet viewport frame"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Mobile viewport frame"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {liveProjects.map((project, idx) => {
            return (
              <ScrollReveal key={project.id} direction="tilt" delay={idx * 160} duration={850}>
                <div
                  className="group glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl shadow-2xl"
                >
                  {/* Browser Frame Header */}
                  <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between gap-3 text-xs font-mono">
                    {/* Window dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Browser URL Bar */}
                    <div className="flex-1 max-w-md mx-2 px-3 py-1 bg-black/50 rounded-xl border border-white/[0.08] text-cyan-300 text-[11px] truncate flex items-center justify-between font-mono">
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

                    {/* Verified live tag */}
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 shrink-0 font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Live Website</span>
                    </div>
                  </div>

                  {/* Interactive Preview Canvas */}
                  <div
                    className={`p-4 md:p-6 bg-black/40 flex items-center justify-center transition-all duration-300 ${
                      deviceMode === 'mobile'
                        ? 'max-w-[340px] mx-auto'
                        : deviceMode === 'tablet'
                        ? 'max-w-[540px] mx-auto'
                        : 'w-full'
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl group/media">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/media:scale-105"
                      />

                      {/* Gradient Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                      {/* Quick Launch Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4">
                        <a
                          href={project.fullUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-transform active:scale-95"
                        >
                          <span>{project.buttonText}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl border border-white/20 transition-transform active:scale-95"
                        >
                          Inspect Specs
                        </button>
                      </div>

                      {/* Badge pinned inside image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 font-mono">
                        <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] text-cyan-300">
                          {project.stats?.[0]?.value || 'Production Build'}
                        </span>
                        <span className="bg-emerald-950/80 text-emerald-400 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/30 text-[11px] font-bold">
                          ✓ Clickable External Link
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details with Signature Italiana Title */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category metadata */}
                      <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono mb-2">
                        <span className="font-bebas text-lg tracking-wider text-cyan-300">{project.category}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-neutral-400">Production Web</span>
                      </div>

                      {/* Italian / High Fashion Display Font */}
                      <h3 className="font-italiana text-3xl sm:text-4xl font-normal text-white mb-3 tracking-wide">
                        {project.title}
                      </h3>

                      <p className="text-sm text-neutral-300 leading-relaxed mb-5 font-outfit">
                        {project.description}
                      </p>

                      {/* Technologies list */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-mono mb-6">
                        {project.technologies.map((tech, i) => (
                          <span key={tech} className="flex items-center gap-2">
                            <span className="text-cyan-200">{tech}</span>
                            {i < project.technologies.length - 1 && (
                              <span aria-hidden="true" className="text-neutral-600">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                      <a
                        href={project.fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95 group/btn"
                      >
                        <span>{project.buttonText}</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-mono text-cyan-400 hover:text-white transition-colors flex items-center gap-1.5 p-2"
                      >
                        <span>Architecture &amp; Specs</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Live Reliability Callout */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Both live websites are fully deployed and interactive. Click <strong className="text-white">&ldquo;View Live Project →&rdquo;</strong> to open in a new tab.
            </span>
          </div>
          <a
            href="mailto:aihsannew@gmail.com"
            className="text-cyan-400 hover:underline shrink-0 font-mono font-semibold"
          >
            Inquire about custom catalogues &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
