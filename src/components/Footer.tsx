import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-white/8 bg-[#04060b] text-slate-400 text-xs">
      {/* Feature Notes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-medium uppercase tracking-[0.2em] text-xs mb-2">
              01. Aero-Sculpted Monocoque
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every curve of the VEYRA sedan directs boundary-layer airflow around the canopy and into low-pressure floor venturis, achieving a Cd of 0.198 without active aero spoilers.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium uppercase tracking-[0.2em] text-xs mb-2">
              02. 800V Silicon Carbide Inverters
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Operating at ultra-high switching frequencies, the dual inverters reduce electrical hysteresis loss by 74%, providing sustained 720 kW torque repeatability during track-duty cycles.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium uppercase tracking-[0.2em] text-xs mb-2">
              03. Acoustic Silence Chamber
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Acoustic glass sandwiching, active inverted sound cancellation in the wheel liners, and tuned bushing isolators keep internal cabin sound levels under 52 dB at 130 km/h.
            </p>
          </div>
        </div>
      </div>

      {/* Baseline & Navigation Mirror */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <span className="font-display text-white font-bold tracking-[0.3em] text-base">
            VEYRA
          </span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
            Design study baseline — Specimen 01
          </span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-slate-500 text-[11px]">
            Advanced Mobility Lab
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-white transition-colors uppercase tracking-wider text-[11px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            Design Study
          </button>
          <button
            onClick={() => onNavigate('/fleet')}
            className="hover:text-white transition-colors uppercase tracking-wider text-[11px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            The Fleet
          </button>
          <a
            href="https://hyper-ride-gallery.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Live Archive</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-2 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-500">
        <p>© 2026 VEYRA Automotive Research. Proprietary electric architecture study.</p>
        <p className="tabular-nums">ISO 26262 ASIL-D Functional Safety Verified</p>
      </div>
    </footer>
  );
};
