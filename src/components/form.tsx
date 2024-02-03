'use client'

import { FREEDAYS_LS, START_LS, WORKDAYS_LS } from "@/constants";
import { saveNumberFromInput } from "@/util/month";
import { ChangeEvent, useState } from "react";
import { format } from "date-fns";

type Props = {
    onChange: () => void,
    start: Date,
    workDays: number,
    freeDays: number,
};

const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

export default function Form(props: Props) {
    const [start, setStart] = useState<string>(format(props.start, 'yyyy-MM-dd'));

    const [workDays, setWorkDays] = useState<number>(props.workDays);

    const [freeDays, setFreeDays] = useState<number>(props.freeDays);

    const onChangeWorkDays = (event: ChangeEvent<HTMLInputElement>): void => {
        setWorkDays(event.target.valueAsNumber);
        saveNumber(event, WORKDAYS_LS);
    }

    const onChangeStart = (event: ChangeEvent<HTMLInputElement>): void => {
        setStart(event.target.value);
        saveNumber(event, START_LS);
    }

    const onChangeFreeDays = (event: ChangeEvent<HTMLInputElement>): void => {
        setFreeDays(event.target.valueAsNumber);
        saveNumber(event, FREEDAYS_LS);
    }

    const saveNumber = (event: ChangeEvent<HTMLInputElement>, slot: string) => {
        if (saveNumberFromInput(event, slot)) {
            props.onChange();
        }
    }

    return <div className="d-flex flex-col gap-2">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Días de trabajo</label>
            <input type="number" className={inputClass} value={workDays}
                placeholder="Días de trabajo" required onChange={onChangeWorkDays} />
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Días libre</label>
            <input type="number" className={inputClass} value={freeDays}
                placeholder="Días libre" required onChange={onChangeFreeDays} />
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Inicio del período</label>
            <input type="date" className={inputClass} min="2024-01-01" value={start}
                placeholder="Inicio del período" required onChange={onChangeStart} />
        </div>

        <p className="py-4">El cáculo se hace por períodos de días trabajados y días libres, por ejemplo si tiene turnos
            de 4x2 (4 días trabajados y después 2 libres), el período es de 6 días, y terminado ese período se comienza
            el cálculo de uno nuevo. Utilice la fecha de inicio de período para hacer coincidir sus turnos con el cálculo
            del calendario.</p>
    </div>;
}
