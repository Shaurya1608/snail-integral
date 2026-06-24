import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function AboutFinalCTA() {
  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-multiply"></div>
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let Us Start a Conversation
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            If you are looking for a communication partner who understands your industry, thinks strategically, and delivers with consistency, we would like to hear from you. Tell us what you are working on and we will tell you how we can help.
          </p>
        </AnimatedText>
        
        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link 
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3d6a1d] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-full border border-gray-400 text-gray-800 hover:border-gray-600 hover:bg-gray-50 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <p className="text-gray-600 font-medium">
            Call <a href="tel:+918750807676" className="text-[#4a7c24] hover:underline">+91 8750807676</a> or email <a href="mailto:info@snailintegral.com" className="text-[#4a7c24] hover:underline">info@snailintegral.com</a>
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
