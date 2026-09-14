import React from 'react';
import { VordaneLogo } from './VordaneLogo';
import { ShieldCheck, Terminal, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050811] text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info & System Status (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <VordaneLogo size="md" showSubtitle={true} />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Enterprise-grade Agentic AI Governance and Orchestration Platform designed to manage, isolate, secure, monitor, and red-team autonomous AI agents.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/[0.08] font-mono-tech text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Compute Clusters & Protocol Hubs Operational</span>
            </div>
          </div>

          {/* Nav Column 1: Platform */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Platform</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#lifecycle" className="hover:text-white transition-colors">Lifecycle Orchestration</a></li>
              <li><a href="#spaces" className="hover:text-white transition-colors">Agent Spaces (CIDR)</a></li>
              <li><a href="#mcp" className="hover:text-white transition-colors">Platform MCP Hub</a></li>
              <li><a href="#governance" className="hover:text-white transition-colors">RBAC & Tool Policies</a></li>
              <li><a href="#lifecycle" className="hover:text-white transition-colors">Container Cluster Engine</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Governance & Security */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Security</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#redteam" className="hover:text-white transition-colors">Automated Red Teaming</a></li>
              <li><a href="#redteam" className="hover:text-white transition-colors">LLM Judge Verification</a></li>
              <li><a href="#observability" className="hover:text-white transition-colors">Distributed Tracing</a></li>
              <li><a href="#topology" className="hover:text-white transition-colors">Interactive Topology Map</a></li>
              <li><a href="#governance" className="hover:text-white transition-colors">Zero-Trust Enclaves</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Developers */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Developers</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#devtools" className="hover:text-white transition-colors">Live Chat Sandbox</a></li>
              <li><a href="#devtools" className="hover:text-white transition-colors">Container Terminal Exec</a></li>
              <li><a href="#mcp" className="hover:text-white transition-colors">Model Context Protocol Spec</a></li>
              <li><a href="#observability" className="hover:text-white transition-colors">OpenTelemetry Exporter</a></li>
              <li><a href="#devtools" className="hover:text-white transition-colors">Cluster Status API</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Vordane Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Enclave Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
