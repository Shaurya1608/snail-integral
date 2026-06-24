import AnimatedText from '../AnimatedText';

export default function HeroAbout() {
  return (
    <section className="relative w-full bg-[#f9fbf7] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedText delay={0.1}>
          <div className="text-sm md:text-base text-gray-500 mb-6 font-medium tracking-wide">
            Home <span className="mx-2">/</span> <span className="text-[#4a7c24]">About Us</span>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-8">
            We Exist to Make Brands Visible, Credible, and <span className="italic text-[#4a7c24]">Impactful</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Snail Integral is a brand consulting and corporate communication agency built on two decades of cross-industry experience. We help organizations across agriculture, corporate, and government sectors communicate with clarity, connect with their audiences, and grow with purpose.
          </p>
        </AnimatedText>
      </div>

      <div className="max-w-6xl mx-auto mt-12 relative z-10 border-t border-gray-200 pt-10">
        <AnimatedText delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "50+", label: "Brands Transformed" },
              { value: "100+", label: "Campaigns Delivered" },
              { value: "10+", label: "Sectors Served" },
              { value: "Pan India", label: "Reach" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-[#4a7c24] mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#4a7c24]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#4a7c24]/5 blur-3xl" />
    </section>
  );
}
