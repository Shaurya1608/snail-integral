import AnimatedText from './AnimatedText';

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Agriculture & Agribusiness",
      description: "From agri-input companies to farm-tech startups, we build communication that connects innovation with adoption across rural India.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
    },
    {
      title: "Corporate & B2B",
      description: "We help enterprises and B2B organizations build brand authority, manage stakeholder communication, and drive measurable growth.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    },
    {
      title: "Manufacturing & Industrial",
      description: "Strategic communication for manufacturing companies, industrial enterprises, and supply chain businesses looking to strengthen their market position.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
    },
    {
      title: "FMCG & Consumer Brands",
      description: "We build consumer-facing brands that connect emotionally and create lasting market share across urban and rural India.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    },
    {
      title: "Government & Public Institutions",
      description: "Communication strategies for government programs, policy campaigns, educational institutions, and public sector organizations.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
    },
    {
      title: "Technology & Startups",
      description: "We help tech companies and startups build visibility, earn credibility with investors, and accelerate market adoption through smart positioning.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.82-13.04L14 3l8 8-4 1.18A22 22 0 0 1 12 15z"/><path d="m9 15-3 3"/><path d="m12 12 3 3"/></svg>
    }
  ];

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-16 md:pb-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Industries We Serve
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600">
              We bring focused expertise to every sector we work in, understanding its unique challenges and communication needs.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mb-14 max-w-6xl">
          {industries.map((industry, index) => (
            <AnimatedText key={index} delay={0.1 + index * 0.1} duration={0.5}>
              <div 
                className="bg-white border border-gray-100 rounded-2xl py-4 px-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#8ec44a]/5 rounded-full blur-2xl group-hover:bg-[#8ec44a]/10 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#8ec44a]/10 group-hover:text-[#8ec44a] group-hover:border-[#8ec44a]/20 transition-all duration-300 mb-3 shadow-sm group-hover:shadow-md">
                    {industry.icon}
                  </div>
                  
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#6a9a38] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[13px] leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                </div>
                
                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#6a9a38] to-[#8ec44a] group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <button className="px-8 py-3.5 text-sm font-semibold rounded-full bg-[#6a9a38] text-white hover:bg-[#557d2a] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 group">
            Discover How We Can Help Your Industry
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </AnimatedText>
      </div>
    </section>
  );
}
