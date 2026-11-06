import { getDict, readLocale } from "@/lib/i18n";
import ExperienceSection from "@/components/ExperienceSection";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);
  return <ExperienceSection dict={dict} />;
}