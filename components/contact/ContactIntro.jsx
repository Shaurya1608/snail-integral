"use client";

import { motion } from 'framer-motion';

export default function ContactIntro() {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
        >
          How to Reach Us
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
        >
          We have three points of contact depending on the nature of your enquiry. For new business discussions and strategic consultations, speak directly with our Founder. For digital marketing and campaign related conversations, connect with our Digital Marketing lead. For general enquiries, project support, and business coordination, our Business Support team is your first point of contact. All contact details are listed below.
        </motion.p>
      </div>
    </section>
  );
}
