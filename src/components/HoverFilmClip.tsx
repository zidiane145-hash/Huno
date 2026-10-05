import React, { useEffect, useRef } from 'react';
import { Play, Activity, Zap, Cpu } from 'lucide-react';

interface HoverFilmClipProps {
  type: 'flux' | 'cells';
  title: string;
  badge: string;
}

export const HoverFilmClip: React.FC<HoverFilmClipProps> = ({ type, title, badge }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const render = () => {
      t += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      // Dark studio background with slight gradient
      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, width, height);

      // Grid mesh lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.07)';
      ctx.lineWidth = 1;
      const gridSize = 16;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (type === 'flux') {
        // High-frequency magnetic flux and 3-phase AC sine waves
        const colors = ['#00F0FF', '#38BDF8', '#10B981'];
        for (let phase = 0; phase < 3; phase++) {
          ctx.beginPath();
          ctx.strokeStyle = colors[phase];
          ctx.lineWidth = 2;
          ctx.shadowColor = colors[phase];
          ctx.shadowBlur = 8;

          for (let x = 0; x < width; x += 3) {
            const angle = (x * 0.04) + t * 2 + (phase * Math.PI * 2 / 3);
            const y = height / 2 + Math.sin(angle) * (height * 0.28) * (0.8 + 0.2 * Math.sin(t * 0.5));
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Particle stream moving along magnetic rotor field
        ctx.shadowBlur = 4;
        ctx.fillStyle = '#FFFFFF';
        for (let p = 0; p < 18; p++) {
          const px = ((p * 18) + (t * 40)) % width;
          const py = height / 2 + Math.sin(px * 0.04 + t * 2) * (height * 0.28);
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Battery cells cooling conduits & charge density waves
        const cols = 8;
        const rows = 3;
        const cellW = width / (cols + 1);
        const cellH = height / (rows + 1.2);

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cx = cellW * (c + 1);
            const cy = cellH * (r + 1);
            const heatVal = Math.sin(t * 1.5 + (c * 0.8) + (r * 1.2));
            const isCooling = heatVal > 0;

            ctx.shadowBlur = 6;
            ctx.shadowColor = isCooling ? '#00F0FF' : '#10B981';
            ctx.fillStyle = isCooling ? 'rgba(0, 240, 255, 0.45)' : 'rgba(16, 185, 129, 0.45)';
            ctx.fillRect(cx - cellW * 0.35, cy - cellH * 0.35, cellW * 0.7, cellH * 0.7);

            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1;
            ctx.strokeRect(cx - cellW * 0.35, cy - cellH * 0.35, cellW * 0.7, cellH * 0.7);
          }
        }

        // Cooling serpent conduit line
        ctx.beginPath();
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 10;
        for (let x = 0; x < width; x += 4) {
          const y = height / 2 + Math.sin(x * 0.05 - t * 3) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  return (
    <div
      role="tooltip"
      className="w-64 bg-[#0a0f1d]/95 border border-cyan-500/40 rounded-lg p-2.5 shadow-2xl backdrop-blur-md pointer-events-none"
    >
      <div className="flex items-center justify-between mb-1.5 px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-300">
            {badge}
          </span>
        </div>
        <span className="font-mono text-[9px] text-slate-400 tabular-nums">
          {type === 'flux' ? '20.5 kHz' : '800.4 V'}
        </span>
      </div>

      {/* Film preview canvas */}
      <div className="relative aspect-video w-full rounded overflow-hidden border border-white/10 bg-black">
        <canvas
          ref={canvasRef}
          width={240}
          height={135}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 right-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
          <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400" />
          <span className="font-mono text-[8px] text-slate-300 tracking-wider">LIVE TELEMETRY</span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-300 px-0.5">
        <span className="font-medium text-white truncate max-w-[150px]">{title}</span>
        <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-wider">Click to Inspect</span>
      </div>
    </div>
  );
};
