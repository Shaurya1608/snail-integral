import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function CaseStudiesCTA() {
  return (
    <section className="w-full bg-[#f9fbf7] py-20 md:py-32 px-6 md:px-8 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            Your Brand Deserves a Strategy That Works.
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're launching a new product, building brand awareness, or looking to dominate your market - Snail Integral has the expertise, the network, and the passion to make it happen. Let's build your next case study together.
          </p>
        </AnimatedText>
        
        <AnimatedText delay={0.3}>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(106,154,56,0.3)] hover:shadow-[0_15px_40px_rgba(106,154,56,0.4)] group"
          >
            Let's Talk
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
}
