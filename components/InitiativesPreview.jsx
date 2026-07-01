import Link from 'next/link';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function InitiativesPreview() {
  const initiatives = [
    {
      title: "Brand R.Comm Summit",
      desc: "India's premier agriculture and rural communication summit, bringing together leaders, innovators, and communicators across three successful editions.",
      link: "/initiatives#brand-rcomm-summit",
      logo: "/initiatives/Brand R.Comm final logo.png"
    },
    {
      title: "Bio-Agri Next Global Conference",
      desc: "A global platform for sustainable agriculture, connecting policymakers, researchers, businesses, and farmers through dialogue and collaboration.",
      link: "/initiatives#bio-agri-conference",
      logo: "/initiatives/BIO AGRI NEXT LOGO.png"
    },
    {
      title: "The Snail Show Coffee Table Book",
      desc: "A prestigious, large-format visual record documenting the changemakers, innovations, and communities shaping the future of Indian agriculture.",
      link: "/initiatives#coffee-table-book",
      logo: "/initiatives/Snail show CTB logo-01.png"
    },
    {
      title: "The Snail Show Podcast",
      desc: "In-depth conversations with industry leaders on agriculture, business, and communication. Available on all major platforms.",
      link: "/initiatives#snail-show-podcast",
      logo: "/initiatives/Snail Show Podcast Logo-01.png"
    },
    {
      title: "The Snail Show Newsletter",
      desc: "Weekly intelligence digest covering key developments, policy changes, and communication trends at the intersection of agriculture and business.",
      link: "/initiatives#snail-show-newsletter",
      logo: "/initiatives/Snail Show NewsLetter Logo-01.png"
    }
  ];

  return (
    <section id="initiatives" className="relative w-full bg-white text-gray-900 pt-10 md:pt-16 pb-10 md:pb-16 px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Our Initiatives
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-base text-gray-600">
              Snail Integral runs industry platforms, publications, and events that contribute to the broader business and agriculture ecosystem in India.
            </p>
          </AnimatedText>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full mb-10">
          {initiatives.map((item, index) => (
            <AnimatedText 
              key={index} 
              delay={0.1 + index * 0.1}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
            >
              <Link href={item.link} className="w-full group border border-gray-100 bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col relative overflow-hidden z-10">
                {/* Decorative Accent Background */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#6a9a38]/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#6a9a38] to-[#8ec44a] group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                
                {/* Logo */}
                <div className="mb-5 h-12 flex items-center">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={120}
                    height={48}
                    className="object-contain object-left max-h-12 w-auto"
                  />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#6a9a38] transition-colors duration-300 mb-4 mt-auto">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                  {item.desc}
                </p>
                
                <div className="pt-6 mt-6 border-t border-gray-100 group-hover:border-[#6a9a38]/20 transition-colors duration-300 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6a9a38]/80 group-hover:text-[#6a9a38] transition-colors uppercase tracking-wider">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#6a9a38]/10 flex items-center justify-center text-gray-400 group-hover:text-[#6a9a38] transition-colors duration-300">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </Link>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <Link href="/initiatives" className="mt-4 px-8 py-3.5 text-sm font-semibold rounded-full bg-[#6a9a38] text-white hover:bg-[#557d2a] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 group">
            Explore All Initiatives
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
}
