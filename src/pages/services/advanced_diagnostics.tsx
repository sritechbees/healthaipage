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
      <div className="w-full overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
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
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Enhance precision and speed by analyzing medical data using AI-powered tools.
            </motion.p>

            {/* Discover More BUTTON */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 mt-5 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              Discover More
            </motion.a>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="relative w-full overflow-hidden">
          {features.map((f, idx) => (
            <div key={idx} className="w-full py-16 mt-16 px-4 md:px-10 overflow-hidden">

              {/* Layout 1 */}
              {idx === 0 && (
                <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
                  <div className="w-full md:w-1/2">
                    <Image src={f.image} alt={f.title} width={700} height={500} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                    <p className="text-base md:text-lg text-gray-600">{f.desc}</p>
                  </div>
                </div>
              )}

              {/* Layout 2 */}
              {idx === 1 && (
                <div className="flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-left">
                  <div className="w-full md:w-1/2">
                    <Image src={f.image} alt={f.title} width={700} height={500} className="rounded-xl shadow-lg w-full h-auto object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                    <p className="text-base md:text-lg text-gray-600">{f.desc}</p>
                  </div>
                </div>
              )}

              {/* Layout 3 */}
              {idx === 2 && (
                <div className="text-center" data-aos="fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">{f.desc}</p>
                  <Image src={f.image} alt={f.title} width={800} height={500} className="rounded-xl shadow-lg w-full max-w-4xl mx-auto object-cover" />
                </div>
              )}

              {/* Layout 4 */}
              {idx === 3 && (
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center" data-aos="zoom-in">
                  <Image src={f.image} alt={f.title} fill className="object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-black/50 rounded-xl" />

                  <div className="relative z-10 text-center text-white max-w-2xl px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{f.title}</h2>
                    <p className="text-base md:text-lg">{f.desc}</p>
                  </div>
                </div>
              )}

              {/* Layout 5 */}
              {idx === 4 && (
                <div className="relative flex flex-col md:flex-row items-stretch" data-aos="fade-up-right">
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                    <p className="text-base md:text-lg text-gray-600">{f.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image src={f.image} alt={f.title} width={700} height={500} className="w-full h-full object-cover" />
                  </div>
                </div>
              )}

              {/* Layout 6 */}
              {idx === 5 && (
                <div className="text-center" data-aos="fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{f.title}</h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">{f.desc}</p>
                  <Image src={f.image} alt={f.title} width={1000} height={600} className="rounded-xl shadow-lg w-full max-w-6xl mx-auto object-cover" />
                </div>
              )}

            </div>
          ))}
        </section>
      </div>

      <Benefits />
    </App_layout>
  );
}
