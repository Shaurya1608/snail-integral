"use client";

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth; // approximate item width
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  const testimonials = [
    {
      quote: "Snail Integral has created unique platforms that celebrate leadership, innovation, and knowledge sharing in agriculture. Through The SnailShow Podcast, the Coffee Table Book, industry events, and BRAND R.Comm Awards, they have successfully built a vibrant ecosystem that recognizes excellence and promotes impactful dialogue across the industry.",
      name: "Mr. Manoj Varshney",
      title: "MD & CEO",
      company: "IFFCO-MC Crop Science Pvt. Ltd.",
      image: "/speakers/Mr. Manoj Varshney.jpg"
    },
    {
      quote: "Snail Integral has been a reliable partner in celebrity management, TVC production, media planning, and social media management. Their quick execution and strategic approach have significantly strengthened our brand visibility. We look forward to continuing this successful partnership.",
      name: "Sumit Gupta",
      title: "Director Project",
      company: "Thakar Chemical Limited",
      image: "/speakers/Sumit Gupta.jpg"
    },
    {
      quote: "Snail Integral has been a trusted extension of our team, delivering consistent results across brand communication and marketing. Their strategic thinking, timely execution, and deep understanding of rural markets have helped strengthen our brand presence. We highly value this partnership and confidently recommend Snail Integral.",
      name: "Rajendar Kumar",
      title: "Head-Agri Input Business",
      company: "Akshamaala Solutions Pvt. Ltd. (Unnati)",
      image: "/speakers/Rajendar Kumar.jpg"
    },
    {
      quote: "Snail Integral has become a trusted communication partner for Kan Biosys and BASAI. Their expertise in corporate communication, impactful storytelling through The SnailShow Podcast, and flawless event execution has significantly strengthened our industry visibility. Their understanding of the agricultural ecosystem and commitment to excellence make them an invaluable partner for organizations seeking meaningful engagement with stakeholders.",
      name: "Ms. Sandeepa Kanitkar",
      title: "CMD, Kan Biosys & President, BASAI",
      company: "",
      image: "/speakers/Ms. Sandeepa Kanitkar.jpg"
    },
    {
      quote: "Snail Integral has established itself as a distinctive voice within agribusiness communication. Their Coffee Table Book, podcast platform, and industry recognition initiatives offer an excellent opportunity for leaders and innovators to share their journeys and contribute to the advancement of the agriculture sector.",
      name: "Mr. Debabrata Sarkar",
      title: "CMD, MicroAlgue Solutions & President – APAC, AlgaEnergy",
      company: "",
      image: "/speakers/Mr. Debabrata Sarkar.jpg"
    },
    {
      quote: "Snail Integral has built a strong reputation for delivering high-quality industry events and effective communication programs. Their dedication, responsiveness, and commitment to promoting agribusiness innovation make them a reliable and long-term partner.",
      name: "Mr. Prashant Dharpure",
      title: "Managing Director",
      company: "Bandhan Agritech Pvt. Ltd.",
      image: "/speakers/Mr. Prashant Dharpure.jpg"
    },
    {
      quote: "Snail Integral serves as an effective bridge connecting global stakeholders with India's rapidly evolving agricultural ecosystem. Their commitment to facilitating communication, networking, and strategic engagement has made them a valuable partner for international organizations.",
      name: "Mr. Gijs Manneveld",
      title: "Managing Director",
      company: "EpiLogic GmbH, Germany",
      image: "/speakers/Mr. Gijs Manneveld.jpg"
    },
    {
      quote: "Snail Integral has emerged as a trusted platform for industry dialogue and stakeholder engagement. Their event management capabilities, combined with effective communication strategies, enable meaningful interactions and foster long-term collaborations.",
      name: "Mr. Sanjay Srivastava",
      title: "Business Head – Fertilizer",
      company: "Hindalco Industries Limited",
      image: "/speakers/Mr. Sanjay Srivastava.jpg"
    },
    {
      quote: "Snail Integral has played an important role in strengthening industry connections and creating valuable networking opportunities. Their events are thoughtfully curated, professionally executed, and highly relevant to the evolving needs of the agriculture biologicals sector.",
      name: "Mr. Kanwal Bhat",
      title: "Country Manager",
      company: "Groundwork BioAg, Israel",
      image: "/speakers/Mr. Kanwal Bhat.jpg"
    },
    {
      quote: "Snail Integral combines strategic communication, creativity, and industry knowledge to deliver initiatives that create real impact. Their public relations efforts, event platforms, and communication expertise provide excellent visibility for organizations operating in agriculture.",
      name: "Mr. Satish Tiwari",
      title: "VP – Sales & Marketing",
      company: "Heranba Industries Ltd.",
      image: "/speakers/Mr. Satish Tiwari.jpg"
    },
    {
      quote: "Snail Integral offers much more than event services; they act as strategic partners in business growth. Their understanding of industry trends, communication strategies, and business consulting capabilities creates significant value for emerging and established companies alike.",
      name: "Mr. Jigar Mistry",
      title: "Director",
      company: "Agrilogy Bioscience Pvt. Ltd.",
      image: "/speakers/Mr. Jigar Mistry.jpg"
    },
    {
      quote: "Snail Integral has consistently delivered impactful communication solutions supported by innovative ideas and flawless execution. Their expertise in public relations, event management, and creative storytelling helps companies strengthen their positioning within the agricultural sector.",
      name: "Mr. Pravin Shinde",
      title: "Director & CEO",
      company: "SAR Agro Industries Pvt. Ltd.",
      image: "/speakers/Mr. Pravin Shinde.jpg"
    },
    {
      quote: "Snail Integral demonstrated excellent planning, coordination, and execution capabilities throughout our association. Their events provide a highly professional environment for industry interaction, business networking, and knowledge sharing.",
      name: "Mr. Reza Jivani",
      title: "Managing Director",
      company: "Vikas Crop Care",
      image: "/speakers/Mr. Reza Jivani.jpg"
    },
    {
      quote: "The SnailShow Coffee Table Book is a remarkable initiative that captures the essence of leadership and innovation within the agriculture industry. Snail Integral's dedication to showcasing impactful stories, coupled with their professional approach to events and recognition platforms such as BRAND R.Comm Awards, has created an inspiring ecosystem for agribusiness leaders.",
      name: "Ms. Komal Shah Bhukhanwala",
      title: "Director",
      company: "Sumil Chemical Industries Limited",
      image: "/speakers/Komal Bhukhanwala Bioag2.jpg"
    },
    {
      quote: "Snail Integral brings together creativity, communication excellence, and domain expertise in a unique manner. Their podcasts, public relations efforts, and event management capabilities have helped amplify industry conversations and enhance engagement with diverse audiences.",
      name: "Dr. Shailendra Singh",
      title: "COO – Agribusiness",
      company: "Zydex Group",
      image: "/speakers/Dr. Shailendra Singh.jpg"
    },
    {
      quote: "Snail Integral understands the pulse of the agriculture biologicals industry. Their communication strategies, podcast initiatives, and event execution capabilities create significant value for companies looking to build stronger industry relationships and enhance brand visibility.",
      name: "Dr. Abhijit A. Pujari",
      title: "Director",
      company: "EpiLogic India Pvt Ltd",
      image: "/speakers/Dr. Abhijit A. Pujari.jpg"
    },
    {
      quote: "Snail Integral possesses a unique capability to transform technical industry discussions into engaging conversations through podcasts, corporate communication initiatives, and professionally managed events. Their sector-focused approach makes them stand apart in agribusiness communication.",
      name: "Mr. Sushil Kumar Bahuguna",
      title: "Commercial Leader - Ag & PI - IMEA",
      company: "Momentive Perfomance Materials",
      image: "/speakers/Mr. Sushil Kumar Bahuguna.jpg"
    },
    {
      quote: "Snail Integral has demonstrated exceptional capability in managing industry-centric events and communication initiatives. Their understanding of sustainability narratives and their ability to bring together key stakeholders has contributed immensely to creating meaningful conversations within the agricultural sector.",
      name: "Mr. Sarjiwan Manhas",
      title: "Chief Sustainability Officer & Head GreenAg",
      company: "Crystal Crop Protection",
      image: "/speakers/Mr. Sarjiwan Manhas.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#f4f7f0] pt-16 md:pt-24 pb-16 md:pb-24 px-6 md:px-8 flex justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Hear from the brands and organizations that have partnered with us for communication excellence across the agriculture ecosystem.
          </p>
        </motion.div>

        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-5 w-full max-w-7xl mx-auto px-6 md:px-4"
        >
          {testimonials.map((t, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(106,154,56,0.08)] transition-all duration-500 relative overflow-hidden group flex-shrink-0 snap-center w-[85vw] sm:w-[350px] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6a9a38] to-[#8ec44a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-4">
                 {/* Quote Icon */}
                 <div className="w-8 h-8 rounded-lg bg-[#6a9a38]/10 flex items-center justify-center text-[#6a9a38] group-hover:bg-[#6a9a38] group-hover:text-white transition-colors duration-500">
                   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                 </div>
              </div>

              <p className="text-gray-700 text-[13.5px] leading-relaxed flex-grow mb-5 font-medium">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-700 font-bold text-sm shadow-sm border border-gray-200 overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    t.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[13px] leading-tight">{t.name}</h4>
                  <p className="text-[11px] text-[#6a9a38] font-semibold mt-0.5">{t.title}</p>
                  {t.company && (
                    <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">{t.company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows & Dots */}
        <div className="flex flex-col items-center gap-4 mt-2">
          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-[#6a9a38]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#6a9a38] hover:bg-[#6a9a38] hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#6a9a38] hover:bg-[#6a9a38] hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
