"use client";

import { motion } from 'framer-motion';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

export default function ClosingLine() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fbf7] via-[#f3f7ee] to-[#f9fbf7] relative overflow-hidden py-32 px-6 flex flex-col items-center justify-center min-h-[500px] border-t border-gray-150/50">
      
      {/* Huge Background Watermark */}
      <div className="absolute text-[8rem] sm:text-[14rem] md:text-[18rem] font-sans font-black select-none pointer-events-none text-[#4a7c24]/[0.03] tracking-tighter uppercase whitespace-nowrap z-0 leading-none select-none">
        CONNECT
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-xs font-bold text-[#4a7c24] tracking-[0.35em] uppercase mb-4"
        >
          Snail Integral
        </motion.span>
        
        {/* Title Group with Overlapping Cursive */}
        <div className="relative flex flex-col items-center mb-10 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-gray-950 uppercase leading-none"
          >
            SAY HELLO
          </motion.h2>
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className={`${greatVibes.className} absolute -bottom-6 right-1/2 translate-x-1/2 sm:-bottom-8 sm:right-[10%] sm:translate-x-0 text-4xl sm:text-6xl md:text-7xl text-[#4a7c24] font-normal capitalize whitespace-nowrap leading-none z-20`}
          >
            together
          </motion.span>
        </div>

        {/* Supporting description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-lg mx-auto font-light mt-4"
        >
          Every significant brand partnership starts with a single conversation. We are ready for yours whenever you are.
        </motion.p>

        {/* Contact Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-xs font-semibold tracking-widest text-gray-400 uppercase mt-12 z-10 border-t border-gray-250/65 pt-6 w-full max-w-md"
        >
          <a href="mailto:hello@snailintegral.com" className="hover:text-primary transition-colors duration-300">
            hello@snailintegral.com
          </a>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <a href="https://snailintegral.com" className="hover:text-primary transition-colors duration-300">
            snailintegral.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
