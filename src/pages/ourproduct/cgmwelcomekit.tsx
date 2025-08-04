'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import WhyChooseTrackyCGM from './whychoosecgm';
import type { Engine } from 'tsparticles-engine';
import TransmitterSensor from './trasmitterand_sensor';
import HowToUseCGM from './howtousecgm';
import TrackySteps from './howtoconnectcgm';
import AppFeatures from './feactureofapp';
import CGMComparison from './cgmcomparison';
import App_layout from '@/layout/app-alyout';

const items = [
  {
    section: 'Transmitter pack',
    content: [
      {
        title: 'Transmitter',
        desc: ['Fast Charge', 'Recycle use for 2 years'],
        img: '/product/transmitter.jpg',
      },
      {
        title: 'Charging cable',
        desc: ['C-type charging cable to charge your transmitter'],
        img: '/product/Charging cable.jpg',
      },
    ],
  },
  {
    section: 'Sensor pack',
    content: [
      {
        title: 'Sensor',
        desc: ['Disposable after 14 days of use'],
        img: '/product/sensor.jpg',
      },
      {
        title: 'Applicator',
        desc: ['For easy & painless application'],
        img: '/product/applicator.jpg',
      },
    ],
  },
];

export default function CGMWelcomeKit() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <App_layout>
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
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

      <section className="py-16 px-4 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl font-semibold text-white"
          >
            India’s first ever Bluetooth Connected
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-orange-500 mt-2"
          >
            CGM Device is now here!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-base md:text-lg text-gray-300"
          >
            Welcome kit – What&apos;s in the box
          </motion.p>

          <div className="mt-10 space-y-12">
            {items.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm border rounded-xl p-6 shadow-md text-black"
              >
                <h3 className="text-lg font-bold text-orange-500 mb-6 text-left border-l-4 border-orange-500 pl-4">
                  {section.section}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                      <h4 className="mt-4 text-blue-600 font-semibold text-lg">
                        {item.title}
                      </h4>
                      <ul className="mt-2 text-sm text-gray-700 space-y-1">
                        {item.desc.map((line, i) => (
                          <li key={i}>• {line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseTrackyCGM />
      <TransmitterSensor/>
      <HowToUseCGM/>
      <TrackySteps/>
      <AppFeatures/>
      <CGMComparison/>
    </div>
    </App_layout>
  );
}
