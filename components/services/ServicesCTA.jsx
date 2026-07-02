import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function ServicesCTA() {
  return (
    <section id="contact" className="bg-[#f9fbf7] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a7c24]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Not Sure Which Service You Need?
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            That is exactly the conversation we are built for. Tell us about your business challenge and we will recommend the right combination of services to address it. There is no obligation and no generic proposal. Just a focused conversation about what your business actually needs.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="px-8 py-4 w-full sm:w-auto text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary-hover shadow-[0_8px_30px_rgb(74,124,36,0.2)] hover:shadow-[0_15px_40px_rgb(74,124,36,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>
            <a
              href="/Snail%20Brochure%202026.pdf"
              download="Snail_Brochure_2026.pdf"
              className="px-8 py-4 w-full sm:w-auto text-sm font-semibold rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              Download Brochure
            </a>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="text-gray-500 text-xs md:text-sm font-medium tracking-wide uppercase">
            Call <a href="tel:+918750807676" className="text-primary hover:underline font-bold">+91 8750807676</a> or email <a href="mailto:info@snailintegral.com" className="text-primary hover:underline font-bold">info@snailintegral.com</a>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
