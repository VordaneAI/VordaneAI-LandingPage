import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Shield, Eye, Lock } from 'lucide-react';
import { VeltrixLogo } from '../VeltrixLogo';
import { MagneticButton } from '../MagneticButton';

interface Scene07Props {
  progress: number;
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const Scene07FinalVeltrix: React.FC<Scene07Props> = ({ progress, onOpenWaitlist, onOpenDemo }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase font-sans">
          THE CONTROL PLANE <br />
          <span className="gradient-text">FOR AI AGENTS.</span>
        </h2>
        <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
          Deploy, secure, observe, and operate autonomous agents safely in production.
        </p>
      </div>

      {/* Center Minimal Logo Showcase */}
      <div className="relative my-auto flex flex-col items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0052FF]/15 via-[#00C2FF]/10 to-transparent border border-white/10 shadow-[0_0_60px_rgba(0,194,255,0.15)] flex flex-col items-center justify-center"
        >
          <VeltrixLogo size={64} glow animated />
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase font-sans mt-4">
            VELTRIX
          </h3>
          <span className="font-mono-tech text-xs text-[#00C2FF] tracking-widest font-bold mt-1">
            ENTERPRISE AI RUNTIME
          </span>
        </motion.div>
      </div>

      {/* Bottom Large Single Waitlist CTA */}
      <div className="pb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <MagneticButton
          text="Join the Veltrix Waitlist"
          onClick={onOpenWaitlist}
          size="lg"
          variant="primary"
        />

        <MagneticButton
          text="Request Technical Demo"
          onClick={onOpenDemo}
          size="lg"
          variant="secondary"
          showArrow={false}
        />
      </div>

    </div>
  );
};
