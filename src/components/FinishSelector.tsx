import React from 'react';
import { PaintFinish } from '../types';
import { Sparkles, Check, Droplets } from 'lucide-react';

interface FinishSelectorProps {
  finishes: PaintFinish[];
  selectedFinish: PaintFinish;
  onSelectFinish: (finish: PaintFinish) => void;
  isOpen: boolean;
  onClose?: () => void;
}

export const FinishSelector: React.FC<FinishSelectorProps> = ({
  finishes,
  selectedFinish,
  onSelectFinish,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Body Finishes Customizer"
      className="p-5 rounded-xl bg-[#090d1a]/95 border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 block">
            AERODYNAMIC FINISH LAB
          </span>
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Body Finishes ({finishes.length} Options)
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <Droplets className="w-3.5 h-3.5 text-cyan-400" />
          <span>Live Swatch Transfer</span>
        </div>
      </div>

      {/* Swatch Selector Row */}
      <div className="grid grid-cols-5 gap-2.5 mb-4" role="radiogroup" aria-label="Paint Finishes">
        {finishes.map((finish) => {
          const isSelected = finish.id === selectedFinish.id;
          return (
            <button
              key={finish.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectFinish(finish)}
              className={`group flex flex-col items-center gap-2 p-2 rounded-lg border transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isSelected
                  ? 'border-cyan-400 bg-white/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className="relative w-8 h-8 rounded-full border border-white/40 shadow-inner flex items-center justify-center overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${finish.hex} 55%, #000000 100%)`,
                }}
              >
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                )}
              </div>
              <span className={`text-[11px] font-medium leading-tight line-clamp-1 ${isSelected ? 'text-cyan-300 font-semibold' : 'text-slate-300'}`}>
                {finish.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Paint Metadata Display */}
      <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Selected Formulation:</span>
          <span className="font-semibold text-white">{selectedFinish.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5 text-[10px] font-mono">
          <div>
            <span className="text-slate-500 block">Specular Reflectance</span>
            <span className="text-cyan-300 tabular-nums">{selectedFinish.reflectance}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Chemistry Formula</span>
            <span className="text-slate-300 truncate block">{selectedFinish.coating}</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
          {selectedFinish.description}
        </p>
      </div>
    </div>
  );
};
