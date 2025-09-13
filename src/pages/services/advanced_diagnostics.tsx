'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import App_layout from '@/layout/app-alyout';
import Benefits from '@/common/benefits';

export default function AdvancedDiagnosticsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: 'AI-Powered Imaging',
      desc: 'Automated analysis of X-rays, CT scans, and MRIs improves accuracy and reduces turnaround time.',
      image: '/services/AI-Powered Imaging.jpg',
    },
    {
      title: 'Predictive Analytics',
      desc: 'Machine learning models forecast disease risks early, enabling preventive care strategies.',
      image: '/services/Predictive Analytics.jpg',
    },
    {
      title: 'Genomic Insights',
      desc: 'AI-driven genomic sequencing helps tailor personalized treatment plans for patients.',
      image: '/services/Genomic Insights.jpg',
    },
    {
      title: 'Faster Lab Results',
      desc: 'Automated lab data interpretation ensures quicker reporting and reliable outcomes.',
      image: '/services/Faster Lab Results.jpg',
    },
    {
      title: 'Decision Support Systems',
      desc: 'Clinical AI assistants provide real-time diagnostic suggestions for doctors.',
      image: '/services/Decision Support Systems.jpg',
    },
    {
      title: 'Continuous Learning',
      desc: 'AI models improve over time with new datasets, ensuring evolving precision and performance.',
      image: '/services/Continuous Learning.jpg',
    },
  ];

  return (
    <App_layout>
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] flex  items-center justify-center overflow-hidden">
        <Image
          src="/services/Advanced Diagnostics1.jpg"
          alt="Advanced Diagnostics Hero"
          fill
          className="object-cover mt-24"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 mt-24 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Advanced Diagnostics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6"
          >
            Enhance precision and speed by analyzing medical data using AI-powered tools.
          </motion.p>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Discover More
          </motion.a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative w-full">
        {features.map((f, idx) => (
          <div key={idx} className="w-full py-20 px-6">
            {/* Layout 1: Full-width image left, text right */}
            {idx === 0 && (
              <div
                className="flex flex-col md:flex-row items-center gap-10"
                data-aos="fade-right"
              >
                <div className="w-full md:w-1/2">
                  <Image src={f.image} alt={f.title} width={700} height={500} className="rounded-xl shadow-lg" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{f.desc}</p>
                  <a href="#" className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500">Learn More</a>
                </div>
              </div>
            )}

            {/* Layout 2: Image right, text left */}
            {idx === 1 && (
              <div
                className="flex flex-col md:flex-row-reverse items-center gap-10"
                data-aos="fade-left"
              >
                <div className="w-full md:w-1/2">
                  <Image src={f.image} alt={f.title} width={700} height={500} className="rounded-xl shadow-lg" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{f.desc}</p>
                  <a href="#" className="px-5 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-500">Explore</a>
                </div>
              </div>
            )}

            {/* Layout 3: Centered text above, image below */}
            {idx === 2 && (
              <div className="text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">{f.desc}</p>
                <Image src={f.image} alt={f.title} width={800} height={500} className="rounded-xl shadow-lg mx-auto" />
                <a href="#" className="mt-6 inline-block px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-500">Read More</a>
              </div>
            )}

            {/* Layout 4: Image full-width background with overlay text */}
            {idx === 3 && (
              <div className="relative h-[500px] flex items-center justify-center" data-aos="zoom-in">
                <Image src={f.image} alt={f.title} fill className="object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black/50 rounded-xl" />
                <div className="relative z-10 text-center text-white max-w-2xl px-6">
                  <h2 className="text-3xl font-bold mb-4">{f.title}</h2>
                  <p className="text-lg mb-6">{f.desc}</p>
                  <a href="#" className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300">Discover</a>
                </div>
              </div>
            )}

            {/* Layout 5: Split screen with diagonal */}
            {idx === 4 && (
              <div className="relative flex flex-col md:flex-row items-stretch" data-aos="fade-up-right">
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center p-10">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{f.desc}</p>
                  <a href="#" className="px-6 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-500">Start Now</a>
                </div>
                <div className="w-full md:w-1/2">
                  <Image src={f.image} alt={f.title} width={700} height={500} className="h-full object-cover" />
                </div>
              </div>
            )}

            {/* Layout 6: Minimal text with large scroll-triggered image */}
            {idx === 5 && (
              <div className="text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{f.desc}</p>
                <Image src={f.image} alt={f.title} width={1000} height={600} className="rounded-xl shadow-lg mx-auto" />
                <a href="#" className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-500">Learn More</a>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
    <Benefits/>
    </App_layout>
  );
}
