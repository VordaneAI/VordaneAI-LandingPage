import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, ShieldCheck, ArrowRight, Server, Bot, Cpu } from 'lucide-react';

export const EncryptionSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#38BDF8] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Lock size={13} />
            <span>CRYPTOGRAPHIC DATA ISOLATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Private by <span className="gradient-text">Architecture.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every payload traversing the Veltrix fabric is protected by ephemeral hardware session keys and mTLS 1.3 tunnels. Observability telemetry is cryptographically verified without exposing raw confidential tokens.
          </p>
        </div>

        {/* Cryptographic Key Exchange Visualization */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono-tech text-xs">
            {/* Agent A */}
            <div className="p-6 rounded-2xl bg-[#060D1F] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] flex items-center justify-center mx-auto mb-3">
                <Bot size={22} />
              </div>
              <div className="font-bold text-white text-sm">Agent A (Origin)</div>
              <div className="text-[10px] text-slate-400 mt-1">Local Ephemeral Key</div>
              <div className="mt-3 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                ED25519 SIGNED
              </div>
            </div>

            {/* Channel 1 */}
            <div className="hidden md:flex flex-col items-center">
              <span className="text-[10px] text-[#00C2FF] font-semibold mb-1">mTLS 1.3 TUNNEL</span>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#0052FF] to-[#00C2FF] relative">
                <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 animate-ping" />
              </div>
              <span className="text-[9px] text-slate-500 mt-1">AES-256-GCM</span>
            </div>

            {/* Veltrix Gateway */}
            <div className="p-6 rounded-2xl bg-[#060D1F] border border-[#00C2FF]/40 shadow-[0_0_30px_rgba(0,194,255,0.15)] relative">
              <div className="w-12 h-12 rounded-xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 text-[#00C2FF] flex items-center justify-center mx-auto mb-3">
                <Server size={22} />
              </div>
              <div className="font-bold text-white text-sm">Veltrix Control Plane</div>
              <div className="text-[10px] text-[#38BDF8] mt-1">Confidential TEE Enclave</div>
              <div className="mt-3 px-2 py-1 rounded bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30 text-[10px]">
                ZERO PLAINTEXT STORAGE
              </div>
            </div>

            {/* Channel 2 */}
            <div className="hidden md:flex flex-col items-center">
              <span className="text-[10px] text-[#00C2FF] font-semibold mb-1">mTLS 1.3 TUNNEL</span>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#00C2FF] to-[#0052FF] relative">
                <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 animate-ping" />
              </div>
              <span className="text-[9px] text-slate-500 mt-1">AES-256-GCM</span>
            </div>

            {/* Agent B */}
            <div className="p-6 rounded-2xl bg-[#060D1F] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#38BDF8] flex items-center justify-center mx-auto mb-3">
                <Bot size={22} />
              </div>
              <div className="font-bold text-white text-sm">Agent B (Target)</div>
              <div className="text-[10px] text-slate-400 mt-1">Verified Destination</div>
              <div className="mt-3 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                MUTUAL AUTH OK
              </div>
            </div>
          </div>

          {/* Standards Compliance Grid */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono-tech text-xs">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-1">Hardware Security Modules</div>
              <p className="text-[11px] text-slate-400 font-sans">
                FIPS 140-3 Level 3 HSM key derivation with ephemeral 60-minute key rotation cycles.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-1">Confidential MicroVMs</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Memory encrypted in flight with AMD SEV-SNP and AWS Nitro Enclave memory attestation.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-1">Immutable Audit Ledger</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Merkle-tree signed execution traces guaranteeing forensic auditability without data exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
