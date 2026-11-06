"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, localePath } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname() || "/es";
  const seg = pathname.split("/")[1] || "es";
  const locale = isLocale(seg) ? seg : "es";
  const isEs = locale === "es";

  return (
    <div className="wrap" style={{ padding: "120px 0 160px", textAlign: "center" }}>
      <p className="eyebrow" style={{ justifyContent: "center" }}>404</p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 64px)", margin: "16px 0 24px" }}>
        {isEs ? "Página no encontrada" : "Page not found"}
      </h1>
      <p style={{ color: "var(--ink-muted)", maxWidth: "48ch", margin: "0 auto 32px" }}>
        {isEs
          ? "La página que buscas no existe o ha sido movida. Puedes volver al inicio del portafolio."
          : "The page you are looking for does not exist or has been moved. You can return to the portfolio home."}
      </p>
      <Link className="btn btn-primary" href={localePath(locale)}>
        {isEs ? "Volver al inicio" : "Back to Home"}
      </Link>
    </div>
  );
}
