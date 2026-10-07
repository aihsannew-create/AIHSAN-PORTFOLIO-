import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Live Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08080c]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Brand title, single line text element wordmark in display face */}
          <a
            href="#"
            className="font-unbounded text-lg md:text-xl font-extrabold tracking-tighter text-white hover:text-blue-400 transition-colors shrink-0 flex items-center"
          >
            <span>AIHSAN</span>
            <span className="font-signature text-blue-400 text-xl font-normal ml-1 -rotate-6">studio</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-white/[0.06] hover:bg-blue-600 border border-white/[0.12] hover:border-blue-500 rounded-lg transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#060608]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-5">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-white hover:text-blue-400 transition-colors py-2 border-b border-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-center text-sm transition-all"
            >
              Start a Project
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>aihsannew@gmail.com</span>
              <span className="text-emerald-400">● Open for work</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
