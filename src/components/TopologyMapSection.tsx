import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  Filter, 
  Cpu, 
  ShieldCheck, 
  Boxes, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  Info,
  Layers
} from 'lucide-react';

interface TopologyNode {
  id: string;
  label: string;
  layer: 'Space' | 'Agent' | 'Policy' | 'MCP' | 'Model';
  space: string;
  status: 'Healthy' | 'Active' | 'Enforced';
  description: string;
  dependencies: string[];
}

export function TopologyMapSection() {
  const [selectedSpaceFilter, setSelectedSpaceFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const nodes: TopologyNode[] = [
    {
      id: 'space-secops',
      label: 'Prod-SecOps Space',
      layer: 'Space',
      space: 'Prod-SecOps',
      status: 'Healthy',
      description: 'CIDR 10.240.10.0/24 with strict egress filtering',
      dependencies: ['agent-secops']
    },
    {
      id: 'space-finance',
      label: 'Finance-Enclave',
      layer: 'Space',
      space: 'Finance-Enclave',
      status: 'Healthy',
      description: 'CIDR 10.240.20.0/24 with air-gapped ledger proxy',
      dependencies: ['agent-auditor']
    },
    {
      id: 'agent-secops',
      label: 'secops-analyzer-v1',
      layer: 'Agent',
      space: 'Prod-SecOps',
      status: 'Active',
      description: 'Autonomous vulnerability remediation and container inspector',
      dependencies: ['policy-strict', 'mcp-k8s', 'model-gemini']
    },
    {
      id: 'agent-auditor',
      label: 'ledger-auditor-r2',
      layer: 'Agent',
      space: 'Finance-Enclave',
      status: 'Active',
      description: 'Financial ledger verification and double-entry reconciliation',
      dependencies: ['policy-pci', 'mcp-postgres', 'model-claude']
    },
    {
      id: 'policy-strict',
      label: 'Strict-SecOps-RBAC',
      layer: 'Policy',
      space: 'Prod-SecOps',
      status: 'Enforced',
      description: 'Zero destructive execution. Whitelists k8s query tools.',
      dependencies: ['mcp-k8s']
    },
    {
      id: 'policy-pci',
      label: 'PCI-DSS-Policy-v4',
      layer: 'Policy',
      space: 'Finance-Enclave',
      status: 'Enforced',
      description: 'Enforces read-only database connections and masked PII output',
      dependencies: ['mcp-postgres']
    },
    {
      id: 'mcp-k8s',
      label: 'MCP: Kubernetes Cluster',
      layer: 'MCP',
      space: 'Prod-SecOps',
      status: 'Healthy',
      description: 'SSE MCP server exposing read-only pod and network diagnostics',
      dependencies: ['model-gemini']
    },
    {
      id: 'mcp-postgres',
      label: 'MCP: ReadOnly Postgres',
      layer: 'MCP',
      space: 'Finance-Enclave',
      status: 'Healthy',
      description: 'HTTP MCP server with parameterized query introspection',
      dependencies: ['model-claude']
    },
    {
      id: 'model-gemini',
      label: 'Gemini 2.0 Flash',
      layer: 'Model',
      space: 'Prod-SecOps',
      status: 'Active',
      description: 'Primary reasoning model for low-latency triage (142ms avg)',
      dependencies: []
    },
    {
      id: 'model-claude',
      label: 'Claude 3.5 Sonnet',
      layer: 'Model',
      space: 'Finance-Enclave',
      status: 'Active',
      description: 'High-assurance mathematical and reconciliation reasoning',
      dependencies: []
    }
  ];

  const [activeNode, setActiveNode] = useState<TopologyNode>(nodes[2]);

  const filteredNodes = nodes.filter(n => {
    const matchesSpace = selectedSpaceFilter === 'all' || n.space === selectedSpaceFilter;
    const matchesSearch = n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.layer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpace && matchesSearch;
  });

  const getLayerColor = (layer: string) => {
    switch (layer) {
      case 'Space': return 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30';
      case 'Agent': return 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30';
      case 'Policy': return 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30';
      case 'MCP': return 'border-amber-500/40 text-amber-300 bg-amber-950/30';
      case 'Model': return 'border-purple-500/40 text-purple-300 bg-purple-950/30';
      default: return 'border-slate-700 text-slate-300 bg-slate-900';
    }
  };

  return (
    <section id="topology" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-4">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span>2D NODE-LINK SERVICE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Interactive Service Map & Topology Visualization
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Visualize interconnected relationships across your multi-agent architecture: Spaces to Agents to Policies to Permissions to MCP Servers to Tools to Models.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-slate-900/60 border border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-300">Filter by Space:</span>
            <button
              onClick={() => setSelectedSpaceFilter('all')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedSpaceFilter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Spaces
            </button>
            <button
              onClick={() => setSelectedSpaceFilter('Prod-SecOps')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedSpaceFilter === 'Prod-SecOps'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prod-SecOps
            </button>
            <button
              onClick={() => setSelectedSpaceFilter('Finance-Enclave')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedSpaceFilter === 'Finance-Enclave'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Finance-Enclave
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topology nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60 w-56 font-mono-tech"
            />
          </div>
        </div>

        {/* 2-Column Split: Interactive Canvas & Node Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Topology Canvas (Left 8 Cols) */}
          <div className="lg:col-span-8 glass-card border border-white/10 p-6 rounded-2xl bg-[#090E1F] shadow-2xl relative min-h-[440px]">
            {/* Legend */}
            <div className="flex flex-wrap gap-4 pb-4 border-b border-white/[0.06] text-[11px] font-mono-tech">
              <span className="flex items-center gap-1 text-cyan-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Space
              </span>
              <span className="flex items-center gap-1 text-indigo-300">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Agent
              </span>
              <span className="flex items-center gap-1 text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Policy
              </span>
              <span className="flex items-center gap-1 text-amber-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> MCP Hub
              </span>
              <span className="flex items-center gap-1 text-purple-300">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Model
              </span>
            </div>

            {/* Node Grid Layout */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {filteredNodes.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${getLayerColor(node.layer)} ${
                      isSelected
                        ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                        : 'opacity-90 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] uppercase tracking-wider font-mono-tech font-bold px-1.5 py-0.5 rounded bg-black/40">
                        {node.layer}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="font-bold text-xs text-white truncate">
                      {node.label}
                    </div>

                    <div className="text-[10px] text-slate-400 mt-1 font-mono-tech truncate">
                      {node.space}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Architecture Relationship Footnote */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
              <span>Interactive Graph: Click any node to inspect attached subgraphs</span>
              <span className="text-cyan-400">Live Socket: Connected</span>
            </div>
          </div>

          {/* Node Inspector Modal Panel (Right 4 Cols) */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl font-mono-tech text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white text-xs">Node Inspector</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] border border-cyan-500/20">
                {activeNode.layer}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Selected Entity</div>
                <div className="text-sm font-bold text-white mt-0.5">{activeNode.label}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Namespace Scope</div>
                <div className="text-cyan-300 mt-0.5">{activeNode.space}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Runtime Status</div>
                <div className="text-emerald-400 flex items-center gap-1.5 mt-0.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{activeNode.status}</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Configuration Summary</div>
                <div className="text-slate-300 text-[11px] mt-0.5 leading-relaxed font-sans">
                  {activeNode.description}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase mb-1.5">Direct Connected Dependencies</div>
                <div className="space-y-1">
                  {activeNode.dependencies.length > 0 ? (
                    activeNode.dependencies.map(dep => (
                      <div key={dep} className="px-2 py-1 rounded bg-black/40 border border-white/[0.04] text-[11px] text-slate-300">
                        &rarr; {dep}
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-500 text-[10px]">Terminal Node (No downstream edges)</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
