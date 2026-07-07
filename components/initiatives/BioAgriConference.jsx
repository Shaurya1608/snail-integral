import AnimatedText from '../AnimatedText';
import Image from 'next/image';
import Link from 'next/link';

export default function BioAgriConference() {
  const focusAreas = [
    "Biological solutions for crop protection and nutrition",
    "Sustainable soil health and regenerative agriculture",
    "Regulatory frameworks for bio-input registration",
    "Economics of biological product adoption at scale",
    "Climate resilience through biological approaches",
    "International trade and business development"
  ];

  const audiences = [
    "Agricultural scientists & researchers",
    "Agri-input company leadership",
    "Policymakers & regulatory officials",
    "International agriculture organizations",
    "Impact investors & venture capital",
    "Farmer Producer Organizations (FPOs)"
  ];

  return (
    <section id="bio-agri-conference" className="w-full bg-white py-16 md:py-24 px-6 md:px-8 overflow-hidden border-t border-b border-gray-150/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header Centered */}
        <div className="text-center max-w-3xl mb-16">
          <AnimatedText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Initiative 02
            </div>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <div className="flex justify-center mb-5">
              <Image
                src="/initiatives/BIO AGRI NEXT LOGO.png"
                alt="Bio-Agri Next Global Conference Logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2">
              Bio-Agri Next Global Conference & Expo
            </h2>
            <p className="text-primary font-medium text-base md:text-lg tracking-wide">
              Where sustainable agriculture meets global collaboration.
            </p>
          </AnimatedText>
        </div>

        {/* Grid Layout for visual and body description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            {/* Body content */}
            <div className="flex flex-col gap-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <AnimatedText delay={0.25}>
                <p>
                  India stands at a defining moment in its agricultural history. The pressure to increase productivity while reducing the environmental cost of farming has never been more acute. Biological solutions, which include bio-stimulants, bio-pesticides, bio-fertilizers, and other microbial and natural input technologies, represent one of the most promising pathways toward an agriculture that is both more productive and more sustainable. But realizing that potential requires something that the sector currently lacks: a dedicated global platform where the science, the policy, the business, and the farmer perspective can all be brought into the same conversation.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p>
                  The Bio-Agri Next Global Conference was conceived and organized by Snail Integral to create that platform. It brings together agricultural scientists, policymakers, agri-input companies, international researchers, farmer representatives, and investment professionals to explore the current state and future potential of biological solutions in Indian and global agriculture.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p>
                  The conference is structured around the understanding that sustainable agriculture adoption requires progress on multiple fronts simultaneously. The science must be validated and communicated clearly. The regulatory environment must be navigated and influenced constructively. The economics must make sense for farmers at the field level. The supply chain must be capable of delivering quality products at scale. And the communication between all of these stakeholders must be honest, evidence-based, and oriented toward practical outcomes rather than advocacy positions.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <p>
                  Bio-Agri Next creates the space for that multidimensional conversation. It is designed to be genuinely useful to everyone who attends, whether they come as a scientist seeking peer feedback, a company seeking regulatory clarity, an investor seeking market intelligence, or a farmer representative seeking to ensure that the conversation about sustainable agriculture includes the people it most directly affects.
                </p>
              </AnimatedText>
            </div>
          </div>

          {/* Right Side: Visual Representation */}
          <div className="flex lg:col-span-5 relative w-full justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <AnimatedText delay={0.2} direction="right" className="w-full max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-3xl border border-gray-200/20 p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden group">
                <Image 
                  src="/others/b2-02.png" 
                  alt="Bio-Agri Next Global Conference" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                {/* Subtle ambient light */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl" />

                {/* Top Row: Global Flag */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4 drop-shadow-md">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/90">Global Platform</span>
                  <span className="text-[10px] text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Connect
                  </span>
                </div>

                {/* Branding Graphic Pushed to Bottom */}
                <div className="relative z-10 mt-auto pb-6">
                  <div className="text-4xl md:text-5xl font-serif font-extrabold leading-none text-white tracking-tighter mb-1 drop-shadow-md">
                    BIO-AGRI
                  </div>
                  <div className="font-serif text-lg font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">
                    NEXT
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-4 border-t border-white/20 flex justify-between items-center text-[10px] text-white/80 drop-shadow-sm">
                  <span>International Scope</span>
                  <span className="text-white font-medium drop-shadow-sm">Science & Policy</span>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>

        {/* Centered Key Focus Areas & CTA */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-center w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-10 mb-10 w-full">
            <AnimatedText delay={0.45} className="w-full">
              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm h-full">
                <h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">Key Focus Areas</h4>
                <ul className="space-y-2 text-xs text-gray-500">
                  {focusAreas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.48} className="w-full">
              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm h-full">
                <h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">Audience</h4>
                <ul className="space-y-2 text-xs text-gray-500">
                  {audiences.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.5} className="w-full mt-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={process.env.NEXT_PUBLIC_BIO_AGRI_URL || "https://bio-agri.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Visit Bio-Agri Next Website
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-white border-2 border-primary text-primary hover:bg-primary/5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Be Part of Bio-Agri Next 2027 - Season 3
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </AnimatedText>

        </div>

      </div>
    </section>
  );
}
