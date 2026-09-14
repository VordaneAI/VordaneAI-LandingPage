import React, { useState, useEffect } from 'react';
import { VordaneLogo } from './VordaneLogo';
import { 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
  onOpenDemo: () => void;
}

export function Navbar({ onOpenWaitlist, onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Lifecycle', href: '#lifecycle' },
    { label: 'Spaces', href: '#spaces' },
    { label: 'MCP Hub', href: '#mcp' },
    { label: 'Governance', href: '#governance' },
    { label: 'Red Teaming', href: '#redteam' },
    { label: 'Observability', href: '#observability' },
    { label: 'Topology', href: '#topology' },
    { label: 'Dev Tools', href: '#devtools' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060913]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center shrink-0 group transition-transform duration-200 hover:scale-[1.01]">
          <VordaneLogo size="md" showSubtitle={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 rounded-lg whitespace-nowrap transition-all cursor-pointer"
          >
            Schedule Demo
          </button>
          <button
            onClick={onOpenWaitlist}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg whitespace-nowrap transition-all shadow-sm shadow-white/10 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Request Access</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0F1D]/98 border-b border-white/10 px-6 py-6 backdrop-blur-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-xs font-medium text-slate-200 bg-slate-800 border border-white/10 rounded-lg whitespace-nowrap cursor-pointer"
              >
                Schedule Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-lg whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
