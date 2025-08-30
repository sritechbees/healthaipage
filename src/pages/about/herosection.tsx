'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div>
      <div>
    
      </div>
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
            move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          background: { color: 'transparent' },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Background Image Overlay */}
      <Image
        src="/background/aboutbg.jpg"
        alt="AI Medical"
        fill
        className="object-cover opacity-40 z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          BeaverHealthAI LLP
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          Revolutionizing Healthcare with AI, Data Intelligence, and
          Smart Medical Technologies.
        </motion.p>
      </div>
    </section>
    </div>
  );
}
