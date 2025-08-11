'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAppleAlt } from 'react-icons/fa'; // Diet & fitness icon

export default function IntegrationWithDietFitnessApps() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background/teambg.jpg" // <-- Replace with your diet & fitness image
        alt="Integration with Diet and Fitness Apps"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content (Left side) */}
      <div className="absolute inset-0 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 px-6 md:px-16 text-white text-left"
        >
          {/* Icon */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full shadow-lg border border-white/20 inline-block mb-6">
            <FaAppleAlt className="text-yellow-400 text-6xl" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Integration with Diet & Fitness Apps
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            Track how meals and activities impact your glucose levels in real time.
            Connect with your favorite diet and fitness apps for a holistic view of
            your health, enabling smarter lifestyle choices and better glucose control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
