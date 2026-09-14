import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Bot, Cpu, Wrench, Database, Globe, Server, ShieldCheck, Activity, Layers, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

interface EntityNode {
  id: string;
  name: string;
  category: 'AGENTS' | 'MODELS' | 'TOOLS' | 'RAG' | 'APIs' | 'DATABASES' | 'INFRASTRUCTURE';
  status: 'HEALTHY' | 'ISOLATED' | 'OPTIMIZED';
  healthScore: number;
  latency: string;
  tokens: string;
  costPerHour: string;
  errorRate: string;
  security: string;
  deps: string[];
  description: string;
}

export const ControlPlaneSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedEntity, setSelectedEntity] = useState<EntityNode | null>(null);

  const categories = ['ALL', 'AGENTS', 'MODELS', 'TOOLS', 'RAG', 'APIs', 'DATABASES', 'INFRASTRUCTURE'];

  const entities: EntityNode[] = [
    {
      id: 'ent-1',
      name: 'Agent / Autonomous Support Swarm',
      category: 'AGENTS',
      status: 'HEALTHY',
      healthScore: 99.8,
      latency: '142ms',
      tokens: '4.2M / day',
      costPerHour: '$1.42',
      errorRate: '0.01%',
      security: 'SEC-PERIMETER-A',
      deps: ['Claude 3.7 Sonnet', 'Zendesk Tool', 'Pinecone Vector DB'],
      description: 'Multi-tier customer resolution agent equipped with context synthesis and sentiment boundary gates.',
    },
    {
      id: 'ent-2',
      name: 'Agent / Fraud & Risk Investigator',
      category: 'AGENTS',
      status: 'OPTIMIZED',
      healthScore: 100.0,
      latency: '88ms',
      tokens: '1.8M / day',
      costPerHour: '$0.84',
      errorRate: '0.00%',
      security: 'ENCLAVE-ISOLATED',
      deps: ['DeepSeek-R1-Local', 'Stripe Ledger API', 'Postgres Vector DB'],
      description: 'Autonomous financial anomaly investigator executing strict zero-knowledge trace verification.',
    },
    {
      id: 'ent-3',
      name: 'Model / Claude-3.7-Sonnet',
      category: 'MODELS',
      status: 'HEALTHY',
      healthScore: 99.9,
      latency: '340ms',
      tokens: '12.8M / day',
      costPerHour: '$4.20',
      errorRate: '0.02%',
      security: 'TLS 1.3 PINNED',
      deps: ['Anthropic Cloud Gateway'],
      description: 'Primary reasoning backbone for complex multi-agent planning and synthesis tasks.',
    },
    {
      id: 'ent-4',
      name: 'Model / DeepSeek-R1 (Air-Gapped)',
      category: 'MODELS',
      status: 'ISOLATED',
      healthScore: 100.0,
      latency: '110ms',
      tokens: '8.4M / day',
      costPerHour: '$0.32',
      errorRate: '0.00%',
      security: 'HARDWARE TEE',
      deps: ['Nomad MicroVM Enclave'],
      description: 'Locally hosted, air-gapped reasoning model running inside confidential microVM compute.',
    },
    {
      id: 'ent-5',
      name: 'Tool / MCP-Code-Sandbox-v2',
      category: 'TOOLS',
      status: 'HEALTHY',
      healthScore: 99.4,
      latency: '95ms',
      tokens: 'N/A',
      costPerHour: '$0.18',
      errorRate: '0.01%',
      security: 'SEC-SANDBOX-STRICT',
      deps: ['Firecracker MicroVM Pool'],
      description: 'Ephemeral containerized execution environment for arbitrary agent-generated code execution.',
    },
    {
      id: 'ent-6',
      name: 'RAG / Enterprise Knowledge Vector Mesh',
      category: 'RAG',
      status: 'HEALTHY',
      healthScore: 98.9,
      latency: '18ms',
      tokens: '18.4M vectors',
      costPerHour: '$0.45',
      errorRate: '0.00%',
      security: 'AES-256-GCM',
      deps: ['Qdrant Mesh Cluster', 'OpenAI Text-Embedding-3'],
      description: 'Continuous semantic knowledge graph with automatic poisoning detection and prompt injection filters.',
    },
    {
      id: 'ent-7',
      name: 'API / External Payment & Ledger Gateway',
      category: 'APIs',
      status: 'HEALTHY',
      healthScore: 99.95,
      latency: '42ms',
      tokens: 'N/A',
      costPerHour: '$0.08',
      errorRate: '0.00%',
      security: 'MUTUAL TLS ENFORCED',
      deps: ['Envoy Ingress Gateway'],
      description: 'Rate-limited, cryptographically authenticated bridge for agent financial interactions.',
    },
    {
      id: 'ent-8',
      name: 'Database / Sovereign Vector Postgres DB',
      category: 'DATABASES',
      status: 'HEALTHY',
      healthScore: 100.0,
      latency: '6ms',
      tokens: 'N/A',
      costPerHour: '$0.65',
      errorRate: '0.00%',
      security: 'ENCRYPTED AT REST',
      deps: ['AWS KMS Hardware Key'],
      description: 'Distributed relational and pgvector persistent memory store with row-level agent isolation.',
    },
    {
      id: 'ent-9',
      name: 'Infra / Nomad MicroVM Orchestration Pool',
      category: 'INFRASTRUCTURE',
      status: 'OPTIMIZED',
      healthScore: 100.0,
      latency: '2ms',
      tokens: 'N/A',
      costPerHour: '$2.10',
      errorRate: '0.00%',
      security: 'FIPS 140-3 COMPLIANT',
      deps: ['Hardware Security Module'],
      description: 'Sub-millisecond scheduling fabric for ephemeral micro-agent sandboxes and secure bridges.',
    },
  ];

  const filteredEntities = activeCategory === 'ALL'
    ? entities
    : entities.filter((e) => e.category === activeCategory);

  return (
    <section id="platform" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Layers size={13} />
            <span>UNIFIED SYSTEM TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            One Control Plane. <br />
            <span className="gradient-text-veltrix">Every Agent. Every Dependency.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Gain end-to-end visibility into the full operational fabric powering your autonomous AI systems—from models and tools down to hardware enclaves.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedEntity(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0052FF] text-white font-semibold shadow-[0_0_20px_rgba(0,82,255,0.4)] border border-[#00C2FF]/40'
                  : 'bg-[#060D1F] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Grid & Diagnostics Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Entities Grid (2 Cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredEntities.map((item) => {
              const isSelected = selectedEntity?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedEntity(item)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#060D1F] border-[#00C2FF] shadow-[0_0_30px_rgba(0,194,255,0.25)]'
                      : 'bg-[#060D1F]/70 border-white/10 hover:border-[#00C2FF]/40 hover:bg-[#0A1636]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#38BDF8] border border-white/10">
                      {item.category}
                    </span>
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[#00C2FF] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 font-mono-tech text-[11px]">
                    <div>
                      <span className="text-slate-500 block text-[9px]">LATENCY</span>
                      <span className="text-slate-200 font-semibold">{item.latency}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px]">HEALTH</span>
                      <span className="text-emerald-400 font-semibold">{item.healthScore}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px]">SECURITY</span>
                      <span className="text-[#38BDF8] font-semibold text-[10px] truncate block">{item.security}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Inspection Panel (1 Col) */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
              {selectedEntity ? (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="font-mono-tech text-[10px] text-[#00C2FF] uppercase font-bold tracking-wider">
                        TELEMETRY INSPECTION
                      </span>
                      <h4 className="text-lg font-bold text-white mt-0.5">{selectedEntity.name}</h4>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0052FF]/20 text-[#38BDF8] border border-[#0052FF]/40">
                      <Activity size={18} />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedEntity.description}
                  </p>

                  {/* Real-time Metrics Table */}
                  <div className="space-y-2.5 font-mono-tech text-xs bg-[#030712]/80 p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between">
                      <span className="text-slate-400">HEALTH SCORE</span>
                      <span className="text-emerald-400 font-bold">{selectedEntity.healthScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">LATENCY P99</span>
                      <span className="text-[#38BDF8]">{selectedEntity.latency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">THROUGHPUT</span>
                      <span className="text-white">{selectedEntity.tokens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">EST. RUNTIME COST</span>
                      <span className="text-amber-400">{selectedEntity.costPerHour}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">ERROR RATE</span>
                      <span className="text-emerald-400">{selectedEntity.errorRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">POLICY GROUP</span>
                      <span className="text-purple-400">{selectedEntity.security}</span>
                    </div>
                  </div>

                  {/* Dependencies List */}
                  <div>
                    <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                      DIRECT TOPOLOGY DEPENDENCIES
                    </span>
                    <div className="space-y-1.5">
                      {selectedEntity.deps.map((dep) => (
                        <div
                          key={dep}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 font-mono-tech"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                          <span>{dep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-auto text-center py-12 px-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <Activity size={22} className="text-[#00C2FF]" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">Live Node Inspector</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                    Click any agent, model, tool, RAG or infrastructure node on the left to stream live telemetry, dependencies, and security status.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                <span>POLICIES ENFORCED</span>
                <span className="text-emerald-400">100% OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
