import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, ArrowDown, Server, Cpu, Wrench, Globe, Database, 
  Shield, Lock, Activity, Eye, RefreshCw, Radar, ShieldCheck, 
  Box, Bot, Sparkles, CheckCircle2, ArrowRight, Network, Zap
} from 'lucide-react';
import { VeltrixLogo } from './VeltrixLogo';

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'harness' | 'multiagent'>('harness');

  const harnessFeatures = [
    { title: 'Execution Isolation', desc: 'Hardware microVM sandbox boundaries preventing process hijacking and rogue execution.' },
    { title: 'Runtime Controls', desc: 'Active execution limits on recursive step depth, compute cycles, and token budgets.' },
    { title: 'Network Controls', desc: 'VPC egress policy enforcement, private subnets, and DNS whitelist restrictions.' },
    { title: 'Tool Governance', desc: 'Strict MCP tool schema inspection, parameter sanitization, and API proxying.' },
    { title: 'Permission Enforcement', desc: 'Granular IAM policies, short-lived token leases, and role-based action gating.' },
    { title: 'Security Policies', desc: 'Real-time prompt injection blocking, DLP data masking, and cryptographic verification.' },
    { title: 'Trace Telemetry', desc: 'Continuous capture of internal thoughts, reasoning steps, tool payloads, and latency.' },
    { title: 'Agent Health Monitoring', desc: 'Predictive health scoring across healthy, degraded, and critical operating states.' },
    { title: 'Failure Detection', desc: 'Sub-10ms circuit breakers intercepting tool timeouts before cascading propagation.' },
    { title: 'Operational Controls', desc: 'Instant kill switches, safe fallback routing, and automated rollback capabilities.' },
  ];

  return (
    <section id="architecture" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#0052FF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Layers size={13} />
            <span>CORE ARCHITECTURAL CONCEPT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The Veltrix-Built <br />
            <span className="gradient-text">Custom Agent Harness.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            These are not generic customer-managed containers. They are purpose-built execution environments created by Veltrix to provide the controlled infrastructure required by production AI agents.
          </p>
          <div className="mt-4 inline-block font-sans font-bold text-sm text-[#00C2FF] bg-[#0052FF]/10 px-4 py-1.5 rounded-full border border-[#00C2FF]/30">
            The customer gets the agent. Veltrix handles what surrounds it.
          </div>
        </div>

        {/* View Switcher: Single Harness Deep-Dive vs Multi-Agent Orchestration */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-[#060D1F] border border-white/10">
            <button
              onClick={() => setActiveTab('harness')}
              className={`px-5 py-2 rounded-xl text-xs font-mono-tech transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'harness'
                  ? 'bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white font-bold shadow-[0_0_20px_rgba(0,194,255,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box size={14} />
              <span>Single Agent Execution Harness</span>
            </button>

            <button
              onClick={() => setActiveTab('multiagent')}
              className={`px-5 py-2 rounded-xl text-xs font-mono-tech transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'multiagent'
                  ? 'bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white font-bold shadow-[0_0_20px_rgba(0,194,255,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network size={14} />
              <span>Multi-Agent System Orchestration</span>
            </button>
          </div>
        </div>

        {/* Architecture Showcase Stage */}
        <AnimatePresence mode="wait">
          {activeTab === 'harness' ? (
            /* TAB 1: Single Harness View */
            <motion.div
              key="harness-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Four Tier Stack */}
              <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 bg-[#040817]/95">
                
                {/* TIER 1: Veltrix Agents & Multi-Agent Systems */}
                <div className="p-6 rounded-2xl bg-[#060D1F] border border-white/15 text-center font-mono-tech relative overflow-hidden group">
                  <div className="absolute top-3 right-4 text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    PRODUCTION READY
                  </div>
                  <span className="text-[#38BDF8] uppercase text-[10px] tracking-wider block font-bold mb-1">
                    TIER 1 • INTELLIGENCE LAYER
                  </span>
                  <div className="text-white font-black text-xl sm:text-2xl font-sans tracking-wide">
                    VELTRIX AGENTS & MULTI-AGENT SYSTEMS
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1.5 max-w-2xl mx-auto">
                    Production-ready AI agents running inside Veltrix-managed execution environments, with the infrastructure, security, observability, and controls handled for you.
                  </p>
                </div>

                <div className="flex justify-center text-[#00C2FF] animate-bounce">
                  <ArrowDown size={22} />
                </div>

                {/* TIER 2: Veltrix-Built Custom Agent Harness (Highlighted) */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] border-2 border-[#00C2FF]/60 shadow-[0_0_50px_rgba(0,194,255,0.25)] text-left relative overflow-hidden">
                  
                  {/* Harness Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-[#00C2FF]/20 border border-[#00C2FF]/40 text-[#00C2FF]">
                        <Box size={24} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-tech text-[#38BDF8] uppercase tracking-wider font-bold block">
                          TIER 2 • PURPOSE-BUILT RUNTIME
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
                          VELTRIX-BUILT CUSTOM AGENT HARNESS
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono-tech text-xs text-emerald-300 bg-emerald-500/15 px-3.5 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-2 self-start sm:self-auto font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PROTECTIVE OPERATIONAL BOUNDARY
                    </span>
                  </div>

                  {/* Inside / Around the Agent Architecture Concept */}
                  <div className="p-4 rounded-2xl bg-[#02050E]/80 border border-white/10 mb-6 text-center">
                    <span className="font-mono-tech text-xs text-slate-300 font-semibold">
                      Inside the Harness: <strong className="text-white">AI AGENT REASONING CORE</strong> • Around the Agent: <strong className="text-[#00C2FF]">10 INTEGRATED OPERATIONAL CONTROLS</strong>
                    </span>
                  </div>

                  {/* 10 Harness Capabilities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono-tech">
                    {harnessFeatures.map((cap) => (
                      <div
                        key={cap.title}
                        className="p-3.5 rounded-xl bg-[#060D1F]/90 border border-white/10 hover:border-[#00C2FF]/40 transition-all text-left"
                      >
                        <div className="font-bold text-white text-xs mb-1 font-sans flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-[#00C2FF] flex-shrink-0" />
                          <span className="truncate">{cap.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center text-[#00C2FF] animate-bounce">
                  <ArrowDown size={22} />
                </div>

                {/* TIER 3: Veltrix Control Plane */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#060D1F] border border-white/15 text-center font-mono-tech">
                  <span className="text-[#00C2FF] uppercase text-[10px] tracking-wider block font-bold mb-1">
                    TIER 3 • CENTRAL CONTROL PLANE
                  </span>
                  <div className="text-white font-black text-lg sm:text-xl font-sans mb-3">
                    VELTRIX UNIFIED CONTROL PLANE
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-slate-300">
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#00C2FF]">SELECT & DEPLOY</span>
                    <span className="text-slate-600">•</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#38BDF8]">FULL TRACE TELEMETRY</span>
                    <span className="text-slate-600">•</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-400">TOOL GOVERNANCE</span>
                    <span className="text-slate-600">•</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-rose-400">CASCADE INTERCEPTION</span>
                    <span className="text-slate-600">•</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-400">RED TEAMING & RAG</span>
                    <span className="text-slate-600">•</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">PROMPT OPTIMIZATION</span>
                  </div>
                </div>

                <div className="flex justify-center text-[#00C2FF] animate-bounce">
                  <ArrowDown size={22} />
                </div>

                {/* TIER 4: Governed Foundation Layer */}
                <div className="p-5 rounded-2xl bg-[#060D1F] border border-white/10 text-center font-mono-tech">
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold mb-1">
                    TIER 4 • GOVERNED FOUNDATION LAYER
                  </span>
                  <div className="text-white font-bold text-sm sm:text-base font-sans">
                    Governed MCP Servers • MicroVM Compute Enclaves • Vector Stores • Air-Gapped Models
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            /* TAB 2: Multi-Agent Systems Orchestration View */
            <motion.div
              key="multiagent-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl bg-[#040817]/95 text-center"
            >
              <div className="max-w-2xl mx-auto mb-8">
                <span className="font-mono-tech text-xs text-[#00C2FF] font-bold uppercase tracking-wider block mb-1">
                  ORCHESTRATED MULTI-AGENT ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Veltrix Orchestrates the Operational Environment
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans">
                  No manual plumbing. Veltrix provisions individual custom harnesses around every agent, enforces inter-agent messaging policies, and mediates shared tool access.
                </p>
              </div>

              {/* Multi-Agent Visual Diagram */}
              <div className="p-8 rounded-2xl bg-[#02050E] border border-white/10 relative max-w-4xl mx-auto font-mono-tech">
                
                {/* Central Control Plane Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#0052FF]/20 to-[#00C2FF]/20 border border-[#00C2FF]/50 text-white font-bold text-sm mb-8 flex items-center justify-center gap-2">
                  <VeltrixLogo size={20} glow />
                  <span>VELTRIX CONTROL PLANE (COORDINATION & GOVERNANCE)</span>
                </div>

                {/* Agents A & B with their respective harnesses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  
                  {/* Agent A Box */}
                  <div className="p-5 rounded-2xl bg-[#060D1F] border border-[#00C2FF]/40 text-left relative">
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2 text-white font-bold font-sans">
                        <Bot size={18} className="text-[#00C2FF]" />
                        <span>VELTRIX AGENT A (Planner)</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">HARNESS 01</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30 mb-3 text-xs text-slate-300">
                      <span className="text-[#38BDF8] font-bold block mb-0.5">CUSTOM EXECUTION HARNESS</span>
                      <span>MicroVM Enclave • Telemetry Probe • VPC Policy</span>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>Delegates sub-tasks to Agent B</span>
                    </div>
                  </div>

                  {/* Inter-Agent Communication Arrow in Center (Desktop) */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-3 py-1 rounded-full bg-[#030712] border border-[#00C2FF]/50 text-[#00C2FF] text-[10px] font-bold items-center gap-1 shadow-lg">
                    <span>mTLS BUS</span>
                    <ArrowRight size={12} />
                  </div>

                  {/* Agent B Box */}
                  <div className="p-5 rounded-2xl bg-[#060D1F] border border-[#38BDF8]/40 text-left relative">
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2 text-white font-bold font-sans">
                        <Bot size={18} className="text-[#38BDF8]" />
                        <span>VELTRIX AGENT B (Executor)</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">HARNESS 02</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30 mb-3 text-xs text-slate-300">
                      <span className="text-[#38BDF8] font-bold block mb-0.5">CUSTOM EXECUTION HARNESS</span>
                      <span>Circuit Breaker Active • Zero-Knowledge Logging</span>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>Executes governed tool calls</span>
                    </div>
                  </div>

                </div>

                {/* Arrow down to Governed Tools */}
                <div className="flex justify-center my-6 text-[#00C2FF]">
                  <ArrowDown size={20} />
                </div>

                {/* Governed Tools Box */}
                <div className="p-4 rounded-xl bg-[#060D1F] border border-cyan-500/40 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <Lock size={15} />
                    <span>GOVERNED MCP TOOLS & APIS</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">
                    Schema Enforced • Rate Limited • Circuit Breaker Protected
                  </span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
