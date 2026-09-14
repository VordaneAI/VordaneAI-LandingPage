import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, AlertTriangle, ShieldCheck, Cpu, Database, Wrench, ArrowRight } from 'lucide-react';

export const AgentHealthSection: React.FC = () => {
  const [healthMode, setHealthMode] = useState<'HEALTHY' | 'DEGRADED' | 'CRITICAL'>('HEALTHY');

  const healthData = {
    HEALTHY: {
      score: 99.8,
      statusText: 'ALL SYSTEMS NOMINAL',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      rootCause: 'None. All dependencies operating within SLA (p95: 142ms).',
      metrics: [
        { label: 'Reliability Score', value: '99.8%', status: 'optimal' },
        { label: 'Success Rate', value: '99.94%', status: 'optimal' },
        { label: 'P99 Latency', value: '142ms', status: 'optimal' },
        { label: 'Error Rate', value: '0.01%', status: 'optimal' },
        { label: 'Tool Failures', value: '0 / 10k', status: 'optimal' },
        { label: 'Hallucination Signal', value: '0.00 (Zero)', status: 'optimal' },
        { label: 'Token Consumption', value: 'Nominal', status: 'optimal' },
        { label: 'Cost Drift', value: '+0.2% (Normal)', status: 'optimal' },
      ],
    },
    DEGRADED: {
      score: 72.4,
      statusText: 'LATENCY SPIKE DETECTED',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      rootCause: 'Underlying Vector DB Qdrant cluster experiencing 420ms query tail latency.',
      metrics: [
        { label: 'Reliability Score', value: '72.4%', status: 'warning' },
        { label: 'Success Rate', value: '91.20%', status: 'warning' },
        { label: 'P99 Latency', value: '840ms', status: 'warning' },
        { label: 'Error Rate', value: '4.80%', status: 'warning' },
        { label: 'Tool Failures', value: '18 / 10k', status: 'warning' },
        { label: 'Hallucination Signal', value: '0.08 (Elevated)', status: 'warning' },
        { label: 'Token Consumption', value: '+34% (Retry loop)', status: 'warning' },
        { label: 'Cost Drift', value: '+18.4%', status: 'warning' },
      ],
    },
    CRITICAL: {
      score: 18.2,
      statusText: 'CASCADE COLLAPSE IMMINENT',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      rootCause: 'MCP Code Execution Sandbox crashed with Out-Of-Memory (OOM 137). Recursive retries exhausting token budget.',
      metrics: [
        { label: 'Reliability Score', value: '18.2%', status: 'danger' },
        { label: 'Success Rate', value: '34.00%', status: 'danger' },
        { label: 'P99 Latency', value: '4,820ms', status: 'danger' },
        { label: 'Error Rate', value: '42.60%', status: 'danger' },
        { label: 'Tool Failures', value: '412 / 10k', status: 'danger' },
        { label: 'Hallucination Signal', value: '0.64 (High Risk)', status: 'danger' },
        { label: 'Token Consumption', value: '+410% (Amplification loop)', status: 'danger' },
        { label: 'Cost Drift', value: '+$84.20/hr', status: 'danger' },
      ],
    },
  };

  const current = healthData[healthMode];

  return (
    <section id="health" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <HeartPulse size={13} />
            <span>PREDICTIVE AGENT HEALTH & DEGRADATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Know When an Agent Is Dying <br />
            <span className="gradient-text">Before Your Users Do.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Silent degradation is the #1 cause of agent system failure. Veltrix monitors 14 orthogonal health telemetry vectors to pin root-cause dependencies before failures impact end users.
          </p>
        </div>

        {/* Interactive 3-State Health Console */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* State Switcher Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="font-mono-tech text-xs text-slate-400 block mb-1">
                INTERACTIVE SIMULATOR :: SELECT FLEET HEALTH STATE
              </span>
              <h3 className="text-lg font-bold text-white">Agent Health Spectrum Evaluation</h3>
            </div>

            <div className="flex items-center gap-2 bg-[#030712] p-1.5 rounded-xl border border-white/10">
              {(['HEALTHY', 'DEGRADED', 'CRITICAL'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setHealthMode(mode)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono-tech text-xs font-semibold transition-all cursor-pointer ${
                    healthMode === mode
                      ? mode === 'HEALTHY'
                        ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : mode === 'DEGRADED'
                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                        : 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Big Health Banner */}
          <div className={`p-6 rounded-2xl ${current.bg} ${current.border} border mb-8 transition-all duration-300`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold tracking-widest uppercase mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${healthMode === 'HEALTHY' ? 'bg-emerald-400' : healthMode === 'DEGRADED' ? 'bg-amber-400' : 'bg-rose-400 animate-ping'}`} />
                  <span className={current.color}>{current.statusText}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Fleet Overall Health: <span className={current.color}>{current.score}%</span>
                </h4>
                <div className="mt-3 text-xs text-slate-300 font-mono-tech flex items-center gap-2">
                  <strong className="text-white uppercase">Root Cause Analysis:</strong>
                  <span>{current.rootCause}</span>
                </div>
              </div>

              <div className="text-left md:text-right flex-shrink-0">
                <div className="font-mono-tech text-[10px] text-slate-400 uppercase">AUTONOMOUS MITIGATION</div>
                <div className="text-sm font-bold text-white mt-1">
                  {healthMode === 'HEALTHY' ? 'Continuous Proactive Telemetry' : healthMode === 'DEGRADED' ? 'Traffic Throttling & Fallback Model' : 'Circuit Breaker Auto-Trip & Isolation'}
                </div>
              </div>
            </div>
          </div>

          {/* 8-Grid Metrics Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-tech text-xs">
            {current.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-[#060D1F] border border-white/10">
                <span className="text-[10px] text-slate-400 block uppercase mb-1.5">{metric.label}</span>
                <span
                  className={`text-lg font-bold ${
                    metric.status === 'optimal'
                      ? 'text-emerald-400'
                      : metric.status === 'warning'
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
