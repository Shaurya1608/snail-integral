import AnimatedText from '../AnimatedText';
import Image from 'next/image';

export default function HeroAbout() {
  return (
    <section className="relative w-full bg-[#f9fbf7] min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-8 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply">
        <Image 
          src="/LandingPage/sn2.png" 
          alt="Snail Integral Background" 
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9fbf7]/80 via-transparent to-[#f9fbf7]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">        <AnimatedText delay={0.2}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-8">
            We Exist to Make Brands Visible, Credible, and <span className="italic text-[#4a7c24]">Impactful</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Snail Integral is a brand consulting and corporate communication agency built on two decades of cross-industry experience. We help organizations across agriculture, corporate, and government sectors communicate with clarity, connect with their audiences, and grow with purpose.
          </p>
        </AnimatedText>
      </div>


      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#4a7c24]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#4a7c24]/5 blur-3xl" />
    </section>
  );
}
