import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, ArrowRight, ShieldCheck, CheckCircle2, 
  Bot, Box, Eye, Lock, Zap, Sparkles, Network, Database, Shield
} from 'lucide-react';
import { VeltrixLogo } from '../VeltrixLogo';
import { MagneticButton } from '../MagneticButton';

interface Scene07Props {
  progress: number;
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const Scene07Convergence: React.FC<Scene07Props> = ({ progress, onOpenWaitlist, onOpenDemo }) => {
  const [isMerged, setIsMerged] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsMerged((prev) => !prev);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const showMerged = progress > 0.1 ? progress >= 0.4 : isMerged;

  const pillars = [
    { name: 'MANAGED AGENTS', icon: Bot, color: 'text-[#00C2FF]' },
    { name: 'CUSTOM HARNESS', icon: Box, color: 'text-emerald-400' },
    { name: 'SERVICE MAP', icon: Network, color: 'text-indigo-400' },
    { name: 'OBSERVABILITY', icon: Eye, color: 'text-[#38BDF8]' },
    { name: 'CASCADE GUARD', icon: Zap, color: 'text-amber-400' },
    { name: 'RED TEAMING', icon: ShieldCheck, color: 'text-rose-400' },
    { name: 'RAG SECURITY', icon: Database, color: 'text-purple-400' },
    { name: 'PROMPT OPTIMIZER', icon: Sparkles, color: 'text-pink-400' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none">
      
      {/* Top Tag */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#060D1F]/90 border border-[#00C2FF]/40 shadow-[0_0_25px_rgba(0,194,255,0.25)] mb-2.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-ping" />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold text-[#00C2FF] uppercase tracking-widest">
            {showMerged ? 'STAGE 07 • VELTRIX UNIFIED CONTROL PLANE FABRIC' : 'STAGE 07 • MORPHING THREE INDEPENDENT PILLARS'}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase font-sans">
          ONE UNIFIED <span className="gradient-text">CONTROL PLANE.</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-300 font-sans mt-1 max-w-2xl mx-auto">
          Every capability you just experienced converges into a single cohesive runtime operating system.
        </p>
      </div>

      {/* Center 3D Card Morphing & Convergence Showcase */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        
        {!showMerged ? (
          /* Three Distinct Physical Cards Floating & Converging */
          <motion.div
            key="unmerged-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Card 1: Observability */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="p-6 rounded-3xl bg-[#040817]/95 border-2 border-[#00C2FF]/40 shadow-[0_0_30px_rgba(0,194,255,0.2)] text-left font-mono-tech"
            >
              <div className="p-3 rounded-2xl bg-[#0052FF]/20 text-[#00C2FF] w-fit mb-3">
                <Eye size={24} />
              </div>
              <h4 className="text-base font-bold text-white font-sans">OBSERVABILITY</h4>
              <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
                Continuous trace capture, latency hop tracing, token quotas, and instant circuit breaker detection.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-emerald-400 font-bold">
                100% TELEMETRY
              </div>
            </motion.div>

            {/* Card 2: Governance */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-6 rounded-3xl bg-[#040817]/95 border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)] text-left font-mono-tech"
            >
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 w-fit mb-3">
                <Box size={24} />
              </div>
              <h4 className="text-base font-bold text-white font-sans">GOVERNANCE</h4>
              <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
                Dedicated microVM custom harnesses, IAM policy evaluation, MCP tool sandboxes, and reflection diffs.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-[#00C2FF] font-bold">
                ZERO-TRUST RUNTIME
              </div>
            </motion.div>

            {/* Card 3: Security */}
            <motion.div
              animate={{ x: [0, -8, 0], y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="p-6 rounded-3xl bg-[#040817]/95 border-2 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.2)] text-left font-mono-tech"
            >
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 w-fit mb-3">
                <Shield size={24} />
              </div>
              <h4 className="text-base font-bold text-white font-sans">SECURITY</h4>
              <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
                Continuous red teaming, prompt injection firewalls, RAG vector integrity scanning, and AMD SEV enclaves.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-purple-400 font-bold">
                HARDWARE ENCLAVES
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Cards Physically Merged into Unified Control Plane */
          <motion.div
            key="merged-control-plane"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] border-2 border-[#00C2FF]/70 shadow-[0_0_70px_rgba(0,194,255,0.35)] relative overflow-hidden backdrop-blur-2xl text-center"
          >
            {/* Centered Brand Mark */}
            <div className="flex flex-col items-center justify-center mb-4">
              <VeltrixLogo size={48} glow animated pulse />
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-wider uppercase font-sans mt-2">
                VELTRIX CONTROL PLANE
              </h3>
              <span className="font-mono-tech text-xs text-[#00C2FF] tracking-widest uppercase font-bold mt-0.5">
                THE UNIFIED RUNTIME OPERATING SYSTEM FOR AI AGENTS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-2xl mx-auto leading-relaxed mb-4">
              Veltrix provides the execution environment, the deterministic guardrails, and the operational intelligence required to run AI agents safely in production.
            </p>

            {/* 8 Converged Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-tech text-xs">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.name}
                    className="p-2.5 rounded-xl bg-[#060D1F]/90 border border-white/10 flex items-center justify-center gap-2 hover:border-[#00C2FF]/40 transition-colors"
                  >
                    <Icon size={14} className={p.color} />
                    <span className="text-slate-200 font-semibold text-[11px]">{p.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Morphing Toggle Indicator */}
        <div className="flex items-center justify-center gap-2 mt-3 font-mono-tech text-[10px]">
          <span className="text-slate-500">CONVERGENCE:</span>
          <button
            onClick={() => setIsMerged(!isMerged)}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              showMerged 
                ? 'bg-[#00C2FF] text-black font-bold shadow-[0_0_10px_#00C2FF]' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {showMerged ? 'Unified Control Plane (Active)' : 'Click to Merge Pillars →'}
          </button>
        </div>

      </div>

      {/* Bottom Actions */}
      <div className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 pb-1">
        <MagneticButton
          text="Join the Waitlist"
          onClick={onOpenWaitlist}
          size="md"
          variant="primary"
          className="w-full sm:w-auto"
        />

        <MagneticButton
          text="Request Technical Demo"
          onClick={onOpenDemo}
          size="md"
          variant="secondary"
          showArrow={false}
          className="w-full sm:w-auto"
        />
      </div>
    </div>
  );
};
