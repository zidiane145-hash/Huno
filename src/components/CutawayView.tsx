import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, X, Zap, Shield, ChevronRight, Activity, Cpu } from 'lucide-react';
import { CutawaySystem, AnnotationPoint } from '../types';

interface CutawayViewProps {
  system: CutawaySystem;
  onBack: () => void;
}

export const CutawayView: React.FC<CutawayViewProps> = ({ system, onBack }) => {
  const [activeAnnotationId, setActiveAnnotationId] = useState<string>(
    system.annotations[0]?.id || ''
  );
  const backButtonRef = useRef<HTMLButtonElement | null>(null);

  // Esc key support to return to vehicle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    backButtonRef.current?.focus();
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const activeAnnotation =
    system.annotations.find((a) => a.id === activeAnnotationId) || system.annotations[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${system.title} Technical Cutaway View`}
      className="relative w-full rounded-2xl bg-[#060913] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 animate-in fade-in"
    >
      {/* Top Bar with "Back to vehicle" and Esc support */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:px-8 md:py-5 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            ref={backButtonRef}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/20 text-white hover:bg-slate-800 hover:border-cyan-400 text-xs uppercase tracking-wider font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to vehicle</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded">
              ESC
            </kbd>
          </button>

          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-[0.2em] uppercase block">
              {system.kicker}
            </span>
            <h2 className="text-lg md:text-xl font-display font-semibold text-white tracking-wide">
              {system.title}
            </h2>
          </div>
        </div>

        {/* Technical Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{system.technicalBadge}</span>
        </div>
      </div>

      {/* Main Cutaway Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left / Center 8 cols: Interactive Cutaway Diagram with Numbered Markers */}
        <div className="lg:col-span-8 relative bg-gradient-to-b from-[#080d1a] to-[#04060c] flex items-center justify-center p-4 md:p-8 min-h-[400px]">
          {/* Studio ambient glow behind cutaway */}
          <div className="absolute inset-0 bg-radial from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

          {/* Cutaway Image Container with fallback resilience */}
          <div className="relative w-full max-w-4xl aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
            <img
              src={system.image}
              alt={system.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Subtle technical grid overlay lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Numbered Annotation Points on the Cutaway */}
            {system.annotations.map((annotation) => {
              const isSelected = annotation.id === activeAnnotationId;
              return (
                <div
                  key={annotation.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{
                    left: `${annotation.xPercent}%`,
                    top: `${annotation.yPercent}%`,
                  }}
                >
                  <button
                    onClick={() => setActiveAnnotationId(annotation.id)}
                    aria-label={`Annotation ${annotation.number}: ${annotation.title}`}
                    className={`group relative flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 scale-125 shadow-[0_0_20px_rgba(0,240,255,0.9)] ring-4 ring-cyan-500/30'
                        : 'bg-slate-950/85 text-white border border-white/30 hover:border-cyan-400 hover:scale-110 shadow-lg'
                    }`}
                  >
                    <span>{annotation.number}</span>
                    {/* Ring ping when selected */}
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border border-cyan-400 animate-ping pointer-events-none" />
                    )}
                  </button>

                  {/* Marker label preview on hover */}
                  <div className="hidden group-hover:block absolute left-10 top-0 whitespace-nowrap bg-black/90 border border-white/20 px-2 py-1 rounded text-[10px] text-white pointer-events-none z-30">
                    {annotation.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Annotation Selector Strip at bottom of stage */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-2">
                Annotations:
              </span>
              {system.annotations.map((ann) => (
                <button
                  key={ann.id}
                  onClick={() => setActiveAnnotationId(ann.id)}
                  className={`w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-medium transition-all ${
                    ann.id === activeAnnotationId
                      ? 'bg-cyan-400 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {ann.number}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right 4 cols: Numbered Annotation Inspector & "For the driver" Benefit Copy */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#080c18] p-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Active Annotation Card */}
            {activeAnnotation && (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 shadow-lg relative">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-400 text-slate-950 font-mono text-xs font-bold">
                    {activeAnnotation.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                    Point of Inspection
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  {activeAnnotation.title}
                </h3>
                <p className="font-mono text-[11px] text-slate-400 mb-2">
                  {activeAnnotation.technicalLead}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeAnnotation.description}
                </p>
              </div>
            )}

            {/* "For the driver" Benefit Copy Box */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/20 to-slate-900/80 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300 font-semibold">
                  For the driver
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{system.driverBenefit}"
              </p>
            </div>

            {/* Architectural Telemetry Grid */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Benchmarked Metrics
              </span>
              <div className="grid grid-cols-2 gap-2">
                {system.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded bg-white/5 border border-white/5 text-left"
                  >
                    <span className="text-[10px] text-slate-400 block truncate">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-white font-mono tabular-nums">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action inside panel */}
          <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Active Specimen View
            </span>
            <button
              onClick={onBack}
              className="text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            >
              <span>Return to Exterior</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
