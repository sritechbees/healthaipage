'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import App_layout from '@/layout/app-alyout';
import Benefits from '@/common/benefits';

export default function PatientExperiencePage3() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: 'Seamless Appointments',
      desc: 'Effortlessly book, reschedule, and track appointments with intuitive digital tools.',
      image: '/services/Seamless Appointments.jpg',
    },
    {
      title: 'Affordable Care',
      desc: 'Transparent billing and smart insurance integrations reduce costs for patients.',
      image: '/services/Affordable Care.jpg',
    },
    {
      title: 'Telemedicine Access',
      desc: 'Virtual consultations connect patients with doctors anytime, anywhere.',
      image: '/services/Telemedicine Access.jpg',
    },
    {
      title: 'Personalized Experience',
      desc: 'AI-powered reminders and recommendations tailored to each patient journey.',
      image: '/services/Personalized Experience.jpg',
    },
    {
      title: 'Multi-Language Support',
      desc: 'Localized content ensures inclusivity and accessibility for diverse communities.',
      image: '/services/Multi-Language Support.jpg',
    },
    {
      title: '24/7 Assistance',
      desc: 'AI chatbots and digital support provide instant responses, day or night.',
      image: '/services/24-7 Assistance.jpg',
    },
  ];

  return (
    <App_layout>
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/services/Patient Experience1.jpg"
          alt="Patient Experience Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Patient Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6"
          >
            Redefining healthcare journeys with simplicity, affordability, and accessibility.
          </motion.p>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-blue-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Explore Features
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative w-full py-20 bg-gradient-to-br from-yellow-50 via-white to-emerald-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Benefits/>
    </App_layout>
  );
}
