import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCutaway?: (systemId: 'drive' | 'battery') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenCutaway }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#05070d]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single clean text element wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="group flex items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          aria-label="VEYRA Home Design Study"
        >
          <span className="font-display text-2xl font-bold tracking-[0.35em] text-white group-hover:text-cyan-400 transition-colors">
            VEYRA
          </span>
        </button>

        {/* Zone 2: Clean text navigation links (4-5 items, single line) */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium" aria-label="Main Navigation">
          <button
            onClick={() => onNavigate('/')}
            className={`transition-colors py-1 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
              currentPath === '/' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Design Study
            {currentPath === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('/fleet')}
            className={`transition-colors py-1 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
              currentPath === '/fleet' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            The Fleet
            {currentPath === '/fleet' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            )}
          </button>

          <button
            onClick={() => {
              if (currentPath !== '/') onNavigate('/');
              setTimeout(() => onOpenCutaway?.('drive'), 100);
            }}
            className="text-slate-400 hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            Electric Drive
          </button>

          <button
            onClick={() => {
              if (currentPath !== '/') onNavigate('/');
              setTimeout(() => onOpenCutaway?.('battery'), 100);
            }}
            className="text-slate-400 hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            Battery Architecture
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/fleet')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-slate-900/90 border border-white/15 hover:border-cyan-400/50 hover:bg-slate-800 transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0 group"
          >
            <span>Explore Fleet</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
};
