import AnimatedText from '../AnimatedText';
import Image from 'next/image';

export default function SnailShowNewsletter() {
  const readers = [
    "Marketing & communication leaders in agribusiness",
    "Senior management in agricultural input & output firms",
    "Policy professionals in government departments",
    "Researchers & academics tracking sector trends",
    "Agricultural media & journalism professionals",
    "Entrepreneurs & investors in agri-tech & rural markets"
  ];

  return (
    <section id="snail-show-newsletter" className="w-full bg-white py-16 md:py-24 px-6 md:px-8 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header Centered */}
        <div className="text-center max-w-3xl mb-16">
          <AnimatedText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 font-semibold">
              Initiative 05
            </div>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <div className="flex justify-center mb-5">
              <Image
                src="/initiatives/Snail Show NewsLetter Logo-01.png"
                alt="The Snail Show Newsletter Logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2">
              The Snail Show Newsletter
            </h2>
            <p className="text-primary font-medium text-base md:text-lg tracking-wide mb-6">
              Weekly intelligence from the intersection of agriculture, business, and communication.
            </p>
          </AnimatedText>
          
          {/* Subscription stats badge */}
          <AnimatedText delay={0.25}>
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 w-fit mx-auto shadow-sm">
              <span className="text-xl md:text-2xl font-bold text-[#4a7c24]">5,000+</span>
              <span className="text-[10px] text-gray-500 leading-snug font-medium uppercase tracking-wider text-left">
                Professionals Subscribed<br />
                Across Ag, Corporate & Govt
              </span>
            </div>
          </AnimatedText>
        </div>

        {/* Grid Layout for visual and description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Side: Newsletter Preview Visual */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <AnimatedText delay={0.2} direction="left" className="w-full max-w-[420px]">
              <a 
                href="https://www.linkedin.com/newsletters/the-snailshow-newsletter-7287459818590683136/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-lg relative group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square relative w-full overflow-hidden bg-white p-2">
                  <Image 
                    src="/others/newsletter.jpeg" 
                    alt="The Snail Show Newsletter Preview" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain group-hover:scale-102 transition-transform duration-500" 
                  />
                  {/* Subtle glass overlay banner on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-xs text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Read & Subscribe on LinkedIn
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedText>
          </div>

          {/* Right Side: Text & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Body content */}
            <div className="flex flex-col gap-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <AnimatedText delay={0.3}>
                <p>
                  Information about India's agriculture sector is not scarce. What is scarce is information that has been curated, contextualized, and analyzed by people who understand the sector well enough to separate what matters from what merely happened. The Snail Show Newsletter was created to provide exactly that: a weekly digest of the most significant developments in agriculture, agribusiness, rural policy, and communication, written and edited by a team with genuine sector expertise.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p>
                  Each edition covers the week's most relevant news and developments with editorial commentary that places them in context. The newsletter goes beyond summarizing what occurred to explain why it matters, what the downstream implications are likely to be, and what industry professionals should be watching in the weeks ahead. It also includes analysis of communication trends relevant to the agriculture and rural sector, coverage of significant events and product launches, and profiles of individuals and organizations doing notable work.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <p>
                  The newsletter is written for professionals who are already well-informed about the sector and want editorial intelligence rather than a raw news feed. The editorial standard reflects that audience. Every edition is produced with the same care and rigor that goes into Snail Integral's client work, because the newsletter represents the agency's perspective on its industry and the quality of that perspective is a direct reflection of the agency's credibility.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.45}>
                <p>
                  With over 5000 subscribers across agribusiness companies, government departments, research institutions, agricultural media, and communication agencies, the newsletter has become an established reference point for professionals who want to stay meaningfully informed about where the sector is going without spending hours aggregating information from multiple sources.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>

        {/* Centered Reader demographics & CTA */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-center w-full px-4">
          <AnimatedText delay={0.48} className="w-full">
            <div className="bg-white border border-gray-150 rounded-2xl p-6 mb-10 shadow-sm w-full">
              <h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">
                Who Reads It
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {readers.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs text-gray-500 leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.5}>
            <a 
              href="https://www.linkedin.com/newsletters/the-snailshow-newsletter-7287459818590683136/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Subscribe to the Newsletter
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
