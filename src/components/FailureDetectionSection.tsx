import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, ShieldCheck, RefreshCw, Cpu, Database, Wrench, Globe, ArrowDown, CheckCircle2 } from 'lucide-react';

export const FailureDetectionSection: React.FC = () => {
  const [isMitigated, setIsMitigated] = useState(false);

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <ShieldAlert size={13} />
            <span>CASCADE INTELLIGENCE & FORENSICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Detect the Failure. <br />
            Find the Root Cause. <span className="gradient-text-rose">Stop the Cascade.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            When an upstream microVM exhausts memory or an API returns invalid JSON, Veltrix halts the chain reaction in sub-10 milliseconds, generates an audit trace, and switches traffic to zero-drift fallbacks.
          </p>
        </div>

        {/* Forensic Cascade Timeline Card */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
          {/* Header Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="font-mono-tech text-xs text-rose-400 font-bold tracking-wider">
                LIVE FORENSIC INCIDENT ROOM :: #INC-2026-904
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Autonomous Root-Cause Isolation Pipeline</h3>
            </div>

            <button
              onClick={() => setIsMitigated(!isMitigated)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isMitigated
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]'
              }`}
            >
              {isMitigated ? (
                <>
                  <CheckCircle2 size={15} />
                  <span>CASCADE STOPPED & SEALED</span>
                </>
              ) : (
                <>
                  <ShieldAlert size={15} />
                  <span>TRIGGER CIRCUIT BREAKER</span>
                </>
              )}
            </button>
          </div>

          {/* 5-Pillar Forensic Diagnostic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* 1. Root Cause */}
            <div className="p-5 rounded-xl bg-[#060D1F] border border-rose-500/40 text-left font-mono-tech relative overflow-hidden">
              <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle size={13} />
                <span>ROOT CAUSE</span>
              </div>
              <div className="text-sm font-bold text-white mb-2">Vector Search Timeout</div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Qdrant cluster node-04 hit 100% CPU on hybrid rerank query, exceeding 5000ms threshold.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-rose-300">
                ORIGIN: vector_rerank_v2
              </div>
            </div>

            {/* 2. Impacted Agents */}
            <div className="p-5 rounded-xl bg-[#060D1F] border border-white/10 text-left font-mono-tech">
              <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-2">
                IMPACTED AGENTS
              </div>
              <div className="text-sm font-bold text-white mb-2">07 Swarm Workers</div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Customer Support, Refund Agent, and 5 Background Synthesizer nodes stalled in waiting state.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-amber-300">
                BLOCKED QUEUE: 42 Runs
              </div>
            </div>

            {/* 3. Dependency Chain */}
            <div className="p-5 rounded-xl bg-[#060D1F] border border-white/10 text-left font-mono-tech">
              <div className="text-[10px] text-[#38BDF8] font-bold uppercase tracking-wider mb-2">
                DEPENDENCY CHAIN
              </div>
              <div className="text-sm font-bold text-white mb-2">Auth → RAG → Agent</div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Auth Gateway passed payload to RAG Retriever, which hung before reaching LLM Synthesis.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-[#38BDF8]">
                DEPTH: 4 Multi-Hop Links
              </div>
            </div>

            {/* 4. Failure Propagation */}
            <div className="p-5 rounded-xl bg-[#060D1F] border border-white/10 text-left font-mono-tech">
              <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider mb-2">
                PROPAGATION
              </div>
              <div className="text-sm font-bold text-white mb-2">Exponential Backoff</div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Agents began aggressive unthrottled retries, increasing queue pressure by 340%.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-purple-300">
                RATE: +42 req/sec
              </div>
            </div>

            {/* 5. Recommended Mitigation */}
            <div
              className={`p-5 rounded-xl border text-left font-mono-tech transition-all ${
                isMitigated
                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                  : 'bg-[#0052FF]/15 border-[#00C2FF]/40 text-slate-200'
              }`}
            >
              <div className="text-[10px] text-[#00C2FF] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck size={13} />
                <span>RECOMMENDED MITIGATION</span>
              </div>
              <div className="text-sm font-bold text-white mb-2">
                {isMitigated ? 'Replica Rerouted' : 'Circuit Breaker + Cache'}
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                {isMitigated
                  ? 'Active connections routed to warm Redis cache. Vector worker quarantined.'
                  : 'Isolate failing node, return cached embedding embeddings, drop backoff burst.'}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-emerald-400 font-bold">
                {isMitigated ? 'STATUS: MITIGATED' : 'ACTION: READY'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
