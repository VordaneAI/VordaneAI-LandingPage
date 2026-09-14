import React, { useState } from 'react';
import { 
  Boxes, 
  Share2, 
  KeyRound, 
  CheckCircle2, 
  FileJson, 
  Radio, 
  ToggleLeft, 
  ToggleRight,
  Code2,
  ExternalLink,
  ChevronRight,
  Terminal
} from 'lucide-react';

interface ToolItem {
  name: string;
  server: string;
  type: string;
  active: boolean;
  schema: string;
}

export function McpHubSection() {
  const [tools, setTools] = useState<ToolItem[]>([
    {
      name: 'github_create_pr',
      server: 'github-mcp-enterprise',
      type: 'HTTP / SSE',
      active: true,
      schema: '{\n  "title": "string",\n  "head": "string",\n  "base": "main",\n  "body": "string"\n}'
    },
    {
      name: 'postgres_query_readonly',
      server: 'db-warehouse-mcp',
      type: 'SSE Endpoint',
      active: true,
      schema: '{\n  "query": "SELECT * FROM orders WHERE ...",\n  "timeout_ms": 5000\n}'
    },
    {
      name: 'kubernetes_rollout_status',
      server: 'k8s-cluster-mcp',
      type: 'HTTP / SSE',
      active: false,
      schema: '{\n  "namespace": "production",\n  "deployment": "api-gateway"\n}'
    },
    {
      name: 'platform_call_agent',
      server: 'vordane-platform-gateway',
      type: 'Native MCP Gateway /sse',
      active: true,
      schema: '{\n  "agent_id": "secops-auditor",\n  "prompt": "Evaluate CIDR rules",\n  "session_token": "bearer-..."\n}'
    }
  ]);

  const [selectedTool, setSelectedTool] = useState<ToolItem>(tools[0]);

  const toggleTool = (name: string) => {
    setTools(tools.map(t => t.name === name ? { ...t, active: !t.active } : t));
    if (selectedTool.name === name) {
      setSelectedTool({ ...selectedTool, active: !selectedTool.active });
    }
  };

  return (
    <section id="mcp" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>MODEL CONTEXT PROTOCOL (MCP) ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Universal MCP Server Registry & Platform Gateway
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Register custom or 3rd-party MCP servers via HTTP and SSE. Discover tools dynamically with JSON schemas, attach them to governed agents, and expose the platform itself as an MCP server.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bento Item 1: Native Platform MCP Server (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0A0F1D] border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  NATIVE PROTOCOL GATEWAY
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono-tech">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  SSE: /api/sse
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Platform as an MCP Server</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                External clients like Cursor, Claude Desktop, and enterprise orchestrators can invoke governed Vordane agents natively over SSE endpoints.
              </p>

              {/* Exposed Tools List */}
              <div className="space-y-2 mb-4">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.08] font-mono-tech text-xs">
                  <div className="text-cyan-400 font-bold">list_agents()</div>
                  <div className="text-[11px] text-slate-400">Discover all active agents filtered by caller RBAC</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.08] font-mono-tech text-xs">
                  <div className="text-cyan-400 font-bold">get_agent(agent_id)</div>
                  <div className="text-[11px] text-slate-400">Fetch agent metadata, health score, and attached tools</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.08] font-mono-tech text-xs">
                  <div className="text-cyan-400 font-bold">call_agent(agent_id, prompt)</div>
                  <div className="text-[11px] text-slate-400">Execute prompt within target network space & stream result</div>
                </div>
              </div>
            </div>

            {/* Quick curl command */}
            <div className="p-3 rounded-xl bg-slate-950 border border-white/[0.06] font-mono-tech text-[11px] text-slate-300">
              <div className="text-slate-500 text-[10px] uppercase mb-1">Cursor / Claude SSE Connect</div>
              <code>curl -N https://vordane.internal/api/sse \<br />&nbsp;&nbsp;-H "Authorization: Bearer vrd_live_..."</code>
            </div>
          </div>

          {/* Bento Item 2: Dynamic Tool Discovery & Schema Inspector (Right 7 Cols) */}
          <div className="lg:col-span-7 glass-card border border-white/10 p-6 rounded-2xl bg-[#090E1F]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-bold text-white">Dynamic Tool Registry</h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Automatic schema cataloging & per-agent tool binding
                </div>
              </div>

              <div className="text-xs font-mono-tech text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
                {tools.filter(t => t.active).length} Tools Active
              </div>
            </div>

            {/* Tool List with Toggles */}
            <div className="mt-4 space-y-2.5">
              {tools.map((tool) => {
                const isSelected = selectedTool.name === tool.name;
                return (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedTool(tool)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/50'
                        : 'bg-slate-900/50 border-white/[0.06] hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 border border-white/10">
                        <Boxes className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono-tech text-xs font-bold text-white">
                          {tool.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Server: <span className="text-slate-300 font-mono-tech">{tool.server}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline font-mono-tech text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-white/[0.06]">
                        {tool.type}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTool(tool.name);
                        }}
                        className="text-slate-300 hover:text-white cursor-pointer"
                        title="Toggle tool activation"
                      >
                        {tool.active ? (
                          <ToggleRight className="w-6 h-6 text-cyan-400" />
                        ) : (
                          <ToggleLeft className="w-6 h-6 text-slate-500" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Tool JSON Schema View */}
            <div className="mt-5 p-4 rounded-xl bg-black/60 border border-white/[0.06]">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono-tech mb-2">
                <span className="flex items-center gap-1.5">
                  <FileJson className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Input JSON Schema: {selectedTool.name}</span>
                </span>
                <span className="text-[10px] text-slate-500">Auto-generated via MCP introspection</span>
              </div>
              <pre className="text-xs font-mono-tech text-cyan-200 overflow-x-auto p-2 bg-slate-950/80 rounded border border-white/[0.04]">
                {selectedTool.schema}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
