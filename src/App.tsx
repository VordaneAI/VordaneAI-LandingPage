import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProviderEcosystemStrip } from './components/ProviderEcosystemStrip';
import { AgentLifecycleSection } from './components/AgentLifecycleSection';
import { AgentSpacesSection } from './components/AgentSpacesSection';
import { McpHubSection } from './components/McpHubSection';
import { GovernanceRbacSection } from './components/GovernanceRbacSection';
import { MultiProviderSection } from './components/MultiProviderSection';
import { RedTeamingSection } from './components/RedTeamingSection';
import { ObservabilityTracesSection } from './components/ObservabilityTracesSection';
import { TopologyMapSection } from './components/TopologyMapSection';
import { DevToolsSection } from './components/DevToolsSection';
import { EnterpriseReadinessSection } from './components/EnterpriseReadinessSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden font-sans">
      {/* Sticky Translucent Navbar */}
      <Navbar
        onOpenWaitlist={openWaitlist}
        onOpenDemo={openDemo}
      />

      <main>
        {/* 01: Hero Section */}
        <Hero
          onOpenWaitlist={openWaitlist}
          onOpenDemo={openDemo}
        />

        {/* 02: Infrastructure & Runtime Ecosystem Strip */}
        <ProviderEcosystemStrip />

        {/* 03: Feature 1 - Agent Management & Lifecycle Orchestration */}
        <AgentLifecycleSection />

        {/* 04: Feature 2 - Agent Spaces (Network Isolation & Multi-Tenancy) */}
        <AgentSpacesSection />

        {/* 05: Feature 3 - Model Context Protocol (MCP) Integration & Platform MCP Hub */}
        <McpHubSection />

        {/* 06: Feature 4 - Governance, Policies & Fine-Grained Permissions (RBAC) */}
        <GovernanceRbacSection />

        {/* 07: Feature 5 - Multi-Provider LLM Catalog & Dynamic Model Binding */}
        <MultiProviderSection />

        {/* 08: Feature 6 - Automated Adversarial Red Teaming & Security Scanning */}
        <RedTeamingSection />

        {/* 09: Feature 7 - Observability, Distributed Traces & Spans */}
        <ObservabilityTracesSection />

        {/* 10: Feature 8 - Interactive Service Map & Topology Visualization */}
        <TopologyMapSection />

        {/* 11: Feature 9 - Interactive Agent Tools & Developer Experience */}
        <DevToolsSection />

        {/* 12: Enterprise Readiness & Security Architecture */}
        <EnterpriseReadinessSection />

        {/* 13: Final Conversion CTA */}
        <FinalCTASection
          onOpenWaitlist={openWaitlist}
          onOpenDemo={openDemo}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Conversion Modals */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}
