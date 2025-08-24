'use client';

import Image from 'next/image';

export default function ECGPreventiveHealthcare() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* ECG Scrolling Wave Background */}
       <div className="absolute inset-0">
               {/* hero image (replace) */}
               <Image
                 src="/product/Integration of ECG with Telemedicine.jpg" // <-- replace with your background
                 alt="Telemedicine Background"
                 fill
                 priority
                 className="object-cover object-center"
               /></div>

        {/* soft wellness gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-gray-350 to-black mix-blend-multiply" />

        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.18)_25%,rgba(255,255,255,.18)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.18)_75%,rgba(255,255,255,.18)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.18)_25%,rgba(255,255,255,.18)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.18)_75%,rgba(255,255,255,.18)_76%,transparent_77%)] bg-[size:28px_28px]" />

        {/* wellness glows */}
        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-emerald-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full bg-teal-400/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div style={{ animation: 'fadeInUp 800ms ease-out both' }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse-fast" />
              Preventive Healthcare
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
              ECG in{' '}
              <span className="bg-gradient-to-r from-emerald-200 to-teal-300 bg-clip-text text-transparent">
                Preventive Healthcare
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mt-4">
              Routine ECG screenings as part of wellness programs to detect hidden
              risks early. Encourage proactive heart checks, track trends over time,
              and enable lifestyle interventions before symptoms appear.
            </p>

            {/* Steps */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { n: '01', t: 'Baseline ECG', d: 'Establish a personal cardiac baseline.' },
                { n: '02', t: 'Routine Check', d: 'Periodic screening & comparisons.' },
                { n: '03', t: 'Action Plan', d: 'Guided interventions & follow-ups.' },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl bg-white/10 border border-white/15 p-4">
                  <div className="text-xs text-gray-300">{s.n}</div>
                  <div className="font-semibold mt-1">{s.t}</div>
                  <div className="text-sm text-gray-300 mt-1">{s.d}</div>
                </div>
              ))}
            </div>

            {/* KPIs */}
            <div className="mt-6 flex flex-wrap gap-4">
              <KPI label="Avg. Screening Time" value="5–7 min" />
              <KPI label="Participants Engaged" value="10k+" />
              <KPI label="Repeat Adherence" value="72%" />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enroll"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-300 to-teal-300 text-gray-900 hover:from-teal-300 hover:to-emerald-300 transition"
              >
                Enroll in Program
              </a>
              <a
                href="#guide"
                className="px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                Screening Guide
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* connector */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-emerald-300/70 via-emerald-300/20 to-transparent animate-flow" />

            {/* Card: ECG trend */}
            <div
              className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">Wellness ECG Trend</div>
                <span className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10">
                  Last 6 mo
                </span>
              </div>

              {/* ECG canvas */}
              <div className="mt-4 relative h-28 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_30%,#34d399_0%,transparent_60%)]" />
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                      />
                    </pattern>
                    <linearGradient id="line" x1="0" x2="1">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#99f6e4" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)">
                    <animate
                      attributeName="x"
                      from="0"
                      to="-20"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <path
                    d="M0,50 L35,50 L55,18 L72,80 L95,50 L140,50 L160,26 L188,88 L210,50 L250,50 L272,16 L292,82 L310,50 L345,50 L365,18 L382,80 L400,50"
                    fill="none"
                    stroke="url(#line)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0,800"
                      to="800,0"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>

              {/* checklist */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-200">
                <Check text="Quarterly reminder" />
                <Check text="Lifestyle tips" />
                <Check text="Risk score updates" />
                <Check text="Clinician review" />
              </div>
            </div>

            {/* Card: Appointment */}
            <div
              className="relative mt-8 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5"
              style={{
                animation:
                  'fadeIn 900ms 120ms ease-out both, float 8s 300ms ease-in-out infinite',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-300/20 border border-emerald-200/40 grid place-items-center">
                  {/* calendar icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="#86efac"
                      strokeWidth="1.6"
                    />
                    <path d="M16 3v4M8 3v4M3 9h18" stroke="#86efac" strokeWidth="1.6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Next Screening</p>
                  <p className="text-xs text-gray-300">
                    Auto-scheduled • Reminders on
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-gray-300">Lead II • 10s • Resting</span>
                <button className="px-3 py-1.5 rounded-lg bg-emerald-300/20 text-emerald-200 border border-emerald-300/30 hover:bg-emerald-300/30">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.65;
          }
        }
        @keyframes flow {
          0% {
            opacity: 0;
            height: 0;
          }
          30% {
            opacity: 0.9;
            height: 96px;
          }
          100% {
            opacity: 0;
            height: 0;
          }
        }
        @keyframes scrollBg {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-flow {
          animation: flow 3.5s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse 1.4s ease-in-out infinite;
        }
        .animate-scrollBg {
          animation: scrollBg 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* Small subcomponents */

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3">
      <div className="text-xs text-gray-300">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex w-4 h-4 rounded-full bg-emerald-300/30 border border-emerald-200/40" />
      <span>{text}</span>
    </div>
  );
}
