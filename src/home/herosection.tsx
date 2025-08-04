'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full h-screen mt-16 flex items-center justify-center overflow-hidden bg-black">
      {/* 🎞️ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-transparent z-10" />

      {/* 💬 Foreground Content */}
      <div
        className="relative z-20 w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
       <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug sm:leading-tight"
>
  Empower Your Health with
  <br />
  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block mt-2">
    <Typewriter
      words={['AI Intelligence', 'Smart Diagnosis', 'Real-Time Insights']}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.h1>


        <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Transforming healthcare with real-time AI diagnosis, smart health tracking, and personalized medical insights — for everyone.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 text-sm sm:text-base rounded-full shadow-md transition duration-300"
          >
            <Link href="#contact">Get Started</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-300 hover:border-blue-400 text-blue-300 hover:text-blue-400 px-6 py-3 text-sm sm:text-base rounded-full transition duration-300"
          >
            <Link href="#product">Explore Product</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
