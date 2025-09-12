'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSmileBeam } from 'react-icons/fa';
import App_layout from '@/layout/app-alyout';
import OmniChannelEngagement from './omnichannelengagement';
import HealthcareAccessibility from './healthcareaccessibility';
import ClinicalEfficiency from './clinicalefficiency';
import ScalableDigitalHealth from './scalabledigitalhealth';
import DataSecurityCompliance from './datasecuritycompliance';
import SmartEscalationSystems from './smartescalationsystems';
import { Bean } from 'lucide-react';
import Benefits from '@/common/benefits';

export default function AIPatientExperience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-yellow-400 text-white rounded-xl shadow-lg">
              <FaSmileBeam className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium tracking-wide text-yellow-600 uppercase">
              Patient-Centric Innovation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            AI-Powered Patient Experience
          </h2>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
            Enhances journey from the very first interaction—making care more accessible, seamless,
            and human-centered while powered by cutting-edge AI.
          </p>

        
        </div>

        {/* Right Side Image */}
        <div className="relative h-[350px] md:h-[450px] lg:h-[500px]" data-aos="fade-left">
          <Image
            src="/product/AI-Powered Patient Experience.jpg" // 🔄 Replace with your own image
            alt="AI Patient Experience"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 via-transparent to-emerald-400/30 rounded-3xl" />
        </div>
      </div>
    </section>
    <OmniChannelEngagement/>
    <HealthcareAccessibility/>
    <ClinicalEfficiency/>
    <SmartEscalationSystems/>
    <DataSecurityCompliance/>
    <ScalableDigitalHealth/>
    <Benefits/>
    </App_layout>
  );
}
