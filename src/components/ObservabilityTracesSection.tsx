import React, { useState } from 'react';
import { 
  Activity, 
  Clock, 
  FileCode2, 
  Coins, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface SpanItem {
  id: string;
  name: string;
  service: string;
  durationMs: number;
  offsetMs: number;
  status: 'OK' | 'ERROR';
  modelId?: string;
  inputTokens?: number;
  outputTokens?: number;
  inputPayload: string;
  outputPayload: string;
}

export function ObservabilityTracesSection() {
  const spans: SpanItem[] = [
    {
      id: 'span-01',
      name: 'Agent Execution Root: secops-eval',
      service: 'vordane-orchestrator',
      durationMs: 184,
      offsetMs: 0,
      status: 'OK',
      inputPayload: '{\n  "event": "audit_scheduled",\n  "space": "Prod-SecOps",\n  "target_nodes": 8\n}',
      outputPayload: '{\n  "status": "completed",\n  "remediated_nodes": 0,\n  "findings": []\n}'
    },
    {
      id: 'span-02',
      name: 'LLM Planning & CoT: gemini-2.0-flash',
      service: 'model-gateway',
      durationMs: 112,
      offsetMs: 12,
      status: 'OK',
      modelId: 'google/gemini-2.0-flash',
      inputTokens: 1420,
      outputTokens: 280,
      inputPayload: '{\n  "system": "You are Vordane SecOps Auditor...",\n  "prompt": "Evaluate CIDR table 10.240.10.0/24"\n}',
      outputPayload: '{\n  "reasoning": "Inspecting gateway routes for namespace isolation...",\n  "tool_call": "fetch_route_table"\n}'
    },
    {
      id: 'span-03',
      name: 'MCP Tool: fetch_route_table',
      service: 'mcp-network-hub',
      durationMs: 34,
      offsetMs: 126,
      status: 'OK',
      inputPayload: '{\n  "cidr": "10.240.10.0/24",\n  "include_internal": true\n}',
      outputPayload: '{\n  "routes": [\n    {"dest": "10.240.10.1", "state": "bound"}\n  ]\n}'
    },
    {
      id: 'span-04',
      name: 'Policy Engine Evaluation',
      service: 'vordane-rbac-guard',
      durationMs: 18,
      offsetMs: 162,
      status: 'OK',
      inputPayload: '{\n  "policy_id": "strict-secops-v1",\n  "requested_action": "route_inspect"\n}',
      outputPayload: '{\n  "decision": "ALLOW",\n  "cached": true\n}'
    }
  ];

  const [selectedSpan, setSelectedSpan] = useState<SpanItem>(spans[1]);

  return (
    <section id="observability" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Observability, Distributed Traces & Spans
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Record complete end-to-end execution traces across your multi-agent mesh. Inspect granular latency waterfalls, token consumption, and input/output JSON payloads per span.
          </p>
        </div>

        {/* Trace Waterfall Container */}
        <div className="glass-card border border-white/10 rounded-2xl bg-[#090E1F] p-6 shadow-2xl">
          {/* Top Bar with Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-white">Trace: tr-secops-mesh-9921b</div>
                <div className="text-xs font-mono-tech text-slate-400">Agent Space: Prod-SecOps | Status: HTTP 200 OK</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-tech">
              <div className="px-3 py-1 rounded-lg bg-slate-900 border border-white/[0.08]">
                <span className="text-slate-500">TOTAL DURATION:</span> <strong className="text-white">184ms</strong>
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-900 border border-white/[0.08]">
                <span className="text-slate-500">TOTAL TOKENS:</span> <strong className="text-cyan-300">1,700 tokens</strong>
              </div>
            </div>
          </div>

          {/* 2-Column Split: Waterfall Visualizer & Span Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
            {/* Waterfall Gantt Chart (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex justify-between">
                <span>Operation Spans</span>
                <span className="font-mono-tech text-[11px] text-slate-500">Scale: 0ms to 200ms</span>
              </div>

              {spans.map((span) => {
                const isSelected = selectedSpan.id === span.id;
                const widthPercent = Math.max(10, (span.durationMs / 184) * 100);
                const leftPercent = (span.offsetMs / 184) * 100;

                return (
                  <div
                    key={span.id}
                    onClick={() => setSelectedSpan(span)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/60'
                        : 'bg-slate-900/40 border-white/[0.06] hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-white truncate max-w-[280px]">
                        {span.name}
                      </span>
                      <span className="font-mono-tech text-cyan-300 font-semibold">
                        {span.durationMs}ms
                      </span>
                    </div>

                    {/* Visual Gantt Bar */}
                    <div className="w-full bg-slate-950 h-2 rounded-full relative overflow-hidden">
                      <div
                        className="absolute h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                        style={{
                          left: `${leftPercent}%`,
                          width: `${widthPercent}%`
                        }}
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                      <span>{span.service}</span>
                      {span.inputTokens && (
                        <span className="text-slate-300">
                          {span.inputTokens + (span.outputTokens || 0)} tokens
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Span Payload & Metric Inspector (Right 5 Cols) */}
            <div className="lg:col-span-5 p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono-tech text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                <span className="font-bold text-white text-xs">Span Details</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                  {selectedSpan.id}
                </span>
              </div>

              {selectedSpan.modelId && (
                <div className="mb-3 p-2.5 rounded bg-slate-900/80 border border-white/[0.06] space-y-1">
                  <div className="text-slate-400 text-[10px]">FOUNDATION MODEL</div>
                  <div className="text-white font-bold">{selectedSpan.modelId}</div>
                  <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                    <span>Input: {selectedSpan.inputTokens} toks</span>
                    <span>Output: {selectedSpan.outputTokens} toks</span>
                  </div>
                </div>
              )}

              {/* JSON Input */}
              <div className="space-y-1 mb-3">
                <div className="text-[10px] text-slate-400 uppercase">Input Payload JSON</div>
                <pre className="p-2 rounded bg-slate-950 text-cyan-200 text-[11px] overflow-x-auto border border-white/[0.04]">
                  {selectedSpan.inputPayload}
                </pre>
              </div>

              {/* JSON Output */}
              <div className="space-y-1">
                <div className="text-[10px] text-slate-400 uppercase">Output Payload JSON</div>
                <pre className="p-2 rounded bg-slate-950 text-emerald-200 text-[11px] overflow-x-auto border border-white/[0.04]">
                  {selectedSpan.outputPayload}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
