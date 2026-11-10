export type Dict = {
  metaTitle: string;
  metaDescription: string;
  brandHome: string;
  skip: string;
  theme: {
    toggleLight: string;
    toggleDark: string;
  };
  nav: {
    projects: string;
    about: string;
    experience: string;
    stack: string;
    services: string;
    contact: string;
    cv: string;
    more: string;
    privacy: string;
    terms: string;
    blog: string;
  };
  hero: {
    availability: string;
    location: string;
    role: string;
    titleLine1: string;
    titleLine2: string;
    lede: string;
    ctaProjects: string;
    ctaContact: string;
    downloadCv: string;
    cvNotice: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewDemo: string;
    viewDetails: string;
    roleLabel: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    techLabel: string;
    impactLabel: string;
    closeModal: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    education?: {
      title: string;
      subtitle: string;
      items: {
        degree: string;
        institution: string;
        period: string;
        location: string;
        description: string;
      }[];
    };
    points: {
      title: string;
      desc: string;
    }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    projectsLabel: string;
    responsibilitiesLabel: string;
    technologiesLabel: string;
    entries: {
      company: string;
      role: string;
      period: string;
      location: string;
      type: string;
      description: string;
      responsibilities: string[];
      technologies: string[];
      projects?: {
        name: string;
        url: string;
        tag: string;
      }[];
    }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: {
      id: string;
      title: string;
      description: string;
      skills: {
        name: string;
        note: string;
      }[];
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    requestQuote: string;
    items: {
      id: string;
      title: string;
      problem: string;
      solution: string;
      tags: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    projectType: string;
    projectTypes: { id: string; label: string }[];
    message: string;
    messagePh: string;
    submit: string;
    directTitle: string;
    directSubtitle: string;
    copyEmail: string;
    emailCopied: string;
    availability: string;
    location: string;
    responseTime: string;
  };
  footer: {
    rights: string;
    role: string;
    location: string;
    backToTop: string;
  };
};
