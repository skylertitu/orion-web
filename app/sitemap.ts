import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/contacto", "/privacidad", "/terminos"];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1.0 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((id) => [id, `${site.url}/${id}${path}`])),
      },
    }))
  );
}
