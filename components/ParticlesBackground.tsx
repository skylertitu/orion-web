"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }> = [];

    function resize() {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
      }
    }

    function init() {
      resize();
      particles = [];
      const count = Math.min(80, Math.floor((width * height) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 3 + 1,
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(139, 92, 246, 0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    }

    init();
    draw();

    const ro = new ResizeObserver(() => {
      init();
    });

    const parent = canvas.parentElement;
    if (parent) ro.observe(parent);

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="particles-bg"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}