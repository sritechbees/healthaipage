'use client';

import { motion } from 'framer-motion';
import { FaBluetooth, FaExchangeAlt, FaRecycle, FaRupeeSign, FaMobileAlt, FaBell, FaClipboardList, FaUtensils, FaQrcode, FaWifi, FaHandHoldingMedical } from 'react-icons/fa';

const features = [
  { icon: <FaBluetooth />, title: 'BT Connected' },
  { icon: <FaExchangeAlt />, title: 'Realtime data transmission' },
  { icon: <FaRecycle />, title: 'Reusable transmitter' },
  { icon: <FaRupeeSign />, title: 'Cost effective' },
  { icon: <FaMobileAlt />, title: 'Comprehensive app' },
  { icon: <FaBell />, title: 'Realtime alerts' },
  { icon: <FaClipboardList />, title: 'Detailed Glucose Profile reports' },
  { icon: <FaUtensils />, title: 'Food, Activity & Medicine logs' },
];

const notRequired = [
  { icon: <FaQrcode />, text: 'No Scanning' },
  { icon: <FaWifi />, text: 'No NFC' },
  { icon: <FaHandHoldingMedical />, text: 'No finger Pricking' },
];

export default function WhyChooseTrackyCGM() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Why Choose <span className="text-orange-500">Tracky CGM</span>
        </h2>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-orange-100 p-6 rounded-xl">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="text-3xl text-white bg-[#0f172a] p-4 rounded-full mb-3 shadow-md">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom No-Need Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0f172a] text-white p-6 rounded-xl">
          {notRequired.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl bg-red-600 p-4 rounded-full mb-3 shadow-lg">
                {item.icon}
              </div>
              <p className="text-sm font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
