'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function HowToUseCGM() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Tear off the protective film',
      img: '/product/Charging cable.jpg',
    },
    {
      id: 2,
      title: 'Unlock & place applicator on Arm/Belly',
      img: '/product/Charging cable.jpg',
    },
    {
      id: 3,
      title: 'Press grey button to release sensor',
      img: '/product/Charging cable.jpg',
    },
    {
      id: 4,
      title: 'Remove applicator after sensor attaches',
      img: '/product/Charging cable.jpg',
    },
    {
      id: 5,
      title: 'Place transmitter on top of sensor',
      img: '/product/Charging cable.jpg',
    },
    {
      id: 6,
      title: 'Slide to lock transmitter',
      img: '/product/Charging cable.jpg',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          data-aos="fade-down"
        >
          How to use <span className="text-orange-500">Tracky CGM</span>
        </h2>
        <p
          className="text-center text-gray-600 mb-10"
          data-aos="fade-up"
        >
          Follow these easy steps to apply and activate your CGM device.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl shadow-xl p-6 text-center border-t-4 border-orange-400 transition-transform duration-300 hover:scale-[1.03]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={step.img}
                  alt={`Step ${step.id}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-md font-semibold text-gray-700">{step.title}</h4>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-sm text-gray-500 text-center italic"
          data-aos="fade-in"
        >
          *Tip: Clean the application area with alcohol swab before applying.
        </p>
      </div>
    </section>
  );
}
