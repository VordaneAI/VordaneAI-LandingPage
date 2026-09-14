import React from 'react';

interface VordaneLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'icon' | 'wordmark';
}

export function VordaneIcon({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/40 via-violet-500/20 to-slate-900 shadow-lg shadow-cyan-500/10 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Dark Squircle Background */}
      <div className="w-full h-full rounded-[14px] bg-[#0A0F1D] relative overflow-hidden flex items-center justify-center border border-white/10">
        {/* Subtle Radial Backlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.22),transparent_70%)]" />
        
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full p-2 relative z-10"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyanBeam" x1="26" y1="28" x2="50" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            
            <linearGradient id="violetBeam" x1="74" y1="28" x2="50" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>

            <linearGradient id="vFill" x1="50" y1="28" x2="50" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.05" />
            </linearGradient>

            <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glowViolet" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Concentric Guide Orbits */}
          <circle cx="50" cy="50" r="38" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
          <circle cx="50" cy="50" r="28" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Semi-transparent triangular wash inside the V */}
          <polygon points="26,28 74,28 50,76" fill="url(#vFill)" />

          {/* Left Cyan Light Beam */}
          <line 
            x1="26" y1="28" x2="50" y2="76" 
            stroke="url(#cyanBeam)" 
            strokeWidth="5.5" 
            strokeLinecap="round" 
            filter="url(#glowCyan)" 
          />

          {/* Right Violet Light Beam */}
          <line 
            x1="74" y1="28" x2="50" y2="76" 
            stroke="url(#violetBeam)" 
            strokeWidth="5.5" 
            strokeLinecap="round" 
            filter="url(#glowViolet)" 
          />

          {/* Top-Left Node (Cyan) */}
          <circle cx="26" cy="28" r="5" fill="#0A0F1D" stroke="#22D3EE" strokeWidth="2.5" />
          <circle cx="26" cy="28" r="2" fill="#FFFFFF" />

          {/* Top-Right Node (Violet) */}
          <circle cx="74" cy="28" r="5" fill="#0A0F1D" stroke="#A78BFA" strokeWidth="2.5" />
          <circle cx="74" cy="28" r="2" fill="#FFFFFF" />

          {/* Bottom Apex Node (Electric White/Blue) */}
          <circle cx="50" cy="76" r="5.5" fill="#0A0F1D" stroke="#38BDF8" strokeWidth="2.5" />
          <circle cx="50" cy="76" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}

export function VordaneLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}: VordaneLogoProps) {
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', sub: 'text-[9px] tracking-[0.22em]' },
    md: { icon: 40, text: 'text-2xl', sub: 'text-[10px] tracking-[0.24em]' },
    lg: { icon: 48, text: 'text-3xl', sub: 'text-xs tracking-[0.26em]' },
    xl: { icon: 60, text: 'text-4xl', sub: 'text-sm tracking-[0.28em]' },
  };

  const { icon, text, sub } = sizeMap[size];

  if (variant === 'icon') {
    return <VordaneIcon size={icon} className={className} />;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant !== 'wordmark' && <VordaneIcon size={icon} />}
      
      <div className="flex flex-col">
        <span className={`font-black tracking-[0.06em] text-white leading-none ${text}`}>
          VORDANE
        </span>
        {showSubtitle && (
          <div className={`flex items-center gap-1.5 font-medium uppercase mt-1 text-slate-400 ${sub}`}>
            <span className="text-cyan-400 font-bold">AI</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-medium">OBSERVE · GOVERN · SECURE</span>
          </div>
        )}
      </div>
    </div>
  );
}
