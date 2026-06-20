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
    <section className="w-full bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-20 md:mb-32">
        {/* Left Side: Heading & Intro */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 self-start">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Why Brands Choose Snail Integral
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We do not believe in generic solutions. Every strategy we build is grounded in research, shaped by industry understanding, and executed with creative precision.
          </p>
        </div>

        {/* Right Side: 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col gap-3 relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="w-full bg-primary py-8 overflow-hidden relative flex">
        <div className="flex gap-20 px-10 w-max animate-scroll-stats">
          {stats.map((stat, idx) => (
            <div key={`stat1-${idx}`} className="flex flex-col gap-1 items-center justify-center shrink-0 w-48">
              <span className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.number}</span>
              <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
          {stats.map((stat, idx) => (
            <div key={`stat2-${idx}`} className="flex flex-col gap-1 items-center justify-center shrink-0 w-48">
              <span className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.number}</span>
              <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
          {stats.map((stat, idx) => (
            <div key={`stat3-${idx}`} className="flex flex-col gap-1 items-center justify-center shrink-0 w-48">
              <span className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.number}</span>
              <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollStats {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        .animate-scroll-stats {
          animation: scrollStats 25s linear infinite;
        }
      `}} />
    </section>
  );
}
