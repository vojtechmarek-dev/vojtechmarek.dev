import {
    HOLIDAYS_DB,
    getFixedHolidaysForYear,
    getFloatingHolidaysForYear
} from '$lib/data/holidays';


export type BusinessAndHolidays = {
    businessDays: number;
    holidays: number;
};

export function getBussinessAndHolidays(startDate: Date, endDate: Date): BusinessAndHolidays {
    let businessDays = 0;
    let numberOfHolidays = 0;

    if (!(startDate instanceof Date && endDate instanceof Date)) {
        throw new Error("Invalid date format");
    }
    
    if (startDate.getTime() > endDate.getTime()) {
        throw new Error("Start date cannot be after the end date");
    }
    

    const year = startDate.getFullYear();

    calculateHolidays(year);

    const holidays = HOLIDAYS_DB.get(year);

    const currentDate = new Date(startDate.getTime());
    
    while (currentDate <= endDate) {
        const weekDay = currentDate.getDay();
        if (weekDay != 0 && weekDay != 6) {
            if (holidays?.fixed.has(currentDate.getTime()) || holidays?.floating.has(currentDate.getTime())) {
                numberOfHolidays++;
            } else {
                businessDays++;
            }
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return <BusinessAndHolidays>{
        businessDays: businessDays,
        holidays: numberOfHolidays
    };
}

function calculateHolidays(year: number) {

    const { fixed, floating } = HOLIDAYS_DB.get(year) || { fixed: new Set(), floating: new Set() };

    // check for fixed holidays in holiday_db add them if necessary
    if (!fixed.size) {
        HOLIDAYS_DB.set(year, {
            fixed: new Set([...getFixedHolidaysForYear(year).map(date => date.getTime())]),
            floating: new Set()
        });
    }

    // Check for April - Easter calculation
    if (!floating.size) {
        const savedHolidays = HOLIDAYS_DB.get(year);

        HOLIDAYS_DB.set(year, {
            fixed: savedHolidays
                ? savedHolidays.fixed
                : new Set([...getFixedHolidaysForYear(year).map(date => date.getTime())]),
            floating: new Set([...getFloatingHolidaysForYear(year).map(date => date.getTime())])
        });
    }
}

export function getFirstDayOfMonth(month: Date): Date {
    return new Date(month.getFullYear(), month.getMonth(), 1);
}

export function getLastDateOfMonth(month: Date): Date {
    return new Date(month.getFullYear(), month.getMonth() + 1, 0);
}

export function getNextMonthDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

export function getPreviousMonthDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}
