export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#5b872b] py-20 md:py-32 px-6 md:px-8 min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Ready to Build Something <br className="md:hidden" /><span className="text-white/80 italic">That Lasts?</span>
        </h2>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mb-10 md:mb-12 leading-relaxed">
          Whether you are a corporate enterprise, an agriculture business, or a growing startup, Snail Integral is ready to be your strategic communication partner. Let us start a conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full mb-12 md:mb-16 max-w-5xl">
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 hover:bg-white text-white hover:text-[#5b872b] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1">
             <h3 className="font-semibold text-lg text-center">For Corporate Clients</h3>
             <span className="font-medium text-sm flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
               Schedule a Consultation
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </span>
          </div>
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 hover:bg-white text-white hover:text-[#5b872b] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1">
             <h3 className="font-semibold text-lg text-center">For Agriculture Businesses</h3>
             <span className="font-medium text-sm flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
               Explore Agriculture Solutions
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </span>
          </div>
          <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 hover:bg-white text-white hover:text-[#5b872b] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1">
             <h3 className="font-semibold text-lg text-center">For Startups and SMEs</h3>
             <span className="font-medium text-sm flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
               Get Started Today
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </span>
          </div>
        </div>

        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-black/10 backdrop-blur-sm px-8 md:px-10 py-5 md:py-4 rounded-3xl md:rounded-full border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full md:w-auto">
           <span className="text-white/90 text-[13px] md:text-sm font-medium flex items-center justify-center gap-2 w-full">
             <svg className="w-4 h-4 opacity-70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             <span>Call us at <a href="tel:+918750807676" className="text-white font-bold hover:underline tracking-wide ml-1">+91 8750807676</a></span>
           </span>
           <div className="hidden md:block w-[1px] h-4 bg-white/30"></div>
           <div className="md:hidden w-full h-[1px] bg-white/20"></div>
           <span className="text-white/90 text-[13px] md:text-sm font-medium flex items-center justify-center gap-2 w-full">
             <svg className="w-4 h-4 opacity-70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             <span>Write to <a href="mailto:info@snailintegral.com" className="text-white font-bold hover:underline tracking-wide ml-1 truncate max-w-[200px] inline-block align-bottom">info@snailintegral.com</a></span>
           </span>
        </div>
      </div>
    </section>
  );
}
