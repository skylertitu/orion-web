import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict, isLocale, locales } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];
  for (const locale of locales) {
    for (const project of projects) {
      params.push({ locale, id: project.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale)) return {};
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const isEs = locale === "es";
  const title = `${project.name} — Caso de Estudio de Ingeniería`;
  const description = project.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}/proyectos/${project.id}`,
      images: [{ url: `${site.url}${project.image}` }],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) notFound();

  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const isEs = locale === "es";
  const dict = getDict(locale);

  return (
    <div className="case-study-page">
      {/* ─── Breadcrumb / Nav Back ─── */}
      <div className="wrap">
        <div className="case-study-nav">
          <Link href={`/${locale}#proyectos`} className="case-study-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span>{isEs ? "Volver a Proyectos Destacados" : "Back to Featured Projects"}</span>
          </Link>
          <div className="case-study-badges">
            <span className="case-study-cat-pill">{project.category}</span>
            <span className="case-study-live-pill">
              <span className="live-status-dot" aria-hidden="true" />
              {isEs ? "En Producción" : "In Production"}
            </span>
          </div>
        </div>

        {/* ─── Hero Header ─── */}
        <header className="case-study-header">
          <h1 className="case-study-title">{project.name}</h1>
          <p className="case-study-tagline">{project.tagline}</p>

          <div className="case-study-actions">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md"
            >
              <span>{isEs ? "Ver Demo en Vivo" : "View Live Demo"}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-md"
              >
                <span>{isEs ? "Repositorio GitHub" : "GitHub Repository"}</span>
              </a>
            ) : (
              <Link href={`/${locale}#contacto`} className="btn btn-ghost btn-md">
                <span>{isEs ? "Contactarme para un proyecto similar" : "Contact for a similar project"}</span>
              </Link>
            )}
          </div>
        </header>

        {/* ─── Main Hero Media Preview ─── */}
        <div className="case-study-media-wrapper">
          <img
            src={project.image}
            alt={`Captura interactiva de ${project.name}`}
            className="case-study-main-img"
          />
          <div className="case-study-media-overlay" />
        </div>

        {/* ─── Technical Fast-Facts Metadata ─── */}
        <div className="case-study-meta-strip">
          <div className="case-study-meta-col">
            <span className="case-study-meta-k">{isEs ? "ROL TÉCNICO" : "ENGINEERING ROLE"}</span>
            <span className="case-study-meta-v">Full Stack Developer</span>
          </div>
          <div className="case-study-meta-sep" />
          <div className="case-study-meta-col">
            <span className="case-study-meta-k">{isEs ? "DESPLIEGUE" : "DEPLOYMENT"}</span>
            <span className="case-study-meta-v">Vercel & Cloud</span>
          </div>
          <div className="case-study-meta-sep" />
          <div className="case-study-meta-col">
            <span className="case-study-meta-k">{isEs ? "CATEGORÍA" : "CATEGORY"}</span>
            <span className="case-study-meta-v">{project.category}</span>
          </div>
          <div className="case-study-meta-sep" />
          <div className="case-study-meta-col">
            <span className="case-study-meta-k">{isEs ? "DISPONIBILIDAD" : "AVAILABILITY"}</span>
            <span className="case-study-meta-v">{isEs ? "Remoto Internacional" : "Worldwide Remote"}</span>
          </div>
        </div>

        {/* ─── Deep Dive Engineering Sections ─── */}
        <div className="case-study-body">
          {/* 01. Contexto & Problema */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">01</span>
              <h2>{isEs ? "El Problema de Negocio y Fricción Técnica" : "The Business Problem & Technical Friction"}</h2>
            </div>
            <p className="case-study-text">{project.problem}</p>
          </section>

          {/* 02. Objetivo & Solución de Ingeniería */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">02</span>
              <h2>{isEs ? "Objetivo de Ingeniería y Solución Implementada" : "Engineering Objective & Implemented Solution"}</h2>
            </div>
            <p className="case-study-text">{project.objective}</p>
            <p className="case-study-text">{project.description}</p>
          </section>

          {/* 03. Arquitectura Técnica */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">03</span>
              <h2>{isEs ? "Arquitectura del Sistema y Patrones de Diseño" : "System Architecture & Design Patterns"}</h2>
            </div>
            <p className="case-study-text">{project.architecture}</p>
          </section>

          {/* 04. Desafíos y Soluciones */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">04</span>
              <h2>{isEs ? "Desafíos de Implementación y Soluciones" : "Implementation Challenges & Solutions"}</h2>
            </div>
            <div className="case-study-challenge-grid">
              <div className="case-study-challenge-item">
                <span className="challenge-label">{isEs ? "Desafío Técnico" : "Technical Challenge"}</span>
                <p className="case-study-text">{project.challenges}</p>
              </div>
              <div className="case-study-challenge-item">
                <span className="solution-label">{isEs ? "Solución Aplicada" : "Applied Solution"}</span>
                <p className="case-study-text">{project.solution}</p>
              </div>
            </div>
          </section>

          {/* 05. Funcionalidades Clave */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">05</span>
              <h2>{isEs ? "Funcionalidades Principales Implementadas" : "Key Implemented Features"}</h2>
            </div>
            <ul className="case-study-features-list">
              {project.features.map((feat, fi) => (
                <li key={fi} className="case-study-feature-item">
                  <span className="feature-check" aria-hidden="true">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 06. Mi Participación Real */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">06</span>
              <h2>{isEs ? "Mi Participación y Responsabilidad Exacta" : "My Exact Role & Responsibilities"}</h2>
            </div>
            <p className="case-study-text">{project.role}</p>
          </section>

          {/* 07. Impacto y Métricas */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">07</span>
              <h2>{isEs ? "Resultados Verificables e Impacto" : "Measurable Results & Impact"}</h2>
            </div>
            <div className="case-study-impact-box">
              <span className="impact-indicator-dot" aria-hidden="true" />
              <p className="case-study-impact-text">{project.impact}</p>
            </div>
          </section>

          {/* 08. Stack Tecnológico */}
          <section className="case-study-section">
            <div className="case-study-section-head">
              <span className="case-study-section-num">08</span>
              <h2>{isEs ? "Stack Tecnológico Utilizado" : "Applied Tech Stack"}</h2>
            </div>
            <div className="case-study-tags-row">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag tech-tag-glow">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ─── Footer CTA ─── */}
        <div className="case-study-footer-cta">
          <div>
            <h3>{isEs ? "¿Buscas una solución con este nivel técnico?" : "Looking for software built with this engineering standard?"}</h3>
            <p>{isEs ? "Disponible para integrarme a equipos de software internacionales o desarrollar productos a medida." : "Available to join international engineering teams or build custom digital products."}</p>
          </div>
          <div className="case-study-footer-buttons">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>{isEs ? "Probar Demo en Vivo" : "Test Live Demo"}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <Link href={`/${locale}#contacto`} className="btn btn-secondary">
              <span>{isEs ? "Contactarme" : "Contact Me"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

