import Link from "next/link";
import { getDict, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-mark">
              <img src="/orion-logo.png" alt="ORION" width={34} height={34} />
            </span>
            <strong>{site.name}</strong>
          </div>
          <p className="footer-role">{dict.footer.role}</p>
          <p className="footer-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {dict.footer.location}
          </p>
          <p className="footer-blurb">
            Desarrollo de software frontend, backend e integraciones de sistemas digitales de alto impacto.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Navegación</span>
          <Link href={`${localePath(locale)}#proyectos`}>{dict.nav.projects}</Link>
          <Link href={`${localePath(locale)}#sobre-mi`}>{dict.nav.about}</Link>
          <Link href={`${localePath(locale)}#experiencia`}>{dict.nav.experience}</Link>
          <Link href={`${localePath(locale)}#stack`}>{dict.nav.stack}</Link>
          <Link href={`${localePath(locale)}#servicios`}>{dict.nav.services}</Link>
          <Link href={`${localePath(locale)}#contacto`}>{dict.nav.contact}</Link>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Contacto & Redes</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <div className="social-icons">
            <span className="social-icon" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-4.77 0-0.84-.43-1.57-1.1-2.03-0.25-0.32-0.5-0.71-0.78-1.07-0.24-0.32-0.48-0.64-0.74-0.95-0.29-0.37-0.58-0.73-0.9-1.04-0.22-0.22-0.45-0.43-0.69-0.64-0.28-0.26-0.58-0.52-0.89-0.77-0.24-0.2-0.5-0.38-0.77-0.55-0.22-0.14-0.45-0.27-0.68-0.4-0.21-0.12-0.43-0.23-0.65-0.34-0.2-0.1-0.41-0.18-0.61-0.27-0.2-0.09-0.41-0.16-0.62-0.24-0.21-0.07-0.43-0.13-0.64-0.2-0.22-0.08-0.44-0.15-0.66-0.22-0.2-0.07-0.4-0.13-0.6-0.19M9 6h.01M9 16c-0.01-0.02-0.02-0.04-0.02-0.07m3.01.14c-0.01 0.02-0.02 0.04-0.02 0.07m6-6c0 0.56-0.45 1-1 1m0 0c-0.56 0-1-0.44-1-1m0 0c0 0.56-0.45 1-1 1m0 0c-0.56 0-1-0.44-1-1m0 0c0 0.56-0.45 1-1 1m0 0c-0.56 0-1-0.44-1-1" />
              </svg>
            </span>
            <span className="social-icon" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span className="social-icon" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </span>
            <span className="social-icon" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="17.5" x2="17.51" y2="17.5" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="wrap legal-line">
        <span>
          © {currentYear} {site.name} — {dict.footer.rights}
        </span>
        <a href="#contenido" className="back-to-top">
          {dict.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
