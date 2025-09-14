'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
  {
    title: 'Faster & Accurate Diagnosis',
    description:
      'AI enhances diagnostic precision, reducing human error and speeding up the identification of illnesses.',
  },
  {
    title: 'Personalized Treatment Plans',
    description:
      'Health AI enables tailored therapies by analyzing patient data for better treatment outcomes.',
  },
  {
    title: 'Remote Patient Monitoring',
    description:
      'Continuous monitoring through smart devices ensures real-time health tracking and alerts.',
  },
  {
    title: 'Predictive Health Analytics',
    description:
      'Early detection of potential health issues using predictive models and big data.',
  },
  {
    title: 'AI-assisted Clinical Decisions',
    description:
      'Supports doctors with data-driven recommendations for diagnosis and treatment.',
  },
  {
    title: 'Enhanced Patient Engagement',
    description:
      'AI-powered apps and bots improve patient interaction, education, and satisfaction.',
  },
];

export default function Benefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-300/40 blur-3xl rounded-full -z-10" />

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
        >
          Benefits of <span className="text-sky-500">Health AI</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Discover how Artificial Intelligence is transforming modern healthcare
          with efficiency, precision, and better patient outcomes.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-sky-100 hover:shadow-2xl hover:scale-[1.02] transition"
          >
            <div className="h-1.5 w-16 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
