import { describe, test, expect } from 'vitest';
import { getBussinessAndHolidays } from './dates';

describe('getBussinessAndHolidays', () => {
    test('should return 0 business days and 0 holidays for new year ', () => {
        const startDate = new Date(2022, 0, 1);
        const endDate = new Date(2022, 0, 1);
        expect(getBussinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 0,
            holidays: 0
        });
    });

    test('should return 0 business days and 2 holidays for easter weekend (friday to monday)', () => {
        const startDate = new Date(2022, 3, 15);
        const endDate = new Date(2022, 3, 18);
        expect(getBussinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 0,
            holidays: 2
        });
    });

    test('should return 3 business days and 2 holidays for july week with Jan Hus holiday and CyrilMetodej Holiday', () => {
        const startDate = new Date(2022, 6, 4);
        const endDate = new Date(2022, 6, 10);
        expect(getBussinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 3,
            holidays: 2
        });
    });

    test('should return 19 business days and 3 holidays for 2023 December', () => {
        const startDate = new Date(2023, 11, 1);
        const endDate = new Date(2023, 11, 31);
        expect(getBussinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 19,
            holidays: 2
        });
    });

    test('should return 22 business days and 1 holidays for 2025 January', () => {
        const startDate = new Date(2025, 0, 1);
        const endDate = new Date(2025, 0, 31);
        expect(getBussinessAndHolidays(startDate, endDate)).toStrictEqual({
            businessDays: 22,
            holidays: 1
        });
    });

    test('should throw Error because provided end date is before the start date', () => {
        const startDate = new Date(2025, 0, 1);
        const endDate = new Date(2021, 0, 31);
        // note for myself - for checking throw error I need to wrap calling function in another function
        // @see tip in https://jestjs.io/docs/expect#tothrowerror
        expect(() => getBussinessAndHolidays(startDate, endDate)).toThrowError("Start date cannot be after the end date");
    });
});
