import React from 'react';

export function ProviderEcosystemStrip() {
  const logos = [
    {
      name: 'Google Gemini',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Google Gemini">
          <path d="M12 24c0-6.627-5.373-12-12-12 6.627 0 12-5.373 12-12 0 6.627 5.373 12 12 12-6.627 0-12 5.373-12 12z" />
        </svg>
      ),
      label: 'Google Gemini'
    },
    {
      name: 'OpenAI',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="OpenAI">
          <path d="M22.28 9.87a6.22 6.22 0 00-.52-4.95 6.3 6.3 0 00-6.2-3.13 6.25 6.25 0 00-4.63 2.07 6.23 6.23 0 00-7.85 2.76 6.24 6.24 0 00.91 7.15 6.21 6.21 0 00.52 4.95 6.3 6.3 0 006.2 3.13 6.27 6.27 0 004.63-2.07 6.23 6.23 0 007.85-2.76 6.24 6.24 0 00-.91-7.15zM12 14.7a2.7 2.7 0 112.7-2.7 2.7 2.7 0 01-2.7 2.7z" />
        </svg>
      ),
      label: 'OpenAI'
    },
    {
      name: 'Anthropic',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Anthropic Claude">
          <path d="M13.8 3.5l4.9 14.5h-3.4l-1.1-3.4H9.8l-1.1 3.4H5.3L10.2 3.5h3.6zm-1.8 4.2l-1.4 4.5h2.8l-1.4-4.5z" />
        </svg>
      ),
      label: 'Anthropic'
    },
    {
      name: 'DeepSeek',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="DeepSeek">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="9" cy="11" r="1.5" />
          <circle cx="15" cy="11" r="1.5" />
          <path d="M8 15.5c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
      label: 'DeepSeek'
    },
    {
      name: 'Ollama',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Ollama">
          <rect x="5" y="4" width="14" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="9" cy="10" r="1.5" />
          <circle cx="15" cy="10" r="1.5" />
          <path d="M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      label: 'Ollama'
    },
    {
      name: 'Model Context Protocol',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Model Context Protocol">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      label: 'Model Context Protocol'
    }
  ];

  return (
    <section className="relative border-y border-white/[0.06] bg-[#080C17]/80 py-7 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Universal Foundation Model & Protocol Interoperability</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-7 md:gap-9 text-slate-400">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 transition-all duration-200 hover:text-cyan-300 group cursor-default"
                title={logo.label}
              >
                <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {logo.svg}
                </div>
                <span className="text-xs font-medium tracking-tight text-slate-300 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
