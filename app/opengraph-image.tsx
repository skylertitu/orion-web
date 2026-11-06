import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Siomey Romero — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090d16",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #0284c7, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 22,
                color: "#ffffff",
              }}
            >
              SR
            </div>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#f8fafc" }}>{site.name}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34d399",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <span>Disponible para proyectos</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#0284c7",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {site.role} - Ecuador
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            Construyo soluciones digitales que resuelven problemas reales.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#94a3b8",
            }}
          >
            Next.js - Node.js - TypeScript - PostgreSQL - Integracion de APIs - Solana
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
