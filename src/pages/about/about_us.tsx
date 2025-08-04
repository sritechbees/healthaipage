'use client';

import App_layout from '@/layout/app-alyout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import type { Engine } from 'tsparticles-engine';
import HeroSection from './herosection';
import WhatWeDo from './whatwedo';
import KeyFeatures from './keyfeatures';
import CTABanner from './cta';

const sections = [
  {
    title: 'Our Mission',
    text: 'To revolutionize the healthcare industry through AI-driven platforms, smart devices, and data-powered insights, making quality care accessible and intelligent.',
    image: '/home/AI-Powered Innovation.jpg',
    bg: 'bg-gradient-to-tr from-blue-50 to-blue-100',
  },
  {
    title: 'What We Do',
    text: 'BeaverHealthAI LLP blends e-commerce with healthcare innovation, offering everything from prosthetics and medical devices to remote patient monitoring and predictive analytics.',
    image: '/home/vision.jpg',
    bg: 'bg-gradient-to-tr from-pink-50 to-pink-100',
  },
  {
    title: 'AI-Powered Innovation',
    text: 'Our proprietary platforms leverage machine learning, diagnostics tools, and intelligent software to enhance patient care and clinical decisions in real time.',
    image: '/home/AI-Powered Innovation.jpg',
    bg: 'bg-gradient-to-tr from-purple-50 to-purple-100',
  },
  {
    title: 'Collaborative Healthcare',
    text: 'We actively work with hospitals, clinics, diagnostic centers, and government bodies to integrate medical technologies and deploy healthtech at scale.',
    image: '/home/vision.jpg',
    bg: 'bg-gradient-to-tr from-green-50 to-green-100',
  },
];

export default function AboutUs() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <App_layout>
      <HeroSection/>
      <WhatWeDo/>
      <KeyFeatures/>
     
      {/* Full Page Background Image */}
      <div className="relative z-0">
        <div className="absolute inset-0 bg-[url('/background/teambg.jpg')] bg-cover bg-center -z-10" />

        {/* Background Particles */}
        <Particles
          id="tsparticles"
          className="absolute top-0 left-0 w-full h-[100vh] -z-10"
          init={particlesInit}
          options={{
            background: { color: { value: 'transparent' } },
            particles: {
              number: { value: 20 },
              size: { value: 3 },
              opacity: { value: 0.3 },
              move: { enable: true, speed: 0.6 },
              color: { value: '#aaa' },
            },
          }}
        />

        {/* Hero Section */}
        <section className="relative w-full h-[120vh] overflow-hidden mt-20">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/videos/homepagevedio.mp4"
            autoPlay
            loop
            muted
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-950 text-center"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Optional: Hero Text */}
            </motion.h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-[#f3faff] text-center py-10 px-4">
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Driving next-generation healthcare with a fusion of smart technology, advanced data science, and impactful medical solutions.
          </motion.p>
        </section>

        {/* Info Sections */}
       <section className="relative py-20 px-6 overflow-hidden">
  {/* 🔵 Shared background image */}
  <Image
    src="/background/teambg.jpg" // one image for all sections
    alt="Background"
    fill
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Optional overlay for clarity */}
  <div className="absolute inset-0 z-10" />

  {/* 🔵 Content sections */}
  <div className="relative z-20 space-y-24">
    {sections.map((sec, i) => (
      <motion.div
        key={i}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
          i % 2 !== 0 ? 'md:flex-row-reverse' : ''
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        {/* Image block */}
        <div className="relative group md:w-1/2 w-full overflow-hidden rounded-r-[100px] shadow-lg">
          <Image
            src={sec.image}
            alt={sec.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 opacity-110 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <FaArrowRight className="text-white text-4xl" />
          </div>
        </div>

        {/* Text block */}
        <motion.div
          className="md:w-1/2 w-full transition-all duration-500 group-hover:translate-x-[-10px]"
          whileHover={{ x: -10 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">{sec.title}</h2>
          <p className="text-white text-lg leading-relaxed mb-6">{sec.text}</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
            Learn More
            <FaArrowRight />
          </button>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

      </div>
       <CTABanner/>
    </App_layout>
  );
}
