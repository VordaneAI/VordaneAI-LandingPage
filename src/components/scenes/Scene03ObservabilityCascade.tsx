import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, AlertTriangle, ShieldAlert, CheckCircle2, 
  ArrowRight, Bot, Cpu, Wrench, Database, MessageSquare, Zap, ShieldCheck,
  Radio, RefreshCw, XCircle
} from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene03Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene03ObservabilityCascade: React.FC<Scene03Props> = ({ progress, onOpenWaitlist }) => {
  // Automated simulation sequence: 0 = Nominal, 1 = Tool Timeout & Cascade Wave, 2 = System Freeze & Backward Trace, 3 = Root Cause Isolated & Auto-Mitigated
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeStage = progress > 0.1 ? (progress >= 0.7 ? 3 : progress >= 0.4 ? 1 : 0) : stageIndex;

  const isNominal = activeStage === 0;
  const isCascadeActive = activeStage === 1;
  const isTracingBackward = activeStage === 2;
  const isMitigated = activeStage === 3;

  const traceSteps = [
    { id: 'prompt', label: 'USER PROMPT', sub: 'Audit Q3 cloud spending', icon: MessageSquare, state: 'nominal' },
    { id: 'planner', label: 'AGENT (Planner)', sub: 'Decompose subtasks (3 hops)', icon: Bot, state: isCascadeActive ? 'degraded' : 'nominal' },
    { id: 'model', label: 'MODEL (Claude 3.7)', sub: 'Reasoning loop (210 tok)', icon: Cpu, state: 'nominal' },
    { id: 'tool', label: 'TOOL (Vector DB)', sub: isCascadeActive || isTracingBackward ? '504 GATEWAY TIMEOUT' : 'Retrieve 12 chunks (14ms)', icon: Wrench, state: isCascadeActive || isTracingBackward ? 'critical' : 'nominal' },
    { id: 'synthesizer', label: 'AGENT (Synthesizer)', sub: isCascadeActive ? 'CASCADE VICTIM (Blocked)' : isMitigated ? 'FALLBACK CACHE ENGAGED' : 'Synthesizing report', icon: Bot, state: isCascadeActive ? 'cascade' : isMitigated ? 'recovered' : 'nominal' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none">
      
      {/* Top Header */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xl mb-2.5 backdrop-blur-md transition-colors ${
            isNominal
              ? 'bg-[#060D1F]/90 border-[#00C2FF]/40 text-[#00C2FF]'
              : isCascadeActive || isTracingBackward
              ? 'bg-rose-950/80 border-rose-500/50 text-rose-400 animate-pulse'
              : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isNominal ? 'bg-[#00C2FF] animate-ping' : isMitigated ? 'bg-emerald-400' : 'bg-rose-500 animate-ping'}`} />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            {isNominal && 'STAGE 03 • FRAME-BY-FRAME TRACE TELEMETRY'}
            {isCascadeActive && 'STAGE 03 • CRITICAL TOOL TIMEOUT & CASCADE PROPAGATING'}
            {isTracingBackward && 'STAGE 03 • SYSTEM FREEZE & CAUSAL BACKWARD GRAPH TRACING'}
            {isMitigated && 'STAGE 03 • ROOT CAUSE ISOLATED • HARNESS AUTO-MITIGATED (8MS)'}
          </span>
        </motion.div>

        <div className="min-h-[75px] sm:min-h-[90px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${activeStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isNominal && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
                    FRAME-BY-FRAME <span className="gradient-text">TRACE TELEMETRY.</span>
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 font-sans mt-1">
                    Every thought, tool invocation, token count, and latency hop captured with zero instrumentation overhead.
                  </p>
                </>
              )}

              {(isCascadeActive || isTracingBackward) && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-rose-400 tracking-tight uppercase font-sans">
                    CASCADE DETECTED ACROSS AGENT GRAPH.
                  </h2>
                  <p className="text-xs sm:text-base text-rose-300 font-sans mt-1">
                    A single downstream tool timeout threatens to trigger unchecked cascading collapse across dependent agents.
                  </p>
                </>
              )}

              {isMitigated && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight uppercase font-sans">
                    ROOT CAUSE IDENTIFIED & ISOLATED.
                  </h2>
                  <p className="text-xs sm:text-base text-emerald-300 font-sans mt-1">
                    Veltrix harness circuit breaker tripped in 8ms—intercepting the failure and engaging fallback cache safely.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Center Interactive Execution & Cascade Stage */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        <motion.div
          animate={{
            borderColor: isNominal 
              ? 'rgba(255, 255, 255, 0.1)' 
              : isCascadeActive || isTracingBackward 
              ? 'rgba(244, 63, 94, 0.7)' 
              : 'rgba(16, 185, 129, 0.6)',
            boxShadow: isCascadeActive 
              ? '0 0 50px rgba(244, 63, 94, 0.35)' 
              : isMitigated 
              ? '0 0 40px rgba(16, 185, 129, 0.3)' 
              : '0 0 30px rgba(0, 0, 0, 0.5)',
          }}
          className="w-full p-5 sm:p-7 rounded-3xl bg-[#040817]/95 border-2 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Top Status Strip */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <Eye size={15} className={isMitigated ? 'text-emerald-400' : isCascadeActive ? 'text-rose-400' : 'text-[#00C2FF]'} />
              <span className="text-white font-bold">EXECUTION TRACE #0x9A8F-21E0B</span>
            </div>

            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              isNominal 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : isCascadeActive || isTracingBackward 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                : 'bg-[#0052FF]/20 text-[#38BDF8] border border-[#00C2FF]/40'
            }`}>
              {isNominal ? 'NOMINAL STREAM (18ms)' : isCascadeActive ? 'CASCADE TRIPPED' : isTracingBackward ? 'CAUSAL TRACING' : 'AUTO-MITIGATED (8ms)'}
            </span>
          </div>

          {/* Connected Step Cards with Dynamic Visual States */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10 font-mono-tech">
            {traceSteps.map((step, idx) => {
              const Icon = step.icon;
              const isCritical = step.state === 'critical';
              const isCascade = step.state === 'cascade';
              const isDegraded = step.state === 'degraded';
              const isRecovered = step.state === 'recovered';

              return (
                <motion.div
                  key={step.id}
                  animate={{
                    scale: isCritical ? 1.05 : 1,
                    borderColor: isCritical 
                      ? 'rgba(244, 63, 94, 0.9)' 
                      : isCascade || isDegraded 
                      ? 'rgba(244, 63, 94, 0.5)' 
                      : isRecovered 
                      ? 'rgba(16, 185, 129, 0.8)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isCritical 
                      ? 'bg-rose-950/60 shadow-[0_0_30px_rgba(244,63,94,0.5)]' 
                      : isCascade 
                      ? 'bg-rose-950/30' 
                      : isDegraded 
                      ? 'bg-amber-950/30' 
                      : isRecovered 
                      ? 'bg-emerald-950/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                      : 'bg-[#060D1F]'
                  }`}
                >
                  {/* Backward Tracing Laser Line Effect */}
                  {isTracingBackward && idx === 3 && (
                    <motion.div
                      className="absolute inset-0 bg-[#00C2FF]/20 pointer-events-none animate-pulse"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">STEP 0{idx + 1}</span>
                    <Icon size={14} className={isCritical ? 'text-rose-400 animate-bounce' : isRecovered ? 'text-emerald-400' : 'text-[#00C2FF]'} />
                  </div>

                  <div className="font-bold text-white text-xs mb-1 font-sans truncate">
                    {step.label}
                  </div>

                  <div className={`text-[10px] ${
                    isCritical ? 'text-rose-300 font-bold' : isCascade ? 'text-rose-400' : isRecovered ? 'text-emerald-300' : 'text-slate-400'
                  }`}>
                    {step.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Root Cause & Mitigation Banner */}
          <AnimatePresence>
            {(isMitigated || isTracingBackward) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-5 p-3.5 rounded-2xl border flex items-center justify-between font-mono-tech text-xs ${
                  isMitigated 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                    : 'bg-[#0052FF]/10 border-[#00C2FF]/30 text-[#38BDF8]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className={isMitigated ? 'text-emerald-400 shrink-0' : 'text-[#00C2FF] shrink-0'} />
                  <span>
                    {isMitigated 
                      ? 'Root Cause Isolated: Vector Search Timeout (5000ms) • Circuit breaker tripped in 8ms.' 
                      : 'Tracing causal dependency graph back to Tool Node #4...'}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10 font-bold hidden sm:inline">
                  ZERO UNCHECKED COLLAPSE
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Manual Sequence Step Selector */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono-tech text-[10px]">
            <span className="text-slate-500 mr-1">FAILURE SIMULATION:</span>
            {['Nominal', 'Cascade', 'Trace', 'Mitigated'].map((label, step) => (
              <button
                key={label}
                onClick={() => setStageIndex(step)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  activeStage === step 
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
