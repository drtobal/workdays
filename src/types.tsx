import { ReactElement } from "react";

/** day displayed in calendar */
export type Day = {
    date: Date;
    isWorkday: boolean;
    isToday: boolean;
};

/** kind of child to render inside a component */
export type ReachChild = string | ReactElement | ReactElement[];

/** link displayed in footer */
export type FooterLink = {
    label: string;
    url: string;
};
