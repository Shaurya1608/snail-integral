"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../AnimatedText';
import { motion } from 'framer-motion';

export default function LeadershipTeam() {
  const team = [
    {
      name: "Amit BK Khare",
      designation: "Founder & Managing Partner",
      image: "/Team Photos/Amit Khare.png",
      linkedin: "https://linkedin.com/in/amit-khare-1a073419",
      bio: "Amit founded Snail Integral with a vision to bridge the communication gap that often limits business growth, especially in agriculture and emerging sectors. With years of experience in branding, strategic communication, and business consulting, he has built the agency into a trusted partner for organizations looking to create stronger market presence and meaningful customer connections. His leadership continues to shape the agency's long-term vision and client relationships."
    },
    {
      name: "Arti Khare",
      designation: "Director & Co-Founder",
      image: "/Team Photos/Arti khare.png",
      linkedin: "https://linkedin.com/in/arti-khare-22194010",
      bio: "Arti plays a key role in driving the strategic and operational direction of the agency. She focuses on building strong systems, maintaining quality standards, and ensuring smooth collaboration across teams and clients. Her balanced approach towards creativity, management, and execution has helped the agency grow while consistently delivering reliable and impactful work."
    },
    {
      name: "Vaishnav Thakur",
      designation: "Head - Digital Marketing",
      image: "/Team Photos/Vaishanav.png",
      linkedin: null,
      bio: "Vaishnav leads the agency's digital marketing initiatives with a strong focus on performance, audience engagement, and platform strategy. He works across social media campaigns, paid marketing, analytics, and digital growth planning to help brands improve visibility and customer reach. His practical understanding of evolving digital trends allows the team to create campaigns that are both creative and result-oriented."
    },
    {
      name: "Shubham Joshi",
      designation: "Lead - Creative & Concept",
      image: "/Team Photos/Shubham Joshi.png",
      linkedin: "https://linkedin.com/in/shubhamm-brandstrategist",
      bio: "Shubham leads creative ideation and conceptual development for branding, campaigns, and visual communication projects. He believes strong ideas are at the heart of every successful brand experience and works closely with the design team to turn concepts into impactful creative outputs. His approach combines storytelling, simplicity, and strategic thinking to create communication that connects with audiences."
    },
    {
      name: "Yashasvi Sharma",
      designation: "Lead - Business Support",
      image: "/Team Photos/Yashi sharma.png",
      linkedin: "https://linkedin.com/in/yashasvi-sharma-156373387",
      bio: "Yashasvi supports the agency's client coordination, business operations, and internal workflow management. She works closely with teams to ensure projects move smoothly from planning to execution while maintaining clear communication with clients. Her organized and collaborative working style helps create a seamless experience across ongoing projects and partnerships."
    },
    {
      name: "Arpita Kaur Matharu",
      designation: "Lead - Digital Marketing",
      image: "/Team Photos/Arpita.png",
      linkedin: "https://linkedin.com/in/arpitadigi-marketer",
      bio: "Arpita manages social media communication, content planning, and digital campaign execution for the agency's clients. She brings together creativity and data-driven thinking to build digital experiences that strengthen audience engagement and brand recall. Her focus remains on creating communication that is relevant, consistent, and aligned with business goals."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8 border-y border-gray-100">
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedText delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Leadership Team
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our leadership team brings together decades of combined experience across brand strategy, communication, digital marketing, and business consulting.
            </p>
          </div>
        </AnimatedText>

        <div className="flex flex-col gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={`bg-white rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,124,36,0.15)] hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} group relative p-3 md:p-4 gap-4 md:gap-0`}>
                
                {/* Photo */}
                <div className={`w-full md:w-2/5 relative h-[250px] md:h-auto md:min-h-[280px] rounded-[1.5rem] overflow-hidden bg-[#f5f8f3] group-hover:bg-[#ecf1e7] transition-colors duration-500`}>
                   <Image 
                     src={member.image} 
                     alt={member.name}
                     fill
                     className="object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-3/5 p-5 md:p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} text-center`}>
                  <div className={`mb-3 flex ${index % 2 !== 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                    <span className="inline-flex px-3 py-1 bg-[#4a7c24]/10 text-[#4a7c24] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {member.designation}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#4a7c24] transition-colors duration-300">{member.name}</h3>
                  
                  <p className="text-gray-600 text-[14px] leading-relaxed mb-4 flex-grow">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn link */}
                  {member.linkedin && (
                    <div className={`mt-auto flex ${index % 2 !== 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-[#4a7c24] hover:text-white hover:shadow-lg transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedText delay={0.8}>
          <div className="mt-16 text-center">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-[#4a7c24] text-white hover:bg-[#3d6a1d] transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Connect With Our Team
            </Link>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
