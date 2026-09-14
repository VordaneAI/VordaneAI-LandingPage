import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Bot, Key, ShieldCheck, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ToolGovernanceSectionProps {
  onOpenWaitlist: () => void;
}

export const ToolGovernanceSection: React.FC<ToolGovernanceSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="governance" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Lock size={13} />
            <span>TOOL GOVERNANCE & PERMISSION POLICIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans mb-6">
            Give Agents Tools <br />
            <span className="gradient-text-amber">Without Losing Control.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            AI agents become powerful when they can interact with external tools and databases. That also creates a security and governance challenge. Veltrix makes tool relationships visible and governed through granular permissions, rate limits, and network sandbox policies.
          </p>
        </div>

        {/* Real Example Visual Flow: Agent -> Permission Policy -> Governed Tool */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto bg-[#040817]/90 text-left">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 font-mono-tech text-xs">
            <span className="text-[#00C2FF] font-bold">GOVERNED TOOL INVOCATION PIPELINE</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              POLICY ENFORCED (100%)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-8">
            
            {/* Step 1: Agent */}
            <div className="p-5 rounded-2xl bg-[#060D1F] border border-white/10 font-mono-tech">
              <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold mb-2">
                <span>IDENTITY</span>
                <Bot size={14} className="text-[#00C2FF]" />
              </div>
              <div className="font-bold text-white text-sm">firecrawl-agent</div>
              <div className="text-[10px] text-slate-400 mt-1">Managed Veltrix Harness</div>
            </div>

            {/* Step 2: Permission Policy */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 font-mono-tech shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <div className="flex items-center justify-between text-amber-300 text-[10px] uppercase font-bold mb-2">
                <span>IAM PERMISSION</span>
                <Key size={14} className="text-amber-400" />
              </div>
              <div className="font-bold text-white text-sm">Firecrawl Reader</div>
              <div className="text-[10px] text-amber-300 font-mono-tech mt-1">Rule: firecrawl:read (#15)</div>
            </div>

            {/* Step 3: Governed Tool */}
            <div className="p-5 rounded-2xl bg-[#060D1F] border border-[#00C2FF]/40 font-mono-tech">
              <div className="flex items-center justify-between text-cyan-300 text-[10px] uppercase font-bold mb-2">
                <span>GOVERNED TOOL</span>
                <Lock size={14} className="text-cyan-400" />
              </div>
              <div className="font-bold text-white text-sm">firecrawl_crawl</div>
              <div className="text-[10px] text-emerald-400 mt-1">gVisor Sandbox • Egress Locked</div>
            </div>

          </div>

          {/* Detailed Governed Policies Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 font-mono-tech text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 text-[10px] uppercase block mb-1">EXECUTION POLICY</span>
              <span className="text-white font-semibold">Deterministic Scope</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 text-[10px] uppercase block mb-1">TIMEOUT BREAKER</span>
              <span className="text-amber-400 font-semibold">3000ms Hard Cap</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 text-[10px] uppercase block mb-1">EGRESS FILTER</span>
              <span className="text-emerald-400 font-semibold">Approved Domain Whitelist</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
