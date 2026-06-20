"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const slides = [
  {
    image: '/LandingPage/l-image-1.jpg',
    heading: 'Strategic brand consulting',
    description: 'Building powerful brand narratives that resonate with your audience and drive measurable growth.',
  },
  {
    image: '/LandingPage/l-image-2.jpg',
    heading: 'Corporate communications',
    description: 'Clear, compelling messaging for companies that want to lead their industry conversations.',
  },
  {
    image: '/LandingPage/l-image-3.jpg',
    heading: 'Digital marketing solutions',
    description: 'Data-driven campaigns across channels, designed to generate real business outcomes.',
  },
  {
    image: '/LandingPage/l-image-4.jpg',
    heading: 'Agriculture sector expertise',
    description: 'Specialized communication for agri-businesses, from boardroom to field level impact.',
  },
  {
    image: '/LandingPage/l-image-15.jpg',
    heading: 'Creative design & production',
    description: 'Visually stunning content that captures attention and communicates your brand story.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="w-full bg-[#f9fbf7]">
      <section className="max-w-7xl mx-auto w-full px-8 py-12 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[100dvh] md:h-screen overflow-hidden">
        
        {/* Left Column — Text Content */}
        <div className="flex flex-col gap-8 pr-4 z-10 mt-0 md:-mt-32">
          <AnimatedText delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-[#111]">
              Visibility<br />Matters
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-lg text-gray-800">
              We help brands communicate with clarity, connect with the right audiences, and grow with purpose. From agriculture boardrooms to corporate strategies, Snail Integral builds communication that creates real business impact.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm">
                  Explore Our Services
                </button>
                <button className="px-8 py-3 text-sm font-medium rounded-xl border border-gray-300 hover:border-gray-400 transition-colors bg-white/40 backdrop-blur">
                  Schedule a Consultation
                </button>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-4 border-l-2 border-primary pl-3">
                Trusted by 50+ brands across agriculture, corporate, and government sectors in India.
              </p>
            </div>
          </AnimatedText>
        </div>

        {/* Right Column — Image Carousel */}
        <div className="flex flex-col gap-5 mt-0 md:-mt-20">
          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slides[current].image})` }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption + Controls Row */}
          <div className="flex items-end justify-between gap-4">
            {/* Caption */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[15px] sm:text-base font-semibold text-[#111] mb-1 capitalize">
                    {slides[current].heading}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-gray-400 leading-snug line-clamp-2">
                    {slides[current].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots + Arrows */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-2 h-2 bg-[#111]'
                        : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111] hover:border-gray-400 transition-all duration-200"
                  aria-label="Previous slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111] hover:border-gray-400 transition-all duration-200"
                  aria-label="Next slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
