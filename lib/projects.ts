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
      "Los sistemas de pago tradicionales sufren de altas comisiones por transacción (2% - 4%), tiempos de acreditación lentos (24 a 72 horas) y fricción técnica para comercios que desean recibir activos digitales y stablecoins.",
    objective:
      "Construir una interfaz de checkout Web3 moderna, intuitiva y ultrarrápida que permita a los usuarios conectar sus billeteras de Solana (Phantom, Solflare) y liquidar pagos en segundos con costos de red mínimos.",
    description:
      "Plataforma frontend de pagos construida con Next.js y TypeScript, integrada al ecosistema de Solana. Ofrece un flujo de cobro optimizado, detección automática de billeteras, validación de saldos y confirmación de transacciones en la red.",
    features: [
      "Conexión nativa con billeteras SPL (Phantom, Solflare, etc.) mediante Wallet Adapter.",
      "Flujo de checkout seguro con validación de transacciones en la blockchain de Solana.",
      "Soporte para múltiples activos digitales y tokens del ecosistema.",
      "Interfaz reactiva con feedback de estado en tiempo real (pendiente, confirmado, error).",
      "Arquitectura de componentes modular y diseño adaptado a dispositivos móviles.",
    ],
    technologies: ["Next.js", "TypeScript", "Solana Web3.js", "Wallet Adapter", "Firebase", "CSS Modules"],
    role: "Desarrollo de la interfaz de usuario en Next.js/TypeScript, integración del SDK de billeteras de Solana, diseño de los estados de checkout y manejo de respuestas en tiempo real.",
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
    demoUrl: "https://itsroosevelt.com",
    featured: true,
    problem:
      "Las empresas y profesionales gestionan su operación a través de herramientas fragmentadas (WhatsApp, Instagram, Telegram, Gmail, Stripe, GitHub), provocando pérdida de contexto, respuestas tardías y desconexión entre finanzas y comunicación.",
    objective:
      "Desarrollar una plataforma centralizada que unifique canales de mensajería, flujos de trabajo, automatizaciones con agentes de IA y métricas financieras en un único panel de comando intuitivo.",
    description:
      "Infraestructura SaaS diseñada para sincronizar múltiples puntos de contacto corporativos. Integra APIs de mensajería, automatizaciones inteligentes para tareas repetitivas y soporte para activos digitales y pasarelas de cobro.",
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
    id: "huarmy-coffee",
    name: "Huarmy Coffee",
    tagline: "Plataforma web corporativa y sistema de reservas para gastronomía tradicional y catering.",
    category: "Web & Gastronomía",
    demoUrl: "https://huarmy-coffee-delta.vercel.app",
    featured: true,
    problem:
      "Un negocio gastronómico y de servicios de catering en Quito requería una presencia digital profesional para atraer tanto a comensales particulares como a empresas interesadas en catering corporativo, sin depender exclusivamente de redes sociales.",
    objective:
      "Crear una experiencia web atractiva y de carga ultra veloz que exhiba la identidad culinaria, la carta gastronómica, los servicios para empresas y facilite la captación directa de reservas y cotizaciones.",
    description:
      "Sitio web moderno desarrollado con enfoque Mobile-First, priorizando la velocidad de carga (Core Web Vitals), fotografía gastronómica optimizada, menú interactivo y formulario de contacto segmentado para eventos.",
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

