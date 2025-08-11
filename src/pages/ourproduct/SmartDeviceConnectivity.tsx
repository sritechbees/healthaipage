'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMobileAlt } from 'react-icons/fa';

export default function SmartDeviceConnectivity() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cgm/smartdevice.jpg" // <-- Replace with your smart device image
        alt="Smart Device Connectivity"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 px-6 md:px-16 text-gray-900"
        >
         
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Smart Device Connectivity
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6 text-gray-900">
            Sync seamlessly with smartphones, wearables, and health apps for easy access and sharing.
            Stay connected to your health data anytime, anywhere, ensuring you and your healthcare
            providers have the information needed for smarter decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
