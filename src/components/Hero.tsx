import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Network, 
  Activity, 
  ArrowRight, 
  Lock, 
  Play, 
  CheckCircle2, 
  AlertTriangle,
  Server,
  Zap,
  Sparkles
} from 'lucide-react';
import { VordaneIcon } from './VordaneLogo';

interface HeroProps {
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export function Hero({ onOpenWaitlist, onOpenDemo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'orchestration' | 'spaces' | 'redteam' | 'traces'>('orchestration');

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] ambient-glow-vordane pointer-events-none opacity-80" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] ambient-glow-cyan pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] ambient-glow-violet pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-vordane-crosshair opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Eyebrow & Brand Pill */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ENTERPRISE AGENTIC GOVERNANCE & ORCHESTRATION</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-center text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
          Govern, Isolate, and Red-Team <br className="hidden sm:inline" />
          <span className="gradient-text-vordane">Autonomous AI Agents</span> at Scale
        </h1>

        {/* Subtext (<= 25 words) - NO TECH STACK NAMES */}
        <p className="mt-5 text-center text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Deploy multi-agent workloads with hardware isolation, partition network namespaces, enforce zero-trust MCP tool policies, and automate adversarial defense.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-xl shadow-white/10 transition-all flex items-center gap-2 whitespace-nowrap group cursor-pointer"
          >
            <span>Request Enterprise Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={onOpenDemo}
            className="px-5 py-3 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Play className="w-4 h-4 text-cyan-400" />
            <span>Interactive Architecture Walkthrough</span>
          </button>
        </div>

        {/* Live Interactive Control Plane Cockpit */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="glass-card overflow-hidden border border-white/10 shadow-2xl shadow-black/80">
            {/* Top Bar with Status & Tabs */}
            <div className="px-4 py-3 bg-[#0A0F1F] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono-tech font-bold tracking-wider text-emerald-400 uppercase">
                    COMPUTE CLUSTER: ACTIVE
                  </span>
                </div>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-[11px] font-mono-tech text-slate-400 hidden sm:inline">
                  STATE TRANSITIONS: 1,420/s
                </span>
                <span className="text-slate-600 hidden md:inline">|</span>
                <span className="text-[11px] font-mono-tech text-slate-400 hidden md:inline">
                  RBAC VIOLATIONS: 0
                </span>
              </div>

              {/* Interactive View Selector */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab('orchestration')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'orchestration'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Lifecycle
                </button>
                <button
                  onClick={() => setActiveTab('spaces')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'spaces'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Agent Spaces
                </button>
                <button
                  onClick={() => setActiveTab('redteam')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'redteam'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Red Team
                </button>
                <button
                  onClick={() => setActiveTab('traces')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'traces'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Spans
                </button>
              </div>
            </div>

            {/* Interactive Tab Content */}
            <div className="p-5 sm:p-6 bg-[#070B16]">
              {activeTab === 'orchestration' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono-tech text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
                      <span>Container Allocation</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">RUNNING</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">agent-secops-r1#7f8c</div>
                    <div className="text-slate-400 text-[11px] space-y-1">
                      <div>CPU Quota: 4 Cores (Dedicated)</div>
                      <div>RAM Limit: 8,192 MB Enclave</div>
                      <div>Workload ID: vordane-secops-9912</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
                      <span>State Transition Engine</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">HEALTHY</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">wf-agent-provision-v2</div>
                    <div className="text-slate-400 text-[11px] space-y-1">
                      <div>Activities: 6/6 Completed</div>
                      <div>State: Steerable / Hot-Swappable</div>
                      <div>Retry Policy: Exponential (0 Drop)</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
                      <span>Instance Controls</span>
                      <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">SCALED 3x</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">Governed Agent Tools</div>
                    <div className="text-slate-400 text-[11px] space-y-1">
                      <div>SSE Endpoint: /api/sse/tools</div>
                      <div>Active Instances: 3 Live Pods</div>
                      <div>Autoscale: 1 to 12 Nodes</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'spaces' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-tech text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/30 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-bold">Space: Prod-SecOps</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">STRICT CIDR</span>
                    </div>
                    <div className="text-slate-300 space-y-1 text-[11px]">
                      <div>CIDR Block: <code className="text-white">10.240.10.0/24</code></div>
                      <div>Gateway IP: <code className="text-white">10.240.10.1</code></div>
                      <div>Attached Agents: 8 Active Runtimes</div>
                      <div>Egress Rule: Zero Public Internet (Internal MCP Only)</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-violet-400 font-bold">Space: Finance-Prod</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-violet-950 border border-violet-500/40 text-violet-300">ISOLATED</span>
                    </div>
                    <div className="text-slate-300 space-y-1 text-[11px]">
                      <div>CIDR Block: <code className="text-white">10.240.20.0/24</code></div>
                      <div>Gateway IP: <code className="text-white">10.240.20.1</code></div>
                      <div>Attached Agents: 4 High-Assurance Agents</div>
                      <div>Cross-Tenant Bridge: Rejected by Network Filter</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'redteam' && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/30 font-mono-tech text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                    <div className="flex items-center gap-2 text-rose-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      <span className="font-bold">LIVE ADVERSARIAL STREAM: MULTI-TURN JAILBREAK TEST</span>
                    </div>
                    <span className="text-[10px] text-slate-400">SSE Probe: probe-run-994</span>
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    <span className="text-rose-400 font-semibold">[ATTACK VECTOR]:</span> Attempting recursive system prompt extraction via synthetic developer mode override...
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    <span className="text-emerald-400 font-semibold">[LLM JUDGE VERDICT]:</span> Risk Score: 0/100 (Safe). Policy Guard intercepted prompt at layer 2. Zero leak.
                  </div>
                </div>
              )}

              {activeTab === 'traces' && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30 font-mono-tech text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                    <span className="text-indigo-300 font-bold">TRACE ID: tr-agent-eval-90184b</span>
                    <span className="text-emerald-400 font-semibold">DURATION: 184ms</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] pt-1">
                    <div>
                      <div className="text-slate-500 text-[10px]">PROMPT TOKENS</div>
                      <div className="text-white font-bold">1,240 tokens</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px]">COMPLETION</div>
                      <div className="text-white font-bold">342 tokens</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px]">MODEL ID</div>
                      <div className="text-cyan-300 font-bold">gemini-2.0-flash</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px]">MCP TOOL SPAN</div>
                      <div className="text-emerald-300 font-bold">fetch_audit_logs (12ms)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
