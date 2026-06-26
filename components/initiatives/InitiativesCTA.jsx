import AnimatedText from '../AnimatedText';

export default function InitiativesCTA() {
  return (
    <section className="w-full bg-[#f9fbf7] text-gray-900 py-20 md:py-28 px-6 md:px-8 relative overflow-hidden border-t border-gray-150/30">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Get Involved With What We Are Building
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-light">
            Whether you are interested in participating in an upcoming initiative, partnering with us to sponsor or co-create a platform, or simply staying connected with the work we are doing beyond our client mandates, we would like to hear from you.
          </p>
        </AnimatedText>

        {/* Dual CTA buttons */}
        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <button className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Partner With Us on an Initiative
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Subscribe to the Newsletter
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </AnimatedText>

        {/* Contact Info Footer Row */}
        <AnimatedText delay={0.4}>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-gray-500">
            <span>To discuss partnership or participation opportunities:</span>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@snailintegral.com" className="text-primary hover:text-primary-hover transition-colors font-semibold flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                info@snailintegral.com
              </a>
              <a href="tel:+918750807676" className="text-primary hover:text-primary-hover transition-colors font-semibold flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 8750807676
              </a>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
