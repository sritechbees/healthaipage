'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import App_layout from '@/layout/app-alyout';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function GetInTouchPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data); // Integrate API/Nodemailer/EmailJS here
    setSubmitted(true);
    reset();
  };

  return (
    <App_layout>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden px-4 py-16"
        style={{ backgroundImage: "url('/background/contactbg.jpg')" }}
      >
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,#c7f0ff,transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 z-0"></div>

        <div className="relative z-10 text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
          >
            Let’s Transform Healthcare Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-yellow-500 max-w-xl mx-auto"
          >
            Connect with BeaverHealthAI for partnerships, support, and innovative healthcare solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-blue-100"
        >
          {submitted && (
            <div className="mb-4 text-green-600 font-medium bg-green-50 px-4 py-2 rounded-md border border-green-200">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Valid email is required</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                rows={5}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Message is required</p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </App_layout>
  );
}
