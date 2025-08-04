'use client';

import React from 'react';

export default function BlogCard() {
  return (
    <div
      className="bg-[#f3f1ed] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col gap-6 max-w-4xl mx-auto my-8"
      data-aos="fade-up"
    >
      {/* Tag */}
      <span className="text-xs md:text-sm uppercase tracking-wide text-[#c4521e] font-semibold">
        Lifestyle
      </span>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-[#c4521e] transition-colors duration-300 cursor-pointer leading-snug">
        5 Surprising Techniques to Improve Your Creativity
      </h2>

      {/* Date and Author */}
      <p className="text-xs md:text-sm text-gray-600">
        June 5, 2025 – by <span className="text-black font-medium">John Doe</span>
      </p>

      {/* Description */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        For who thoroughly her boy estimating conviction. Removed demands expense account in
        outward tedious do. Particular way thoroughly unaffected...
      </p>

      {/* Button */}
      <div>
        <button className="bg-[#c4521e] hover:bg-[#a33f16] transition duration-300 text-white px-6 py-2 text-sm md:text-base font-semibold rounded-full shadow-md hover:scale-105">
          READ MORE
        </button>
      </div>
    </div>
  );
}
