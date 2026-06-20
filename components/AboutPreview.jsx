import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function AboutPreview() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-5 relative z-10">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Who We Are
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg md:text-xl font-medium text-primary leading-snug max-w-lg">
              Bridging the gap between innovation and adoption through strategic communication.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <div className="flex flex-col gap-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                Snail Integral is a brand consulting and corporate communication agency with over two decades of experience working across India. We understand that strong communication is not just about being seen. It is about being understood, trusted, and remembered.
              </p>
              <p>
                We work with businesses across agriculture, corporate, manufacturing, FMCG, government institutions, and technology sectors. Our approach brings together research-backed strategy, creative execution, and a deep understanding of diverse audiences, whether you are reaching farmers in rural India or decision-makers in corporate boardrooms.
              </p>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <div className="pt-4">
              <button className="px-7 py-3 text-sm font-medium rounded-full bg-gray-900 text-white hover:bg-primary hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(91,135,43,0.3)] transition-all duration-300 inline-flex items-center gap-2 group">
                Learn More About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </AnimatedText>
        </div>
        
        {/* Right Side: Image Placeholder */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] rounded-tr-[5rem] overflow-hidden shadow-2xl group">
           <Image 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
             alt="Snail Integral Team" 
             fill 
             className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
           />
           {/* Subtle overlay to tie into brand colors */}
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
