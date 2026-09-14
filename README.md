# VORDANE — Enterprise Agentic AI Governance & Orchestration Platform

A high-performance enterprise landing page for **Vordane**, the governance and orchestration platform designed to manage, isolate, secure, monitor, and red-team autonomous AI agents.

---

## Quick Start

```bash
# Navigate to the landing page directory
cd landing-page

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## Brand & Visual Identity
- **Wordmark:** VORDANE
- **Subtitle:** AI | OBSERVE · GOVERN · SECURE
- **Palette:** Deep Obsidian (`#060913`, `#0A0F1D`, `#0E162B`), Luminous Cyan (`#38BDF8`, `#22D3EE`), Electric Violet (`#818CF8`, `#6366F1`)
- **Icon Mark:** Vector squircle badge with angled cyber 'V' light pipes, concentric guide orbits, and luminous nodes.

---

## Complete Feature Matrix Built

1. **Agent Management & Lifecycle Orchestration (`#lifecycle`)**
   - Agent Definition & Provisioning (prompts, temperature, model selection, CPU quotas, memory quotas in MB)
   - Durable Workflow Engine (state machine transitions, rollback, retry policies)
   - Container Cluster Runtime (allocation IDs, workload IDs, container lifecycle tracking, network endpoints)
   - Instance Control (start, stop, restart, scale, and monitor active runtime instances)

2. **Agent Spaces: Network Isolation & Multi-Tenancy (`#spaces`)**
   - Isolated Network Namespaces (dedicated CIDR blocks and Gateway IPs)
   - Tenant & Environment Segmentation (Production, Finance, HR, Staging)
   - Interactive cross-tenant packet filtering tester

3. **Model Context Protocol (MCP) Hub & Platform Server (`#mcp`)**
   - MCP Server Registry (HTTP and SSE endpoints with API keys)
   - Dynamic Tool Discovery (auto-cataloging, JSON schema inspection, tool activation toggles)
   - Agent Tool Attachments (per-agent tool binding)
   - Platform as an MCP Server: exposes governed platform agents as tools (`list_agents`, `get_agent`, `call_agent`) over SSE (`/api/sse`, `/sse`) for Cursor, Claude Desktop, and orchestrators

4. **Governance, Policies & Fine-Grained Permissions (RBAC) (`#governance`)**
   - Role-Based Access Control (RBAC): granular governance policies with assigned permission sets
   - MCP Tool Access Control: restricts destructive tool calls
   - Live Policy Evaluation Sandbox

5. **Multi-Provider LLM Catalog & Dynamic Binding**
   - Support for Google (Gemini 2.0 Flash / Pro), OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), DeepSeek (R1, V3), Ollama (Llama 3.3 local), and custom OpenAI-compatible endpoints
   - Credential vault management (mTLS key zeroization)
   - Dynamic Model Binding: hot-swap models without taking agents offline or altering system code

6. **Automated Adversarial Red Teaming & Security Scanning (`#redteam`)**
   - Automated multi-turn adversarial jailbreak simulations and prompt injection probing
   - Real-time SSE Streaming of attack vectors and agent responses
   - Automated LLM Judge & Security Evaluation (risk scoring 0-100, violation taxonomy, remediation)

7. **Observability, Distributed Traces & Spans (`#observability`)**
   - End-to-end distributed agent execution tracing
   - Granular span breakdown: prompt/completion tokens, latency in milliseconds, input & output JSON payloads, model IDs
   - Interactive Gantt waterfall timeline and span payload inspector

8. **Interactive Service Map & 2D Topology Visualization (`#topology`)**
   - 2D Node-Link Topology Graph: Spaces -> Agents -> Policies -> Permissions -> MCP Servers -> Tools -> Models
   - Space filtering and real-time node search
   - Interactive Node Inspector panel

9. **Interactive Agent Tools & Developer Experience (`#devtools`)**
   - Live Agent Chat Sandbox with streaming responses and tool execution previews
   - Web-Based Container Terminal (Exec): interactive command prompt (`vordane status`, `vordane pod status`, `mcp catalog`, `cat /etc/cidr`) inside running agent containers
   - Central Analytics Dashboard metrics

10. **Enterprise Architecture & Security**
    - Single-tenant VPC and air-gapped private cluster deployment
    - Hardware security enclave and key zeroization
    - Enterprise security controls and audit telemetry
    - Tamper-evident append-only cryptographic audit logging

11. **Conversion Modals**
    - `WaitlistModal`: Enterprise access request with deployment model and fleet size selection
    - `DemoModal`: Architecture walkthrough scheduler with customized topic focus
