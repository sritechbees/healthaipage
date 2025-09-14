'use client';

import { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import App_layout from '@/layout/app-alyout';

import type { Engine } from 'tsparticles-engine';
import WhyChooseTrackyCGM from './whychoosecgm';
import TransmitterSensor from './trasmitterand_sensor';
import HowToUseCGM from './howtousecgm';
import TrackySteps from './howtoconnectcgm';
import AppFeatures from './feactureofapp';
import CGMComparison from './cgmcomparison';

const items = [
  {
    section: 'Transmitter pack',
    content: [
      {
        title: 'Transmitter',
        desc: ['⚡ Fast Charge', '♻️ Reusable up to 2 years'],
        img: '/product/transmitter.jpg',
      },
      {
        title: 'Charging cable',
        desc: ['🔌 Type-C cable for quick charging'],
        img: '/product/Charging cable.jpg',
      },
    ],
  },
  {
    section: 'Sensor pack',
    content: [
      {
        title: 'Sensor',
        desc: ['⏳ Disposable after 14 days'],
        img: '/product/sensor.jpg',
      },
      {
        title: 'Applicator',
        desc: ['👌 Easy & painless application'],
        img: '/product/applicator.jpg',
      },
    ],
  },
];

export default function CGMWelcomeKit() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <App_layout>
      <div className="relative overflow-hidden bg-gradient-to-r from-green-100 via-green-200 to-blue-300 mt-12">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: 'transparent' } },
            particles: {
              number: { value: 60 },
              size: { value: 2 },
              color: { value: '#2cb9ff' },
              links: { enable: true, color: '#2cb9ff', distance: 120 },
              move: { enable: true, speed: 1 },
            },
          }}
          className="absolute inset-0 -z-10"
        />

        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 relative z-10 text-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              data-aos="fade-down"
              className="text-xl md:text-2xl font-semibold tracking-wide text-gray-700"
            >
              India’s First Ever Bluetooth Connected
            </h2>
            <h1
              data-aos="zoom-in"
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 via-[#2cb9ff] to-teal-600 bg-clip-text text-transparent mt-4"
            >
              CGM Device is Now Here!
            </h1>
            <p
              data-aos="fade-up"
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            >
              Discover what’s inside the <span className="font-semibold text-[#2cb9ff]">Welcome Kit</span> and start your journey towards smarter health monitoring.
            </p>
          </div>

          {/* Dynamic Sections */}
          <div className="mt-20 space-y-20">
            {items.map((section, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="bg-white backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-10 border-l-4 border-[#2cb9ff] pl-4">
                  {section.section}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      className="flex flex-col items-center text-center group hover:scale-105 transition duration-300"
                    >
                      <div className="relative w-44 h-44">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-contain rounded-xl shadow-lg group-hover:shadow-blue-500/50"
                        />
                      </div>
                      <h4 className="mt-6 text-xl font-semibold text-[#2cb9ff]">
                        {item.title}
                      </h4>
                      <ul className="mt-3 text-sm text-gray-700 space-y-2">
                        {item.desc.map((line, i) => (
                          <li
                            key={i}
                            className="hover:text-green-600 transition"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Sections */}
        <WhyChooseTrackyCGM />
        <TransmitterSensor />
        <HowToUseCGM />
        <AppFeatures />
        <TrackySteps />
        
        <CGMComparison />
      </div>
    </App_layout>
  );
}
