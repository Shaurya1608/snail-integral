import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function HeroServices() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#f9fbf7] border-b border-gray-150/30">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Soft abstract blur glows for visual premium feel */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#8ec44a]/5 blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex flex-col items-center justify-center text-center mt-12">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <AnimatedText delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Integrated Communication Services Built for Business Growth
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.3}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              At Snail Integral, we offer a complete range of brand consulting, communication, digital, and creative services designed to help businesses across sectors communicate better, reach farther, and grow faster. Every service we provide is backed by strategy, executed with precision, and measured against outcomes that matter.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Schedule a Consultation
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full border-2 border-primary/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/40 animate-scroll-dot" />
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-scroll-dot {
          animation: scrollDot 1.8s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
