'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHospital, FaUserInjured, FaDatabase, FaTabletAlt } from 'react-icons/fa';

const stats = [
  {
    label: 'Hospitals Served',
    icon: <FaHospital className="text-5xl text-blue-500 drop-shadow-md" />,
    value: 150,
    suffix: '+',
  },
  {
    label: 'Patients Impacted',
    icon: <FaUserInjured className="text-5xl text-green-500 drop-shadow-md" />,
    value: 2000000,
    suffix: '+',
  },
  {
    label: 'Medical Data Analyzed',
    icon: <FaDatabase className="text-5xl text-purple-500 drop-shadow-md" />,
    value: 1500000000,
    suffix: '+',
  },
  {
    label: 'Devices Deployed',
    icon: <FaTabletAlt className="text-5xl text-red-500 drop-shadow-md" />,
    value: 12000,
    suffix: '+',
  },
];

function formatNumber(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
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
          const increment = Math.ceil(stats[i].value / 60);
          return val < stats[i].value ? Math.min(val + increment, stats[i].value) : val;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-white/90 backdrop-blur-sm overflow-hidden">
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-20 relative z-10"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient">
          Our Global Impact
        </span>
      </h2>

      {/* Stat Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="relative group bg-white shadow-lg rounded-3xl p-10 flex flex-col items-center transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-6 transform group-hover:scale-110 transition duration-500">
              {item.icon}
            </div>
            <div className="text-4xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">
              {formatNumber(counts[index])}
              {item.suffix}
            </div>
            <div className="text-center text-gray-600 font-medium">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Gradient Animation (for heading text only) */}
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
