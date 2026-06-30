import AnimatedText from '../AnimatedText';

const processes = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We invest the time to understand your business, your audience, your competitive landscape, and your specific objectives before recommending anything. This stage includes stakeholder interviews, brand and market audits, and a clear definition of what success looks like for the engagement.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We translate what we have learned into a comprehensive strategic plan. This includes defining the core message, selecting the right channels and formats, setting the creative direction, and agreeing on the KPIs that will be used to evaluate performance.',
  },
  {
    step: '03',
    title: 'Deliver',
    desc: 'We execute the plan with precision, managing every element in-house across creative, digital, PR, and events to ensure consistency and quality at every touchpoint. We communicate proactively throughout delivery so clients always know where things stand.',
  },
  {
    step: '04',
    title: 'Develop',
    desc: 'We do not stop at delivery. We monitor performance continuously, report transparently, and use what we learn from each campaign to improve the next one. Our goal is not a successful campaign. It is a continuously improving brand.',
  },
];

export default function ProcessServices() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 border-b border-gray-150/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              How Every Engagement Works
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-600 text-base md:text-lg">
              Regardless of the service or sector, every Snail Integral engagement follows a consistent four-stage process designed to ensure that strategy drives execution and that results are measurable from the start.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processes.map((proc, index) => (
            <AnimatedText key={index} delay={0.15 * index}>
              <div className="relative group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl font-bold text-[#8ec44a]/40 group-hover:text-primary transition-colors duration-300">
                    {proc.step}
                  </span>
                  <div className="h-[2px] bg-gray-100 flex-1 relative hidden md:block">
                    {index < 3 && <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{proc.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{proc.desc}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
