import { FooterLink } from "./types";

/** prefix for all local storage data keys */
const LS_PREFIX = 'workdays_';

/** default workdays for the interval */
export const DEFAULT_WORKDAYS = 4;

/** default freedays fot the interval */
export const DEFAULT_FREEDAYS = 2;

/** default interval start date */
export const DEFAULT_START = '2024-01-01T00:00:00';

/** name of the localstorage key to save the start date */
export const START_LS = `${LS_PREFIX}start`;

/** name of the localstorage key to save the workdays */
export const WORKDAYS_LS = `${LS_PREFIX}workdays`;

/** name of the localstorage key to save the free days */
export const FREEDAYS_LS = `${LS_PREFIX}freedays`;

/** list of footer links */
export const FOOTER_LINKS: FooterLink[] = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cristobal-diaz-alvarez/' },
    { label: 'Github', url: 'https://github.com/drtobal' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/7827198' },
];
