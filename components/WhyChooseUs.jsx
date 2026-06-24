import AnimatedText from './AnimatedText';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Two Decades of Experience",
      desc: "Over 20 years of working across diverse industries has given us the depth to navigate complex communication challenges."
    },
    {
      title: "Integrated Under One Roof",
      desc: "From strategy to execution, every service is managed in-house for consistent messaging and seamless delivery."
    },
    {
      title: "Data-Driven Strategy",
      desc: "Every recommendation is backed by audience research, market analysis, and performance data."
    },
    {
      title: "Multi-Sector Expertise",
      desc: "We bring genuine knowledge of agriculture, corporate, government, and consumer sectors, not surface-level familiarity."
    },
    {
      title: "Measurable Results",
      desc: "We set clear KPIs, track progress transparently, and report on outcomes that actually matter to your business."
    },
    {
      title: "Long-Term Partnership",
      desc: "We invest in your sustained success. Most of our clients have been with us for years, not just campaigns."
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "50+", label: "Brands Served" },
    { number: "100+", label: "Campaigns Executed" },
    { number: "10+", label: "Sectors" },
    { number: "95%", label: "Client Retention" }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] pt-10 md:pt-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-20 md:mb-32">
        {/* Left Side: Heading & Intro */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 self-start">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Why Brands Choose Snail Integral
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              We do not believe in generic solutions. Every strategy we build is grounded in research, shaped by industry understanding, and executed with creative precision.
            </p>
          </AnimatedText>
        </div>

        {/* Right Side: 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {points.map((point, idx) => (
            <AnimatedText key={idx} delay={0.1 + (idx % 2) * 0.1}>
              <div className="flex flex-col gap-3 relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="w-full bg-primary py-8 md:py-10 mt-10 lg:mt-0 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={`stat-${idx}`} 
                className={`flex flex-col gap-2 items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">{stat.number}</span>
                <span className="text-white/80 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-center mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
