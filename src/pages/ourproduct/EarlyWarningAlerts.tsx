'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBell } from 'react-icons/fa';

export default function EarlyWarningAlerts() {
  return (
    <section className="relative w-full py-16 text-white">
      {/* Background image */}
      <Image
        src="/background/solutionbg.jpg" // <-- Replace with your background image path
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        
        {/* Foreground Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/cgm/early_alerts.jpg" // <-- Foreground image
            alt="Early Warning Alerts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full shadow-lg border border-white/20 w-fit mb-6">
            <FaBell className="text-yellow-400 text-5xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Early Warning Alerts
            <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Receive instant notifications for hypo- or hyperglycemia risks. 
            Our AI-powered monitoring system detects abnormal glucose trends early,
            enabling quick action and helping prevent dangerous health situations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
