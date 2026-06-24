import AnimatedText from '../AnimatedText';

export default function OurImpact() {
  const stats = [
    { number: "50+", label: "Brands" },
    { number: "100+", label: "Campaigns" },
    { number: "20+", label: "Years" },
    { number: "10+", label: "Sectors" },
    { number: "95%", label: "Retention" },
    { number: "Pan India", label: "Reach" }
  ];

  return (
    <section className="w-full bg-[#6b9b37] py-10 md:py-14 px-6 md:px-8 relative overflow-hidden flex items-center border-y border-[#5f8a31]">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center h-full hover:bg-white/20 transition-colors duration-300 border border-white/10">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                  {stat.number}
                </span>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
