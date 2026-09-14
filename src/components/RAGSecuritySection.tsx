import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Binary, Database, Search, Bot, Cpu, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export const RAGSecuritySection: React.FC = () => {
  const [selectedScanCategory, setSelectedScanCategory] = useState<string>('Poisoned Documents');

  const scanCategories = [
    { name: 'Poisoned Documents', count: 2, level: 'CRITICAL', desc: 'Embedded malicious instructions hidden inside scraped PDF chunk #4902.' },
    { name: 'Prompt Injection', count: 3, level: 'HIGH', desc: 'Direct jailbreak payload targeting system prompt extraction via vector context.' },
    { name: 'Data Leakage / PII', count: 1, level: 'CRITICAL', desc: 'Unmasked API tokens and SSN patterns detected in internal documentation vectors.' },
    { name: 'Context Manipulation', count: 1, level: 'MEDIUM', desc: 'Adversarial semantic drift forcing model to recommend untrusted third-party endpoints.' },
    { name: 'Retrieval Quality', count: 0, level: 'OPTIMAL', desc: 'Cosine similarity threshold > 0.88 maintained across all production queries.' },
    { name: 'Retrieval Failures', count: 0, level: 'OPTIMAL', desc: 'Zero empty-context responses recorded in the last 24-hour cycle.' },
  ];

  const pipelineStages = [
    { label: 'Documents', icon: FileText, sub: 'PDF, MD, Web' },
    { label: 'Embeddings', icon: Binary, sub: 'text-emb-3' },
    { label: 'Vector DB', icon: Database, sub: 'Qdrant / PG' },
    { label: 'Retriever', icon: Search, sub: 'Hybrid Rerank' },
    { label: 'Agent', icon: Bot, sub: 'Context Synthesizer' },
    { label: 'LLM', icon: Cpu, sub: 'Claude 3.7' },
  ];

  return (
    <section id="rag-security" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#00C2FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Shield size={13} />
            <span>RAG SECURITY & RETRIEVAL INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Your RAG Pipeline Is Part of <br />
            <span className="gradient-text">Your Attack Surface.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Vector databases cannot distinguish between legitimate enterprise knowledge and poisoned context payloads. Veltrix continuously sanitizes, evaluates, and protects your entire retrieval pipeline.
          </p>
        </div>

        {/* Visual Pipeline Representation */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl mb-10">
          <span className="font-mono-tech text-xs text-slate-400 block mb-6 uppercase tracking-wider font-semibold">
            END-TO-END RETRIEVAL AUDIT PIPELINE
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.label}
                  className="p-4 rounded-xl bg-[#060D1F] border border-white/10 hover:border-[#00C2FF]/40 transition-all text-center relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div className="font-bold text-white text-xs">{stage.label}</div>
                  <div className="font-mono-tech text-[10px] text-slate-400 mt-0.5">{stage.sub}</div>

                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-mono-tech text-xs z-20">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Scanner Results Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Scan Summary Banner (1 Col) */}
          <div className="lg:col-span-1 glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-emerald-400 uppercase font-bold tracking-wider mb-2">
                <CheckCircle2 size={15} />
                <span>RAG SCAN COMPLETE</span>
              </div>

              <div className="text-3xl font-extrabold text-white tracking-tight font-mono-tech mt-2">
                18,421
              </div>
              <span className="font-mono-tech text-xs text-slate-400 uppercase">DOCUMENTS SCANNED</span>

              <div className="mt-6 space-y-3 font-mono-tech text-xs">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex justify-between items-center text-rose-300">
                  <span>CRITICAL THREATS</span>
                  <span className="font-bold text-base text-rose-400">02</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex justify-between items-center text-amber-300">
                  <span>TOTAL VULNERABILITIES</span>
                  <span className="font-bold text-base text-amber-400">07</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between items-center text-emerald-300">
                  <span>RETRIEVAL HEALTH</span>
                  <span className="font-bold text-base text-emerald-400">98.7%</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono-tech text-[10px] text-slate-400 flex items-center justify-between">
              <span>SCAN INTERVAL</span>
              <span className="text-white">CONTINUOUS (0s LAG)</span>
            </div>
          </div>

          {/* Right: Scan Category Inspector (2 Cols) */}
          <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-white/10">
            <span className="font-mono-tech text-xs text-slate-400 uppercase tracking-wider block mb-4 font-semibold">
              VULNERABILITY & QUALITY VECTORS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {scanCategories.map((cat) => (
                <div
                  key={cat.name}
                  onClick={() => setSelectedScanCategory(cat.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    selectedScanCategory === cat.name
                      ? 'bg-[#060D1F] border-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                      : 'bg-[#060D1F]/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 font-mono-tech text-xs">
                    <span className="font-bold text-white">{cat.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        cat.level === 'CRITICAL'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : cat.level === 'HIGH'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : cat.level === 'MEDIUM'
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {cat.count > 0 ? `${cat.count} DETECTED` : 'CLEAN'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{cat.desc}</p>
                </div>
              ))}
            </div>

            {/* Quarantine Action Banner */}
            <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30 font-mono-tech text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#38BDF8] flex-shrink-0" />
                <span>Selected: <strong>{selectedScanCategory}</strong> quarantined in isolation buffer.</span>
              </div>
              <button className="px-3.5 py-1.5 rounded-lg bg-[#0052FF] hover:bg-[#0038B8] text-white font-semibold text-[11px] transition-all cursor-pointer flex-shrink-0">
                Purge & Re-index
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
