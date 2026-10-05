import React, { useState } from 'react';
import { FLEET_CARS } from '../data/veyraData';
import { FleetCar } from '../types';
import {
  Zap,
  Gauge,
  Timer,
  Battery,
  Wind,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

interface FleetPageProps {
  onNavigateToStudy: () => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ onNavigateToStudy }) => {
  const [selectedCar, setSelectedCar] = useState<FleetCar | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'obsidian-gt' | 'aero-s' | 'velocity-r'>('all');

  const displayedCars =
    activeTab === 'all'
      ? FLEET_CARS
      : FLEET_CARS.filter((c) => c.id === activeTab);

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 flex flex-col">
      {/* Fleet Hero & Editorial Context */}
      <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={onNavigateToStudy}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 mr-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Design Study</span>
              </button>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                VEYRA FLEET ARCHITECTURE
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white max-w-3xl text-balance">
              The Hyper-Electric Fleet
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Three bespoke electric supercar architectures engineered for aerodynamic perfection, track supremacy, and transcontinental grand touring.
            </p>
          </div>

          {/* Interactive Fleet Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Models (3)
            </button>
            {FLEET_CARS.map((car) => (
              <button
                key={car.id}
                onClick={() => setActiveTab(car.id as any)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors ${
                  activeTab === car.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {car.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 mb-20">
        <div className="space-y-16">
          {displayedCars.map((car) => {
            return (
              <article
                key={car.id}
                className="rounded-2xl bg-gradient-to-b from-[#080d1a] to-[#04060c] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Studio Image Stage (7 cols) */}
                  <div className="lg:col-span-7 relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center group">
                    <img
                      src={car.studioImage}
                      alt={`${car.name} studio showcase`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle studio floor shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-60" />

                    {/* Corner Model Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                      <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest">
                        SPECIMEN CODE · {car.id.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Car Details & Performance Stats Grid (5 cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                    <div>
                      {/* EV Badge */}
                      <div className="inline-block mb-3">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border ${car.colorTheme.badgeBg}`}
                        >
                          {car.evBadge}
                        </span>
                      </div>

                      {/* Name & Tagline */}
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide mb-1">
                        {car.name}
                      </h2>
                      <p className={`font-mono text-xs uppercase tracking-wider mb-4 ${car.colorTheme.text}`}>
                        {car.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {car.description}
                      </p>

                      {/* Performance Stats Grid (Power, 0-100, Range, Top Speed) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 mb-6">
                        {/* 1. Power */}
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-left">
                          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                            <Zap className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-[10px] uppercase font-mono tracking-wider">Power</span>
                          </div>
                          <span className="text-lg font-bold text-white font-mono tabular-nums block">
                            {car.stats.powerKw} kW
                          </span>
                          <span className="text-[10px] text-slate-500 tabular-nums">
                            {car.stats.hp} hp
                          </span>
                        </div>

                        {/* 2. 0–100 km/h */}
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-left">
                          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                            <Timer className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] uppercase font-mono tracking-wider">0–100 km/h</span>
                          </div>
                          <span className="text-lg font-bold text-white font-mono tabular-nums block">
                            {car.stats.zeroToHundred} s
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Launch Dynamic
                          </span>
                        </div>

                        {/* 3. Range */}
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-left">
                          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                            <Battery className="w-3.5 h-3.5 text-sky-400" />
                            <span className="text-[10px] uppercase font-mono tracking-wider">WLTP Range</span>
                          </div>
                          <span className="text-lg font-bold text-white font-mono tabular-nums block">
                            {car.stats.rangeKm} km
                          </span>
                          <span className="text-[10px] text-slate-500 tabular-nums">
                            {car.stats.batteryCapacityKwh} kWh Pack
                          </span>
                        </div>

                        {/* 4. Top Speed */}
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-left">
                          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                            <Gauge className="w-3.5 h-3.5 text-lime-400" />
                            <span className="text-[10px] uppercase font-mono tracking-wider">Top Speed</span>
                          </div>
                          <span className="text-lg font-bold text-white font-mono tabular-nums block">
                            {car.stats.topSpeedKmh} km/h
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Governed Limit
                          </span>
                        </div>
                      </div>

                      {/* Highlights list */}
                      <ul className="space-y-1.5 border-t border-white/5 pt-4 text-xs text-slate-400">
                        {car.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between gap-4">
                      <button
                        onClick={() => setSelectedCar(car)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 hover:border-cyan-400/50 text-xs uppercase tracking-wider font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <span>Full Specification</span>
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>

                      <button
                        onClick={onNavigateToStudy}
                        className="text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                      >
                        Study Monocoque
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Fleet Comparative Benchmark Matrix */}
        <section className="mt-20 p-8 rounded-2xl bg-[#070b16] border border-white/10">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 block mb-1">
              CHASSIS BENCHMARK TABLE
            </span>
            <h3 className="text-xl font-display font-semibold text-white">
              Direct Technical Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4 text-emerald-400">Obsidian GT</th>
                  <th className="py-3 px-4 text-sky-400">Aero S</th>
                  <th className="py-3 px-4 text-lime-400">Velocity R</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">Propulsion Topology</td>
                  <td className="py-3 px-4 text-white">Dual-Motor AWD</td>
                  <td className="py-3 px-4 text-white">Dual-Motor AWD</td>
                  <td className="py-3 px-4 text-white">Tri-Motor AWD</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">Power Rating</td>
                  <td className="py-3 px-4 text-white tabular-nums">780 kW (1,046 hp)</td>
                  <td className="py-3 px-4 text-white tabular-nums">640 kW (858 hp)</td>
                  <td className="py-3 px-4 text-white tabular-nums">950 kW (1,274 hp)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">Acceleration 0–100 km/h</td>
                  <td className="py-3 px-4 text-white tabular-nums">2.4 seconds</td>
                  <td className="py-3 px-4 text-white tabular-nums">2.8 seconds</td>
                  <td className="py-3 px-4 text-white tabular-nums">2.1 seconds</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">WLTP Combined Range</td>
                  <td className="py-3 px-4 text-white tabular-nums">620 km</td>
                  <td className="py-3 px-4 text-white tabular-nums">700 km</td>
                  <td className="py-3 px-4 text-white tabular-nums">480 km</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">Maximum Speed</td>
                  <td className="py-3 px-4 text-white tabular-nums">320 km/h</td>
                  <td className="py-3 px-4 text-white tabular-nums">290 km/h</td>
                  <td className="py-3 px-4 text-white tabular-nums">350 km/h</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400 font-sans">Voltage Bus</td>
                  <td className="py-3 px-4 text-white tabular-nums">800V Architecture</td>
                  <td className="py-3 px-4 text-white tabular-nums">800V Architecture</td>
                  <td className="py-3 px-4 text-white tabular-nums">900V Architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Modal for detailed car exploration */}
      {selectedCar && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCar.name} Detailed Specifications`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d1c] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedCar.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCar(null)}
                className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-mono uppercase tracking-wider focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
              >
                Close [Esc]
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedCar.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Power</span>
                <span className="font-mono text-base font-bold text-white">{selectedCar.stats.powerKw} kW</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">0–100</span>
                <span className="font-mono text-base font-bold text-white">{selectedCar.stats.zeroToHundred} s</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Range</span>
                <span className="font-mono text-base font-bold text-white">{selectedCar.stats.rangeKm} km</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Top Speed</span>
                <span className="font-mono text-base font-bold text-white">{selectedCar.stats.topSpeedKmh} km/h</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-mono uppercase text-slate-400 block">Engineering Highlights</span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedCar.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedCar(null)}
              className="w-full py-2.5 rounded-lg bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
