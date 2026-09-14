import React, { useState } from 'react';
import { 
  Terminal, 
  MessageSquare, 
  BarChart3, 
  Send, 
  Play, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Boxes,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'agent' | 'tool';
  content: string;
  toolName?: string;
}

export function DevToolsSection() {
  const [activeTab, setActiveTab] = useState<'chat' | 'terminal'>('chat');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: 'user',
      content: 'Audit current network isolation on space Prod-SecOps and list bound tools.'
    },
    {
      role: 'tool',
      toolName: 'mcp:k8s_inspect_namespace',
      content: 'Tool executed: CIDR 10.240.10.0/24 verified. 0 unauthorized egress routes.'
    },
    {
      role: 'agent',
      content: 'Namespace Prod-SecOps is operating with strict hardware isolation. All 8 runtime containers are bound to policy strict-secops-v1. Egress to external internet is zeroized.'
    }
  ]);

  const [inputVal, setInputVal] = useState('');

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'VORDANE CONTAINER EXEC (xterm-256color) // Allocation ID: 4f9e-bc12',
    'Connected to container agent-secops-r1.vordane.internal via WebSocket mTLS',
    'Type "help" for a list of diagnostic commands.\n'
  ]);
  const [termInput, setTermInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');

    setChatMessages(prev => [
      ...prev,
      { role: 'user', content: userText },
      {
        role: 'tool',
        toolName: 'mcp:vordane_eval_policy',
        content: 'Evaluating prompt tokens against zero-trust policy engine...'
      },
      {
        role: 'agent',
        content: `Acknowledged. Executing request within isolated space. All operations tracked under trace #tr-live-${Math.floor(Math.random() * 90000 + 10000)}.`
      }
    ]);
  };

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = termInput.trim();
    if (!cmd) return;

    let response = '';
    if (cmd === 'help') {
      response = 'Available commands:\n  vordane status     - Check agent & cluster health\n  vordane pod status - Inspect container resource allocation\n  mcp catalog        - List attached MCP tools and schemas\n  cat /etc/cidr      - Inspect network namespace config\n  clear              - Clear terminal buffer';
    } else if (cmd === 'vordane status') {
      response = 'Vordane Agent Status: ACTIVE\nContainer Alloc: healthy (4 CPU cores, 8192 MB RAM)\nWorkflow State: StateMachine:InSync\nBound MCP Hubs: 4 registered, 12 tools active\nRBAC Violations: 0 detected in last 24h';
    } else if (cmd === 'vordane pod status' || cmd === 'pod status') {
      response = 'ID: alloc-4f9e-bc12\nJob ID: vordane-secops-9912\nClient Status: running\nTask "agent-container": running (ip: 10.240.10.42)';
    } else if (cmd === 'mcp catalog') {
      response = 'Registered Tools:\n  1. github_create_pr (SSE)\n  2. postgres_query_readonly (HTTP)\n  3. k8s_inspect_namespace (SSE)\n  4. platform_call_agent (/api/sse)';
    } else if (cmd === 'cat /etc/cidr') {
      response = 'NAMESPACE=Prod-SecOps\nCIDR_BLOCK=10.240.10.0/24\nGATEWAY_IP=10.240.10.1\nEGRESS_MODE=STRICT_ENCLAVE_ONLY';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTermInput('');
      return;
    } else {
      response = `vordane-exec: command not found: ${cmd}. Type "help" for available commands.`;
    }

    setTerminalHistory(prev => [...prev, `vordane@agent-secops:~$ ${cmd}`, response]);
    setTermInput('');
  };

  return (
    <section id="devtools" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEVELOPER EXPERIENCE & INTERACTIVE RUNTIMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Interactive Agent Tools & Developer Experience
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Test deployed agents inside a live chat sandbox with tool execution previews, or connect directly to running agent containers via web-based terminal exec.
          </p>
        </div>

        {/* Analytics Overview Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono-tech text-slate-400 mb-1">Active Agents</div>
            <div className="text-2xl font-black text-white">142</div>
            <div className="text-[11px] text-emerald-400 mt-1 font-mono-tech">100% Operational</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono-tech text-slate-400 mb-1">Runtime Instances</div>
            <div className="text-2xl font-black text-cyan-300">486</div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono-tech">Enclave Pods</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono-tech text-slate-400 mb-1">Network Spaces</div>
            <div className="text-2xl font-black text-indigo-300">18</div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono-tech">Isolated CIDR Blocks</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono-tech text-slate-400 mb-1">Policy Coverage</div>
            <div className="text-2xl font-black text-emerald-400">100%</div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono-tech">RBAC Zero-Trust</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]">
            <div className="text-[10px] uppercase font-mono-tech text-slate-400 mb-1">24h Distributed Traces</div>
            <div className="text-2xl font-black text-white">1.42M</div>
            <div className="text-[11px] text-cyan-400 mt-1 font-mono-tech">p95 Latency 184ms</div>
          </div>
        </div>

        {/* Dual Sandbox: Chat Sandbox vs Web Terminal Exec */}
        <div className="glass-card border border-white/10 rounded-2xl bg-[#090E1F] shadow-2xl overflow-hidden">
          {/* Top Switcher */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#0A0F1E] border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'chat'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Live Agent Chat Sandbox</span>
              </button>

              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'terminal'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Container Terminal Exec</span>
              </button>
            </div>

            <span className="hidden sm:inline font-mono-tech text-[11px] text-slate-400">
              Target Pod: secops-analyzer-v1.prod-secops
            </span>
          </div>

          {/* Sandbox Body */}
          <div className="p-6">
            {activeTab === 'chat' ? (
              <div>
                {/* Chat Message Thread */}
                <div className="space-y-3.5 mb-5 max-h-[380px] overflow-y-auto pr-2">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        msg.role === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      {msg.role === 'tool' ? (
                        <div className="p-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-cyan-300 font-mono-tech text-xs max-w-xl">
                          <div className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Tool Call: {msg.toolName}
                          </div>
                          {msg.content}
                        </div>
                      ) : (
                        <div
                          className={`p-3.5 rounded-xl max-w-xl text-xs leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium'
                              : 'bg-slate-900 border border-white/[0.08] text-slate-200 font-sans'
                          }`}
                        >
                          {msg.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Message secops-analyzer with tool permissions..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-cyan-500/60"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              <div>
                {/* Web Terminal Exec */}
                <div className="p-4 rounded-xl bg-black border border-white/[0.08] font-mono-tech text-xs text-slate-200 min-h-[320px] max-h-[380px] overflow-y-auto flex flex-col justify-between">
                  <div className="space-y-1.5">
                    {terminalHistory.map((line, i) => (
                      <div key={i} className="whitespace-pre-wrap leading-relaxed text-slate-300">
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Terminal Command Input */}
                  <form onSubmit={handleTerminalCommand} className="flex items-center gap-2 pt-3 mt-3 border-t border-white/[0.08]">
                    <span className="text-cyan-400 font-bold whitespace-nowrap">vordane@agent-secops:~$</span>
                    <input
                      type="text"
                      value={termInput}
                      onChange={(e) => setTermInput(e.target.value)}
                      placeholder="Type command (e.g. 'vordane status', 'mcp catalog')..."
                      className="flex-1 bg-transparent border-none text-white text-xs font-mono-tech focus:outline-none"
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
