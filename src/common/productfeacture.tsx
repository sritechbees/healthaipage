'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBrain, FaCloud, FaLink, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: 'AI, Machine Learning, Data Science',
    icon: <FaBrain className="text-5xl text-blue-500" />,
    desc: 'Empowering predictions, automation, and insights across the health spectrum.',
  },
  {
    title: 'Secure Cloud Infrastructure',
    icon: <FaCloud className="text-5xl text-green-500" />,
    desc: 'Scalable, compliant, and secure data handling via cloud-native infrastructure.',
  },
  {
    title: 'Interoperable APIs for EMR/EHR',
    icon: <FaLink className="text-5xl text-purple-500" />,
    desc: 'Seamlessly integrates with existing systems for unified healthcare workflows.',
  },
  {
    title: 'Advanced Security & Compliance',
    icon: <FaShieldAlt className="text-5xl text-red-500" />,
    desc: 'HIPAA, GDPR compliant systems ensuring data privacy and trust.',
  },
  {
    title: 'Mobile-First Platforms',
    icon: <FaMobileAlt className="text-5xl text-pink-500" />,
    desc: 'Healthcare solutions designed for accessibility anytime, anywhere.',
  },
  {
    title: 'Analytics & Visualization',
    icon: <FaChartLine className="text-5xl text-yellow-500" />,
    desc: 'Transforming raw health data into meaningful insights and trends.',
  },
];

export default function ProductFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Our <span className="text-blue-500">Product Features</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-500 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
