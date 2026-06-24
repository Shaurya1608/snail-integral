import AnimatedText from '../AnimatedText';

export default function OurStory() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/2">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl md:text-2xl text-[#4a7c24] font-medium mb-10 leading-snug">
              From a focused communication agency to one of India&apos;s trusted multi-sector brand consulting firms.
            </p>
          </AnimatedText>

          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <AnimatedText delay={0.2}>
              <p>
                Snail Integral was founded with a clear and urgent observation. Across India&apos;s business landscape, a persistent gap existed between innovation and adoption. Breakthrough research developed in laboratories rarely reached the farmers who needed it. Corporate initiatives built with genuine intent often failed to connect with the stakeholders they were meant for. Government programs designed to transform lives struggled to reach the communities they were built to serve. The missing link in every case was the same: effective, strategic communication.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.3}>
              <p>
                We started as a dedicated agricultural and rural communication agency because that gap was most visible and most consequential there. India&apos;s farming sector, responsible for the livelihoods of hundreds of millions of people, was being underserved by communication that was either too technical to be understood or too generic to be trusted. We built Snail Integral to change that. Our founding mission was straightforward: close the adoption gap through communication that is culturally relevant, strategically sound, and built on genuine industry knowledge.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <p>
                Over the years, as our work deepened and our understanding of business communication broadened, we expanded into corporate, manufacturing, FMCG, technology, and government sectors. The problems were different but the underlying need was identical. Every organization, regardless of sector, needed someone who could translate their value into language their audience would understand, trust, and act upon.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.5}>
              <p>
                Today, Snail Integral operates as a full-service brand consulting and corporate communication agency. We have worked with more than 50 brands, executed over 100 campaigns across the country, and built lasting partnerships that have stretched across years and multiple mandates. Our team brings together expertise in brand strategy, public relations, digital marketing, creative production, business consulting, and event management under one roof. We work with the same founding conviction we started with: that the right communication, delivered to the right audience at the right time, is the most powerful growth tool any business can deploy.
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[500px] lg:h-auto min-h-[600px] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* Visual representation or timeline could go here. For now using a clean abstract brand colored visual placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c24]/10 to-[#4a7c24]/30" />
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/40 backdrop-blur-md" />
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#4a7c24]/20 backdrop-blur-md" />
            <div className="z-10 text-center px-8">
               <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-[#4a7c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               </div>
               <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Bridging the Gap</h3>
               <p className="text-gray-700 font-medium">Through strategic communication</p>
            </div>
        </div>
      </div>
    </section>
  );
}
