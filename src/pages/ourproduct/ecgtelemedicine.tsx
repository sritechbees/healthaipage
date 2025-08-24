'use client';

import Image from 'next/image';

export default function ECGTelemedicine() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* hero image (replace) */}
        <Image
          src="/product/Integration of ECG with Telemedicine.jpg" // <-- replace with your background
          alt="Telemedicine Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/75 to-gray-950/90"></div>

        {/* soft radial glows */}
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div
            className="max-w-xl"
            style={{ animation: 'fadeInUp 900ms ease-out both' }}
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-fast" />
              Telemedicine Integration
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
              Integration of ECG with <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">Telemedicine</span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mt-4">
              Enabling doctors to <span className="text-cyan-300 font-semibold">remotely review ECG reports</span> in real time
              for timely clinical decisions. Secure share, instant consults, and
              actionable insights—directly within virtual care workflows.
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-400">✅</span>
                HIPAA-ready sharing & consent-driven access
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-400">✅</span>
                One-click video consult + ECG overlay
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-400">✅</span>
                AI triage & priority queues for abnormalities
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-sky-500 text-gray-900 hover:from-sky-500 hover:to-cyan-400 transition"
              >
                Book a Demo
              </a>
              <a
                href="#docs"
                className="px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                Integration Docs
              </a>
            </div>
          </div>

          {/* Right mock UI */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent animate-flow" />

            {/* Doctor card */}
            <div
              className="relative z-10 mx-auto max-w-sm rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src="/product/doctor.jpg" // <-- replace
                    alt="Doctor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Dr. Priya Menon</p>
                  <p className="text-xs text-gray-300">Cardiologist • Online</p>
                </div>
              </div>

              {/* mini ECG preview */}
              <div className="mt-4 rounded-2xl bg-black/40 border border-white/10 p-4">
                <div className="text-xs text-gray-300 mb-2 flex items-center justify-between">
                  <span>ECG Report • #84219</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-fast" />
                    Live
                  </span>
                </div>
                <div className="relative h-24 overflow-hidden rounded-lg bg-gradient-to-r from-gray-800 to-gray-900">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#22d3ee_0%,transparent_60%)]" />
                  {/* animated ECG line */}
                  <svg
                    viewBox="0 0 400 100"
                    className="w-full h-full"
                    style={{ animation: 'dash 2.8s linear infinite' }}
                  >
                    <path
                      d="M0,50 L40,50 L60,10 L80,80 L100,50 L140,50 L160,20 L190,90 L210,50 L250,50 L270,10 L290,80 L310,50 L400,50"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* action bar */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-300">AI Risk: <b className="text-amber-300">Moderate</b></span>
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">
                      Annotate
                    </button>
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-400/30">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient phone mock */}
            <div
              className="relative mt-8 mx-auto max-w-[280px] rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-3"
              style={{ animation: 'fadeIn 900ms 120ms ease-out both, float 7.2s 300ms ease-in-out infinite' }}
            >
              <div className="rounded-[1.6rem] bg-black/60 border border-white/10 p-3">
                <div className="text-[10px] text-gray-300 mb-2 flex items-center justify-between">
                  <span>Patient • Home</span>
                  <span>HR 78 bpm</span>
                </div>
                <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                  <Image
                    src="/product/Integration of ECG with Telemedicine.jpg" // <-- replace with app UI/ECG image
                    alt="Patient App"
                    fill
                    className="object-cover opacity-90"
                  />
                  {/* subtle shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <button className="text-[10px] px-2 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">
                    Share ECG
                  </button>
                  <button className="text-[10px] px-2 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">
                    Schedule
                  </button>
                  <button className="text-[10px] px-2 py-2 rounded-lg bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-400/30">
                    Consult
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Inline animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        @keyframes flow {
          0% { opacity: .0; height: 0; }
          30% { opacity: .8; height: 96px; }
          100% { opacity: 0; height: 0; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2.2s ease-in-out infinite; }
        .animate-flow { animation: flow 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
