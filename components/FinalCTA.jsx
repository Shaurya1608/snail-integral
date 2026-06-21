import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#f9fbf7] py-20 md:py-28 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top: Centered Heading */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-20">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 leading-[1.1]">
              Ready to build something <span className="italic text-[#4a7c24]">remarkable</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-base md:text-lg text-gray-700 italic max-w-xl">
              Let&apos;s talk about your brand and what it could become
            </p>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3 text-sm font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3d6a1d] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Schedule
              </a>
              <a
                href="#services"
                className="px-7 py-3 text-sm font-medium rounded-full border border-gray-400 text-gray-800 hover:border-gray-600 hover:bg-gray-50 transition-all duration-300"
              >
                Learn more
              </a>
            </div>
          </AnimatedText>
        </div>

        {/* Bottom: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatedText delay={0.1}>
            <div className="group bg-[#f9fbf7] border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-start gap-3 hover:bg-white hover:border-[#4a7c24]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer h-full">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c24]/10 flex items-center justify-center mb-1">
                <svg className="w-5 h-5 text-[#4a7c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">For Corporate Clients</h3>
              <p className="text-sm text-gray-500">Enterprise-grade communication strategies for established businesses.</p>
              <span className="font-medium text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-2 group-hover:gap-3 transition-all">
                Schedule a Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <div className="group bg-[#f9fbf7] border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-start gap-3 hover:bg-white hover:border-[#4a7c24]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer h-full">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c24]/10 flex items-center justify-center mb-1">
                <svg className="w-5 h-5 text-[#4a7c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">For Agriculture Businesses</h3>
              <p className="text-sm text-gray-500">Specialized solutions for agri-businesses and rural markets across India.</p>
              <span className="font-medium text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-2 group-hover:gap-3 transition-all">
                Explore Agriculture Solutions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="group bg-[#f9fbf7] border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-start gap-3 hover:bg-white hover:border-[#4a7c24]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer h-full">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c24]/10 flex items-center justify-center mb-1">
                <svg className="w-5 h-5 text-[#4a7c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">For Startups and SMEs</h3>
              <p className="text-sm text-gray-500">Growth-focused communication to help startups scale with purpose.</p>
              <span className="font-medium text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-2 group-hover:gap-3 transition-all">
                Get Started Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
