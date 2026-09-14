import React, { useState } from 'react';
import { 
  Sparkles, 
  Key, 
  Zap, 
  Layers, 
  Lock, 
  CheckCircle2, 
  RefreshCw,
  Globe2,
  Server
} from 'lucide-react';

interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  contextWindow: string;
  latencyAvg: string;
  pricing: string;
  badge: string;
}

export function MultiProviderSection() {
  const models: ModelInfo[] = [
    {
      id: 'google-gemini-2-flash',
      name: 'Gemini 2.0 Flash',
      provider: 'Google Cloud',
      contextWindow: '1,000,000 tokens',
      latencyAvg: '142ms',
      pricing: '$0.10 / 1M tokens',
      badge: 'Speed Leader'
    },
    {
      id: 'anthropic-claude-35-sonnet',
      name: 'Claude 3.5 Sonnet',
      provider: 'Anthropic',
      contextWindow: '200,000 tokens',
      latencyAvg: '240ms',
      pricing: '$3.00 / 1M tokens',
      badge: 'Reasoning Leader'
    },
    {
      id: 'openai-gpt-4o',
      name: 'GPT-4o',
      provider: 'OpenAI',
      contextWindow: '128,000 tokens',
      latencyAvg: '210ms',
      pricing: '$2.50 / 1M tokens',
      badge: 'Multimodal'
    },
    {
      id: 'deepseek-r1',
      name: 'DeepSeek-R1',
      provider: 'DeepSeek / Custom Host',
      contextWindow: '64,000 tokens',
      latencyAvg: '320ms',
      pricing: '$0.55 / 1M tokens',
      badge: 'Deep Reasoning'
    },
    {
      id: 'ollama-llama-33',
      name: 'Llama 3.3 70B (Ollama)',
      provider: 'Air-Gapped Private Cluster',
      contextWindow: '128,000 tokens',
      latencyAvg: '180ms',
      pricing: '$0 (Self-Hosted)',
      badge: '100% On-Prem'
    }
  ];

  const [activeModel, setActiveModel] = useState<ModelInfo>(models[0]);
  const [swapping, setSwapping] = useState(false);
  const [swapMessage, setSwapMessage] = useState('Agent bound to Gemini 2.0 Flash. Zero code reload required.');

  const handleModelSelect = (m: ModelInfo) => {
    setSwapping(true);
    setTimeout(() => {
      setActiveModel(m);
      setSwapping(false);
      setSwapMessage(`Hot-swapped to ${m.name} dynamically. Active runtime containers updated in 42ms.`);
    }, 400);
  };

  return (
    <section className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Multi-Provider LLM Catalog & Dynamic Binding
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Manage models across Google, OpenAI, Anthropic, DeepSeek, and Ollama. Secure credentials in encrypted vaults and hot-swap models without taking agents offline.
          </p>
        </div>

        {/* 2-Column Split: Provider Catalog & Live Dynamic Swapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Model Cards (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Supported Foundation Model Catalog
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {models.map((m) => {
                const isSelected = activeModel.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleModelSelect(m)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/40 border-white/[0.06] hover:bg-slate-800/50 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-white/10">
                        {m.badge}
                      </span>
                      <span className="text-xs font-mono-tech text-slate-400">
                        {m.latencyAvg}
                      </span>
                    </div>

                    <div className="text-base font-bold text-white">
                      {m.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {m.provider}
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                      <span>Ctx: {m.contextWindow}</span>
                      <span className="text-slate-300 font-medium">{m.pricing}</span>
                    </div>
                  </button>
                );
              })}

              {/* Custom OpenAI-Compatible Card */}
              <div className="p-4 rounded-xl border border-dashed border-white/15 bg-slate-950/40 text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                    BYO-Endpoint
                  </span>
                  <div className="text-base font-bold text-white mt-2">
                    Custom OpenAI-Compatible
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    vLLM, TGI, or custom corporate gateway endpoints with custom TLS certs.
                  </p>
                </div>
                <div className="text-[11px] font-mono-tech text-cyan-400 mt-3">
                  Configurable Base URL + Key
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Model Binding Console (Right 5 Cols) */}
          <div className="lg:col-span-5 glass-card border border-white/10 p-6 rounded-2xl bg-[#090E1F] shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <RefreshCw className={`w-5 h-5 text-cyan-400 ${swapping ? 'animate-spin' : ''}`} />
                <span className="text-base font-bold text-white">Dynamic Model Binding</span>
              </div>
              <span className="text-[11px] font-mono-tech text-emerald-400">
                LIVE CLUSTER
              </span>
            </div>

            {/* Target Agent info */}
            <div className="mt-5 p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] font-mono-tech text-xs space-y-2">
              <div className="text-slate-400 flex justify-between">
                <span>Target Agent:</span>
                <span className="text-white font-bold">secops-analyst-v1</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Current Bound Model:</span>
                <span className="text-cyan-300 font-bold">{activeModel.name}</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Provider Endpoint:</span>
                <span className="text-slate-300">{activeModel.provider}</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Context Limit:</span>
                <span className="text-slate-300">{activeModel.contextWindow}</span>
              </div>
            </div>

            {/* Status notification */}
            <div className="mt-4 p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 font-mono-tech text-xs text-cyan-200">
              {swapMessage}
            </div>

            {/* Credential Vault Safeguards */}
            <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero plaintext keys stored: Enterprise Key Vault mTLS integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Automatic fallback to secondary provider on upstream rate limits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
