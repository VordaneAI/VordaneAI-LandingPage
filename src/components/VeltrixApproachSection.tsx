import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Box, Layers, ArrowRight, ShieldCheck, Cpu, Lock } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface VeltrixApproachSectionProps {
  onOpenWaitlist: () => void;
}

export const VeltrixApproachSection: React.FC<VeltrixApproachSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="approach" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Layers size={13} />
            <span>THE VELTRIX APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans mb-6">
            You Build the Intelligence. <br />
            <span className="gradient-text">We Handle the Infrastructure.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Veltrix provides AI agents inside purpose-built execution environments designed by Veltrix. The platform handles the operational complexity surrounding agent execution so your team can focus exclusively on domain intelligence.
          </p>
        </div>

        {/* Three Central Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Agent */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden bg-[#040817]/90 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-[#0052FF]/20 text-[#00C2FF] border border-[#00C2FF]/30 w-fit mb-4">
                <Bot size={28} />
              </div>
              <span className="font-mono-tech text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                TIER 1 • INTELLIGENCE
              </span>
              <h3 className="text-xl font-bold text-white font-sans mb-3">
                The AI Agent
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                The intelligence performing the task—task planners, reasoners, multi-agent orchestrators, and specialized domain agents.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono-tech text-xs text-[#00C2FF]">
              Claude • DeepSeek • Custom Models
            </div>
          </div>

          {/* Pillar 2: Veltrix Harness */}
          <div className="glass-card p-8 rounded-3xl border-2 border-[#00C2FF]/60 text-left relative overflow-hidden bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] shadow-[0_0_35px_rgba(0,194,255,0.2)] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 w-fit mb-4">
                <Box size={28} />
              </div>
              <span className="font-mono-tech text-xs text-[#00C2FF] uppercase font-bold tracking-wider block mb-1">
                TIER 2 • RUNTIME
              </span>
              <h3 className="text-xl font-bold text-white font-sans mb-3">
                Veltrix Agent Harness
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                The controlled execution environment around the agent providing microVM isolation, tool governance, deterministic sandboxing, and telemetry hooks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono-tech text-xs text-emerald-300 font-bold">
              Controlled Execution Enclave
            </div>
          </div>

          {/* Pillar 3: Control Plane */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden bg-[#040817]/90 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 w-fit mb-4">
                <Layers size={28} />
              </div>
              <span className="font-mono-tech text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                TIER 3 • OPERATIONS
              </span>
              <h3 className="text-xl font-bold text-white font-sans mb-3">
                Veltrix Control Plane
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                The centralized operational layer delivering full-stack visibility, security boundaries, failure detection, red teaming, and prompt reflection.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 font-mono-tech text-xs text-purple-300">
              Unified Management Fabric
            </div>
          </div>

        </div>

        {/* Approach Callout Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#02050E] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h4 className="text-lg font-bold text-white font-sans">
              Integrated from day one for production AI workloads.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
              Instead of building and maintaining every infrastructure component around an agent yourself, Veltrix provides an integrated environment designed specifically for AI agent workloads.
            </p>
          </div>
          <a
            href="#architecture"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Explore the Architecture</span>
            <ArrowRight size={14} className="text-[#00C2FF]" />
          </a>
        </div>

      </div>
    </section>
  );
};
