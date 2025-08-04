'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHospital, FaUserInjured, FaDatabase, FaTabletAlt } from 'react-icons/fa';

const stats = [
  {
    label: 'Hospitals Served',
    icon: <FaHospital className="text-4xl text-blue-500" />,
    value: 150,
    suffix: '+',
  },
  {
    label: 'Patients Impacted',
    icon: <FaUserInjured className="text-4xl text-green-500" />,
    value: 2000000,
    suffix: '+',
  },
  {
    label: 'Medical Data Analyzed',
    icon: <FaDatabase className="text-4xl text-purple-500" />,
    value: 1500000000,
    suffix: '+',
  },
  {
    label: 'Devices Deployed',
    icon: <FaTabletAlt className="text-4xl text-red-500" />,
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
    AOS.init({ once: true });

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const increment = Math.ceil(stats[i].value / 40); // speed
          return val < stats[i].value ? Math.min(val + increment, stats[i].value) : val;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.41C160.34,96.39,0,64.64,0,64.64V0H1200V27.35C1034.6,87.42,817.56,0.32,321.39,56.41Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_1px,_transparent_1px),_radial-gradient(circle_1px,_#cbd5e1_1px)] [background-size:20px_20px] opacity-20" />
      </div>

      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center text-gray-800 mb-16 relative z-10"
      >
        <span className="border-b-4 border-yellow-400 pb-2">Our Impact</span>
      </h2>

      {/* Stat Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {formatNumber(counts[index])}
              {item.suffix}
            </div>
            <div className="text-center text-gray-600 text-sm">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.41C160.34,96.39,0,64.64,0,64.64V0H1200V27.35C1034.6,87.42,817.56,0.32,321.39,56.41Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
