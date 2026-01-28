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

export interface Project {
    title: string;
    description: string;
    skills: Skill[];
    timeframe: string;
    link?: string;
    details?: string[];
}

export const PROJECT_LIST: Project[] = [
    {
        title: 'MediOrganizer',
        description:
            'Healthcare appointment scheduling and calling system, streamlining patient scheduling and queue management with HL7 model support for integration.',
        skills: [{ label: 'Angular' }, { label: 'Java' }, { label: 'LDAP' }, { label: 'HL7' }, { label: 'PostgreSQL' }],
        timeframe: "2017-present",
        link: "https://www.artiisgroup.cz/",
        details: [
            "Progressed from Front-End Developer to Full-Stack Developer, and ultimately took on leadership as Scrum Master, contributing across the full development lifecycle.",
            "Built responsive and maintainable user interfaces using Angular, focusing on performance, accessibility, and code quality.",
            "Led the development and desing of new application modules and ensured up-to-date and secure front-end libraries through proactive dependency management.",
            "Designed and developed RESTful APIs and scheduling algorithms to support complex business rules and real-time data processing.",
            "Oversaw sprint planning, execution, and delivery, ensuring alignment with Scrum principles and timely delivery of sprint goals."
          ]
    },
    {
        title: 'MediShare',
        description:
            'Online scheduling system designed for healthcare with dynamic module snap-ins configuration, SSO login, and OAuth2 for secure authentication.',
        skills: [{ label: 'Angular' }, { label: 'Docker' }, { label: 'OAuth2' }, { label: 'NodeJS' }, {label: 'Material Design'}],
        timeframe: "2022-present",
        link: "https://mamoobjpac.fnol.cz/",
        details: [
            "Led front-end architecture design and implementation of modular, snap-in reactive components, ensuring scalability and reusability for app implementators.",
            "Engineered hot-swap configuration deployment to enable seamless runtime updates without requiring full application redeploys.",
            "Crafted consistent and intuitive UI components using Angular Material, with a strong emphasis on user experience and accessibility.",
            "Integrated secure API communication and OAuth-based authentication flows to support dynamic, authenticated user sessions.",
            "Developed a flexible theming and templating system, allowing for runtime customization of the application UI."
          ]

    },
    {
        title: 'MediReha',
        description: 'System for managing patient rehabilitation plans with rule-based processes for clinical and business validations.',
        skills: [{label: 'Angular'}, {label: 'Business Rules'}, {label: 'REST API'}, {label: 'Java'}],
        timeframe: "2022",
        link: "https://www.rehasys.cz/",
        details: [
            "Designed and implemented the UI/UX for a rehabilitation management system using Angular, focusing on usability for clinical staff and administrators.",
            "Collaborated on rule-based scheduling logic for rehabilitation plans, incorporating clinical constraints and business validations.",
            "Contributed to the design and implementation of rule engines that automated validation of rehabilitation workflows and ensured the most optimal plan for rehabilitaion plans."
        ]
    },
    {
        title: 'MaRIS',
        description: 'System for managing patient data in mammography centers, with advanced workflow and external system integrations.',
        skills: [{label: 'Spring'}, {label: 'Java'}, {label: 'REST API'}],
        timeframe: "2019, 2025"
    },
    {
        title: 'MediBus',
        description: 'Healthcare integration platform for data exchange using HL7 FHIR standards and Spring Integration.',
        skills: [{label: 'HL7 FHIR'}, {label: 'Spring'}, {label: 'Java'}],
        timeframe: "2020"
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
        skills: [{ label: 'Angular' }, { label: 'Java' }, { label: 'Spring Framework' }, { label: 'Debian' }, { label: 'Ansible' }],
        secondments: [
            {
                title: 'Senior Front End Developer',
                company: 'ELSO SERVICE BRNO, s.r.o.',
                timeframe: '2025',
                location: 'CZ, Brno',
                current: false,
                skills: [],
                description:
                    'Deployed as a Senior Frontend Developer to spearhead the delivery of a critical data platform for the Czech Statistical Office (ČSÚ). Architected the foundation of a shared application platform to unify internal tools while bootstrapping and upskilling the junior development team. Aided with migration of legacy software into a strictly typed React environment, introducing Jotai to orchestrate complex shared state across micro-apps.',
            }
        ]
    }
];

const careerStart = new Date(2018, 5, 16);
export const yearsOfExperience = Math.abs(new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970);
