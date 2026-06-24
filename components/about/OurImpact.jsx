import AnimatedText from '../AnimatedText';

export default function OurImpact() {
  const stats = [
    { number: "50+", label: "Brands", desc: "successfully consulted and transformed across India." },
    { number: "100+", label: "Campaigns", desc: "planned and executed from concept to delivery." },
    { number: "20+", label: "Years", desc: "of continuous operation and industry experience." },
    { number: "10+", label: "Sectors", desc: "served with dedicated expertise and research." },
    { number: "95%", label: "Retention", desc: "Client retention rate reflecting the trust our partners place in us." },
    { number: "Pan India", label: "Reach", desc: "across 28 states through campaigns, events, and media coverage." }
  ];

  return (
    <section className="w-full bg-[#111827] py-20 md:py-28 px-6 md:px-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a7c24] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4a7c24] rounded-full blur-[150px] opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedText delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We measure success by the outcomes our clients achieve. These numbers reflect the depth and breadth of what we have built together over two decades.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="flex flex-col border-l border-white/10 pl-6 py-2">
                <span className="text-5xl md:text-6xl font-bold text-[#a6d87f] mb-2">{stat.number}</span>
                <span className="text-xl font-semibold text-white mb-3">{stat.label}</span>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{stat.desc}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
