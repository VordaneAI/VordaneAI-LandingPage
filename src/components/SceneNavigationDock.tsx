import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SceneNavigationDockProps {
  currentScene: number;
  totalScenes: number;
  onSelectScene: (index: number) => void;
  onNextScene: () => void;
  onPrevScene: () => void;
}

export const SceneNavigationDock: React.FC<SceneNavigationDockProps> = ({
  currentScene,
  totalScenes,
  onSelectScene,
  onNextScene,
  onPrevScene,
}) => {
  const sceneLabels = [
    '01 AGENT',
    '02 HARNESS',
    '03 SERVICE MAP',
    '04 FAILURE',
    '05 SECURITY',
    '06 OPTIMIZE',
    '07 VELTRIX',
  ];

  return (
    <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-start gap-1 font-mono-tech select-none">
      
      {/* Up Arrow Button */}
      <button
        onClick={onPrevScene}
        disabled={currentScene === 0}
        aria-label="Previous Scene"
        className="p-1.5 rounded-lg bg-[#060D1F]/80 hover:bg-[#0A1636] border border-white/10 text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all mb-1 cursor-pointer"
      >
        <ChevronUp size={13} />
      </button>

      {/* Stage Dots & Minimal Labels */}
      <div className="flex flex-col gap-1.5 p-2 rounded-2xl bg-[#030712]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
        {sceneLabels.map((label, idx) => {
          const isActive = currentScene === idx;
          return (
            <button
              key={label}
              onClick={() => onSelectScene(idx)}
              className={`group flex items-center gap-2 px-2.5 py-1 rounded-xl text-[10px] transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-[#0052FF] text-white font-bold shadow-[0_0_15px_rgba(0,82,255,0.4)]'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                isActive ? 'bg-[#00C2FF] scale-125' : 'bg-slate-600 group-hover:bg-slate-400'
              }`} />
              <span className="tracking-wider">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Down Arrow Button */}
      <button
        onClick={onNextScene}
        disabled={currentScene === totalScenes - 1}
        aria-label="Next Scene"
        className="p-1.5 rounded-lg bg-[#060D1F]/80 hover:bg-[#0A1636] border border-white/10 text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all mt-1 cursor-pointer"
      >
        <ChevronDown size={13} />
      </button>

    </div>
  );
};
