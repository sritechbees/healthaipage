'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChartLine } from 'react-icons/fa';

export default function DataDrivenDecisions() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background/bghand.jpg" // <-- Background image for section
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          {/* Icon */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-4 shadow-lg inline-block">
            <FaChartLine size={36} className="text-yellow-300" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Data-Driven Decisions
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6 text-white/90">
            Use detailed glucose trends and reports to work with healthcare providers on optimized care
            plans, helping you maintain stable glucose levels and make smarter health decisions.
          </p>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/cgm/Data_Driven.jpg" // <-- Foreground image
            alt="Data-Driven Insights"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
