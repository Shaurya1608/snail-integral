import Link from 'next/link';
import Image from 'next/image';
import AnimatedText from '../AnimatedText';

export default function HeroInitiatives() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#f9fbf7] text-gray-900 pt-20 pb-12 px-6 md:px-8 overflow-hidden border-b border-gray-150/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/LandingPage/sn3.png" 
          alt="Initiatives Background" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#f9fbf7]/40" />
      </div>
      
      {/* Blurred ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#8ec44a]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatedText delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
            Beyond Client Work,<br />
            <span className="text-primary italic">Building the Industry</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto font-light">
            At Snail Integral, our responsibility extends beyond delivering results for individual clients. We believe that the agriculture and business communication ecosystem in India grows stronger when its practitioners, leaders, and innovators have platforms to connect, share knowledge, and recognize excellence. Our flagship initiatives are built around that belief.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="inline-block border-t border-b border-gray-200 py-4 px-6 md:px-10">
            <span className="text-sm md:text-base font-semibold tracking-wide text-primary uppercase">
              Five platforms. One purpose.
            </span>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Advancing the conversation around agriculture, business, and communication in India.
            </p>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
