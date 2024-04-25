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


export const saveLocalStorageProjectId = (user: number) => {
    localStorage.setItem("ProjectId", JSON.stringify(user))
}

export const getLocalStorageProjectId = () => {
    let localStorageData = localStorage.getItem("ProjectId");
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}