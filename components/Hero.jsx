export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto w-full px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[100dvh] md:h-screen">
      <div className="flex flex-col gap-8 pr-4 z-10">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-[#111]">
          Visibility<br />Matters
        </h1>
        <p className="text-lg text-gray-800">
          We help brands communicate with clarity, connect with the right audiences, and grow with purpose. From agriculture boardrooms to corporate strategies, Snail Integral builds communication that creates real business impact.
        </p>
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
      </div>
      
      {/* Animated Masonry Grid */}
      <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[80vh] overflow-hidden relative" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
        
        {/* Column 1: Scrolling Down */}
        <div className="flex flex-col gap-4 h-max animate-scroll-down relative">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#d2d9c8] rounded-2xl h-[200px] overflow-hidden relative shadow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533157529681-30de9dff9c20?w=500&q=80')] bg-cover bg-center opacity-70 mix-blend-multiply"></div>
            </div>
            <div className="bg-[#e4e9dd] rounded-2xl h-[300px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="bg-[#d2d9c8] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
            </div>
          </div>
          {/* Duplicate for loop */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#d2d9c8] rounded-2xl h-[200px] overflow-hidden relative shadow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533157529681-30de9dff9c20?w=500&q=80')] bg-cover bg-center opacity-70 mix-blend-multiply"></div>
            </div>
            <div className="bg-[#e4e9dd] rounded-2xl h-[300px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="bg-[#d2d9c8] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
            </div>
          </div>
        </div>

        {/* Column 2: Scrolling Up */}
        <div className="flex flex-col gap-4 h-max animate-scroll-up relative pt-12">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#e4e9dd] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="bg-[#d2d9c8] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
               <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="bg-[#e4e9dd] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
               <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
          </div>
          {/* Duplicate for loop */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#e4e9dd] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="bg-[#d2d9c8] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
               <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="bg-[#e4e9dd] rounded-2xl h-[250px] flex items-center justify-center shadow-sm">
               <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
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
  );
}
