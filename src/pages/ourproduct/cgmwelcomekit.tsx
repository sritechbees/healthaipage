'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
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
   
      <div className="relative overflow-hidden">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: '#0a0a0a' } },
            particles: {
              number: { value: 70 },
              size: { value: 2 },
              color: { value: '#ffffff' },
              links: { enable: true, color: '#ffffff', distance: 120 },
              move: { enable: true, speed: 1 },
            },
          }}
          className="absolute inset-0 -z-10"
        />

        <section className="py-20 px-4 md:px-12 relative z-10 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              data-aos="fade-down"
              className="text-xl md:text-2xl font-semibold"
            >
              India’s first ever Bluetooth Connected
            </h2>
            <h1
              data-aos="zoom-in"
              className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent mt-4"
            >
              CGM Device is now here!
            </h1>
            <p
              data-aos="fade-up"
              className="mt-6 text-base md:text-lg text-gray-300"
            >
              Welcome Kit – What&apos;s inside the box?
            </p>
          </div>

          {/* Dynamic Sections */}
          <div className="mt-16 space-y-20">
            {items.map((section, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-10 border-l-4 border-orange-500 pl-4">
                  {section.section}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      className="flex flex-col items-center text-center group hover:scale-105 transition duration-300"
                    >
                      <div className="relative w-40 h-40">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-contain rounded-xl shadow-md group-hover:shadow-orange-500/50"
                        />
                      </div>
                      <h4 className="mt-6 text-xl font-semibold text-blue-400">
                        {item.title}
                      </h4>
                      <ul className="mt-3 text-sm text-gray-200 space-y-2">
                        {item.desc.map((line, i) => (
                          <li
                            key={i}
                            className="hover:text-orange-400 transition"
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
<WhyChooseTrackyCGM/>
<TransmitterSensor/>
   <HowToUseCGM/>   
   <TrackySteps/> 
   <AppFeatures/>
   <CGMComparison/>
      </div>
      </App_layout>
   
  );
}
