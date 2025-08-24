'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WearableECGDevices() {
  return (
    <section className="relative w-full py-24 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/product/Wearable ECG Devices.jpg" // <-- replace with your background image
          alt="Background ECG"
          fill
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Wearable ECG Devices
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Compact, user-friendly devices for <span className="text-yellow-400 font-semibold">24/7 heart monitoring</span> 
            seamlessly integrated with mobile health apps. Stay connected with your 
            heart health anywhere, anytime.
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Glow Effect */}
          <div className="absolute w-[400px] h-[400px] bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Device Image */}
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: [40, -20, 40] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/product/Wearable ECG Devices2.jpg" // <-- replace with your wearable ECG device image
              alt="Wearable ECG Device"
              width={280}
              height={280}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Mobile App Image (floating side) */}
          <motion.div
            initial={{ y: -40 }}
            animate={{ y: [-40, 20, -40] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 z-20"
          >
            <Image
              src="/product/Wearable ECG Devices mobile.jpg" // <-- replace with your mobile app image
              alt="ECG Mobile App"
              width={180}
              height={320}
              className="rounded-xl shadow-lg border border-white/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
