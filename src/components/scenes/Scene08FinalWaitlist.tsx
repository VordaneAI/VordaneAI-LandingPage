import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Bot, 
  Activity, Terminal, Sparkles, HeartHandshake, Zap, Lock, Radio
} from 'lucide-react';
import { VeltrixLogo } from '../VeltrixLogo';
import { MagneticButton } from '../MagneticButton';

interface Scene08Props {
  progress: number;
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const Scene08FinalWaitlist: React.FC<Scene08Props> = ({ progress, onOpenWaitlist, onOpenDemo }) => {
  const [activeAgentsCount, setActiveAgentsCount] = useState(148);

  useEffect(() => {
    const countTimer = setInterval(() => {
      setActiveAgentsCount((prev) => 148 + Math.floor(Math.random() * 4));
    }, 2000);
    return () => clearInterval(countTimer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-7xl mx-auto z-10 select-none text-center">
      
      {/* Top Tag */}
      <div className="w-full text-center max-w-4xl pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.25)] mb-2.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono-tech text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            STAGE 08 • PRODUCTION READY & PRIVATE EARLY ACCESS
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase font-sans">
          LET VELTRIX HANDLE <br />
          <span className="gradient-text">THE HEAVY RUNTIME LIFTING.</span>
        </h2>
        <p className="text-xs sm:text-base text-slate-300 font-sans mt-1.5 max-w-2xl mx-auto">
          Get early access to the platform for deploying, securing, observing, and operating autonomous AI agents in production.
        </p>
      </div>

      {/* Center Live Mission Control Command Center Dashboard */}
      <div className="relative w-full max-w-4xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3">
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-[#040817]/95 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          
          {/* Status Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 font-mono-tech text-xs">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="text-[10px] text-slate-400 block mb-0.5">SYSTEM STATE</span>
              <span className="font-bold flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                HEALTHY (99.99%)
              </span>
            </div>
            
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
              <span className="text-[10px] text-slate-400 block mb-0.5">AGENTS ACTIVE</span>
              <span className="font-bold text-[#00C2FF] flex items-center justify-center gap-1">
                <Bot size={13} />
                {activeAgentsCount} Deployed
              </span>
            </div>
            
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
              <span className="text-[10px] text-slate-400 block mb-0.5">SECURITY MESH</span>
              <span className="font-bold text-purple-400 flex items-center justify-center gap-1">
                <Lock size={13} />
                Zero Egress
              </span>
            </div>
            
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
              <span className="text-[10px] text-slate-400 block mb-0.5">CASCADE GUARD</span>
              <span className="font-bold text-amber-400 flex items-center justify-center gap-1">
                <Zap size={13} />
                &lt; 8ms Trip
              </span>
            </div>
          </div>

          {/* Large High-Impact Magnetic CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-3">
            <MagneticButton
              text="JOIN THE VELTRIX WAITLIST"
              onClick={onOpenWaitlist}
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
            />

            <MagneticButton
              text="Request Technical Demo"
              onClick={onOpenDemo}
              size="lg"
              variant="secondary"
              showArrow={false}
              className="w-full sm:w-auto"
            />
          </div>

          <p className="text-xs font-mono-tech text-slate-400 mt-2">
            Instant sandbox invitation tokens distributed weekly to qualified engineering & AI infrastructure teams.
          </p>

        </div>
      </div>

      {/* Footer Monospace Branding */}
      <div className="w-full max-w-xl pb-1 text-center font-mono-tech text-[11px] text-slate-500">
        <span>© 2026 VELTRIX TECHNOLOGIES • ENTERPRISE PRODUCTION READY</span>
      </div>

    </div>
  );
};
