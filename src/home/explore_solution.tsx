'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaMicroscope, FaLaptopMedical, FaRobot, FaChartLine } from 'react-icons/fa';

const solutions = [
  {
    title: 'Remote Patient Monitoring',
    icon: <FaHeartbeat size={30} />,
    description: 'Track vital signs and patient health in real-time using AI-driven devices.',
    color: 'bg-[#d1f1ff]',
  },
  {
    title: 'Medical Imaging Analysis',
    icon: <FaMicroscope size={30} />,
    description: 'AI analyzes X-rays, MRIs, and CT scans for accurate diagnostics.',
    color: 'bg-[#fff1cc]',
  },
  {
    title: 'Virtual Health Assistant',
    icon: <FaRobot size={30} />,
    description: 'AI chatbots assist patients 24/7 for health advice and bookings.',
    color: 'bg-[#e8e4ff]',
  },
  {
    title: 'Smart Health Portals',
    icon: <FaLaptopMedical size={30} />,
    description: 'AI dashboards for personalized healthcare data insights.',
    color: 'bg-[#d9f9e6]',
  },
  {
    title: 'Health Data & Predictive Analytics',
    icon: <FaChartLine size={30} />,
    description: 'Gain real-time insights and forecasting using advanced data analysis.',
    color: 'bg-[#fcd6f7]',
  },
  {
    title: 'AI-Powered Clinical Decision Support',
    icon: <FaRobot size={30} />,
    description: 'Support doctors with AI-driven treatment recommendations and alerts.',
    color: 'bg-[#ffe4d4]',
  },
];

const ExploreSolutions = () => {
  return (
    <section className="relative py-20 px-4 sm:px-10 md:px-20 overflow-hidden snap-y snap-mandatory scroll-smooth bg-[#0f172a] text-white">
      {/* Particle Background (placeholder, replace with real canvas if needed) */}
      <div className="absolute inset-0 z-0 bg-[url('/background/solutionbg.jpg')] bg-cover bg-center opacity-100"></div>
 

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#5c87fc] inline-block relative">
          Explore Our Solutions
          <span className="block h-[3px] w-1/2 bg-[#5c87fc] mx-auto mt-2 animate-pulse rounded-full" />
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mt-4">
          AI-powered tools transforming patient care and diagnostics across digital platforms.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="w-72 h-60 [perspective:1000px] group snap-center"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className={`absolute inset-0 rounded-xl shadow-xl flex flex-col items-center justify-center text-center p-4 ${item.color} text-[#1d2b50] [backface-visibility:hidden]`}>
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rounded-xl shadow-xl flex items-center justify-center text-white bg-[#4aa1e4] px-4 text-sm transform rotate-y-180 [backface-visibility:hidden]">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSolutions;
