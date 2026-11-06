import type { Dict } from "./types";

export const en: Dict = {
  metaTitle: "Siomey Romero — Full Stack Developer | Professional Portfolio",
  metaDescription:
    "Professional portfolio of Siomey Romero, Full Stack Developer specialized in Node.js, Next.js, TypeScript, PostgreSQL, and API integrations. Based in Ecuador, open to global opportunities.",
  brandHome: "Siomey Romero, portfolio home",
  skip: "Skip to main content",
  theme: {
    toggleLight: "Switch to light mode",
    toggleDark: "Switch to dark mode",
  },
  nav: {
    projects: "Projects",
    about: "About Me",
    experience: "Experience",
    stack: "Stack",
    services: "Services",
    contact: "Contact",
    cv: "Resume",
    more: "More",
    privacy: "Privacy",
    terms: "Terms",
    blog: "Blog",
  },
  hero: {
    availability: "Available for projects & full-time roles",
    location: "Ecuador (Remote / Hybrid)",
    role: "Full Stack Developer",
    titleLine1: "Building digital solutions",
    titleLine2: "that solve real-world problems.",
    lede: "I develop digital solutions that turn ideas into functional products. Working across web applications, backend systems, and technical integrations, blending design, logic, and modern technology. Specialized in Node.js, Next.js, TypeScript, PostgreSQL and API integrations, with experience in real projects in Ecuador and the Web3 ecosystem on Solana.",
    ctaProjects: "Explore My Projects",
    ctaContact: "Get in Touch",
    downloadCv: "Download Resume",
    cvNotice: "Updated resume PDF is in preparation. Feel free to contact me directly to request it.",
  },
  projects: {
    eyebrow: "01 — Featured Projects",
    title: "Real-world production work.",
    subtitle:
      "A curated selection of platforms, payment gateways, and web apps where I contributed to architecture, frontend engineering, and service integrations.",
    viewDemo: "Live Demo",
    viewDetails: "View Case Study",
    roleLabel: "My Real Contribution",
    problemLabel: "Problem Solved",
    solutionLabel: "Objective & Technical Solution",
    featuresLabel: "Key Features",
    techLabel: "Tech Stack",
    impactLabel: "Verified Impact",
    closeModal: "Close Details",
  },
  about: {
    eyebrow: "02 — About Me",
    title: "Engineering mindset, adaptability, and execution focus.",
    subtitle:
      "Software developer based in Ecuador, committed to building scalable, maintainable, and user-centric web applications.",
    bio1: "I specialize in end-to-end software development, covering responsive modern user interfaces as well as robust backend architectures, relational databases, and third-party service integrations.",
    bio2: "My engineering philosophy centers on methodical problem solving: thoroughly understanding business requirements, designing clean decoupled architectures, and delivering clean, modular, and maintainable code.",
    bio3: "Experienced working within agile engineering teams (Udreamms), integrating diverse third-party APIs, building intelligent workflows with AI agents, and collaborating on Web3 solutions across the Solana ecosystem.",
    points: [
      {
        title: "Pragmatic Full Stack Engineering",
        desc: "Ability to take a feature from UI design concepts to database schema definitions and cloud deployment.",
      },
      {
        title: "API Design & System Integrations",
        desc: "Hands-on experience connecting external services, payment gateways, messaging protocols, and robust webhooks.",
      },
      {
        title: "Fast Learner & Technological Agility",
        desc: "Demonstrated ability to master new stacks, frameworks, and technical domains efficiently under real deadlines.",
      },
    ],
  },
  experience: {
    eyebrow: "03 — Professional Experience",
    title: "Demonstrated engineering track record.",
    subtitle: "Experience in production software teams building scalable digital platforms.",
    company: "Udreamms",
    role: "Full Stack Developer",
    period: "2024 – 2025 (~1.5 years)",
    periodNote: "Active software engineering role contributing to continuous production releases and agile team delivery.",
    location: "Remote / Ecuador",
    description:
      "Full-stack development of web applications, REST backend services, database migrations, and cross-functional agile delivery.",
    responsibilities: [
      "Engineered and maintained responsive frontend components using React, Next.js, and TypeScript with smooth UX interactions.",
      "Built backend business logic, modular services, and secure endpoints in Node.js, integrating third-party APIs.",
      "Modeled relational schemas, structured migrations, and optimized queries with PostgreSQL and Prisma ORM.",
      "Collaborated via Git and GitHub following structured branching models, code reviews, and continuous deployments.",
      "Investigated and resolved critical bugs, optimized web performance metrics, and improved overall reliability.",
    ],
    technologies: ["Node.js", "TypeScript", "Next.js", "React", "PostgreSQL", "Prisma", "REST APIs", "Git & GitHub"],
  },
  stack: {
    eyebrow: "04 — Tech Stack",
    title: "Tools & technologies I build with.",
    subtitle:
      "No arbitrary percentage bars: structured by domain with real-world contextual notes on practical application.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Accessible, responsive, and performance-tuned user interfaces.",
        skills: [
          { name: "React", note: "Reusable components, custom hooks, and modular UI state" },
          { name: "Next.js", note: "App Router, SSR, SSG, and technical SEO" },
          { name: "TypeScript", note: "Strict static typing and safe data contracts" },
          { name: "JavaScript (ES6+)", note: "DOM manipulation, asynchronous workflows, and events" },
          { name: "HTML5 & CSS3", note: "Semantic structure, Flexbox, Grid, and smooth transitions" },
          { name: "Bootstrap / Tailwind", note: "Adaptive layout systems and rapid UI development" },
        ],
      },
      {
        id: "backend",
        title: "Backend & API Architecture",
        description: "Efficient servers, decoupled domain logic, and secure protocols.",
        skills: [
          { name: "Node.js (1-2 yrs)", note: "Primary runtime for microservices and APIs" },
          { name: "NestJS", note: "Enterprise modular architecture and dependency injection" },
          { name: "RESTful APIs", note: "Contract design, pagination, filtering, and HTTP semantics" },
          { name: "API Integrations", note: "Payment gateways, messaging channels, and third-party APIs" },
          { name: "BullMQ", note: "Asynchronous job queues and scheduled task workers" },
        ],
      },
      {
        id: "databases",
        title: "Databases & Persistence",
        description: "Relational modeling, indexed queries, caching layers, and cloud storage.",
        skills: [
          { name: "PostgreSQL", note: "Relational schema design, indexes, and queries" },
          { name: "Prisma ORM", note: "Type-safe migrations, relations, and data access" },
          { name: "Redis", note: "High-speed in-memory caching and worker queues" },
          { name: "Firebase", note: "Firestore, cloud storage, and rapid authentication" },
        ],
      },
      {
        id: "emerging",
        title: "AI, Automation & Web3",
        description: "Pragmatic application of modern tooling to solve specific technical challenges.",
        skills: [
          { name: "AI Agents", note: "Implementation in small projects for workflow automation" },
          { name: "Automation", note: "Data synchronization scripts and background workers" },
          { name: "Solana Blockchain", note: "Solana Web3.js, Wallet Adapters, and token settlements" },
          { name: "Git & GitHub", note: "Version control, feature branching, PRs, and team workflows" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "05 — Professional Services",
    title: "Engineering solutions for your business.",
    subtitle:
      "Services designed for businesses, startups, and clients seeking dependable software delivered with clean craftsmanship.",
    requestQuote: "Request a Quote",
    items: [
      {
        id: "sitios-web",
        title: "Professional Websites & Landing Pages",
        problem: "Does your company lack a strong digital presence or struggle with slow, non-converting web pages?",
        solution:
          "I design and engineer ultra-fast, mobile-first websites optimized for search engines (SEO) and user conversions.",
        tags: ["Next.js", "SEO", "Responsive UI", "Conversions"],
      },
      {
        id: "aplicaciones-web",
        title: "Custom Web Application Development",
        problem: "Need an interactive dashboard, client portal, or custom SaaS tool tailored to your workflow?",
        solution:
          "I build full-featured web applications using React and Next.js, with secure authentication and real-time state.",
        tags: ["React", "TypeScript", "SaaS", "Dashboard"],
      },
      {
        id: "sistemas-administrativos",
        title: "Admin Dashboards & Management Systems",
        problem: "Managing business operations with messy spreadsheets and error-prone manual steps?",
        solution:
          "I create centralized admin portals for inventory management, user tracking, orders, and clean visual analytics.",
        tags: ["CRUD", "PostgreSQL", "Analytics", "Operations"],
      },
      {
        id: "backend-apis",
        title: "Backend Development & Robust APIs",
        problem: "Does your app require a secure server, data validation pipelines, or a reliable database architecture?",
        solution:
          "I build scalable backend services in Node.js or NestJS with PostgreSQL, strict schemas, and clean structure.",
        tags: ["Node.js", "NestJS", "PostgreSQL", "Security"],
      },
      {
        id: "integraciones",
        title: "Third-Party Service Integrations",
        problem: "Want to connect payment processors, instant messaging, CRMs, or cloud storage to your systems?",
        solution:
          "I implement resilient integrations with external APIs, webhook handlers, and automated bidirectional data sync.",
        tags: ["Webhooks", "Stripe", "WhatsApp", "APIs"],
      },
      {
        id: "ia-automatizacion",
        title: "Process Automation & AI Workflows",
        problem: "Is your team wasting hours on manual data classification, repetitive tasks, or basic support queries?",
        solution:
          "I build intelligent agents and automated pipelines that process data and trigger actions without human bottlenecks.",
        tags: ["AI Agents", "Automation", "Productivity"],
      },
    ],
  },
  contact: {
    eyebrow: "06 — Contact",
    title: "Have an opening on your team or a project in mind?",
    subtitle:
      "Let's discuss how I can bring technical value to your company or turn your product vision into functional software.",
    formTitle: "Send Me a Message",
    name: "Your Name or Company",
    namePh: "e.g., Alex Johnson / TechCorp",
    email: "Contact Email",
    emailPh: "your-email@company.com",
    projectType: "Opportunity / Project Type",
    projectTypes: [
      { id: "empleo", label: "Job Opportunity / Full-time Hiring" },
      { id: "sitio-web", label: "Professional Website / Landing Page" },
      { id: "aplicacion-web", label: "Web Application / SaaS" },
      { id: "backend-api", label: "Backend, APIs, or Database" },
      { id: "integracion", label: "Third-Party / Payment Integration" },
      { id: "otro", label: "Other Inquiry / Partnership" },
    ],
    message: "Project or Role Details",
    messagePh: "Tell me about your goals, technical requirements, or role scope...",
    submit: "Send Message via Email",
    directTitle: "Direct Contact Information",
    directSubtitle: "If you prefer reaching out directly or connecting across professional networks:",
    copyEmail: "Copy Email",
    emailCopied: "Email copied to clipboard!",
    availability: "Availability: Open for full-time roles & selected client projects",
    location: "Location: Ecuador (UTC-5 time zone / Americas overlap)",
    responseTime: "Estimated response time: Under 24 hours",
  },
  footer: {
    rights: "All rights reserved.",
    role: "Full Stack Developer",
    location: "Ecuador",
    backToTop: "Back to top ↑",
  },
};
