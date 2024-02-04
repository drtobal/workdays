import { getInterval, isDayMayor } from "./month";

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
});
