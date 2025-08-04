'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MdSchedule,
  MdNotificationsActive,
  MdWork,
  MdInsights,
  MdHub,
} from 'react-icons/md';
import App_layout from '@/layout/app-alyout';

export default function OperationsSuiteSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const topics = [
    {
      icon: <MdHub className="text-4xl text-indigo-500" />,
      title: 'Radiology Information System (RIS)',
      description:
        'Integrate RIS to centralize patient data, manage appointments, and track diagnostic procedures. Seamlessly coordinate radiology operations with EMR and PACS for a smooth clinical workflow.',
      image: '/product/Unified Diagnostic Workspace.jpg',
    },
    {
      icon: <MdWork className="text-4xl text-indigo-500" />,
      title: 'Real-Time Workflow Management',
      description:
        'Visualize and manage ongoing tasks and staff responsibilities with a real-time dashboard. Adapt quickly to delays and reassign tasks instantly to maintain throughput.',
      image: '/images/workflow-management.jpg',
    },
    {
      icon: <MdSchedule className="text-4xl text-indigo-500" />,
      title: 'Automated Scheduling & Task Routing',
      description:
        'Streamline scheduling using AI-powered automation that assigns resources based on availability, urgency, and staff specialization. Reduce manual effort and no-shows.',
      image: '/images/auto-scheduling.jpg',
    },
    {
      icon: <MdNotificationsActive className="text-4xl text-indigo-500" />,
      title: 'Smart Alerts & Notifications',
      description:
        'Deliver automated alerts for high-priority cases, critical delays, or system anomalies. Ensure every stakeholder is informed in real-time to improve response and care.',
      image: '/images/alerts-notifications.jpg',
    },
    {
      icon: <MdInsights className="text-4xl text-indigo-500" />,
      title: 'Analytics & Reporting Dashboard',
      description:
        'Gain operational insights through custom dashboards that track performance metrics, bottlenecks, and staff utilization. Make data-driven decisions for continuous improvement.',
      image: '/images/analytics-dashboard.jpg',
    },
  ];

  return (
    <App_layout>
    <section className="relative w-full bg-gray-50 overflow-hidden py-20">
      {/* Animated background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-100 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="text-indigo-600">Operations Suite™</span> Capabilities
        </h2>

        <div className="space-y-20">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
              data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
            >
              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {topic.icon}
                  <h3 className="text-2xl font-semibold text-gray-800">{topic.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{topic.description}</p>
              </div>

              {/* Image */}
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
