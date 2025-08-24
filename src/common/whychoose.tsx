'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Trusted AI & ML Technology',
    image: '/product/sabari.jpeg',
  },
  {
    title: 'End-to-End Healthtech Solutions',
    image: '/home/hero2.jpg',
  },
  {
    title: 'Seamless Integration with Hospitals',
    image: '/home/hero2.jpg',
  },
  {
    title: 'Regulatory Compliant Products',
    image: '/home/hero2.jpg',
  },
  {
    title: 'Expert Advisory & Research Team',
    image: '/home/vision.jpg',
  },
];

export default function WhyChooseBeaverHealthAI() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background/solutionbg.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-black/70 to-blue-900/70" />
      </div>

      {/* Left Side */}
      <div
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 backdrop-blur-md"
        style={{
          clipPath: 'polygon(0 0, 92% 0%, 78% 100%, 0% 100%)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-10"
        >
          Why Choose <span className="text-blue-400">BeaverHealthAI?</span>
        </motion.h2>

        <div className="flex flex-col gap-5">
          {features.map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(idx)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative text-left p-4 rounded-xl border transition-all duration-300 group overflow-hidden ${
                idx === activeIndex
                  ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 border-blue-400 text-white font-semibold shadow-lg shadow-blue-500/40'
                  : 'bg-white/10 border-gray-500/30 text-gray-200 hover:bg-white/20'
              }`}
            >
              <span className="relative z-10">{item.title}</span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Side (Image + Overlay) */}
      <div className="w-full lg:w-1/2 relative h-[350px] md:h-[550px] lg:h-auto">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 "
        >
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            fill
            className="object-cover rounded-none"
          />
          {/* AI Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent mix-blend-overlay" />
        </motion.div>

        {/* Floating AI particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/70"
              initial={{
                x: Math.random() * 600,
                y: Math.random() * 600,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Title on image */}
        <motion.div
          key={`title-${activeIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-10 left-8 text-white text-2xl md:text-3xl font-bold drop-shadow-xl"
        >
          {features[activeIndex].title}
        </motion.div>
      </div>
    </section>
  );
}
