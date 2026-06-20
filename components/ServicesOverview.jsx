import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Consulting",
      tagline: "Building brands that stand the test of time.",
      description: "We help businesses develop brand identities, positioning strategies, and communication frameworks that create sustainable growth."
    },
    {
      title: "Corporate Communication",
      tagline: "Where strategy meets stakeholder engagement.",
      description: "We design and execute corporate communication strategies that build reputation, manage complexity, and strengthen business relationships."
    },
    {
      title: "Public Relations",
      tagline: "Turning your brand story into trusted conversations.",
      description: "We craft PR strategies that secure meaningful media coverage and position your brand as a credible voice in your industry."
    },
    {
      title: "Digital and Social Media",
      tagline: "Data-driven strategy, creativity-powered results.",
      description: "We create digital ecosystems that engage audiences, build communities, and convert attention into real business outcomes."
    },
    {
      title: "Video Production",
      tagline: "Stories that move hearts, minds, and markets.",
      description: "From TVCs to corporate films and 2D or 3D animations, we bring your brand story to life across every screen."
    },
    {
      title: "SEO and PPC Optimization",
      tagline: "Be found by the right people at the right time.",
      description: "We build performance-focused digital strategies that drive qualified traffic, improve search visibility, and deliver measurable ROI."
    },
    {
      title: "Event Management",
      tagline: "Experiences that leave a lasting impression.",
      description: "From product launches to industry summits and award ceremonies, we design and deliver events that amplify your brand presence."
    },
    {
      title: "Business Consulting",
      tagline: "Turning challenges into strategic opportunities.",
      description: "We work with businesses to enter new markets, improve profitability, and build data-driven strategies for long-term competitive advantage."
    }
  ];

  return (
    <section id="services" className="w-full bg-gray-50 py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16 px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600">
            We offer an integrated range of brand and communication services designed to drive growth at every stage of your business.
          </p>
        </div>

        {/* Mobile Horizontal Scroll / Desktop 4-Col Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar px-4 md:px-0">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col gap-3 flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
              <div className="flex flex-col gap-2 flex-grow mt-2">
                <h3 className="font-serif text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary font-medium text-xs tracking-wide">
                  {service.tagline}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-1 line-clamp-3">
                  {service.description}
                </p>
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-primary transition-colors mt-3">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          ))}
        </div>

        <button className="px-8 py-3 text-sm font-medium rounded-xl border border-gray-300 hover:border-gray-400 text-gray-800 transition-colors bg-white shadow-sm inline-flex items-center gap-2">
          View All Services
        </button>
      </div>
      
      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
