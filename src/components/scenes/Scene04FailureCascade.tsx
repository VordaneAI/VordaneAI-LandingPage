import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Bot, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene04Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene04FailureCascade: React.FC<Scene04Props> = ({ progress, onOpenWaitlist }) => {
  // Phase 0 (progress < 0.35): Quiet & Healthy
  // Phase 1 (0.35 <= progress < 0.70): Tool Timeout & Cascade Detected
  // Phase 2 (progress >= 0.70): Backward Trace & Root Cause Identified
  const isFailed = progress >= 0.35;
  const isRootCauseIdentified = progress >= 0.70;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <AnimatePresence mode="wait">
          {!isFailed ? (
            <motion.div
              key="head-01"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
                INSTANT <span className="gradient-text">CASCADE DETECTION.</span>
              </h2>
              <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
                Autonomous failure interception before errors propagate across agent chains.
              </p>
            </motion.div>
          ) : !isRootCauseIdentified ? (
            <motion.div
              key="head-02"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-6xl font-black text-rose-400 tracking-tight uppercase font-sans">
                CASCADE DETECTED.
              </h2>
              <p className="text-base sm:text-xl text-rose-300 font-sans tracking-wide max-w-xl mx-auto">
                Tool timeout threatening downstream collapse across dependent agents.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="head-03"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-6xl font-black text-emerald-400 tracking-tight uppercase font-sans">
                ROOT CAUSE IDENTIFIED.
              </h2>
              <p className="text-base sm:text-xl text-emerald-300 font-sans tracking-wide max-w-xl mx-auto">
                Circuit breaker isolated failure in 8ms. Fallback cache engaged safely.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center Cinematic Failure & Trace Visual */}
      <div className="relative my-auto w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="w-full p-8 sm:p-10 rounded-3xl bg-[#040817]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-tech">
            
            {/* Step 1: Agent Planner */}
            <div className={`p-4 rounded-2xl border text-left transition-all ${
              isFailed && !isRootCauseIdentified 
                ? 'bg-rose-950/30 border-rose-500/40 text-rose-300' 
                : 'bg-black/40 border-white/10 text-white'
            }`}>
              <div className="text-[10px] text-slate-500 mb-1">AGENT PLANNER</div>
              <div className="font-bold text-xs">agent-orchestrator</div>
              <div className="text-[10px] mt-2 font-bold">
                {isFailed && !isRootCauseIdentified ? 'DEGRADED' : 'HEALTHY'}
              </div>
            </div>

            {/* Step 2: Failed Tool */}
            <motion.div
              animate={{
                scale: isFailed ? 1.04 : 1,
                borderColor: isFailed ? 'rgba(244, 63, 94, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isFailed 
                  ? 'bg-rose-950/50 shadow-[0_0_30px_rgba(244,63,94,0.4)] text-rose-200' 
                  : 'bg-black/40 border-white/10 text-white'
              }`}
            >
              <div className="text-[10px] text-slate-500 mb-1">DOWNSTREAM TOOL</div>
              <div className="font-bold text-xs">qdrant-vector-search</div>
              <div className="text-[10px] mt-2 font-bold text-rose-400">
                {isFailed ? '504 TIMEOUT (CRITICAL)' : 'HEALTHY'}
              </div>
            </motion.div>

            {/* Step 3: Dependent Synthesizer */}
            <div className={`p-4 rounded-2xl border text-left transition-all ${
              isRootCauseIdentified 
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                : isFailed 
                ? 'bg-rose-950/30 border-rose-500/40 text-rose-300' 
                : 'bg-black/40 border-white/10 text-white'
            }`}>
              <div className="text-[10px] text-slate-500 mb-1">DEPENDENT AGENT</div>
              <div className="font-bold text-xs">agent-synthesizer</div>
              <div className="text-[10px] mt-2 font-bold">
                {isRootCauseIdentified ? 'FALLBACK ENGAGED' : isFailed ? 'CASCADE BLOCKED' : 'HEALTHY'}
              </div>
            </div>

          </div>

          {/* Root Cause Banner */}
          <AnimatePresence>
            {isRootCauseIdentified && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between font-mono-tech text-xs text-emerald-300"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span>Isolated Root Cause: <strong>Vector Search Timeout (&gt;2000ms)</strong></span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 font-bold border border-white/10 hidden sm:inline">
                  RECOVERY: 8MS
                </span>
              </motion.div>
            )}
          </AnimatePresence>

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
