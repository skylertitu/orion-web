import { getDict, isLocale, readLocale } from "@/lib/i18n";
import AboutSection from "@/components/AboutSection";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);
  if (!isLocale(locale)) return null;
  return <AboutSection dict={dict} locale={locale as any} />;
}