import { getDict, readLocale } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function ContactoPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);
  return (
    <section id="contacto" className="section-contact">
      <div className="section-head reveal">
        <p className="eyebrow">{dict.contact.eyebrow}</p>
        <div>
          <h2>{dict.contact.title}</h2>
          <p>{dict.contact.subtitle}</p>
        </div>
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
  );
}