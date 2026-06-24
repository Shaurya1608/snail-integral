export default function Testimonials() {
  const testimonials = [
    {
      quote: "Snail Integral completely transformed how we communicate with our farmers. Their deep understanding of rural markets is unmatched.",
      name: "Rajesh Kumar",
      title: "Marketing Director",
      company: "AgriTech India"
    },
    {
      quote: "Their team doesn't just execute campaigns; they build comprehensive strategies that directly impact our bottom line. A true partner.",
      name: "Priya Sharma",
      title: "CEO",
      company: "Innovate Manufacturing"
    },
    {
      quote: "The brand identity they developed for us gave us exactly the credibility we needed to secure our Series B funding.",
      name: "Arjun Patel",
      title: "Founder",
      company: "TechSolutions Startup"
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] pt-10 md:pt-16 pb-10 md:pb-16 px-8 flex justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600">
            Hear from the brands and organizations that have partnered with us for communication excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="text-primary/30 mb-3">
                 {/* Quote Icon */}
                 <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
