import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, Users, FileCheck, Globe, Cpu, CheckCircle2 } from 'lucide-react';

export const EnterpriseSection: React.FC = () => {
  const pillars = [
    { title: 'Multi-Agent Visibility', desc: 'Real-time telemetry and state mapping across distributed swarms.', icon: Globe },
    { title: 'Organization-Wide Discovery', desc: 'Automated continuous asset indexing across cloud clusters.', icon: Server },
    { title: 'Kernel Security Policies', desc: 'Zero-trust network isolation and microVM execution boundaries.', icon: Lock },
    { title: 'End-to-End Cryptography', desc: 'Hardware-attested mTLS 1.3 channels with ephemeral key rotation.', icon: ShieldCheck },
    { title: 'Granular Role-Based Access', desc: 'Fine-grained IAM scoping for human operators and autonomous agents.', icon: Users },
    { title: 'Immutable Forensic Audit', desc: 'Cryptographically signed trace records for enterprise audit compliance.', icon: FileCheck },
  ];

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <ShieldCheck size={13} />
            <span>ENTERPRISE-GRADE ASSURANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Built for AI at <br />
            <span className="gradient-text">Enterprise Scale.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered with strict zero-retention architecture, VPC peering, and hardware security modules to meet the stringent security demands of global enterprises.
          </p>
        </div>

        {/* 6 Enterprise Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 text-left group hover:border-[#00C2FF]/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
