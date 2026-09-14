import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, X, ArrowRight, Layers, Box, Bot } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface WhyBuildSectionProps {
  onOpenWaitlist: () => void;
}

export const WhyBuildSection: React.FC<WhyBuildSectionProps> = ({ onOpenWaitlist }) => {
  const diyElements = [
    'Custom Agent Runtime',
    'Network VPC & Subnets',
    'Kernel Security Boundaries',
    'MCP Tool Gateways',
    'IAM Permission Scopes',
    'Step-by-Step Telemetry',
    'Health Degradation Monitors',
    'Cascade Circuit Breakers',
    'Adversarial Red Teaming',
    'RAG Vulnerability Scanners',
    'Reasoning Reflection Engines',
  ];

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <AlertTriangle size={13} />
            <span>THE HIDDEN INFRASTRUCTURE BURDEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans mb-6">
            The Infrastructure Behind an Agent <br />
            <span className="gradient-text-rose">Can Become the Product.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            A team building its own agent infrastructure spends months engineering runtimes, security, networking, permissions, telemetry, and failure handling. This isn't the intelligence of the agent—it's the infrastructure required to make that intelligence usable. Veltrix abstracts that complexity.
          </p>
        </div>

        {/* Side-by-Side Comparison: Build It Yourself vs With Veltrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Side 1: Build It Yourself */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/30 bg-rose-950/10 text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 mb-5 font-mono-tech text-xs">
                <span className="font-bold text-rose-400 uppercase tracking-wider">
                  BUILD IT YOURSELF (DIY)
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                  HIGH OVERHEAD
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Many Disconnected Systems
              </h3>
              <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
                Engineering teams get bogged down stitching together bespoke runtime containers, IAM proxies, network rules, and disparate log forwarders.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6 font-mono-tech text-[11px]">
                {diyElements.map((item) => (
                  <div key={item} className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/20 flex items-center justify-between text-rose-300">
                    <span className="truncate">{item}</span>
                    <X size={12} className="text-rose-400 shrink-0 ml-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-rose-500/20 font-mono-tech text-xs text-rose-400">
              Months spent building infrastructure instead of customer-facing intelligence.
            </div>
          </div>

          {/* Side 2: With Veltrix */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-[#00C2FF]/60 bg-gradient-to-b from-[#0052FF]/20 via-[#00C2FF]/10 to-[#040817] text-left flex flex-col justify-between shadow-[0_0_40px_rgba(0,194,255,0.2)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono-tech text-xs">
                <span className="font-bold text-[#00C2FF] uppercase tracking-wider">
                  WITH VELTRIX
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  INTEGRATED RUNTIME
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Everything Collapses into Veltrix
              </h3>
              <p className="text-xs text-slate-200 font-sans mb-6 leading-relaxed">
                Veltrix provides production-ready agents inside custom execution harnesses with full control-plane governance pre-wired.
              </p>

              {/* Clean 3-Step Flow */}
              <div className="space-y-3 mb-6 font-mono-tech text-xs">
                <div className="p-4 rounded-2xl bg-[#02050E] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <Bot size={18} className="text-[#00C2FF]" />
                    <span>AI AGENT (Your Intelligence)</span>
                  </div>
                  <Check size={14} className="text-emerald-400" />
                </div>

                <div className="flex justify-center text-slate-500 font-bold">↓</div>

                <div className="p-4 rounded-2xl bg-[#02050E] border border-[#00C2FF]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <Box size={18} className="text-emerald-400" />
                    <span>VELTRIX AGENT HARNESS (Controlled Runtime)</span>
                  </div>
                  <Check size={14} className="text-emerald-400" />
                </div>

                <div className="flex justify-center text-slate-500 font-bold">↓</div>

                <div className="p-4 rounded-2xl bg-[#02050E] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <Layers size={18} className="text-purple-400" />
                    <span>VELTRIX CONTROL PLANE (Unified Operations)</span>
                  </div>
                  <Check size={14} className="text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-extrabold text-white font-sans text-sm">
                Veltrix handles the operational complexity.
              </span>
              <a
                href="#observability"
                className="font-mono-tech text-xs text-[#00C2FF] font-bold flex items-center gap-1 hover:underline"
              >
                <span>See How It Works</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
