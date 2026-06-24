import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export default function LeadershipTeam() {
  const team = [
    {
      name: "Amit BK Khare",
      designation: "Founder & Managing Partner",
      bio: "Amit founded Snail Integral with a vision to bridge the communication gap that often limits business growth, especially in agriculture and emerging sectors. With years of experience in branding, strategic communication, and business consulting, he has built the agency into a trusted partner for organizations looking to create stronger market presence and meaningful customer connections. His leadership continues to shape the agency's long-term vision and client relationships."
    },
    {
      name: "Arti Khare",
      designation: "Director & Co-Founder",
      bio: "Arti plays a key role in driving the strategic and operational direction of the agency. She focuses on building strong systems, maintaining quality standards, and ensuring smooth collaboration across teams and clients. Her balanced approach towards creativity, management, and execution has helped the agency grow while consistently delivering reliable and impactful work."
    },
    {
      name: "Vaishnav Thakur",
      designation: "Head - Digital Marketing",
      bio: "Vaishnav leads the agency's digital marketing initiatives with a strong focus on performance, audience engagement, and platform strategy. He works across social media campaigns, paid marketing, analytics, and digital growth planning to help brands improve visibility and customer reach. His practical understanding of evolving digital trends allows the team to create campaigns that are both creative and result-oriented."
    },
    {
      name: "Shubham Joshi",
      designation: "Lead - Creative & Concept",
      bio: "Shubham leads creative ideation and conceptual development for branding, campaigns, and visual communication projects. He believes strong ideas are at the heart of every successful brand experience and works closely with the design team to turn concepts into impactful creative outputs. His approach combines storytelling, simplicity, and strategic thinking to create communication that connects with audiences."
    },
    {
      name: "Arpita Kaur Matharu",
      designation: "Lead - Digital Marketing",
      bio: "Arpita manages social media communication, content planning, and digital campaign execution for the agency's clients. She brings together creativity and data-driven thinking to build digital experiences that strengthen audience engagement and brand recall. Her focus remains on creating communication that is relevant, consistent, and aligned with business goals."
    },
    {
      name: "Yashasvi Sharma",
      designation: "Lead - Business Support",
      bio: "Yashasvi supports the agency's client coordination, business operations, and internal workflow management. She works closely with teams to ensure projects move smoothly from planning to execution while maintaining clear communication with clients. Her organized and collaborative working style helps create a seamless experience across ongoing projects and partnerships."
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 border-y border-gray-100">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <AnimatedText key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#4a7c24] transition-colors duration-300 z-10"></div>
                
                {/* Photo Placeholder */}
                <div className="w-full h-40 bg-gray-50 relative flex items-center justify-center border-b border-gray-100 group-hover:bg-gray-100 transition-colors duration-300">
                   <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="font-medium text-[#4a7c24] text-xs mb-3">{member.designation}</p>
                  
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4 flex-grow">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn link */}
                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-[#4a7c24] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedText>
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
