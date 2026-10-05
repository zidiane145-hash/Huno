import React from 'react';
import { WheelDesign } from '../types';
import { Disc, Wind, Gauge, Check } from 'lucide-react';

interface WheelSelectorProps {
  wheels: WheelDesign[];
  selectedWheel: WheelDesign;
  onSelectWheel: (wheel: WheelDesign) => void;
  isOpen: boolean;
  onClose?: () => void;
}

export const WheelSelector: React.FC<WheelSelectorProps> = ({
  wheels,
  selectedWheel,
  onSelectWheel,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Wheel Aerodynamic Customizer"
      className="p-5 rounded-xl bg-[#090d1a]/95 border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 block">
            ROTATIONAL AERODYNAMICS
          </span>
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Wheel Architecture ({wheels.length} Options)
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <Disc className="w-3.5 h-3.5 text-cyan-400" />
          <span>Active Wheel Calibration</span>
        </div>
      </div>

      {/* Wheel Options Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4" role="radiogroup" aria-label="Wheel Options">
        {wheels.map((wheel) => {
          const isSelected = wheel.id === selectedWheel.id;
          return (
            <button
              key={wheel.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectWheel(wheel)}
              className={`p-3 rounded-lg border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 relative ${
                isSelected
                  ? 'border-cyan-400 bg-white/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                  {wheel.size}
                </span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </div>
              <h4 className="text-xs font-semibold text-white mb-1">
                {wheel.name}
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {wheel.type}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Wheel Aerodynamics & Telemetry Impact */}
      <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-mono">Aerodynamic Drag</span>
              <span className="font-mono font-semibold text-white tabular-nums">
                {selectedWheel.cdDelta}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-mono">Unsprung Weight Delta</span>
              <span className="font-mono font-semibold text-white tabular-nums">
                {selectedWheel.massSavings}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
            Aero Benefit Analysis
          </span>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            {selectedWheel.aerodynamicBenefit}
          </p>
        </div>
      </div>
    </div>
  );
};
