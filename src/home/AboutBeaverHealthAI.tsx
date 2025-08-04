'use client';

import { motion } from 'framer-motion';
import { FaStethoscope, FaHeartbeat, FaChartLine } from 'react-icons/fa';

export default function AboutBeaverHealthAI() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-10 lg:px-20 text-white overflow-hidden">
      {/* 🔵 Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background/teambg.jpg')] bg-cover bg-center opacity-100"></div>
      </div>

      {/* 🔵 Foreground Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-500">BeaverHealthAI</span>
          </h1>
          <p className="text-lg md:text-xl text-white">
            Empowering Healthcare through AI, Smart Platforms & Medical Innovation.
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-5xl mx-auto mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-md md:text-lg text-white leading-relaxed">
            BeaverHealthAI is on a mission to transform traditional healthcare into a
            smart, data-driven ecosystem. From medical product distribution to intelligent
            platforms and AI-powered decision-making, we deliver the future of healthcare—today.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {[
            {
              title: 'Medical Products Distribution',
              desc: 'We supply essential medical equipment, smart prosthetics, and assistive devices to hospitals, clinics, and consumers through intelligent logistics.',
              icon: <FaStethoscope className="text-4xl text-blue-600" />,
              delay: 0.2,
              bg: "/home/vision.jpg",
            },
            {
              title: 'Digital Health Platforms',
              desc: 'Our platforms integrate remote monitoring, AI-based triaging, and patient engagement tools that improve care accessibility and reduce hospital burden.',
              icon: <FaHeartbeat className="text-4xl text-pink-500" />,
              delay: 0.4,
              bg: "/home/services1.jpg",
            },
            {
              title: 'Data Analytics & AI-driven Care',
              desc: 'We harness real-time data and predictive analytics to support clinical decisions, early diagnoses, and personalized treatment strategies.',
              icon: <FaChartLine className="text-4xl text-purple-600" />,
              delay: 0.6,
              bg: "/home/vision.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group p-8 bg-gradient-to-br from-white to-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              {/* Card Hover Background */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"
                style={{ backgroundImage: `url(${item.bg})` }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
