export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "Web3 & Fintech" | "SaaS & AI" | "Web & Gastronomía";
  demoUrl: string;
  repoUrl?: string;
  featured: boolean;
  problem: string;
  objective: string;
  description: string;
  architecture: string;
  challenges: string;
  solution: string;
  features: string[];
  technologies: string[];
  role: string;
  impact: string;
  accentColor: string;
  mockupBg: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "luxor-pay",
    name: "Luxor Pay",
    tagline: "Pasarela descentralizada de pagos y liquidación de activos sobre la blockchain de Solana.",
    category: "Web3 & Fintech",
    demoUrl: "https://luxor-pay-frontend.vercel.app",
    featured: true,
    problem:
      "Los sistemas de pago tradicionales sufren de altas comisiones por transacción (2% al 4%), tiempos de acreditación lentos (24 a 72 horas) y fricción técnica para comercios que desean recibir activos digitales y stablecoins con liquidación inmediata.",
    objective:
      "Construir una interfaz de checkout Web3 moderna, intuitiva y ultrarrápida que permita a los usuarios conectar sus billeteras de Solana (Phantom, Solflare) y liquidar pagos en segundos con costos de red mínimos.",
    description:
      "Plataforma frontend de pagos construida con Next.js y TypeScript, integrada al ecosistema de Solana. Ofrece un flujo de cobro optimizado, detección automática de billeteras, validación de saldos y confirmación de transacciones en la red.",
    architecture:
      "Frontend desarrollado con Next.js 15 y TypeScript bajo arquitectura modular de componentes. Integración directa con Solana RPC mediante @solana/web3.js y Solana Wallet Adapter. Manejo reactivo de estado de transacción y persistencia en Firebase.",
    challenges:
      "Manejo de estados asíncronos y confirmación de firmas en la blockchain, detección y reconexión resiliente de billeteras ante desconexiones de red, y diseño de feedback en tiempo real sin bloquear la interfaz.",
    solution:
      "Implementación de listeners de estado de conexión con Wallet Adapter, transacciones serializadas y validadas con timeouts configurados y verificación de balances previa a la firma del smart contract.",
    features: [
      "Conexión nativa con billeteras SPL (Phantom, Solflare, etc.) mediante Wallet Adapter.",
      "Flujo de checkout seguro con validación de transacciones en la blockchain de Solana.",
      "Soporte para múltiples activos digitales y tokens del ecosistema.",
      "Interfaz reactiva con feedback de estado en tiempo real (pendiente, confirmado, error).",
      "Arquitectura de componentes modular y diseño adaptado a dispositivos móviles.",
    ],
    technologies: ["Next.js", "TypeScript", "Solana Web3.js", "Wallet Adapter", "Firebase", "CSS Modules"],
    role: "Desarrollo integral de la interfaz de usuario en Next.js/TypeScript, integración del SDK de billeteras de Solana, diseño de los estados de checkout y manejo de respuestas en tiempo real.",
    impact:
      "Liquidación instantánea de transacciones con confirmación en menos de 1 segundo sobre Solana, reduciendo fricción de adopción para usuarios Web3.",
    accentColor: "#00d4ff",
    mockupBg: "linear-gradient(135deg, #0b1526 0%, #03203c 100%)",
    image: "/images/luxor-pay.jpg",
  },
  {
    id: "its-roosevelt",
    name: "Its Roosevelt",
    tagline: "Centro de comando unificado e infraestructura de superinteligencia operativa y multicanal.",
    category: "SaaS & AI",
    demoUrl: "https://www.itsroosevelt.com/",
    featured: true,
    problem:
      "Las empresas y profesionales gestionan su operación a través de herramientas fragmentadas (WhatsApp, Instagram, Telegram, Gmail, Stripe, GitHub), provocando pérdida de contexto, respuestas tardías y desconexión entre finanzas y comunicación.",
    objective:
      "Desarrollar una plataforma centralizada que unifique canales de mensajería, flujos de trabajo, automatizaciones con agentes de IA y métricas financieras en un único panel de comando intuitivo.",
    description:
      "Infraestructura SaaS diseñada para sincronizar múltiples puntos de contacto corporativos. Integra APIs de mensajería, automatizaciones inteligentes para tareas repetitivas y soporte para activos digitales y pasarelas de cobro.",
    architecture:
      "Arquitectura Full Stack basada en Next.js, Node.js y TypeScript. Consumo de endpoints RESTful y procesamiento de eventos vía Webhooks. Persistencia y sincronización en Firebase y PostgreSQL.",
    challenges:
      "Sincronización de eventos concurrentes provenientes de múltiples canales de mensajería, normalización de payloads heterogéneos de APIs externas y renderizado de métricas en tiempo real con latencia mínima.",
    solution:
      "Pipeline desacoplado para ingesta de webhooks con validación de firmas, cacheo intermedio de respuestas y diseño de vistas de dashboard modulares con carga perezosa de analíticas.",
    features: [
      "Dashboard unificado con monitoreo de canales y actividad en tiempo real.",
      "Integración de múltiples servicios externos (canales de mensajería, correo y pagos).",
      "Gestión de agentes y asistentes inteligentes para automatización de respuestas y tareas.",
      "Módulo de análisis de datos financieros y seguimiento de métricas operativas.",
      "Diseño enfocado en alta productividad, con navegación por teclado y modo oscuro refinado.",
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "APIs REST", "Webhooks", "Firebase", "Tailwind CSS"],
    role: "Desarrollo de vistas y componentes de la plataforma en Next.js, consumo e integración de endpoints de servicios externos, implementación de flujos de autenticación y optimización de rendimiento.",
    impact:
      "Consolidación de canales dispersos en una sola pantalla, optimizando los tiempos de respuesta y la visibilidad de la operación en tiempo real.",
    accentColor: "#8b5cf6",
    mockupBg: "linear-gradient(135deg, #180b2b 0%, #2e1065 100%)",
    image: "/images/its-roosevelt.jpg",
  },
  {
    id: "royalty",
    name: "Royalty",
    tagline: "Infraestructura soberana de banca digital, custodia de activos y tesorería descentralizada.",
    category: "Web3 & Fintech",
    demoUrl: "https://land-royalty-sigma.vercel.app/en",
    featured: true,
    problem:
      "Las instituciones y empresas modernas requieren infraestructura bancaria digital soberana con custodia de activos de grado institucional, gestión automatizada de tesorería y cuentas corporativas autónomas con cumplimiento normativo.",
    objective:
      "Desarrollar una plataforma institucional de finanzas digitales con interfaz minimalista de alto impacto, arquitectura multilingüe (i18n), módulos de bóvedas de tesorería y analíticas en tiempo real.",
    description:
      "Plataforma Web3 institucional construida con Next.js y TypeScript. Integra sistemas de custodia descentralizada, bóvedas de alto volumen, liquidación automatizada y diseño interactivo con shaders y visualizaciones de datos avanzadas.",
    architecture:
      "Arquitectura moderna en Next.js con soporte i18n nativo, componentes modulares tipados en TypeScript, optimización de renderizado para visualizaciones matemáticas y microservicios de liquidación financiera.",
    challenges:
      "Renderizado fluido de visualizaciones de partículas 3D en la web manteniendo tiempos de carga ultrarrápidos, estructuración segura de flujos de custodia institucional y diseño responsivo sin degradación de framerate.",
    solution:
      "Optimización de gráficos basados en WebGL/Canvas con lazy loading, desacoplamiento de componentes de presentación y consumo estructurado de contratos inteligentes y APIs financieras.",
    features: [
      "Infraestructura de banca digital soberana de última generación.",
      "Custodia de activos de grado institucional y bóvedas de alta tesorería.",
      "Cuentas corporativas autónomas descentralizadas con conciliación automática.",
      "Interfaz inmersiva con soporte multilingüe completo (ES/EN) y modo oscuro de alta fidelidad.",
      "Rendimiento optimizado para carga instantánea y máxima seguridad en transacciones.",
    ],
    technologies: ["Next.js", "TypeScript", "WebGL / Canvas", "Tailwind CSS", "Web3 APIs", "Vercel"],
    role: "Desarrollo frontend integral de la plataforma institucional, maquetación responsiva de alta fidelidad, internacionalización (i18n) e integración de componentes interactivos.",
    impact:
      "Presentación institucional de alto impacto para inversores y clientes corporativos con experiencia de navegación fluida y tiempos de carga inferiores a 1.2s.",
    accentColor: "#3b82f6",
    mockupBg: "linear-gradient(135deg, #050b1a 0%, #0d1e3d 100%)",
    image: "/images/royalty.jpg",
  },
  {
    id: "huarmy-coffee",
    name: "Huarmy Coffee",
    tagline: "Plataforma web corporativa y sistema de reservas para gastronomía tradicional y catering.",
    category: "Web & Gastronomía",
    demoUrl: "https://fase2.grupozonaequinoccial.com/",
    featured: true,
    problem:
      "Un negocio gastronómico y de servicios de catering en Quito requería una presencia digital profesional para atraer tanto a comensales particulares como a empresas interesadas en catering corporativo, sin depender exclusivamente de redes sociales.",
    objective:
      "Crear una experiencia web atractiva y de carga ultra veloz que exhiba la identidad culinaria, la carta gastronómica, los servicios para empresas y facilite la captación directa de reservas y cotizaciones.",
    description:
      "Sitio web moderno desarrollado con enfoque Mobile-First, priorizando la velocidad de carga (Core Web Vitals), fotografía gastronómica optimizada, menú interactivo y formulario de contacto segmentado para eventos.",
    architecture:
      "Aplicación Next.js con Server-Side Rendering y Static Generation para máxima velocidad y SEO técnico. CSS moderno modular sin sobrecarga de librerías externas para tiempos de carga < 1s.",
    challenges:
      "Optimización de imágenes gastronómicas de alta resolución para evitar penalizaciones en Core Web Vitals, estructuración de esquemas de datos Schema.org para SEO local en Quito y diseño de reservas interactivo.",
    solution:
      "Pipeline de optimización de imágenes en formatos WebP/AVIF con responsive srcset, implementación de microdatos JSON-LD para negocios locales y validación cliente/servidor de formularios.",
    features: [
      "Menú digital interactivo categorizado por secciones gastronómicas.",
      "Módulo específico para cotización de servicios de catering corporativo y eventos.",
      "Flujo guiado para solicitud de reservas con validación de fechas y horarios.",
      "Optimización SEO local para búsquedas gastronómicas en Quito.",
      "Rendimiento optimizado con carga asíncrona de recursos y fuentes locales.",
    ],
    technologies: ["React / Next.js", "TypeScript", "HTML5 Semántico", "CSS Moderno", "SEO Técnico", "Responsive UI"],
    role: "Diseño UX/UI, maquetación y desarrollo integral de la plataforma web, implementación de formularios de reserva y optimización de velocidad de carga y SEO.",
    impact:
      "Presencia digital independiente con tiempos de carga inferiores a 1 segundo y canal directo de cotizaciones para eventos empresariales.",
    accentColor: "#f59e0b",
    mockupBg: "linear-gradient(135deg, #26160c 0%, #451a03 100%)",
    image: "/images/huarmy-coffee.jpg",
  },
];
