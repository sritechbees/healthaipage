'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const steps = [
  {
    title: 'Step 1',
    desc: 'Charge the transmitter: A blue stable light will appear to indicate full charging',
    icon: '/icons/charge.png',
  },
  {
    title: 'Step 2',
    desc: 'Scan the QR code on the box to download the app',
    icon: '/icons/qr-code-app.png',
  },
  {
    title: 'Step 3',
    desc: 'Sign-up & complete onboarding steps',
    icon: '/icons/onboarding.png',
  },
  {
    title: 'Step 4',
    desc: 'Turn on Bluetooth to pair the transmitter with the app',
    icon: '/icons/bluetooth.png',
  },
  {
    title: 'Step 5',
    desc: 'Scan the QR code on the sensor to connect',
    icon: '/icons/qr-code-sensor.png',
  },
  {
    title: 'Step 6',
    desc: 'Complete the device implantation & allow 1 hour warm-up time',
    icon: '/icons/timer.png',
  },
];

export default function TrackySteps() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="relative z-10 bg-gradient-to-br from-orange-100 via-white to-yellow-100 py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e1e1e]">
        How to connect <span className="text-orange-500">Tracky CGM</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative">
        {steps.map((step, i) => (
          <div
            key={i}
            data-aos={i % 2 === 0 ? 'fade-up' : 'zoom-in'}
            className="bg-white rounded-2xl shadow-xl p-6 text-center relative z-20 border border-orange-100"
          >
            <Image
              src={step.icon}
              alt={step.title}
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-orange-600 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700">{step.desc}</p>
          </div>
        ))}
        
        {/* Dot-dot animation overlay */}
        <svg
          className="absolute w-full h-full top-0 left-0 pointer-events-none z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#fb923c" />
            </pattern>
          </defs>

          {steps.map((_, i) => {
            if (i === steps.length - 1) return null;
            const row = Math.floor(i / 3);
            const col = i % 3;

            const nextRow = Math.floor((i + 1) / 3);
            const nextCol = (i + 1) % 3;

            const x1 = col * 33.33 + 16.66;
            const y1 = row * 180 + 100;
            const x2 = nextCol * 33.33 + 16.66;
            const y2 = nextRow * 180 + 100;

            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={y1}
                x2={`${x2}%`}
                y2={y2}
                stroke="url(#dotPattern)"
                strokeWidth="2"
                strokeDasharray="4"
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
}
