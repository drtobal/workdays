/** get data from the local storage of null if it can't */
export const getLS = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
        try {
            const data = window.localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch (e) {
            console.error(e);
        }
    }
    return null;
}

/** save data into localstorage */
export const setLS = <T>(key: string, data: string): void => {
    if (typeof window !== 'undefined') {
        try {
            window.localStorage.setItem(key, data);
        } catch (e) {
            console.error(e);
        }
    }
}
