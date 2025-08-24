'use client';

import App_layout from '@/layout/app-alyout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RemoteECGMonitoring from './remoteecgmonitoring';
import AIDrivenECGAnalysis from './aidrivenecganalysis';
import WearableECGDevices from './wearableecgevices';
import PredictiveECGAnalytics from './predictiveecganalytics';
import ECGTelemedicine from './ecgtelemedicine';
import CloudECGData from './cloudecgdata';
import ECGPreventiveHealthcare from './ecgpreventivehealthcare';
import AdvancedECGPersonalizedTreatment from './advancedecgpersonalizedtreatment';
import CollaborationHospitalsClinics from './collaborationhospitalsclinics';

export default function EarlyDetectionECG() {
  return (
    <App_layout>
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Early Detection of Cardiac Abnormalities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Using <span className="font-semibold text-blue-600">AI-powered ECG devices</span> 
            to identify irregular heart rhythms and potential cardiac risks 
            at an early stage. Empowering doctors and patients with real-time 
            insights for better health outcomes.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/product/Early Detection of Cardiac Abnormalities.jpg" // <-- replace with your ECG image path
            alt="ECG Early Detection"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
    <RemoteECGMonitoring/>
    <AIDrivenECGAnalysis/>
    <WearableECGDevices/>
    <PredictiveECGAnalytics/>
    <ECGTelemedicine/>
    <CloudECGData/>
    <ECGPreventiveHealthcare/>
    <AdvancedECGPersonalizedTreatment/>
    <CollaborationHospitalsClinics/>
    </App_layout>
  );
}
