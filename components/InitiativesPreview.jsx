import Link from 'next/link';

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
    <section id="initiatives" className="relative w-full bg-[#0a0a0a] text-white py-20 md:py-32 px-8 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Beyond Client Work
          </h2>
          <p className="text-base text-gray-400">
            Snail Integral runs industry platforms, publications, and events that contribute to the broader business and agriculture ecosystem in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          {initiatives.map((item, index) => (
            <div 
              key={index} 
              className="group backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 flex flex-col gap-4 relative overflow-hidden shadow-2xl"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/30 transition-colors duration-500 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                {item.desc}
              </p>
              
              <div className="pt-4 mt-auto border-t border-white/10 group-hover:border-primary/20 transition-colors">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link href="#" className="mt-4 px-8 py-3.5 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 shadow-lg inline-flex items-center gap-2 group">
          Explore All Initiatives
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>
    </section>
  );
}
