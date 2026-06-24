import AnimatedText from '../AnimatedText';

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Mission Card */}
          <AnimatedText delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md border border-gray-100 h-full flex flex-col relative overflow-hidden transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#4a7c24] transition-colors duration-300"></div>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#4a7c24]/10 text-[#4a7c24] rounded-md text-xs font-bold tracking-wider uppercase">
                  Our Mission
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-6 leading-relaxed">
                To empower organizations across sectors by creating communication that increases visibility, builds credibility, and drives sustainable business growth.
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm mt-auto">
                We exist to bridge the distance between what businesses offer and what their audiences understand. Every strategy we build, every campaign we execute, and every story we tell is guided by this purpose.
              </p>
            </div>
          </AnimatedText>

          {/* Vision Card */}
          <AnimatedText delay={0.3}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md border border-gray-100 h-full flex flex-col relative overflow-hidden transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#4a7c24] transition-colors duration-300"></div>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#4a7c24]/10 text-[#4a7c24] rounded-md text-xs font-bold tracking-wider uppercase">
                  Our Vision
                </span>
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-6 leading-relaxed">
                To be India&apos;s most trusted brand consulting and corporate communication agency, recognized for transforming businesses through strategic thinking and creative excellence.
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm mt-auto">
                We envision a future where innovative ideas find their audiences without friction, where brands communicate with honesty and purpose, and where the divide between Bharat and India in business communication no longer exists.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
