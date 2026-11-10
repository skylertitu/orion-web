import type { Dict } from "@/lib/messages/types";

export default function ExperienceSection({ dict }: { dict: Dict }) {
  const e = dict.experience;

  return (
    <section id="experiencia" className="section-experience" aria-label={e.title}>
      <div className="section-head reveal">
        <p className="eyebrow">{e.eyebrow}</p>
        <div>
          <h2>{e.title}</h2>
          <p>{e.subtitle}</p>
        </div>
      </div>

      <div className="timeline-container wrap">
        {e.entries.map((entry, idx) => (
          <article key={idx} className="timeline-card reveal">
            <div className="timeline-header">
              <div className="timeline-badge-group">
                <span className="company-logo-badge" aria-hidden="true">
                  {entry.company.charAt(0)}
                </span>
                <div>
                  <h3 className="company-name">{entry.company}</h3>
                  <p className="job-role">{entry.role}</p>
                </div>
              </div>
              <div className="timeline-period-box">
                <span className="period-badge">{entry.period}</span>
                <span className="period-location">{entry.location}</span>
              </div>
            </div>

            <p className="timeline-desc">{entry.description}</p>

            {entry.projects && entry.projects.length > 0 && (
              <div className="timeline-section">
                <h4 className="timeline-subheading">{e.projectsLabel}:</h4>
                <div className="exp-projects-grid">
                  {entry.projects.map((proj) => (
                    <a
                      key={proj.name}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-project-chip"
                    >
                      <span className="exp-project-dot" aria-hidden="true" />
                      <span className="exp-project-name">{proj.name}</span>
                      <span className="exp-project-tag">{proj.tag}</span>
                      <svg
                        className="exp-project-arrow"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="timeline-section">
              <h4 className="timeline-subheading">{e.responsibilitiesLabel}:</h4>
              <ul className="timeline-tasks-list">
                {entry.responsibilities.map((resp, i) => (
                  <li key={i}>
                    <span className="task-bullet" aria-hidden="true">
                      ✦
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="timeline-section">
              <h4 className="timeline-subheading">{e.technologiesLabel}:</h4>
              <div className="tech-tags-list">
                {entry.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
