import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ArrowRight, RefreshCw, 
  Bot, Cpu, Wrench, Zap, Check, X, ShieldCheck, Layers, FileCode
} from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene06Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene06ReflectionOptimizer: React.FC<Scene06Props> = ({ progress, onOpenWaitlist }) => {
  const [reflectionPhase, setReflectionPhase] = useState(0); // 0 = Frozen Trace Analysis, 1 = Causal Graph Connecting, 2 = Live Prompt Morphing Diff, 3 = Replay 94% Success

  useEffect(() => {
    const timer = setInterval(() => {
      setReflectionPhase((prev) => (prev + 1) % 4);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const activePhase = progress > 0.1 ? (progress >= 0.75 ? 3 : progress >= 0.5 ? 2 : progress >= 0.25 ? 1 : 0) : reflectionPhase;

  const isAnalyzing = activePhase === 0;
  const isCausalGraph = activePhase === 1;
  const isDiffMorphing = activePhase === 2;
  const isReplaySuccess = activePhase === 3;

  const diagnosticPanels = [
    { name: 'PROMPT', icon: FileCode, val: 'Loose schema definition' },
    { name: 'CONTEXT', icon: Layers, val: 'Empty query fallback omitted' },
    { name: 'TOOL CALL', icon: Wrench, val: 'Timeout unhandled (>2000ms)' },
    { name: 'RAG VECTORS', icon: Zap, val: 'Schema drift detected' },
    { name: 'MODEL OUTPUT', icon: Cpu, val: 'Stalled in infinite retry' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none">
      
      {/* Top Header */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xl mb-2.5 backdrop-blur-md transition-colors ${
            isReplaySuccess
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
              : isDiffMorphing
              ? 'bg-[#0052FF]/80 border-[#00C2FF]/50 text-[#38BDF8]'
              : 'bg-[#060D1F]/90 border-[#00C2FF]/40 text-[#00C2FF]'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isReplaySuccess ? 'bg-emerald-400' : 'bg-[#00C2FF] animate-ping'}`} />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            {isAnalyzing && 'STAGE 06 • FREEZING FAILED TRACE & REPLAYING CAUSAL GRAPH'}
            {isCausalGraph && 'STAGE 06 • MULTI-LAYER RELATIONSHIP REFLECTION ACTIVE'}
            {isDiffMorphing && 'STAGE 06 • LIVE PROMPT MORPHING & REASONING HARMONIZATION'}
            {isReplaySuccess && 'STAGE 06 • RE-EXECUTION BENCHMARK: 94% SUCCESS (RESTORED)'}
          </span>
        </motion.div>

        <div className="min-h-[75px] sm:min-h-[90px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${activePhase}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {!isReplaySuccess ? (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
                    CLOSED-LOOP REFLECTION & <span className="gradient-text">OPTIMIZATION.</span>
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 font-sans mt-1">
                    Veltrix diagnoses root-cause reasoning failures and synthesizes hardened prompt instructions automatically.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight uppercase font-sans">
                    OPTIMIZED EXECUTION: 100% SUCCESS.
                  </h2>
                  <p className="text-xs sm:text-base text-emerald-300 font-sans mt-1">
                    Hardened prompt deployed to the custom harness with zero downtime. Production reliability restored.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Center Interactive Reflection & Diff Showcase */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        <motion.div
          animate={{
            borderColor: isReplaySuccess 
              ? 'rgba(16, 185, 129, 0.7)' 
              : 'rgba(0, 194, 255, 0.5)',
            boxShadow: isReplaySuccess 
              ? '0 0 45px rgba(16, 185, 129, 0.35)' 
              : '0 0 40px rgba(0, 194, 255, 0.25)',
          }}
          className="w-full p-5 sm:p-7 rounded-3xl bg-[#040817]/95 border-2 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#00C2FF]" />
              <span className="text-white font-bold">SYSTEM PROMPT OPTIMIZER :: HARNESS-01</span>
            </div>
            
            <span className="text-[10px] text-slate-400 font-mono-tech bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
              {isReplaySuccess ? 'OPTIMIZATION DEPLOYED' : 'ANALYZING CAUSAL GRAPH'}
            </span>
          </div>

          {/* Reflection 5-Panel Causal Analysis Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4 font-mono-tech text-xs">
            {diagnosticPanels.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  animate={{
                    borderColor: isCausalGraph || isDiffMorphing 
                      ? 'rgba(0, 194, 255, 0.6)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  }}
                  className="p-2.5 rounded-xl bg-[#060D1F] border text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] text-slate-400 font-bold">{p.name}</span>
                    <Icon size={12} className="text-[#00C2FF]" />
                  </div>
                  <div className="text-[9px] text-slate-300 leading-tight">
                    {p.val}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side-by-Side Prompt Diff with Dynamic Morphing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono-tech text-xs text-left mb-4">
            
            {/* Old Failed Prompt */}
            <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <div className="flex items-center justify-between text-rose-400 font-bold mb-2 pb-1 border-b border-rose-500/20 text-[11px]">
                <span>ORIGINAL PROMPT (BRITTLE)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20">71% RELIABILITY</span>
              </div>
              <p className="text-slate-300 text-[11px] font-mono-tech leading-relaxed">
                "You are an assistant. Search the vector database and summarize the financial audit answers for the user."
              </p>
              <div className="mt-2.5 text-[10px] text-rose-400 flex items-center gap-1">
                <X size={12} />
                <span>Vulnerable to missing schemas & unhandled tool timeouts</span>
              </div>
            </div>

            {/* Optimized Veltrix Prompt with Highlighted Green Diff */}
            <motion.div
              animate={{
                borderColor: isReplaySuccess ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.4)',
                boxShadow: isReplaySuccess ? '0 0 25px rgba(16, 185, 129, 0.25)' : 'none',
              }}
              className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40"
            >
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-2 pb-1 border-b border-emerald-500/20 text-[11px]">
                <span>VELTRIX OPTIMIZED PROMPT</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 font-bold">94% RELIABILITY</span>
              </div>
              <p className="text-slate-200 text-[11px] font-mono-tech leading-relaxed">
                "You are a specialized auditor. <span className="bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded border border-emerald-500/30 font-bold">Validate schema before querying</span>. If tool timeout exceeds 2000ms, <span className="bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded border border-emerald-500/30 font-bold">immediately engage local fallback cache</span>."
              </p>
              <div className="mt-2.5 text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <Check size={12} />
                <span>Deterministic guardrails & explicit timeout fallbacks</span>
              </div>
            </motion.div>

          </div>

          {/* Benchmark Drift Comparison Ribbon */}
          <div className="p-3 rounded-2xl bg-[#02050E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2.5 text-left">
              <span className="text-slate-400">BENCHMARK RECOVERY:</span>
              <span className="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">71% Success</span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">94% Success</span>
            </div>
            <span className="text-[9px] text-slate-500 uppercase tracking-wider">
              *Demonstration metrics for illustrative purposes
            </span>
          </div>

          {/* Manual Sequence Step Selector */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono-tech text-[10px]">
            <span className="text-slate-500 mr-1">REFLECTION STAGES:</span>
            {['Frozen Trace', 'Causal Graph', 'Morphing Diff', 'Benchmark Replay'].map((label, step) => (
              <button
                key={label}
                onClick={() => setReflectionPhase(step)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  activePhase === step 
                    ? 'bg-[#00C2FF] text-black font-bold shadow-[0_0_10px_#00C2FF]' 
                    : 'bg-white/5 hover:bg-white/15 text-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-xl flex items-center justify-center gap-3 pt-1 pb-1">
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
