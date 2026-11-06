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
        <article className="timeline-card reveal">
          <div className="timeline-header">
            <div className="timeline-badge-group">
              <span className="company-logo-badge" aria-hidden="true">{e.company.charAt(0)}</span>
              <div>
                <h3 className="company-name">{e.company}</h3>
                <p className="job-role">{e.role}</p>
              </div>
            </div>
            <div className="timeline-period-box">
              <span className="period-badge">{e.period}</span>
              <span className="period-location">{e.location}</span>
            </div>
          </div>

          <p className="timeline-desc">{e.description}</p>

          <div className="timeline-section">
            <h4 className="timeline-subheading">Responsabilidades y aportes clave:</h4>
            <ul className="timeline-tasks-list">
              {e.responsibilities.map((resp, i) => (
                <li key={i}>
                  <span className="task-bullet" aria-hidden="true">✦</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="timeline-section">
            <h4 className="timeline-subheading">Tecnologías aplicadas:</h4>
            <div className="tech-tags-list">
              {e.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
