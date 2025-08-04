'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const faqs = [
  {
    question: 'What is Health AI?',
    answer:
      'Health AI applies artificial intelligence in medical fields to improve diagnostics, treatments, and healthcare outcomes.',
  },
  {
    question: 'How does Health AI improve patient outcomes?',
    answer:
      'It detects diseases earlier, recommends treatments based on data, and supports better decision-making by clinicians.',
  },
  {
    question: 'Is Health AI secure?',
    answer:
      'Yes, Health AI platforms follow strict privacy standards and use encryption to protect sensitive medical data.',
  },
  {
    question: 'Can Health AI replace human doctors?',
    answer:
      'No. It assists doctors by handling routine tasks and offering insights, but human expertise remains essential.',
  },
];

export default function HealthAIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 md:px-16 lg:px-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/faqbg.jpg"
          alt="Background"
          fill
          className="object-fill"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Health AI – FAQs</h2>
        <p className="text-gray-300 text-lg">
          Explore how Artificial Intelligence is revolutionizing the healthcare landscape.
        </p>
      </div>

      {/* FAQ Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-start">
   {/* Left Side Image */}
      

        {/* Right Side Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-yellow-400"
              >
                <span>{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-blue-100 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
