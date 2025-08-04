'use client';

import React, { useState } from 'react';
import { FaCogs, FaMicroscope, FaBroadcastTower, FaLungs, FaBrain, FaHeartbeat } from 'react-icons/fa';

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        Products
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute z-50 mt-4 w-[90vw] max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-gray-800">
          {/* Left Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Enterprise Imaging</h3>
              <button className="text-sm text-gray-500 border px-3 py-1 rounded-full hover:bg-gray-100 transition">
                Explore all
              </button>
            </div>

            <div className="space-y-5">
              <DropdownItem
                icon={<FaMicroscope className="text-white" />}
                title="Diagnostic Suite™"
                desc="Unified diagnostic workspace with PACS functionality, enhanced viewer, and smart interpretation."
              />
              <DropdownItem
                icon={<FaCogs className="text-white" />}
                title="Operations Suite™"
                desc="Unified workspace for RIS functionality and real-time workflow management."
              />
              <DropdownItem
                icon={<FaBroadcastTower className="text-white" />}
                title="TechLive™"
                desc="Remote collaboration platform easily deployed through low-cost infrastructure."
              />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Population Health</h3>
              <button className="text-sm text-gray-500 border px-3 py-1 rounded-full hover:bg-gray-100 transition">
                Explore all
              </button>
            </div>

            <div className="space-y-5">
              <DropdownItem
                icon={<FaHeartbeat className="text-white" />}
                title="SmartMammo™"
                desc="Enhanced workflow and diagnostic accuracy in breast cancer detection."
              />
              <DropdownItem
                icon={<FaBrain className="text-white" />}
                title="DeepHealth Prostate"
                desc="Prostate cancer detection compatible with leading fusion biopsy systems."
              />
              <DropdownItem
                icon={<FaLungs className="text-white" />}
                title="DeepHealth Lung"
                desc="Enhanced nodule detection, reporting and patient management."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-purple-700 p-3 rounded-full">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
