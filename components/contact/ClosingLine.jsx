"use client";

import { motion } from 'framer-motion';

export default function ClosingLine() {
  return (
    <section className="w-full bg-[#f9fbf7] text-gray-900 py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-950 mb-6 italic"
        >
          We Look Forward to Hearing From You
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light"
        >
          Every significant brand partnership starts with a single conversation. We are ready for yours whenever you are.
        </motion.p>
      </div>
    </section>
  );
}
