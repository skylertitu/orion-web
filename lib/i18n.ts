import { notFound } from "next/navigation";
import { en } from "./messages/en";
import { es } from "./messages/es";
import type { Dict } from "./messages/types";

export type { Dict } from "./messages/types";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeChoices: Array<{ id: Locale; native: string }> = [
  { id: "es", native: "Español" },
  { id: "en", native: "English" },
];

const dictionaries: Record<Locale, Dict> = { es, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(locale: string): Dict {
  return isLocale(locale) ? dictionaries[locale] : es;
}

export function localePath(locale: string, path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const [pathname, hash] = path.split("#");
  const clean = pathname === "/" || pathname === "" ? "" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  const base = `/${locale}${clean}`;
  return hash ? `${base}#${hash}` : base || `/${locale}`;
}

export async function readLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
