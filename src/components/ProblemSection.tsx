import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertOctagon, ShieldAlert, CheckCircle2, RefreshCw, Zap, Server, 
  Bot, Wrench, Globe, ArrowRight, ShieldCheck, Box, AlertTriangle, Check, X, Lock, Eye, Network
} from 'lucide-react';
import { VeltrixLogo } from './VeltrixLogo';

export const ProblemSection: React.FC = () => {
  const [cascadeState, setCascadeState] = useState<'idle' | 'failed' | 'mitigated'>('idle');
  const [activeFailure, setActiveFailure] = useState<'timeout' | 'ratelimit' | 'poisoning'>('timeout');

  const diyLayers = [
    { name: 'Agent Runtime', desc: 'Execution sandboxes & containers' },
    { name: 'Network Isolation', desc: 'Subnets, VPC peering & ingress policies' },
    { name: 'Tool Gateways & MCP', desc: 'Schema validation & API proxies' },
    { name: 'Permission Enforcement', desc: 'IAM scopes & token rotation' },
    { name: 'Telemetry & Tracing', desc: 'Step-by-step reasoning log capture' },
    { name: 'Failure Handling', desc: 'Circuit breakers & cascade isolation' },
    { name: 'Health Monitoring', desc: 'Predictive degradation state tracking' },
    { name: 'RAG Security', desc: 'Vector poisoning & hallucination defense' },
    { name: 'Red Teaming', desc: 'Continuous adversarial exploit fuzzing' },
    { name: 'Prompt Optimization', desc: 'Diff benchmarks & reflection engines' },
  ];

  const triggerFailure = (type: 'timeout' | 'ratelimit' | 'poisoning') => {
    setActiveFailure(type);
    setCascadeState('failed');
  };

  const resetOrMitigate = () => {
    setCascadeState('mitigated');
  };

  const resetAll = () => {
    setCascadeState('idle');
  };

  return (
    <section id="reliability" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <AlertOctagon size={13} />
            <span>THE RUNTIME CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The Agent Is the Easy Part. <br />
            <span className="gradient-text-rose">The Runtime Is the Hard Part.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Running an agent in production means managing far more than the model and prompt. Veltrix abstracts that complexity behind a purpose-built execution harness so teams don't have to build the entire operational layer themselves.
          </p>
        </div>

        {/* Two Sides Comparison: Manage It Yourself vs. With Veltrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Side 1: Manage It Yourself */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/30 bg-rose-950/10 text-left flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-500/20">
                <span className="font-mono-tech text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle size={14} />
                  MANAGE IT YOURSELF (DIY)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono-tech text-[10px] font-bold">
                  HIGH RISK
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Chaotic, Disconnected Infrastructure
              </h3>
              <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
                Your team spends months wiring containers, writing custom network filters, gluing MCP tools, crafting IAM policies, and debugging cascading failures.
              </p>

              {/* Tangled Grid */}
              <div className="grid grid-cols-2 gap-2 mb-6 font-mono-tech text-[11px]">
                {diyLayers.slice(0, 8).map((layer) => (
                  <div key={layer.name} className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/20">
                    <div className="flex items-center justify-between text-rose-300 font-semibold mb-0.5">
                      <span>{layer.name}</span>
                      <X size={12} className="text-rose-400" />
                    </div>
                    <span className="text-[10px] text-slate-400 block truncate">{layer.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Indicators */}
            <div className="pt-4 border-t border-rose-500/20 flex flex-wrap gap-2 font-mono-tech text-[10px] text-rose-400">
              <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20">⚠️ Infrastructure Complexity</span>
              <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20">⚠️ Operational Overhead</span>
              <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20">⚠️ Security Surface</span>
              <span className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20">⚠️ Failure Risk</span>
            </div>
          </div>

          {/* Side 2: With Veltrix */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#00C2FF]/60 bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] text-left flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,194,255,0.2)]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono-tech text-xs font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={15} />
                  WITH VELTRIX
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech text-[10px] font-bold">
                  FULLY INTEGRATED
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Everything Collapses into Veltrix
              </h3>
              <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
                Veltrix provides production-ready agents inside purpose-built custom execution harnesses with security, observability, governance, and failure detection pre-wired.
              </p>

              {/* Collapsed Unified Harness Card */}
              <div className="p-4 rounded-2xl bg-[#030712]/90 border border-[#00C2FF]/40 mb-6 space-y-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-white font-bold border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2 text-[#00C2FF]">
                    <Box size={16} />
                    <span>VELTRIX CUSTOM HARNESS</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">ACTIVE ENCLAVE</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Security Boundary</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Observability & Tracing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Tool Governance</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Network Controls</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Agent Health</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400" />
                    <span>Failure Detection</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-extrabold text-white font-sans">
                Veltrix Does the Heavy Lifting.
              </span>
              <span className="font-mono-tech text-xs text-[#00C2FF] font-bold">
                100% Focused on Intelligence →
              </span>
            </div>
          </div>
        </div>

        {/* The Cascade Propagation Engine (Visual Showcase) */}
        <div className="relative glass-card p-6 sm:p-10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Bar with Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00C2FF] uppercase tracking-wider mb-1">
                <Zap size={14} />
                <span>INTERACTIVE HARNESS RESILIENCE ENGINE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Harness-Level Isolation & Cascade Interception
              </h3>
            </div>

            {/* Simulation Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => triggerFailure('timeout')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech transition-all cursor-pointer flex items-center gap-1.5 ${
                  cascadeState === 'failed' && activeFailure === 'timeout'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <AlertOctagon size={13} className="text-rose-400" />
                <span>Inject Tool Timeout</span>
              </button>

              <button
                onClick={() => triggerFailure('ratelimit')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech transition-all cursor-pointer flex items-center gap-1.5 ${
                  cascadeState === 'failed' && activeFailure === 'ratelimit'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <AlertOctagon size={13} className="text-rose-400" />
                <span>Simulate 504 Gateway</span>
              </button>

              {cascadeState === 'failed' ? (
                <button
                  onClick={resetOrMitigate}
                  className="px-4 py-2 rounded-lg text-xs font-mono-tech font-semibold bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white shadow-[0_0_20px_rgba(0,194,255,0.4)] hover:shadow-[0_0_30px_rgba(0,194,255,0.6)] cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck size={14} />
                  <span>Apply Veltrix Auto-Mitigation</span>
                </button>
              ) : (
                <button
                  onClick={resetAll}
                  className="px-3.5 py-2 rounded-lg text-xs font-mono-tech text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  <span>Reset State</span>
                </button>
              )}
            </div>
          </div>

          {/* Graph Nodes Visual Representation */}
          <div className="relative py-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 items-center">
              {/* Node 1: Agent A */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  cascadeState === 'failed'
                    ? 'bg-rose-950/20 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                    : cascadeState === 'mitigated'
                    ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'bg-[#060D1F] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-slate-400">VELTRIX AGENT 01</span>
                  <Bot size={16} className={cascadeState === 'failed' ? 'text-rose-400' : 'text-[#00C2FF]'} />
                </div>
                <div className="font-bold text-white text-sm mb-1">Agent A / Planner</div>
                <div className="font-mono-tech text-[10px] text-slate-400 flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cascadeState === 'failed' ? 'bg-rose-400 animate-pulse' : 'bg-emerald-400'
                    }`}
                  />
                  <span>{cascadeState === 'failed' ? 'STALLED (Awaiting Tool)' : 'HEALTHY (18ms)'}</span>
                </div>
              </div>

              {/* Node 2: Tool */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  cascadeState === 'failed'
                    ? 'bg-rose-950/40 border-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.3)] animate-pulse'
                    : cascadeState === 'mitigated'
                    ? 'bg-[#0052FF]/15 border-[#00C2FF]/50 text-white'
                    : 'bg-[#060D1F] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-rose-300 font-bold">
                    {cascadeState === 'failed' ? 'ORIGIN FAILURE' : 'GOVERNED TOOL'}
                  </span>
                  <Wrench size={16} className={cascadeState === 'failed' ? 'text-rose-400' : 'text-amber-400'} />
                </div>
                <div className="font-bold text-white text-sm mb-1">Vector Search Tool</div>
                <div className="font-mono-tech text-[10px] text-slate-400 flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cascadeState === 'failed' ? 'bg-rose-500 animate-ping' : cascadeState === 'mitigated' ? 'bg-[#00C2FF]' : 'bg-emerald-400'
                    }`}
                  />
                  <span className={cascadeState === 'failed' ? 'text-rose-400 font-bold' : ''}>
                    {cascadeState === 'failed'
                      ? activeFailure === 'timeout'
                        ? 'TIMEOUT EXCEEDED (5000ms)'
                        : 'GATEWAY 504 OUTAGE'
                      : cascadeState === 'mitigated'
                      ? 'ISOLATED & REROUTED'
                      : 'OPERATIONAL'}
                  </span>
                </div>
              </div>

              {/* Node 3: External API */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  cascadeState === 'failed'
                    ? 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                    : cascadeState === 'mitigated'
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-[#060D1F] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-slate-400">EXTERNAL API</span>
                  <Globe size={16} className={cascadeState === 'failed' ? 'text-rose-400' : 'text-purple-400'} />
                </div>
                <div className="font-bold text-white text-sm mb-1">Vector DB Cluster</div>
                <div className="font-mono-tech text-[10px] text-slate-400 flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cascadeState === 'failed' ? 'bg-rose-400 animate-pulse' : 'bg-emerald-400'
                    }`}
                  />
                  <span>{cascadeState === 'failed' ? 'CASCADE VICTIM (Blocked)' : 'CIRCUIT ACTIVE'}</span>
                </div>
              </div>

              {/* Node 4: Agent B */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  cascadeState === 'failed'
                    ? 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                    : cascadeState === 'mitigated'
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-[#060D1F] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-slate-400">VELTRIX AGENT 02</span>
                  <Bot size={16} className={cascadeState === 'failed' ? 'text-rose-400' : 'text-[#38BDF8]'} />
                </div>
                <div className="font-bold text-white text-sm mb-1">Agent B / Synthesizer</div>
                <div className="font-mono-tech text-[10px] text-slate-400 flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cascadeState === 'failed' ? 'bg-rose-400' : 'bg-emerald-400'
                    }`}
                  />
                  <span>{cascadeState === 'failed' ? 'POISONED CONTEXT' : 'ACTIVE (FALLBACK DATA)'}</span>
                </div>
              </div>

              {/* Node 5: Agent C */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  cascadeState === 'failed'
                    ? 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                    : cascadeState === 'mitigated'
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-[#060D1F] border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-slate-400">VELTRIX AGENT 03</span>
                  <Bot size={16} className={cascadeState === 'failed' ? 'text-rose-400' : 'text-cyan-400'} />
                </div>
                <div className="font-bold text-white text-sm mb-1">Agent C / Validator</div>
                <div className="font-mono-tech text-[10px] text-slate-400 flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cascadeState === 'failed' ? 'bg-rose-400' : 'bg-emerald-400'
                    }`}
                  />
                  <span>{cascadeState === 'failed' ? 'BLOCKED STATE' : 'HEALTHY (24ms)'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
