'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaUserInjured, FaDatabase, FaTabletAlt } from 'react-icons/fa';

const stats = [
  {
    label: 'Hospitals Served',
    icon: <FaHospital className="text-5xl text-blue-500" />,
    value: 150,
    suffix: '+',
  },
  {
    label: 'Patients Impacted',
    icon: <FaUserInjured className="text-5xl text-green-500" />,
    value: 2000000,
    suffix: '+',
  },
  {
    label: 'Medical Data Analyzed',
    icon: <FaDatabase className="text-5xl text-purple-500" />,
    value: 1500000000,
    suffix: '+',
  },
  {
    label: 'Devices Deployed',
    icon: <FaTabletAlt className="text-5xl text-red-500" />,
    value: 12000,
    suffix: '+',
  },
];

function formatNumber(value: number): string {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toString();
}

export default function ImpactStatistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const increment = Math.ceil(stats[i].value / 50); // speed
          return val < stats[i].value ? Math.min(val + increment, stats[i].value) : val;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-100 via-white to-blue-50 py-24 px-6 md:px-12 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,_transparent_1px)] [background-size:24px_24px]" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-gray-900 mb-16 relative z-10"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Impact
        </span>
      </motion.h2>

      {/* Stat Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-2xl transition"
          >
            <div className="mb-6 flex justify-center">{item.icon}</div>
            <div className="text-4xl font-extrabold text-gray-900 mb-2 relative">
              {/* Shimmer effect */}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                {formatNumber(counts[index])}
                {item.suffix}
              </span>
            </div>
            <div className="text-gray-700 font-medium">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
