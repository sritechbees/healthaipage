'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import {
  FaShoppingCart,
  FaLaptopMedical,
  FaChartLine,
  FaRobot,
  FaHandshake,
  FaFileMedical,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingCart className="text-5xl text-yellow-300" />,
    title: 'Retail & E-commerce',
    desc: 'Supplying medical & orthopedic products via online platforms and physical stores to reach every corner of the healthcare market.',
    image: '/about/Retail & E-commerce.jpg',
  },
  {
    icon: <FaLaptopMedical className="text-5xl text-blue-300" />,
    title: 'Digital Health Platforms',
    desc: 'Developing remote monitoring apps, patient engagement tools, and diagnostics software to connect care anytime, anywhere.',
    image: '/about/Digital Health Platforms.jpg',
  },
  {
    icon: <FaChartLine className="text-5xl text-green-300" />,
    title: 'Predictive Data Analytics',
    desc: 'Harnessing healthcare data to create AI-driven models that assist in accurate diagnosis and accelerate treatment planning.',
    image: '/about/Predictive Data Analytics.jpg',
  },
  {
    icon: <FaRobot className="text-5xl text-pink-300" />,
    title: 'AI-powered Patient Care',
    desc: 'Delivering intelligent, personalized, and proactive care through machine learning and automated clinical decision systems.',
    image: '/about/AI-powered Patient Care.jpg',
  },
  {
    icon: <FaHandshake className="text-5xl text-purple-300" />,
    title: 'Collaboration & Research',
    desc: 'Partnering with hospitals and institutions to co-develop and deploy advanced healthcare technologies and research solutions.',
    image: '/about/CollaborationResearch.jpg',
  },
  {
    icon: <FaFileMedical className="text-5xl text-red-300" />,
    title: 'Health Insights & Reporting',
    desc: 'Generating intelligent reports, dashboards, and insights from real-time health data to support doctors and decision-makers in clinical workflows.',
    image: '/about/Health Insights_Reporting.jpg',
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="relative py-20 px-6 md:px-16 text-white bg-gray-950 overflow-hidden"
      id="what-we-do"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        What We Do
      </h2>

      <div className="space-y-28">
        {features.map((item, index) => (
          <FeatureBlock key={index} item={item} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

// 🌀 Individual block with parallax effect
function FeatureBlock({ item, reverse }: { item: any; reverse: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.1 1', '0.9 0'], // start when enters, end when exits
  });

  // Parallax effect for image
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // moves slower
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Text content */}
      <div className="w-full md:w-1/2 space-y-4">
        <div>{item.icon}</div>
        <h3 className="text-2xl md:text-3xl font-semibold">{item.title}</h3>
        <p className="text-gray-300 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}
