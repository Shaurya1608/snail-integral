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
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients Choose to Stay With Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Trust in a communication agency is earned through consistent delivery, honest advice, and genuine investment in the client's success. Here is what clients have told us sets Snail Integral apart.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,124,36,0.15)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 h-full group relative overflow-hidden flex flex-col z-10">
                {/* Background Large Number */}
                <div className="absolute -bottom-6 -right-6 text-[140px] font-serif font-black text-gray-50 group-hover:text-[#4a7c24]/5 transition-colors duration-500 z-0 leading-none select-none">
                  0{index + 1}
                </div>
                
                <div className="w-12 h-12 rounded-full bg-[#f5f8f3] group-hover:bg-[#4a7c24] flex items-center justify-center mb-5 transition-colors duration-500 relative z-10">
                  <span className="text-[#4a7c24] group-hover:text-white font-serif font-bold text-lg transition-colors duration-500">0{index + 1}</span>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#4a7c24] transition-colors duration-300 relative z-10">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] flex-grow relative z-10">
                  {point.desc}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* Testimonials Strip */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <AnimatedText delay={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Note: Placeholders for 3 real client quotes before launch */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#4a7c24]/5 hover:border-[#4a7c24]/20 transition-all duration-500 relative group flex flex-col h-full">
                 <svg className="absolute top-6 left-6 w-12 h-12 text-gray-100 group-hover:text-[#4a7c24]/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-700 italic text-[15px] leading-relaxed mb-8 relative z-10 pt-6 flex-grow">&quot;They didn't just execute our brief, they challenged it and made it better. That's the kind of partner we were looking for.&quot;</p>
                 <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#f5f8f3] flex items-center justify-center text-[#4a7c24] font-serif font-bold text-lg group-hover:bg-[#4a7c24] group-hover:text-white transition-colors duration-500">C</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Client Name</p>
                      <p className="text-[13px] text-[#4a7c24] font-medium">Designation, Company</p>
                    </div>
                 </div>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#4a7c24]/5 hover:border-[#4a7c24]/20 transition-all duration-500 relative group flex flex-col h-full">
                 <svg className="absolute top-6 left-6 w-12 h-12 text-gray-100 group-hover:text-[#4a7c24]/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-700 italic text-[15px] leading-relaxed mb-8 relative z-10 pt-6 flex-grow">&quot;Their understanding of the agriculture sector saved us months of onboarding time. They speak our language and our customers' language.&quot;</p>
                 <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#f5f8f3] flex items-center justify-center text-[#4a7c24] font-serif font-bold text-lg group-hover:bg-[#4a7c24] group-hover:text-white transition-colors duration-500">C</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Client Name</p>
                      <p className="text-[13px] text-[#4a7c24] font-medium">Designation, Company</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#4a7c24]/5 hover:border-[#4a7c24]/20 transition-all duration-500 relative group flex flex-col h-full">
                 <svg className="absolute top-6 left-6 w-12 h-12 text-gray-100 group-hover:text-[#4a7c24]/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                 <p className="text-gray-700 italic text-[15px] leading-relaxed mb-8 relative z-10 pt-6 flex-grow">&quot;Deadlines are always met, the communication is always clear, and the results are always measurable. A highly professional team.&quot;</p>
                 <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#f5f8f3] flex items-center justify-center text-[#4a7c24] font-serif font-bold text-lg group-hover:bg-[#4a7c24] group-hover:text-white transition-colors duration-500">C</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Client Name</p>
                      <p className="text-[13px] text-[#4a7c24] font-medium">Designation, Company</p>
                    </div>
                 </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
