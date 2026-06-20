import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <div className="w-full bg-[#f9fbf7]">
      <section className="max-w-7xl mx-auto w-full px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[100dvh] md:h-screen overflow-hidden">
        <div className="flex flex-col gap-8 pr-4 z-10 mt-0 md:-mt-32">
          <AnimatedText delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-[#111]">
              Visibility<br />Matters
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-lg text-gray-800">
              We help brands communicate with clarity, connect with the right audiences, and grow with purpose. From agriculture boardrooms to corporate strategies, Snail Integral builds communication that creates real business impact.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm">
                  Explore Our Services
                </button>
                <button className="px-8 py-3 text-sm font-medium rounded-xl border border-gray-300 hover:border-gray-400 transition-colors bg-white/40 backdrop-blur">
                  Schedule a Consultation
                </button>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-4 border-l-2 border-primary pl-3">
                Trusted by 50+ brands across agriculture, corporate, and government sectors in India.
              </p>
            </div>
          </AnimatedText>
        </div>
        
        {/* Animated Masonry Grid */}
        <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[80vh] overflow-hidden relative" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
          
          {/* Column 1: Scrolling Down */}
          <div className="flex flex-col gap-4 h-max animate-scroll-down relative">
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-[#d2d9c8] rounded-2xl h-[200px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-1.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#e4e9dd] rounded-2xl h-[300px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-2.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#d2d9c8] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-3.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
            {/* Duplicate for loop */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-[#d2d9c8] rounded-2xl h-[200px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-1.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#e4e9dd] rounded-2xl h-[300px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-2.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#d2d9c8] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-3.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Scrolling Up */}
          <div className="flex flex-col gap-4 h-max animate-scroll-up relative pt-12">
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-[#e4e9dd] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-4.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#d2d9c8] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                 <div className="absolute inset-0 bg-[url('/LandingPage/l-image-15.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#e4e9dd] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                 <div className="absolute inset-0 bg-[url('/LandingPage/l-image-1.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
            {/* Duplicate for loop */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-[#e4e9dd] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('/LandingPage/l-image-4.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#d2d9c8] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                 <div className="absolute inset-0 bg-[url('/LandingPage/l-image-15.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="bg-[#e4e9dd] rounded-2xl h-[250px] overflow-hidden relative shadow-sm">
                 <div className="absolute inset-0 bg-[url('/LandingPage/l-image-1.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollDown {
            0% { transform: translateY(calc(-50% - 8px)); }
            100% { transform: translateY(0); }
          }
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(calc(-50% - 8px)); }
          }
          .animate-scroll-down {
            animation: scrollDown 20s linear infinite;
          }
          .animate-scroll-up {
            animation: scrollUp 20s linear infinite;
          }
        `}} />
      </section>
    </div>
  );
}
