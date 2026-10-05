import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { HoverFilmClip } from './HoverFilmClip';

interface HotspotMarkerProps {
  id: string;
  label: string;
  category: 'system' | 'finish' | 'wheel';
  filmType?: 'flux' | 'cells';
  filmBadge?: string;
  xPercent: number;
  yPercent: number;
  isActive?: boolean;
  onClick: () => void;
}

export const HotspotMarker: React.FC<HotspotMarkerProps> = ({
  id,
  label,
  category,
  filmType,
  filmBadge,
  xPercent,
  yPercent,
  isActive = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showTooltip = isHovered || isFocused;

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
    >
      <div className="relative">
        {/* Pulsing outer aura ring */}
        <span
          className={`absolute -inset-2 rounded-full pointer-events-none transition-opacity ${
            isActive
              ? 'bg-cyan-400/40 animate-pulse-ring opacity-100'
              : 'bg-white/20 animate-pulse-ring opacity-60'
          }`}
          aria-hidden="true"
        />

        {/* Hotspot trigger button */}
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label={`Open ${label} hotspot`}
          aria-haspopup="dialog"
          className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070d] ${
            isActive
              ? 'bg-cyan-400 text-slate-950 scale-110 shadow-[0_0_20px_rgba(0,240,255,0.7)]'
              : 'bg-slate-900/80 hover:bg-slate-800 text-white border border-white/25 hover:border-cyan-400/80 hover:scale-105'
          }`}
        >
          <Plus
            className={`w-4 h-4 transition-transform duration-300 ${
              isActive ? 'rotate-45' : 'group-hover:rotate-90'
            }`}
          />
        </button>

        {/* Floating Hover Film Clip or Tooltip */}
        {showTooltip && (
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 transition-all duration-200 animate-in fade-in zoom-in-95 pointer-events-none ${
              xPercent < 25 ? 'translate-x-0 left-0' : xPercent > 75 ? '-translate-x-full left-full' : ''
            }`}
          >
            {filmType ? (
              <HoverFilmClip
                type={filmType}
                title={label}
                badge={filmBadge || 'TECHNICAL STUDY'}
              />
            ) : (
              <div className="bg-[#0b0f1d]/95 border border-white/20 rounded-md px-3 py-1.5 shadow-xl backdrop-blur-md whitespace-nowrap text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 block">
                  {category === 'finish' ? 'COATING LAB' : 'AERO HARDWARE'}
                </span>
                <span className="text-xs font-medium text-white">{label}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
