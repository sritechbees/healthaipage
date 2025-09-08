'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BetterOutcomes() {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* 🔵 Animated Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/product/Better Long-Term Health Outcomes.jpg" // 🔄 replace with your image
          alt="Long Term Health"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/50" />
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-extrabold mb-6"
        >
          Better Long-Term Health Outcomes
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Achieving lasting wellness through{" "}
          <span className="text-yellow-400 font-semibold">preventive care</span>,{" "}
          <span className="text-yellow-400 font-semibold">continuous monitoring</span>, 
          and{" "}
          <span className="text-yellow-400 font-semibold">AI-driven insights</span>.  
          Our goal is to reduce risks, build resilience, and improve quality of life for every patient.
        </motion.p>

        {/* Related Images Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { img: '/product/Preventive Care.jpg', alt: 'Preventive Care' },
            { img: '/product/Remote Monitoring.jpg', alt: 'Remote Monitoring' },
            { img: '/product/AI in Healthcare.jpg', alt: 'AI in Healthcare' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative w-64 h-40 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition">
                {item.alt}
              </div>
            </motion.div>
          ))}
          
        </div>
        
      </div>
     
    </section>
  );
}
