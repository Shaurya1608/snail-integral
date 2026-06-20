import AnimatedText from './AnimatedText';

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Agriculture and Agribusiness",
      description: "From agri-input companies to farm-tech startups, we build communication that connects innovation with adoption across rural India.",
    },
    {
      title: "Corporate and B2B",
      description: "We help enterprises and B2B organizations build brand authority, manage stakeholder communication, and drive measurable growth.",
    },
    {
      title: "Manufacturing and Industrial",
      description: "Strategic communication for manufacturing companies, industrial enterprises, and supply chain businesses looking to strengthen their market position.",
    },
    {
      title: "FMCG and Consumer Brands",
      description: "We build consumer-facing brands that connect emotionally and create lasting market share across urban and rural India.",
    },
    {
      title: "Government and Public Institutions",
      description: "Communication strategies for government programs, policy campaigns, educational institutions, and public sector organizations.",
    },
    {
      title: "Technology and Startups",
      description: "We help tech companies and startups build visibility, earn credibility with investors, and accelerate market adoption through smart positioning.",
    }
  ];

  return (
    <section className="w-full bg-[#fcfdfa] py-16 md:py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-12">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Industries We Serve
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-base text-gray-600">
              We bring focused expertise to every sector we work in, understanding its unique challenges and communication needs.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10 max-w-6xl">
          {industries.map((industry, index) => (
            <AnimatedText key={index} delay={0.1 + index * 0.1} duration={0.4}>
              <div 
                className="bg-white border border-gray-100 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col gap-2 group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/10 group-hover:bg-primary transition-colors duration-300"></div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors pl-3">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-3 mt-1 flex-grow">
                  {industry.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <button className="px-8 py-3 text-sm font-medium rounded-xl border border-gray-300 hover:border-gray-400 text-gray-800 transition-colors bg-white shadow-sm inline-flex items-center gap-2">
            Discover How We Can Help Your Industry
          </button>
        </AnimatedText>
      </div>
    </section>
  );
}
