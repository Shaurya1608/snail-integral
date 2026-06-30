import AnimatedText from '../AnimatedText';
import Image from 'next/image';

export default function HeroAbout() {
  return (
    <section className="relative w-full bg-[#f9fbf7] min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-8 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-multiply">
        <Image 
          src="/LandingPage/sn2.png" 
          alt="Snail Integral Background" 
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9fbf7]/80 via-transparent to-[#f9fbf7]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Heading with elegant gradient accents */}
        <AnimatedText delay={0.15}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
            We Exist to Make Brands <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-[#4a7c24]">Visible</span>, <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-[#4a7c24]">Credible</span>, and <span className="italic font-serif text-[#4a7c24]">Impactful</span>
          </h1>
        </AnimatedText>

        {/* Supporting description */}
        <AnimatedText delay={0.25}>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            Snail Integral is a brand consulting and corporate communication agency built on two decades of cross-industry experience. We help organizations across agriculture, corporate, and government sectors communicate with clarity, connect with their audiences, and grow with purpose.
          </p>
        </AnimatedText>

        {/* Sector Pillars Badges */}
        <AnimatedText delay={0.35}>
          <div className="flex flex-col items-center gap-4 mt-4 pt-8 border-t border-gray-200/50 w-full max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Our Sectors of Excellence</span>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['Agriculture & Rural', 'Corporate & Tech', 'Government Initiatives', 'FMCG & Consumer'].map((sector) => (
                <span 
                  key={sector} 
                  className="px-4 py-2 rounded-xl bg-white/70 border border-gray-200/80 text-gray-700 text-xs font-semibold shadow-xs backdrop-blur-xs hover:border-[#4a7c24]/30 hover:bg-[#4a7c24]/5 hover:text-[#4a7c24] transition-all duration-300"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </AnimatedText>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <div className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center pt-1.5 shadow-2xs bg-white/30 backdrop-blur-2xs">
          <div className="w-1 h-2 rounded-full bg-[#4a7c24] animate-bounce" />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4a7c24]/8 to-amber-500/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#4a7c24]/8 to-lime-500/4 blur-3xl pointer-events-none" />
    </section>
  );
}
