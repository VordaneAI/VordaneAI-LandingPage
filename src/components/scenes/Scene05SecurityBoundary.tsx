import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldAlert, ShieldCheck, Bot, Lock, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene05Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene05SecurityBoundary: React.FC<Scene05Props> = ({ progress, onOpenWaitlist }) => {
  const isThreatBlocked = progress >= 0.45;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
          SECURITY AT THE <br className="hidden sm:inline" />
          <span className="gradient-text">EXECUTION LAYER.</span>
        </h2>
        <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
          Zero-trust microVM enclaves and kernel-level firewalls intercepting prompt injections and unauthorized egress.
        </p>
      </div>

      {/* Center Minimal Interception Stage */}
      <div className="relative my-auto w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="w-full p-8 sm:p-12 rounded-3xl bg-[#040817]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono-tech">
            
            {/* Incoming Request / Prompt Injection */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{
                  opacity: isThreatBlocked ? 0.3 : 1,
                  scale: isThreatBlocked ? 0.9 : 1,
                }}
                className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 text-rose-400 mb-2"
              >
                <Lock size={28} />
              </motion.div>
              <span className="text-xs font-bold text-white">PROMPT INJECTION</span>
              <span className="text-[10px] text-slate-400">Jailbreak Payload</span>
            </div>

            {/* Veltrix Security Boundary (Laser Laser Interceptor) */}
            <div className="flex flex-col items-center text-center px-4">
              <motion.div
                animate={{
                  scale: isThreatBlocked ? 1.1 : 1,
                  borderColor: isThreatBlocked ? 'rgba(16, 185, 129, 0.8)' : 'rgba(0, 194, 255, 0.4)',
                }}
                className={`p-4 rounded-full border-2 transition-all ${
                  isThreatBlocked ? 'bg-emerald-950/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'bg-[#0052FF]/20 text-[#00C2FF]'
                }`}
              >
                {isThreatBlocked ? <ShieldCheck size={32} /> : <Shield size={32} />}
              </motion.div>
              <span className="text-xs font-bold text-white mt-2">
                {isThreatBlocked ? 'POLICY DENIED (1MS)' : 'VELTRIX PERIMETER'}
              </span>
              <span className={`text-[10px] ${isThreatBlocked ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                {isThreatBlocked ? 'THREAT DROPPED' : 'EVALUATING'}
              </span>
            </div>

            {/* Protected Core Agent */}
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-2xl bg-[#02050E] border border-white/15 text-[#00C2FF] mb-2">
                <Bot size={28} />
              </div>
              <span className="text-xs font-bold text-white">AUTONOMOUS AGENT</span>
              <span className="text-[10px] text-emerald-400 font-bold">100% SECURED</span>
            </div>

          </div>

          {/* Interception Confirmation Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
            <span>ZERO DATA EXFILTRATION</span>
            <span className="text-emerald-400 font-bold">ENCLAVE ATTESTED</span>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-8">
        <MagneticButton
          text="Join the Waitlist"
          onClick={onOpenWaitlist}
          size="md"
          variant="primary"
        />
      </div>

    </div>
  );
};
