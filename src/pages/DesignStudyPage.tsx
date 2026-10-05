import React, { useState, useEffect } from 'react';
import {
  PAINT_FINISHES,
  WHEEL_DESIGNS,
  CUTAWAYS,
} from '../data/veyraData';
import { PaintFinish, WheelDesign, CutawaySystem } from '../types';
import { HotspotMarker } from '../components/HotspotMarker';
import { CutawayView } from '../components/CutawayView';
import { FinishSelector } from '../components/FinishSelector';
import { WheelSelector } from '../components/WheelSelector';
import {
  Compass,
  Zap,
  BatteryCharging,
  Layers,
  Disc,
  Maximize2,
  Sparkles,
  Sun,
  Shield,
  ArrowRight,
  Info,
} from 'lucide-react';

interface DesignStudyPageProps {
  onNavigateToFleet: () => void;
  initialCutaway?: 'drive' | 'battery' | null;
  onClearInitialCutaway?: () => void;
}

export const DesignStudyPage: React.FC<DesignStudyPageProps> = ({
  onNavigateToFleet,
  initialCutaway,
  onClearInitialCutaway,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<PaintFinish>(PAINT_FINISHES[0]);
  const [selectedWheel, setSelectedWheel] = useState<WheelDesign>(WHEEL_DESIGNS[0]);
  const [activeCutaway, setActiveCutaway] = useState<CutawaySystem | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<'finish' | 'wheel' | null>(null);
  const [isRimLightOn, setIsRimLightOn] = useState(true);
  const [isFloorReflectionOn, setIsFloorReflectionOn] = useState(true);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  // Check if initial cutaway was passed via navigation
  useEffect(() => {
    if (initialCutaway && CUTAWAYS[initialCutaway]) {
      setActiveCutaway(CUTAWAYS[initialCutaway]);
      onClearInitialCutaway?.();
    }
  }, [initialCutaway, onClearInitialCutaway]);

  const handleOpenCutaway = (type: 'drive' | 'battery') => {
    setActiveCutaway(CUTAWAYS[type]);
    setActiveDrawer(null);
    setActiveHotspotId(type);
  };

  const handleCloseCutaway = () => {
    setActiveCutaway(null);
    setActiveHotspotId(null);
  };

  const handleToggleDrawer = (drawer: 'finish' | 'wheel') => {
    if (activeDrawer === drawer) {
      setActiveDrawer(null);
      setActiveHotspotId(null);
    } else {
      setActiveDrawer(drawer);
      setActiveHotspotId(drawer);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 flex flex-col">
      {/* Studio Header & Title Context */}
      <section className="relative pt-10 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Editorial Sub-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                VEYRA SPECIMEN 01 · DESIGN STUDY
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white max-w-3xl text-balance">
              Pure Electric Form & Architecture
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              An interactive physical study examining ultra-low drag aerodynamics (Cd 0.198), 800V silicon-carbide propulsion, and stressed-composite battery architectures.
            </p>
          </div>

          {/* Quick Benchmark Stats */}
          <div className="flex items-center gap-6 pb-1 border-b md:border-b-0 border-white/10">
            <div>
              <span className="font-mono text-[10px] uppercase text-slate-400 block">Peak Power</span>
              <span className="font-mono text-lg font-bold text-white tabular-nums">720 kW</span>
            </div>
            <span className="text-white/20 hidden sm:inline" aria-hidden="true">|</span>
            <div>
              <span className="font-mono text-[10px] uppercase text-slate-400 block">Drag Index</span>
              <span className="font-mono text-lg font-bold text-cyan-400 tabular-nums">0.198 Cd</span>
            </div>
            <span className="text-white/20 hidden sm:inline" aria-hidden="true">|</span>
            <div>
              <span className="font-mono text-[10px] uppercase text-slate-400 block">WLTP Range</span>
              <span className="font-mono text-lg font-bold text-white tabular-nums">680 km</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Studio Viewport Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 mb-16">
        {/* If a Cutaway is active, display full Cutaway View with smooth transition */}
        {activeCutaway ? (
          <div className="w-full">
            <CutawayView system={activeCutaway} onBack={handleCloseCutaway} />
          </div>
        ) : (
          <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#090e1c] via-[#060913] to-[#04060c] border border-white/10 overflow-hidden shadow-2xl">
            {/* Ambient Parabolic Studio Overhead Softbox */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-48 bg-radial from-white/10 via-cyan-900/10 to-transparent blur-3xl pointer-events-none transition-opacity duration-700 ${
                isRimLightOn ? 'opacity-100' : 'opacity-20'
              }`}
            />

            {/* Top Studio Bar Controls */}
            <div className="relative z-20 flex items-center justify-between p-4 border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Studio Lighting:
                </span>
                <button
                  onClick={() => setIsRimLightOn(!isRimLightOn)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors border ${
                    isRimLightOn
                      ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                  aria-pressed={isRimLightOn}
                >
                  <Sun className="w-3 h-3" />
                  <span>Softbox Rim</span>
                </button>
                <button
                  onClick={() => setIsFloorReflectionOn(!isFloorReflectionOn)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors border ${
                    isFloorReflectionOn
                      ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                  aria-pressed={isFloorReflectionOn}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Floor Specular</span>
                </button>
              </div>

              {/* Active finish and wheel indicator */}
              <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
                <span className="text-slate-400">
                  Finish: <span className="text-white font-medium">{selectedFinish.name}</span>
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="text-slate-400">
                  Wheel: <span className="text-white font-medium">{selectedWheel.name}</span>
                </span>
              </div>
            </div>

            {/* Hero Image Container with Hotspots */}
            <div className="relative w-full aspect-[16/9] min-h-[380px] max-h-[660px] flex items-center justify-center overflow-hidden bg-black select-none">
              {/* Studio car image with smooth crossfade */}
              <img
                key={selectedFinish.id}
                src={selectedFinish.imagePath}
                alt={`VEYRA electric concept sedan in ${selectedFinish.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-700 animate-in fade-in"
              />

              {/* Studio floor shadow & gloss reflection vignette */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#04060c] via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
                  isFloorReflectionOn ? 'opacity-80' : 'opacity-40'
                }`}
              />

              {/* Interactive Hotspot Markers (+ buttons) */}
              {/* 1. Electric Drive Architecture Hotspot */}
              <HotspotMarker
                id="hotspot-drive"
                label="Electric Drive"
                category="system"
                filmType="flux"
                filmBadge="MAGNETIC FLUX · 20.5 kHz"
                xPercent={31}
                yPercent={64}
                isActive={activeHotspotId === 'drive'}
                onClick={() => handleOpenCutaway('drive')}
              />

              {/* 2. Battery Architecture Hotspot */}
              <HotspotMarker
                id="hotspot-battery"
                label="Battery Architecture"
                category="system"
                filmType="cells"
                filmBadge="800V MONOCOQUE CORE"
                xPercent={53}
                yPercent={71}
                isActive={activeHotspotId === 'battery'}
                onClick={() => handleOpenCutaway('battery')}
              />

              {/* 3. Body Finishes Hotspot */}
              <HotspotMarker
                id="hotspot-finish"
                label="Body Finishes (5 Colors)"
                category="finish"
                xPercent={58}
                yPercent={46}
                isActive={activeDrawer === 'finish'}
                onClick={() => handleToggleDrawer('finish')}
              />

              {/* 4. Wheel Designs Hotspot */}
              <HotspotMarker
                id="hotspot-wheel"
                label="Wheel Designs (3 Specs)"
                category="wheel"
                xPercent={24}
                yPercent={75}
                isActive={activeDrawer === 'wheel'}
                onClick={() => handleToggleDrawer('wheel')}
              />

              {/* Hint badge on stage */}
              <div className="absolute top-4 left-4 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-300">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hover hotspots for telemetry preview · Click + to inspect</span>
              </div>
            </div>

            {/* Bottom Quick-Action Hotspot Bar for Easy Touch & Accessibility */}
            <div className="p-4 bg-slate-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider mr-2 hidden sm:inline">
                  Interactive Hotspots:
                </span>

                <button
                  onClick={() => handleOpenCutaway('drive')}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-medium text-slate-200 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Electric Drive Cutaway</span>
                </button>

                <button
                  onClick={() => handleOpenCutaway('battery')}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-medium text-slate-200 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Battery Architecture Cutaway</span>
                </button>

                <button
                  onClick={() => handleToggleDrawer('finish')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    activeDrawer === 'finish'
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Body Finishes ({selectedFinish.name})</span>
                </button>

                <button
                  onClick={() => handleToggleDrawer('wheel')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    activeDrawer === 'wheel'
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200 hover:text-white'
                  }`}
                >
                  <Disc className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Wheel Designs ({selectedWheel.name})</span>
                </button>
              </div>

              {/* Link to Fleet */}
              <button
                onClick={onNavigateToFleet}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ml-auto"
              >
                <span>View The Fleet (/fleet)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Finish & Wheel Selector Drawers */}
            {activeDrawer === 'finish' && (
              <div className="p-4 border-t border-white/10 bg-[#070b16]">
                <FinishSelector
                  finishes={PAINT_FINISHES}
                  selectedFinish={selectedFinish}
                  onSelectFinish={(finish) => setSelectedFinish(finish)}
                  isOpen={true}
                  onClose={() => setActiveDrawer(null)}
                />
              </div>
            )}

            {activeDrawer === 'wheel' && (
              <div className="p-4 border-t border-white/10 bg-[#070b16]">
                <WheelSelector
                  wheels={WHEEL_DESIGNS}
                  selectedWheel={selectedWheel}
                  onSelectWheel={(wheel) => setSelectedWheel(wheel)}
                  isOpen={true}
                  onClose={() => setActiveDrawer(null)}
                />
              </div>
            )}
          </div>
        )}

        {/* Technical Architecture Overview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Electric Drive Summary */}
          <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  POWERTRAIN SUBSYSTEM
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                  720 kW · 1,150 Nm
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Silicon Carbide Dual-Motor Drive
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Dual permanent magnet synchronous motors utilize micro-honed planetary reduction gearing and 800V SiC inverters. In-slot direct oil cooling allows sustained maximum acceleration cycles with zero thermal degradation.
              </p>
            </div>
            <button
              onClick={() => handleOpenCutaway('drive')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 self-start"
            >
              <span>Inspect Drive Cutaway</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Battery Core Summary */}
          <div className="p-6 rounded-2xl bg-[#080d1a] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                  ENERGY CORE SUBSYSTEM
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                  118 kWh · 800V
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Stressed Monocoque Skateboard
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The battery pack forms the structural floor of the chassis, increasing torsional stiffness to 54,000 Nm/deg. Dual-circuit serpentine cryo-cooling channels maintain cell temperatures within a 1.5°C delta during 350 kW fast charging.
              </p>
            </div>
            <button
              onClick={() => handleOpenCutaway('battery')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 self-start"
            >
              <span>Inspect Battery Cutaway</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
