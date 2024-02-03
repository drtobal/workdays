import { ReactElement } from "react";

export type Day = {
    date: Date,
    isWorkday: boolean,
    isBefore: boolean,
};

export type ReachChild = string | ReactElement | ReactElement[];

export type FooterLink = {
    label: string;
    url: string;
};
