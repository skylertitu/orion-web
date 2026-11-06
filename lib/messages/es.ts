import type { Dict } from "./types";

export const es: Dict = {
  metaTitle: "Siomey Romero — Full Stack Developer | Portafolio Profesional",
  metaDescription:
    "Portafolio profesional de Siomey Romero, desarrolladora Full Stack especializada en Node.js, Next.js, TypeScript, PostgreSQL e integración de APIs. Experiencia en proyectos reales en Ecuador.",
  brandHome: "Siomey Romero, inicio del portafolio",
  skip: "Saltar al contenido principal",
  theme: {
    toggleLight: "Cambiar a modo claro",
    toggleDark: "Cambiar a modo oscuro",
  },
  nav: {
    projects: "Proyectos",
    about: "Sobre Mí",
    experience: "Experiencia",
    stack: "Stack",
    services: "Servicios",
    contact: "Contacto",
    cv: "CV",
    more: "Más",
    privacy: "Privacidad",
    terms: "Términos",
    blog: "Blog",
  },
  hero: {
    availability: "Disponible para proyectos y empleo",
    location: "Ecuador (Remoto / Híbrido)",
    role: "Full Stack Developer",
    titleLine1: "Construyo soluciones digitales",
    titleLine2: "que resuelven problemas reales.",
    lede: "Desarrollo soluciones digitales que convierten ideas en productos funcionales. Trabajo en aplicaciones web, sistemas backend e integraciones tecnológicas, combinando diseño, lógica y tecnología. Especializada en Node.js, Next.js, TypeScript, PostgreSQL e integración de APIs, con experiencia en proyectos reales en Ecuador y ecosistema Web3 sobre Solana.",
    ctaProjects: "Ver mis proyectos",
    ctaContact: "Contactarme",
    downloadCv: "Descargar CV",
    cvNotice: "El currículum actualizado en PDF está en preparación. Puedes contactarme directamente para solicitarlo.",
  },
  projects: {
    eyebrow: "01 — Proyectos Destacados",
    title: "Trabajo real en producción.",
    subtitle:
      "Una selección de plataformas, pasarelas y aplicaciones web donde he participado, diseñando arquitecturas e integrando servicios.",
    viewDemo: "Ver demo en vivo",
    viewDetails: "Ver caso de estudio",
    roleLabel: "Mi participación real",
    problemLabel: "El problema que resuelve",
    solutionLabel: "Objetivo y solución técnica",
    featuresLabel: "Funcionalidades destacadas",
    techLabel: "Tecnologías utilizadas",
    impactLabel: "Impacto logrado",
    closeModal: "Cerrar detalles",
  },
  about: {
    eyebrow: "02 — Sobre Mí",
    title: "Lógica técnica, adaptabilidad y enfoque en resultados.",
    subtitle:
      "Desarrolladora de software con base en Ecuador, orientada a construir software escalable, mantenible y centrado en el usuario.",
    bio1: "Me dedico al desarrollo de soluciones de software integrales, cubriendo tanto interfaces web modernas y responsivas como arquitecturas backend robustas, bases de datos e integraciones de servicios.",
    bio2: "Mi enfoque de trabajo se basa en la resolución metódica de problemas: entiendo a fondo las necesidades del cliente o negocio, analizo la arquitectura óptima y traduzco requerimientos complejos en código limpio, modular y fácil de mantener.",
    bio3: "Cuento con experiencia de trabajo en equipo en entornos ágiles (Udreamms), integrando diversas APIs de terceros, experimentando con agentes de inteligencia artificial y colaborando en soluciones del ecosistema Web3 sobre Solana.",
    education: {
      title: "Educación",
      subtitle: "Formación académica y certificaciones",
      items: [
        {
          degree: "Ingeniería de Sistemas",
          institution: "Universidad de las Américas (UDLA)",
          period: "2020 - 2024",
          location: "Quito, Ecuador",
          description: "Enfoque en desarrollo de software, arquitecturas distribuidas y bases de datos."
        },
        {
          degree: "Certificación AWS Cloud Practitioner",
          institution: "Amazon Web Services",
          period: "2023",
          location: "Online",
          description: "Certificación en fundamentos de computación en la nube con AWS."
        },
        {
          degree: "Certificación Scrum Master",
          institution: "Scrum Alliance",
          period: "2022",
          location: "Online",
          description: "Certificación en metodologías ágiles y marco de trabajo Scrum."
        }
      ]
    },
    points: [
      {
        title: "Desarrollo Full Stack pragmático",
        desc: "Capacidad para llevar una funcionalidad desde el diseño UI hasta el esquema en base de datos y despliegue.",
      },
      {
        title: "Diseño e integración de APIs",
        desc: "Experiencia conectando servicios externos, pasarelas de pago, mensajería y webhooks con validación rigurosa.",
      },
      {
        title: "Aprendizaje continuo y flexibilidad",
        desc: "Habilidad demostrada para asimilar nuevas herramientas, frameworks y dominios técnicos en tiempos cortos.",
      },
    ],
  },
  experience: {
    eyebrow: "03 — Experiencia Profesional",
    title: "Trayectoria laboral comprobable.",
    subtitle: "Experiencia en equipos de ingeniería construyendo plataformas y productos digitales.",
    company: "Udreamms",
    role: "Full Stack Developer",
    period: "2024 – 2025 (~1 año y medio)",
    periodNote: "Desarrollo activo en equipo de ingeniería con entregas continuas y metodologías ágiles.",
    location: "Remoto / Ecuador",
    description:
      "Desarrollo de aplicaciones y plataformas web, diseño de endpoints backend, persistencia de datos y colaboración multidisciplinaria en entregas continuas.",
    responsibilities: [
      "Desarrollo y mantenimiento de componentes frontend con React, Next.js y TypeScript, asegurando interactividad fluida y diseño responsivo.",
      "Implementación de lógica de negocio y endpoints en Node.js, integrando APIs REST y servicios de terceros.",
      "Modelado de datos, consultas y migraciones utilizando PostgreSQL y Prisma ORM.",
      "Colaboración mediante Git/GitHub siguiendo flujos de trabajo estructurados, revisiones de código y control de versiones.",
      "Participación en la resolución de bugs críticos, optimización de tiempos de carga y refinamiento de experiencia de usuario.",
    ],
    technologies: ["Node.js", "TypeScript", "Next.js", "React", "PostgreSQL", "Prisma", "APIs REST", "Git & GitHub"],
  },
  stack: {
    eyebrow: "04 — Stack Tecnológico",
    title: "Herramientas y tecnologías con las que construyo.",
    subtitle:
      "Sin porcentajes inventados: organizadas por áreas de dominio con contexto real de aplicación en proyectos.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Interfaces intuitivas, responsivas y accesibles con altos estándares de rendimiento.",
        skills: [
          { name: "React", note: "Componentes reutilizables, hooks y arquitectura modular" },
          { name: "Next.js", note: "App Router, SSR, SSG y optimización SEO" },
          { name: "TypeScript", note: "Tipado estático robusto y contratos de datos seguros" },
          { name: "JavaScript (ES6+)", note: "Manipulación de DOM, eventos y asincronía" },
          { name: "HTML5 & CSS3", note: "Maquetación semántica, Flexbox, Grid y animaciones" },
          { name: "Bootstrap / Tailwind", note: "Sistemas de diseño ágiles y adaptables" },
        ],
      },
      {
        id: "backend",
        title: "Backend & Arquitectura de APIs",
        description: "Servidores eficientes, lógica de negocio desacoplada y comunicación segura.",
        skills: [
          { name: "Node.js (1-2 años)", note: "Runtime principal para microservicios y APIs" },
          { name: "NestJS", note: "Arquitectura empresarial modular e inyección de dependencias" },
          { name: "APIs RESTful", note: "Diseño de contratos, paginación, filtros y códigos HTTP" },
          { name: "Integración de APIs", note: "Conexión de pasarelas, mensajería y servicios externos" },
          { name: "BullMQ", note: "Colas de procesamiento asíncrono y tareas programadas" },
        ],
      },
      {
        id: "databases",
        title: "Bases de Datos & Persistencia",
        description: "Modelado relacional, consultas optimizadas, caché y almacenamiento en la nube.",
        skills: [
          { name: "PostgreSQL", note: "Diseño de esquemas relacionales, índices y consultas" },
          { name: "Prisma ORM", note: "Migraciones seguras, relaciones y queries tipadas" },
          { name: "Redis", note: "Caché en memoria rápida y soporte para colas de trabajo" },
          { name: "Firebase", note: "Firestore, Storage y autenticación rápida" },
        ],
      },
      {
        id: "emerging",
        title: "IA, Automatización & Web3",
        description: "Exploración aplicada de nuevas tecnologías para resolver requerimientos específicos.",
        skills: [
          { name: "Agentes de IA", note: "Implementación en proyectos pequeños para flujos y asistencia" },
          { name: "Automatización", note: "Scripts de sincronización y procesamiento de datos" },
          { name: "Solana Blockchain", note: "Solana Web3.js, Wallet Adapter y pagos con tokens" },
          { name: "Git & GitHub", note: "Control de versiones, branches, PRs y colaboración" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "05 — Servicios Profesionales",
    title: "Soluciones de ingeniería para tus proyectos.",
    subtitle:
      "Servicios orientados a empresas, startups y clientes que necesitan software bien construido, a tiempo y sin rodeos.",
    requestQuote: "Solicitar cotización",
    items: [
      {
        id: "sitios-web",
        title: "Sitios Web Profesionales y Landing Pages",
        problem: "¿Tu empresa o marca personal no tiene presencia digital o tu web actual es lenta y no convierte?",
        solution:
          "Diseño y desarrollo sitios web de carga ultra rápida, adaptados a móviles y optimizados para motores de búsqueda (SEO).",
        tags: ["Next.js", "SEO", "Responsive UI", "Conversión"],
      },
      {
        id: "aplicaciones-web",
        title: "Desarrollo de Aplicaciones Web a Medida",
        problem: "¿Necesitas una herramienta interactiva, portal de clientes o SaaS con lógica especializada?",
        solution:
          "Construyo aplicaciones web completas con React y Next.js, con flujos de autenticación, paneles interactivos y estado reactivo.",
        tags: ["React", "TypeScript", "SaaS", "Dashboard"],
      },
      {
        id: "sistemas-administrativos",
        title: "Sistemas Administrativos y Dashboards",
        problem: "¿Gestionas tu negocio con hojas de cálculo dispersas y procesos manuales propensos a error?",
        solution:
          "Creo paneles de administración centralizados para control de inventarios, pedidos, usuarios y reportes visuales.",
        tags: ["CRUD", "PostgreSQL", "Métricas", "Gestión"],
      },
      {
        id: "backend-apis",
        title: "Desarrollo Backend y APIs Robustas",
        problem: "¿Tu aplicación requiere un servidor seguro, procesamiento de datos o una base de datos bien estructurada?",
        solution:
          "Desarrollo backends escalables en Node.js o NestJS con PostgreSQL, validaciones estrictas y arquitectura limpia.",
        tags: ["Node.js", "NestJS", "PostgreSQL", "Seguridad"],
      },
      {
        id: "integraciones",
        title: "Integración de Servicios Externos",
        problem: "¿Deseas conectar pasarelas de pago, mensajería instantánea, CRMs o servicios en la nube a tu sistema?",
        solution:
          "Implemento conexiones seguras con APIs de terceros, manejo de webhooks y sincronización automática de información.",
        tags: ["Webhooks", "Stripe", "WhatsApp", "APIs"],
      },
      {
        id: "ia-automatizacion",
        title: "Automatización y Funcionalidades con IA",
        problem: "¿Tu equipo pierde horas valiosas realizando tareas repetitivas o respondiendo consultas frecuentes?",
        solution:
          "Desarrollo agentes inteligentes y flujos automatizados para clasificar datos, responder usuarios o procesar información sin intervención manual.",
        tags: ["Agentes IA", "Automatización", "Productividad"],
      },
    ],
  },
  contact: {
    eyebrow: "06 — Contacto",
    title: "¿Tienes un proyecto o una vacante en tu equipo?",
    subtitle:
      "Hablemos sobre cómo puedo aportar valor técnico a tu empresa o convertir tu idea de negocio en software funcional.",
    formTitle: "Envíame un mensaje",
    name: "Tu nombre o empresa",
    namePh: "Ej. Valeria Morales / TechCorp",
    email: "Correo electrónico de contacto",
    emailPh: "tu-correo@empresa.com",
    projectType: "Tipo de oportunidad o proyecto",
    projectTypes: [
      { id: "empleo", label: "Oportunidad Laboral / Contratación" },
      { id: "sitio-web", label: "Desarrollo de Sitio Web / Landing" },
      { id: "aplicacion-web", label: "Aplicación Web / SaaS" },
      { id: "backend-api", label: "Backend, APIs o Base de Datos" },
      { id: "integracion", label: "Integración de Servicios / Pagos" },
      { id: "otro", label: "Otra consulta o propuesta" },
    ],
    message: "Detalle del proyecto o consulta",
    messagePh: "Cuéntame sobre el objetivo, tecnologías requeridas o alcance de la posición...",
    submit: "Enviar mensaje por correo",
    directTitle: "Información de contacto directa",
    directSubtitle: "Si prefieres escribir directamente o conectar en redes profesionales:",
    copyEmail: "Copiar correo",
    emailCopied: "¡Correo copiado al portapapeles!",
    availability: "Disponibilidad: Inmediata para proyectos y posiciones remotas",
    location: "Ubicación: Ecuador (Zona horaria UTC-5 / ECT)",
    responseTime: "Tiempo estimado de respuesta: Menos de 24 horas",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    role: "Full Stack Developer",
    location: "Ecuador",
    backToTop: "Volver arriba ↑",
  },
};
