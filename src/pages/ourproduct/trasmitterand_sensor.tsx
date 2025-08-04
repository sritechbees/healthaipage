'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function TransmitterSensor() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative z-0 py-20 bg-gradient-to-br from-[#f8fbff] via-white to-[#e0f2fe] overflow-hidden">
      {/* Gradient background shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-yellow-300 opacity-20 rounded-full blur-3xl z-0 animate-ping" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-[#1e3a8a]"
        >
          Know more about the{' '}
          <span className="text-orange-500">Transmitter & Sensor</span>
        </h2>

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {/* Transmitter Card */}
          <div
            data-aos="fade-right"
            className="bg-white shadow-xl rounded-3xl p-8 border border-orange-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/product/transmitter.jpg"
                alt="Transmitter"
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              TRANSMITTER
            </h3>
            <ul className="text-gray-700 text-left space-y-2 pl-4 list-disc">
              <li>Reusable with 2 years warranty</li>
              <li>Single charge for 14 days</li>
              <li>Instant Charging</li>
              <li>1 Click Installation</li>
              <li>Ergonomically Designed</li>
            </ul>
          </div>

          {/* Sensor Card */}
          <div
            data-aos="fade-left"
            className="bg-white shadow-xl rounded-3xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/product/sensor.jpg"
                alt="Sensor"
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              SENSOR
            </h3>
            <ul className="text-gray-700 text-left space-y-2 pl-4 list-disc">
              <li>14 days wear time</li>
              <li>Arm or belly placement</li>
              <li>Real time alerts</li>
              <li>480 readings per day</li>
              <li>Easy to install</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
