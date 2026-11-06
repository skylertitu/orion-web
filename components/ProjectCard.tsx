"use client";

import type { Project } from "@/lib/projects";
import type { Dict } from "@/lib/messages/types";

export default function ProjectCard({
  project,
  dict,
  onOpenDetails,
  index = 0,
}: {
  project: Project;
  dict: Dict;
  onOpenDetails: (project: Project) => void;
  index?: number;
}) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.name}
          className="project-card-image-img"
          loading="lazy"
        />
        <div className="project-card-image-overlay" />
        <span className="project-card-status-badge">
          <span className="live-status-dot" />
          Producción
        </span>
      </div>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="project-card-icon" aria-hidden="true">
            {project.name.charAt(0)}
          </span>
          <span className="project-card-category">{project.category}</span>
        </div>

        <h3 className="project-title">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <div className="project-tech-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => onOpenDetails(project)}
          >
            {dict.projects.viewDetails}
          </button>
          <a
            className="btn btn-primary btn-sm"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{dict.projects.viewDemo}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}