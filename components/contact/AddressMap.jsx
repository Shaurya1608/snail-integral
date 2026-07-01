"use client";

import { motion } from 'framer-motion';

export default function AddressMap() {
  const mapQuery = encodeURIComponent("Snail Integral Q-170141, 14th Avenue, Gaur City - 2, Noida Extension, Greater Noida");
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.046554868297!2d77.42646697550346!3d28.628549375669788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee5d53951f25%3A0xe212854297157833!2sGaur%20City%202%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719426210000!5m2!1sen!2sin";

  return (
    <section className="w-full bg-[#f9fbf7] text-gray-900 py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center lg:text-left"
        >
          Visit Our Office
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Office Address */}
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Office Address</h3>
                <p className="text-base text-gray-700 leading-relaxed font-light">
                  Snail Integral Private Limited<br />
                  Q-170141, 14th Avenue, Gaur City - 2,<br />
                  Noida Extension, Greater Noida,<br />
                  Uttar Pradesh, India
                </p>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Office Hours</h3>
                <ul className="text-sm text-gray-600 space-y-1 font-light">
                  <li><strong className="font-semibold text-gray-800">Monday to Friday:</strong> 9:30 AM to 6:30 PM</li>
                  <li><strong className="font-semibold text-gray-800">Saturday:</strong> 10:00 AM to 2:00 PM</li>
                  <li><strong className="font-semibold text-gray-800">Sunday:</strong> Closed</li>
                </ul>
              </div>

              {/* Visiting Note */}
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Visiting Note</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  If you would like to visit our office for a meeting, we recommend scheduling an appointment in advance so we can ensure the right team members are available for your conversation. Walk-ins are welcome during office hours but scheduled meetings receive priority.
                </p>
                <p className="text-xs text-gray-400 mt-3 italic">
                  For directions and navigation, search for Snail Integral Gaur City - 2 Noida Extension on Google Maps.
                </p>
              </div>
            </div>

            {/* CTA button/link */}
            <div>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium text-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_4px_12px_rgba(106,154,56,0.2)] hover:-translate-y-0.5"
              >
                Get Directions on Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
          >
            <iframe 
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
