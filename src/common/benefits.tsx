'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Faster & Accurate Diagnosis',
    description:
      'AI enhances diagnostic precision, reducing human error and speeding up the identification of illnesses.',
  },
  {
    title: 'Personalized Treatment Plans',
    description:
      'Health AI enables tailored therapies by analyzing patient data for better treatment outcomes.',
  },
  {
    title: 'Remote Patient Monitoring',
    description:
      'Continuous monitoring through smart devices ensures real-time health tracking and alerts.',
  },
  {
    title: 'Predictive Health Analytics',
    description:
      'Early detection of potential health issues using predictive models and big data.',
  },
  {
    title: 'AI-assisted Clinical Decisions',
    description:
      'Supports doctors with data-driven recommendations for diagnosis and treatment.',
  },
  {
    title: 'Enhanced Patient Engagement',
    description:
      'AI-powered apps and bots improve patient interaction, education, and satisfaction.',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 px-4 md:px-20 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/benifits.jpg" // ✅ Rename your uploaded image as `public/background/benefits.jpg`
          alt="Health AI Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Section Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits of Health AI</h2>
        <p className="text-gray-300 text-lg">
          Discover how Artificial Intelligence is reshaping modern healthcare for better efficiency and outcomes.
        </p>
      </div>

      {/* Benefit List */}
      <div className="max-w-5xl mx-auto space-y-10">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Colored Bar + Title */}
            <div className="min-w-[250px]">
              <div className="h-3 w-24 bg-gradient-to-r from-indigo-300 to-blue-500 mb-2" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            {/* Description */}
            <p className="text-gray-300 max-w-sm text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
