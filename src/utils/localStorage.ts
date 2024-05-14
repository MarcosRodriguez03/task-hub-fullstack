
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

export const saveLocalStorageTaskId = (user: number) => {
    localStorage.setItem("ProjectId", JSON.stringify(user))
}

export const getLocalStorageTaskId = () => {
    let localStorageData = localStorage.getItem("TaskId");
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}