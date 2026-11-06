import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/syne/500.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/syne/latin-ext-500.css";
import "@fontsource/syne/latin-ext-600.css";
import "@fontsource/syne/latin-ext-700.css";
import "@fontsource/syne/latin-ext-800.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/latin-ext-400.css";
import "@fontsource/manrope/latin-ext-500.css";
import "@fontsource/manrope/latin-ext-600.css";
import "@fontsource/manrope/latin-ext-700.css";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { getDict, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Siomey Romero — Portfolio",
  title: {
    default: "Siomey Romero — Full Stack Developer",
    template: "%s | Siomey Romero",
  },
  description:
    "Portafolio profesional de Siomey Romero. Desarrolladora de Software Full Stack especializada en Node.js, Next.js, TypeScript, PostgreSQL e integración de APIs.",
  keywords: [
    "Siomey Romero",
    "Full Stack Developer",
    "Desarrolladora de Software",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Solana",
    "Web3",
    "Ecuador",
  ],
  authors: [{ name: "Siomey Romero", url: site.url }],
  creator: "Siomey Romero",
  openGraph: {
    type: "website",
    locale: "es_EC",
    alternateLocale: ["en_US"],
    url: site.url,
    title: "Siomey Romero — Full Stack Developer",
    description:
      "Desarrollo soluciones digitales que convierten ideas en productos funcionales. Full Stack Developer especializada en Node.js, Next.js y APIs.",
    siteName: "Siomey Romero — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siomey Romero — Full Stack Developer",
    description:
      "Desarrollo soluciones digitales que convierten ideas en productos funcionales. Full Stack Developer especializada en Node.js, Next.js y APIs.",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerList = await headers();
  const raw = headerList.get("x-orion-locale") || "es";
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDict(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "EC",
        },
        sameAs: [site.github, site.linkedin],
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Next.js",
          "React",
          "NestJS",
          "PostgreSQL",
          "Prisma ORM",
          "Solana",
          "REST APIs",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: dict.metaTitle,
        description: dict.metaDescription,
        mainEntity: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/orion-logo.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("portfolio_theme");var t=s||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ParticlesBackground />
        {children}
        <a
          href="https://wa.me/593963142795"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.017.501 3.917 1.379 5.582L.057 23.43a.5.5 0 00.608.608l5.848-1.322A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.103-1.405l-.366-.217-3.82.864.813-3.72-.238-.382A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
