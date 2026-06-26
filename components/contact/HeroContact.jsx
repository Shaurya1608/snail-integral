"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroContact() {
  return (
    <section className="relative w-full bg-[#f9fbf7] text-gray-900 pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 overflow-hidden">
      {/* Editorial grid lines background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Blurred ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#8ec44a]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6"
        >
          Let Us Start a Conversation
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
        >
          Whether you have a specific brief, a business challenge you want to talk through, or simply want to understand how Snail Integral can help your organization communicate better and grow faster, we are ready to hear from you. Reach out and someone from our team will respond within one business day.
        </motion.p>
      </div>
    </section>
  );
}
