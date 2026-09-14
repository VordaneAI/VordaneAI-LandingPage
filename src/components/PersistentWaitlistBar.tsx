import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PersistentWaitlistBarProps {
  currentScene: number;
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export const PersistentWaitlistBar: React.FC<PersistentWaitlistBarProps> = ({
  currentScene,
  onOpenWaitlist,
  onOpenDemo,
}) => {
  const getCtaLabel = () => {
    switch (currentScene) {
      case 0:
        return 'JOIN THE WAITLIST';
      case 1:
        return 'SEE VELTRIX IN ACTION';
      case 2:
        return 'GET EARLY ACCESS';
      case 3:
        return 'TEST RED TEAM SUITE';
      case 4:
        return 'SCAN YOUR RAG PIPELINE';
      case 5:
        return 'OPTIMIZE YOUR PROMPTS';
      case 6:
        return 'ACCESS CONTROL PLANE';
      case 7:
      default:
        return 'JOIN THE VELTRIX WAITLIST';
    }
  };

  return (
    <>
      {/* Mobile-Only Floating Bottom Action Strip */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden p-3 bg-[#030712]/95 border-t border-white/10 backdrop-blur-2xl flex items-center gap-2">
        <button
          onClick={onOpenDemo}
          className="w-1/3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono-tech text-xs cursor-pointer"
        >
          Demo
        </button>
        <button
          onClick={onOpenWaitlist}
          className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00C2FF] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,194,255,0.4)] cursor-pointer"
        >
          <span>{getCtaLabel()}</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </>
  );
};
