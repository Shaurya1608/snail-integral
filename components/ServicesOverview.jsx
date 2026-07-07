"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import AnimatedText from './AnimatedText';

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      title: "Brand Consulting",
      tagline: "Building brands that stand the test of time.",
      description: "We help businesses develop brand identities, positioning strategies, and communication frameworks that create sustainable growth.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Corporate Communication",
      tagline: "Where strategy meets stakeholder engagement.",
      description: "We design and execute corporate communication strategies that build reputation, manage complexity, and strengthen business relationships.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    },
    {
      title: "Public Relations",
      tagline: "Turning your brand story into trusted conversations.",
      description: "We craft PR strategies that secure meaningful media coverage and position your brand as a credible voice in your industry.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
    },
    {
      title: "Digital and Social Media",
      tagline: "Data-driven strategy, creativity-powered results.",
      description: "We create digital ecosystems that engage audiences, build communities, and convert attention into real business outcomes.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      title: "Video Production",
      tagline: "Stories that move hearts, minds, and markets.",
      description: "From TVCs to corporate films and 2D or 3D animations, we bring your brand story to life across every screen.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    },
    {
      title: "SEO and PPC Optimization",
      tagline: "Be found by the right people at the right time.",
      description: "We build performance-focused digital strategies that drive qualified traffic, improve search visibility, and deliver measurable ROI.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
      title: "Event Management",
      tagline: "Experiences that leave a lasting impression.",
      description: "From product launches to industry summits and award ceremonies, we design and deliver events that amplify your brand presence.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    {
      title: "Business Consulting",
      tagline: "Turning challenges into strategic opportunities.",
      description: "We work with businesses to enter new markets, improve profitability, and build data-driven strategies for long-term competitive advantage.",
      icon: <svg className="w-8 h-8 text-primary mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector('.snap-start')?.clientWidth || 300;
    const gap = 24; // gap-6 is 24px
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    if (index >= 0 && index < services.length) {
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector('.snap-start')?.clientWidth || 300;
    const gap = 24;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section id="services" className="w-full bg-[#f9fbf7] py-10 md:py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16 px-4">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              What We Do
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600">
              We offer an integrated range of brand and communication services designed to drive growth at every stage of your business.
            </p>
          </AnimatedText>
        </div>

        {/* Mobile Horizontal Scroll / Desktop 4-Col Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar px-4 md:px-0 scroll-smooth"
        >
          {services.map((service, index) => (
            <AnimatedText key={index} delay={0.1 + (index % 4) * 0.1} duration={0.4} className="flex-shrink-0 w-[78vw] sm:w-[320px] md:w-auto snap-start flex">
              <div 
                className="bg-white border border-gray-100 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden h-full w-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col gap-2 flex-grow mt-2">
                  {service.icon}
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
                <Link href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-primary transition-colors mt-3">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* Pagination Dots for Mobile/Tablet */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-6 bg-primary' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <Link href="/services" className="px-8 py-3.5 text-sm font-semibold rounded-full bg-[#6a9a38] text-white hover:bg-[#557d2a] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 group">
            View All Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </AnimatedText>
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
