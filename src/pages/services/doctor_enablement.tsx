'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaUserMd, FaHeartbeat, FaLaptopMedical, FaCloud, FaChartLine, FaMicroscope } from 'react-icons/fa';
import type { Engine } from 'tsparticles-engine'; // ✅ Import correct type

const services = [
  {
    title: 'Doctor Enablement',
    desc: 'Streamline clinical workflows with EMR tools and decision support.',
    icon: FaUserMd,
  },
  {
    title: 'Remote Monitoring',
    desc: 'Extend care beyond hospital walls using IoT and AI-powered vitals tracking.',
    icon: FaHeartbeat,
  },
  {
    title: 'Digital Health Records',
    desc: 'Enable secure data sharing and real-time access for doctors and hospitals.',
    icon: FaLaptopMedical,
  },
  {
    title: 'Predictive Analytics',
    desc: 'Leverage AI models to forecast patient outcomes and treatment responses.',
    icon: FaChartLine,
  },
  {
    title: 'Patient Engagement',
    desc: 'Enhance communication and personalized care via smart platforms.',
    icon: FaCloud,
  },
  {
    title: 'Smart Diagnostics',
    desc: 'Accelerate diagnosis accuracy using AI-enhanced imaging and data analysis.',
    icon: FaMicroscope,
  },
];

export default function HealthAIServices() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative px-6 py-24 bg-gray-100 overflow-hidden min-h-screen">
      {/* Background Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#f3f4f6' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#6366f1' },
            links: { enable: true, color: '#6366f1', distance: 100 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">AI-Powered Health Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Transforming patient care through AI innovation and intelligent diagnostics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-indigo-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
