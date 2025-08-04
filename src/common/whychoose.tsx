'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Trusted AI & ML Technology',
    image: '/home/hero2.jpg',
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
    <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row ">
      {/* Left Side (Curved Background with Titles) */}
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background/solutionbg.jpg')] bg-cover bg-center opacity-100"></div>
      </div>

      <div
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 bg-white"
        style={{
          clipPath: 'polygon(0 0, 90% 0%, 75% 100%, 0% 100%)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
          Why Choose BeaverHealthAI?
        </h2>

        <div className="flex flex-col gap-4">
          {features.map((item, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 rounded-lg border transition duration-300 ${
                idx === activeIndex
                  ? 'bg-blue-100 border-blue-600 text-blue-800 font-semibold shadow'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px] lg:h-auto">
        <Image
          src={features[activeIndex].image}
          alt={features[activeIndex].title}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-8 left-8 text-white text-xl font-semibold"
        >
          {features[activeIndex].title}
        </motion.div>
      </div>
    </section>
  );
}
