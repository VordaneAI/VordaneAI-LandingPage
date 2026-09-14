import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene06Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene06OptimizationLoop: React.FC<Scene06Props> = ({ progress, onOpenWaitlist }) => {
  const isOptimized = progress >= 0.45;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
          BUILD → LEARN → <span className="gradient-text">IMPROVE.</span>
        </h2>
        <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
          Closed-loop reasoning reflection that synthesizes hardened prompt instructions automatically.
        </p>
      </div>

      {/* Center Minimal Prompt Diff Stage */}
      <div className="relative my-auto w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="w-full p-8 sm:p-10 rounded-3xl bg-[#040817]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-tech text-xs">
            
            {/* Old Brittle Prompt */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="flex items-center justify-between text-rose-400 font-bold mb-2 pb-1 border-b border-rose-500/20 text-[11px]">
                <span>ORIGINAL PROMPT (BRITTLE)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20">71% RELIABILITY</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                "You are an assistant. Search the vector database and summarize the answers for the user."
              </p>
              <div className="mt-3 text-[10px] text-rose-400 flex items-center gap-1">
                <X size={12} />
                <span>Unhandled tool timeouts</span>
              </div>
            </div>

            {/* Optimized Veltrix Prompt */}
            <motion.div
              animate={{
                borderColor: isOptimized ? 'rgba(16, 185, 129, 0.7)' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: isOptimized ? 'rgba(6, 78, 59, 0.2)' : 'rgba(0, 0, 0, 0.3)',
              }}
              className="p-4 rounded-2xl border transition-all"
            >
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-2 pb-1 border-b border-emerald-500/20 text-[11px]">
                <span>VELTRIX OPTIMIZED PROMPT</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 font-bold">94% RELIABILITY</span>
              </div>
              <p className="text-slate-200 text-[11px] leading-relaxed">
                "You are a specialized auditor. <span className="text-emerald-300 font-bold">Validate schema</span>. If timeout exceeds 2000ms, <span className="text-emerald-300 font-bold">engage fallback cache</span>."
              </p>
              <div className="mt-3 text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <Check size={12} />
                <span>Explicit timeout fallbacks</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Success Banner */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 size={14} />
              REPLAY BENCHMARK: 94% SUCCESS
            </span>
            <span className="text-[10px] text-slate-500">
              ZERO DOWNTIME DEPLOYMENT
            </span>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-8">
        <MagneticButton
          text="Join the Waitlist"
          onClick={onOpenWaitlist}
          size="md"
          variant="primary"
        />
      </div>

    </div>
  );
};
