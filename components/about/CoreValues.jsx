import AnimatedText from '../AnimatedText';

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      statement: "We build every client relationship on transparency and honest counsel.",
      description: "We say what we mean, we deliver what we promise, and we take responsibility when things need to be corrected. Integrity is not a policy for us. It is the way we operate.",
      icon: <svg className="w-8 h-8 text-[#4a7c24] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Innovation",
      statement: "We believe that the best communication solutions rarely come from doing what has always been done.",
      description: "We approach every brief with curiosity, we challenge comfortable assumptions, and we look for the approach that is most effective rather than most familiar.",
      icon: <svg className="w-8 h-8 text-[#4a7c24] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Excellence",
      statement: "Every project that leaves Snail Integral represents our standard, not just our client's requirement.",
      description: "We hold our work to a rigorous internal benchmark because we understand that the quality of communication directly reflects on the brands we represent.",
      icon: <svg className="w-8 h-8 text-[#4a7c24] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
    {
      title: "Collaboration",
      statement: "We do not work for our clients. We work with them.",
      description: "The strongest strategies are built when both sides bring their knowledge to the table, and we invest in understanding our clients' businesses deeply enough to be genuine partners in their decisions.",
      icon: <svg className="w-8 h-8 text-[#4a7c24] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Values We Work By
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our values are not aspirational statements. They are the standards we hold ourselves to in every client engagement, every internal decision, and every piece of work that carries our name.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,124,36,0.15)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 h-full group relative overflow-hidden flex flex-col z-10">
                {value.icon}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4a7c24] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-medium text-[#4a7c24] text-sm mb-3">
                  {value.statement}
                </p>
                <p className="text-gray-600 leading-relaxed text-[14px] mt-auto">
                  {value.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
