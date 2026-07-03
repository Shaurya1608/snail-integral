"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import CaseStudyModal from './CaseStudyModal';
import AnimatedText from '../AnimatedText';

export default function CaseStudiesList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest - previous > 5) {
      setScrollDirection("down");
    } else if (latest < previous && previous - latest > 5) {
      setScrollDirection("up");
    }
  });

  // Extract unique categories
  const categories = ["All", ...new Set(caseStudies.map(item => item.category))];

  // Filter case studies
  const filteredCases = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeFilter);

  return (
    <section className="w-full bg-white pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Filter Navigation */}
        <AnimatedText delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#6a9a38] text-white shadow-[0_4px_12px_rgba(106,154,56,0.3)] hover:-translate-y-0.5"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#6a9a38]/40 hover:bg-[#6a9a38]/5 hover:text-[#6a9a38]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedText>

        {/* Case Studies List Wrapper */}
        <div className="relative">
          {/* Floating Mobile Navigation Arrows */}
          <div className="absolute top-1/4 -left-2 -right-2 flex md:hidden justify-between items-center z-20 pointer-events-none">
            <button onClick={scrollLeft} aria-label="Scroll Left" className="pointer-events-auto w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6a9a38] bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={scrollRight} aria-label="Scroll Right" className="pointer-events-auto w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6a9a38] bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Case Studies List */}
          <motion.div 
            ref={scrollContainerRef}
            layout
            className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-6 max-w-6xl mx-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-4 md:pb-0 md:pt-0 -mx-6 px-6 md:mx-auto md:px-0"
          >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((study, index) => {
              const isDark = index % 2 !== 0; // Alternate dark/light backgrounds
              
              return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                transition={{ duration: 0.4 }}
                key={study.id}
                onClick={() => setSelectedCase(study)}
                className={`group cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(106,154,56,0.1)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col md:flex-row h-auto md:min-h-[420px] border relative w-[85vw] md:w-auto shrink-0 snap-center md:snap-align-none ${
                  isDark ? 'bg-[#f4f7f0] border-gray-200' : 'bg-white border-gray-200'
                }`}
              >

                {/* Left Content */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-2 relative z-10">
                  <div>
                    <h3 className="font-sans text-3xl md:text-[40px] font-semibold leading-tight mb-4 tracking-tight text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {study.client}
                    </h3>
                    <div className="inline-block border border-primary/25 bg-primary/5 rounded-full px-4 py-1 text-xs font-semibold text-primary mb-6">
                       {study.category}
                    </div>
                    <p className="text-gray-600 text-base md:text-sm leading-relaxed line-clamp-4 font-normal">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-start">
                     <svg 
                      className="w-8 h-8 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7v9"></path>
                     </svg>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#eef1f6]">
                  <motion.div 
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="absolute inset-0 bg-[#6a9a38]/10 mix-blend-multiply z-10 lg:!opacity-100 lg:group-hover:!opacity-0 transition-opacity duration-500"
                  ></motion.div>
                  <motion.img 
                    src={study.thumbnail} 
                    alt={study.client}
                    initial={{ filter: "grayscale(100%)", opacity: 0.8 }}
                    whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="absolute inset-0 w-full h-full object-cover lg:!filter-none lg:grayscale lg:opacity-90 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No case studies found for this category.</p>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <CaseStudyModal 
            study={selectedCase} 
            onClose={() => setSelectedCase(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
