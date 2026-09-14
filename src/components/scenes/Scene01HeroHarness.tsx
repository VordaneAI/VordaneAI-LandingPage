import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Box, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene01Props {
  progress: number;
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const Scene01HeroHarness: React.FC<Scene01Props> = ({ progress, onOpenWaitlist }) => {
  const isHarnessFormed = progress >= 0.4;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* 1. Large Minimal Typography */}
      <div className="w-full pt-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isHarnessFormed ? (
            <motion.div
              key="headline-01"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase font-sans">
                AI AGENTS ARE EASY TO BUILD.
              </h1>
              <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide">
                Operating them in production is the hard part.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="headline-02"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
                VELTRIX HANDLES THE <br className="hidden sm:inline" />
                <span className="gradient-text">COMPLEXITY.</span>
              </h1>
              <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide">
                You build the intelligence. Veltrix handles what surrounds it.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. One Heroic Central Element (Single Agent + Forming Harness) */}
      <div className="relative my-auto flex items-center justify-center">
        <motion.div
          animate={{
            scale: isHarnessFormed ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center p-12 sm:p-16 rounded-3xl"
        >
          {/* Harness Boundary Laser Outline (Forms on scroll) */}
          <motion.div
            animate={{
              opacity: isHarnessFormed ? 1 : 0,
              scale: isHarnessFormed ? 1 : 0.85,
              borderColor: isHarnessFormed ? 'rgba(0, 194, 255, 0.5)' : 'transparent',
              boxShadow: isHarnessFormed ? '0 0 50px rgba(0, 194, 255, 0.15)' : 'none',
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-3xl border-2 border-dashed bg-[#0052FF]/5 pointer-events-none"
          />

          {/* Central Solitary Agent Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-6 rounded-2xl bg-[#040817] border border-white/15 text-[#00C2FF] shadow-2xl">
              <Bot size={48} className="text-[#00C2FF]" />
            </div>

            <motion.div
              animate={{ opacity: 1 }}
              className="mt-4 font-mono-tech text-xs text-slate-300 font-semibold tracking-wider uppercase"
            >
              {isHarnessFormed ? 'PROTECTED AGENT HARNESS' : 'RAW AUTONOMOUS AGENT'}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3. Single Clean CTA */}
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
