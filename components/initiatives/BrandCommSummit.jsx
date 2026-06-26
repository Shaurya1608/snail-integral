import AnimatedText from '../AnimatedText';

export default function BrandCommSummit() {
  const seasons = [
    { label: "Season 1", status: "Completed" },
    { label: "Season 2", status: "Completed" },
    { label: "Season 3", status: "Completed" }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header Centered */}
        <div className="text-center max-w-3xl mb-16">
          <AnimatedText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Initiative 01
            </div>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2">
              Brand R.Comm Summit
            </h2>
            <p className="text-primary font-medium text-base md:text-lg tracking-wide">
              India's platform for agriculture and rural communication excellence.
            </p>
          </AnimatedText>
        </div>

        {/* Grid Layout for visual and body description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Side: Visual Representation */}
          <div className="hidden lg:flex lg:col-span-5 relative w-full justify-center">
            <AnimatedText delay={0.2} direction="left" className="w-full max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-3xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden group">
                {/* Subtle ambient light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                {/* Top Row: Brand Label */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">Flagship Platform</span>
                  <span className="bg-white/10 text-white border border-white/15 text-[9px] font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    Established
                  </span>
                </div>

                {/* Center Branding Graphic */}
                <div className="relative z-10 my-auto py-8">
                  <div className="text-[3.5rem] md:text-[4rem] font-serif font-extrabold leading-none text-white tracking-tighter mb-1">
                    R.COMM
                  </div>
                  <div className="font-serif text-xl font-light text-gray-400 uppercase tracking-widest mb-4">
                    SUMMIT
                  </div>
                  <div className="w-8 h-[1px] bg-gray-500 mb-4" />
                  <p className="text-[11px] text-gray-400 max-w-[280px] leading-relaxed font-light">
                    India's premier summit dedicated to excellence in agricultural and rural communication.
                  </p>
                </div>

                {/* Bottom Row: Seasons completed badges */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {seasons.map((season, i) => (
                    <div 
                      key={i} 
                      className="flex-1 min-w-[70px] bg-white/[0.03] border border-white/10 rounded-lg p-2 text-center"
                    >
                      <div className="text-[9px] font-medium text-gray-500 uppercase">{season.label}</div>
                      <div className="text-xs font-semibold text-gray-300 mt-0.5">{season.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Body content */}
            <div className="flex flex-col gap-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <AnimatedText delay={0.25}>
                <p>
                  The Brand R.Comm Summit was created to address a gap that Snail Integral had observed throughout its years of working in the agriculture and rural sector. Communication, advertising, and marketing professionals working in agricultural and rural contexts were doing some of the most challenging and innovative work in the Indian industry, and yet there was no dedicated platform that brought them together, recognized their contributions, and facilitated the kind of peer knowledge exchange that professionals in other sectors took for granted.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p>
                  The summit was designed to fill that gap. It brings together communication professionals, agribusiness leaders, marketing practitioners, rural development experts, government representatives, and media professionals for a focused one-day program built around knowledge sharing, industry dialogue, and the recognition of excellence in agriculture and rural communication.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p>
                  The agenda at each edition of the Brand R.Comm Summit reflects the most pressing questions in the sector at the time. Sessions have covered the evolution of digital communication in rural India, the challenge of building brand trust with farming audiences, the role of regional language media in agricultural communication, the future of agri-tech brand building, and the intersection of government communication and private sector marketing in rural development programs.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <p>
                  Over three editions, the summit has built a reputation as a serious and substantive professional forum. It has attracted participation from some of India's most recognized names in agriculture business and communication, and it has created a community of practitioners who continue to connect, collaborate, and refer to the conversations the summit started long after each edition concludes.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>

        {/* Centered Key Details & CTA Button */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-center w-full px-4">
          <AnimatedText delay={0.45} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-150 pt-10 mb-10 w-full">
              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm">
                <h4 className="font-serif text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Format</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Single day conference with keynote sessions, panel discussions, and a dedicated awards segment recognizing excellence in agriculture and rural communication.
                </p>
              </div>
              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm">
                <h4 className="font-serif text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Audience</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Senior marketing and communication professionals from agribusiness companies, specializing agencies, rural development organizations, and government departments.
                </p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.5}>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Register Your Interest for the Next Edition
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
