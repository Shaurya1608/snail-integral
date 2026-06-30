"use client";

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import AnimatedText from '../AnimatedText';

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

export default function OurImpact() {
  const stats = [
    { 
      value: 50, 
      suffix: "+", 
      label: "Brands",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      value: 100, 
      suffix: "+", 
      label: "Campaigns",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    { 
      value: 20, 
      suffix: "+", 
      label: "Years",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      label: "Retention",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      stringVal: "Pan India", 
      label: "Reach",
      icon: (
        <svg className="w-5 h-5 text-white/90 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 00-2-2h-.5a2 2 0 01-2-2V5a2 2 0 00-2-2H9a3 3 0 00-3 3v.15H8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#6b9b37] py-6 md:py-8 px-6 md:px-8 relative overflow-hidden flex items-center border-y border-[#5f8a31] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={0.15 + (index * 0.08)}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-center h-full hover:bg-white/20 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 group">
                
                {/* SVG Icon */}
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Stat Display */}
                <span className="text-3xl md:text-4xl lg:text-[2.2rem] font-serif font-extrabold text-white mb-1.5 leading-none tracking-tight block">
                  {stat.stringVal ? (
                    <span className="text-base sm:text-lg lg:text-[1.3rem] font-sans font-extrabold uppercase tracking-tight text-white whitespace-nowrap block">
                      {stat.stringVal}
                    </span>
                  ) : (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  )}
                </span>

                {/* Sub-label */}
                <span className="text-[10px] md:text-xs font-bold text-white/80 group-hover:text-white uppercase tracking-widest transition-colors">
                  {stat.label}
                </span>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
