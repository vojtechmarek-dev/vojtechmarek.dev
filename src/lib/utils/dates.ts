import { HOLIDAYS_DB, getFixedHolidaysForYear, getFloatingHolidaysForYear } from '$lib/data/holidays';

export type BusinessAndHolidays = {
    businessDays: number;
    holidays: HolidayDistribution;
};

export type HolidayDistribution = {
    businessdayHolidays: number;
    weekendHolidays: number;
};

export function getBusinessAndHolidays(startDate: Date, endDate: Date, holidaysOn = true): BusinessAndHolidays {
    let businessDays = 0;

    let holidayDistribution: HolidayDistribution = {
        weekendHolidays: 0,
        businessdayHolidays: 0
    };

    if (!(startDate instanceof Date && endDate instanceof Date)) {
        throw new Error('Invalid date format');
    }

    if (startDate.getTime() > endDate.getTime()) {
        throw new Error('Start date cannot be after the end date');
    }

    const year = startDate.getFullYear();

    calculateHolidays(year);

    const holidays = holidaysOn ? HOLIDAYS_DB.get(year) : { fixed: new Set(), floating: new Set() };

    const currentDate = new Date(startDate.getTime());

    while (currentDate <= endDate) {
        const weekDayNumber = currentDate.getDay();
        const currentTimestamp = currentDate.getTime();
        const isHoliday = holidays?.fixed.has(currentTimestamp) || holidays?.floating.has(currentTimestamp);

        switch (weekDayNumber) {
            // weekend
            case 0:
            case 6:
                if (isHoliday) {
                    holidayDistribution.weekendHolidays++;
                }
                break;
            // businessday
            default:
                if (isHoliday) {
                    holidayDistribution.businessdayHolidays++;
                } else {
                    businessDays++;
                }
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return <BusinessAndHolidays>{
        businessDays: businessDays,
        holidays: holidayDistribution
    };
}

function calculateHolidays(year: number) {
    const { fixed, floating } = HOLIDAYS_DB.get(year) || { fixed: new Set(), floating: new Set() };

    // check for fixed holidays in holiday_db add them if necessary
    if (!fixed.size) {
        HOLIDAYS_DB.set(year, {
            fixed: new Set([...getFixedHolidaysForYear(year).map((date) => date.getTime())]),
            floating: new Set()
        });
    }

    // Check for April - Easter calculation
    if (!floating.size) {
        const savedHolidays = HOLIDAYS_DB.get(year);

        HOLIDAYS_DB.set(year, {
            fixed: savedHolidays ? savedHolidays.fixed : new Set([...getFixedHolidaysForYear(year).map((date) => date.getTime())]),
            floating: new Set([...getFloatingHolidaysForYear(year).map((date) => date.getTime())])
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

export function calculateYearsSince(date: Date): number {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
