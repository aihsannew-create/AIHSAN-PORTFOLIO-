import { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Check, 
  MessageCircle, 
  Monitor, 
  Smartphone,
  Eye,
  Zap
} from 'lucide-react';
import xolaraImg from '../assets/images/project_xolara_fashion_1791364751801.jpg';
import sasBahuImg from '../assets/images/project_sas_bahu_1791364765469.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  // Left Open -> Right Close Specialty Animation
  const specialties = [
    'Digital Product Catalogues',
    'Luxury E-Commerce Stores',
    'AI-Powered Web Apps',
    'WhatsApp Order Showrooms',
    'High-Conversion Lookbooks',
  ];
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [animState, setAnimState] = useState<'entering' | 'active' | 'exiting'>('active');

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimState('exiting');
      setTimeout(() => {
        setSpecialtyIndex((prev) => (prev + 1) % specialties.length);
        setAnimState('entering');
        setTimeout(() => {
          setAnimState('active');
        }, 50);
      }, 380);
    }, 3000);

    return () => clearInterval(timer);
  }, [specialties.length]);

  // LIVE INTERACTIVE STOREFRONT SIMULATOR STATE
  const [activeProject, setActiveProject] = useState<'xolara' | 'sasbahu'>('xolara');
  const [selectedColor, setSelectedColor] = useState('#00f3ff');
  const [cartCount, setCartCount] = useState(1);
  const [addedAnim, setAddedAnim] = useState(false);
  const [showWhatsAppPreview, setShowWhatsAppPreview] = useState(false);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  // Mouse tilt tracking for 3D depth
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x, y });
  };

  const handleCardMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const currentData = activeProject === 'xolara'
    ? {
        name: 'XOLARA PREMIUM',
        subtitle: 'High-Fashion E-Commerce Storefront',
        item: 'Couture Silk Minimalist Blazer',
        price: 280,
        image: xolaraImg,
        url: 'https://xolarapremium.floot.app',
        category: 'Fashion & Luxury E-Commerce',
        tag: 'LIVE PRODUCTION STORE',
      }
    : {
        name: 'SAS BAHU COLLECTION',
        subtitle: 'Royal Bridal Digital Catalogue',
        item: 'Artisanal Zari Embroidered Lehenga',
        price: 640,
        image: sasBahuImg,
        url: 'https://sas-bahu-colaction.ai.studio',
        category: 'Bridal Couture & Catalogue',
        tag: 'LIVE PRODUCTION SHOWROOM',
      };

  const handleAddToCart = () => {
    setAddedAnim(true);
    setCartCount((prev) => prev + 1);
    setTimeout(() => setAddedAnim(false), 1500);
  };

  const colorThemes = [
    { name: 'Cyan Neon', hex: '#00f3ff' },
    { name: 'Imperial Gold', hex: '#eab308' },
    { name: 'Emerald Cyber', hex: '#10b981' },
    { name: 'Electric Violet', hex: '#a855f7' },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Focused Headline & Clean CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 w-fit mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-white tracking-wide">AI Web Developer &amp; Designer</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-emerald-400 font-semibold">Catalogue &amp; E-Commerce</span>
          </div>

          {/* AIHSAN Brand Title with Shimmer Glow */}
          <div className="flex items-baseline gap-3 flex-wrap mb-2">
            <h1 className="font-unbounded font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.88] select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              AIHSAN
            </h1>
            <span className="font-signature text-3xl sm:text-4xl text-cyan-300 font-normal -rotate-6 select-none drop-shadow-[0_0_12px_rgba(6,182,212,0.7)]">
              ~ developer &amp; designer
            </span>
          </div>

          {/* Left-Open / Right-Close Specialty Headline */}
          <div className="my-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>Specialized In:</span>
            </div>

            <div className="relative h-12 overflow-hidden flex items-center">
              {/* Sweep Line */}
              <div
                className={`absolute bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-400 ${
                  animState === 'entering'
                    ? 'left-0 w-1/4 opacity-100'
                    : animState === 'active'
                    ? 'left-0 w-full opacity-70'
                    : 'left-full w-0 opacity-0'
                }`}
              />

              <h2
                className={`font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight transition-all duration-350 ease-out whitespace-nowrap transform ${
                  animState === 'entering'
                    ? '-translate-x-[110%] opacity-0 filter blur-[4px]'
                    : animState === 'active'
                    ? 'translate-x-0 opacity-100 filter blur-0'
                    : 'translate-x-[110%] opacity-0 filter blur-[4px]'
                }`}
              >
                {specialties[specialtyIndex]}
              </h2>
            </div>
          </div>

          {/* Editorial Tagline */}
          <p className="font-editorial italic text-2xl sm:text-3xl text-neutral-200 font-normal my-4 leading-snug">
            &ldquo;I build websites that turn ideas into experiences.&rdquo;
          </p>

          <p className="text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed mb-8 font-outfit">
            Eliminating slow generic templates. I engineer lightning-fast digital catalogues, luxury fashion lookbooks, and conversion-optimized e-commerce stores tailored to grow your revenue.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-xl shadow-blue-600/30 active:scale-95 flex items-center gap-2 group"
            >
              <span>Explore Live Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm rounded-xl border border-white/[0.12] hover:border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Real Metrics Row */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/[0.08] max-w-md font-mono text-xs">
            <div>
              <span className="font-bebas text-2xl text-cyan-400 block tracking-wider">2 LIVE</span>
              <span className="text-neutral-400 text-[11px]">Production Stores</span>
            </div>
            <div>
              <span className="font-bebas text-2xl text-white block tracking-wider">&lt;200ms</span>
              <span className="text-neutral-400 text-[11px]">Instant Speed</span>
            </div>
            <div>
              <span className="font-bebas text-2xl text-emerald-400 block tracking-wider">60 FPS</span>
              <span className="text-neutral-400 text-[11px]">Motion Physics</span>
            </div>
          </div>
        </div>

        {/* Right Column: LIVE INTERACTIVE STOREFRONT SIMULATOR (MJA AA JAYEGA!) */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-full max-w-lg glass-panel rounded-3xl border border-cyan-500/30 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-transform duration-200 ease-out flex flex-col justify-between"
            style={{
              transform: `perspective(1000px) rotateY(${mouseTilt.x * 10}deg) rotateX(${-mouseTilt.y * 10}deg)`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 40px ${selectedColor}15`,
            }}
          >
            {/* Top Simulator Control Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] flex-wrap gap-2 text-xs font-mono">
              {/* Store Switcher */}
              <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-white/[0.08]">
                <button
                  onClick={() => setActiveProject('xolara')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeProject === 'xolara'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Xolara Premium
                </button>
                <button
                  onClick={() => setActiveProject('sasbahu')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeProject === 'sasbahu'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Sas Bahu
                </button>
              </div>

              {/* Viewport Frame Toggle */}
              <div className="flex items-center gap-1 text-neutral-400">
                <button
                  onClick={() => setViewportMode('desktop')}
                  className={`p-1.5 rounded-lg transition ${viewportMode === 'desktop' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
                  title="Desktop Preview"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  className={`p-1.5 rounded-lg transition ${viewportMode === 'mobile' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
                <span className="w-2 h-2 rounded-full bg-emerald-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Live Product Preview Frame */}
            <div className={`relative transition-all duration-300 mx-auto w-full ${viewportMode === 'mobile' ? 'max-w-[300px]' : 'w-full'}`}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-black">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Dynamic Ambient Lighting Gradient matching selected color */}
                <div 
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 transition-colors duration-500"
                  style={{ backgroundColor: selectedColor }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{currentData.tag}</span>
                </div>

                {/* Direct Launch Pill Top Right */}
                <a
                  href={currentData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Bottom Overlay Item Name */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-300 block">
                      {currentData.category}
                    </span>
                    <h3 className="font-syne font-bold text-white text-base sm:text-lg leading-tight">
                      {currentData.item}
                    </h3>
                  </div>
                  <div className="font-bebas text-2xl text-white tracking-wider tabular-nums">
                    ${currentData.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Live Controls: Color Customizer & Quick Actions */}
            <div className="mt-4 pt-3.5 border-t border-white/[0.08] space-y-3 font-mono text-xs">
              
              {/* Row 1: Live Color Theme Switcher */}
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-[11px] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Live Theme Accent:
                </span>
                <div className="flex items-center gap-1.5">
                  {colorThemes.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.hex)}
                      className={`w-5 h-5 rounded-full transition-transform ${
                        selectedColor === c.hex ? 'scale-125 ring-2 ring-white shadow-lg' : 'hover:scale-110 opacity-70'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Row 2: Live "Add to Bag" & "WhatsApp Order" Simulator */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {/* Button 1: Live Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                    addedAnim
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10'
                  }`}
                >
                  {addedAnim ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Added! (${currentData.price * cartCount})</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Test Bag ({cartCount})</span>
                    </>
                  )}
                </button>

                {/* Button 2: Live WhatsApp Order Preview */}
                <button
                  onClick={() => setShowWhatsAppPreview(!showWhatsAppPreview)}
                  className="py-2.5 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{showWhatsAppPreview ? 'Hide Order' : 'WhatsApp Flow'}</span>
                </button>
              </div>

              {/* WhatsApp Order Preview Popover */}
              {showWhatsAppPreview && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[11px] leading-relaxed animate-in fade-in duration-200">
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Live WhatsApp Order Message:</span>
                  </div>
                  <div className="p-2 rounded bg-black/60 text-neutral-300 font-mono text-[10px]">
                    &ldquo;Hi AIHSAN, I want to order <strong>{currentData.item}</strong> (${currentData.price}) from the <strong>{currentData.name}</strong> digital catalogue!&rdquo;
                  </div>
                </div>
              )}

              {/* Bottom Quick Link */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  Instant Live Deployment
                </span>
                <a
                  href={currentData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white transition flex items-center gap-1 font-bold"
                >
                  <span>Launch Live Site</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
