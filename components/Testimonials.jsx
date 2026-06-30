export default function Testimonials() {
  const testimonials = [
    {
      quote: "We are very happy to work with Snail Integral Pvt. Ltd., Snail Integral did a commendable job on celebrity management, TVC production, digital and traditional Media Planning. The Team having fast delivery mechanism that’s why We have recently started our Social Media Management with Snail too. Post that a good visibility done by the company will help us to positioned Thakar Chemical Ltd as a leading agrochemical brand. Best of luck!",
      name: "Sumit Gupta",
      title: "Director Project",
      company: "Thakar Chemical Limited"
    },
    {
      quote: "My Business experience with Snail Integral team has been so amazing that we could finish FretBox customer pitch video in zero revision. When others take month to understand the taste of customer, Snail Integral team did in very first attempt",
      name: "Ashish Gupta",
      title: "Founder & CEO",
      company: "FretBox"
    },
    {
      quote: "Snail Integral seamlessly executes our entire brand and communication work with incredible skill and expertise. Your ability to provide consistent results and offer the latest techniques keeps our brand ahead of the competition in an ever-changing digital environment. Also, SNAIL integral team has a good understanding of working with rural markets so they add value by brining new perspectives by themselves. We consider the SNAIL Integral team an extension of our company, not just another partner and we recommend SNAIL integral as one of the best marketing agency to work with.",
      name: "Rajendar Kumar",
      title: "Head-Agri Input Business",
      company: "Akshamaala Solutions Pvt. Ltd. (Unnati)"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-7 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group">
              
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6a9a38] to-[#8ec44a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex justify-between items-start mb-4">
                 {/* Quote Icon */}
                 <div className="w-10 h-10 rounded-full bg-[#8ec44a]/10 flex items-center justify-center text-[#6a9a38]">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                 </div>
              </div>

              <p className="text-gray-600 text-[13.5px] leading-relaxed flex-grow mb-6 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-50">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6a9a38] to-[#8ec44a] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-[13px]">{t.name}</h4>
                  <p className="text-[11px] text-[#6a9a38] font-medium leading-tight mt-0.5">{t.title}</p>
                  <p className="text-[11px] text-gray-500 leading-tight">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
