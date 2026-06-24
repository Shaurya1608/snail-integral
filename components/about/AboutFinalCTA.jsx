import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function AboutFinalCTA() {
  return (
    <section className="w-full bg-[#111827] py-24 md:py-32 px-6 md:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Let Us Start a Conversation
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            If you are looking for a communication partner who understands your industry, thinks strategically, and delivers with consistency, we would like to hear from you. Tell us what you are working on and we will tell you how we can help.
          </p>
        </AnimatedText>
        
        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3d6a1d] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full border border-gray-500 text-white hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p className="text-gray-400 font-medium">
            Call <a href="tel:+918750807676" className="text-[#a6d87f] hover:underline">+91 8750807676</a> or email <a href="mailto:info@snailintegral.com" className="text-[#a6d87f] hover:underline">info@snailintegral.com</a>
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
