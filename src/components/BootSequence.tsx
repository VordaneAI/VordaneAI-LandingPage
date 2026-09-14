import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VeltrixLogo } from './VeltrixLogo';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const bootLogs = [
    'INITIALIZING AI CONTROL PLANE...',
    'PROVISIONING VELTRIX AGENTS & CUSTOM HARNESSES...',
    'CONNECTING SPACE-GRADE TELEMETRY...',
    'LOADING HARDWARE ENCLAVE SECURITY LAYER...',
    'SYSTEM READY',
  ];

  useEffect(() => {
    // Check if user already booted in this session to stay ultra fast
    const hasBooted = sessionStorage.getItem('vlx_booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= bootLogs.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('vlx_booted', 'true');
            onComplete();
          }, 350);
          return prev;
        }
        return prev + 1;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('vlx_booted', 'true');
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#02050E] flex flex-col items-center justify-center p-6 text-center select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[#0052FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm">
        {/* Animated Veltrix Logo */}
        <div className="mb-6 relative">
          <VeltrixLogo size={54} glow animated pulse />
        </div>

        {/* Wordmark */}
        <h1 className="text-xl font-extrabold tracking-[0.25em] text-white uppercase font-mono-tech mb-6">
          VELTRIX
        </h1>

        {/* Boot System Logs */}
        <div className="h-8 flex items-center justify-center">
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono-tech text-[11px] text-[#38BDF8] tracking-widest uppercase font-semibold"
          >
            {bootLogs[step]}
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0052FF] via-[#00C2FF] to-[#38BDF8]"
            initial={{ width: '0%' }}
            animate={{ width: `${((step + 1) / bootLogs.length) * 100}%` }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="mt-8 text-[10px] font-mono-tech text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest cursor-pointer px-3 py-1 rounded bg-white/[0.03] border border-white/5"
        >
          [ SKIP BOOT ]
        </button>
      </div>
    </motion.div>
  );
};
