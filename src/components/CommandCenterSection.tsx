import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, ShieldCheck, AlertOctagon, Database, DollarSign, Bot, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CommandCenterSectionProps {
  onOpenDemo: () => void;
}

export const CommandCenterSection: React.FC<CommandCenterSectionProps> = ({ onOpenDemo }) => {
  const [logs, setLogs] = useState([
    { id: 1, time: '22:36:12', agent: 'Orchestrator-α', event: 'Step 4 completed: Verified 14 EBS volumes.', status: 'OK', color: 'text-emerald-400' },
    { id: 2, time: '22:36:10', agent: 'Research Swarm', event: 'Retrieved 8 chunks from Qdrant vector mesh.', status: '200', color: 'text-[#38BDF8]' },
    { id: 3, time: '22:36:08', agent: 'Security Gateway', event: 'Blocked unauthenticated egress attempt to port 5432.', status: 'DENIED', color: 'text-rose-400' },
    { id: 4, time: '22:36:05', agent: 'Financial Guard', event: 'Verified ED25519 signature on Stripe payout payload.', status: 'PASSED', color: 'text-emerald-400' },
    { id: 5, time: '22:36:01', agent: 'Data Analyst', event: 'Synthesized SQL query with automated PII masking.', status: 'OK', color: 'text-[#00C2FF]' },
  ]);

  useEffect(() => {
    const events = [
      { agent: 'Orchestrator-α', event: 'Delegated task #891 to Synthesizer MicroVM.', status: 'OK', color: 'text-emerald-400' },
      { agent: 'RAG Sentinel', event: 'Scanned 120 newly ingested PDF chunks. Zero drift.', status: 'CLEAN', color: 'text-emerald-400' },
      { agent: 'MCP Sandbox', event: 'Executed containerized Python sandbox in 64ms.', status: 'EXIT 0', color: 'text-[#38BDF8]' },
      { agent: 'Security Perimeter', event: 'Rate limit applied to external webhook #490.', status: 'THROTTLED', color: 'text-amber-400' },
    ];

    const interval = setInterval(() => {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setLogs((prev) => [
        { id: Date.now(), time: timeStr, agent: randomEvent.agent, event: randomEvent.event, status: randomEvent.status, color: randomEvent.color },
        ...prev.slice(0, 5),
      ]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const overviewStats = [
    { label: 'AGENTS ACTIVE', value: '127', icon: Bot, color: 'text-[#00C2FF]' },
    { label: 'FLEET HEALTH', value: '98.2%', icon: Activity, color: 'text-emerald-400' },
    { label: 'ACTIVE RUNS', value: '4,281', icon: Activity, color: 'text-[#38BDF8]' },
    { label: 'FAILURES MITIGATED', value: '03', icon: AlertOctagon, color: 'text-rose-400' },
    { label: 'SECURITY SCORE', value: '99.1%', icon: ShieldCheck, color: 'text-purple-400' },
    { label: 'CURRENT RUNTIME COST', value: '$182.42', icon: DollarSign, color: 'text-amber-400' },
  ];

  return (
    <section id="command-center" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Terminal size={13} />
            <span>MISSION CONTROL INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Production Command Center. <br />
            <span className="gradient-text">Space-Grade Operational Visibility.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Monitor real-time agent execution feeds, security firehoses, token costs, and cascade health from a single high-performance cockpit.
          </p>
        </div>

        {/* The Big Command Center Dashboard Window */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-rose-400" />
              </div>
              <span className="font-mono-tech text-xs text-white font-bold tracking-wider">
                VELTRIX ENTERPRISE COCKPIT v2.4 (LIVE STREAM)
              </span>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0052FF] via-[#0088FF] to-[#00C2FF] text-white font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,194,255,0.3)]"
            >
              <span>Request a Demo</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 6 KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-[#060D1F] border border-white/10 text-left font-mono-tech">
                <span className="text-[10px] text-slate-400 block uppercase mb-1">{stat.label}</span>
                <span className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Real-time Scrolling Event Stream & Visualizers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Logs (2 Cols) */}
            <div className="lg:col-span-2 bg-[#030712]/90 p-5 rounded-xl border border-white/10 font-mono-tech text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-[#00C2FF] font-bold uppercase tracking-wider text-[11px]">
                    ● REAL-TIME AGENT ACTIVITY FEED
                  </span>
                  <span className="text-slate-500 text-[10px]">BUFFER: 1000 EVENT FIFO</span>
                </div>

                <div className="space-y-2.5">
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className="p-2.5 rounded-lg bg-[#060D1F] border border-white/5 flex items-center justify-between gap-3 text-[11px]"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <span className="text-slate-500 text-[10px] flex-shrink-0">{log.time}</span>
                        <span className="text-white font-bold flex-shrink-0">[{log.agent}]</span>
                        <span className="text-slate-300 truncate font-sans">{log.event}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 flex-shrink-0 ${log.color}`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                <span>INGESTION RATE: 4.8K OPS/SEC</span>
                <span className="text-emerald-400">ZERO PACKET LOSS</span>
              </div>
            </div>

            {/* Side Radar Widgets (1 Col) */}
            <div className="space-y-4 font-mono-tech text-xs">
              <div className="p-4 rounded-xl bg-[#060D1F] border border-white/10">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold mb-2">
                  SECURITY FIREHOSE
                </span>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Adversarial Probes (24h):</span>
                    <span className="text-emerald-400 font-bold">142 (100% BLOCKED)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Active Enclave Tunnels:</span>
                    <span className="text-white">94 Verified</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Policy Drift:</span>
                    <span className="text-emerald-400">0.00%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060D1F] border border-white/10">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold mb-2">
                  RAG RETRIEVAL RADAR
                </span>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Average Cosine Score:</span>
                    <span className="text-[#38BDF8] font-bold">0.932</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Poisoned Chunks Isolated:</span>
                    <span className="text-rose-400 font-bold">02 Chunks</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>P99 Vector Latency:</span>
                    <span className="text-emerald-400">18ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
