import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, CheckCircle2, Zap, DollarSign, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const PromptOptimizerSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#00C2FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Wand2 size={13} />
            <span>CONTINUOUS PROMPT OPTIMIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Turn Execution Failures <br />
            <span className="gradient-text">Into Optimized Prompts.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Veltrix connects production failure intelligence with automated reflection to recommend structured output contracts, schema guards, and concise token compression.
          </p>
        </div>

        {/* Side-by-Side Prompt Diff Interface */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl bg-[#040817]/90">
          {/* Top Header with Illustrative Example Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">PROMPT RECOMMENDATION COMPARISON</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#0052FF]/20 border border-[#00C2FF]/40 text-[#00C2FF] text-[10px] font-bold tracking-wider uppercase">
                Illustrative Example
              </span>
            </div>
            <span className="text-slate-400 text-[11px]">
              Workflow: Failure Detection → Reflection Analysis → Prompt Recommendation
            </span>
          </div>

          {/* Side by Side Diff Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono-tech">
            {/* Left: Original Prompt */}
            <div className="bg-[#030712]/90 p-5 rounded-2xl border border-rose-500/30 text-left">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 mb-3">
                <span className="text-xs text-rose-400 font-bold uppercase tracking-wider">
                  ORIGINAL PROMPT (PRODUCTION FAILURE)
                </span>
                <span className="text-[10px] text-slate-500">Unconstrained</span>
              </div>
              <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
{`You are a customer support agent.
Help users with billing and refund questions.
If they ask for a refund, look up their order in the database and issue the refund if under $50.

Never swear. Be polite.
If you get stuck, explain why.`}
              </pre>
              <div className="mt-4 pt-3 border-t border-rose-500/20 text-[10px] text-rose-400 font-mono-tech">
                ⚠️ Issues Identified by Reflection: Ambiguous authorization bounds, missing strict JSON schema, unvalidated parameter extraction.
              </div>
            </div>

            {/* Right: Optimized Prompt */}
            <div className="bg-[#030712]/90 p-5 rounded-2xl border border-emerald-500/40 text-left shadow-[0_0_25px_rgba(16,185,129,0.1)]">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-3">
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  RECOMMENDED PROMPT (HARDENED)
                </span>
                <span className="text-[10px] text-emerald-300">Contract Enforced</span>
              </div>
              <pre className="text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
{`<system_directives>
  <role>Tier-1 Billing Sentinel</role>
  <auth_scope verified="true">REFUND_MAX: $50.00_USD</auth_scope>
  <output_contract format="json_strict">
    { "action": "refund", "auth_token": "$AUTH", "amount": float }
  </output_contract>
  <guardrails>
    <deny on="unverified_permission">TRIGGER_FALLBACK_ISOLATION</deny>
    <deny on="schema_mismatch">HALT_CASCADE</deny>
  </guardrails>
</system_directives>`}
              </pre>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[10px] text-emerald-300 font-mono-tech flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>Structured output contract, explicit permission boundaries, and failure containment traps.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
