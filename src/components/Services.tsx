import { ShoppingBag, Layers, Cpu, Smartphone, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const services = [
    {
      number: '01',
      title: 'Digital Product Catalogues',
      desc: 'Bespoke wholesale and retail digital lookbooks with instant multi-category filtering, sub-200ms search, and direct WhatsApp order flows.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tag: 'Catalogue Specialist',
    },
    {
      number: '02',
      title: 'Modern E-Commerce Stores',
      desc: 'High-conversion digital storefronts built with smooth shopping carts, dynamic pricing, luxury aesthetics, and frictionless mobile checkouts.',
      icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
      tag: 'Conversion Focused',
    },
    {
      number: '03',
      title: 'AI Web Development',
      desc: 'Leveraging cutting-edge AI engineering workflows to build production-grade, cleanly structured web applications at 3x faster turnaround.',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tag: 'Rapid Velocity',
    },
    {
      number: '04',
      title: 'Responsive & Interactive UI',
      desc: 'Fluid layouts, 60fps micro-interactions, and flawless ergonomics across smartphones, tablets, and ultra-wide studio displays.',
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      tag: 'Mobile First',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="down">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                Services &amp; Specialization
              </div>
              <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                What I <span className="font-editorial italic font-normal text-cyan-400">Build</span>
              </h2>
              <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
                Bespoke solutions engineered to elevate your brand
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="px-6 py-3 bg-white/[0.06] hover:bg-blue-600 text-white font-medium text-xs sm:text-sm rounded-xl border border-white/[0.1] hover:border-blue-500 transition-all flex items-center gap-2 self-start md:self-end cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* 4 Focused Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <ScrollReveal key={item.number} direction="up" delay={index * 100}>
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-cyan-400/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                      {item.icon}
                    </div>
                    <span className="font-bebas text-3xl text-cyan-400 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-outfit mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                  <span>{item.tag}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
