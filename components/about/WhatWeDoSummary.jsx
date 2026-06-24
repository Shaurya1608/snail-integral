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
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <AnimatedText delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We design and deliver integrated communication solutions built for the specific realities of the sectors we serve. Our work spans five core practice areas, each supported by a dedicated team and a proven methodology.
            </p>
          </div>
        </AnimatedText>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x no-scrollbar md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:snap-none">
          {pillars.map((pillar, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="min-w-[280px] md:min-w-0 flex flex-col snap-start">
                <div className="h-1 w-full bg-[#4a7c24] mb-6 rounded-full opacity-30"></div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-4 pr-4">
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
          <div className="mt-16 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-gray-900 text-white hover:bg-[#4a7c24] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              See Our Full Range of Services
            </Link>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
