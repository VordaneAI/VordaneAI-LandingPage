import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Play, Pause, RotateCcw, Bot, Cpu, Wrench, Database, MessageSquare, ArrowRight, CheckCircle2, Clock, DollarSign, Activity } from 'lucide-react';

interface TraceStep {
  id: string;
  label: string;
  nodeType: 'USER' | 'AGENT' | 'MODEL' | 'TOOL' | 'RAG' | 'RESPONSE';
  duration: string;
  tokens: string;
  cost: string;
  summary: string;
  payload: {
    title: string;
    thought?: string;
    input?: string;
    output?: string;
    metrics?: Record<string, string>;
  };
}

interface ObservabilitySectionProps {
  onOpenDemo: () => void;
}

export const ObservabilitySection: React.FC<ObservabilitySectionProps> = ({ onOpenDemo }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps: TraceStep[] = [
    {
      id: 'step-0',
      label: 'USER REQUEST',
      nodeType: 'USER',
      duration: '0ms',
      tokens: '48 tok',
      cost: '$0.000',
      summary: 'Prompt Ingestion: "Audit Q3 cloud spending and remediate unattached volume leaks"',
      payload: {
        title: 'User Prompt Received',
        input: 'Audit Q3 cloud spending across all AWS/GCP accounts, flag anomalies >$5,000, and generate Terraform remediation plan.',
        metrics: { 'IP Origin': '192.168.4.102', 'Auth Context': 'Role: Infra-Architect', 'Trace ID': '0x9a8f21e0b' },
      },
    },
    {
      id: 'step-1',
      label: 'AGENT (Planner)',
      nodeType: 'AGENT',
      duration: '42ms',
      tokens: '180 tok',
      cost: '$0.001',
      summary: 'Reasoning: Decompose goal into AWS Cost Explorer query, anomaly filter, and Terraform synthesizer.',
      payload: {
        title: 'Agent Chain of Thought',
        thought: 'Plan initialized. Step 1: Query AWS Cost Explorer via MCP Tool. Step 2: Cross-reference with Postgres inventory. Step 3: Run deterministic cost projection.',
        metrics: { 'Model Bind': 'Claude-3.7-Sonnet', 'Temperature': '0.15', 'Context Window': '128k' },
      },
    },
    {
      id: 'step-2',
      label: 'MODEL (Inference)',
      nodeType: 'MODEL',
      duration: '210ms',
      tokens: '1,420 tok',
      cost: '$0.008',
      summary: 'Prompt Evaluation: Generated structured JSON tool call for aws_cost_explorer_query.',
      payload: {
        title: 'Model Completion & Function Call',
        output: '{\n  "name": "aws_cost_explorer_query",\n  "parameters": {\n    "time_range": "2026-Q3",\n    "threshold_usd": 5000,\n    "group_by": ["SERVICE", "TAG:Environment"]\n  }\n}',
        metrics: { 'TTFT': '82ms', 'Tokens/sec': '88.4', 'Prompt Cache Hit': 'True (85%)' },
      },
    },
    {
      id: 'step-3',
      label: 'TOOL (Execution)',
      nodeType: 'TOOL',
      duration: '95ms',
      tokens: 'N/A',
      cost: '$0.002',
      summary: 'MCP Sandbox Execution: Queried AWS Cost API and returned 14 unattached EBS volumes.',
      payload: {
        title: 'MCP Sandbox Tool Result',
        output: '{\n  "status": "success",\n  "volumes_flagged": 14,\n  "monthly_waste_usd": 12480,\n  "unattached_days_p95": 48\n}',
        metrics: { 'Sandbox Type': 'gVisor MicroVM', 'Exit Code': '0', 'Network Policy': 'SEC-AWS-ONLY' },
      },
    },
    {
      id: 'step-4',
      label: 'RAG (Retrieval)',
      nodeType: 'RAG',
      duration: '18ms',
      tokens: '620 tok',
      cost: '$0.001',
      summary: 'Vector Search: Retrieved enterprise EBS retention policies and Terraform template guidelines.',
      payload: {
        title: 'Vector Knowledge Retrieval',
        output: 'Retrieved 3 chunks from internal infrastructure docs (Cosine Similarity: 0.942, 0.918, 0.895). Enforced compliance tag: auto-expire=true.',
        metrics: { 'Vector Store': 'Qdrant Distributed', 'Embedding Model': 'text-embedding-3-large', 'Rerank Latency': '4ms' },
      },
    },
    {
      id: 'step-5',
      label: 'AGENT (Synthesis)',
      nodeType: 'AGENT',
      duration: '60ms',
      tokens: '450 tok',
      cost: '$0.002',
      summary: 'Synthesis: Formulate HCL Terraform code with safe deletion snapshot triggers.',
      payload: {
        title: 'Multi-Agent State Assembly',
        thought: 'Combining tool telemetry with retrieved retention rules. Generating idempotent Terraform destroy block with automated backup snapshot.',
        metrics: { 'Memory Buffer': 'Clean', 'Guardrails Fired': '0 (Compliant)', 'Confidence': '99.4%' },
      },
    },
    {
      id: 'step-6',
      label: 'MODEL (Final Output)',
      nodeType: 'MODEL',
      duration: '180ms',
      tokens: '980 tok',
      cost: '$0.005',
      summary: 'Final Synthesis: Generated production-ready Terraform patch and executive summary.',
      payload: {
        title: 'Verified Output Generated',
        output: 'resource "aws_ebs_snapshot" "backup_snapshot" {\n  volume_id = each.value.id\n  description = "Pre-cleanup snapshot for Q3 cost remediation"\n}\n\n# Monthly Savings: $12,480 / mo',
        metrics: { 'Code Lint': 'PASSED', 'Hallucination Check': 'PASSED (0.00)', 'Security Scan': 'CLEAR' },
      },
    },
    {
      id: 'step-7',
      label: 'FINAL RESPONSE',
      nodeType: 'RESPONSE',
      duration: '2ms',
      tokens: 'N/A',
      cost: 'Total: $0.019',
      summary: 'Delivered to client with cryptographic trace receipt.',
      payload: {
        title: 'Response Dispatched',
        output: 'Remediation plan ready for operator approval. 14 stale volumes scheduled for snapshot + teardown. Projected $12,480 monthly savings.',
        metrics: { 'Total Latency': '607ms', 'End-to-End SLA': 'PASSED', 'Trace Signed': 'ED25519-OK' },
      },
    },
  ];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % steps.length);
      }, 2600);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const activeStep = steps[activeStepIndex];

  return (
    <section id="observability" className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Eye size={13} />
            <span>FULL-LIFECYCLE OBSERVABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Full Execution Telemetry <br />
            <span className="gradient-text">Inside the Custom Harness.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Black-box agent failures destroy enterprise trust. Veltrix captures the complete, frame-by-frame execution trace inside the purpose-built harness—every reasoning step, tool call, RAG chunk, token expenditure, and latency breakdown.
          </p>
        </div>

        {/* Interactive Trace Inspector Dashboard */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* Top Playback Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs text-white font-bold tracking-wider">
                TRACE-SESSION :: #TRC-8921A
              </span>
              <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                200 OK (607ms)
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono-tech text-xs">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={13} className="text-[#00C2FF]" /> : <Play size={13} className="text-emerald-400" />}
                <span>{isPlaying ? 'Pause Scrubber' : 'Play Trace'}</span>
              </button>

              <button
                onClick={() => setActiveStepIndex(0)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Rewind Trace"
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Timeline Sequence Rail */}
          <div className="relative mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center min-w-[700px] justify-between relative">
              {/* Connecting Line */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/10 -z-0" />

              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveStepIndex(idx);
                    }}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono-tech text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#00C2FF] text-black shadow-[0_0_20px_rgba(0,194,255,0.6)] scale-110'
                          : isPassed
                          ? 'bg-[#0052FF] text-white border border-[#0052FF]'
                          : 'bg-[#060D1F] text-slate-400 border border-white/15 group-hover:border-white/40'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`mt-2 font-mono-tech text-[10px] tracking-wider font-semibold whitespace-nowrap transition-colors ${
                        isActive ? 'text-[#00C2FF]' : 'text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {step.label.split(' ')[0]}
                    </span>
                    <span className="text-[9px] font-mono-tech text-slate-500">{step.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Step Inspector Box */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#030712]/90 p-6 rounded-xl border border-white/10">
            {/* Left Col: Step Overview & Thought */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="font-mono-tech text-xs text-[#00C2FF] font-semibold">
                    STEP {activeStepIndex + 1} OF {steps.length} :: {activeStep.label}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{activeStep.payload.title}</h4>
                </div>
                <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#38BDF8]" />
                    {activeStep.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={12} className="text-emerald-400" />
                    {activeStep.cost}
                  </span>
                </div>
              </div>

              {activeStep.payload.thought && (
                <div>
                  <span className="font-mono-tech text-[10px] text-purple-400 uppercase font-bold tracking-wider block mb-1">
                    AGENT INTERNAL REASONING / REFLECTION:
                  </span>
                  <p className="text-xs text-slate-200 bg-[#060D1F] p-3.5 rounded-lg border border-purple-500/20 leading-relaxed font-mono-tech">
                    {activeStep.payload.thought}
                  </p>
                </div>
              )}

              {activeStep.payload.input && (
                <div>
                  <span className="font-mono-tech text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">
                    RAW PAYLOAD INPUT:
                  </span>
                  <pre className="text-xs text-slate-300 bg-[#060D1F] p-3.5 rounded-lg border border-white/10 font-mono-tech overflow-x-auto whitespace-pre-wrap">
                    {activeStep.payload.input}
                  </pre>
                </div>
              )}

              {activeStep.payload.output && (
                <div>
                  <span className="font-mono-tech text-[10px] text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                    OUTPUT / EXECUTION RESULT:
                  </span>
                  <pre className="text-xs text-emerald-300 bg-[#060D1F] p-3.5 rounded-lg border border-emerald-500/20 font-mono-tech overflow-x-auto whitespace-pre-wrap">
                    {activeStep.payload.output}
                  </pre>
                </div>
              )}
            </div>

            {/* Right Col: Telemetry Metadata */}
            <div className="space-y-4 font-mono-tech text-xs">
              <div className="p-4 rounded-xl bg-[#060D1F] border border-white/10 space-y-2.5">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold border-b border-white/10 pb-1.5">
                  TELEMETRY BENCHMARKS
                </span>
                {activeStep.payload.metrics &&
                  Object.entries(activeStep.payload.metrics).map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">{k}:</span>
                      <span className="text-slate-200 text-[11px] font-semibold">{v}</span>
                    </div>
                  ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30 text-slate-300 space-y-2">
                <span className="text-[#38BDF8] uppercase text-[10px] tracking-wider block font-bold">
                  VELTRIX REAL-TIME INTEGRITY
                </span>
                <p className="text-[11px] text-slate-400 leading-snug font-sans">
                  Deterministic audit hash verified across distributed ledger. Context tampering: 0.00%.
                </p>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center gap-2 text-xs transition-all cursor-pointer font-sans"
              >
                <span>See Veltrix in Action</span>
                <ArrowRight size={13} className="text-[#00C2FF]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
