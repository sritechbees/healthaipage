'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import App_layout from '@/layout/app-alyout';
import Head from 'next/head';


interface ContactFormInputs {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export default function GetInTouchPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data); // 🔗 integrate API/Nodemailer/EmailJS here
    setSubmitted(true);
    reset();
  };

  // ✅ Initialize AOS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) =>
        AOS.init({ duration: 1000, once: true })
      );
    }
  }, []);

  return (
    <App_layout>
     <Head  >
      <title>BeaverHealthAI | Contact</title>
     </Head>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20"
        style={{ backgroundImage: "url('/background/bghand.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-blue-900/40 to-black/70 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="text-white space-y-6">
            <h1 className="text-4xl max-sm:mt-4 md:text-5xl font-extrabold leading-tight">
              Let’s <span className="text-[#2cb9ff]">Transform Healthcare</span> Together
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2cb9ff] to-blue-400 rounded-full"></div>
            <p className="text-lg text-gray-200 leading-relaxed max-w-md">
              Connect with <span className="font-semibold">BeaverHealthAI</span> for partnerships, support, and innovative healthcare solutions that redefine patient care.
            </p>
            <ul className="space-y-3 text-gray-300 text-base">
              <li>📧 healthai@beavertek.com</li>
              <li>📞 +91 +91 94452 66583</li>
              <li>📍 Chennai, India</li>
            </ul>
          </div>

          {/* Right Contact Form */}
          <motion.div
            data-aos="fade-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-8 mt-12 rounded-2xl shadow-xl border border-white/20"
          >
            {submitted && (
              <div className="mb-4 text-green-700 font-medium bg-green-100/80 px-4 py-2 rounded-lg border border-green-200">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-white">
                  Name
                </label>
                <input
                  {...register('name', { required: true })}
                  className="w-full p-3 rounded-xl border border-gray-300/30 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2cb9ff]"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">Name is required</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-white">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className="w-full p-3 rounded-xl border border-gray-300/30 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2cb9ff]"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">Valid email is required</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block mb-1 font-medium text-white">
                  Mobile Number
                </label>
                <input
                  {...register('mobile', {
                    required: true,
                    pattern: /^[0-9]{10}$/, // ✅ 10-digit validation
                  })}
                  className="w-full p-3 rounded-xl border border-gray-300/30 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2cb9ff]"
                  placeholder="Enter 10-digit Mobile Number"
                />
                {errors.mobile && (
                  <p className="text-red-400 text-sm mt-1">Valid 10-digit mobile number is required</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium text-white">
                  Message
                </label>
                <textarea
                  {...register('message', { required: true })}
                  rows={5}
                  className="w-full p-3 rounded-xl border border-gray-300/30 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2cb9ff]"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">Message is required</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#2cb9ff] to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </App_layout>
  );
}
