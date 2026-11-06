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
    title: isEs ? "Política de Privacidad | Siomey Romero" : "Privacy Policy | Siomey Romero",
    description: isEs
      ? "Política de privacidad y tratamiento de datos del portafolio profesional de Siomey Romero."
      : "Privacy policy and data handling for the professional portfolio of Siomey Romero.",
  };
}

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const isEs = locale === "es";

  return (
    <article className="wrap legal reveal" style={{ padding: "72px 0 96px", maxWidth: "780px" }}>
      <p className="eyebrow">{isEs ? "Aviso Legal" : "Legal Notice"}</p>
      <h1>{isEs ? "Política de Privacidad" : "Privacy Policy"}</h1>
      <p>
        {isEs
          ? "Esta política describe cómo se manejan y protegen los datos personales cuando navegas por este sitio web o te comunicas a través de los canales de contacto."
          : "This policy describes how personal data is handled and protected when browsing this website or contacting through available channels."}
      </p>

      <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="reveal delay-1">
          <h2>{isEs ? "1. Datos recopilados" : "1. Information Collected"}</h2>
          <p>
            {isEs
              ? `Cuando utilizas el formulario de contacto o me escribes a ${site.email}, únicamente se procesan los datos que proporcionas voluntariamente (nombre, correo electrónico y mensaje) para responder a tu consulta.`
              : `When using the contact form or writing to ${site.email}, only voluntarily provided information (name, email, and message) is processed strictly to respond to your inquiry.`}
          </p>
        </div>

        <div className="reveal delay-2">
          <h2>{isEs ? "2. Uso de la información" : "2. Use of Information"}</h2>
          <p>
            {isEs
              ? "La información suministrada se utiliza exclusivamente para fines de comunicación profesional, evaluación de oportunidades laborales y presupuestos de desarrollo de software. No se comparte ni vende a terceros."
              : "Information provided is used exclusively for professional communication, evaluation of job opportunities, and software development quotes. It is never sold or shared with third parties."}
          </p>
        </div>

        <div className="reveal delay-3">
          <h2>{isEs ? "3. Contacto" : "3. Contact"}</h2>
          <p>
            {isEs
              ? `Para cualquier duda o ejercicio de derechos sobre tus datos, puedes escribir directamente a ${site.email}.`
              : `For any inquiries or data rights requests, you can reach out directly at ${site.email}.`}
          </p>
        </div>
      </div>
    </article>
  );
}
