// components/AppFeatures.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaBullseye, FaArrowUp, FaClock, FaBars, FaUtensils } from 'react-icons/fa';

const features = [
  { icon: <FaChartLine />, title: 'Current Glucose Reading', desc: 'Live data shown on screen' },
  { icon: <FaArrowUp />, title: 'Trend Arrow', desc: 'Shows your glucose movement direction' },
  { icon: <FaClock />, title: 'Time in Range', desc: 'Shows time spent in healthy range' },
  { icon: <FaBars />, title: 'Hours Shown', desc: 'Graph divided into hours (3/6/12/24)' },
  { icon: <FaBullseye />, title: 'Target Range', desc: 'Personalized glucose range' },
  { icon: <FaUtensils />, title: 'Add Food & Events', desc: 'Track meals and activities' },
];

export default function AppFeatures() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#fbead1] to-[#fff]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1d2b50] mb-4">
          Features of the <span className="text-orange-500">App</span>
        </h2>
        <p className="text-gray-600 mb-12">Explore how the app helps you monitor and manage your glucose levels</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={index % 3 === 0 ? 'zoom-in' : index % 3 === 1 ? 'fade-up' : 'fade-down'}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1d2b50] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
