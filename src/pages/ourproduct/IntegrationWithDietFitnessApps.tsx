'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAppleAlt } from 'react-icons/fa';

export default function IntegrationWithDietFitnessApps() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background/teambg.jpg" // 🔄 Replace with your background image
        alt="Background"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* Gradient Overlay to make text readable */}
      <div className="absolute inset-0 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Icon */}
          <div className="bg-white/40 p-6 rounded-full shadow-md inline-block mb-6 border border-white/40">
            <FaAppleAlt className="text-yellow-500 text-5xl" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Integration with Diet & Fitness Apps
            <span className="block w-20 h-1 bg-yellow-400 mt-3 rounded-full"></span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Track how meals and activities impact your glucose levels in real time.  
            Connect seamlessly with your favorite diet and fitness apps for a holistic view of your health.  
            Make smarter lifestyle choices and achieve better glucose control effortlessly.
          </p>
        </motion.div>

        {/* Right Image with Stylish Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group"
        >
          <Image
            src="/product/Integration with Diet & Fitness Apps.jpg" // 🔄 Replace with your foreground image
            alt="Diet & Fitness Integration"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-500" />
        </motion.div>
      </div>
    </section>
  );
}
