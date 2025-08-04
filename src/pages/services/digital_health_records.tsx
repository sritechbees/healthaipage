'use client';

import { useEffect} from 'react';

const services = [
  {
    title: 'Digital Health Records',
    desc: 'Secure data sharing for hospitals',
    details:
      'Digital records enhance coordination, enable remote access, and reduce the chances of medical errors with real-time updates.',
  },
  {
    title: 'Remote Patient Monitoring',
    desc: 'Track vitals from anywhere',
    details:
      'AI sensors monitor patient vitals in real time, offering alerts and analysis without requiring hospital visits.',
  },
  {
    title: 'Predictive Analytics',
    desc: 'Detect health risks early',
    details:
      'Predictive models analyze trends to forecast potential conditions, enabling early intervention and preventive care.',
  },
  {
    title: 'Smart Diagnostics',
    desc: 'Faster, more accurate diagnosis',
    details:
      'AI reviews images, labs, and history to identify patterns and speed up the diagnostic process with high accuracy.',
  },
  {
    title: 'Telemedicine Platform',
    desc: 'AI-powered virtual care',
    details:
      'Consult, prescribe, and follow-up via secure platforms that use AI to assist and document interactions in real time.',
  },
  {
    title: 'Health Data Analytics',
    desc: 'Insights for better outcomes',
    details:
      'Aggregate and analyze large-scale health data to refine treatments, personalize care, and improve efficiency.',
  },
];

export default function HealthAIFlipCards() {
  useEffect(() => {
    // Optional: animation/visibility triggers
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">AI-Powered Healthcare Services</h2>
        <p className="mt-2 text-gray-600">Tap into intelligent systems that redefine modern care.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, idx) => (
          <div key={idx} className="group perspective">
            <div className="relative h-64 w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 p-6 bg-white rounded-xl shadow-xl border border-blue-100 flex flex-col justify-center items-start backface-hidden">
                <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <span className="mt-4 text-xs text-indigo-500">Hover to view more</span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 p-6 bg-indigo-600 text-white rounded-xl shadow-xl rotate-y-180 backface-hidden">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm">{item.details}</p>
                <div className="mt-4 text-right text-xs">AI-Enhanced</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind utility to support 3D flip */}
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
    </section>
  );
}
