import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, RotateCcw, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const ReflectionSection: React.FC = () => {
  const steps = [
    { label: 'Production Failure', desc: 'Agent loops on ambiguous tool input and times out.' },
    { label: 'Root Cause Isolation', desc: 'Identified missing schema boundary in tool call prompt.' },
    { label: 'Autonomous Reflection', desc: 'Veltrix LLM Reflection Engine pinpoints syntactic ambiguity.' },
    { label: 'Prompt Rewriting', desc: 'Strict XML output contract & deterministic fallback added.' },
    { label: 'Benchmarked Execution', desc: 'Simulated over 1,000 synthetic adversarial runs.' },
    { label: 'Live Hot-Patch', desc: 'Zero-downtime deployment of optimized agent prompt.' },
  ];

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <RotateCcw size={13} />
            <span>CLOSED-LOOP AGENT REFLECTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Don't Just Detect Failure. <br />
            <span className="gradient-text">Learn From It.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every production error is training signal. Veltrix automatically reflects on why agents failed, diagnoses prompt ambiguity, and synthesizes optimized system directives.
          </p>
        </div>

        {/* 6-Step Loop Diagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.label}
              className="p-4 rounded-xl bg-[#060D1F] border border-white/10 text-left font-mono-tech relative group hover:border-[#00C2FF]/40 transition-all"
            >
              <div className="text-[10px] text-[#00C2FF] font-bold mb-1.5 flex items-center justify-between">
                <span>0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
              </div>
              <div className="font-bold text-white text-xs mb-1 font-sans">{step.label}</div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Before / After Impact Comparison Card */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono-tech text-xs text-[#00C2FF] uppercase font-bold tracking-wider">
              REAL-WORLD BENCHMARK IMPACT
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Autonomous Optimization Before & After
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BEFORE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-left">
              <div className="flex items-center justify-between font-mono-tech text-xs text-rose-400 font-bold mb-4">
                <span>BEFORE VELTRIX REFLECTION</span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">NAIVE PROMPT</span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono-tech mb-2">
                71%
              </div>
              <span className="font-mono-tech text-xs text-slate-400 uppercase">TASK SUCCESS RATE</span>

              <div className="mt-6 space-y-3 font-mono-tech text-xs text-slate-300 border-t border-rose-500/20 pt-4">
                <div className="flex justify-between">
                  <span>P99 Task Latency</span>
                  <span className="text-rose-300">840ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Token Cost</span>
                  <span className="text-rose-300">$0.042 / run</span>
                </div>
                <div className="flex justify-between">
                  <span>Cascading Failure Risk</span>
                  <span className="text-rose-400 font-bold">HIGH (18.4%)</span>
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 text-left relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="flex items-center justify-between font-mono-tech text-xs text-emerald-400 font-bold mb-4">
                <span>AFTER VELTRIX REFLECTION</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">SYNTHESIZED HARNESS</span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono-tech mb-2">
                94%
              </div>
              <span className="font-mono-tech text-xs text-slate-400 uppercase">VERIFIED TASK SUCCESS RATE</span>

              <div className="mt-6 space-y-3 font-mono-tech text-xs text-slate-200 border-t border-emerald-500/20 pt-4">
                <div className="flex justify-between">
                  <span>P99 Task Latency</span>
                  <span className="text-emerald-300">310ms (-63%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Token Cost</span>
                  <span className="text-emerald-300">$0.018 / run (-57%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Cascading Failure Risk</span>
                  <span className="text-emerald-400 font-bold">ZERO (0.00%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
