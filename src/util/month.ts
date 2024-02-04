import { add, previousMonday, differenceInDays, isSameDay } from "date-fns";
import { Day } from "@/types";
import { getLS, setLS } from "./util";
import { DEFAULT_FREEDAYS, DEFAULT_START, DEFAULT_WORKDAYS, FREEDAYS_LS, START_LS, WORKDAYS_LS } from "@/constants";
import { ChangeEvent } from "react";
import { startOfMonth } from "../../node_modules/date-fns/startOfMonth";

export const getInterval = (workdays: number, freedays: number): boolean[] => {
    const interval: boolean[] = [];
    for (let x = 0; x < workdays; x++) interval.push(true);
    for (let x = 0; x < freedays; x++) interval.push(false);
    return interval;
}

/** get all dates in calendar, can include previous and next month days to fill days from monday to sunday */
export const getMonthCalendar = (month: Date, start: Date, interval: boolean[], today: Date): Day[][] => {
    const dates: Day[][] = [];
    const intervalLength = interval.length;
    const monthNumber: number = month.getMonth();
    let currentDate: Date = startOfMonth(new Date(month.valueOf()));

    if (currentDate.getDay() !== 1) { // print from monday
        currentDate = previousMonday(currentDate);
    }

    let datesLength = dates.length;

    while (currentDate.getMonth() === monthNumber || datesLength === 0 ||
        (datesLength > 0 && dates[datesLength - 1].length !== 7)) {
        if (currentDate.getDay() === 1) {
            dates.push([]);
            datesLength = dates.length;
        }

        dates[datesLength - 1].push({
            date: new Date(currentDate.valueOf()),
            isToday: isSameDay(today, currentDate),
            isWorkday: interval[Math.abs(differenceInDays(currentDate, start)) % intervalLength],
        });

        currentDate = add(currentDate, { days: 1 });
    }
    return dates;
};

export const getStart = (): Date => {
    const data = getLS<number>(START_LS);
    if (data) {
        const date = new Date(data);
        if (!isNaN(date.valueOf())) {
            return date;
        }
    }
    return new Date(DEFAULT_START);
}

/** check if date a is mayor than date b */
export const isDayMayor = (a: Date, b: Date): boolean => {
    return (new Date(a.getFullYear(), a.getMonth(), a.getDate())).getTime() > (new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime();
}

/** returns the classname for holiday html element in calendar */
export const getDayClassName = (date: Day, month: Date): string => {
    const className: string[] = ['w-6 h-6 flex justify-center items-center rounded-full border-2'];
    if (date.date.getMonth() === month.getMonth()) {
        if (date.isWorkday) {
            className.push('bg-slate-400 border-slate-400 text-white');
        }
        if (date.isToday) {
            className.push('border-green-500');
        }
    } else {
        if (date.isWorkday) {
            className.push('bg-slate-300 border-slate-300 text-white');
        }
        className.push('text-slate-400');
    }
    return className.join(' ');
}

export const getWorkdays = (): number => {
    return getNumber(WORKDAYS_LS) || DEFAULT_WORKDAYS;
}

export const getFreedays = (): number => {
    return getNumber(FREEDAYS_LS) || DEFAULT_FREEDAYS;
}

export const getNumber = (slot: string): number | null => {
    const data = getLS<number>(slot);
    if (data && !isNaN(data)) {
        return data;
    }
    return null;
}

export const saveNumberFromInput = (event: ChangeEvent<HTMLInputElement>, slot: string): boolean => {
    if (!isNaN(event.target.valueAsNumber) && event.target.valueAsNumber > 0) {
        setLS(slot, JSON.stringify(event.target.valueAsNumber));
        return true;
    }
    return false;
}
