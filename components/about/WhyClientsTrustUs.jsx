import AnimatedText from '../AnimatedText';

export default function WhyClientsTrustUs() {
  const points = [
    {
      title: "We Know Your Industry",
      desc: "We do not learn your sector on your brief. By the time we sit down together, we already understand the regulatory environment, the audience behavior, the media landscape, and the competitive dynamics you operate in."
    },
    {
      title: "We Are Integrated By Design",
      desc: "Strategy, creative, digital, PR, and events under one roof means your messaging stays consistent across every channel and every touchpoint without the coordination overhead of managing multiple agencies."
    },
    {
      title: "We Think Long-Term",
      desc: "Most of our client relationships have lasted multiple years. We do not optimize for the campaign. We optimize for the brand, which means the decisions we recommend are always made with your long-term positioning in mind."
    },
    {
      title: "We Are Honest With You",
      desc: "If a strategy is not working, we say so. If your brief needs to be challenged before we execute it, we challenge it. Clients stay with agencies they trust, and trust is built on honesty more than on flattery."
    },
    {
      title: "We Deliver On Time",
      desc: "Deadlines are not negotiable at Snail Integral. Our project management processes are built around on-time delivery because we understand that missed deadlines create downstream consequences for our clients' businesses."
    },
    {
      title: "We Report What Matters",
      desc: "We do not send vanity metric reports. Every performance update is tied to the business objectives we agreed on at the start, so clients always know what their investment is actually producing."
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <AnimatedText delay={0.1}>
          <div className="max-w-3xl mb-16 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Clients Choose to Stay With Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Trust in a communication agency is earned through consistent delivery, honest advice, and genuine investment in the client's success. Here is what clients have told us sets Snail Integral apart.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
          {points.map((point, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a7c24]/10 flex items-center justify-center flex-shrink-0 text-[#4a7c24] font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-14">
                  {point.desc}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* Testimonials Strip */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <AnimatedText delay={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Note: Placeholders for 3 real client quotes before launch */}
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                 <svg className="absolute top-4 left-4 w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-600 italic mb-6 relative z-10">&quot;They didn't just execute our brief, they challenged it and made it better. That's the kind of partner we were looking for.&quot;</p>
                 <div className="mt-auto">
                    <p className="font-bold text-gray-900 text-sm">Client Name</p>
                    <p className="text-xs text-gray-500">Designation, Company Name</p>
                 </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                 <svg className="absolute top-4 left-4 w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-600 italic mb-6 relative z-10">&quot;Their understanding of the agriculture sector saved us months of onboarding time. They speak our language and our customers' language.&quot;</p>
                 <div className="mt-auto">
                    <p className="font-bold text-gray-900 text-sm">Client Name</p>
                    <p className="text-xs text-gray-500">Designation, Company Name</p>
                 </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl relative">
                 <svg className="absolute top-4 left-4 w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-600 italic mb-6 relative z-10">&quot;Deadlines are always met, the communication is always clear, and the results are always measurable. A highly professional team.&quot;</p>
                 <div className="mt-auto">
                    <p className="font-bold text-gray-900 text-sm">Client Name</p>
                    <p className="text-xs text-gray-500">Designation, Company Name</p>
                 </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
