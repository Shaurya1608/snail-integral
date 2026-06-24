import Image from 'next/image';

export default function ContactCards() {
  const contacts = [
    {
      name: "Amit BK Khare",
      role: "FOUNDER & MANAGING PARTNER",
      phones: ["+91-8750807676", "+91-9354342588"],
      emails: ["amit.khare@snailintegral.com", "bioagri.next@snailintegral.com"],
      image: "/dp-images/Amit Khare.png",
      qr: "/qr/Amit Khare QR Code.png"
    },
    {
      name: "Arpita Kaur Matharu",
      role: "LEAD - DIGITAL MARKETING",
      phones: ["+91-8700178106", "+91-8750807676"],
      emails: ["info@snailintegral.com", "snailintegral@gmail.com"],
      image: "/dp-images/Arpita-New (1).png",
      qr: "/qr/Arpita QR Code.png"
    },
    {
      name: "Yashasvi Sharma",
      role: "LEAD - BUSINESS SUPPORT",
      phones: ["+91-8527552425", "+91-8750807676"],
      emails: ["marketing@snailintegral.com", "snailintegral2@gmail.com"],
      image: "/dp-images/Yashi.png",
      qr: "/qr/Yashi sharma QR.png"
    }
  ];

  return (
    <section id="contact" className="w-full bg-[#f9fbf7] pt-10 md:pt-16 pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#143d2c] mb-3">Contact Us</h2>
          <div className="w-12 h-1 bg-[#d4a373]"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {contacts.map((contact, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-[3px] border-gray-100 shadow-sm relative">
                <Image src={contact.image} alt={contact.name} fill className="object-cover" />
              </div>

              {/* Name & Role */}
              <h3 className="text-base font-bold text-gray-900">{contact.name}</h3>
              <p className="text-[10px] font-semibold text-[#32694d] tracking-widest uppercase mt-1 mb-5">
                {contact.role}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 text-left text-xs text-gray-600 mb-5 w-fit mx-auto">
                {/* Phone */}
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <div className="flex flex-col gap-0.5">
                    {contact.phones.map((phone, i) => <span key={i}>{phone}</span>)}
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <div className="flex flex-col gap-0.5 break-all">
                    {contact.emails.map((email, i) => <span key={i}>{email}</span>)}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-5"></div>

              {/* QR Code */}
              <div className="w-24 h-24 relative">
                <Image src={contact.qr} alt={`${contact.name} QR Code`} fill className="object-contain" />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
