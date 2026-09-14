import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, ShieldAlert, Cpu, Wrench, Network, Eye, Lock, 
  AlertTriangle, RefreshCw, Layers, ArrowRight, CheckCircle2, 
  Sparkles, Bot, Box, ShieldCheck, Zap
} from 'lucide-react';
import { VeltrixLogo } from './VeltrixLogo';

export const OperationalBurdenSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeStep, setActiveStep] = useState<'chaotic' | 'collapsing' | 'unified'>('chaotic');

  const chaoticComponents = [
    { id: 'container', name: 'CONTAINERS', desc: 'Ephemeral Docker / Pod lifecycle & restarts', icon: Server, color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' },
    { id: 'sandbox', name: 'SANDBOXING', desc: 'Kernel isolation & syscall restrictions', icon: Box, color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
    { id: 'network', name: 'NETWORK', desc: 'VPC egress rules, DNS routing & CIDR subnets', icon: Network, color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
    { id: 'permissions', name: 'PERMISSIONS', desc: 'Granular IAM policies & token leases', icon: Lock, color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
    { id: 'toolgateway', name: 'TOOL GATEWAYS', desc: 'MCP proxy, schema validation & rate limits', icon: Wrench, color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10' },
    { id: 'mcp', name: 'MCP INTERACTIONS', desc: 'Dynamic tool handshake & protocol state', icon: Cpu, color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
    { id: 'observability', name: 'OBSERVABILITY', desc: 'Step-by-step reasoning & trace telemetry', icon: Eye, color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
    { id: 'security', name: 'SECURITY POLICIES', desc: 'Prompt injection defense & DLP redaction', icon: ShieldAlert, color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
    { id: 'failure', name: 'FAILURE HANDLING', desc: 'Circuit breakers & cascade propagation block', icon: AlertTriangle, color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
    { id: 'monitoring', name: 'OPERATIONAL MONITORING', desc: 'Agent health, token burn & latency jitter', icon: Zap, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
    { id: 'rag', name: 'RAG SECURITY', desc: 'Chunk poisoning & retrieval hallucination checks', icon: Layers, color: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10' },
    { id: 'redteam', name: 'RED TEAMING', desc: 'Continuous adversarial exploit fuzzing', icon: ShieldCheck, color: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-500/10' },
  ];

  const handleCollapse = () => {
    setActiveStep('collapsing');
    setTimeout(() => {
      setIsCollapsed(true);
      setActiveStep('unified');
    }, 600);
  };

  const handleReset = () => {
    setIsCollapsed(false);
    setActiveStep('chaotic');
  };

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#0052FF]/15 via-[#00C2FF]/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <AlertTriangle size={13} />
            <span>THE OPERATIONAL BURDEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Stop Building the Infrastructure <br />
            <span className="gradient-text">Around Your Agent.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            You shouldn't need an entire infrastructure team just to operate an AI agent. Veltrix provides the execution environment and operational controls required to run agents without forcing your team to assemble every layer themselves.
          </p>
        </div>

        {/* Interactive Storytelling Experience */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden bg-[#040817]/95">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00C2FF] uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>INTERACTIVE ARCHITECTURE COLLAPSE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {isCollapsed ? 'Veltrix Control Plane Active: Heavy Lifting Absorbed' : 'The Fragile DIY Stack: Overwhelming Operational Complexity'}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {!isCollapsed ? (
                <button
                  onClick={handleCollapse}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0052FF] via-[#0088FF] to-[#00C2FF] text-white font-semibold text-xs flex items-center gap-2 shadow-[0_0_25px_rgba(0,194,255,0.4)] hover:shadow-[0_0_35px_rgba(0,194,255,0.6)] cursor-pointer transition-all transform hover:scale-[1.02]"
                >
                  <Sparkles size={15} />
                  <span>Collapse into Veltrix</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono-tech text-xs flex items-center gap-2 cursor-pointer transition-all"
                >
                  <RefreshCw size={13} />
                  <span>Show DIY Complexity</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Visual Stage */}
          <div className="min-h-[460px] flex items-center justify-center relative p-4">
            <AnimatePresence mode="wait">
              {!isCollapsed ? (
                /* CHAOTIC STATE: Developer surrounded by disconnected infrastructure */
                <motion.div
                  key="chaotic-stage"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5 }}
                  className="w-full relative"
                >
                  {/* Warning Strip */}
                  <div className="flex flex-wrap items-center justify-center gap-4 mb-8 font-mono-tech text-xs text-rose-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      <AlertTriangle size={13} /> Infrastructure Complexity: High
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <AlertTriangle size={13} /> Operational Overhead: 8+ Weeks
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertTriangle size={13} /> Security Surface: Exposed
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
                      <AlertTriangle size={13} /> Cascading Failure Risk: Critical
                    </span>
                  </div>

                  {/* Chaotic Grid of 12 Disconnected Layers */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 relative">
                    {chaoticComponents.map((comp, idx) => {
                      const Icon = comp.icon;
                      return (
                        <motion.div
                          key={comp.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03, duration: 0.3 }}
                          className={`p-3.5 rounded-xl ${comp.bg} border ${comp.border} text-left relative overflow-hidden backdrop-blur-sm group hover:scale-[1.02] transition-transform`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`font-mono-tech text-[10px] font-bold ${comp.color} flex items-center gap-1`}>
                              <Icon size={13} />
                              {comp.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          </div>
                          <p className="text-[11px] text-slate-300 font-sans leading-snug">
                            {comp.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Central Burden Indicator */}
                  <div className="mt-8 text-center">
                    <p className="text-xs font-mono-tech text-slate-400">
                      ↑ 12+ separate infrastructure layers you currently have to wire, secure, and maintain manually.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* UNIFIED VELTRIX STATE: Everything collapsed into Veltrix Custom Harness */
                <motion.div
                  key="unified-stage"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center text-center py-4"
                >
                  {/* Status Banner */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-tech text-xs font-semibold mb-6">
                    <CheckCircle2 size={14} />
                    <span>VELTRIX HARNESS ACTIVE • OPERATIONAL COMPLEXITY ZEROED</span>
                  </div>

                  {/* The Veltrix Unified Harness Visual Card */}
                  <div className="w-full max-w-3xl p-8 rounded-3xl bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#060D1F] border-2 border-[#00C2FF]/60 shadow-[0_0_60px_rgba(0,194,255,0.3)] relative overflow-hidden">
                    {/* Top Branding */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <div className="flex items-center gap-3 text-left">
                        <VeltrixLogo size={36} glow animated />
                        <div>
                          <span className="font-mono-tech text-[10px] text-[#38BDF8] uppercase font-bold tracking-wider block">
                            PURPOSE-BUILT EXECUTION ENVIRONMENT
                          </span>
                          <h4 className="text-xl font-black text-white tracking-wide font-sans">
                            VELTRIX CUSTOM AGENT HARNESS
                          </h4>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono-tech text-[11px] font-bold">
                        FULLY MANAGED
                      </span>
                    </div>

                    {/* Inside the Protective Harness: The Agent */}
                    <div className="p-6 rounded-2xl bg-[#030712] border border-[#00C2FF]/40 text-center relative overflow-hidden shadow-inner mb-6">
                      <div className="absolute top-2 right-3 font-mono-tech text-[10px] text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        RUNNING
                      </div>
                      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#0052FF]/20 border border-[#00C2FF]/40 text-[#00C2FF] mb-3">
                        <Bot size={32} />
                      </div>
                      <h5 className="text-2xl font-black text-white tracking-tight uppercase mb-1">
                        YOUR ONLY TASK: BUILD THE AGENT.
                      </h5>
                      <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                        Focus 100% on domain logic, reasoning prompts, and intelligence. Veltrix provides the complete surrounding runtime and operational guardrails.
                      </p>
                    </div>

                    {/* Surrounding Integrated Subsystems Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono-tech text-[11px] text-left">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-200">Security Boundary</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Eye size={14} className="text-[#38BDF8] flex-shrink-0" />
                        <span className="text-slate-200">Trace Telemetry</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Lock size={14} className="text-purple-400 flex-shrink-0" />
                        <span className="text-slate-200">Tool Governance</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Network size={14} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-200">Controlled Network</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Zap size={14} className="text-amber-400 flex-shrink-0" />
                        <span className="text-slate-200">Cascade Interception</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Sparkles size={14} className="text-pink-400 flex-shrink-0" />
                        <span className="text-slate-200">Prompt Optimization</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm font-bold text-[#00C2FF] font-sans">
                    Veltrix Does the Heavy Lifting.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Before vs. With Veltrix Workflow Comparison Strip */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* The DIY / Before Way */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <span className="font-mono-tech text-[10px] text-rose-400 uppercase font-bold tracking-wider block mb-2">
                MANAGE IT YOURSELF (8 COMPLEX STEPS)
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-mono-tech text-[11px] text-slate-300">
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Build</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Configure</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Secure</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Instrument</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Monitor</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Govern</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Debug</span>
                <span className="text-slate-600">→</span>
                <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">Maintain</span>
              </div>
            </div>

            {/* The Veltrix Way */}
            <div className="p-5 rounded-2xl bg-[#0052FF]/15 border border-[#00C2FF]/40 shadow-[0_0_25px_rgba(0,194,255,0.15)]">
              <span className="font-mono-tech text-[10px] text-[#00C2FF] uppercase font-bold tracking-wider block mb-2">
                WITH VELTRIX (1 SEAMLESS STEP)
              </span>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white font-black font-sans text-base shadow-[0_0_20px_rgba(0,194,255,0.4)]">
                  DEPLOY
                </span>
                <span className="text-xs text-slate-300 font-sans">
                  The runtime, isolation, security, telemetry, and governance are handled for you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
