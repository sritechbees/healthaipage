'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHospitalUser, FaHeartbeat, FaRobot } from 'react-icons/fa';

export default function AboutBeaverHealthAI_Dark() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gray-900 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            BeaverHealthAI
          </span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          AI-Powered Healthcare • Smart Platforms • Predictive Data
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: 'Smart Medical Supply',
            desc: 'AI-driven logistics delivering critical medical devices, prosthetics, and healthcare tools worldwide.',
            icon: <FaHospitalUser className="text-5xl text-blue-400 drop-shadow-glow" />,
            aos: 'flip-left',
            bg: "/home/Medical_Supply.jpg",
          },
          {
            title: 'AI Health Platforms',
            desc: 'Virtual monitoring, AI triaging, and patient engagement tools that redefine hospital-free healthcare.',
            icon: <FaHeartbeat className="text-5xl text-pink-400 drop-shadow-glow" />,
            aos: 'flip-left',
            bg: "/home/Health_Platforms.jpg",
          },
          {
            title: 'Predictive Intelligence',
            desc: 'Harnessing real-time data & machine learning for faster diagnoses and precision treatment plans.',
            icon: <FaRobot className="text-5xl text-purple-400 drop-shadow-glow" />,
            aos: 'flip-left',
            bg: "/home/Predictive_Intelligence.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            data-aos-delay={index * 200}
            className="relative group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500"
          >
            {/* Hover Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url(${item.bg})` }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white text-center mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white text-center leading-relaxed">{item.desc}</p>
            </div>

            {/* Neon underline effect */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:w-3/4 transition-all duration-500 z-10"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
