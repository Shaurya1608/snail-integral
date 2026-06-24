import AnimatedText from '../AnimatedText';

export default function MissionVision() {
  return (
    <section className="w-full bg-[#f4f7f1] py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <AnimatedText delay={0.2}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border-l-4 border-[#4a7c24] h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <span className="text-sm font-bold tracking-widest uppercase text-[#4a7c24] mb-4 block">Our Mission</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                To empower organizations across sectors by creating communication that increases visibility, builds credibility, and drives sustainable business growth.
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mt-auto">
                We exist to bridge the distance between what businesses offer and what their audiences understand. Every strategy we build, every campaign we execute, and every story we tell is guided by this purpose.
              </p>
            </div>
          </AnimatedText>

          {/* Vision Card */}
          <AnimatedText delay={0.3}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border-l-4 border-[#4a7c24] h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <span className="text-sm font-bold tracking-widest uppercase text-[#4a7c24] mb-4 block">Our Vision</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                To be India&apos;s most trusted brand consulting and corporate communication agency, recognized for transforming businesses through strategic thinking and creative excellence.
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mt-auto">
                We envision a future where innovative ideas find their audiences without friction, where brands communicate with honesty and purpose, and where the divide between Bharat and India in business communication no longer exists.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
