'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBrain } from 'react-icons/fa';

export default function AIPoweredInsights() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image (left side) */}
      <Image
        src="/cgm/ai1.jpg" // <-- Your AI image path
        alt="AI Powered Insights"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>

      {/* Content Wrapper (right side) */}
      <div className="absolute inset-0 flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 px-6 md:px-16 text-white text-right"
        >
          {/* Icon */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full shadow-lg border border-white/20 inline-block mb-6">
            <FaBrain className="text-yellow-400 text-6xl" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Insights
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full ml-auto"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            Get predictive alerts powered by Artificial Intelligence to help prevent
            sudden spikes or drops in glucose levels. Our advanced algorithms analyze
            trends and provide early warnings, enabling timely action and better
            diabetes management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
