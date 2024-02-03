import { FooterLink } from "./types";

const LS_PREFIX = 'workdays_';

export const DEFAULT_WORKDAYS = 4;

export const DEFAULT_FREEDAYS = 2;

export const DEFAULT_START = '2024-01-01T00:00:00';

export const START_LS = `${LS_PREFIX}start`;

export const WORKDAYS_LS = `${LS_PREFIX}workdays`;

export const FREEDAYS_LS = `${LS_PREFIX}freedays`;

export const FOOTER_LINKS: FooterLink[] = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cristobal-diaz-alvarez/' },
    { label: 'Github', url: 'https://github.com/drtobal' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/7827198' },
];
