import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MagneticButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  text = 'Join the Waitlist',
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = true,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Smooth magnetic pull strength
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    setPosition({
      x: distanceX * 0.28,
      y: distanceY * 0.28,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3 text-xs sm:text-sm',
    lg: 'px-9 py-4 text-sm sm:text-base font-bold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#0052FF] via-[#0088FF] to-[#00C2FF] text-white shadow-[0_0_30px_rgba(0,194,255,0.4)] hover:shadow-[0_0_50px_rgba(0,194,255,0.7)] border border-white/20',
    secondary:
      'bg-[#060D1F]/90 hover:bg-[#0A1636] text-slate-100 border border-[#00C2FF]/40 hover:border-[#00C2FF] shadow-[0_0_20px_rgba(0,82,255,0.25)]',
    danger:
      'bg-gradient-to-r from-rose-600 to-red-500 text-white shadow-[0_0_30px_rgba(244,63,94,0.4)] border border-rose-400/30',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:border-white/30',
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 18,
        mass: 0.2,
      }}
      whileTap={{ scale: 0.94 }}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold tracking-wide uppercase font-sans cursor-pointer overflow-hidden select-none transition-shadow ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Moving Shimmer Sweep Effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
        animate={{
          translateX: isHovered ? ['-100%', '200%'] : '-100%',
        }}
        transition={{
          repeat: isHovered ? Infinity : 0,
          duration: 1.2,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Ambient Breathing Glow Behind Button */}
      {variant === 'primary' && (
        <span className="absolute -inset-1 rounded-2xl bg-[#00C2FF]/30 blur-md -z-10 animate-pulse pointer-events-none" />
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children || text}
      </span>

      {/* Dynamic Arrow with Motion Momentum */}
      {showArrow && (
        <motion.span
          animate={{
            x: isHovered ? 4 : 0,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative z-10 flex items-center"
        >
          <ArrowRight size={size === 'lg' ? 18 : 15} />
        </motion.span>
      )}
    </motion.button>
  );
};
