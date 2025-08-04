'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CGMComparison() {
  const features = [
    {
      label: 'Connection type',
      tracky: 'Bluetooth',
      other: 'NFC',
    },
    {
      label: 'Data transmission',
      tracky: 'Realtime on app',
      other: 'Every 8 hours\nupon scanning',
    },
    {
      label: 'MARD',
      tracky: '9.07%',
      other: '11.4%',
    },
    {
      label: 'Data Frequency',
      tracky: 'Every 3 minutes',
      other: '8 hours',
    },
    {
      label: 'Realtime Alerts',
      tracky: '✔️',
      other: '❌',
    },
    {
      label: 'Food & Activity Logging',
      tracky: '✔️',
      other: '❌',
    },
    {
      label: 'Water Resistance',
      tracky: 'IP58',
      other: 'IP28',
    },
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-[#fdf4ff] via-[#e0f2fe] to-[#fef9c3]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1e3a8a]">
          Tracky <span className="text-orange-500">CGM</span> VS <span className="text-orange-500">Others</span>
        </h2>

        <div className="grid grid-cols-3 gap-6 items-start text-center">
          {/* Tracky CGM Image */}
          <div className="flex flex-col items-center mt-28  ">
            <Image
              src="/product/gsm.png"
              alt="Tracky CGM"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1e3a8a]">Tracky CGM</h3>
          </div>

          {/* Feature Table */}
          <div className="space-y-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#f1f5f9] rounded-xl px-4 py-3 text-sm font-medium text-gray-800 shadow"
              >
                {item.label}
              </motion.div>
            ))}
          </div>

          {/* Other CGM */}
          <div className="flex flex-col items-center mt-28">
            <Image
              src="/product/othercgm.jpeg"
              alt="Other CGM"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-orange-600">Other CGM</h3>
          </div>

          {/* Comparison Data Columns */}
          <div className="col-span-3 grid grid-cols-3 mt-6 gap-4">
            <div className="space-y-4 text-sm text-[#1e3a8a]">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-100 rounded-lg px-4 py-2 font-semibold"
                >
                  {item.tracky}
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm text-gray-600">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-2 font-medium border border-dashed"
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm text-orange-600">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-100 rounded-lg px-4 py-2 font-semibold"
                >
                  {item.other}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
