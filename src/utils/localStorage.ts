"use client"
export const saveLocalStorage = (user: string) => {
    localStorage.setItem("Favorites", JSON.stringify(user))
}

export const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}