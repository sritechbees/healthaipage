'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaMicroscope, FaRobot, FaLaptopMedical, FaUserMd, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'AI Diagnostics',
    description: 'Fast and accurate AI-powered diagnostic support for better patient outcomes.',
    icon: <FaMicroscope className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Virtual Health Assistants',
    description: '24/7 patient interaction using intelligent chatbots and voice interfaces.',
    icon: <FaRobot className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Remote Monitoring',
    description: 'Track vital signs and symptoms with AI-driven wearable technology.',
    icon: <FaHeartbeat className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Medical Imaging',
    description: 'Advanced image analysis to detect anomalies quickly and precisely.',
    icon: <FaLaptopMedical className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Clinical Decision Support',
    description: 'Assist doctors with data-driven treatment recommendations.',
    icon: <FaUserMd className="text-4xl text-yellow-400" />,
  },
  {
    title: 'Data Security',
    description: 'AI-based threat detection to ensure medical data privacy.',
    icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
  },
];

export default function Services() {
  return (
    <section className="relative py-24 mt-16 px-4 md:px-20 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/serviceshero.jpg" // 👈 Change to your actual image path
          alt="AI in Healthcare"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Healthcare Services</h2>
        <p className="text-gray-300 text-lg">
          Harness the power of AI to transform healthcare delivery and patient experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{service.title}</h3>
            <p className="text-gray-200 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
