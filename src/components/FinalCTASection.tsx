import React from 'react';
import { ArrowRight, ShieldCheck, Play, Server, Lock } from 'lucide-react';
import { VordaneIcon } from './VordaneLogo';

interface FinalCTAProps {
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export function FinalCTASection({ onOpenWaitlist, onOpenDemo }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 relative border-t border-white/[0.08] bg-[#060913] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] ambient-glow-vordane pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-vordane-crosshair opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Brand Icon Badge */}
        <div className="flex justify-center mb-6">
          <VordaneIcon size={56} />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Ready to Deploy Governed Agentic Clusters in Production?
        </h2>

        {/* Subtext (<= 25 words) - Cleaned of tech stack names */}
        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Isolate network namespaces, orchestrate resilient multi-agent workloads, enforce zero-trust MCP tool policies, and continuously red-team your agent fleet.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenWaitlist}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-xl shadow-white/10 transition-all flex items-center gap-2 whitespace-nowrap group cursor-pointer"
          >
            <span>Request Enterprise Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={onOpenDemo}
            className="px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Play className="w-4 h-4 text-cyan-400" />
            <span>Schedule Architecture Review</span>
          </button>
        </div>

        {/* Security / Deployment Guarantees */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-mono-tech">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" /> Single-Tenant VPC Deployment
          </span>
          <span className="flex items-center gap-2">
            <Server className="w-4 h-4 text-indigo-400" /> Enterprise Cluster Ready
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated Adversarial Probing
          </span>
        </div>
      </div>
    </section>
  );
}
