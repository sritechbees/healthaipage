'use client';

import App_layout from '@/layout/app-alyout';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import HeroSection from './herosection';
import KeyFeatures from './keyfeatures';
import WhatWeDo from './whatwedo';

const sections = [
   {
      title: "Our Story",
      text: "Founded with a vision to revolutionize healthcare through AI, our journey began with a small team passionate about technology and human well-being.",
      image: "/about/our-story.jpg", // 🔹 Replace with your image
      accent: "from-yellow-400 to-orange-500",
      extra: [
        "We started as a research-driven initiative, exploring how AI could solve real healthcare challenges.",
        "Over the years, we partnered with hospitals, diagnostic centers, and startups to expand our solutions.",
        "Today, our ecosystem brings together AI, healthcare professionals, and patients for smarter, faster care."
      ],
    },
  {
    title: 'Our Vision',
    text: 'To create a smarter and healthier future by bridging AI technology with healthcare, ensuring accessibility, affordability, and excellence for every individual.',
    extra: [
      "We aim to democratize healthcare innovation.",
      "Our solutions focus on community impact.",
      "Long-term sustainability is at the core of our vision.",
    ],
    image: '/home/vision.jpg',
    accent: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Our Mission',
    text: 'To revolutionize healthcare through AI-driven platforms, smart devices, and intelligent insights — making care proactive, predictive, and deeply personalized.',
    extra: [
      "We focus on AI-powered diagnostics.",
      "Personalization is our top priority.",
      "Every solution is data-driven for accuracy.",
    ],
    image: '/home/AI-Powered Innovation.jpg',
    accent: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'AI-Powered Innovation',
    text: 'We leverage machine learning, diagnostic tools, and next-gen platforms to enable real-time decisions, empower clinicians, and transform patient outcomes worldwide.',
    extra: [
      "Innovation drives our global partnerships.",
      "We build scalable AI solutions.",
      "Transforming healthcare accessibility worldwide.",
    ],
    image: '/about/AI-Powered Innovation.jpg',
    accent: 'from-pink-500 to-red-600',
  },
];

export default function AboutUs() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <App_layout>
      <HeroSection/>
      {/* Sections */}
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="relative z-20 space-y-24 max-w-7xl mx-auto">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Image block */}
            <div className="relative group md:w-1/2 w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={sec.image}
                alt={sec.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/10 opacity-80 group-hover:opacity-60 transition-all" />
            </div>

            {/* Text block */}
            <motion.div
              className="md:w-1/2 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${sec.accent} mb-4`}
              >
                {sec.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {sec.text}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full hover:shadow-lg transition-all"
              >
                {expanded === i ? "Show Less" : "Learn More"}
                <FaArrowRight />
              </button>

              {/* Extra lines reveal */}
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    className="mt-4 space-y-2 text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    {sec.extra.map((line, idx) => (
                      <p key={idx} className="text-base leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>

      <KeyFeatures/>
      <WhatWeDo/>
    </App_layout>
  );
}
