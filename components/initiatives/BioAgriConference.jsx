import AnimatedText from '../AnimatedText';

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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2">
              Bio-Agri Next Global Conference
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
          <div className="hidden lg:flex lg:col-span-5 relative w-full justify-center order-1 lg:order-2">
            <AnimatedText delay={0.2} direction="right" className="w-full max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-3xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden group">
                {/* Subtle ambient light */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl" />

                {/* Top Row: Global Flag */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">Global Platform</span>
                  <span className="text-[10px] text-gray-400 font-light flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Connect
                  </span>
                </div>

                {/* Center Globe/Global Network Graphic */}
                <div className="relative z-10 my-auto py-6 flex justify-center items-center">
                  <div className="w-full max-w-[220px] aspect-square relative flex items-center justify-center">
                    <svg className="w-full h-full text-white/[0.08]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                      {/* Concentric circles */}
                      <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="30" />
                      <circle cx="50" cy="50" r="20" strokeDasharray="1 3" />
                      
                      {/* Diagonal axes */}
                      <line x1="10" y1="50" x2="90" y2="50" />
                      <line x1="50" y1="10" x2="50" y2="90" />
                      <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" strokeDasharray="4 2" />
                      <line x1="78.3" y1="21.7" x2="21.7" y2="78.3" strokeDasharray="4 2" />
                      
                      {/* Muted white nodes */}
                      <circle cx="50" cy="10" r="2" fill="#fff" fillOpacity="0.4" />
                      <circle cx="90" cy="50" r="2" fill="#fff" fillOpacity="0.4" />
                      <circle cx="50" cy="90" r="1.5" fill="#fff" fillOpacity="0.3" />
                      <circle cx="21.7" cy="21.7" r="2" fill="#fff" fillOpacity="0.4" />
                      <circle cx="78.3" cy="78.3" r="2" fill="#fff" fillOpacity="0.4" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-2">
                      <span className="text-[2rem] font-serif font-bold text-white tracking-tighter">BIO-AGRI</span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest -mt-1">NEXT</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400">
                  <span>International Scope</span>
                  <span className="text-gray-300 font-medium">Science & Policy</span>
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

          <AnimatedText delay={0.5}>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Learn More About Bio-Agri Next
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
