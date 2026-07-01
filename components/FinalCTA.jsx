import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from './AnimatedText';

export default function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#fafcf6] to-white pt-16 md:pt-24 pb-16 md:pb-24 px-6 md:px-8 overflow-hidden relative z-10">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#4a7c24]/5 blur-[80px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8ec44a]/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top: Centered Heading */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-20">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 leading-[1.1]">
              Ready to Build Something <span className="italic text-[#4a7c24] font-serif">That Lasts</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
              Whether you are a corporate enterprise, an agriculture business, or a growing startup, Snail Integral is ready to be your strategic communication partner. Let us start a conversation.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact#contact-form"
                className="px-8 py-3.5 text-sm font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3d6a1d] transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_-5px_rgba(74,124,36,0.4)] hover:-translate-y-0.5"
              >
                Schedule
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 text-sm font-semibold rounded-full border border-gray-300 text-gray-800 hover:border-gray-900 hover:bg-white transition-all duration-300 hover:shadow-sm"
              >
                Learn more
              </Link>
            </div>
          </AnimatedText>
        </div>

        {/* Bottom: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <AnimatedText delay={0.1}>
            <Link 
              href="/contact#contact-form"
              className="group block bg-[#f9fbf7] border border-gray-200/80 rounded-3xl p-8 flex flex-col items-start gap-4 hover:bg-white hover:border-[#4a7c24]/30 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer h-full relative overflow-hidden z-10"
            >
              {/* Decorative Accent Background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#4a7c24]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-[#4a7c24]/10 flex items-center justify-center mb-1 group-hover:bg-[#4a7c24] transition-all duration-500">
                <svg className="w-6 h-6 text-[#4a7c24] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 group-hover:text-[#4a7c24] transition-colors duration-300">For Corporate Clients</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Enterprise-grade communication strategies for established businesses.</p>
              <span className="font-semibold text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
                Schedule a Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link 
              href="/contact#contact-form"
              className="group block bg-[#f9fbf7] border border-gray-200/80 rounded-3xl p-8 flex flex-col items-start gap-4 hover:bg-white hover:border-[#4a7c24]/30 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer h-full relative overflow-hidden z-10"
            >
              {/* Decorative Accent Background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#4a7c24]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-[#4a7c24]/10 flex items-center justify-center mb-1 group-hover:bg-[#4a7c24] transition-all duration-500">
                <svg className="w-6 h-6 text-[#4a7c24] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 group-hover:text-[#4a7c24] transition-colors duration-300">For Agriculture Businesses</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Specialized solutions for agri-businesses and rural markets across India.</p>
              <span className="font-semibold text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
                Explore Agriculture Solutions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <Link 
              href="/contact#contact-form"
              className="group block bg-[#f9fbf7] border border-gray-200/80 rounded-3xl p-8 flex flex-col items-start gap-4 hover:bg-white hover:border-[#4a7c24]/30 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer h-full relative overflow-hidden z-10"
            >
              {/* Decorative Accent Background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#4a7c24]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-[#4a7c24]/10 flex items-center justify-center mb-1 group-hover:bg-[#4a7c24] transition-all duration-500">
                <svg className="w-6 h-6 text-[#4a7c24] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 group-hover:text-[#4a7c24] transition-colors duration-300">For Startups and SMEs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Growth-focused communication to help startups scale with purpose.</p>
              <span className="font-semibold text-sm flex items-center gap-2 text-[#4a7c24] mt-auto pt-4 group-hover:gap-3 transition-all duration-300">
                Get Started Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
