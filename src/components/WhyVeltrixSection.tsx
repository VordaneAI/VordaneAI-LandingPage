import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check, X, ShieldCheck, AlertOctagon, Box, Bot, Layers, Zap } from 'lucide-react';

export const WhyVeltrixSection: React.FC = () => {
  const veltrixComponents = [
    'Custom Agent Harness',
    'Agent Runtime Infrastructure',
    'Full-Frame Observability',
    'Health Monitoring',
    'Tool Governance',
    'IAM Permissions Enforcement',
    'Network VPC Security',
    'Failure & Timeout Detection',
    'Cascading Failure Intelligence',
    'Continuous RAG Scanning',
    'Autonomous Red Teaming',
    'Reflection Engine',
    'Automated Prompt Optimization',
  ];

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Sparkles size={13} />
            <span>THE CORE DIFFERENTIATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Don't Build the Agent Infrastructure. <br />
            <span className="gradient-text">Use Veltrix.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Veltrix abstracts the operational complexity of running AI agents so teams can focus on agent capabilities rather than building and maintaining the infrastructure underneath them.
          </p>
        </div>

        {/* Side-by-Side Paradigm Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* The Old Way */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/30 text-left bg-rose-950/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-rose-400 font-bold uppercase tracking-wider mb-3">
                <AlertOctagon size={15} />
                <span>THE OLD WAY (DIY INFRASTRUCTURE)</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">Build an agent.</h3>
              <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
                Then spend weeks or months assembling and maintaining the complex infrastructure stack underneath it.
              </p>

              <div className="space-y-2.5 font-mono-tech text-xs text-slate-400 border-t border-rose-500/20 pt-4">
                <div className="flex items-center gap-2 text-rose-300">
                  <X size={14} className="flex-shrink-0 text-rose-400" />
                  <span>Manually writing container & sandbox isolation</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300">
                  <X size={14} className="flex-shrink-0 text-rose-400" />
                  <span>Wiring complex VPC networks & firewall rules</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300">
                  <X size={14} className="flex-shrink-0 text-rose-400" />
                  <span>Building custom tool gateways & permission proxies</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300">
                  <X size={14} className="flex-shrink-0 text-rose-400" />
                  <span>Managing cascading tool failures and timeouts</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300">
                  <X size={14} className="flex-shrink-0 text-rose-400" />
                  <span>Hand-crafting observability, traces, and metrics</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-rose-500/20 text-xs font-mono-tech text-rose-400">
              Result: 80% time spent on infrastructure, 20% on intelligence.
            </div>
          </div>

          {/* The Veltrix Way */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-[#00C2FF]/60 text-left bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] shadow-[0_0_50px_rgba(0,194,255,0.25)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00C2FF] font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={15} />
                <span>THE VELTRIX WAY</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 font-sans">
                Get the Agent. Get the Infrastructure. Get the Control Plane.
              </h3>
              <p className="text-xs text-slate-200 font-sans mb-6 leading-relaxed">
                Deploy production-ready agents inside purpose-built custom execution harnesses with all operational controls pre-integrated.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono-tech text-[11px] text-slate-200 border-t border-[#00C2FF]/30 pt-4">
                {veltrixComponents.slice(0, 8).map((comp) => (
                  <div key={comp} className="flex items-center gap-1.5 text-slate-200">
                    <Check size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-extrabold text-white font-sans">
                You build the intelligence. Veltrix handles the heavy lifting.
              </span>
              <span className="font-mono-tech text-xs text-[#00C2FF] font-bold">
                100% Ready →
              </span>
            </div>
          </div>
        </div>

        {/* All-in-One Capabilities Grid */}
        <div className="p-6 rounded-2xl bg-[#060D1F] border border-white/10 text-center">
          <span className="font-mono-tech text-xs text-[#00C2FF] font-bold uppercase tracking-wider block mb-3">
            WHAT VELTRIX PROVIDES OUT OF THE BOX
          </span>
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs font-mono-tech text-slate-300">
            {veltrixComponents.map((comp, idx) => (
              <React.Fragment key={comp}>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:border-[#00C2FF]/40 transition-colors">
                  {comp}
                </span>
                {idx < veltrixComponents.length - 1 && (
                  <span className="text-slate-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
