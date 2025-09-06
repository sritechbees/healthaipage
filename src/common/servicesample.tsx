import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  FaSmileBeam,
  FaMicroscope,
  FaFileMedicalAlt,
  FaHeartbeat,
  FaUserMd,
  FaLock,
} from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      id: 'patient-experience',
      title: 'Patient Experience',
      subtitle: 'Improve access and affordability',
      icon: <FaSmileBeam className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'Telehealth & appointment optimisation',
        'Transparent pricing flows',
        'Patient self-service portals',
      ],
      accent: 'from-yellow-400 to-orange-300',
    },
    {
      id: 'advanced-diagnostics',
      title: 'Advanced Diagnostics',
      subtitle: 'Enhance precision & speed using AI',
      icon: <FaMicroscope className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'Imaging & pattern recognition',
        'AI-powered decision support',
        'Faster triage and reporting',
      ],
      accent: 'from-indigo-400 to-cyan-400',
    },
    {
      id: 'digital-records',
      title: 'Digital Health Records',
      subtitle: 'Secure data sharing across care',
      icon: <FaFileMedicalAlt className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'Interoperable formats (FHIR-ready)',
        'Role-based access controls',
        'Audit trails & analytics',
      ],
      accent: 'from-emerald-400 to-teal-300',
    },
    {
      id: 'remote-monitoring',
      title: 'Remote Monitoring',
      subtitle: 'Extend care beyond hospital walls',
      icon: <FaHeartbeat className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'IoT & wearable integrations',
        'Alerts, thresholds & care pathways',
        'Continuous vitals dashboards',
      ],
      accent: 'from-pink-400 to-rose-300',
    },
    {
      id: 'doctor-enablement',
      title: 'Doctor Enablement',
      subtitle: 'Streamline clinical workflows',
      icon: <FaUserMd className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'Clinical AI assistants',
        'Voice-to-text EMR capture',
        'Smart templates & order sets',
      ],
      accent: 'from-yellow-300 to-lime-300',
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy & Security',
      subtitle: 'Build trust and compliance',
      icon: <FaLock className="w-8 h-8" aria-hidden="true" />,
      bullets: [
        'Blockchain pilots & consent layers',
        'Encryption & secure key management',
        'Compliance reporting',
      ],
      accent: 'from-slate-400 to-gray-500',
    },
  ];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins">
            Our Services
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            End-to-end healthcare products that combine human-centred design with responsible AI.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={card}
              className="group relative rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700"
            >
              <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transform-gpu transition-opacity duration-500 bg-gradient-to-br ${s.accent} blur-xl`} aria-hidden="true"></div>

              <div className="relative z-10 flex items-start space-x-4">
                <div className="flex-none bg-white dark:bg-gray-800 rounded-lg p-3 ring-1 ring-gray-100 dark:ring-gray-700">
                  <div className="text-yellow-500 dark:text-yellow-400">{s.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-gray-100">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.subtitle}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 relative z-10 text-sm text-gray-700 dark:text-gray-300">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="flex-shrink-0 h-4 w-4 mt-1" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 relative z-10">
                <a
                  href={`#contact`}
                  className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Want this section customised (different colors, icon set, or condensed layout)? Tell me what you'd like and I’ll update it.
          </p>
        </div>
      </div>
    </section>
  );
}
