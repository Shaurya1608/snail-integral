import AnimatedText from '../AnimatedText';

export default function CoffeeTableBook() {
  const targetAudience = [
    "Agricultural industry professionals seeking a high-quality record of the sector's evolution.",
    "Corporates and institutions looking for a prestigious gifting or documentation resource.",
    "Communication and marketing professionals working in agriculture.",
    "Anyone with a serious interest in the past, present, and future of Indian farming."
  ];

  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-12">
          <AnimatedText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Initiative 03
            </div>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              The Snail Show Coffee Table Book
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-primary font-medium text-base md:text-lg tracking-wide mb-6">
              A visual record of the people and ideas transforming Indian agriculture.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.35}>
            <div className="flex justify-center gap-4 text-xs font-semibold uppercase tracking-wider">
              <span className="bg-[#4a7c24] text-white px-3 py-1.5 rounded-lg shadow-sm">Volume 1 Published</span>
              <span className="bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-lg shadow-sm">Volume 2 In Development</span>
            </div>
          </AnimatedText>
        </div>

        {/* Two Columns for Content and simulated Book Cover */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-6">
          {/* Left Side: Mockup of the book */}
          <div className="hidden lg:flex lg:col-span-5 justify-center order-2 lg:order-1">
            <AnimatedText delay={0.2} direction="left" className="w-full max-w-[380px]">
              {/* Simulated 3D Book Layout */}
              <div className="relative aspect-[3/4] w-full bg-[#f6f5f0] rounded-r-3xl shadow-[25px_25px_50px_-10px_rgba(0,0,0,0.15)] border-l-[12px] border-primary border-t border-r border-b border-gray-200/60 overflow-hidden flex flex-col justify-between p-8 group hover:-rotate-1 hover:translate-x-1 hover:shadow-[30px_30px_60px_-12px_rgba(0,0,0,0.18)] transition-all duration-500">
                {/* Book cover sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Spine shadows */}
                <div className="absolute top-0 bottom-0 left-0 w-2 bg-black/10" />

                {/* Top brand */}
                <div className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-[#4a7c24] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a7c24]" />
                  Snail Publications
                </div>

                {/* Cover Title */}
                <div className="relative z-10 my-auto">
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">The Snail Show</div>
                  <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Transforming<br />
                    Indian<br />
                    <span className="italic text-[#4a7c24]">Agriculture</span>
                  </h3>
                  <div className="w-12 h-[2px] bg-primary mt-6 mb-4" />
                  <p className="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">
                    Volume 1: A visual record of the people and ideas shaping the future of farming.
                  </p>
                </div>

                {/* Volume badge */}
                <div className="relative z-10 flex justify-between items-center text-[10px] font-bold text-gray-700 tracking-wider border-t border-gray-200/50 pt-4">
                  <span>VOLUME 1</span>
                  <span className="text-[#4a7c24]">SNAIL INTEGRAL</span>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Right Side: Text & Content */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="flex flex-col gap-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <AnimatedText delay={0.2}>
                <p>
                  India's agriculture sector is changing faster than it is being documented. Every year, farmers adopt new practices, researchers validate new approaches, entrepreneurs build companies that change how food is grown and distributed, and communities adapt to the shifting realities of rural life in a modernizing economy. Most of this change happens without formal record, acknowledged in passing by trade publications and policy reports but rarely captured with the depth and visual quality that the scale of transformation deserves.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.25}>
                <p>
                  The Snail Show Coffee Table Book was created to change that. It is a large-format, high-quality publication that documents the changemakers, the innovations, the companies, and the communities that are shaping the future of Indian agriculture. Each volume combines long-form editorial content with professional photography to create a publication that is both informative and visually compelling, one that belongs on the desk of anyone who cares about where Indian agriculture is going.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p>
                  Volume 1 was launched at the Brand R.Comm Summit and received strong recognition from the agriculture and communication community for the quality of its editorial perspective and its visual production. It featured profiles of pioneering agricultural entrepreneurs, documentation of significant innovations in agri-input technology, and an exploration of how communication is reshaping the relationship between the agriculture sector and the broader Indian public.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p>
                  Volume 2 is currently in development and will build on the foundation established by the first edition, with an expanded editorial scope and an even broader representation of the voices and stories that define Indian agriculture today.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>

        {/* Centered Who it is for & CTA */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-center w-full px-4">
          <AnimatedText delay={0.4} className="w-full">
            <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm mb-10 w-full">
              <h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">
                Who It Is For
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {targetAudience.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs text-gray-500 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.45}>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Request a Copy of Volume 1
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </AnimatedText>
        </div>

      </div>
    </section>
  );
}
