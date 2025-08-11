'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHandsHelping } from 'react-icons/fa';

export default function ImprovedDiabetesManagement() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      
  <Image
    src="/cgm/doctor_performing1.jpg"
    alt="Improved Diabetes Management"
    fill
    className="" // Show full image
    priority
  />



      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>


      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 px-6 md:px-16 text-white"
        >
          {/* Icon */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full shadow-lg border border-white/20 inline-block mb-6">
            <FaHandsHelping className="text-yellow-400 text-6xl" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Improved Diabetes Management
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-100">
            Stay informed and in control, leading to better treatment plans and lifestyle choices.
            Our smart monitoring systems empower you to track progress, identify patterns,
            and work closely with healthcare providers for optimal diabetes management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
