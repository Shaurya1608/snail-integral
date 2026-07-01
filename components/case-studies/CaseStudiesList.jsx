"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { caseStudies } from '@/data/caseStudiesData';
import CaseStudyModal from './CaseStudyModal';
import AnimatedText from '../AnimatedText';

export default function CaseStudiesList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isMobile, setIsMobile] = useState(false);

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
          <div className="flex overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-3 mb-12">
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

        {/* Case Studies List */}
        <motion.div 
          layout
          className="flex flex-col gap-6 max-w-6xl mx-auto"
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
                className={`group cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(106,154,56,0.1)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col md:flex-row h-auto md:min-h-[420px] border relative ${
                  isDark ? 'bg-[#f4f7f0] border-gray-150/40' : 'bg-white border-gray-150/40'
                }`}
              >
                {/* Animated Background */}
                {!isMobile && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`absolute inset-0 md:w-1/2 z-0 origin-left ${isDark ? "bg-white" : "bg-[#f4f7f0]"}`}
                  />
                )}

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
                  <div className="absolute inset-0 bg-[#6a9a38]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={study.thumbnail} 
                    alt={study.client}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>

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
