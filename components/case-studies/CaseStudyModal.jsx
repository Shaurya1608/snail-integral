"use client";

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function CaseStudyModal({ study, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6 lg:p-12 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-auto"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-y-auto">
          {/* Left / Top: Image & Key Info */}
          <div className="w-full md:w-2/5 bg-gray-50 flex flex-col">
            <div className="w-full h-48 md:h-64 relative">
              <img 
                src={study.thumbnail} 
                alt={study.client} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                 <h2 className="text-white font-serif text-2xl font-semibold leading-tight">{study.client}</h2>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Service Used</p>
                <p className="text-gray-900 font-medium">{study.service}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Industry</p>
                <span className="inline-block bg-[#6a9a38]/10 text-[#6a9a38] text-xs font-bold px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>
              
              {study.product && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Product</p>
                  <p className="text-gray-900 font-medium">{study.product}</p>
                </div>
              )}

              {study.videoUrl && (
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <a 
                    href={study.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-[#6a9a38] text-white rounded-xl hover:bg-[#557d2a] transition-colors font-medium shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right / Bottom: Deep Dive Content */}
          <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col gap-8 bg-white">
            
            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </span>
                The Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                {study.challenge}
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200"></div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </span>
                What We Did
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                {study.solution}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 bg-[#f9fbf7] p-6 rounded-2xl border">
              <h3 className="font-serif text-lg font-semibold text-[#6a9a38] mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#6a9a38]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
                The Outcome
              </h3>
              <p className="text-gray-800 font-medium leading-relaxed text-sm">
                {study.outcome}
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
