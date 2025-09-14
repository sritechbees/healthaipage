'use client';

import Image from 'next/image';

export default function TrackySteps() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-4 py-12">
      {/* ✅ Title on Top */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1e1e1e]">
        How to connect <span className="text-orange-500">Tracky CGM</span>
      </h2>

      {/* ✅ Image in Center (Responsive) */}
      <div className="relative w-full max-w-4xl mx-auto flex justify-center">
        <Image
          src="/product/cgmstep.png" // replace with your image
          alt="Tracky CGM"
          width={1000}
          height={600}
          className="rounded-xl object-contain"
          priority
        />
      </div>
    </section>
  );
}
