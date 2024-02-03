
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

export const setLS = <T>(key: string, data: string): void => {
    if (typeof window !== 'undefined') {
        try {
            window.localStorage.setItem(key, data);
        } catch (e) {
            console.error(e);
        }
    }
}
