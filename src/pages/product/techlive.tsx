'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaSatelliteDish,
  FaUsers,
  FaDollarSign,
  FaChalkboardTeacher,
  FaExpandArrowsAlt,
} from 'react-icons/fa';
import App_layout from '@/layout/app-alyout';

export default function TechLiveSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaSatelliteDish className="text-4xl text-blue-500" />,
      title: 'Remote Image Acquisition',
      description:
        'Capture diagnostic images from rural or satellite locations in real-time using lightweight, portable devices and transfer them securely to central systems.',
      image: '/images/remote-acquisition.jpg',
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: 'Collaborative Diagnostics',
      description:
        'Enable multiple clinicians to view and annotate the same scan simultaneously from different locations, fostering collaborative analysis and decision-making.',
      image: '/product/Unified Diagnostic Workspace.jpg',
    },
    {
      icon: <FaDollarSign className="text-4xl text-blue-500" />,
      title: 'Low-Cost Hardware Integration',
      description:
        'Integrate with budget-friendly diagnostic devices and cloud platforms, reducing infrastructure costs while maintaining quality and compliance.',
      image: '/images/low-cost-hardware.jpg',
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
      title: 'Live Expert Consultation',
      description:
        'Connect remote facilities with senior radiologists and specialists through video-enabled case discussions, ensuring timely expert guidance.',
      image: '/images/expert-consultation.jpg',
    },
    {
      icon: <FaExpandArrowsAlt className="text-4xl text-blue-500" />,
      title: 'Scalable Deployment',
      description:
        'Deploy across multiple centers with minimal setup and rapid onboarding. Designed to grow as your diagnostic network expands.',
      image: '/images/scalable-deployment.jpg',
    },
  ];

  return (
    <App_layout>
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Animation Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-100 rounded-full blur-[120px] opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          <span className="text-blue-600">TechLive™</span> – Smart Remote Diagnostics
        </h2>

        <div className="space-y-20">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
              data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
            >
              {/* Text Block */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </App_layout>
  );
}
