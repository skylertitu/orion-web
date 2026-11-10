"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/lib/projects";
import type { Dict } from "@/lib/messages/types";

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  aspect?: "wide" | "standard";
  projectId: string;
  demoUrl: string;
}

const ROW_1: ShowcaseItem[] = [
  {
    id: "r1-luxor",
    title: "Luxor Pay",
    category: "Web3 & Fintech",
    badge: "Solana SPL",
    image: "/images/luxor-pay.jpg",
    aspect: "wide",
    projectId: "luxor-pay",
    demoUrl: "https://luxor-pay-frontend.vercel.app",
  },
  {
    id: "r1-dashboards",
    title: "Dashboards & Analítica SaaS",
    category: "SaaS & AI",
    badge: "Panel Operativo",
    image: "/images/services/service-dashboards.jpg",
    aspect: "standard",
    projectId: "its-roosevelt",
    demoUrl: "https://itsroosevelt.com",
  },
  {
    id: "r1-roosevelt",
    title: "Its Roosevelt Command Center",
    category: "SaaS & Plataforma",
    badge: "Multi-Agente",
    image: "/images/its-roosevelt.jpg",
    aspect: "wide",
    projectId: "its-roosevelt",
    demoUrl: "https://itsroosevelt.com",
  },
  {
    id: "r1-sitios",
    title: "Landing Pages de Alta Conversión",
    category: "Sitios Web",
    badge: "Next.js 15",
    image: "/images/services/service-sitios-web.jpg",
    aspect: "standard",
    projectId: "huarmy-coffee",
    demoUrl: "https://fase2.grupozonaequinoccial.com/",
  },
  {
    id: "r1-huarmy",
    title: "Huarmy Coffee Web & Reservas",
    category: "Web & Gastronomía",
    badge: "Producción",
    image: "/images/huarmy-coffee.jpg",
    aspect: "wide",
    projectId: "huarmy-coffee",
    demoUrl: "https://fase2.grupozonaequinoccial.com/",
  },
];

const ROW_2: ShowcaseItem[] = [
  {
    id: "r2-integraciones",
    title: "Pasarelas Web3 & Blockchain",
    category: "Web3 & Integraciones",
    badge: "Wallet Adapter",
    image: "/images/services/service-integraciones.jpg",
    aspect: "standard",
    projectId: "luxor-pay",
    demoUrl: "https://luxor-pay-frontend.vercel.app",
  },
  {
    id: "r2-roosevelt-ai",
    title: "Superinteligencia Operativa",
    category: "SaaS & AI",
    badge: "En Vivo",
    image: "/images/its-roosevelt.jpg",
    aspect: "wide",
    projectId: "its-roosevelt",
    demoUrl: "https://itsroosevelt.com",
  },
  {
    id: "r2-backend",
    title: "Backend & Microservicios Cloud",
    category: "APIs & Arquitectura",
    badge: "PostgreSQL & Prisma",
    image: "/images/services/service-backend-apis.jpg",
    aspect: "standard",
    projectId: "its-roosevelt",
    demoUrl: "https://itsroosevelt.com",
  },
  {
    id: "r2-huarmy-exp",
    title: "Plataforma Gastronómica & Catering",
    category: "Web & Gastronomía",
    badge: "Core Web Vitals",
    image: "/images/huarmy-coffee.jpg",
    aspect: "wide",
    projectId: "huarmy-coffee",
    demoUrl: "https://fase2.grupozonaequinoccial.com/",
  },
  {
    id: "r2-apps",
    title: "Aplicaciones Web a Medida",
    category: "Full Stack",
    badge: "TypeScript",
    image: "/images/services/service-apps-web.jpg",
    aspect: "standard",
    projectId: "luxor-pay",
    demoUrl: "https://luxor-pay-frontend.vercel.app",
  },
];

export default function ProjectsSection({ dict }: { dict: Dict }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"dynamic" | "grid">("dynamic");
  const [isPaused, setIsPaused] = useState(false);

  // Carousel controls for grid view
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = projects.length;

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[i] as HTMLElement | undefined;
    if (item) track.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
    setIndex(i);
  };
  const prev = () => scrollTo((index - 1 + count) % count);
  const next = () => scrollTo((index + 1) % count);

  const handleOpenProject = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) setSelectedProject(found);
  };

  return (
    <section id="proyectos" className="section-projects" aria-label={dict.projects.title}>
      <div className="section-head reveal">
        <p className="eyebrow">{dict.projects.eyebrow}</p>
        <div>
          <h2>{dict.projects.title}</h2>
          <p>{dict.projects.subtitle}</p>
        </div>

        {/* View Mode & Motion Controls */}
        <div className="showcase-controls-bar" role="toolbar" aria-label="Controles de vista de proyectos">
          <button
            type="button"
            className={`showcase-toggle-pill ${viewMode === "dynamic" ? "is-active" : ""}`}
            onClick={() => setViewMode("dynamic")}
            aria-pressed={viewMode === "dynamic"}
          >
            <span className="showcase-live-dot" aria-hidden="true" />
            <span>Galería Dinámica en Movimiento</span>
          </button>
          <button
            type="button"
            className={`showcase-toggle-pill ${viewMode === "grid" ? "is-active" : ""}`}
            onClick={() => setViewMode("grid")}
            aria-pressed={viewMode === "grid"}
          >
            <span>Ver Tarjetas Individuales</span>
          </button>
          {viewMode === "dynamic" && (
            <button
              type="button"
              className="showcase-pause-btn"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Reanudar movimiento" : "Pausar movimiento"}
              aria-label={isPaused ? "Reanudar movimiento continuo" : "Pausar movimiento continuo"}
            >
              {isPaused ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Reanudar</span>
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  <span>Pausar</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {viewMode === "dynamic" ? (
        /* DYNAMIC CONTINUOUS SHOWCASE (2 MOVING ROWS) */
        <div
          className="dynamic-marquee-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          tabIndex={0}
          role="region"
          aria-label="Galería interactiva de proyectos en producción"
        >
          {/* Row 1: Flowing Left */}
          <div className={`dynamic-marquee-row marquee-left ${isPaused ? "is-paused" : ""}`}>
            {[...ROW_1, ...ROW_1].map((item, idx) => {
              const isDuplicate = idx >= ROW_1.length;
              return (
                <article
                  key={`r1-${item.id}-${idx}`}
                  className={`showcase-card ${item.aspect === "wide" ? "aspect-wide" : "aspect-std"}`}
                  onClick={() => handleOpenProject(item.projectId)}
                  aria-hidden={isDuplicate ? "true" : undefined}
                  tabIndex={isDuplicate ? -1 : 0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenProject(item.projectId);
                    }
                  }}
                  role={isDuplicate ? undefined : "button"}
                  aria-label={isDuplicate ? undefined : `${item.title} - ${item.category}. Ver detalles.`}
                >
                  <div className="showcase-card-media">
                    <img src={item.image} alt="" aria-hidden="true" loading="lazy" />
                    <div className="showcase-card-overlay" />
                    <span className="showcase-status-badge">
                      <span className="live-status-dot" aria-hidden="true" />
                      {item.badge}
                    </span>
                  </div>
                  <div className="showcase-card-meta">
                    <span className="showcase-card-cat">{item.category}</span>
                    <h4 className="showcase-card-title">{item.title}</h4>
                    <div className="showcase-card-cta">
                      <span>Ver detalles</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Row 2: Flowing Right */}
          <div className={`dynamic-marquee-row marquee-right ${isPaused ? "is-paused" : ""}`}>
            {[...ROW_2, ...ROW_2].map((item, idx) => {
              const isDuplicate = idx >= ROW_2.length;
              return (
                <article
                  key={`r2-${item.id}-${idx}`}
                  className={`showcase-card ${item.aspect === "wide" ? "aspect-wide" : "aspect-std"}`}
                  onClick={() => handleOpenProject(item.projectId)}
                  aria-hidden={isDuplicate ? "true" : undefined}
                  tabIndex={isDuplicate ? -1 : 0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenProject(item.projectId);
                    }
                  }}
                  role={isDuplicate ? undefined : "button"}
                  aria-label={isDuplicate ? undefined : `${item.title} - ${item.category}. Ver detalles.`}
                >
                  <div className="showcase-card-media">
                    <img src={item.image} alt="" aria-hidden="true" loading="lazy" />
                    <div className="showcase-card-overlay" />
                    <span className="showcase-status-badge">
                      <span className="live-status-dot" aria-hidden="true" />
                      {item.badge}
                    </span>
                  </div>
                  <div className="showcase-card-meta">
                    <span className="showcase-card-cat">{item.category}</span>
                    <h4 className="showcase-card-title">{item.title}</h4>
                    <div className="showcase-card-cta">
                      <span>Ver detalles</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        /* CLASSIC CAROUSEL VIEW */
        <>
          <div className="gallery-header">
            <div className="gallery-nav">
              <button type="button" className="carousel-arrow carousel-prev" onClick={prev} aria-label="Proyecto anterior">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" className="carousel-arrow carousel-next" onClick={next} aria-label="Siguiente proyecto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="gallery-dots" role="tablist" aria-label="Navegación de proyectos">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={`gallery-dot ${i === index ? "active" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ver proyecto ${p.name}`}
                  role="tab"
                  aria-selected={i === index}
                />
              ))}
            </div>
          </div>

          <div className="carousel-wrapper">
            <div className="carousel-track" ref={trackRef}>
              {projects.map((project) => (
                <div className="carousel-item" key={project.id}>
                  <ProjectCard project={project} dict={dict} onOpenDetails={setSelectedProject} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <ProjectModal project={selectedProject} dict={dict} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
