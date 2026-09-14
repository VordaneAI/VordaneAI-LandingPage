import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Bot, Cpu, Wrench, Shield, Eye, Lock, Network, Activity, Zap, ArrowRight, Check } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface AgentHarnessSectionProps {
  onOpenWaitlist: () => void;
}

export const AgentHarnessSection: React.FC<AgentHarnessSectionProps> = ({ onOpenWaitlist }) => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  const advantages = [
    {
      title: 'Controlled Execution',
      desc: 'Agents run inside a Veltrix-managed execution environment with deterministic boundaries.',
      icon: Box,
    },
    {
      title: 'Execution Isolation',
      desc: 'Workloads execute in dedicated microVM enclaves separated from unrelated tenant workloads.',
      icon: Shield,
    },
    {
      title: 'Runtime Intelligence',
      desc: 'Veltrix captures and understands internal reasoning chains, token hops, and latency metrics.',
      icon: Eye,
    },
    {
      title: 'Tool Governance',
      desc: 'Tools and permissions are strictly validated and governed as part of the execution environment.',
      icon: Lock,
    },
    {
      title: 'Network Security',
      desc: 'mTLS encryption and egress filtering surround the execution layer without complex configuration.',
      icon: Network,
    },
    {
      title: 'Reliability & Failures',
      desc: 'Downstream timeouts and cascading failures are intercepted within 8ms by circuit breakers.',
      icon: Zap,
    },
  ];

  return (
    <section id="harness" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Box size={13} />
            <span>PURPOSE-BUILT EXECUTION ENVIRONMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans mb-6">
            A Purpose-Built Runtime <br />
            <span className="gradient-text">for AI Agents.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Every Veltrix agent operates through a custom execution harness built by Veltrix. The harness provides the controlled environment through which Veltrix can observe, govern, secure, and understand agent execution.
          </p>
        </div>

        {/* Large Architectural Visualization of the Veltrix Harness */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Interactive Visual Harness Architecture Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#040817]/95 border-2 border-[#00C2FF]/50 shadow-[0_0_50px_rgba(0,194,255,0.2)] relative overflow-hidden backdrop-blur-xl">
              
              {/* Harness Outer Header Stamp */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono-tech text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Box size={16} className="text-[#00C2FF]" />
                  <span>VELTRIX AGENT EXECUTION HARNESS</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  ENCLAVE PROTECTED
                </span>
              </div>

              {/* Inside the Harness: The Agent Core Layer */}
              <div className="p-6 rounded-2xl bg-[#02050E] border border-white/15 mb-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0052FF]/20 text-[#00C2FF] border border-[#00C2FF]/30">
                      <Bot size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-bold text-white font-sans">Autonomous AI Agent</h4>
                      <span className="font-mono-tech text-xs text-slate-400">Claude 3.7 Sonnet / DeepSeek R1 Backbone</span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ISOLATED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono-tech text-xs pt-2 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-slate-200">
                    <Cpu size={14} className="text-purple-400" />
                    <span>Multi-Step Planner</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-slate-200">
                    <Wrench size={14} className="text-amber-400" />
                    <span>Governed MCP Tools</span>
                  </div>
                </div>
              </div>

              {/* Surrounding Harness Subsystems */}
              <div className="text-left">
                <span className="font-mono-tech text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-2.5">
                  INTEGRATED HARNESS SUBSYSTEMS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono-tech text-xs">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300">
                    <Shield size={13} />
                    <span>SECURITY</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center gap-2 text-[#38BDF8]">
                    <Eye size={13} />
                    <span>OBSERVABILITY</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-amber-300">
                    <Lock size={13} />
                    <span>GOVERNANCE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center gap-2 text-purple-300">
                    <Network size={13} />
                    <span>NETWORK CONTROLS</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-300">
                    <Activity size={13} />
                    <span>HEALTH MONITORING</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center gap-2 text-pink-300">
                    <Zap size={13} />
                    <span>FAILURE DETECTION</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: 6 Core Advantages with High-End Detail */}
          <div className="lg:col-span-5 space-y-3 text-left">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  onClick={() => setActiveAdvantage(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeAdvantage === idx
                      ? 'bg-[#060D1F] border-[#00C2FF]/50 shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className={`p-1.5 rounded-lg ${activeAdvantage === idx ? 'bg-[#0052FF]/20 text-[#00C2FF]' : 'bg-white/5 text-slate-400'}`}>
                      <Icon size={16} />
                    </div>
                    <h4 className="font-bold text-white text-sm font-sans">{adv.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed pl-8">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/5 max-w-2xl mx-auto text-center font-mono-tech text-xs text-slate-400">
          <span>Designed for controlled, reliable, and secure agent execution at production scale.</span>
        </div>

      </div>
    </section>
  );
};
