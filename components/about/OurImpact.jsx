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
    { value: 50, suffix: "+", label: "Brands" },
    { value: 100, suffix: "+", label: "Campaigns" },
    { value: 20, suffix: "+", label: "Years" },
    { value: 10, suffix: "+", label: "Sectors" },
    { value: 95, suffix: "%", label: "Retention" },
    { stringVal: "Pan India", label: "Reach" }
  ];

  return (
    <section className="w-full bg-[#6b9b37] py-6 md:py-8 px-6 md:px-8 relative overflow-hidden flex items-center border-y border-[#5f8a31]">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center h-full hover:bg-white/20 transition-colors duration-300 border border-white/10">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
                  {stat.stringVal ? stat.stringVal : <AnimatedNumber value={stat.value} suffix={stat.suffix} />}
                </span>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
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
