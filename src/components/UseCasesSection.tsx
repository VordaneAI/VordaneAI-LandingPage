import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Headphones, Landmark, Microscope, Network, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

interface UseCasesSectionProps {
  onOpenWaitlist: () => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onOpenWaitlist }) => {
  const [selectedCase, setSelectedCase] = useState(0);

  const useCases = [
    {
      title: 'Enterprise AI Platforms',
      icon: Building2,
      subtitle: 'Secure and operate internal workforce agents',
      desc: 'Enforce data loss prevention, permission boundaries, and zero-knowledge telemetry across thousands of employee-facing and internal reasoning agents.',
      metrics: ['100% DLP Compliance', 'Zero Prompt Leakage', 'Org-wide Discovery'],
    },
    {
      title: 'Autonomous Support Swarms',
      icon: Headphones,
      subtitle: 'Monitor tier-1 & tier-2 autonomous support agents',
      desc: 'Eliminate hallucinated refunds, prevent social engineering jailbreaks, and maintain sub-300ms customer resolution times with deterministic fallback policies.',
      metrics: ['99.9% Task Success', '<300ms P95 Latency', 'Automated Guardrails'],
    },
    {
      title: 'Financial Risk & Fraud',
      icon: Landmark,
      subtitle: 'Detect anomalous behavior & protect sensitive workflows',
      desc: 'Isolate ledger-accessing agents inside hardware-attested microVM enclaves with cryptographic signature requirements on every financial state transition.',
      metrics: ['FIPS 140-3 Compliant', 'Zero False Approvals', 'Real-Time Kill Switch'],
    },
    {
      title: 'Long-Running Research Agents',
      icon: Microscope,
      subtitle: 'Observe recursive, multi-hour autonomous systems',
      desc: 'Prevent runaway token loops, monitor context degradation across deep iterative research graphs, and checkpoint multi-agent memory trees.',
      metrics: ['Token Loop Protection', 'Context Drift Alerts', 'Memory State Restore'],
    },
    {
      title: 'Multi-Agent Swarm Orchestration',
      icon: Network,
      subtitle: 'Understand complex agent-to-agent delegation',
      desc: 'Visualize dynamic peer-to-peer agent delegation trees, detect deadlock states in agent consensus loops, and monitor cascading tool dependencies.',
      metrics: ['Live Swarm Topology', 'Deadlock Detection', 'Cascade Interception'],
    },
    {
      title: 'AI Platform & Infra Ops',
      icon: Server,
      subtitle: 'Gain one operational layer across the entire AI stack',
      desc: 'Replace fragmented point solutions with a unified control plane for agent health, cost attribution, tool MCP governance, and hardware isolation.',
      metrics: ['One Single Cockpit', 'Cost Attribution by Swarm', 'Zero-Code SDK'],
    },
  ];

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Network size={13} />
            <span>OPERATIONAL SCENARIOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Engineered for <br />
            <span className="gradient-text">Mission-Critical AI Workloads.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From financial institutions to high-velocity autonomous agent developers, Veltrix provides the foundational operating infrastructure for production AI systems.
          </p>
        </div>

        {/* 6 Interactive Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00C2FF]/40 transition-all flex flex-col justify-between group cursor-pointer text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:text-[#00C2FF] transition-all">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono-tech text-[10px] text-[#00C2FF] uppercase font-bold tracking-wider block mb-1">
                    {uc.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    {uc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5 font-mono-tech text-[11px]">
                  {uc.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
