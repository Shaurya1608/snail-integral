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
    { 
      value: 20, 
      suffix: "+", 
      label: "Years of Experience",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: 50, 
      suffix: "+", 
      label: "Brands Served",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      value: 100, 
      suffix: "+", 
      label: "Campaigns Executed",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    { 
      value: 10, 
      suffix: "+", 
      label: "Sectors",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      value: 95, 
      suffix: "%", 
      label: "Client Retention",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
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
      <div className="w-full bg-gradient-to-r from-[#5a862b] via-[#6a9a38] to-[#557d2a] py-4 md:py-6 mt-10 lg:mt-0 relative overflow-hidden shadow-inner">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={`stat-${idx}`} 
                className={`group flex flex-col gap-1 items-center justify-center py-2 px-3 border-white/45 lg:border-r lg:border-solid last:border-r-0 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {/* SVG Icon */}
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>

                <span className="font-serif text-3xl md:text-4xl lg:text-[2.2rem] font-bold text-white tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
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
