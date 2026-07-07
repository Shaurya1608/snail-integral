import Image from 'next/image';

export default function ContactCards() {
  const phones = [
    "+91-8750807676",
    "+91-9354342588",
    "+91-8700178106",
    "+91-8527552425"
  ];

  const emails = [
    "info@snailintegral.com",
    "amit.khare@snailintegral.com",
    "marketing@snailintegral.com",
    "bioagri.next@snailintegral.com",
    "snailintegral@gmail.com",
    "snailintegral2@gmail.com"
  ];
  
  const qr = "/qr/Amit Khare QR Code.png";

  return (
    <section id="contact" className="w-full bg-[#f9fbf7] pt-10 md:pt-16 pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#143d2c] mb-3">For Enquiry</h2>
          <div className="w-12 h-1 bg-[#d4a373]"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 border border-gray-100">
          
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16 w-full md:w-auto">
            {/* Phone */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 inline-block">Phone Numbers</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {phones.map((phone, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f9fbf7] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#32694d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span className="font-medium">{phone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2 inline-block">Emails</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {emails.map((email, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f9fbf7] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#32694d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="font-medium">{email}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-auto mt-6 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-12">
             <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-widest">Amit BK Khare</h3>
             <div className="w-48 h-48 relative border border-gray-100 rounded-2xl overflow-hidden p-3 bg-[#f9fbf7]">
               <Image src={qr} alt={`QR Code`} fill className="object-contain p-3" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
