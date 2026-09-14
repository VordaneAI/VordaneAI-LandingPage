import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  FileCheck2, 
  Key, 
  Building, 
  CheckCircle2,
  HardDrive
} from 'lucide-react';

export function EnterpriseReadinessSection() {
  const complianceItems = [
    {
      title: 'Private VPC & Air-Gapped Clusters',
      desc: 'Deploy within AWS, Azure, GCP, or on-premises bare metal with zero egress dependencies.',
      icon: Server
    },
    {
      title: 'Zero-Trust Enclave & Key Zeroization',
      desc: 'Dynamic ephemeral keys with mTLS authentication. No plaintext credentials ever hit disk.',
      icon: Key
    },
    {
      title: 'Deterministic Policy Enforcement',
      desc: 'Fine-grained RBAC, automated security telemetry, and real-time intervention for all agent operations.',
      icon: ShieldCheck
    },
    {
      title: 'Tamper-Evident Cryptographic Logs',
      desc: 'Immutable append-only audit trails capturing every agent prompt, tool payload, and model token.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Enterprise Architecture & Zero-Trust Assurance
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Built from the ground up for regulated industries, defense, and high-consequence enterprise workloads requiring absolute data sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono-tech text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Architecture</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
