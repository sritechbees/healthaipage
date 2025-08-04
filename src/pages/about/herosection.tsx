'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import type { Engine } from 'tsparticles-engine';

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 to-black">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'bounce' } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          background: { color: 'transparent' },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Background AI + Medical Image Overlay */}
      <Image
        src="/background/aboutbg.jpg" // Replace with your image
        alt="AI Medical"
        fill
        className="object-cover opacity-40 z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          BeaverHealthAI LLP
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Revolutionizing Healthcare with AI, Data Intelligence, and Smart Medical Technologies.
        </motion.p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Discover Our Story<FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
}
