'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 text-white overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/background/teambg.jpg" // use a subtle medical/AI-themed background
        alt="CTA Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0  z-0" />

      {/* CTA content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Explore Our Vision for <span className="text-blue-400">Smart Healthcare</span>
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
