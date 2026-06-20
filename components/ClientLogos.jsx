export default function ClientLogos() {
  const placeholderLogos = Array(6).fill("");

  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center mb-16">
        <div className="text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Brands That Trust Us
          </h2>
          <p className="text-lg text-gray-600">
            We are proud to work with industry leaders, government institutions, and innovative businesses across India.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[100vw] overflow-hidden relative">
        {/* Simple fade edges for desktop */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>

        {/* Row 1: Agriculture */}
        <div className="flex gap-8 px-4 w-max animate-scroll">
          {placeholderLogos.map((_, i) => (
             <div key={`agri1-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Agri Logo {i+1}</span>
             </div>
          ))}
          {placeholderLogos.map((_, i) => (
             <div key={`agri2-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Agri Logo {i+1}</span>
             </div>
          ))}
        </div>

        {/* Row 2: Corporate */}
        <div className="flex gap-8 px-4 w-max animate-scroll-reverse">
          {placeholderLogos.map((_, i) => (
             <div key={`corp1-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Corp Logo {i+1}</span>
             </div>
          ))}
          {placeholderLogos.map((_, i) => (
             <div key={`corp2-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Corp Logo {i+1}</span>
             </div>
          ))}
        </div>

        {/* Row 3: Government */}
        <div className="flex gap-8 px-4 w-max animate-scroll">
          {placeholderLogos.map((_, i) => (
             <div key={`gov1-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Gov Logo {i+1}</span>
             </div>
          ))}
          {placeholderLogos.map((_, i) => (
             <div key={`gov2-${i}`} className="w-48 h-20 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-sm font-medium text-gray-400">Gov Logo {i+1}</span>
             </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll 35s linear infinite reverse;
        }
        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
