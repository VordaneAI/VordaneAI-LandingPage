import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Box, Cpu, Network, ShieldCheck, 
  Sparkles, ArrowRight, Zap, RefreshCw, Eye, Bug, ShieldAlert, Bot
} from 'lucide-react';

interface ProductExperienceSectionProps {
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const ProductExperienceSection: React.FC<ProductExperienceSectionProps> = ({ onOpenWaitlist, onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'SELECT',
      tagline: 'Choose the Veltrix agent or multi-agent system to deploy',
      icon: Bot,
      color: 'text-[#00C2FF]',
      border: 'border-[#00C2FF]/40',
      bg: 'bg-[#00C2FF]/10',
      description: 'Pick from purpose-built agent templates or import custom reasoning models. No container Dockerfiles or Kubernetes manifests required.',
      details: [
        'Pre-configured agent architectures (Planners, Synthesizers, Sentinels)',
        'Multi-agent topology definitions with pre-wired communication buses',
        'Direct model selection (Claude 3.7, DeepSeek R1, GPT-4o, Local TEEs)',
      ],
      terminalPreview: '$ veltrix agent select --preset autonomous-financial-sentinel\n✓ Loaded architecture spec\n✓ Model bind: Claude-3.7-Sonnet + DeepSeek-R1 (Hybrid)\n✓ Agent identity confirmed: sec-sentinel-v1',
    },
    {
      num: '02',
      title: 'DEPLOY',
      tagline: 'Veltrix provisions the controlled execution environment',
      icon: Box,
      color: 'text-[#38BDF8]',
      border: 'border-[#38BDF8]/40',
      bg: 'bg-[#38BDF8]/10',
      description: 'Veltrix boots a purpose-built custom agent execution harness inside a hardware-attested microVM enclave in under 80ms.',
      details: [
        'Hardware-level microVM sandbox (gVisor / Firecracker)',
        'Zero-trust network namespace and strict egress boundaries',
        'Kernel-level execution isolation preventing runaway processes',
      ],
      terminalPreview: '$ veltrix harness provision --enclave microvm-01\n✓ Hardware enclave attested (AMD SEV-SNP)\n✓ Kernel isolation namespace initialized in 62ms\n✓ Custom execution harness attached to Agent 01',
    },
    {
      num: '03',
      title: 'CONNECT',
      tagline: 'Required models, tools, services, and policies are configured',
      icon: Network,
      color: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      description: 'Bind governed MCP tools, vector databases, and IAM permission rules without exposing raw API credentials to the agent.',
      details: [
        'Dynamic MCP tool discovery with schema validation',
        'Granular read/write permission rules (firecrawl:read, pgvector:query)',
        'Automated mTLS 1.3 certificate rotation for all tool RPCs',
      ],
      terminalPreview: '$ veltrix tools connect --mcp-hub internal-services\n✓ Governed 14 MCP tools (Stripe, Postgres, GitHub, Firecrawl)\n✓ Enforced strict permission policy: POL-SENTINEL-FIN-01\n✓ mTLS channel established with mutual attestation',
    },
    {
      num: '04',
      title: 'OPERATE',
      tagline: 'Continuous observability, health, security & failure detection',
      icon: Eye,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      description: 'Stream frame-by-frame execution traces, track agent health scores, and intercept cascading multi-agent failures with sub-10ms circuit breakers.',
      details: [
        'Full trace telemetry across thoughts, tool inputs, and tokens',
        'Real-time predictive agent degradation scoring (Healthy → Degraded)',
        'Autonomous circuit breakers isolate failing tools before swarm collapse',
      ],
      terminalPreview: '$ veltrix monitor --stream-telemetry\n[LIVE] Trace #9812: Thought → Tool:Stripe (24ms) → Synthesizer\n[HEALTH] Sentinel Cluster: 99.9% Health Score • Latency: 48ms\n[GUARD] Circuit breaker standby: Active on all 14 MCP endpoints',
    },
    {
      num: '05',
      title: 'TEST',
      tagline: 'Continuous adversarial red teaming & RAG vulnerability scanning',
      icon: ShieldAlert,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      description: 'Autonomous cyber labs attack agent endpoints with prompt injections, context poisonings, and permission escalations before production release.',
      details: [
        'Multi-vector prompt injection & jailbreak penetration suites',
        'RAG chunk poisoning and retrieval hallucination vulnerability scans',
        'Enterprise-grade immutable forensic audit reports',
      ],
      terminalPreview: '$ veltrix test red-team --vectors all\n✓ Executed 250 adversarial injection payloads\n✓ Zero policy breaches • 100% exploit interception rate\n✓ RAG semantic drift test: PASSED (Cosine similarity 0.96)',
    },
    {
      num: '06',
      title: 'IMPROVE',
      tagline: 'Closed-loop reflection and automated prompt optimization',
      icon: Sparkles,
      color: 'text-pink-400',
      border: 'border-pink-500/40',
      bg: 'bg-pink-500/10',
      description: 'Veltrix analyzes reasoning bottlenecks, diagnoses failures, and automatically refines agent system prompts and tool schemas.',
      details: [
        'Autonomous reflection engine isolates root causes of reasoning drift',
        'Side-by-side prompt diffs with automated benchmark validation',
        'Token reduction and latency optimization applied with one click',
      ],
      terminalPreview: '$ veltrix optimize --target latency-and-reliability\n✓ Diagnosed 3 ambiguous edge-case queries in support loop\n✓ Optimized prompt diff generated (+8.2% benchmark score)\n✓ Deployed updated prompt to harness with zero downtime',
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Zap size={13} />
            <span>THE VELTRIX LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Less Infrastructure. <br />
            <span className="gradient-text">More Intelligence.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Deploy intelligent agents without assembling and maintaining the complex runtime, security, networking, governance, and observability infrastructure underneath them.
          </p>
        </div>

        {/* 6 Step Progress Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#060D1F] border-[#00C2FF] shadow-[0_0_25px_rgba(0,194,255,0.25)]'
                    : 'bg-[#060D1F]/60 border-white/10 hover:border-white/20 hover:bg-[#0A1636]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-[10px] font-bold ${isActive ? 'text-[#00C2FF]' : 'text-slate-400'}`}>
                    STEP {step.num}
                  </span>
                  <Icon size={14} className={isActive ? step.color : 'text-slate-400'} />
                </div>
                <div className="text-sm font-bold text-white tracking-wide">
                  {step.title}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0052FF] to-[#00C2FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Step Showcase Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden bg-[#040817]/95">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
            >
              {/* Left Column: Details & Capabilities (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${current.bg} ${current.border} border ${current.color}`}>
                    <StepIcon size={24} />
                  </div>
                  <div>
                    <span className="font-mono-tech text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      STAGE {current.num} OF 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {current.title} • <span className={current.color}>{current.tagline}</span>
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {current.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 pt-2">
                  {current.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-mono-tech text-xs text-slate-200">
                      <CheckCircle2 size={15} className={`${current.color} flex-shrink-0 mt-0.5`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenWaitlist}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white font-semibold text-xs flex items-center gap-2 shadow-[0_0_25px_rgba(0,194,255,0.35)] cursor-pointer"
                  >
                    <span>Deploy with Veltrix</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={onOpenDemo}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-mono-tech text-xs transition-colors cursor-pointer"
                  >
                    Request Technical Demo
                  </button>
                </div>
              </div>

              {/* Right Column: Live Terminal / Architecture Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#02050E] border border-white/10 p-5 shadow-2xl font-mono-tech text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-slate-400 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-2 text-slate-300 font-bold">veltrix-cli v2.4</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      CONNECTED
                    </span>
                  </div>

                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-auto text-[11px]">
                    {current.terminalPreview}
                  </pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
