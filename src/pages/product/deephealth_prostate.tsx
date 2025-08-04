'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMicroscope, FaProcedures, FaCube, FaConnectdevelop, FaRobot } from 'react-icons/fa';
import App_layout from '@/layout/app-alyout';

export default function DeepHealthProstate() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: 'AI-guided Biopsy Targeting',
      desc: 'Supports fusion biopsy workflows by accurately highlighting regions of interest in the prostate gland.',
      icon: <FaMicroscope className="text-blue-500 text-3xl" />,
    },
    {
      title: 'Real-time Fusion Compatibility',
      desc: 'Seamlessly integrates with MRI-TRUS fusion biopsy systems for smarter diagnostics.',
      icon: <FaCube className="text-purple-500 text-3xl" />,
    },
    {
      title: 'Precision Risk Scoring',
      desc: 'Precision Risk Scoring Uses pattern recognition to deliver a quantified risk score for each prostate zone.',
      icon: <FaProcedures className="text-pink-500 text-3xl" />,
    },
    {
      title: 'Clinical Workflow Ready',
      desc: 'Works alongside urology EMRs and PACS for uninterrupted clinical decision-making.',
      icon: <FaConnectdevelop className="text-green-500 text-3xl" />,
    },
    {
      title: 'Continual AI Learning',
      desc: 'Improves outcomes by learning from clinical feedback and updating detection models.',
      icon: <FaRobot className="text-yellow-500 text-3xl" />,
    },
  ];

  return (
    <App_layout>
    <section className="relative bg-gradient-to-br from-[#f0f8ff] via-white to-[#e6f0ff] py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute w-72 h-72 bg-blue-200 opacity-20 blur-[140px] top-[-50px] left-[-50px]" />
      <div className="absolute w-72 h-72 bg-purple-300 opacity-20 blur-[120px] bottom-[-50px] right-[-50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-aos="zoom-in">
          DeepHealth Prostate™ – Fusion Biopsy Compatible AI
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/70 shadow-md backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="">{feat.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{feat.title}</h4>
                  <p className="text-gray-600 text-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div data-aos="fade-left">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/product/DeepHealthProstate.jpg"
                alt="Prostate AI Detection"
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
