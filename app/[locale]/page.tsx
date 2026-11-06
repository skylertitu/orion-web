import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import StackSection from "@/components/StackSection";
import { getDict, localePath, readLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────── */}
      <section className="hero">
        {/* Badge de disponibilidad */}
        <div className="hero-availability-badge" aria-label="Estado: disponible para proyectos">
          <span className="hero-status-dot" aria-hidden="true" />
          <span>{dict.hero.availability}</span>
          <span className="hero-availability-sep" aria-hidden="true">·</span>
          <span className="hero-location-pill">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {dict.hero.location}
          </span>
        </div>

        <h1 className="hero-headline">
          {dict.hero.titleLine1}{" "}
          <span>{dict.hero.titleLine2}</span>
        </h1>

        <p className="hero-lede">{dict.hero.lede}</p>

        <div className="hero-links">
          <Link
            className="btn btn-primary hero-btn hero-btn-cta"
            href={`${localePath(locale)}#contacto`}
          >
            <span>{dict.hero.ctaContact}</span>
            <span className="hero-btn-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>
          <Link className="btn btn-ghost hero-btn" href={`${localePath(locale)}#proyectos`}>
            <span>{dict.hero.ctaProjects}</span>
            <span className="hero-btn-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Métricas sociales */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Proyectos en producción</span>
          </div>
          <div className="hero-stat-sep" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Años de experiencia</span>
          </div>
          <div className="hero-stat-sep" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-num">6</span>
            <span className="hero-stat-label">Servicios disponibles</span>
          </div>
        </div>

        {/* Orbes decorativos */}
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
      </section>

      {/* ─── Projects Section ────────────────────────────────────── */}
      <ProjectsSection dict={dict} />

      {/* ─── About Me Section ────────────────────────────────────── */}
      <AboutSection dict={dict} locale={locale} />

      {/* ─── Experience Section ─────────────────────────────────── */}
      <ExperienceSection dict={dict} />

      {/* ─── Tech Stack Section ─────────────────────────────────── */}
      <StackSection dict={dict} />

      {/* ─── Services Section ───────────────────────────────────── */}
      <section id="servicios" className="section-services">
        <div className="section-head reveal">
          <p className="eyebrow">{dict.services.eyebrow}</p>
          <div>
            <h2>{dict.services.title}</h2>
            <p>{dict.services.subtitle}</p>
          </div>
        </div>

        <ServicesCarousel dict={dict} locale={locale} />
      </section>

      {/* ─── Contact Section ────────────────────────────────────── */}
      <section id="contacto" className="section-contact">
        <div className="section-head reveal">
          <p className="eyebrow">{dict.contact.eyebrow}</p>
          <div>
            <h2>{dict.contact.title}</h2>
            <p>{dict.contact.subtitle}</p>
          </div>
          {/* Tarjetas de confianza */}
          <div className="contact-trust-row">
            <span className="contact-trust-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Sin compromiso
            </span>
            <span className="contact-trust-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Respuesta en menos de 24h
            </span>
            <span className="contact-trust-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Proyectos y empleo
            </span>
          </div>
        </div>

        <ContactForm dict={dict} />
      </section>
    </>
  );
}
