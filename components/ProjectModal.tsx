"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Dict } from "@/lib/messages/types";

export default function ProjectModal({
  project,
  dict,
  onClose,
}: {
  project: Project | null;
  dict: Dict;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* HERO VISUAL EN PRIMER PLANO */}
        <div className="modal-hero-media">
          <img
            src={project.image}
            alt={project.name}
            className="modal-hero-img"
            loading="lazy"
          />
          <div className="modal-hero-overlay" />

          {/* Barra superior flotante sobre la imagen */}
          <div className="modal-hero-top-bar">
            <span className="modal-category-pill">{project.category}</span>
            <span className="modal-status-pill">
              <span className="live-status-dot" />
              Producción
            </span>
            <button
              type="button"
              className="modal-close-circle"
              onClick={onClose}
              aria-label={dict.projects.closeModal}
              title={dict.projects.closeModal}
            >
              ✕
            </button>
          </div>

          {/* Título sobre la imagen en primer plano */}
          <div className="modal-hero-caption">
            <h2 id="modal-title" className="modal-hero-title">
              {project.name}
            </h2>
            <p className="modal-hero-tagline">{project.tagline}</p>
          </div>
        </div>

        {/* CUERPO DEL MODAL (Abierto, sin contenedores ni cajas anidadas) */}
        <div className="modal-body">
          {/* Barra de metadatos abierta */}
          <div className="modal-meta-bar">
            <div className="modal-meta-item">
              <span className="modal-meta-label">Rol técnico</span>
              <span className="modal-meta-val">Full Stack Developer</span>
            </div>
            <div className="modal-meta-sep" />
            <div className="modal-meta-item">
              <span className="modal-meta-label">Despliegue</span>
              <span className="modal-meta-val">Vercel & Cloud</span>
            </div>
            <div className="modal-meta-actions">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm modal-meta-demo-btn"
              >
                <span>{dict.projects.viewDemo}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <span>Código</span>
                </a>
              )}
            </div>
          </div>

          {/* Problema y Solución lado a lado (abierto, sin tarjetas) */}
          <div className="modal-detail-grid">
            <div className="modal-detail-block">
              <h3 className="modal-section-title">
                <span className="modal-dot" />
                {dict.projects.problemLabel}
              </h3>
              <p className="modal-text">{project.problem}</p>
            </div>

            <div className="modal-detail-block">
              <h3 className="modal-section-title">
                <span className="modal-dot accent" />
                {dict.projects.solutionLabel}
              </h3>
              <p className="modal-text">{project.objective}</p>
            </div>
          </div>

          {/* Mi Participación Real (abierto) */}
          <div className="modal-detail-block">
            <h3 className="modal-section-title">
              <span className="modal-dot highlight" />
              {dict.projects.roleLabel}
            </h3>
            <p className="modal-text">{project.role}</p>
          </div>

          {/* Funcionalidades Destacadas (abierto) */}
          <div className="modal-detail-block">
            <h3 className="modal-section-title">
              <span className="modal-dot" />
              {dict.projects.featuresLabel}
            </h3>
            <ul className="modal-features-grid">
              {project.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <span className="modal-feature-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologías Utilizadas (abierto) */}
          <div className="modal-detail-block">
            <h3 className="modal-section-title">
              <span className="modal-dot accent" />
              {dict.projects.techLabel}
            </h3>
            <div className="tech-tags-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag tech-tag-glow">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Banner de Impacto Logrado (diseño plano sin caja contenedora) */}
          <div className="modal-impact-banner">
            <span className="modal-impact-badge">{dict.projects.impactLabel}</span>
            <p className="modal-impact-text">{project.impact}</p>
          </div>
        </div>

        {/* FOOTER DEL MODAL */}
        <div className="modal-footer">
          <Link
            href={`/es/proyectos/${project.id}`}
            className="btn btn-secondary"
            onClick={onClose}
          >
            <span>Ver caso de estudio</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>{dict.projects.viewDemo}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
