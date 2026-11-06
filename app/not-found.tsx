import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "120px 0 160px", textAlign: "center" }}>
      <p className="eyebrow" style={{ justifyContent: "center" }}>404</p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 64px)", margin: "16px 0 24px" }}>
        Página no encontrada
      </h1>
      <p style={{ color: "var(--ink-muted)", maxWidth: "48ch", margin: "0 auto 32px" }}>
        La página solicitada no está disponible.
      </p>
      <Link className="btn btn-primary" href="/es">
        Volver al portafolio
      </Link>
    </div>
  );
}
