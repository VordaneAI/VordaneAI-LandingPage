import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Shield, Terminal, Zap, Bot, Cpu, Network, 
  ChevronUp, ChevronDown, Radio, Wifi, Lock, Eye, AlertCircle, ArrowUpRight
} from 'lucide-react';

interface LogEntry {
  id: string;
  time: string;
  agent: string;
  event: string;
  status: 'info' | 'success' | 'warn' | 'secure';
}

export const FloatingHUD: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'logs' | 'health'>('telemetry');
  
  // Real-time fluctuating telemetry metrics
  const [metrics, setMetrics] = useState({
    rps: 8420,
    latency: 18.4,
    tokensPerSec: 142.8,
    errorRate: 0.00,
    activeAgents: 148,
    toolInvocations: 1240,
    meshEgressBlocked: 14,
  });

  // Dynamic log stream
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', time: '22:41:01', agent: 'agent-042', event: 'execution pipeline initialized', status: 'info' },
    { id: '2', time: '22:41:02', agent: 'agent-042', event: 'model inference Claude-3.7 completed', status: 'success' },
    { id: '3', time: '22:41:03', agent: 'agent-042', event: 'tool permission evaluated [POL-019]', status: 'secure' },
    { id: '4', time: '22:41:04', agent: 'agent-042', event: 'firecrawl_crawl sandbox invoked', status: 'info' },
    { id: '5', time: '22:41:05', agent: 'agent-042', event: 'response received (200 OK • 1.2k tok)', status: 'success' },
  ]);

  // Periodic simulated asynchronous stream updates
  useEffect(() => {
    const metricInterval = setInterval(() => {
      setMetrics((prev) => ({
        rps: Math.floor(8400 + Math.random() * 80),
        latency: parseFloat((17.8 + Math.random() * 1.8).toFixed(1)),
        tokensPerSec: parseFloat((140 + Math.random() * 6).toFixed(1)),
        errorRate: 0.00,
        activeAgents: 148 + (Math.random() > 0.7 ? 1 : 0),
        toolInvocations: prev.toolInvocations + Math.floor(Math.random() * 3 + 1),
        meshEgressBlocked: 14,
      }));
    }, 1400);

    const logPool = [
      { agent: 'agent-089', event: 'qdrant_vector_search retrieved 12 chunks (14ms)', status: 'info' },
      { agent: 'agent-014', event: 'zero-trust perimeter verified mTLS 1.3 certificate', status: 'secure' },
      { agent: 'agent-142', event: 'circuit breaker active • nominal load 0.12%', status: 'success' },
      { agent: 'agent-055', event: 'reasoning reflection cycle validated (99.8%)', status: 'success' },
      { agent: 'agent-042', event: 'token budget quota check passed [0.012 USD]', status: 'info' },
      { agent: 'agent-077', event: 'deepseek_r1_local inference stream completed', status: 'success' },
    ];

    let logCounter = 6;
    const logInterval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomItem = logPool[Math.floor(Math.random() * logPool.length)];
      
      const newEntry: LogEntry = {
        id: String(logCounter++),
        time: timeStr,
        agent: randomItem.agent,
        event: randomItem.event,
        status: randomItem.status as any,
      };

      setLogs((prev) => [newEntry, ...prev.slice(0, 5)]);
    }, 2800);

    return () => {
      clearInterval(metricInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-14 right-4 sm:right-6 z-40 select-none max-w-xs sm:max-w-sm w-full hidden md:block">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-[#040817]/90 border border-[#00C2FF]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,194,255,0.2)] overflow-hidden font-mono-tech text-xs"
      >
        {/* Top Floating HUD Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#060D1F] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-white tracking-wider text-[11px]">
              VELTRIX MISSION CONTROL
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#0052FF]/20 text-[#38BDF8] border border-[#00C2FF]/30">
              LIVE OS
            </span>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={isMinimized ? 'Expand HUD' : 'Minimize HUD'}
            >
              {isMinimized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* HUD Navigation Tabs */}
        {!isMinimized && (
          <div className="flex items-center border-b border-white/10 bg-black/40 text-[10px]">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`flex-1 py-1.5 px-2 flex items-center justify-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'text-[#00C2FF] border-b-2 border-[#00C2FF] bg-[#0052FF]/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity size={11} />
              <span>TELEMETRY</span>
            </button>

            <button
              onClick={() => setActiveTab('logs')}
              className={`flex-1 py-1.5 px-2 flex items-center justify-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                activeTab === 'logs'
                  ? 'text-[#00C2FF] border-b-2 border-[#00C2FF] bg-[#0052FF]/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal size={11} />
              <span>LIVE LOGS</span>
            </button>

            <button
              onClick={() => setActiveTab('health')}
              className={`flex-1 py-1.5 px-2 flex items-center justify-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                activeTab === 'health'
                  ? 'text-[#00C2FF] border-b-2 border-[#00C2FF] bg-[#0052FF]/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield size={11} />
              <span>AGENT HEALTH</span>
            </button>
          </div>
        )}

        {/* Tab Contents */}
        {!isMinimized && (
          <div className="p-3">
            {activeTab === 'telemetry' && (
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-500 block">THROUGHPUT</span>
                    <span className="text-sm font-bold text-white">{metrics.rps.toLocaleString()}</span>
                    <span className="text-[9px] text-slate-400 ml-1">req/s</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-500 block">P95 LATENCY</span>
                    <span className="text-sm font-bold text-[#00C2FF]">{metrics.latency}</span>
                    <span className="text-[9px] text-slate-400 ml-1">ms</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-500 block">ACTIVE AGENTS</span>
                    <span className="text-sm font-bold text-emerald-400">{metrics.activeAgents}</span>
                    <span className="text-[9px] text-slate-400 ml-1">mesh</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-slate-500 block">TOOL CALLS</span>
                    <span className="text-sm font-bold text-purple-400">{metrics.toolInvocations}</span>
                    <span className="text-[9px] text-slate-400 ml-1">exec</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-[#02050E] border border-white/10 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Lock size={10} className="text-emerald-400" />
                    SECURITY BOUNDARY:
                  </span>
                  <span className="text-emerald-300 font-bold">100% ISOLATED</span>
                </div>
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1 no-scrollbar">
                <AnimatePresence initial={false}>
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: 20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-1.5 rounded-lg bg-black/50 border border-white/5 text-[10px] leading-tight flex items-start gap-1.5"
                    >
                      <span className="text-slate-500 shrink-0">{log.time}</span>
                      <span className="text-[#38BDF8] shrink-0">[{log.agent}]</span>
                      <span className="text-slate-300 truncate">{log.event}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {activeTab === 'health' && (
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={14} className="text-emerald-400" />
                    <div>
                      <div className="font-bold text-white text-[11px]">AGENT-042 (Orchestrator)</div>
                      <div className="text-[9px] text-emerald-300">Enclave Attested • 99.98%</div>
                    </div>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    HEALTHY
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#02050E] border border-white/10 space-y-1 text-[10px]">
                  <div className="flex justify-between text-slate-400">
                    <span>MEMORY ENCLAVE:</span>
                    <span className="text-white">412 MB / 2 GB</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>CIRCUIT BREAKER:</span>
                    <span className="text-emerald-400">ARMED (0 FAILS)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>IAM ROLE:</span>
                    <span className="text-[#00C2FF]">POL-AUTONOMOUS-RO</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
