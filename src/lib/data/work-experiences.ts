export interface Skill {
    label: string,
    color?: string,
}

export interface WorkExperience {
    title: string,
    company: string,
    timeframe: string,
    current: boolean,
    location: string,
    description: string,
    skills: Skill[]
}

export const WORK_EXPERIENCE_LIST: WorkExperience[] = [
    {
        title: "Junior Front End Developer",
        company: "ARTIIS GROUP, a.s.",
        timeframe: "2018 → 2021",
        current: false,
        location: "CZ, Brno",
        description: "Developed front-end application, utilizing Angular framework and Typescript. My responsibilities included implementing application logic, styling using Bootstrap, and implementing APIs utilizing RxJS.",
        skills: [{label: "Angular"}, {label: "Bootstrap"}, {label: "RxJS"}]
    },
    {
        title: "Senior Front End Developer",
        company: "ARTIIS GROUP, a.s.",
        timeframe: "2021 → 2022",
        current: false,
        location: "CZ, Brno",
        description: "Ensured the timely updates of front-end libraries. Maintained and upgraded complex application from Angular 4 -> Angular 12. Spearheaded the development of a single-page application (SPA) for patient reservations and dockerized the application for streamlined deployment.",
        skills: [{label: "Angular"}, {label: "Docker"}, {label: "NodeJS"}]
    },
    {
        title: "Scrum Master",
        company: "ARTIIS GROUP, a.s.",
        timeframe: "2021 → now",
        current: true,
        location: "CZ, Brno",
        description: "Facilitating Sprints for development team while following Agile and Scrum methodology. Holding meetings including Sprint planning, Sprint review, and retrospective sessions. Managing estimating and velocity for each Sprint, forecasting necessary scope and resources. Additionally, responsibility for user story design and estimation via Storymapping and Grooming.",
        skills: [{label: "Scrum"}, {label: "Agile"}, {label: "Jira"}, {label: "Confluence"}]
    },
    {
        title: "Full Stack Developer",
        company: "ARTIIS GROUP, a.s.",
        timeframe: "2022 → now",
        current: true,
        location: "CZ, Brno",
        description: "Design and development of new features, with main emphasis on front-end development. Concurrently, developing backend side using Java, designing and implementing APIs, as well as adapters for external systems using Spring Integration. Fine-tuning application logic and implementing integration adapters for hardware used as calling systems on devices such as Raspberry Pi.",
        skills: [{label: "Angular"}, {label: "Java"}, {label: "Spring Framework"}, {label: "Debian"}, {label: "Ansible"}],

    }
]

const careerStart = new Date(2018, 5, 16);
export const yearsOfExperience = Math.abs(new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970);