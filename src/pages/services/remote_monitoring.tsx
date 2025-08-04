'use client';

import App_layout from "@/layout/app-alyout";

const services = [
  {
    title: 'Remote Monitoring',
    desc: 'Extend care beyond hospital walls using IoT',
    details:
      'Monitor patients remotely with connected devices and real-time alerts, ensuring timely interventions and proactive care.',
  },
  {
    title: 'Digital Health Records',
    desc: 'Enable secure data sharing for doctors and hospitals',
    details:
      'Securely store and share health records digitally to improve clinical workflows and continuity of care.',
  },
  {
    title: 'Advanced Diagnostics',
    desc: 'Enhance precision and speed by analyzing data using AI',
    details:
      'Leverage artificial intelligence to detect abnormalities, reduce diagnostic errors, and support better clinical decisions.',
  },
  {
    title: 'Predictive Analytics',
    desc: 'Identify health risks before they occur using ML models',
    details:
      'Analyze patient data to predict potential conditions and reduce hospital readmissions through early detection.',
  },
  {
    title: 'Telemedicine Integration',
    desc: 'Connect patients and doctors via secure video & chat',
    details:
      'Enable remote consultations and follow-ups, making healthcare more accessible and reducing in-clinic visits.',
  },
  {
    title: 'Health Data Insights',
    desc: 'Convert medical data into actionable intelligence',
    details:
      'Use data visualization and trend analysis to support hospital management, patient outcomes, and operational decisions.',
  },
];

export default function HealthAIServices() {
  return (
    <App_layout>
    <div className="min-h-screen mt-16 bg-gradient-to-br from-white via-blue-50 to-white p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our HealthAI Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((item, index) => (
          <div key={index} className="group perspective w-full h-64">
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-white border border-blue-100 rounded-xl shadow-lg p-6 flex flex-col justify-center backface-hidden">
                <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <span className="mt-4 text-xs text-indigo-500">Hover to flip</span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-indigo-600 text-white rounded-xl p-6 rotate-y-180 backface-hidden">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm">{item.details}</p>
                <div className="mt-4 text-xs text-right text-indigo-200">AI-powered</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for 3D Flip */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
    </App_layout>
  );
}
