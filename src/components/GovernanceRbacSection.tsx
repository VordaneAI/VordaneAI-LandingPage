import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  AlertOctagon, 
  CheckCircle, 
  XCircle, 
  SlidersHorizontal,
  Key,
  Shield,
  FileCheck2,
  Terminal
} from 'lucide-react';

interface PolicyRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  blockedPatterns: string[];
}

export function GovernanceRbacSection() {
  const policies: PolicyRole[] = [
    {
      id: 'readonly-analyst',
      name: 'Tier-1 ReadOnly Analyst',
      description: 'Restricted policy allowing read and query tool calls with zero state alteration.',
      permissions: ['mcp:postgres:select', 'mcp:github:get_issue', 'mcp:datadog:query'],
      blockedPatterns: ['mcp:postgres:drop_*', 'mcp:aws:delete_*', 'mcp:payments:transfer']
    },
    {
      id: 'secops-operator',
      name: 'SecOps Remediation Operator',
      description: 'Permitted to isolate compromised hosts and patch firewall configurations.',
      permissions: ['mcp:cluster:restart_container', 'mcp:firewall:block_ip', 'mcp:slack:post_alert'],
      blockedPatterns: ['mcp:postgres:drop_*', 'mcp:payments:transfer', 'mcp:iam:create_root']
    },
    {
      id: 'finance-escrow',
      name: 'Financial Ledger Auditor',
      description: 'Permitted to reconcile accounts, restricted from executing unilateral wire transfers.',
      permissions: ['mcp:ledger:read_tx', 'mcp:accounting:export_csv', 'mcp:stripe:verify_charge'],
      blockedPatterns: ['mcp:payments:direct_transfer', 'mcp:bank:withdraw', 'mcp:cluster:drain_nodes']
    }
  ];

  const [activePolicy, setActivePolicy] = useState<PolicyRole>(policies[0]);
  const [simulationLog, setSimulationLog] = useState<{
    action: string;
    allowed: boolean;
    reason: string;
  } | null>(null);

  const simulateExecution = (action: string, isDestructive: boolean) => {
    const isAllowed = !isDestructive && (
      activePolicy.id === 'secops-operator' 
        ? true 
        : action.includes('read') || action.includes('select') || action.includes('query')
    );

    if (isAllowed) {
      setSimulationLog({
        action,
        allowed: true,
        reason: `ALLOW: Operation matches assigned permission set [${activePolicy.permissions[0]}]. Token validated.`
      });
    } else {
      setSimulationLog({
        action,
        allowed: false,
        reason: `DENIED: Policy [${activePolicy.name}] forbids destructive tool call (${action}). Intercepted at kernel socket.`
      });
    }
  };

  return (
    <section id="governance" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Governance, Policies & Fine-Grained Permissions (RBAC)
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Prevent privilege escalation across agent runtimes. Bind MCP tools to strict permission sets and block destructive actions before execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Policy Selector (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Governance Policies
            </div>

            {policies.map((p) => {
              const isSelected = activePolicy.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    setActivePolicy(p);
                    setSimulationLog(null);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/40 border-white/[0.06] hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{p.name}</span>
                    <Lock className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.permissions.slice(0, 2).map((perm) => (
                      <span key={perm} className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-white/[0.06]">
                        {perm}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-500/20">
                      {p.blockedPatterns[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Policy Enforcement Sandbox (Right 7 Cols) */}
          <div className="lg:col-span-7 glass-card border border-white/10 p-6 rounded-2xl bg-[#090E1F]">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <span className="text-lg font-bold text-white">Live Policy Evaluation Engine</span>
              </div>
              <span className="text-xs font-mono-tech text-indigo-400 px-2.5 py-1 rounded bg-indigo-950 border border-indigo-500/30">
                ACTIVE: {activePolicy.id}
              </span>
            </div>

            {/* Assigned Permissions View */}
            <div className="mt-5 space-y-3">
              <div className="text-xs font-semibold text-slate-300">
                Granted Capabilities (RBAC Scope):
              </div>
              <div className="flex flex-wrap gap-2">
                {activePolicy.permissions.map((perm) => (
                  <div key={perm} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono-tech">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{perm}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs font-semibold text-slate-300 pt-2">
                Explicitly Blocked Destructive Tools:
              </div>
              <div className="flex flex-wrap gap-2">
                {activePolicy.blockedPatterns.map((block) => (
                  <div key={block} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono-tech">
                    <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
                    <span>{block}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Simulation Controls */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Trigger Test Action Against Policy
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => simulateExecution('postgres_select_metrics', false)}
                  className="px-3 py-2 text-xs font-mono-tech rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>call: postgres_select_metrics</span>
                  <span className="text-[10px] text-emerald-400 font-bold">READ</span>
                </button>

                <button
                  onClick={() => simulateExecution('postgres_drop_customer_data', true)}
                  className="px-3 py-2 text-xs font-mono-tech rounded-lg bg-rose-950/30 hover:bg-rose-900/40 text-rose-200 border border-rose-500/30 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>call: postgres_drop_customer_data</span>
                  <span className="text-[10px] text-rose-400 font-bold">DESTRUCTIVE</span>
                </button>

                <button
                  onClick={() => simulateExecution('cluster_restart_container', false)}
                  className="px-3 py-2 text-xs font-mono-tech rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>call: cluster_restart_container</span>
                  <span className="text-[10px] text-cyan-400 font-bold">OPS</span>
                </button>

                <button
                  onClick={() => simulateExecution('payments_direct_wire_transfer', true)}
                  className="px-3 py-2 text-xs font-mono-tech rounded-lg bg-rose-950/30 hover:bg-rose-900/40 text-rose-200 border border-rose-500/30 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>call: payments_direct_wire</span>
                  <span className="text-[10px] text-rose-400 font-bold">CRITICAL</span>
                </button>
              </div>

              {simulationLog && (
                <div className={`mt-4 p-3.5 rounded-xl border text-xs font-mono-tech leading-relaxed ${
                  simulationLog.allowed
                    ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                }`}>
                  {simulationLog.reason}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
