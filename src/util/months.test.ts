import { getInterval, getMonthCalendar, isDayMayor } from "./month";

describe("Month functions", () => {
    test('it should return true or false in dates comparison', () => {
        expect(isDayMayor(new Date('2024-01-01T00:00:00'), new Date('2023-01-01T00:00:00'))).toBe(true);

        expect(isDayMayor(new Date('2023-01-01T00:00:00'), new Date('2023-01-01T00:00:00'))).toBe(false);

        expect(isDayMayor(new Date('2023-01-01T00:00:01'), new Date('2023-01-01T00:00:00'))).toBe(false);
    });

    test('should get correct interval for given days', () => {
        expect(getInterval(0, 0)).toEqual([]);
        expect(getInterval(0, -2)).toEqual([]);
        expect(getInterval(1, 1)).toEqual([true, false]);
        expect(getInterval(2, 1)).toEqual([true, true, false]);
        expect(getInterval(7, 3)).toEqual([true, true, true, true, true, true, true, false, false, false]);
    });

    test('should generate correct month 8x10', () => {
        expect(getMonthCalendar(new Date('2024-02-01'), new Date('2024-01-01'), getInterval(8, 10), new Date('2024-02-04'))).toEqual([
            [
                { date: new Date('2024-01-29'), isToday: false, isWorkday: false },
                { date: new Date('2024-01-30'), isToday: false, isWorkday: false },
                { date: new Date('2024-01-31'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-01'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-02'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-03'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-04'), isToday: true, isWorkday: false },
            ],
            [
                { date: new Date('2024-02-05'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-06'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-07'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-08'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-09'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-10'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-11'), isToday: false, isWorkday: true },
            ],
            [
                { date: new Date('2024-02-12'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-13'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-14'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-15'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-16'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-17'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-18'), isToday: false, isWorkday: false },
            ],
            [
                { date: new Date('2024-02-19'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-20'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-21'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-22'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-23'), isToday: false, isWorkday: false },
                { date: new Date('2024-02-24'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-25'), isToday: false, isWorkday: true },
            ],
            [
                { date: new Date('2024-02-26'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-27'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-28'), isToday: false, isWorkday: true },
                { date: new Date('2024-02-29'), isToday: false, isWorkday: true },
                { date: new Date('2024-03-01'), isToday: false, isWorkday: true },
                { date: new Date('2024-03-02'), isToday: false, isWorkday: true },
                { date: new Date('2024-03-03'), isToday: false, isWorkday: false },
            ],
        ]);
    });
});
