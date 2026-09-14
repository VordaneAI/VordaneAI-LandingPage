import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  Workflow, 
  RefreshCw, 
  Play, 
  Square, 
  RotateCcw, 
  Layers, 
  Sliders, 
  CheckCircle2,
  Box
} from 'lucide-react';

export function AgentLifecycleSection() {
  const [cpuCores, setCpuCores] = useState(4);
  const [memoryMb, setMemoryMb] = useState(8192);
  const [temperature, setTemperature] = useState(0.2);
  const [selectedModel, setSelectedModel] = useState('gemini-2.0-flash');
  const [instanceCount, setInstanceCount] = useState(3);
  const [agentStatus, setAgentStatus] = useState<'RUNNING' | 'STOPPED' | 'RESTARTING'>('RUNNING');
  const [workflowState, setWorkflowState] = useState('WorkflowCompleted');

  const handleStart = () => {
    setAgentStatus('RUNNING');
    setWorkflowState('ActivityStateTransition:Running');
  };

  const handleStop = () => {
    setAgentStatus('STOPPED');
    setWorkflowState('WorkflowSignal:GracefulDrain');
  };

  const handleRestart = () => {
    setAgentStatus('RESTARTING');
    setWorkflowState('WorkflowActivity:RestartContainer');
    setTimeout(() => {
      setAgentStatus('RUNNING');
      setWorkflowState('WorkflowCompleted:Healthy');
    }, 900);
  };

  return (
    <section id="lifecycle" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Agent Lifecycle Orchestration & Cluster Scheduling
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Manage autonomous agents from initial provisioning to autoscaling. Powered by durable workflow state machines and enterprise container cluster schedulers.
          </p>
        </div>

        {/* 2-Column Split: Capabilities & Interactive Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Core Platform Capabilities */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Agent Provisioning</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Configure custom system prompts, temperature dials, foundation model bindings, compute quotas (CPU cores, RAM), and assigned governance policies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Durable Workflow Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fault-tolerant state orchestration using resilient workflows and activities for durable agent creation, step rollbacks, and atomic state transitions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Container Cluster Runtime</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Schedule agent workloads across bare-metal or cloud clusters with explicit allocation IDs, container lifecycle telemetry, and dedicated network endpoints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Real-Time Instance Control</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Start, stop, reboot, and horizontally scale active runtime instances on demand with sub-second health checks and automated restart policies.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Provisioning & Instance Console */}
          <div className="lg:col-span-6">
            <div className="glass-card border border-white/10 p-6 rounded-2xl shadow-2xl bg-[#090E1C]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <Box className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-bold text-white">Agent Definition: secops-analyzer-v1</div>
                    <div className="text-[11px] font-mono-tech text-slate-400">Cluster Workload ID: vordane-job-88194</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech font-semibold ${
                    agentStatus === 'RUNNING' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                      : agentStatus === 'RESTARTING'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}>
                    {agentStatus}
                  </span>
                </div>
              </div>

              {/* Sliders & Controls */}
              <div className="mt-5 space-y-4">
                {/* Model Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Model Selection
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-mono-tech rounded-lg bg-slate-900 border border-white/10 text-white"
                  >
                    <option value="gemini-2.0-flash">Google Gemini 2.0 Flash (Fast Reasoning)</option>
                    <option value="claude-3-5-sonnet">Anthropic Claude 3.5 Sonnet</option>
                    <option value="gpt-4o">OpenAI GPT-4o (Multimodal)</option>
                    <option value="deepseek-r1">DeepSeek-R1 (Distilled / Private)</option>
                  </select>
                </div>

                {/* Compute Quotas */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">CPU Quota</span>
                      <span className="font-mono-tech text-cyan-400 font-bold">{cpuCores} Cores</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="16"
                      value={cpuCores}
                      onChange={(e) => setCpuCores(Number(e.target.value))}
                      className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Memory (MB)</span>
                      <span className="font-mono-tech text-indigo-400 font-bold">{memoryMb} MB</span>
                    </div>
                    <input
                      type="range"
                      min="1024"
                      max="32768"
                      step="1024"
                      value={memoryMb}
                      onChange={(e) => setMemoryMb(Number(e.target.value))}
                      className="w-full accent-indigo-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                {/* Scale Instances & Temperature */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Scale Instances</span>
                      <span className="font-mono-tech text-white font-bold">{instanceCount} Replicas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setInstanceCount(Math.max(1, instanceCount - 1))}
                        className="px-2.5 py-1 text-xs rounded bg-slate-800 border border-white/10 text-slate-200 hover:bg-slate-700 cursor-pointer"
                      >
                        -
                      </button>
                      <div className="flex-1 text-center font-mono-tech text-xs bg-slate-900 py-1 rounded border border-white/[0.06] text-cyan-300">
                        {instanceCount} active
                      </div>
                      <button
                        onClick={() => setInstanceCount(Math.min(12, instanceCount + 1))}
                        className="px-2.5 py-1 text-xs rounded bg-slate-800 border border-white/10 text-slate-200 hover:bg-slate-700 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Temperature</span>
                      <span className="font-mono-tech text-white font-bold">{temperature.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={temperature}
                      onChange={(e) => setTemperature(Number(e.target.value))}
                      className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                {/* Instance Control Action Bar */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleStart}
                      disabled={agentStatus === 'RUNNING'}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                        agentStatus === 'RUNNING'
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      Start
                    </button>
                    <button
                      onClick={handleStop}
                      disabled={agentStatus === 'STOPPED'}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                        agentStatus === 'STOPPED'
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-rose-600 hover:bg-rose-500 text-white'
                      }`}
                    >
                      <Square className="w-3.5 h-3.5" />
                      Stop
                    </button>
                    <button
                      onClick={handleRestart}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Restart
                    </button>
                  </div>

                  <span className="text-[11px] font-mono-tech text-slate-500">
                    Workflow State: {workflowState}
                  </span>
                </div>

                {/* Allocation Inspector Box */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.06] font-mono-tech text-[11px] space-y-1">
                  <div className="text-slate-400 flex items-center justify-between">
                    <span>ALLOCATION ID: alloc-4f9e-bc12</span>
                    <span className="text-cyan-400">RUNTIME DRIVER: container</span>
                  </div>
                  <div className="text-slate-300">
                    CONTAINER IP: 10.240.10.42:8080 (VPC Namespace: Prod-SecOps)
                  </div>
                  <div className="text-slate-500 text-[10px]">
                    Policy: strict-rbac-v1 | Hot-Reload Enabled | Zero Downtime Failover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
