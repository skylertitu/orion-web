"use client";

import { useState } from "react";
import type { Dict } from "@/lib/messages/types";

function CategoryIcon({ id }: { id: string }) {
  if (id === "frontend") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (id === "backend") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (id === "databases") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }
  // emerging / ai / web3
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

const CATEGORY_COLORS: Record<string, { accent: string; glow: string; border: string }> = {
  frontend: {
    accent: "var(--accent-cyan)",
    glow: "rgba(6, 182, 212, 0.22)",
    border: "rgba(6, 182, 212, 0.35)",
  },
  backend: {
    accent: "var(--accent-purple)",
    glow: "rgba(139, 92, 246, 0.22)",
    border: "rgba(139, 92, 246, 0.35)",
  },
  databases: {
    accent: "var(--emerald)",
    glow: "rgba(16, 185, 129, 0.22)",
    border: "rgba(16, 185, 129, 0.35)",
  },
  emerging: {
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.22)",
    border: "rgba(245, 158, 11, 0.35)",
  },
};

export default function StackSection({ dict }: { dict: Dict }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? dict.stack.categories
      : dict.stack.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="stack" className="section-stack">
      <div className="section-head reveal">
        <p className="eyebrow">{dict.stack.eyebrow}</p>
        <div>
          <h2>{dict.stack.title}</h2>
          <p>{dict.stack.subtitle}</p>
        </div>

        {/* Barra de Filtros Interactiva */}
        <div className="stack-filter-bar">
          <button
            type="button"
            className={`stack-filter-pill ${activeCategory === "all" ? "is-active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            <span>Todas las áreas</span>
          </button>
          {dict.stack.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`stack-filter-pill ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Tarjetas de Categorías con Efecto de Profundidad */}
      <div className={`stack-grid ${activeCategory !== "all" ? "stack-grid-single" : ""}`}>
        {filteredCategories.map((cat, idx) => {
          const colors = CATEGORY_COLORS[cat.id] || CATEGORY_COLORS.frontend;

          return (
            <div
              key={cat.id}
              className={`stack-category-card reveal delay-${idx + 1}`}
              style={
                {
                  "--cat-accent": colors.accent,
                  "--cat-glow": colors.glow,
                  "--cat-border": colors.border,
                } as React.CSSProperties
              }
            >
              {/* Header de la tarjeta */}
              <div className="stack-card-header">
                <div className="stack-card-meta">
                  <span className="stack-category-num">0{idx + 1}</span>
                  <span className="stack-category-icon" aria-hidden="true">
                    <CategoryIcon id={cat.id} />
                  </span>
                </div>
                <h3 className="stack-category-title">{cat.title}</h3>
                <p className="stack-category-desc">{cat.description}</p>
              </div>

              <div className="stack-divider" />

              {/* Lista interactiva de tecnologías */}
              <ul className="stack-skills-list">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="stack-skill-item">
                    <div className="stack-skill-head">
                      <span className="stack-skill-bullet" aria-hidden="true" />
                      <span className="stack-skill-name">{skill.name}</span>
                    </div>
                    {skill.note && <p className="stack-skill-note">{skill.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Franja de Tecnologías Principales (Bottom Highlight Bar) */}
      <div className="stack-bottom-banner reveal">
        <span className="stack-bottom-label">Ecosistema Principal:</span>
        <div className="stack-bottom-chips">
          <span className="stack-chip">Next.js 15</span>
          <span className="stack-chip">TypeScript</span>
          <span className="stack-chip">Node.js</span>
          <span className="stack-chip">PostgreSQL</span>
          <span className="stack-chip">NestJS</span>
          <span className="stack-chip">Prisma</span>
          <span className="stack-chip">Solana Web3</span>
          <span className="stack-chip">APIs REST</span>
        </div>
      </div>
    </section>
  );
}
