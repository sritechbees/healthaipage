'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';

export default function MinimalDisruption() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/teambg.jpg" // replace with your background image
          alt="Subtle background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
       

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent -z-10"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        {/* Right visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative h-[300px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/cgm/minimal.jpg" // replace with your right-side image (sensor lifestyle)
            alt="Discreet wearable sensor"
            fill
            className="object-cover"
            priority
          />

          {/* optional subtle badge on top of image */}
         
        </motion.div>

        {/* Left text column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-white"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg">
              <FaRegClock size={24} className="text-yellow-300" />
            </div>
            <span className="text-sm uppercase tracking-wider text-white/80">Minimal Disruption</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wear discreet sensors that fit comfortably
            <span className="block w-16 h-1 bg-yellow-400 mt-3 rounded-full"></span>
          </h2>

          <p className="text-lg text-white/90 leading-relaxed">
            Wear discreet sensors that fit comfortably and work around the clock — continuous monitoring
            with minimal interference in your daily life.
          </p>
        </motion.div>

            </div>
    </section>
  );
}
