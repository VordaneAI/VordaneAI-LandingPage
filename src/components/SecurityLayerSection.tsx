import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ShieldCheck, ShieldAlert, Network, ArrowRight, Check, X, Server, Bot, Box } from 'lucide-react';

interface SecurityLayerSectionProps {
  onOpenWaitlist: () => void;
}

export const SecurityLayerSection: React.FC<SecurityLayerSectionProps> = ({ onOpenWaitlist }) => {
  const securityPipeline = [
    { label: 'AI Agent', sub: 'Reasoning Core', icon: Bot, color: 'text-[#00C2FF]' },
    { label: 'Veltrix Harness', sub: 'Custom Runtime', icon: Box, color: 'text-emerald-400' },
    { label: 'Security Boundary', sub: 'MicroVM Sandbox', icon: Shield, color: 'text-[#38BDF8]' },
    { label: 'Controlled Network', sub: 'VPC / Zero Egress', icon: Network, color: 'text-purple-400' },
    { label: 'Governed Tools', sub: 'MCP IAM Rules', icon: Lock, color: 'text-amber-400' },
  ];

  const policies = [
    {
      source: 'Veltrix Support Agent (Harness #1)',
      target: 'Customer Postgres DB',
      rule: 'RESTRICTED (Row-Level Security + Redaction)',
      status: 'POLICY ALLOWED',
      allowed: true,
      reason: 'mTLS certificate verified with valid tenant scope within microVM enclave.',
    },
    {
      source: 'Veltrix Research Agent (Harness #4)',
      target: 'Production Payment Ledger',
      rule: 'ZERO-TRUST DENY',
      status: 'POLICY DENIED',
      allowed: false,
      reason: 'Unauthorized cross-enclave egress attempt intercepted at kernel harness boundary.',
    },
    {
      source: 'Veltrix Analyst Agent (Harness #2)',
      target: 'Snowflake Warehouse',
      rule: 'READ-ONLY TOKENIZED',
      status: 'POLICY ALLOWED',
      allowed: true,
      reason: 'Automated PII masking filter active on MCP query buffer.',
    },
    {
      source: 'External Tool Webhook',
      target: 'Internal Agent RPC Bus',
      rule: 'INGRESS SIGNATURE CHECK',
      status: 'POLICY DENIED',
      allowed: false,
      reason: 'Missing ED25519 payload signature; connection dropped by harness firewall.',
    },
  ];

  return (
    <section id="security" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0052FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Shield size={13} />
            <span>EXECUTION ENVIRONMENT SECURITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Security Built Into the <br />
            <span className="gradient-text">Execution Environment.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Veltrix-controlled execution harnesses provide isolation, network-level controls, permission enforcement, and security policies as part of the agent runtime architecture.
          </p>
        </div>

        {/* Visual Architecture Flow: Agent -> Harness -> Boundary -> Network -> Tools */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl mb-8 bg-[#040817]/90 text-center">
          <span className="font-mono-tech text-xs text-[#00C2FF] font-bold uppercase tracking-wider block mb-4">
            ARCHITECTURAL DEFENSE PIPELINE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
            {securityPipeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.label}>
                  <div className="p-4 rounded-2xl bg-[#060D1F] border border-white/10 text-center relative">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.color} inline-flex mb-2`}>
                      <Icon size={20} />
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm font-sans mb-0.5">
                      {item.label}
                    </div>
                    <div className="font-mono-tech text-[10px] text-slate-400">
                      {item.sub}
                    </div>
                  </div>
                  {idx < securityPipeline.length - 1 && (
                    <div className="hidden sm:flex justify-center text-slate-600 font-bold">
                      →
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Policy Enforcement Engine */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="font-mono-tech text-xs text-[#00C2FF] font-bold uppercase tracking-wider block">
                LIVE KERNEL POLICY ENFORCEMENT ENGINE
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Zero-Trust Service-to-Service Access Control
              </h3>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0038B8] text-white font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,82,255,0.4)]"
            >
              <span>Join the Waitlist</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Policy Firehose Cards */}
          <div className="space-y-3">
            {policies.map((p, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl border font-mono-tech text-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  p.allowed
                    ? 'bg-[#060D1F] border-white/10 hover:border-emerald-500/40'
                    : 'bg-rose-950/20 border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.1)]'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      p.allowed ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}
                  >
                    {p.allowed ? <Check size={16} /> : <X size={16} />}
                  </div>

                  <div className="text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white font-bold">{p.source}</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-[#38BDF8] font-bold">{p.target}</span>
                      <span className="text-[10px] text-slate-400">({p.rule})</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 font-sans">{p.reason}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 self-start md:self-auto">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      p.allowed
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Feature Badges */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono-tech text-xs text-slate-400">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-bold block mb-0.5">MicroVM Sandboxes</span>
              <span>gVisor / Firecracker</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-bold block mb-0.5">mTLS 1.3 Strict</span>
              <span>Cert Rotation (1hr)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-bold block mb-0.5">Hardware Enclaves</span>
              <span>AWS Nitro / AMD SEV</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-bold block mb-0.5">Network VPC Mesh</span>
              <span>Wireguard Crypt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
