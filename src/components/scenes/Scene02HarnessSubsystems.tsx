import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Eye, Lock } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene02Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene02HarnessSubsystems: React.FC<Scene02Props> = ({ progress, onOpenWaitlist }) => {
  const isExpanded = progress >= 0.4;

  const pillars = [
    { name: 'SECURITY', sub: 'MicroVM isolation & zero-trust boundaries', icon: Shield, color: 'text-rose-400' },
    { name: 'OBSERVABILITY', sub: 'Deterministic traces & circuit breakers', icon: Eye, color: 'text-[#00C2FF]' },
    { name: 'GOVERNANCE', sub: 'IAM role evaluation & tool sandboxing', icon: Lock, color: 'text-amber-400' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
          THE VELTRIX <span className="gradient-text">HARNESS.</span>
        </h2>
        <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
          A dedicated execution environment encapsulating each agent in production.
        </p>
      </div>

      {/* Center Minimal Architectural Visualization (1 Agent + 3 Pillars) */}
      <div className="relative my-auto w-full max-w-2xl flex flex-col items-center justify-center">
        
        <motion.div
          animate={{
            scale: isExpanded ? 1.02 : 0.98,
            borderColor: isExpanded ? 'rgba(0, 194, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.6 }}
          className="w-full p-8 sm:p-12 rounded-3xl bg-[#040817]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative"
        >
          {/* Agent Center */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="p-4 rounded-2xl bg-[#02050E] border border-white/15 text-[#00C2FF] shadow-lg mb-2">
              <Bot size={36} />
            </div>
            <span className="font-mono-tech text-xs text-white font-bold tracking-wider">
              AUTONOMOUS AGENT
            </span>
          </div>

          {/* Three Clean Subsystems */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0.3,
                    y: isExpanded ? 0 : 10,
                  }}
                  transition={{ delay: isExpanded ? idx * 0.15 : 0, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-black/40 border border-white/5 text-left font-mono-tech"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={16} className={pillar.color} />
                    <span className="font-bold text-white text-xs">{pillar.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">
                    {pillar.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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
