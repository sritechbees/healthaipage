'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaBluetooth,
  FaExchangeAlt,
  FaRecycle,
  FaRupeeSign,
  FaMobileAlt,
  FaBell,
  FaClipboardList,
  FaUtensils,
  FaQrcode,
  FaWifi,
  FaHandHoldingMedical,
} from 'react-icons/fa';

const features = [
  { icon: <FaBluetooth />, title: 'BT Connected' },
  { icon: <FaExchangeAlt />, title: 'Realtime Data Transmission' },
  { icon: <FaRecycle />, title: 'Reusable Transmitter' },
  { icon: <FaRupeeSign />, title: 'Cost Effective' },
  { icon: <FaMobileAlt />, title: 'Comprehensive App' },
  { icon: <FaBell />, title: 'Realtime Alerts' },
  { icon: <FaClipboardList />, title: 'Detailed Reports' },
  { icon: <FaUtensils />, title: 'Food, Activity & Logs' },
];

const notRequired = [
  { icon: <FaQrcode />, text: 'No Scanning' },
  { icon: <FaWifi />, text: 'No NFC' },
  { icon: <FaHandHoldingMedical />, text: 'No Finger Pricking' },
];

export default function WhyChooseTrackyCGM() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-green-100 via-green-200 to-blue-300  px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Why Choose{' '}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Tracky CGM
          </span>
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Experience next-gen Continuous Glucose Monitoring with advanced
          features designed for simplicity, accuracy, and comfort.
        </p>

        {/* Features Grid */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {features.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-white bg-gradient-to-r from-green-500 to-blue-500 p-5 rounded-full shadow-md mb-4">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Not Required Section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {notRequired.map((item, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 150}
              className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl bg-red-600 p-5 rounded-full mb-4 shadow-lg">
                {item.icon}
              </div>
              <p className="text-base font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
