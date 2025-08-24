'use client';

import Image from 'next/image';
import React from 'react';

export default function CollaborationHospitalsClinics() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-black" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.08)_25%,rgba(255,255,255,.08)_26%,transparent_27%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.08)_25%,rgba(255,255,255,.08)_26%,transparent_27%)] bg-[size:36px_36px]" />
        <div className="absolute -top-52 -left-44 w-[560px] h-[560px] rounded-full bg-indigo-600/18 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-52 -right-44 w-[560px] h-[560px] rounded-full bg-sky-500/16 blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left copy */}
          <div style={{ animation: 'fadeInUp 800ms ease-out both' }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/6 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse-fast" />
              Hospital Partnerships
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
              Collaboration with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">Hospitals & Clinics</span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mt-4">
              Deploy scalable ECG solutions across healthcare institutions to improve diagnostics,
              streamline workflows, and enable population-level cardiac health management.
              Secure integrations, clinician-friendly dashboards, and training programs for smooth adoption.
            </p>

            {/* Benefits list */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Benefit title="Interoperable APIs" desc="FHIR/HL7 connectors for seamless EHR integration." icon="🔗" />
              <Benefit title="Deployment Support" desc="On-site & remote rollout, training & onboarding." icon="🛠️" />
              <Benefit title="Data Governance" desc="Consent, audit trails, and regional compliance." icon="🔒" />
              <Benefit title="Clinical Workflows" desc="Triage queues, escalations & reporting." icon="📈" />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-hospitals"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-gray-900 hover:from-indigo-500 hover:to-cyan-400 transition"
              >
                Partner with Us
              </a>
              <a
                href="#case-studies"
                className="px-6 py-3 rounded-xl font-semibold border border-white/15 hover:bg-white/6 transition"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right visual cluster */}
          <div className="relative">
            {/* Connector */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent animate-flow" />

            {/* Hospital dashboard card */}
            <div
              className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-400 grid place-items-center text-black font-semibold">
                    H
                  </div>
                  <div>
                    <p className="font-semibold">CityCare Hospital</p>
                    <p className="text-xs text-gray-300">Cardiology • 500 beds</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">Connected</span>
              </div>

              <div className="mt-4 rounded-2xl bg-black/40 border border-white/8 p-3">
                <div className="text-xs text-gray-300 mb-2 flex items-center justify-between">
                  <span>Active ECG Streams</span>
                  <span>24</span>
                </div>

                <div className="relative h-36 rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* small map/mock background */}
                  <div className="absolute inset-0 opacity-10 bg-[url('/ecg/hospital-network.png')] bg-center bg-cover" />
                  {/* small cards */}
                  <div className="absolute inset-0 p-3 grid grid-cols-2 gap-2">
                    <MiniNode name="Ward A" stat="8" status="ok" />
                    <MiniNode name="ICU" stat="6" status="alert" />
                    <MiniNode name="ER" stat="5" status="ok" />
                    <MiniNode name="OPD" stat="5" status="ok" />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-300">Latest sync: 2 min ago</span>
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-white/8 border border-white/8 hover:bg-white/12">View</button>
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-400/30">Alerts</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic card */}
            <div
              className="relative mt-8 mx-auto max-w-md rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'fadeIn 900ms 120ms ease-out both, float 8s 300ms ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-sky-400 grid place-items-center text-black font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold">Downtown Clinic</p>
                  <p className="text-xs text-gray-300">Outpatient • Remote sync</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-300">
                Enable clinics to upload ECGs directly, request specialist reviews, and schedule follow-ups — all within a single integrated workflow.
              </div>

              {/* action row */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-300">Shared with: 12 clinicians</div>
                <button className="px-3 py-1.5 rounded-lg bg-indigo-400/20 text-indigo-200 border border-indigo-400/30 hover:bg-indigo-400/30 text-xs">Share</button>
              </div>
            </div>

            {/* Integration API mockup */}
            <div
              className="relative mt-8 mx-auto max-w-md rounded-3xl border border-white/12 bg-black/40 backdrop-blur-xl shadow-2xl p-4"
              style={{ animation: 'fadeIn 900ms 240ms ease-out both' }}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Integration • REST & FHIR</p>
                <span className="text-[10px] px-2 py-1 rounded-md bg-white/8 border border-white/10">v1</span>
              </div>

              <pre className="mt-3 text-xs bg-black/60 border border-white/6 rounded-lg p-3 overflow-x-auto">
{`POST /api/v1/integrations/ingest
Authorization: Bearer <token>
{
  "hospitalId":"H-234",
  "ecgUrl":"https://bucket.s3/.../ecg.dcm",
  "meta": { "lead":"II", "duration":"10s" }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Inline animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%,100% { opacity: .34; }
          50% { opacity: .7; }
        }
        @keyframes flow {
          0% { opacity: 0; height: 0; }
          30% { opacity: .9; height: 72px; }
          100% { opacity: 0; height: 0; }
        }

        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-flow { animation: flow 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/* Small subcomponents */

function Benefit({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl bg-white/6 border border-white/10 p-4 flex gap-3 items-start">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-400 grid place-items-center text-black font-semibold">
        <span>{icon}</span>
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-300 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function MiniNode({ name, stat, status }: { name: string; stat: string; status: 'ok' | 'alert' }) {
  return (
    <div className="rounded-lg p-2 bg-white/4 border border-white/6 flex items-center justify-between">
      <div>
        <div className="text-xs text-gray-300">{name}</div>
        <div className="font-semibold">{stat}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${status === 'ok' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
      </div>
    </div>
  );
}
