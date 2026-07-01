"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function ClientLogos() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8; // scroll by 80% of screen width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const allLogos = Array.from({ length: 97 }, (_, i) => String(i + 1).padStart(2, '0'))
    .filter(n => n !== '98')
    .concat(['99', '100', '101', '102', '103'])
    .map(num => `All Brands logo-${num}.png`);

  const row1Logos = allLogos.slice(0, 25);
  const row2Logos = allLogos.slice(25, 50);
  const row3Logos = allLogos.slice(50, 75);
  const row4Logos = allLogos.slice(75);

  return (
    <section className="w-full bg-white pt-20 md:pt-32 pb-10 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center mb-10 md:mb-16">
        <div className="text-center max-w-2xl">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Brands That Trust Us
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600">
              We are proud to work with industry leaders, government institutions, and innovative businesses across India.
            </p>
          </AnimatedText>
        </div>
      </div>



      <div 
        ref={scrollRef}
        className="flex flex-col gap-6 md:gap-10 w-full max-w-[100vw] overflow-hidden relative hide-scrollbar pb-4 md:pb-0"
      >
        {/* Fade edges — both mobile and desktop */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 */}
        <div className="flex w-max desktop-animate-scroll hover:pause px-4 md:px-0">
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row1Logos.map((logo, i) => (
               <div key={`row1a-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row1Logos.map((logo, i) => (
               <div key={`row1b-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-max desktop-animate-scroll-reverse hover:pause px-4 md:px-0">
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row2Logos.map((logo, i) => (
               <div key={`row2a-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row2Logos.map((logo, i) => (
               <div key={`row2b-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex w-max desktop-animate-scroll hover:pause px-4 md:px-0">
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row3Logos.map((logo, i) => (
               <div key={`row3a-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row3Logos.map((logo, i) => (
               <div key={`row3b-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex w-max desktop-animate-scroll-reverse hover:pause px-4 md:px-0">
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row4Logos.map((logo, i) => (
               <div key={`row4a-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {row4Logos.map((logo, i) => (
               <div key={`row4b-${i}`} className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/All Brands logo copy/${logo}`} alt={`Client Logo`} fill sizes="(max-width: 768px) 128px, 192px" className="object-contain p-2.5 md:p-4" />
               </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <button 
          onClick={() => scroll('left')} 
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Scroll Left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Scroll Right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .desktop-animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .desktop-animate-scroll-reverse {
          animation: scroll 70s linear infinite reverse;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
