'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHospital, FaUserInjured, FaDatabase, FaTabletAlt } from 'react-icons/fa';

const stats = [
  {
    label: 'Hospitals Served',
    icon: <FaHospital className="text-5xl text-blue-500 drop-shadow-lg" />,
    value: 150,
    suffix: '+',
  },
  {
    label: 'Patients Impacted',
    icon: <FaUserInjured className="text-5xl text-green-500 drop-shadow-lg" />,
    value: 2000000,
    suffix: '+',
  },
  {
    label: 'Medical Data Analyzed',
    icon: <FaDatabase className="text-5xl text-purple-500 drop-shadow-lg" />,
    value: 1500000000,
    suffix: '+',
  },
  {
    label: 'Devices Deployed',
    icon: <FaTabletAlt className="text-5xl text-red-500 drop-shadow-lg" />,
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
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-cubic' });

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const increment = Math.ceil(stats[i].value / 50);
          return val < stats[i].value ? Math.min(val + increment, stats[i].value) : val;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-100 py-24 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 relative z-10"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          Our Impact
        </span>
      </h2>

      {/* Stat Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-8 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl duration-500"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

            <div className="mb-4 transform group-hover:scale-110 transition duration-500">
              {item.icon}
            </div>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">
              {formatNumber(counts[index])}
              {item.suffix}
            </div>
            <div className="text-center text-gray-600 font-medium">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
