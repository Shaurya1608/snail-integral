"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactCards() {
  const cards = [
    {
      name: "Amit BK Khare",
      designation: "Founder and Managing Partner",
      roleDescription: "For new business enquiries, strategic consultations, partnership discussions, and senior-level client conversations.",
      phones: ["+91 8750807676", "+91 9354342588"],
      emails: ["amit.khare@snailintegral.com", "snailintegral@gmail.com"],
      image: "/dp-images/Amit Khare.png",
      qr: "/qr/Amit Khare QR Code.png"
    },
    {
      name: "Arpita Kaur Matharu",
      designation: "Lead, Digital Marketing",
      roleDescription: "For digital marketing campaigns, social media management, SEO and performance marketing enquiries, and content strategy discussions.",
      phones: ["+91 8700178106", "+91 8750807676"],
      emails: ["info@snailintegral.com", "snailintegral@gmail.com"],
      image: "/dp-images/Arpita-New (1).png",
      qr: "/qr/Arpita QR Code.png"
    },
    {
      name: "Yashasvi Sharma",
      designation: "Lead, Business Support",
      roleDescription: "For general enquiries, project coordination, vendor discussions, and all administrative and operational matters.",
      phones: ["+91 8527552425", "+91 8750807676"],
      emails: ["marketing@snailintegral.com", "snailintegral2@gmail.com"],
      image: "/dp-images/Yashi.png",
      qr: "/qr/Yashi sharma QR.png"
    }
  ];

  return (
    <section className="w-full bg-[#f9fbf7] text-gray-900 py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Our Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1"
            >
              {/* Photo Placeholder/Image at top */}
              <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner relative bg-gray-100">
                <Image 
                  src={card.image} 
                  alt={card.name} 
                  fill 
                  className="object-cover"
                  onError={(e) => {
                    // Fallback visual placeholder if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Typography / Name & Designation */}
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">{card.designation}</p>
              
              {/* Role Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light h-16 flex items-center justify-center">
                {card.roleDescription}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Contact Details (Typographic) */}
              <div className="w-full text-left space-y-4 mb-8 text-sm text-gray-600">
                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col">
                    {card.phones.map((phone, pIdx) => (
                      <a key={pIdx} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors font-medium">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex flex-col break-all">
                    {card.emails.map((email, eIdx) => (
                      <a key={eIdx} href={`mailto:${email}`} className="hover:text-primary transition-colors font-medium">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* QR Code Placeholder at bottom */}
              <div className="w-24 h-24 relative bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center justify-center">
                <Image 
                  src={card.qr} 
                  alt={`${card.name} QR Code`} 
                  fill 
                  className="object-contain p-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-400 mt-2 font-medium">Scan for contact info</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
