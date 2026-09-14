import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, FileText, Cpu, Search, Layers, Bot, 
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Zap, AlertTriangle, ShieldAlert
} from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene05Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene05RAGScan: React.FC<Scene05Props> = ({ progress, onOpenWaitlist }) => {
  const [pipelinePhase, setPipelinePhase] = useState(0); // 0 = Ingestion Stream, 1 = Tainted Doc Detected, 2 = Quarantined & Cleaned

  useEffect(() => {
    const timer = setInterval(() => {
      setPipelinePhase((prev) => (prev + 1) % 3);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const activePhase = progress > 0.1 ? (progress >= 0.6 ? 2 : progress >= 0.3 ? 1 : 0) : pipelinePhase;

  const isScanning = activePhase === 0;
  const isThreatDetected = activePhase === 1;
  const isQuarantined = activePhase === 2;

  const ragStages = [
    { label: 'DOCUMENTS', sub: 'PDF / Markdown Ingestion', icon: FileText, speed: '1.2k docs/s' },
    { label: 'CHUNKING', sub: '512-token semantic split', icon: Layers, speed: '4.8k chunks/s' },
    { label: 'EMBEDDINGS', sub: '1536-dim vectors', icon: Cpu, speed: '14.2k vec/s' },
    { label: 'VECTOR DB', sub: 'Qdrant / PgVector Mesh', icon: Database, speed: '18.4M indexed' },
    { label: 'RETRIEVAL', sub: 'Hybrid Dense+Sparse', icon: Search, speed: '12ms KNN' },
    { label: 'REASONING AGENT', sub: 'Veltrix Enclave Core', icon: Bot, speed: 'Claude 3.7' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none">
      
      {/* Top Header */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xl mb-2.5 backdrop-blur-md transition-colors ${
            isQuarantined
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
              : isThreatDetected
              ? 'bg-rose-950/80 border-rose-500/50 text-rose-400 animate-pulse'
              : 'bg-[#060D1F]/90 border-[#00C2FF]/40 text-[#00C2FF]'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isQuarantined ? 'bg-emerald-400' : isThreatDetected ? 'bg-rose-500 animate-ping' : 'bg-[#00C2FF] animate-ping'}`} />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            {isScanning && 'STAGE 05 • CONTINUOUS RAG PIPELINE STREAMING'}
            {isThreatDetected && 'STAGE 05 • TAINTED CHUNK DETECTED IN VECTOR BUFFER'}
            {isQuarantined && 'STAGE 05 • RISK QUARANTINED • RETRIEVAL STREAM VERIFIED (100%)'}
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
              {isScanning && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
                    LIVING RAG PIPELINE & <span className="gradient-text">INTEGRITY SCAN.</span>
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 font-sans mt-1">
                    Continuous monitoring across document chunking, semantic retrieval, and context synthesis buffers.
                  </p>
                </>
              )}

              {isThreatDetected && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-rose-400 tracking-tight uppercase font-sans">
                    DATA POISONING & INJECTION DETECTED.
                  </h2>
                  <p className="text-xs sm:text-base text-rose-300 font-sans mt-1">
                    Adversarial document snippet detected in embedding stage attempting prompt override.
                  </p>
                </>
              )}

              {isQuarantined && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight uppercase font-sans">
                    CORRUPT CHUNK ISOLATED & PURGED.
                  </h2>
                  <p className="text-xs sm:text-base text-emerald-300 font-sans mt-1">
                    Veltrix RAG guard purged the tainted vector in 4ms before reaching the agent context window.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Center Interactive Living RAG Stage */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        <motion.div
          animate={{
            borderColor: isQuarantined 
              ? 'rgba(16, 185, 129, 0.7)' 
              : isThreatDetected 
              ? 'rgba(244, 63, 94, 0.7)' 
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isQuarantined 
              ? '0 0 40px rgba(16, 185, 129, 0.3)' 
              : isThreatDetected 
              ? '0 0 50px rgba(244, 63, 94, 0.4)' 
              : '0 0 30px rgba(0, 0, 0, 0.5)',
          }}
          className="w-full p-5 sm:p-7 rounded-3xl bg-[#040817]/95 border-2 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Top Scan Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className={isQuarantined ? 'text-emerald-400' : isThreatDetected ? 'text-rose-400' : 'text-[#00C2FF]'} />
              <span className="text-white font-bold">RAG VULNERABILITY SCANNER</span>
            </div>

            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              isQuarantined 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : isThreatDetected 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                : 'bg-[#0052FF]/20 text-[#38BDF8] border border-[#00C2FF]/30'
            }`}>
              {isQuarantined ? 'ALL PIPELINES VERIFIED' : isThreatDetected ? 'RISK DETECTED' : 'SCANNING 18.4M VECTORS...'}
            </span>
          </div>

          {/* RAG Pipeline Moving Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 relative z-10 font-mono-tech text-xs">
            {ragStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isTaintedNode = idx === 1 && isThreatDetected;

              return (
                <motion.div
                  key={stage.label}
                  animate={{
                    borderColor: isTaintedNode 
                      ? 'rgba(244, 63, 94, 0.9)' 
                      : isQuarantined 
                      ? 'rgba(16, 185, 129, 0.5)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isTaintedNode 
                      ? 'bg-rose-950/60 shadow-[0_0_25px_rgba(244,63,94,0.5)]' 
                      : isQuarantined 
                      ? 'bg-emerald-950/25' 
                      : 'bg-[#060D1F]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-slate-400 font-bold">0{idx + 1}</span>
                    <Icon size={14} className={isTaintedNode ? 'text-rose-400 animate-bounce' : isQuarantined ? 'text-emerald-400' : 'text-[#00C2FF]'} />
                  </div>

                  <div className="font-bold text-white text-xs mb-0.5 font-sans truncate">
                    {stage.label}
                  </div>

                  <div className="text-[9px] text-slate-400 truncate">
                    {isTaintedNode ? 'TAINT DETECTED' : stage.sub}
                  </div>

                  <div className="mt-1 text-[8px] text-[#38BDF8] font-mono-tech">
                    {stage.speed}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Verification Audit Badges */}
          <div className="mt-5 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center font-mono-tech text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-slate-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Prompt Injection: Clean</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-slate-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Data Poisoning: Isolated</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-slate-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Context Leakage: 0.00%</span>
            </div>
          </div>

          {/* Manual Sequence Step Selector */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono-tech text-[10px]">
            <span className="text-slate-500 mr-1">PIPELINE SCAN:</span>
            {['Continuous Stream', 'Taint Detected', 'Quarantined & Cleaned'].map((label, step) => (
              <button
                key={label}
                onClick={() => setPipelinePhase(step)}
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
