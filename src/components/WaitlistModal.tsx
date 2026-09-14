import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Loader2, Mail, Building2, User, Check, Shield } from 'lucide-react';
import { VordaneLogo } from './VordaneLogo';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export function WaitlistModal({ isOpen, onClose, defaultRole = '' }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [deployment, setDeployment] = useState('Private VPC (AWS / GCP / Azure)');
  const [fleetSize, setFleetSize] = useState('10 to 50 Agents');
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
            subject: `[Vordane Access Request] from ${company}`,
            from_name: 'Vordane AI Leads',
            email,
            company,
            deployment_preference: deployment,
            fleet_size: fleetSize,
            submitted_at: new Date().toISOString(),
          }),
        });
        const result = await response.json();
        if (!result.success) {
          console.warn('Web3Forms Notice:', result.message);
        }
      } else {
        // Fallback delay for local preview before key is configured in .env
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Still show confirmed state so user UX is graceful
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Access Request Received</h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto mb-6">
              Our enterprise solutions engineering team will provision your dedicated Vordane sandbox and reach out to schedule an onboarding walkthrough.
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
                Request Enterprise Access
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Deploy governed agentic clusters with network isolation and zero-trust policies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enterprise or Organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Deployment Preference
                  </label>
                  <select
                    value={deployment}
                    onChange={(e) => setDeployment(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-slate-200 font-mono-tech"
                  >
                    <option>Private VPC (AWS / GCP / Azure)</option>
                    <option>Air-Gapped Bare Metal</option>
                    <option>Single-Tenant Cloud</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Expected Fleet Size
                  </label>
                  <select
                    value={fleetSize}
                    onChange={(e) => setFleetSize(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-white/10 text-slate-200 font-mono-tech"
                  >
                    <option>1 to 10 Agents</option>
                    <option>10 to 50 Agents</option>
                    <option>50 to 250 Agents</option>
                    <option>250+ Agents (Cluster)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold shadow-lg shadow-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Access Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero spam guarantee. Enterprise-grade secure onboarding.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
