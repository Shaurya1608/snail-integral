import Link from 'next/link';
import AnimatedText from './AnimatedText';

export default function InitiativesPreview() {
  const initiatives = [
    {
      title: "Brand R.Comm Summit",
      desc: "India's premier agriculture and rural communication summit, bringing together leaders, innovators, and communicators across three successful editions."
    },
    {
      title: "The Snail Show Podcast",
      desc: "In-depth conversations with industry leaders on agriculture, business, and communication. Available on all major platforms."
    },
    {
      title: "Bio-Agri Next Global Conference",
      desc: "A global platform for sustainable agriculture, connecting policymakers, researchers, businesses, and farmers through dialogue and collaboration."
    }
  ];

  return (
    <section id="initiatives" className="relative w-full bg-white text-gray-900 py-20 md:py-32 px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Beyond Client Work
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-base text-gray-600">
              Snail Integral runs industry platforms, publications, and events that contribute to the broader business and agriculture ecosystem in India.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          {initiatives.map((item, index) => (
            <AnimatedText key={index} delay={0.1 + index * 0.1}>
              <div className="group border border-gray-200 bg-white rounded-2xl p-8 hover:border-[#4a7c24]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col gap-4 relative overflow-hidden shadow-sm hover:shadow-xl h-full">
                {/* Subtle background glow effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4a7c24]/5 blur-[40px] group-hover:bg-[#4a7c24]/10 transition-colors duration-500 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#4a7c24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {item.desc}
                </p>
                
                <div className="pt-4 mt-auto border-t border-gray-100 group-hover:border-[#4a7c24]/20 transition-colors">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#4a7c24]/80 group-hover:text-[#4a7c24] transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <Link href="#" className="mt-4 px-8 py-3.5 text-sm font-medium rounded-full border border-gray-300 text-gray-800 hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 shadow-sm inline-flex items-center gap-2 group">
            Explore All Initiatives
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
}
