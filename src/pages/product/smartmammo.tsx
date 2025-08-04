'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  FaBrain,
  FaMicroscope,
  FaHeartbeat,
  FaChartLine,
  FaRegLightbulb,
  FaShieldAlt
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App_layout from '@/layout/app-alyout';

export default function SmartMammoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const highlights = [
    {
      icon: <FaBrain className="text-pink-500 text-3xl" />,
      title: 'AI-Powered Detection',
      desc: 'Utilizes deep learning to identify early signs of breast cancer with improved accuracy and consistency.',
    },
    {
      icon: <FaMicroscope className="text-purple-500 text-3xl" />,
      title: 'Precision Image Analysis',
      desc: 'Processes mammogram images using pixel-level attention for reliable clinical interpretations.',
    },
    {
      icon: <FaHeartbeat className="text-red-400 text-3xl" />,
      title: 'Seamless Clinical Integration',
      desc: 'Integrates with existing PACS/RIS workflows, enhancing diagnostic productivity without disruption.',
    },
    {
      icon: <FaChartLine className="text-blue-400 text-3xl" />,
      title: 'Real-time Insights',
      desc: 'Delivers immediate AI-supported reports and visual cues to aid rapid decision-making.',
    },
    {
      icon: <FaRegLightbulb className="text-yellow-400 text-3xl" />,
      title: 'Smart Learning Engine',
      desc: 'Continuously improves through case-based training and radiologist feedback loops.',
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      title: 'Secure Data Handling',
      desc: 'Ensures patient data confidentiality and HIPAA-compliant image processing protocols.',
    },
  ];

  return (
    <App_layout>
      <section className="relative bg-gradient-to-br from-[#ffe6f0] via-white to-[#e0f0ff] py-20 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute w-[300px] h-[300px] top-0 left-0 bg-pink-200 rounded-full blur-[140px] opacity-30 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bottom-0 right-0 bg-blue-200 rounded-full blur-[140px] opacity-20 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
            data-aos="zoom-in"
          >
            <span className="text-pink-500">SmartMammo™</span> – AI in Breast Cancer Detection
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Topics List */}
            <div className="space-y-10">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="p-3 rounded-full bg-white shadow-md">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-700">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Illustration Image */}
            <div data-aos="fade-left">
              <div className="rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/product/smartmammo.jpg"
                  alt="AI Breast Cancer Detection"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </App_layout>
  );
}
