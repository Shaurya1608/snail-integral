"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      {/* === Background Image === */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/LandingPage/l-image-1.jpg"
          alt="Snail Integral background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
      </motion.div>

      {/* === Dark Gradient Overlay === */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* === Content === */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">

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

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.05] tracking-tight"
          >
            Visibility Matters
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg mt-2 mb-4"
          >
            We help brands communicate with clarity, connect with the right audiences, and grow with purpose. From agriculture boardrooms to corporate strategies, Snail Integral builds communication that creates real business impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col items-start gap-4 pt-8 w-full"
          >
            <div className="flex flex-col sm:items-center gap-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <Link
                  href="#services"
                  className="group relative px-6 py-3.5 sm:py-3 text-[13px] md:text-sm font-semibold rounded-full bg-[#6a9a38] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,154,56,0.4)] hover:-translate-y-[2px] w-full sm:w-auto text-center flex justify-center items-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <span className="absolute inset-0 bg-[#557d2a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3.5 sm:py-3 text-[13px] md:text-sm font-medium rounded-full border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] w-full sm:w-auto text-center flex justify-center items-center"
                >
                  Schedule a Consultation
                </Link>
              </div>
              <div className="flex w-full sm:justify-start">
                <a
                  href="/Snail%20Brochure%202026.pdf"
                  download="Snail_Brochure_2026.pdf"
                  className="px-6 py-3.5 sm:py-3 text-[13px] md:text-sm font-medium rounded-full border border-[#8ec44a]/50 text-[#8ec44a] hover:bg-[#8ec44a]/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] flex justify-center items-center gap-2 w-full sm:w-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Brochure
                </a>
              </div>
            </div>
            
            {/* Trust Line */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-xs text-white/60 mt-2 font-medium"
            >
              Trusted by 50+ brands across agriculture, corporate, and government sectors in India.
            </motion.p>
          </motion.div>
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
