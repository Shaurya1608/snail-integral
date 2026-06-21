"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: '/LandingPage/l-image-1.jpg',
    keyword: 'Brand Strategy',
    subtitle: 'Building powerful brand narratives that resonate with your audience and drive measurable growth.',
  },
  {
    image: '/LandingPage/l-image-2.jpg',
    keyword: 'Corporate Comms',
    subtitle: 'Clear, compelling messaging for companies that want to lead their industry conversations.',
  },
  {
    image: '/LandingPage/l-image-3.jpg',
    keyword: 'Digital Marketing',
    subtitle: 'Data-driven campaigns across channels, designed to generate real business outcomes.',
  },
  {
    image: '/LandingPage/l-image-4.jpg',
    keyword: 'Agri Expertise',
    subtitle: 'Specialized communication for agri-businesses, from boardroom to field level impact.',
  },
  {
    image: '/LandingPage/l-image-15.jpg',
    keyword: 'Creative Design',
    subtitle: 'Visually stunning content that captures attention and communicates your brand story.',
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Auto-advance with smooth progress
  useEffect(() => {
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        next();
      } else {
        progressRef.current = requestAnimationFrame(animate);
      }
    };
    progressRef.current = requestAnimationFrame(animate);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [current, next]);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">

      {/* === Background Image Carousel === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* === Dark Gradient Overlay === */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* === Content === */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">

        {/* Main Text Block */}
        <div className="flex flex-col gap-5 max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6a9a38] animate-pulse" />
              Snail Integral — 20+ Years of Impact
            </span>
          </motion.div>

          {/* Headline with cycling keyword */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.05] tracking-tight"
          >
            Visibility Through
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="inline-block text-[#8ec44a]"
              >
                {slides[current].keyword}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Subtitle — changes with slide */}
          <div className="h-14 md:h-12 mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg"
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="#services"
              className="group relative px-6 py-3 text-xs md:text-sm font-semibold rounded-full bg-[#6a9a38] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,154,56,0.4)] hover:-translate-y-[2px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <span className="absolute inset-0 bg-[#557d2a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-xs md:text-sm font-medium rounded-full border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px]"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>

        {/* === Bottom Bar: Progress + Slide Nav === */}
        <div className="mt-10 md:mt-14 flex items-end justify-between gap-6">

          {/* Slide Progress Bars */}
          <div className="flex gap-2 flex-1 max-w-md">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group flex-1 flex flex-col gap-2 text-left"
                aria-label={`Go to slide ${i + 1}: ${slide.keyword}`}
              >
                {/* Progress track */}
                <div className="w-full h-[3px] rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-none"
                    style={{
                      width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%',
                      background: i === current
                        ? 'linear-gradient(90deg, #6a9a38, #8ec44a)'
                        : i < current
                          ? 'rgba(255,255,255,0.3)'
                          : 'transparent',
                    }}
                  />
                </div>
                {/* Label (visible on md+) */}
                <span className={`hidden md:block text-[11px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                  i === current ? 'text-white/90' : 'text-white/30 group-hover:text-white/50'
                }`}>
                  {slide.keyword}
                </span>
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white/40 text-sm font-mono">
              <span className="text-white font-semibold">{String(current + 1).padStart(2, '0')}</span>
              {' / '}
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* === Scroll Indicator === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>

      {/* === Inline Styles for animations === */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
