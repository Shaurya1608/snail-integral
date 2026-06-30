import AnimatedText from '../AnimatedText';

export default function HowWeAreStructured() {
  return (
    <section className="bg-white border-y border-gray-150/50 py-20 md:py-28 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Highlights */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <AnimatedText delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
                OUR STRUCTURE
              </span>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Four Pillars, One Unified Strategy
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <div className="h-[3px] w-12 bg-primary mb-8" />
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <div className="bg-white border border-gray-150/40 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  We bridge the gap between complex business challenges and creative execution through a seamless, collaborative approach across four core practices.
                </p>
              </div>
            </AnimatedText>
          </div>

          {/* Right Column: Paragraphs with Styled Checkmarks */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedText delay={0.2}>
              <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  Our services are organized into four practice areas, each representing a distinct discipline of communication and business strategy. Within each practice area, our teams bring specialized expertise combined with a shared understanding of how all four disciplines connect to deliver integrated results for our clients.
                </p>
                <p>
                  We work with clients across agriculture, corporate, FMCG, manufacturing, government, and technology sectors. While our methods are adapted to each sector, our standard of delivery remains consistent. Every engagement begins with understanding your business objectives and ends with outcomes that are measurable, defensible, and aligned with your growth goals.
                </p>
              </div>
            </AnimatedText>

            {/* Core Tenets list */}
            <AnimatedText delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-150/50">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">Integrated Mandate</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Single partner for strategy, creative, digital, and PR.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">Measurable Impact</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Objectives aligned with your business growth KPIs.</p>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="bg-[#6a9a38]/5 border-l-4 border-primary rounded-r-xl p-5 mt-8">
                <p className="text-gray-900 text-xs md:text-sm font-semibold leading-relaxed">
                  Whether you need a single service or a fully integrated mandate across all four pillars, Snail Integral has the team, the experience, and the infrastructure to deliver it.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
