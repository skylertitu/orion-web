import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { getDict, isLocale, locales, readLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return {
    ...pageMeta(locale, dict.metaTitle, dict.metaDescription),
    title: { default: dict.metaTitle, template: `%s | ${site.name}` },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const dict = getDict(locale);

  return (
    <div className="shell">
      <a className="skip" href="#contenido">
        {dict.skip}
      </a>
      <Header locale={locale} />
      <main id="contenido">{children}</main>
      <Footer locale={locale} />
      <ScrollReveal />
    </div>
  );
}
