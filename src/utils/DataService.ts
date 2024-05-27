import { IMessage, IProject, ITask, ITaskArr, IToken, IUserData, IUserInfo, IUserProfile, } from "@/interface/interface";


const url = "https://newtaskhubbackenddb.azurewebsites.net";
let userData: IUserData

export const createAccount = async (createdUser: IUserInfo) => {
    //were using this feth to make a post request
    // we have to set the method to POST
    // we set the content type to application / json to specifiy our json data format 

    const res = await fetch(url + `/User/AddUser`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data

}

export const login = async (loignUser: IUserInfo) => {
    const res = await fetch(url + `/User/Login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loignUser)
    })
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        // throw new Error(message);
    }
    const data: IToken = await res.json();
    return data;
}

export const getLoggedInUserData = async (username: string) => {
    const res = await fetch(url + "/User/GetUserByUsername/" + username);
    const data = await res.json();
    userData = data;
    return userData;
}


export const loggedInData = () => {
    return userData;
}

//this function helps to see if our user is logged in 
export const checkToken = () => {
    let result = false;

    let lsData = localStorage.getItem("Token");
    if (lsData != null) {
        result = true
    }
    return result
}

//dashboard fetches
export const getBlogItemsByUserId = async (userId: number) => {
    const res = await fetch(url + '/Blog/GetItemsByUserId/' + userId)
    let data = await res.json();
    return data;
}

export const publishEditUserInfo = async (profileData: IUserProfile) => {
    const res = await fetch(url + "/User/UpdateUserInfo", {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(profileData)
    });

    if (!res.ok) {
        const message = "An error has Occurred " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data;

}
export const EditTask = async (profileData: ITask) => {
    const res = await fetch(url + "/Task/EditTask", {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(profileData)
    });

    if (!res.ok) {
        const message = "An error has Occurred " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data;

}
export const createProject = async (newProject: IProject) => {
    const res = await fetch(url + `/Project/CreateProject`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newProject)
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data
}
export const addUserToProject = async (userID: number, projectID: number) => {
    const res = await fetch(url + `/Project/AddUserToProjectByUserId/${userID}/${projectID}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            userID,
            projectID
        })
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data
}



export const GetAllProjects = async () => {
    const res = await fetch(url + '/Project/GetAllProjects')
    let data = await res.json();
    return data;
}


export const GetAllProjectsUserIsIn = async (userID: number) => {
    const res = await fetch(url + `/Project/GetAllProjectsUserIsIn/${userID}`)
    let data = await res.json();
    return data;
}

export const GetTasksByProjectID = async (projectID: number) => {
    const res = await fetch(url + `/Task/GetTasksByProjectID/${projectID}`)
    let data = await res.json();
    return data;
}



export const CreateTask = async (TaskObj: ITask) => {
    const res = await fetch(url + `/Task/CreateTask`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(TaskObj)
    })
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data
}

export const DeleteTask = async (TaskId: number) => {
    const res = await fetch(url + `/Task/DeleteTask/${TaskId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ TaskId })
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data;
};

export const RemoveUserFromProjectByID = async (userID: number, projectID: number) => {
    const res = await fetch(url + `/Project/RemoveUserFromProjectByID/${userID}/${projectID} `, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ userID, projectID })
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data;
};


export const GetUsersByProjectId = async (projectID: number) => {
    const res = await fetch(url + `/Project/GetAllUsersWithinProject/${projectID}`)
    let data = await res.json();
    return data;
}

export const getEntireUserProfile = async (username: string) => {
    const res = await fetch(url + "/User/GetProfileByUsername/" + username);
    const data = await res.json();
    return data;
}
export const getEntireUserProfileById = async (userId: number) => {
    const res = await fetch(url + "/User/GetProfileByUserID/" + userId);
    const data = await res.json();
    userData = data;
    return userData;
}

export const GetTasksByStatus = async (status: string, userId: number) => {
    const res = await fetch(url + "/Task/GetTasksByStatus/" + status + "/" + userId);
    const data: ITaskArr[] = await res.json();
    return data;
}
export const GetTaskByID = async (taskID: number) => {
    const res = await fetch(url + "/Task/GetTaskByID/" + taskID);
    const data = await res.json();
    userData = data;
    return userData;
}


// messaging functions
export const GetDMS = async (userId: number) => {
    const res = await fetch(url + '/Message/GetAllDMS/' + userId)
    let data = await res.json();
    return data;
}

export const addDM = async (userID1: number, userID2: number) => {
    const res = await fetch(url + `/Message/DirectMessage/${userID1}/${userID2}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            userID1,
            userID2
        })
    })
    //we need to check if post was succeesful
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data
}

export const AddMessage = async (message: IMessage) => {
    const res = await fetch(url + `/Message/CreateMessage`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(message)
    })
    if (!res.ok) {
        const message = "an error has occured " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data
}

export const GetSavedMessages = async (room: Number) => {
    const res = await fetch(url + '/Message/GetAllMessagesWithinRoom/' + room)
    let data = await res.json();
    return data;
}

export const GetNotifications = async (userID: Number) => {
    const res = await fetch(url + '/Project/GetAllNotificationsUserHas/' + userID)
    let data = await res.json();
    return data;
}

export const GetProjectByID = async (projId: Number) => {
    const res = await fetch(url + '/Project/GetProjectByID/ ' + projId)
    let data = await res.json();
    return data;
}

export const DeleteNotification = async (notificationID: number) => {
    const res = await fetch(url + `/Project/DeleteNotification/${notificationID}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ notificationID })
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data;
};

export const DeleteProject = async (projectID: number) => {
    const res = await fetch(url + `/Project/DeleteProject/${projectID}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ projectID })
    });
    if (!res.ok) {
        const message = "An error has occurred: " + res.status;
        throw new Error(message);
    }

    const data = await res.json();

    return data;
};