'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const solutions = [
  {
    title: 'Remote Patient Monitoring',
    description: 'Track vital signs and patient health in real-time using AI-driven devices.',
    image: '/home/Remote Patient Monitoring.jpg',
    imageround: '/home/Remote Patient Monitoring.jpg',
    hoverEffect: 'left-to-right',
  },
  {
    title: 'Medical Imaging Analysis',
    description: 'AI analyzes X-rays, MRIs, and CT scans for accurate diagnostics.',
    image: '/home/Medical Imaging Analysis.jpg',
    imageround: '/home/Medical Imaging Analysis.jpg',
    hoverEffect: 'right-to-left',
  },
  {
    title: 'Virtual Health Assistant',
    description: 'AI chatbots assist patients 24/7 for health advice and bookings.',
    image: '/home/Virtual Health Assistant.jpg',
    imageround: '/home/Virtual Health Assistant.jpg',
    hoverEffect: 'top-to-bottom',
  },
  {
    title: 'Smart Health Portals',
    description: 'AI dashboards for personalized healthcare data insights.',
    image: '/home/Smart Health Portals.jpg',
    imageround: '/home/Smart Health Portals.jpg',
    hoverEffect: 'bottom-to-top',
  },
  {
    title: 'Health Data & Predictive Analytics',
    description: 'Gain real-time insights and forecasting using advanced data analysis.',
    image: '/home/Health Data & Predictive Analytics.jpg',
    imageround: '/home/Health Data & Predictive Analytics.jpg',
    hoverEffect: 'corner-to-corner',
  },
  {
    title: 'AI-Powered Clinical Decision Support',
    description: 'Support doctors with AI-driven treatment recommendations and alerts.',
    image: '/home/AI-Powered Clinical Decision Support.jpg',
    imageround: '/home/AI-Powered Clinical Decision Support.jpg',
    hoverEffect: 'diagonal',
  },
];

const getHoverEffect = (effect: string) => {
  switch (effect) {
    case 'left-to-right':
      return 'translate-x-full group-hover:translate-x-0';
    case 'right-to-left':
      return '-translate-x-full group-hover:translate-x-0';
    case 'top-to-bottom':
      return 'translate-y-full group-hover:translate-y-0';
    case 'bottom-to-top':
      return '-translate-y-full group-hover:translate-y-0';
    case 'corner-to-corner':
      return '-translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0';
    case 'diagonal':
      return 'translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0';
    default:
      return '';
  }
};

const ExploreSolutions_Trending = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-24 bg-[#0f172a] text-white overflow-hidden">
      {/* Background Glow Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Explore Our Solutions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Discover AI-driven solutions revolutionizing healthcare, diagnostics, and patient engagement.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {solutions.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
            className="relative group rounded-2xl overflow-hidden shadow-md bg-white/5 border border-white/20 backdrop-blur-md hover:shadow-2xl transition-all duration-500 h-72"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Bottom Title */}
              <div className="absolute bottom-0 w-full flex justify-center">
                <h3 className="text-blue-400 text-lg font-bold bg-black/50 w-full text-center px-3 py-2">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 z-10 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-white
                transform transition-all duration-500 opacity-0 group-hover:opacity-100 ${getHoverEffect(
                  item.hoverEffect
                )}`}
            >
              <Image
                src={item.imageround}
                alt={item.title}
                height={96}
                width={96}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-400"
              />
              <h3 className="text-lg font-semibold text-blue-400 text-center">{item.title}</h3>
              <p className="text-sm mt-1 text-gray-200 text-center px-4">{item.description}</p>
              <Link href="/book_now" className="mt-3">
                <FaArrowUpRightFromSquare className="text-lg hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSolutions_Trending;
