'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaXRay, FaHeartbeat, FaNotesMedical, FaCloudDownloadAlt, FaUserMd } from 'react-icons/fa';
import App_layout from '@/layout/app-alyout';

export default function DeepHealthLung() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: 'AI-Powered Nodule Detection',
      desc: 'Automatically detects and highlights lung nodules with high sensitivity.',
      icon: <FaXRay className="text-sky-500 text-3xl" />,
    },
    {
      title: 'Structured AI Reports',
      desc: 'Structured AI Reports Generates standardized, clear, and actionable radiology reports.',
      icon: <FaNotesMedical className="text-indigo-500 text-3xl" />,
    },
    {
      title: 'Clinical Workflow Integration',
      desc: 'Seamlessly works with PACS/RIS for report viewing and storage.',
      icon: <FaCloudDownloadAlt className="text-cyan-500 text-3xl" />,
    },
    {
      title: 'Patient Risk Stratification',
      desc: 'AI-driven scoring to prioritize critical cases for follow-up.',
      icon: <FaHeartbeat className="text-pink-500 text-3xl" />,
    },
    {
      title: 'Multispecialty Collaboration',
      desc: 'Facilitates pulmonologist and oncologist collaboration with shared insights.',
      icon: <FaUserMd className="text-green-500 text-3xl" />,
    },
  ];

  return (
    <App_layout>
    <section className="relative bg-gradient-to-r from-[#e0f7fa] via-white to-[#f3f8fc] py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute w-80 h-80 bg-cyan-200 opacity-20 blur-[150px] top-[-40px] left-[-40px]" />
      <div className="absolute w-80 h-80 bg-sky-300 opacity-20 blur-[120px] bottom-[-50px] right-[-40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="zoom-in">
          DeepHealth Lung™ – AI Nodule Detection & Management
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Features */}
          <div className="space-y-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white/70 backdrop-blur-md shadow-md p-4 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {feat.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{feat.title}</h4>
                  <p className="text-sm text-gray-600">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/product/DeepHealth Lung.jpg"
                alt="Lung AI Detection"
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
