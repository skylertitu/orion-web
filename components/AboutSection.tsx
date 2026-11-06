import Link from "next/link";
import type { Dict } from "@/lib/messages/types";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function AboutSection({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <section id="sobre-mi" className="section-about">
      <div className="section-head reveal">
        <p className="eyebrow">{dict.about.eyebrow}</p>
        <div>
          <h2>{dict.about.title}</h2>
          <p>{dict.about.subtitle}</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-narrative-card reveal-left">
          <div className="about-narrative-badge">
            <span className="live-status-dot" aria-hidden="true" />
            <span>Full Stack Developer · Soluciones Web y APIs</span>
          </div>

          <div className="about-narrative-body">
            <p>{dict.about.bio1}</p>
            <p>{dict.about.bio2}</p>
            <p>{dict.about.bio3}</p>
          </div>

          <div className="about-values-row">
            <span className="about-value-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Código modular & tipado
            </span>
            <span className="about-value-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Arquitecturas escalables
            </span>
            <span className="about-value-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Enfoque en negocio real
            </span>
          </div>

          <div className="about-cta-row">
            <Link className="btn btn-primary btn-sm" href={`${localePath(locale)}#contacto`}>
              <span>{dict.hero.ctaContact}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="about-highlights-list reveal-right">
          {dict.about.points.map((pt, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-index">0{idx + 1}</div>
              <div>
                <h3 className="highlight-title">{pt.title}</h3>
                <p className="highlight-desc">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}