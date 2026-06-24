import AnimatedText from './AnimatedText';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We start by understanding your business, your audience, and your competitive landscape through deep research and stakeholder conversations."
    },
    {
      num: "02",
      title: "Design",
      desc: "We translate insights into a comprehensive strategy, including messaging, channel selection, creative direction, and campaign architecture."
    },
    {
      num: "03",
      title: "Deliver",
      desc: "We execute with precision, managing every element from content production and media relations to digital campaigns and live events."
    },
    {
      num: "04",
      title: "Develop",
      desc: "We monitor performance continuously, optimize based on data, and refine strategies to ensure sustained growth beyond the initial campaign."
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] pt-20 md:pt-32 pb-10 md:pb-16 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-20">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              How We Work
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-gray-600">
              We follow a structured four-stage approach that ensures every project is grounded in insight and delivered with purpose.
            </p>
          </AnimatedText>
        </div>

        <div className="relative w-full max-w-5xl">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-primary/20"></div>

          {/* Vertical Connecting Line for Mobile */}
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <AnimatedText key={index} delay={0.1 + index * 0.1}>
                <div className="relative flex flex-col items-center md:items-start gap-4 group">
                  {/* Number Indicator */}
                  <div className="w-14 h-14 rounded-full bg-[#f9fbf7] border-2 border-primary/20 text-primary flex items-center justify-center font-serif text-2xl font-bold relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    {step.num}
                  </div>
                  
                  <div className="text-center md:text-left mt-4 bg-[#f9fbf7]/80 backdrop-blur-sm p-2 md:p-0 rounded-lg relative z-10">
                    <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[280px] md:max-w-none">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
