import AnimatedText from '../AnimatedText';

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f9fbf7] py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4a7c24]/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#4a7c24]/5 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <div className="w-16 h-1 bg-[#4a7c24] mx-auto rounded-full"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <AnimatedText delay={0.2}>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(74,124,36,0.1)] border border-gray-100/50 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4a7c24] to-[#6da543] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>
              
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#4a7c24]/5 rounded-full blur-2xl group-hover:bg-[#4a7c24]/10 transition-colors duration-500 z-0"></div>

              <div className="mb-6 relative z-10 flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-[#4a7c24]/10 text-[#4a7c24] rounded-md text-xs font-bold tracking-widest uppercase">
                  Our Mission
                </span>
                <div className="w-8 h-8 rounded-full bg-[#4a7c24]/10 flex items-center justify-center text-[#4a7c24] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-4 leading-tight relative z-10">
                To empower organizations across sectors by creating communication that increases visibility, builds credibility, and drives sustainable business growth.
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-auto relative z-10 font-light">
                We exist to bridge the distance between what businesses offer and what their audiences understand. Every strategy we build, every campaign we execute, and every story we tell is guided by this purpose.
              </p>
            </div>
          </AnimatedText>

          {/* Vision Card */}
          <AnimatedText delay={0.3}>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(74,124,36,0.1)] border border-gray-100/50 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
              
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4a7c24] to-[#6da543] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>

              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#4a7c24]/5 rounded-full blur-2xl group-hover:bg-[#4a7c24]/10 transition-colors duration-500 z-0"></div>
              
              <div className="mb-6 relative z-10 flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-[#4a7c24]/10 text-[#4a7c24] rounded-md text-xs font-bold tracking-widest uppercase">
                  Our Vision
                </span>
                <div className="w-8 h-8 rounded-full bg-[#4a7c24]/10 flex items-center justify-center text-[#4a7c24] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-4 leading-tight relative z-10">
                To be India&apos;s most trusted brand consulting and corporate communication agency, recognized for transforming businesses through strategic thinking and creative excellence.
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-auto relative z-10 font-light">
                We envision a future where innovative ideas find their audiences without friction, where brands communicate with honesty and purpose, and where the divide between Bharat and India in business communication no longer exists.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
