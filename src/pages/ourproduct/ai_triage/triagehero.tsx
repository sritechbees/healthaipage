'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaHeartbeat, FaRobot, FaUserMd } from 'react-icons/fa';
import { useRef } from 'react';
import App_layout from '@/layout/app-alyout';
import Link from 'next/link';

export default function TriageHero() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 300], [0, 80]); // moves 80px down while scrolling

  return (
    <App_layout>
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/product/triage-ai.jpg" // 🔄 Replace with your background image
          alt="Healthcare Background"
          fill
          className="object-cover object-center brightness-95 mt-16"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -bottom-20 -left-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-50"
      />

      <div className="container mx-auto px-6 lg:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Accelerate Patient Triage with{' '}
            <span className="text-blue-400">AI-Powered Precision</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100 leading-relaxed max-w-xl">
            Our omni-channel AI triage chatbot listens, understands, and guides patients instantly—helping them
            determine urgent care, primary care, or self-care in seconds.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-yellow-300 font-medium"
            >
              <FaHeartbeat className="text-2xl" /> Faster Triage
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-cyan-300 font-medium"
            >
              <FaUserMd className="text-2xl" /> Smarter Care
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-pink-300 font-medium"
            >
              <FaRobot className="text-2xl" /> AI Precision
            </motion.div>
          </div>
<div>
    <Link href="/ourproduct/ai_triage/aipatientexperience">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-6 py-3 rounded-2xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600"
          >
            Explore More
          </motion.button>
          </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </App_layout>
  );
}
