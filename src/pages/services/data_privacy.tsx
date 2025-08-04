'use client';

import { useState, useCallback } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import App_layout from '@/layout/app-alyout';

type ServiceItem = {
  title: string;
  desc: string;
  details: string;
};

const services: ServiceItem[] = [
  {
    title: 'Doctor Enablement',
    desc: 'Streamline clinical workflows, EMR tools',
    details: 'AI-integrated tools to boost efficiency for doctors with EMR access and smart suggestions.',
  },
  {
    title: 'Remote Monitoring',
    desc: 'Extend care beyond hospital walls using IoT',
    details: 'Continuous vitals tracking, alerts, and patient monitoring using smart devices and AI.',
  },
  {
    title: 'Digital Health Records',
    desc: 'Enable secure data sharing for doctors and hospitals',
    details: 'Interoperable blockchain-based health records accessible with patient consent.',
  },
  {
    title: 'Predictive Analytics',
    desc: 'Forecast patient outcomes using AI',
    details: 'Predict risks and outcomes using machine learning for better clinical decisions.',
  },
  {
    title: 'Patient Engagement',
    desc: 'AI-enabled personalized health journeys',
    details: 'Boost engagement through personalized health reminders, progress tracking, and feedback.',
  },
  {
    title: 'Data Privacy & Security',
    desc: 'Build trust and compliance with Blockchain',
    details: 'Security-first design powered by blockchain, consent systems, and privacy layers.',
  },
];

export default function HealthAIServices() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <App_layout>
    <div className="relative min-h-screen  text-white px-4 py-20 overflow-hidden">
      <Particles
        init={particlesInit}
        options={{
          background: { color: { value: '#0a0a0a' } },
          particles: {
            number: { value: 80 },
            size: { value: 2 },
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 120 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <h2 className="text-4xl font-bold text-center mb-12">Explore Our HealthAI Services</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(service)}
          >
            <h3 className="text-xl font-semibold text-yellow-400">{service.title}</h3>
            <p className="text-sm text-gray-200 mt-2">{service.desc}</p>
            <button className="text-sm text-yellow-300 hover:underline mt-4">Learn More</button>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selected} onClose={() => setSelected(null)} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <Dialog.Title className="text-xl font-bold text-gray-900">
              {selected?.title}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 mt-2">
              {selected?.details}
            </Dialog.Description>
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
    </App_layout>
  );
}
