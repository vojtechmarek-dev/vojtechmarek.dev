const currentYear = new Date().getFullYear();

/* ["novy_rok", "01-01"],
		["svatek_prace", "01-05"],
		["den_osvobozeni", "08-05"],
		["den_slovanskych_verozvestu_cyrila_a_metodeje", "05-07"],
		["den_upaleni_mistra_jana_husa", "06-07"],
		["den_ceske_statnosti", "28-09"],
		["den_vzniku_samostatného_ceskoslovenského_statu", "28-10"],
		["den_boje_za_svobodu_a_demokracii", "17-11"],
		["stedry_den", "24-12"],
		["prvni_vanocni_svatek", "25-12"],
		["druhy_vanocni_svatek", "26-12"], */

// todo make dynamic based on year?
export const holidays = [
    new Date(currentYear, 0, 1), // novy rok
    new Date(currentYear, 4, 1), // novy rok
    new Date(currentYear, 4, 8), // novy rok
    new Date(currentYear, 6, 5), // novy rok
    new Date(currentYear, 6, 6), // novy rok
    new Date(currentYear, 8, 28), // novy rok
    new Date(currentYear, 9, 28), // novy rok
    new Date(currentYear, 10, 17), // novy rok
    new Date(currentYear, 11, 24), // novy rok
    new Date(currentYear, 11, 15), // novy rok
    new Date(currentYear, 11, 26) // novy rok
];
