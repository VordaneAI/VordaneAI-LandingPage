import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Radar, Bot, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Wrench, Database, Network } from 'lucide-react';

interface DiscoveredAgent {
  name: string;
  framework: string;
  cluster: string;
  deps: string[];
  status: string;
  riskScore: string;
}

interface AgentDiscoverySectionProps {
  onOpenWaitlist: () => void;
}

export const AgentDiscoverySection: React.FC<AgentDiscoverySectionProps> = ({ onOpenWaitlist }) => {
  const [scanning, setScanning] = useState(true);
  const [discoveredList, setDiscoveredList] = useState<DiscoveredAgent[]>([]);

  const fullAgentsList: DiscoveredAgent[] = [
    {
      name: 'Agent / Customer Support Orchestrator',
      framework: 'LangGraph v0.2 • Python 3.12',
      cluster: 'k8s-prod-us-east-1',
      deps: ['Claude 3.7', 'Zendesk MCP', 'Vector Store'],
      status: 'AUTO-INDEXED',
      riskScore: 'LOW (SEC-A)',
    },
    {
      name: 'Agent / Autonomous Research Swarm',
      framework: 'Custom Multi-Agent • TypeScript',
      cluster: 'nomad-compute-us-west',
      deps: ['GPT-4o', 'Tavily Search Tool', 'Pinecone RAG'],
      status: 'AUTO-INDEXED',
      riskScore: 'SECURED',
    },
    {
      name: 'Agent / Fraud & Anomaly Sentinel',
      framework: 'CrewAI • Air-Gapped MicroVM',
      cluster: 'enclave-sec-01',
      deps: ['DeepSeek R1', 'Stripe Auth API', 'PgVector'],
      status: 'AUTO-INDEXED',
      riskScore: 'HARDENED',
    },
    {
      name: 'Agent / Enterprise Data Analyst',
      framework: 'LlamaIndex • Python',
      cluster: 'aws-ecs-analytics',
      deps: ['Claude 3.5 Sonnet', 'Snowflake Tool', 'Redis Cache'],
      status: 'AUTO-INDEXED',
      riskScore: 'MONITORED',
    },
    {
      name: 'Agent / Autonomous Code Orchestrator',
      framework: 'Autogen Swarm • Rust MicroVM',
      cluster: 'gpu-worker-pool-04',
      deps: ['Claude 3.7', 'GitHub API', 'Docker Sandbox'],
      status: 'AUTO-INDEXED',
      riskScore: 'SANDBOXED',
    },
  ];

  useEffect(() => {
    let timer: any;
    if (scanning) {
      setDiscoveredList([]);
      fullAgentsList.forEach((agent, idx) => {
        timer = setTimeout(() => {
          setDiscoveredList((prev) => [...prev, agent]);
          if (idx === fullAgentsList.length - 1) {
            setScanning(false);
          }
        }, (idx + 1) * 800);
      });
    }
    return () => clearTimeout(timer);
  }, [scanning]);

  const restartScan = () => {
    setScanning(true);
  };

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00C2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Radar size={13} className="animate-spin" />
            <span>AUTONOMOUS AGENT DISCOVERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Discover Every Agent. <br />
            <span className="gradient-text">Even the Ones You Didn't Know Existed.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Shadow AI agents and unauthorized tool connections proliferate rapidly. Veltrix continuously scans your Kubernetes clusters, serverless pools, and microVMs to map every agent, tool, and model dependency in real time.
          </p>
        </div>

        {/* Scanner Simulation Window */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl mb-12">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#00C2FF] animate-ping" />
              <span className="font-mono-tech text-xs text-white font-bold tracking-wider">
                {scanning ? 'SCANNING ENVIRONMENT (AWS / GCP / K8s / Nomad)...' : 'ORGANIZATION-WIDE SCAN COMPLETE'}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono-tech text-xs">
              <span className="text-slate-400">
                AGENTS LOCATED: <strong className="text-[#38BDF8]">{discoveredList.length} / 5</strong>
              </span>
              <button
                onClick={restartScan}
                disabled={scanning}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-all cursor-pointer disabled:opacity-50"
              >
                {scanning ? 'Scanning...' : 'Re-scan Environment'}
              </button>
            </div>
          </div>

          {/* Discovered Items List */}
          <div className="space-y-3">
            <AnimatePresence>
              {discoveredList.map((agent) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, x: -20, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="p-4 rounded-xl bg-[#060D1F]/90 border border-white/10 hover:border-[#00C2FF]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] mt-0.5 sm:mt-0">
                      <Bot size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{agent.name}</span>
                        <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {agent.status}
                        </span>
                      </div>
                      <div className="font-mono-tech text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                        <span>{agent.framework}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[#38BDF8]">{agent.cluster}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dependencies Badges */}
                  <div className="flex flex-wrap items-center gap-2 font-mono-tech text-[11px]">
                    <span className="text-slate-500 text-[10px] uppercase">DEPS:</span>
                    {agent.deps.map((dep) => (
                      <span
                        key={dep}
                        className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {dep}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                      {agent.riskScore}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Multi-Agent Discovery Section Box */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <Network size={18} className="text-[#00C2FF]" />
                  <span>Multi-Agent Swarm Discovery & Orchestration Maps</span>
                </h4>
                <p className="text-slate-400 text-xs mt-1 max-w-2xl leading-relaxed">
                  Veltrix automatically tracks inter-agent delegation protocols, swarm gossip channels, and recursive tool handoffs to reveal the true topology of multi-agent collaboration.
                </p>
              </div>

              <button
                onClick={onOpenWaitlist}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/15 flex items-center gap-2 transition-all cursor-pointer flex-shrink-0"
              >
                <span>Get Early Access</span>
                <ArrowRight size={14} className="text-[#00C2FF]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
