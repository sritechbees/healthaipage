'use client';

import Image from 'next/image';
import React from 'react';

export default function AdvancedECGPersonalizedTreatment() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.12)_25%,rgba(255,255,255,.12)_26%,transparent_27%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.12)_25%,rgba(255,255,255,.12)_26%,transparent_27%)] bg-[size:36px_36px]" />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-purple-600/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div style={{ animation: 'fadeInUp 800ms ease-out both' }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/6 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse-fast" />
              Personalized Treatment
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
              Advanced ECG for <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">Personalized Treatment</span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mt-4">
              Tailor treatment plans using precise ECG-derived biomarkers combined with AI diagnostics.
              Convert signal-derived insights into individualized medication adjustments, device settings,
              and follow-up schedules for better patient outcomes.
            </p>

            {/* Benefits */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Feature title="Signal-derived biomarkers" desc="Heart-rate variability, ST deviations, arrhythmia indices." icon="📊" />
              <Feature title="AI treatment suggestions" desc="Personalized dosing & intervention recommendations." icon="🤖" />
              <Feature title="Therapy optimization" desc="Tune pacemaker/CRT parameters using ECG trends." icon="⚙️" />
              <Feature title="Clinician dashboard" desc="Actionable summaries and confidence scores." icon="📋" />
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-400 to-violet-500 text-gray-900 hover:from-violet-500 hover:to-pink-400 transition"
              >
                Request Demo
              </a>
              <a
                href="#whitepaper"
                className="px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/6 transition"
              >
                Read Whitepaper
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Connector */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-pink-400/60 via-pink-400/20 to-transparent animate-flow" />

            {/* Patient Card */}
            <div
              className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-pink-400 to-violet-400 grid place-items-center text-black font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold">Patient: Arun Kumar</p>
                  <p className="text-xs text-gray-300">DOB: 1990 • ID: P-10092</p>
                </div>
              </div>

              {/* ECG insights */}
              <div className="mt-4 rounded-2xl bg-black/40 border border-white/8 p-3">
                <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                  <span>Latest ECG • Lead II</span>
                  <span>HR 72 bpm</span>
                </div>

                {/* ECG waveform + annotation */}
                <div className="relative h-36 rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* background glow */}
                  <div className="absolute -left-10 -top-10 w-36 h-36 bg-pink-400/10 rounded-full blur-2xl" />
                  <svg viewBox="0 0 420 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="gline" x1="0" x2="1">
                        <stop offset="0%" stopColor="#fb7185" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 L30,50 L50,12 L70,88 L92,50 L140,50 L160,26 L190,92 L210,50 L250,50 L270,18 L290,84 L320,50 L360,50 L380,15 L400,85 L420,50"
                      fill="none"
                      stroke="url(#gline)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.6s" repeatCount="indefinite" />
                    </path>

                    {/* annotation marker */}
                    <circle cx="92" cy="50" r="3.6" fill="#f97316">
                      <animate attributeName="r" values="2.5;5;2.5" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>

                {/* Insight badges */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge label="Arrhythmia risk" value="Low" tone="emerald" />
                    <Badge label="ST deviation" value="None" tone="cyan" />
                  </div>
                  <div className="text-xs text-gray-300">
                    Confidence <b>92%</b>
                  </div>
                </div>
              </div>

              {/* Suggested actions */}
              <div className="mt-4 grid grid-cols-1 gap-2">
                <Action title="Adjust beta-blocker dose" hint="Reduce by 12.5% — monitor HR" />
                <Action title="Schedule echo" hint="Within 2 weeks for structural check" />
              </div>
            </div>

            {/* Model Card */}
            <div
              className="relative mt-8 mx-auto max-w-md rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'fadeIn 900ms 120ms ease-out both, float 8s 300ms ease-in-out infinite' }}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">AI Model • CardioNet</p>
                <span className="text-[10px] px-2 py-1 rounded-md bg-white/8 border border-white/10">v2.1</span>
              </div>

              <p className="mt-3 text-sm text-gray-300">
                Model integrates temporal ECG features + clinical metadata to recommend personalized interventions.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Stat label="Precision" value="94%" />
                <Stat label="Recall" value="88%" />
              </div>

              <pre className="mt-3 text-xs bg-black/50 border border-white/8 rounded-xl p-3 overflow-x-auto">
{`// example payload
POST /api/predict
{ "patientId": "P-10092", "ecgLead": "II", "duration": "10s" }`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Inline animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: .36; }
          50% { opacity: .72; }
        }
        @keyframes flow {
          0% { opacity: 0; height: 0; }
          30% { opacity: .9; height: 80px; }
          100% { opacity: 0; height: 0; }
        }
        @keyframes pulse-fast {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.18); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 1.6s ease-in-out infinite; }
        .animate-flow { animation: flow 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/* Small subcomponents */

function Feature({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl bg-white/6 border border-white/8 p-4 flex gap-3 items-start">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-violet-400 grid place-items-center text-black font-semibold">
        <span className="text-sm">{icon}</span>
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-gray-300 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function Badge({ label, value, tone }: { label: string; value: string; tone: 'emerald' | 'cyan' | 'amber' }) {
  const colors = {
    emerald: 'bg-emerald-300/20 text-emerald-200 border-emerald-300/30',
    cyan: 'bg-cyan-300/20 text-cyan-200 border-cyan-300/30',
    amber: 'bg-amber-300/20 text-amber-200 border-amber-300/30',
  } as const;
  return (
    <div className={`text-[11px] px-2 py-1 rounded-md border ${colors[tone]}`}>
      <div className="text-[11px]">{label}</div>
      <div className="font-semibold text-sm -mt-0.5">{value}</div>
    </div>
  );
}

function Action({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="rounded-lg bg-white/4 border border-white/8 p-3 flex items-center justify-between">
      <div>
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-gray-300 mt-1">{hint}</div>
      </div>
      <button className="px-3 py-1.5 rounded-lg bg-pink-400/20 text-pink-200 border border-pink-400/30 text-xs hover:bg-pink-400/30">
        Apply
      </button>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/6 border border-white/8 p-3">
      <div className="text-xs text-gray-300">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
