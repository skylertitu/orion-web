"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dict } from "@/lib/messages/types";
import { localePath } from "@/lib/i18n";

const SERVICE_IMAGES: Record<string, string> = {
  "sitios-web": "/images/services/service-sitios-web.jpg",
  "aplicaciones-web": "/images/services/service-apps-web.jpg",
  "sistemas-administrativos": "/images/services/service-dashboards.jpg",
  "backend-apis": "/images/services/service-backend-apis.jpg",
  "integraciones": "/images/services/service-integraciones.jpg",
  "ia-automatizacion": "/images/services/service-ia-automatizacion.jpg",
};

export default function ServicesCarousel({ dict, locale }: { dict: Dict; locale: string }) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    // Prevent flipping if clicking the quote button directly
    if ((e.target as HTMLElement).closest("a")) return;
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="services-flip-gallery">
      <div className="services-flip-grid">
        {dict.services.items.map((service, idx) => {
          const serviceImg = SERVICE_IMAGES[service.id];
          const isFlipped = !!flippedCards[service.id];

          return (
            <div
              key={service.id}
              className={`service-flip-card ${isFlipped ? "is-flipped" : ""}`}
              onClick={(e) => toggleFlip(service.id, e)}
              role="button"
              tabIndex={0}
              aria-label={`${service.title} - Toca para voltear tarjeta`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFlippedCards((prev) => ({ ...prev, [service.id]: !prev[service.id] }));
                }
              }}
            >
              <div className="service-flip-card-inner">
                {/* ─── CARA FRONTAL: Imagen en primer plano ─── */}
                <div className="service-flip-front">
                  <div className="service-flip-media">
                    {serviceImg && (
                      <img
                        src={serviceImg}
                        alt={service.title}
                        loading="lazy"
                        className="service-flip-img"
                      />
                    )}
                    <div className="service-flip-overlay" />

                    {/* Badge de número superior */}
                    <div className="service-flip-top-row">
                      <span className="service-flip-number">0{idx + 1}</span>
                      <span className="service-flip-indicator" title="Girar tarjeta">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                        </svg>
                        <span>Voltear</span>
                      </span>
                    </div>

                    {/* Título en primer plano sobre la imagen */}
                    <div className="service-flip-front-caption">
                      <span className="service-flip-category">Servicio Especializado</span>
                      <h3 className="service-flip-front-title">{service.title}</h3>
                      <div className="service-flip-hint-row">
                        <span className="service-flip-hint">Pasa el cursor o toca para ver detalles</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── CARA POSTERIOR: Información directa y limpia al girar ─── */}
                <div className="service-flip-back">
                  <div className="service-back-top">
                    <span className="service-back-number">0{idx + 1}</span>
                    <span className="service-back-flip-hint" title="Toca para volver a la imagen">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                      </svg>
                      <span>Volver</span>
                    </span>
                  </div>

                  <h3 className="service-back-title">{service.title}</h3>

                  <div className="service-back-body">
                    <div className="service-back-section">
                      <span className="service-back-label">El problema que resuelve</span>
                      <p className="service-back-text">{service.problem}</p>
                    </div>

                    <div className="service-back-section">
                      <span className="service-back-label">Solución técnica</span>
                      <p className="service-back-text">{service.solution}</p>
                    </div>

                    <div className="service-back-tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-back-footer">
                    <Link
                      className="btn btn-primary btn-sm btn-block service-back-cta"
                      href={`${localePath(locale)}#contacto`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{dict.services.requestQuote}</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}