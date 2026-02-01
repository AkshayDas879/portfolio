export interface Project {
    title: string;
    client: string;
    description: string;
    tech: string[];
    link: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
}

export interface Hero {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
}

export interface About {
    heading: string;
    summary: string;
    detailedDescription: string;
    values: string[];
    techStack: {
        core: string;
        architecture: string;
        backend: string;
    };
}

export interface Contact {
    heading: string;
    description: string;
    email: string;
    linkedin: string;
    resumeUrl: string;
}

export interface Seo {
    title: string;
    description: string;
    url: string;
    gaId?: string;
    openGraph: {
        title: string;
        description: string;
        images: string | string[];
    };
}

export interface Personal {
    name: string;
    location: string;
    github: string;
}

export interface NotFound {
    title: string;
    description: string;
    backLinkText: string;
}

export interface PortfolioData {
    seo: Seo;
    personal: Personal;
    hero: Hero;
    about: About;
    projects: Project[];
    experience: Experience[];
    contact: Contact;
    notFound: NotFound;
}
