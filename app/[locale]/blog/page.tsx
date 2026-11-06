import { getDict, readLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await readLocale(params);
  const dict = getDict(locale);

  const posts = [
    {
      id: "1",
      title: "Cómo construir APIs RESTful con Node.js y Next.js",
      date: "2024-01-15",
      excerpt:
        "Aprende a crear APIs escalables y seguras usando Node.js, Next.js App Router y Prisma ORM. Incluye autenticación, validación y mejores prácticas.",
      category: "Backend",
      readTime: "5 min read",
      image: "/orion-logo.png",
    },
    {
      id: "2",
      title: "Desarrollo Web3 con Solana: Una guía para principiantes",
      date: "2024-02-10",
      excerpt:
        "Introducción al desarrollo de aplicaciones descentralizadas en la blockchain de Solana usando Web3.js y Wallet Adapter.",
      category: "Web3",
      readTime: "8 min read",
      image: "/orion-logo.png",
    },
    {
      id: "3",
      title: "Optimización de rendimiento en aplicaciones Next.js",
      date: "2024-03-05",
      excerpt:
        "Técnicas para mejorar el rendimiento de tus aplicaciones Next.js: App Router, SSR, SSG, ISR y optimización de imágenes.",
      category: "Frontend",
      readTime: "6 min read",
      image: "/orion-logo.png",
    },
    {
      id: "4",
      title: "Integración de pasarelas de pago con Stripe",
      date: "2024-03-20",
      excerpt:
        "Cómo integrar Stripe en tus aplicaciones web para aceptar pagos en línea de forma segura y eficiente.",
      category: "Integraciones",
      readTime: "7 min read",
      image: "/orion-logo.png",
    },
    {
      id: "5",
      title: "Agentes de IA: Automatización de flujos de trabajo",
      date: "2024-04-01",
      excerpt:
        "Cómo crear agentes inteligentes usando modelos de lenguaje y frameworks de automatización para mejorar la productividad.",
      category: "IA",
      readTime: "10 min read",
      image: "/orion-logo.png",
    },
  ];

  return (
    <section className="section-blog">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">📝 Blog</p>
          <div>
            <h2>Artículos y Tutoriales</h2>
            <p>Comparte mi conocimiento sobre desarrollo de software, tecnologías emergentes y mejores prácticas.</p>
          </div>
        </div>

        <div className="blog-grid">
          {posts.map((post, idx) => (
            <article key={post.id} className={`blog-post reveal delay-${(idx % 4) + 1}`}>
              <div className="blog-post-image" aria-hidden="true">
                <span className="blog-post-image-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </span>
              </div>
              <div className="blog-post-content">
                <span className="blog-post-category">{post.category}</span>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <a href={`/blog/${post.id}`} className="btn btn-ghost btn-sm">
                  Leer artículo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}