import type { Metadata } from "next";
import { readLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await readLocale(params);
  const isEs = locale === "es";
  return {
    title: isEs ? "Términos y Condiciones | Siomey Romero" : "Terms and Conditions | Siomey Romero",
    description: isEs
      ? "Términos y condiciones de uso del portafolio profesional de Siomey Romero."
      : "Terms and conditions of use for the professional portfolio of Siomey Romero.",
  };
}

export default async function TerminosPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const isEs = locale === "es";

  return (
    <article className="wrap legal reveal" style={{ padding: "72px 0 96px", maxWidth: "780px" }}>
      <p className="eyebrow">{isEs ? "Aviso Legal" : "Legal Notice"}</p>
      <h1>{isEs ? "Términos y Condiciones" : "Terms and Conditions"}</h1>
      <p>
        {isEs
          ? "Bienvenido al sitio web personal y portafolio profesional de Siomey Romero."
          : "Welcome to the personal website and professional portfolio of Siomey Romero."}
      </p>

      <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="reveal delay-1">
          <h2>{isEs ? "1. Propiedad Intelectual" : "1. Intellectual Property"}</h2>
          <p>
            {isEs
              ? "El contenido, diseño visual, código fuente original y textos de este portafolio son propiedad de Siomey Romero, salvo las marcas comerciales, logos de tecnologías o proyectos de terceros cuyos derechos pertenecen a sus respectivos titulares."
              : "The content, visual design, original code, and copy of this portfolio are the property of Siomey Romero, excluding third-party trademarks, technology logos, or client projects whose rights belong to their respective owners."}
          </p>
        </div>

        <div className="reveal delay-2">
          <h2>{isEs ? "2. Servicios Profesionales" : "2. Professional Services"}</h2>
          <p>
            {isEs
              ? "La información sobre servicios y tecnologías presentada en este sitio tiene fines informativos y de demostración de capacidades profesionales. Cualquier acuerdo comercial se formaliza mediante propuesta o contrato individualizado."
              : "Information regarding services and technologies presented on this site is for informational and capability demonstration purposes. Commercial engagements are formalized through specific agreements or contracts."}
          </p>
        </div>

        <div className="reveal delay-3">
          <h2>{isEs ? "3. Contacto" : "3. Contact"}</h2>
          <p>
            {isEs
              ? `Para consultas comerciales o legales, contactar a: ${site.email}`
              : `For business or legal inquiries, please contact: ${site.email}`}
          </p>
        </div>
      </div>
    </article>
  );
}
