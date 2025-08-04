'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaShoppingCart, FaLaptopMedical, FaChartLine, FaRobot, FaHandshake, FaFileMedical} from 'react-icons/fa';


  
   const features = [
  {
    icon: <FaShoppingCart className="text-4xl text-yellow-300" />,
    title: 'Retail & E-commerce',
    desc: 'Supplying medical & orthopedic products via online platforms and physical stores to reach every corner of the healthcare market.',
  },
  {
    icon: <FaLaptopMedical className="text-4xl text-blue-300" />,
    title: 'Digital Health Platforms',
    desc: 'Developing remote monitoring apps, patient engagement tools, and diagnostics software to connect care anytime, anywhere.',
  },
  {
    icon: <FaChartLine className="text-4xl text-green-300" />,
    title: 'Predictive Data Analytics',
    desc: 'Harnessing healthcare data to create AI-driven models that assist in accurate diagnosis and accelerate treatment planning.',
  },
  {
    icon: <FaRobot className="text-4xl text-pink-300" />,
    title: 'AI-powered Patient Care',
    desc: 'Delivering intelligent, personalized, and proactive care through machine learning and automated clinical decision systems.',
  },
  {
    icon: <FaHandshake className="text-4xl text-purple-300" />,
    title: 'Collaboration & Research',
    desc: 'Partnering with hospitals and institutions to co-develop and deploy advanced healthcare technologies and research solutions.',
  },
  {
    icon: <FaFileMedical className="text-4xl text-red-300" />,
    title: 'Health Insights & Reporting',
    desc: 'Generating intelligent reports, dashboards, and insights from real-time health data to support doctors and decision-makers in clinical workflows.',
  },
];


export default function WhatWeDo() {
  return (
    <section className="relative py-20 px-6 md:px-16  text-white overflow-hidden" id="what-we-do">
      {/* Background image with overlay */}
      <Image
        src="/background/whatwedo.jpg" // Replace with your background
        alt="Healthcare Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
      />
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-yellow-300/20 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
