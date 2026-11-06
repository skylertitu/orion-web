import { getDict, readLocale } from "@/lib/i18n";
import ServicesCarousel from "@/components/ServicesCarousel";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);
  return (
    <section id="servicios" className="section-services">
      <div className="section-head reveal">
        <p className="eyebrow">{dict.services.eyebrow}</p>
        <div>
          <h2>{dict.services.title}</h2>
          <p>{dict.services.subtitle}</p>
        </div>
      </div>
      <ServicesCarousel dict={dict} locale={locale} />
    </section>
  );
}