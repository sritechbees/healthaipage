'use client';

import Image from 'next/image';

export default function CloudECGData() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient + soft grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.15)_25%,rgba(255,255,255,.15)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.15)_25%,rgba(255,255,255,.15)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15)_76%,transparent_77%)] bg-[size:32px_32px]" />
        {/* Floating cloud glows */}
        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-sky-500/20 blur-3xl animate-cloud-pulse" />
        <div className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full bg-cyan-400/20 blur-3xl animate-cloud-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div style={{ animation: 'fadeInUp 800ms ease-out both' }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-fast" />
              Cloud-Based ECG Data Management
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-5">
              Secure Storage & Seamless <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">ECG Sharing</span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mt-4">
              Securely store, organize, and share ECG data across hospitals, clinicians, and patients. 
              Role-based access, encrypted transit & at-rest, and interoperable APIs for EHR integration.
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1">🔒</span> End-to-end encryption (at rest & in transit)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">🔑</span> Role-based access & consent management
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">🔗</span> FHIR/HL7 compatible APIs
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">🧭</span> Audit logs & traceability
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-sky-500 text-gray-900 hover:from-sky-500 hover:to-cyan-400 transition"
              >
                Get Started
              </a>
              <a
                href="#api"
                className="px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition"
              >
                View API Docs
              </a>
            </div>
          </div>

          {/* Mock Cloud UI */}
          <div className="relative">
            {/* Connector line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent animate-flow" />

            {/* Cloud storage card */}
            <div
              className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/20 border border-cyan-300/30 grid place-items-center">
                    {/* cloud icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 18h10a4 4 0 0 0 .7-7.95A6 6 0 1 0 6 10a4 4 0 0 0 1 8Z" stroke="#67e8f9" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">ECG Cloud Vault</p>
                    <p className="text-xs text-gray-300">Encrypted • Multi-region</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  Healthy
                </span>
              </div>

              {/* Upload area */}
              <div className="mt-4 rounded-2xl bg-black/40 border border-white/10 p-4">
                <div className="text-xs text-gray-300 mb-2 flex items-center justify-between">
                  <span>Upload ECG Report</span>
                  <span>.xml • .pdf • .dcm</span>
                </div>

                <div className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 grid place-items-center">
                  <div className="text-center">
                    <div className="text-sm">Drag & Drop files here</div>
                    <div className="text-[10px] text-gray-400 mt-1">or click to browse</div>
                  </div>
                  {/* progress bar mock */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-300 to-sky-400 animate-progress" />
                  </div>
                </div>

                {/* Share row */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* avatars */}
                    <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image src="/ecg/doctor.png" alt="Clinician" width={28} height={28} />
                    </div>
                    <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image src="/ecg/patient.png" alt="Patient" width={28} height={28} />
                    </div>
                    <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image src="/ecg/hospital.png" alt="Hospital" width={28} height={28} />
                    </div>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-400/30">
                    Share Secure Link
                  </button>
                </div>
              </div>

              {/* Audit chip row */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Signed URL', 'AES-256', 'RBAC', 'Geo-Replicated'].map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </div>

            {/* API card */}
            <div
              className="relative mt-8 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5"
              style={{ animation: 'fadeIn 900ms 120ms ease-out both, float 8s 300ms ease-in-out infinite' }}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">FHIR API • /ecg/reports</p>
                <span className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10">v1</span>
              </div>
              <pre className="mt-3 text-xs bg-black/50 border border-white/10 rounded-xl p-3 overflow-x-auto">
{`POST /ecg/reports
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "P-10231",
  "format": "DICOM",
  "consent": true,
  "metadata": { "lead": "II", "duration": "10s" }
}`}
              </pre>
              <div className="mt-3 text-[11px] text-gray-300 flex items-center justify-between">
                <span>Latency: 82 ms</span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-fast" />
                  Live
                </span>
              </div>
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes cloud-pulse {
          0%, 100% { opacity: .35; }
          50% { opacity: .65; }
        }
        @keyframes flow {
          0% { opacity: .0; height: 0; }
          30% { opacity: .9; height: 96px; }
          100% { opacity: 0; height: 0; }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(0%); }
          100% { transform: translateX(0%); }
        }
        .animate-cloud-pulse { animation: cloud-pulse 6s ease-in-out infinite; }
        .animate-flow { animation: flow 3.5s ease-in-out infinite; }
        .animate-progress { animation: progress 2.2s ease-out infinite; }
        .animate-pulse-fast { animation: pulse 1.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
