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
}

export interface Project {
    title: string;
    description: string;
    skills: Skill[];
    timeframe: number;
    link?: string;
    details?: string[];
}

export const PROJECT_LIST: Project[] = [
    {
        title: 'MediOrganizer',
        description:
            'Healthcare appointment scheduling and calling system, streamlining patient scheduling and queue management with HL7 model support for integration.',
        skills: [{ label: 'Angular' }, { label: 'Java' }, { label: 'LDAP' }, { label: 'HL7' }, { label: 'PostgreSQL' }],
        timeframe: 2017,
        link: "https://www.artiisgroup.cz/",
/*  hidden for now - problems with styling grid cards to show details - come back to this later
         details: ['lead developer', 'HL7 FHIR integration', 'LDAP authentication'] 
*/
    },
    {
        title: 'MediShare',
        description:
            'Online scheduling system designed for healthcare with dynamic module snap-ins configuration, SSO login, and OAuth2 for secure authentication.',
        skills: [{ label: 'Angular' }, { label: 'Docker' }, { label: 'OAuth2' }, { label: 'NodeJS' }],
        timeframe: 2022,
        link: "https://mamoobjpac.fnol.cz/"
    },
    {
        title: 'MediReha',
        description: 'System for managing patient rehabilitation plans with rule-based processes for clinical and business validations.',
        skills: [{label: 'Angular'}, {label: 'Business Rules'}, {label: 'REST API'}, {label: 'Java'}],
        timeframe: 2022,
        link: "https://www.rehasys.cz/"
    },
    {
        title: 'MaRIS',
        description: 'System for managing patient data in mammography centers, with advanced workflow and external system integrations.',
        skills: [{label: 'Spring'}, {label: 'Java'}, {label: 'REST API'}],
        timeframe: 2019
    },
    {
        title: 'MediBus',
        description: 'Healthcare integration platform for data exchange using HL7 FHIR standards and Spring Integration.',
        skills: [{label: 'HL7 FHIR'}, {label: 'Spring'}, {label: 'Java'}],
        timeframe: 2020
    }
];

export const WORK_EXPERIENCE_LIST: WorkExperience[] = [
    {
        title: 'Junior Front End Developer',
        company: 'ARTIIS GROUP, a.s.',
        timeframe: '2018 → 2021',
        current: false,
        location: 'CZ, Brno',
        description:
            'Developed front-end application, utilizing Angular framework and Typescript. My responsibilities included implementing application logic, styling using Bootstrap, and implementing APIs utilizing RxJS.',
        skills: [{ label: 'Angular' }, { label: 'Bootstrap' }, { label: 'RxJS' }]
    },
    {
        title: 'Senior Front End Developer',
        company: 'ARTIIS GROUP, a.s.',
        timeframe: '2021 → 2022',
        current: false,
        location: 'CZ, Brno',
        description:
            'Ensured the timely updates of front-end libraries. Maintained and upgraded complex application from Angular 4 -> Angular 12. Spearheaded the development of a single-page application (SPA) for patient reservations and dockerized the application for streamlined deployment.',
        skills: [{ label: 'Angular' }, { label: 'Docker' }, { label: 'NodeJS' }]
    },
    {
        title: 'Scrum Master',
        company: 'ARTIIS GROUP, a.s.',
        timeframe: '2021 → now',
        current: true,
        location: 'CZ, Brno',
        description:
            'Facilitating Sprints for development team while following Agile and Scrum methodology. Holding meetings including Sprint planning, Sprint review, and retrospective sessions. Managing estimating and velocity for each Sprint, forecasting necessary scope and resources. Additionally, responsibility for user story design and estimation via Storymapping and Grooming.',
        skills: [{ label: 'Scrum' }, { label: 'Agile' }, { label: 'Jira' }, { label: 'Confluence' }]
    },
    {
        title: 'Full Stack Developer',
        company: 'ARTIIS GROUP, a.s.',
        timeframe: '2022 → now',
        current: true,
        location: 'CZ, Brno',
        description:
            'Design and development of new features, with main emphasis on front-end development. Concurrently, developing backend side using Java, designing and implementing APIs, as well as adapters for external systems using Spring Integration. Fine-tuning application logic and implementing integration adapters for hardware used as calling systems on devices such as Raspberry Pi.',
        skills: [{ label: 'Angular' }, { label: 'Java' }, { label: 'Spring Framework' }, { label: 'Debian' }, { label: 'Ansible' }]
    }
];

const careerStart = new Date(2018, 5, 16);
export const yearsOfExperience = Math.abs(new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970);
