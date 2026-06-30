"use client";

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import AnimatedText from './AnimatedText';

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(v) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseUs() {
  const points = [
    {
      title: "Two Decades of Experience",
      desc: "Over 20 years of working across diverse industries has given us the depth to navigate complex communication challenges."
    },
    {
      title: "Integrated Under One Roof",
      desc: "From strategy to execution, every service is managed in-house for consistent messaging and seamless delivery."
    },
    {
      title: "Data-Driven Strategy",
      desc: "Every recommendation is backed by audience research, market analysis, and performance data."
    },
    {
      title: "Multi-Sector Expertise",
      desc: "We bring genuine knowledge of agriculture, corporate, government, and consumer sectors, not surface-level familiarity."
    },
    {
      title: "Measurable Results",
      desc: "We set clear KPIs, track progress transparently, and report on outcomes that actually matter to your business."
    },
    {
      title: "Long-Term Partnership",
      desc: "We invest in your sustained success. Most of our clients have been with us for years, not just campaigns."
    }
  ];

  const stats = [
    { value: 20, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Brands Served" },
    { value: 100, suffix: "+", label: "Campaigns Executed" },
    { value: 10, suffix: "+", label: "Sectors" },
    { value: 95, suffix: "%", label: "Client Retention" }
  ];

  return (
    <section className="w-full bg-white pt-10 md:pt-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-20 md:mb-32">
        {/* Left Side: Heading & Intro */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 self-start">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Why Brands Choose Snail Integral
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              We do not believe in generic solutions. Every strategy we build is grounded in research, shaped by industry understanding, and executed with creative precision.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.3}>
            <div className="mt-4 relative w-full h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] group border border-gray-100">
              <div className="absolute inset-0 bg-[#6a9a38]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Snail Integral Team Collaboration" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Right Side: 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {points.map((point, idx) => (
            <AnimatedText key={idx} delay={0.1 + (idx % 2) * 0.1}>
              <div className="flex flex-col gap-3 relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="w-full bg-gradient-to-r from-[#5a862b] via-[#6a9a38] to-[#557d2a] py-8 md:py-10 mt-10 lg:mt-0 relative overflow-hidden shadow-inner">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={`stat-${idx}`} 
                className={`group flex flex-col gap-1 items-center justify-center py-5 px-3 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border-t border-white/20 border-x border-white/5 border-b border-transparent backdrop-blur-md hover:bg-white/15 hover:border-white/30 hover:shadow-[0_10px_30px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/80 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-center mt-1 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
