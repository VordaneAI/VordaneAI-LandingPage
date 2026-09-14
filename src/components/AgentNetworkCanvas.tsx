import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  name: string;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  pulseOffset: number;
}

interface Connection {
  source: string;
  target: string;
}

export const AgentNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    // Minimal 6 nodes floating in vast negative space
    const nodes: Node[] = [
      { id: 'agt-1', name: 'agent-01', baseX: 0.50, baseY: 0.40, radius: 5, color: '#00C2FF', pulseOffset: 0 },
      { id: 'agt-2', name: 'reasoning-swarm', baseX: 0.32, baseY: 0.30, radius: 4, color: '#0052FF', pulseOffset: 1.5 },
      { id: 'agt-3', name: 'guard-enclave', baseX: 0.68, baseY: 0.32, radius: 4, color: '#38BDF8', pulseOffset: 3.0 },
      { id: 'mdl-1', name: 'claude-3.7', baseX: 0.24, baseY: 0.60, radius: 3.5, color: '#818CF8', pulseOffset: 2.1 },
      { id: 'tool-1', name: 'mcp-tool', baseX: 0.76, baseY: 0.58, radius: 3.5, color: '#F59E0B', pulseOffset: 0.8 },
      { id: 'rag-1', name: 'vector-store', baseX: 0.50, baseY: 0.72, radius: 4, color: '#34D399', pulseOffset: 4.2 },
    ];

    const connections: Connection[] = [
      { source: 'agt-1', target: 'agt-2' },
      { source: 'agt-1', target: 'agt-3' },
      { source: 'agt-2', target: 'mdl-1' },
      { source: 'agt-3', target: 'tool-1' },
      { source: 'agt-1', target: 'rag-1' },
    ];

    // Single subtle traveling packet
    let packetProgress = 0;
    let packetConnIdx = 0;
    let time = 0;

    const render = () => {
      time += 0.008; // Very slow, calm motion
      ctx.clearRect(0, 0, width, height);

      // 1. Very faint, elegant background technical grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Compute calm node positions
      const liveNodes = nodes.map((node) => {
        const px = node.baseX * width + Math.sin(time + node.pulseOffset) * 8;
        const py = node.baseY * height + Math.cos(time * 0.8 + node.pulseOffset) * 8;
        return { ...node, px, py };
      });

      // 2. Faint subtle connection lines
      connections.forEach((conn) => {
        const s = liveNodes.find((n) => n.id === conn.source);
        const t = liveNodes.find((n) => n.id === conn.target);
        if (!s || !t) return;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.px, s.py);
        ctx.lineTo(t.px, t.py);
        ctx.stroke();
      });

      // 3. Single subtle data packet traveling quietly
      packetProgress += 0.004;
      if (packetProgress >= 1) {
        packetProgress = 0;
        packetConnIdx = (packetConnIdx + 1) % connections.length;
      }
      const activeConn = connections[packetConnIdx];
      const s = liveNodes.find((n) => n.id === activeConn.source);
      const t = liveNodes.find((n) => n.id === activeConn.target);
      if (s && t) {
        const px = s.px + (t.px - s.px) * packetProgress;
        const py = s.py + (t.py - s.py) * packetProgress;
        ctx.fillStyle = '#00C2FF';
        ctx.shadowColor = '#00C2FF';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Draw Minimal Elegant Nodes
      liveNodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.15 + 0.85;

        // Faint outer aura
        ctx.fillStyle = `${node.color}10`;
        ctx.beginPath();
        ctx.arc(node.px, node.py, (node.radius + 6) * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.px, node.py, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full block opacity-60" />
    </div>
  );
};
