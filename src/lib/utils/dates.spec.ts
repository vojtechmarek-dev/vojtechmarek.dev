import { describe, test, expect } from 'vitest';
import { getBusinessAndHolidays } from './dates';

describe('getBussinessAndHolidays', () => {
    test('should return 0 business days and 1 weekend holidays for new year ', () => {
        const startDate = new Date(2022, 0, 1);
        const endDate = new Date(2022, 0, 1);
        expect(getBusinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 0,
            holidays: {
                // note for myself - in case of objects attributes need to be enclosed in "" 
                "businessdayHolidays": 0,
                "weekendHolidays": 1,
              }
        });
    });

    test('should return 0 business days and 2 business day holidays for easter weekend (friday to monday)', () => {
        const startDate = new Date(2022, 3, 15);
        const endDate = new Date(2022, 3, 18);
        expect(getBusinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 0,
            holidays: {
                "businessdayHolidays": 2,
                "weekendHolidays": 0
            }
        });
    });

    test('should return 3 business days and 2 business day holidays for july week with Jan Hus holiday and CyrilMetodej Holiday', () => {
        const startDate = new Date(2022, 6, 4);
        const endDate = new Date(2022, 6, 10);
        expect(getBusinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 3,
            holidays: {
                "businessdayHolidays": 2,
                "weekendHolidays": 0
            }
        });
    });

    test('should return 19 business days and 2 business day holidays and 1 weekend holiday for 2023 December', () => {
        const startDate = new Date(2023, 11, 1);
        const endDate = new Date(2023, 11, 31);
        expect(getBusinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 19,
            holidays: {
                "businessdayHolidays": 2,
                "weekendHolidays": 1
            }
        });
    });

    test('should return 22 business days and 1 business day holiday for 2025 January', () => {
        const startDate = new Date(2025, 0, 1);
        const endDate = new Date(2025, 0, 31);
        expect(getBusinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 22,
            holidays: {
                "businessdayHolidays": 1,
                "weekendHolidays": 0
            }
        });
    });

    test('should throw Error because provided end date is before the start date', () => {
        const startDate = new Date(2025, 0, 1);
        const endDate = new Date(2021, 0, 31);
        // note for myself - for checking throw error I need to wrap calling function in another function
        // @see tip in https://jestjs.io/docs/expect#tothrowerror
        expect(() => getBusinessAndHolidays(startDate, endDate)).toThrowError('Start date cannot be after the end date');
    });
});

describe('dateExtensions', () => {
    test('should return 38 as week number for September 18 2023', () => {
        const testDate = new Date(2023, 8, 18);
        expect(testDate.getWeekNumber()).toStrictEqual(38);
    });
});
