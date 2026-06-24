import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function WhatWeDoSummary() {
  const pillars = [
    {
      title: "Strategic Brand Consulting",
      description: "We help organizations define who they are, what they stand for, and how they should communicate that to the world. Brand audits, positioning frameworks, identity development, and long-term brand architecture."
    },
    {
      title: "Corporate Communication",
      description: "We manage the full spectrum of organizational communication including internal messaging, stakeholder engagement, investor relations, crisis communication, and reputation management."
    },
    {
      title: "Digital Marketing and SEO",
      description: "We build and manage digital presences that generate real business outcomes. Social media strategy, content creation, search engine optimization, performance marketing, and website development."
    },
    {
      title: "Public Relations and Media",
      description: "We earn media attention through honest storytelling and strategic media relationships. From trade publications to mainstream coverage, we position our clients as credible voices in their industries."
    },
    {
      title: "Events and Activations",
      description: "We conceptualize and execute brand experiences that create meaningful audience engagement. Product launches, industry conferences, rural outreach programs, and corporate events."
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 border-y border-gray-100">
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We design and deliver integrated communication solutions built for the specific realities of the sectors we serve. Our work spans five core practice areas, each supported by a dedicated team and a proven methodology.
            </p>
          </div>
        </AnimatedText>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="w-full flex-1 min-w-[280px] sm:max-w-[calc(50%-1.5rem)] lg:max-w-[320px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#4a7c24] transition-colors duration-300"></div>
                
                <div className="w-12 h-12 bg-[#4a7c24]/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4a7c24]/10 transition-colors">
                  <span className="text-[#4a7c24] font-serif font-bold text-lg">0{index + 1}</span>
                </div>

                <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.5}>
          <div className="mt-10 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3a621d] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              See Our Full Range of Services
            </Link>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
