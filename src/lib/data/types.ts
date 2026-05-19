export interface Skill {
    label: string;
    color?: string;
}

export interface WorkExperience {
    title: string;
    company: string;
    timeframe: string;
    current: boolean;
    location: string;
    description: string;
    skills: Skill[];
    secondments?: WorkExperience[];
}

export interface TerminalField {
    key: string;
    value: string;
    type: 'string' | 'number' | 'identifier';
}

export interface FeaturedMeta {
    command?: string;
    varName?: string;
    role?: string;
    fields: TerminalField[];
}

export interface Project {
    title: string;
    description: string;
    skills: Skill[];
    timeframe: string;
    link?: string;
    details?: string[];
    featured?: boolean;
    featuredMeta?: FeaturedMeta;
}
