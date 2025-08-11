'use client';

import App_layout from '@/layout/app-alyout';
import AIPoweredInsights from './AIPoweredInsights';
import SmartDeviceConnectivity from './SmartDeviceConnectivity';
import ImprovedDiabetesManagement from './ImprovedDiabetesManagement';
import EarlyWarningAlerts from './EarlyWarningAlerts';
import DataDrivenDecisionsCard from './DataDrivenDecisionsCard';
import MinimalDisruptionCard from './MinimalDisruptionCard';
import IntegrationWithDietFitnessApps from './IntegrationWithDietFitnessApps';
import LongTermHealth from './LongTermHealth';
import EmpoweringPatientsDoctors from './EmpoweringPatientsDoctors';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RealTimeGlucoseTracking() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mt-16 overflow-hidden">
        {/* Background image */}
        <Image
          src="/cgm/glucose1.jpg"
          alt="Glucose Tracking"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex items-center">
          {/* Left side text */}
          <div
            className="w-full md:w-1/2 px-6 md:px-16 text-white"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Real-Time Glucose Tracking
              <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Monitor your glucose levels continuously, without the need for
              multiple daily finger pricks. Our cutting-edge sensors deliver
              accurate, instant readings, ensuring you stay informed and in
              control.
            </p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AIPoweredInsights />
      <SmartDeviceConnectivity />
      <ImprovedDiabetesManagement />
      <EarlyWarningAlerts />
      <DataDrivenDecisionsCard />
      <MinimalDisruptionCard />
      <IntegrationWithDietFitnessApps />
      <LongTermHealth />
      <EmpoweringPatientsDoctors />
    </App_layout>
  );
}
