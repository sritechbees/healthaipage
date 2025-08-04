'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MdDashboard,
  MdStorage,
  MdVisibility,
  MdPeopleAlt,
  MdAutoAwesome,
} from 'react-icons/md';
import App_layout from '@/layout/app-alyout';

export default function DiagnosticSuiteSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const topics = [
    {
      icon: <MdDashboard className="text-4xl text-blue-500" />,
      title: 'Unified Diagnostic Workspace',
      description:
        'A seamless platform that consolidates all diagnostic tools into a single intuitive workspace. Eliminate silos between radiology, cardiology, and other specialties by enabling streamlined workflows and collaborative diagnostics.',
      image: '/product/Unified Diagnostic Workspace.jpg',
    },
    {
      icon: <MdStorage className="text-4xl text-blue-500" />,
      title: 'PACS Functionality',
      description:
        'Harness robust PACS capabilities for secure storage, retrieval, and distribution of medical images. Support for DICOM standards ensures compatibility across modalities and improves diagnostic turnaround times.',
      image: '/images/pacs-system.jpg',
    },
    {
      icon: <MdVisibility className="text-4xl text-blue-500" />,
      title: 'Advanced Viewer & Image Management',
      description:
        'Experience next-gen visualization tools including 2D/3D views and multiplanar reconstructions. Efficient image tagging, comparison, and annotation tools streamline workflow and enhance diagnostic precision.',
      image: '/images/image-viewer.jpg',
    },
    {
      icon: <MdPeopleAlt className="text-4xl text-blue-500" />,
      title: 'Real-time Collaboration Tools',
      description:
        'Enable multi-user collaboration with real-time image sharing, annotation, and discussion tools. Ideal for multidisciplinary team reviews and remote consultation scenarios.',
      image: '/images/collaboration-tools.jpg',
    },
    {
      icon: <MdAutoAwesome className="text-4xl text-blue-500" />,
      title: 'AI-Powered Image Analysis',
      description:
        'Leverage AI to detect anomalies, suggest regions of interest, and prioritize critical cases. Accelerate diagnosis and reduce workload for clinicians with intelligent automation.',
      image: '/images/ai-analysis.jpg',
    },
  ];

  return (
    <App_layout>
    <section className="relative w-full bg-white overflow-hidden py-20">
      {/* Animated background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="text-blue-500">Diagnostic Suite™</span> Capabilities
        </h2>

        <div className="space-y-20">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              {/* Text Block */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {topic.icon}
                  <h3 className="text-2xl font-semibold text-gray-800">{topic.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{topic.description}</p>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={topic.image}
                  alt={topic.title}
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
