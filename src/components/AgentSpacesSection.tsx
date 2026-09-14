import React, { useState } from 'react';
import { 
  Network, 
  ShieldAlert, 
  Lock, 
  Globe, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Server,
  Users,
  Building2,
  FileSpreadsheet,
  TerminalSquare
} from 'lucide-react';

interface SpaceConfig {
  id: string;
  name: string;
  category: string;
  cidr: string;
  gateway: string;
  agentCount: number;
  policy: string;
  crossTenantRule: string;
  egress: 'Strict Private Enclave' | 'Internal VPC Only' | 'Proxied Audit Hub';
  color: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export function AgentSpacesSection() {
  const spaces: SpaceConfig[] = [
    {
      id: 'prod-core',
      name: 'Production Core',
      category: 'Core Engineering',
      cidr: '10.240.10.0/24',
      gateway: '10.240.10.1',
      agentCount: 24,
      policy: 'zero-trust-prod-strict',
      crossTenantRule: 'DENIED: Cross-namespace packets dropped',
      egress: 'Internal VPC Only',
      color: 'cyan'
    },
    {
      id: 'finance-secure',
      name: 'Finance & Payments',
      category: 'PCI / High-Assurance',
      cidr: '10.240.20.0/24',
      gateway: '10.240.20.1',
      agentCount: 8,
      policy: 'pci-dss-enclave-v4',
      crossTenantRule: 'BLOCKED: Air-gapped ledger boundary',
      egress: 'Strict Private Enclave',
      color: 'violet'
    },
    {
      id: 'hr-talent',
      name: 'HR & Personnel',
      category: 'PII / Confidential',
      cidr: '10.240.30.0/24',
      gateway: '10.240.30.1',
      agentCount: 5,
      policy: 'gdpr-pii-masking-policy',
      crossTenantRule: 'BLOCKED: Personnel record isolation',
      egress: 'Proxied Audit Hub',
      color: 'emerald'
    },
    {
      id: 'staging-sandbox',
      name: 'Staging & Evaluation',
      category: 'Pre-Production',
      cidr: '10.240.90.0/24',
      gateway: '10.240.90.1',
      agentCount: 12,
      policy: 'permissive-eval-sandbox',
      crossTenantRule: 'ISOLATED: Synthetic data only',
      egress: 'Internal VPC Only',
      color: 'amber'
    }
  ];

  const [activeSpace, setActiveSpace] = useState<SpaceConfig>(spaces[0]);
  const [testResult, setTestResult] = useState<string | null>(null);

  const testCrossTenantPing = (targetId: string) => {
    if (targetId === activeSpace.id) {
      setTestResult(`ALLOWED: Intra-namespace routing within ${activeSpace.cidr}`);
    } else {
      setTestResult(`BLOCKED: Egress from ${activeSpace.name} to ${targetId} intercepted by Vordane Gateway filter. (HTTP 403 Namespace Boundary Violation)`);
    }
  };

  return (
    <section id="spaces" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Agent Spaces: Network Isolation & Multi-Tenancy
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Partition autonomous agents into dedicated network namespaces with dedicated CIDR blocks and Gateway IPs. Prevent cross-tenant data leaks between Production, Finance, HR, and Staging.
          </p>
        </div>

        {/* Interactive Spaces Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Space Selector Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Configured Network Namespaces
            </div>
            {spaces.map((space) => {
              const isSelected = activeSpace.id === space.id;
              return (
                <button
                  key={space.id}
                  onClick={() => {
                    setActiveSpace(space);
                    setTestResult(null);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-white/[0.06] hover:bg-slate-900/80 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                      {space.category}
                    </span>
                    <span className="font-mono-tech text-[11px] text-cyan-400">
                      {space.agentCount} Agents
                    </span>
                  </div>
                  <div className="text-base font-bold text-white mt-2">
                    {space.name}
                  </div>
                  <div className="font-mono-tech text-xs text-slate-400 mt-1 flex items-center gap-3">
                    <span>CIDR: {space.cidr}</span>
                    <span>GW: {space.gateway}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Routing Inspector & Rule Tester (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-white/10 p-6 rounded-2xl bg-[#090E1F] shadow-2xl">
              {/* Space Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2">
                    <Network className="w-5 h-5 text-cyan-400" />
                    <span className="text-lg font-bold text-white">{activeSpace.name}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Namespace Gateway IP: <code className="text-cyan-300 font-mono-tech">{activeSpace.gateway}</code>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono-tech bg-slate-800 border border-white/10 text-slate-200">
                    {activeSpace.egress}
                  </span>
                </div>
              </div>

              {/* Network Configuration Details */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] font-mono-tech text-xs">
                  <div className="text-slate-500 text-[11px] uppercase mb-1">Assigned CIDR Block</div>
                  <div className="text-base font-bold text-cyan-300">{activeSpace.cidr}</div>
                  <div className="text-slate-400 text-[11px] mt-2">
                    254 Usable Agent Container IPs
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] font-mono-tech text-xs">
                  <div className="text-slate-500 text-[11px] uppercase mb-1">Assigned RBAC Policy</div>
                  <div className="text-base font-bold text-indigo-300 truncate">{activeSpace.policy}</div>
                  <div className="text-slate-400 text-[11px] mt-2">
                    Enforced at Kernel Socket Layer
                  </div>
                </div>
              </div>

              {/* Interactive Cross-Tenant Isolation Simulator */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <span>Verify Cross-Tenant Packet Filtering</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Simulate an agent inside <strong className="text-slate-200">{activeSpace.name}</strong> attempting to send a raw payload to another space:
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {spaces.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => testCrossTenantPing(s.id)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/10 transition-colors"
                    >
                      Route to {s.name}
                    </button>
                  ))}
                </div>

                {testResult && (
                  <div className={`p-3.5 rounded-xl border text-xs font-mono-tech leading-relaxed ${
                    testResult.startsWith('ALLOWED')
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                  }`}>
                    {testResult}
                  </div>
                )}
              </div>

              {/* Architecture Summary Bullet Points */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Hardware-isolated network interfaces for agent runtime containers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strict egress filtering preventing exfiltration to external web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
