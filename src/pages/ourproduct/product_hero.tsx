'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductHeroModern() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://www.shutterstock.com/shutterstock/videos/3393586295/preview/stock-footage-nurse-applying-a-continuous-glucose-monitor-sensor-on-arm-of-a-diabetic-teenager-cgm-device-making.mp4" type="video/mp4" /> {/* Replace with your video */}
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-black/80 z-0"></div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Empowering Healthcare with <span className="text-yellow-400">AI Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          Delivering advanced AI-powered medical solutions like <strong>Continuous Glucose Monitoring (CGM)</strong> 
          and <strong>Smart Health ECG</strong> to revolutionize patient care and diagnostic accuracy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/ourproduct/realtimeglucosetracking"
            className="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            Explore CGM
          </a>
          <a
            href="#ecg"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Explore Smart ECG
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
