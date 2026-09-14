import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Lock, ShieldAlert, ShieldCheck, Flame, 
  ArrowRight, Check, X, Server, Bot, AlertTriangle, Key, Network, Zap, Radio
} from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene04Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene04SecurityRedTeam: React.FC<Scene04Props> = ({ progress, onOpenWaitlist }) => {
  const [attackPhase, setAttackPhase] = useState(0); // 0 = Armed, 1 = Injection launched, 2 = Evaluated, 3 = Intercepted & Blocked

  useEffect(() => {
    const timer = setInterval(() => {
      setAttackPhase((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const activePhase = progress > 0.1 ? (progress >= 0.7 ? 3 : progress >= 0.4 ? 1 : 0) : attackPhase;

  const isArmed = activePhase === 0;
  const isAttacking = activePhase === 1 || activePhase === 2;
  const isBlocked = activePhase === 3;

  const attackPathSteps = [
    { label: 'PROMPT INJECTION', desc: 'Jailbreak payload disguised in user text', status: isAttacking ? 'active-attack' : 'nominal' },
    { label: 'GOAL HIJACK', desc: 'Attempted planner redirection & sub-agent trigger', status: isAttacking ? 'active-attack' : 'nominal' },
    { label: 'TOOL ESCAPE', desc: 'Requesting privileged DB write & egress', status: isAttacking ? 'active-attack' : 'nominal' },
    { label: 'VELTRIX ZERO-TRUST', desc: 'Harness kernel firewall & IAM policy filter', status: isBlocked ? 'blocked' : 'eval' },
    { label: 'TARGET DATABASE', desc: 'Production Payment Ledger & HSM', status: isBlocked ? 'secured' : 'target' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none">
      
      {/* Top Header */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xl mb-2.5 backdrop-blur-md transition-colors ${
            isBlocked
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
              : isAttacking
              ? 'bg-rose-950/80 border-rose-500/50 text-rose-400 animate-pulse'
              : 'bg-[#060D1F]/90 border-[#00C2FF]/40 text-[#00C2FF]'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isBlocked ? 'bg-emerald-400' : isAttacking ? 'bg-rose-500 animate-ping' : 'bg-[#00C2FF] animate-ping'}`} />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            {isArmed && 'STAGE 04 • ZERO-TRUST RUNTIME POLICIES ARMED'}
            {isAttacking && 'STAGE 04 • ADVERSARIAL RED TEAM ATTACK IN PROGRESS'}
            {isBlocked && 'STAGE 04 • THREAT INTERCEPTED • ZERO-TRUST ACCESS DENIED (1MS)'}
          </span>
        </motion.div>

        <div className="min-h-[75px] sm:min-h-[90px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${activePhase}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isArmed && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
                    SECURITY BUILT INTO THE <span className="gradient-text">EXECUTION HARNESS.</span>
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 font-sans mt-1">
                    Zero-trust microVM isolation, IAM role scoping, and hardware enclaves protect every state transition.
                  </p>
                </>
              )}

              {isAttacking && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-rose-400 tracking-tight uppercase font-sans">
                    ADVERSARIAL ATTACK SIMULATION DETECTED.
                  </h2>
                  <p className="text-xs sm:text-base text-rose-300 font-sans mt-1">
                    Autonomous red-team engine attempting prompt manipulation to trigger unauthorized egress.
                  </p>
                </>
              )}

              {isBlocked && (
                <>
                  <h2 className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight uppercase font-sans">
                    THREAT INTERCEPTED. ACCESS DENIED IN 1MS.
                  </h2>
                  <p className="text-xs sm:text-base text-emerald-300 font-sans mt-1">
                    Veltrix harness kernel firewall dropped the packet immediately. Zero token leakage, zero data exfiltration.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Center Interactive Attack Animation Stage */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        <motion.div
          animate={{
            borderColor: isBlocked 
              ? 'rgba(16, 185, 129, 0.7)' 
              : isAttacking 
              ? 'rgba(244, 63, 94, 0.7)' 
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isBlocked 
              ? '0 0 45px rgba(16, 185, 129, 0.35)' 
              : isAttacking 
              ? '0 0 50px rgba(244, 63, 94, 0.4)' 
              : '0 0 30px rgba(0, 0, 0, 0.5)',
          }}
          className="w-full p-5 sm:p-7 rounded-3xl bg-[#040817]/95 border-2 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <Flame size={16} className={isAttacking ? 'text-rose-400 animate-pulse' : isBlocked ? 'text-emerald-400' : 'text-[#00C2FF]'} />
              <span className="text-white font-bold">RED TEAM SUITE :: VECTOR-0x4B</span>
            </div>

            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              isArmed 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : isAttacking 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}>
              {isArmed ? 'POLICIES ARMED' : isAttacking ? 'ATTACK TRAVERSING' : 'THREAT VAPORIZED (100% BLOCKED)'}
            </span>
          </div>

          {/* Attack Path Physical Traversal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10 font-mono-tech text-xs">
            {attackPathSteps.map((step, idx) => {
              const isFirewallStep = idx === 3;
              const isTargetStep = idx === 4;
              const isAttackActive = isAttacking && idx < 3;

              return (
                <motion.div
                  key={step.label}
                  animate={{
                    borderColor: isFirewallStep && isBlocked
                      ? 'rgba(16, 185, 129, 0.9)'
                      : isAttackActive
                      ? 'rgba(244, 63, 94, 0.7)'
                      : isTargetStep && isBlocked
                      ? 'rgba(16, 185, 129, 0.5)'
                      : 'rgba(255, 255, 255, 0.1)',
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isFirewallStep && isBlocked
                      ? 'bg-emerald-950/50 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                      : isAttackActive
                      ? 'bg-rose-950/40 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                      : isTargetStep && isBlocked
                      ? 'bg-emerald-950/20'
                      : 'bg-[#060D1F]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">PHASE 0{idx + 1}</span>
                    {isFirewallStep && isBlocked ? (
                      <ShieldCheck size={16} className="text-emerald-400" />
                    ) : isAttackActive ? (
                      <Flame size={14} className="text-rose-400 animate-pulse" />
                    ) : (
                      <Shield size={14} className="text-[#00C2FF]" />
                    )}
                  </div>

                  <div className="font-bold text-white text-xs mb-1 font-sans truncate">
                    {step.label}
                  </div>

                  <div className={`text-[10px] ${
                    isFirewallStep && isBlocked ? 'text-emerald-300 font-bold' : isAttackActive ? 'text-rose-300' : 'text-slate-400'
                  }`}>
                    {isFirewallStep && isBlocked ? 'ZERO-TRUST DENY (1ms)' : isTargetStep && isBlocked ? 'SAFE (UNTOUCHED)' : step.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Security Telemetry Metric Row */}
          <div className="mt-5 pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono-tech text-[11px]">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 block text-[9px]">ENCLAVE ISOLATION</span>
              <span className="text-emerald-400 font-bold">AMD SEV MicroVM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 block text-[9px]">EGRESS POLICY</span>
              <span className="text-white font-bold">Strict CIDR Deny</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 block text-[9px]">INTERCEPTION TIME</span>
              <span className="text-[#00C2FF] font-bold">&lt; 1.0 ms</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 block text-[9px]">DATA EXFILTRATION</span>
              <span className="text-emerald-400 font-bold">0.00 Bytes</span>
            </div>
          </div>

          {/* Simulation Toggle Controls */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono-tech text-[10px]">
            <span className="text-slate-500 mr-1">ATTACK SIMULATION:</span>
            {['Armed', 'Launch Injection', 'Evaluating', 'Blocked & Secured'].map((label, step) => (
              <button
                key={label}
                onClick={() => setAttackPhase(step)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  activePhase === step 
                    ? 'bg-[#00C2FF] text-black font-bold shadow-[0_0_10px_#00C2FF]' 
                    : 'bg-white/5 hover:bg-white/15 text-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-xl flex items-center justify-center gap-3 pt-1 pb-1">
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
