'use client';

import { Day } from "@/types";
import { getDayClassName, getFreedays, getInterval, getMonthCalendar, getStart, getWorkdays } from "@/util/month";
import { Month, add, format, startOfMonth } from "date-fns";
import { useState } from "react";
import { es as locale } from "date-fns/locale/es";
import Form from './form';

/** displays a month with working days and free days */
export default function Month() {
    /** current displaying month, date with start of the month */
    const [month, setMonth] = useState<Date>(startOfMonth(new Date()));

    /** start date of the interval */
    const [start, setStart] = useState<Date>(getStart());

    /** start working days of the interval */
    const [workDays, setWorkDays] = useState<number>(getWorkdays());

    /** end free days of the interval */
    const [freeDays, setFreeDays] = useState<number>(getFreedays());

    /** days displayed in the current month/calendar */
    const [days, setDays] = useState<Day[][]>(getMonthCalendar(month, start, getInterval(workDays, freeDays), new Date()));

    /** go to previous month */
    const goPrev = (): void => {
        const newMonth = add(month, { months: -1 });
        setMonth(newMonth);
        setDays(getMonthCalendar(newMonth, start, getInterval(workDays, freeDays), new Date()));
    }

    /** go to next month */
    const goNext = (): void => {
        const newMonth = add(month, { months: 1 });
        setMonth(newMonth);
        setDays(getMonthCalendar(newMonth, start, getInterval(workDays, freeDays), new Date()));
    }

    /** on form change, update the entire view */
    const onFormChanged = (): void => {
        const start = getStart();
        const workDays = getWorkdays();
        const freeDays = getFreedays();
        setStart(start);
        setWorkDays(workDays);
        setFreeDays(freeDays);
        setDays(getMonthCalendar(month, start, getInterval(workDays, freeDays), new Date()));
    }

    return <>
        <div className="m-auto flex flex-col gap-3 max-w-md text-xs py-6 px-4 gap-4">
            <h1 className="text-lg">Calculadora de turnos 😃</h1>

            <p className="flex flex-row items-center gap-1"><div className="w-6 h-6 bg-slate-400 rounded-full"></div>Día de trabajo</p>

            <div className="shadow-lg bg-white rounded-lg p-4 w-full flex flex-col gap-2">
                <div className="flex flex-row justify-between gap-2 pb-2">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={goPrev}>
                        Anterior
                    </button>
                    <p className="text-center text-sm">{format(month, 'MMMM yyyy', { locale })}</p>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={goNext}>
                        Siguiente
                    </button>
                </div>
                <div className="flex flex-row justify-between pb-1 gap-1">
                    <div className="w-6 flex justify-center">L</div>
                    <div className="w-6 flex justify-center">M</div>
                    <div className="w-6 flex justify-center">M</div>
                    <div className="w-6 flex justify-center">J</div>
                    <div className="w-6 flex justify-center">V</div>
                    <div className="w-6 flex justify-center">S</div>
                    <div className="w-6 flex justify-center">D</div>
                </div>
                {days.map((week, k) => <div className="flex flex-row justify-between" key={k}>
                    {week.map((day, k) => <div key={k} className={getDayClassName(day, month)}>{day.date.getDate()}</div>)}
                </div>)}
            </div>

            <Form onChange={onFormChanged} start={start} workDays={workDays} freeDays={freeDays} />
        </div>
    </>;
}
