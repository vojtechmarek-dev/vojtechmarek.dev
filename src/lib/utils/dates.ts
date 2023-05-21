import { holidays } from '$lib/data/holidays';

declare global {
    interface Date {
        addDays(days: number): Date;
        substractDays(days: number): Date;
    }
}

Date.prototype.addDays = function (days: number) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.substractDays = function (days: number) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
};

export function getBussinessDays(startDate: Date, endDate: Date) {
    let result = 0;

    const sunday = evaluateEasterSunday(startDate.getFullYear());
    const monday = sunday.addDays(1);
    const friday = sunday.substractDays(2);
    holidays.push(sunday, monday, friday);

    const currentDate = new Date(startDate.getTime());

    while (currentDate <= endDate) {
        const weekDay = currentDate.getDay();
        if (weekDay != 0 && weekDay != 6) {
            if (
                holidays.findIndex((date) => {
                    const isSame = !(date < currentDate) && !(date > currentDate);
                    return isSame;
                }) == -1
            ) {
                result++;
            }
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return result;
}

export function getFirstDayOfMonth(month: Date) {
    return new Date(month.getFullYear(), month.getMonth(), 1);
}

export function getLastDateOfMonth(month: Date) {
    return new Date(month.getFullYear(), month.getMonth() + 1, 0);
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
