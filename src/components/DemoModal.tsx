import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2, Calendar, User, Mail, Building2, Shield, Play } from 'lucide-react';
import { VordaneLogo } from './VordaneLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [interestTopic, setInterestTopic] = useState('Full Platform Architecture & Governance');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '717a229e-43ce-48c5-880e-5d33caecdbd6';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !company.trim()) return;

    setSubmitting(true);
    try {
      if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[Vordane Demo Request] from ${name} (${company})`,
            from_name: 'Vordane AI Demo Scheduler',
            name,
            email,
            company,
            walkthrough_focus: interestTopic,
            submitted_at: new Date().toISOString(),
          }),
        });
        const result = await response.json();
        if (!result.success) {
          console.warn('Web3Forms Notice:', result.message);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setName('');
    setCompany('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#090E1F] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Architecture Walkthrough Scheduled</h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto mb-6">
              Our lead systems architects will prepare a live sandbox demo tailored to your multi-agent architecture and reach out via calendar invite.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <VordaneLogo size="sm" showSubtitle={true} />
              <h3 className="text-xl font-bold text-white mt-4">
                Schedule Architecture Walkthrough
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore live cluster scheduling, CIDR isolation, and automated red-teaming.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Engineering or Security Lead"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company or Team
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Walkthrough Focus
                </label>
                <select
                  value={interestTopic}
                  onChange={(e) => setInterestTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-slate-200 font-mono-tech"
                >
                  <option>Full Platform Architecture & Governance</option>
                  <option>Agent Spaces & CIDR Network Isolation</option>
                  <option>Agent Lifecycle & Cluster Orchestration</option>
                  <option>Model Context Protocol (MCP) Hub</option>
                  <option>Automated Red Teaming & LLM Judges</option>
                  <option>Distributed Tracing & Span Analysis</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold shadow-lg shadow-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Scheduling Briefing...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Demo Scheduling</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
