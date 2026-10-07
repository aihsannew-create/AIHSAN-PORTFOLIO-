import { useState } from 'react';
import { Star, MessageSquareQuote, Info, Pause, Play, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  // Divide into two rows for dynamic infinite visual depth
  const firstRow = REVIEWS_DATA.slice(0, 8);
  const secondRow = REVIEWS_DATA.slice(8, 16);

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-14">
        {/* Section Header */}
        <ScrollReveal direction="down" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
                <MessageSquareQuote className="w-4 h-4 text-cyan-400" />
                <span>Project Feedback &amp; Showcase</span>
              </div>
              <h2 className="font-unbounded text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                What People <span className="font-editorial italic font-normal text-cyan-400">Say</span>
              </h2>
              <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
                Client feedback &amp; creative delivery standards
              </div>
              <p className="mt-2 text-base text-neutral-400 leading-relaxed font-outfit">
                Feedback models and reviews from digital catalogue implementations, luxury e-commerce storefronts, and interactive web projects.
              </p>
            </div>

            {/* Transparency Notice & Play/Pause */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-cyan-500/20 text-[11px] font-mono text-neutral-400">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Demo feedback showcase for portfolio illustration</span>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white hover:bg-white/[0.1] transition-colors"
                title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 ${isPaused ? '' : 'animate-marquee'}`}
          style={{ animationDuration: '45s' }}
        >
          {firstRow.concat(firstRow).map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[340px] sm:w-[380px] shrink-0 glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-editorial text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <div className="font-syne font-bold text-white text-sm">{rev.author}</div>
                  <div className="text-[11px] text-neutral-400">{rev.role} · {rev.company}</div>
                </div>
                <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/20 font-semibold">
                  {rev.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 ${isPaused ? '' : 'animate-marquee-reverse'}`}
          style={{ animationDuration: '48s' }}
        >
          {secondRow.concat(secondRow).map((rev, index) => (
            <div
              key={`${rev.id}-rev-${index}`}
              className="w-[340px] sm:w-[380px] shrink-0 glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-editorial text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <div className="font-syne font-bold text-white text-sm">{rev.author}</div>
                  <div className="text-[11px] text-neutral-400">{rev.role} · {rev.company}</div>
                </div>
                <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/20 font-semibold">
                  {rev.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
