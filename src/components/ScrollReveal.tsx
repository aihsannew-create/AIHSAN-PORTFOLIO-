import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'tilt' | 'none';
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.12,
  once = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 50px, 0) scale(0.97) rotateX(8deg)';
      case 'down':
        return 'translate3d(0, -50px, 0) scale(0.97) rotateX(-8deg)';
      case 'left':
        return 'translate3d(-60px, 0, 0) scale(0.97) rotateY(-8deg)';
      case 'right':
        return 'translate3d(60px, 0, 0) scale(0.97) rotateY(8deg)';
      case 'zoom':
        return 'translate3d(0, 24px, 0) scale(0.90)';
      case 'tilt':
        return 'perspective(1000px) rotateX(15deg) translateY(45px) scale(0.94)';
      case 'none':
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(5px)',
        transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity, filter',
        perspective: '1200px',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Animated Left-Open Right-Close Text Reveal Component
 */
interface LeftOpenRightCloseTextProps {
  phrases: string[];
  intervalMs?: number;
  className?: string;
  fontClass?: string;
}

export function LeftOpenRightCloseText({
  phrases,
  intervalMs = 3400,
  className = '',
  fontClass = 'font-syne',
}: LeftOpenRightCloseTextProps) {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<'entering' | 'active' | 'exiting'>('active');

  const triggerNext = () => {
    // 1. Right Close: moves right and fades out
    setAnimState('exiting');
    setTimeout(() => {
      // 2. Prepare next phrase from left
      setIndex((prev) => (prev + 1) % phrases.length);
      setAnimState('entering');
      // 3. Left Open: slides in smoothly from the left
      setTimeout(() => {
        setAnimState('active');
      }, 50);
    }, 450);
  };

  const triggerPrev = () => {
    setAnimState('exiting');
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + phrases.length) % phrases.length);
      setAnimState('entering');
      setTimeout(() => {
        setAnimState('active');
      }, 50);
    }, 450);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      triggerNext();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [index, intervalMs]);

  return (
    <div className={`relative overflow-hidden inline-flex flex-col ${className}`}>
      <div className="flex items-center justify-between gap-3 pb-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>[LEFT-OPEN · RIGHT-CLOSE]</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={triggerPrev}
            aria-label="Previous headline"
            className="w-5 h-5 rounded flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.12] text-neutral-300 text-xs transition cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={triggerNext}
            aria-label="Next headline"
            className="w-5 h-5 rounded flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.12] text-neutral-300 text-xs transition cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative min-h-[3.2rem] flex items-center overflow-hidden">
        {/* Animated Sweep Laser Line */}
        <div
          className={`absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-300 to-indigo-400 transition-all duration-500 pointer-events-none ${
            animState === 'entering'
              ? 'left-0 w-1/3 opacity-100'
              : animState === 'active'
              ? 'left-0 w-full opacity-70'
              : 'left-full w-0 opacity-0'
          }`}
        />

        <div
          className={`${fontClass} text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight transition-all duration-450 ease-out transform whitespace-nowrap ${
            animState === 'entering'
              ? '-translate-x-[120%] opacity-0 filter blur-[6px]'
              : animState === 'active'
              ? 'translate-x-0 opacity-100 filter blur-0'
              : 'translate-x-[120%] opacity-0 filter blur-[6px]'
          }`}
        >
          {phrases[index]}
        </div>
      </div>
    </div>
  );
}

/**
 * Animated Text Word Revealer that splits and animates on scroll
 */
interface TextScrollRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delayOffset?: number;
}

export function TextScrollReveal({
  text,
  className = '',
  wordClassName = '',
  delayOffset = 0,
}: TextScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  const words = text.split(' ');

  return (
    <div ref={domRef} className={`inline-flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className={`inline-block transition-all duration-700 ${wordClassName}`}
          style={{
            transform: isVisible
              ? 'translateY(0) rotate(0deg) scale(1)'
              : 'translateY(32px) rotate(3deg) scale(0.96)',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(4px)',
            transitionDelay: `${delayOffset + idx * 45}ms`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
