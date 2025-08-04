'use client';

import { useState, useCallback } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaMicroscope, FaRobot, FaHeartbeat, FaFileMedical } from 'react-icons/fa';
import App_layout from '@/layout/app-alyout';
import type { Engine } from 'tsparticles-engine';

type CardData = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // ✅ fixed here
  details: string;
};


const features: CardData[] = [
  {
    title: 'Precision Diagnostics',
    desc: 'AI-enhanced diagnosis with high accuracy across complex datasets and symptoms.',
    icon: FaMicroscope,
    details:
      'Our AI systems deeply analyze patient history, genetic factors, and symptoms to support doctors in early and accurate diagnosis.',
  },
  {
    title: 'Real-Time Data Analysis',
    desc: 'Process vast medical data instantly to assist in early detection and better outcomes.',
    icon: FaRobot,
    details:
      'Real-time streams from devices and EMRs are evaluated by AI to provide actionable, live diagnostics.',
  },
  {
    title: 'Faster Clinical Decisions',
    desc: 'AI-driven insights that accelerate treatment planning and reduce diagnostic delays.',
    icon: FaHeartbeat,
    details:
      'Our system delivers AI-backed recommendations for physicians, reducing diagnostic time by up to 40%.',
  },
  {
    title: 'Digital Health Records',
    desc: 'Enable secure data sharing for doctors and hospitals.',
    icon: FaFileMedical,
    details:
      'Our encrypted and interoperable digital health records allow seamless access across hospitals, specialists, and labs.',
  },
];

export default function AdvancedDiagnosticsPage() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div>
      <App_layout>
        <section className="relative min-h-screen px-6 py-20 bg-gray-100 overflow-hidden">
          {/* 🧠 AI Background Particles */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: { value: '#f3f4f6' } },
              fpsLimit: 60,
              particles: {
                color: { value: '#6366f1' },
                links: { enable: true, color: '#6366f1', distance: 100 },
                move: { enable: true, speed: 1 },
                number: { value: 50 },
                size: { value: 2 },
              },
            }}
            className="absolute inset-0 z-0"
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Advanced Diagnostics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Enhance precision and speed by analyzing medical data using AI and advanced algorithms.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    onClick={() => setSelectedCard(item)}
                    className="relative w-full h-72 cursor-pointer group perspective"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front Side */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center items-center [backface-visibility:hidden]">
                        <Icon className="text-4xl text-white" />
                        <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                        <p className="text-sm mt-2">{item.desc}</p>
                        <span className="text-xs text-blue-200 mt-4 underline">Learn More</span>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 bg-white text-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm mt-2 text-center">{item.details}</p>
                        <button
                          className="mt-4 px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCard(item);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 💬 Modal */}
          <Dialog open={!!selectedCard} onClose={() => setSelectedCard(null)} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-xl">
                <Dialog.Title className="text-xl font-semibold text-indigo-700">
                  {selectedCard?.title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-gray-600">
                  {selectedCard?.details}
                </Dialog.Description>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </section>
      </App_layout>
    </div>
  );
}
