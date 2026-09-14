import React from 'react';

interface VeltrixLogoProps {
  size?: number | string;
  className?: string;
  glow?: boolean;
  animated?: boolean;
  pulse?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const VeltrixLogo: React.FC<VeltrixLogoProps> = ({
  size = 36,
  className = '',
  glow = true,
  animated = false,
  pulse = false,
  showWordmark = false,
  wordmarkClassName = '',
}) => {
  const id = React.useId();
  const filterId = `vlx-glow-${id.replace(/:/g, '')}`;
  const gradLeftId = `vlx-grad-left-${id.replace(/:/g, '')}`;
  const gradTopRightId = `vlx-grad-top-right-${id.replace(/:/g, '')}`;
  const gradBottomRightId = `vlx-grad-bottom-right-${id.replace(/:/g, '')}`;

  const iconSvg = (
    <svg
      viewBox="0 0 200 180"
      width={size}
      height={typeof size === 'number' ? (size * 180) / 200 : size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${pulse ? 'animate-pulse' : ''} ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="14" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id={gradLeftId} x1="10%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="40%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#0035A8" />
        </linearGradient>

        <linearGradient id={gradTopRightId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="50%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        <linearGradient id={gradBottomRightId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="50%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#0052FF" />
        </linearGradient>
      </defs>

      {glow && (
        <g filter={`url(#${filterId})`} opacity={0.6}>
          <polygon points="15,16 88,16 68,54 86,54 103,164 15,16" fill={`url(#${gradLeftId})`} />
          <polygon points="120,16 188,16 160,54 92,54" fill={`url(#${gradTopRightId})`} />
          <polygon points="112,68 174,68 146,108 84,108" fill={`url(#${gradBottomRightId})`} />
        </g>
      )}

      {/* Main Crisp Logo Geometry */}
      <polygon
        points="15,16 88,16 68,54 86,54 103,164 15,16"
        fill={`url(#${gradLeftId})`}
        className={animated ? 'transition-all duration-300 hover:brightness-125' : ''}
      />
      <polygon
        points="120,16 188,16 160,54 92,54"
        fill={`url(#${gradTopRightId})`}
        className={animated ? 'transition-all duration-300 hover:brightness-125' : ''}
      />
      <polygon
        points="112,68 174,68 146,108 84,108"
        fill={`url(#${gradBottomRightId})`}
        className={animated ? 'transition-all duration-300 hover:brightness-125' : ''}
      />
    </svg>
  );

  if (!showWordmark) return iconSvg;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {iconSvg}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-wider text-white ${wordmarkClassName || 'text-xl'}`}>
          VELTRIX
        </span>
      </div>
    </div>
  );
};
