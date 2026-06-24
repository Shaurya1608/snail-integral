import AnimatedText from '../AnimatedText';

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      statement: "We build every client relationship on transparency and honest counsel.",
      description: "We say what we mean, we deliver what we promise, and we take responsibility when things need to be corrected. Integrity is not a policy for us. It is the way we operate."
    },
    {
      title: "Innovation",
      statement: "We believe that the best communication solutions rarely come from doing what has always been done.",
      description: "We approach every brief with curiosity, we challenge comfortable assumptions, and we look for the approach that is most effective rather than most familiar."
    },
    {
      title: "Excellence",
      statement: "Every project that leaves Snail Integral represents our standard, not just our client's requirement.",
      description: "We hold our work to a rigorous internal benchmark because we understand that the quality of communication directly reflects on the brands we represent."
    },
    {
      title: "Collaboration",
      statement: "We do not work for our clients. We work with them.",
      description: "The strongest strategies are built when both sides bring their knowledge to the table, and we invest in understanding our clients' businesses deeply enough to be genuine partners in their decisions."
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {values.map((value, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-all duration-300 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#4a7c24] transition-colors duration-300"></div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-medium text-[#4a7c24] text-sm md:text-base mb-4">
                  {value.statement}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm mt-auto">
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
