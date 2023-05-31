import "$lib/utils/date-extensions"

const currentYear = new Date().getFullYear();

export const HOLIDAYS_DB: Map<number, { fixed: Set<number>, floating: Set<number>}> = new Map();

HOLIDAYS_DB.set(currentYear, {
    fixed: new Set([...getFixedHolidaysForYear(currentYear).map(date => date.getTime())]),
    floating: new Set([...getFloatingHolidaysForYear(currentYear).map(date => date.getTime())])
});

export function getFixedHolidaysForYear(year: number): Date[] {
    return [
        new Date(year, 0, 1), // New Year's Day
        new Date(year, 4, 1), // Labour Day
        new Date(year, 4, 8), // VE Day
        new Date(year, 6, 5), // Saints Cyril and Methodius Day
        new Date(year, 6, 6), // Jan Hus Day
        new Date(year, 8, 28), // Czech Statehood Day
        new Date(year, 9, 28), // Independent Czechoslovak State Day
        new Date(year, 10, 17), // Freedom and Democracy Day
        new Date(year, 11, 24), // Christmas Eve
        new Date(year, 11, 25), // Christmas Day
        new Date(year, 11, 26) // St. Stephen's Day
    ];
}

export function getFloatingHolidaysForYear(year: number): Date[] {
    const sunday = evaluateEasterSunday(year);
    return [sunday.subtractDays(2), sunday, sunday.addDays(1)];
}


/**
 * Evalulates Easter sunday for provided year using  Gauss' Easter algorithm
 * @see https://en.wikipedia.org/wiki/Computus#Gauss'_Easter_algorithm
 * @param year provided year for evaluating Easter Sunday
 */
export function evaluateEasterSunday(year: number): Date {
    const a = year % 19; // year's position in the 19-year lunar phase cycle
    const b = year % 4; // corrections for century years
    const c = year % 7;

    // constants for 20 and 21 century - no need to recalculate them for different centuries
    const m = 24;
    const n = 5;

    const d = (19 * a + m) % 30; // number of days between 21 March and the coincident or next following full moon
    const e = (n + 2 * b + 4 * c + 6 * d) % 7; // offset days that must be added to make d arrive on a Sunday

    let day = d + e - 9;
    let month: number;

    if (day == 25 && d == 28 && e == 6 && a > 10) {
        day = 18;
        month = 4;
    } else if (day >= 1 && day <= 25) {
        month = 4;
    } else if (day > 25) {
        day = day - 7;
        month = 4;
    } else {
        day = 22 + d + e;
        month = 3;
    }

    return new Date(`${year}-${month}-${day}`);
}
