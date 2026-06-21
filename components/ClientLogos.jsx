import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function ClientLogos() {
  const row1Logos = ["c-logo-1.jpg", "c-logo-2.jpg", "c-logo-3.jpg", "c-logo-4.jpg"];
  const row2Logos = ["c-logo-5.jpg", "c-logo-6.jpg", "c-logo-7.jpg", "c-logo-8.jpg"];
  const row3Logos = ["c-logo-9.jpg", "c-logo-10.jpg", "c-logo-11.jpg", "c-logo-12.jpg"];

  return (
    <section className="w-full bg-[#f9fbf7] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center mb-16">
        <div className="text-center max-w-2xl">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Brands That Trust Us
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600">
              We are proud to work with industry leaders, government institutions, and innovative businesses across India.
            </p>
          </AnimatedText>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[100vw] overflow-hidden relative">
        {/* Simple fade edges for desktop */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f9fbf7] to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f9fbf7] to-transparent z-10 hidden md:block"></div>

        {/* Row 1 */}
        <div className="flex w-max animate-scroll hover:pause">
          <div className="flex gap-8 pr-8">
            {row1Logos.map((logo, i) => (
               <div key={`row1a-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+1}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {row1Logos.map((logo, i) => (
               <div key={`row1b-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+1}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-scroll-reverse hover:pause">
          <div className="flex gap-8 pr-8">
            {row2Logos.map((logo, i) => (
               <div key={`row2a-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+5}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {row2Logos.map((logo, i) => (
               <div key={`row2b-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+5}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex w-max animate-scroll hover:pause">
          <div className="flex gap-8 pr-8">
            {row3Logos.map((logo, i) => (
               <div key={`row3a-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+9}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {row3Logos.map((logo, i) => (
               <div key={`row3b-${i}`} className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 relative overflow-hidden shrink-0">
                  <Image src={`/Client-Logo/${logo}`} alt={`Client Logo ${i+9}`} fill className="object-contain p-4" />
               </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll 35s linear infinite reverse;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
