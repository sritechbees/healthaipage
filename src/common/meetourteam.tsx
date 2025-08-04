'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Aaron Loeb',
    role: 'Creative Director',
    image: '/home/hero3.png',
  },
  {
    name: 'Juliana Silva',
    role: 'Art Director',
    image: '/home/hero3.png',
  },
  {
    name: 'Claudia Alves',
    role: 'Graphic Designer',
    image: '/home/hero3.png',
  },
  {
    name: 'Avery Davis',
    role: 'UI/UX Designer',
    image: '/home/hero3.png',
  },
];

const TeamSection = () => {
  return (
    <section className="relative  py-20 px-4 text-white overflow-hidden">
      
      {/* 🔵 Tech Background Layer */}
      <div className="absolute inset-0 bg-[url('/background/teambg.jpg')]  bg-center opacity-100 z-0"></div>
     
      {/* 🔵 Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing sagittis elit. Quisque facilisis tincidunt risus sit amet sagittis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
          {team.map((person, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-52 h-52 relative rounded-full border-4 border-blue-400 shadow-lg overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 rounded-full shadow-md text-white font-semibold">
                {person.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
