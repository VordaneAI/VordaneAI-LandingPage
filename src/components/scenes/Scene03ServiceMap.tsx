import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Box, Lock, Server, Globe, Cpu, ChevronRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface Scene03Props {
  progress: number;
  onOpenWaitlist: () => void;
}

export const Scene03ServiceMap: React.FC<Scene03Props> = ({ progress, onOpenWaitlist }) => {
  const isExpanded = progress >= 0.4;
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const initialChain = [
    { id: 'agent', name: 'firecrawl-agent', type: 'AGENT', icon: Bot, status: 'HEALTHY', p95: '42ms', details: 'Core reasoning loop executing multi-step DOM extraction.' },
    { id: 'harness', name: 'veltrix-harness', type: 'HARNESS', icon: Box, status: 'ATTESTED', p95: '0.8ms', details: 'Enclave perimeter managing token budgets and egress isolation.' },
    { id: 'tool', name: 'firecrawl_crawl', type: 'TOOL', icon: Lock, status: 'SANDBOXED', p95: '88ms', details: 'Egress-filtered scraping worker running inside gVisor container.' },
    { id: 'service', name: 'production-vpc', type: 'SERVICE', icon: Server, status: 'ISOLATED', p95: '1.2ms', details: 'Protected backend infrastructure secured with mTLS 1.3.' },
  ];

  const extraNodes = [
    { id: 'model', name: 'claude-3.7-sonnet', type: 'MODEL', icon: Cpu, status: 'OPTIMAL', p95: '310ms', details: 'Direct inference endpoint governed by zero-retention policy.' },
    { id: 'gateway', name: 'envoy-gateway', type: 'NETWORK', icon: Globe, status: 'ENCRYPTED', p95: '0.4ms', details: 'mTLS gateway routing external agent traffic securely.' },
  ];

  const allNodes = isExpanded ? [...initialChain, ...extraNodes] : initialChain;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center px-6 py-12 max-w-5xl mx-auto z-10 select-none text-center">
      
      {/* Top Headline */}
      <div className="w-full pt-8 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-sans">
          SEE THE SYSTEM <span className="gradient-text">AROUND THE AGENT.</span>
        </h2>
        <p className="text-base sm:text-xl text-slate-400 font-sans tracking-wide max-w-xl mx-auto">
          From network subnets and custom harnesses to models, IAM policies, and governed tools.
        </p>
      </div>

      {/* Center Service Map Stage */}
      <div className="relative my-auto w-full max-w-4xl flex flex-col items-center justify-center">
        
        {/* Node Flow Chain */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
          {allNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedNode(isSelected ? null : node.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left font-mono-tech ${
                  isSelected 
                    ? 'bg-[#0052FF]/20 border-[#00C2FF] shadow-[0_0_30px_rgba(0,194,255,0.25)]' 
                    : 'bg-[#040817]/90 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase">{node.type}</span>
                  <Icon size={14} className={isSelected ? 'text-[#00C2FF]' : 'text-slate-400'} />
                </div>
                
                <div className="font-bold text-white text-xs truncate">
                  {node.name}
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {node.status}
                  </span>
                  <span className="text-slate-500">{node.p95}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progressive Disclosure Drawer (When clicked) */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-4 rounded-2xl bg-[#02050E] border border-white/10 text-left font-mono-tech text-xs text-slate-300 w-full max-w-xl"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white uppercase">{allNodes.find(n => n.id === selectedNode)?.name}</span>
                <span className="text-[#00C2FF] text-[10px]">DIAGNOSTICS</span>
              </div>
              <p className="text-slate-400 font-sans text-xs">
                {allNodes.find(n => n.id === selectedNode)?.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

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
