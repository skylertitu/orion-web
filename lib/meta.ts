import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export function pageMeta(locale: Locale, title: string, description: string, path = ""): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((id) => [id, `/${id}${path}`])),
    },
    openGraph: { title, description, locale },
  };
}
