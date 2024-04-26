
//get our token 
export interface IToken {
    token: string
}

//for login and create account fetch 
export interface IUserInfo {

    username: string;
    password: string;
}

// this is getting our users info id and username
export interface IUserData {
    userId: number
    publisherName: string
}


export interface IProject {
    ID: number
    UserId: number
    ProjectName: string
    isDeleted: boolean
}

export interface ITask {
    id: number,
    projectID: number,
    taskName: string,
    taskDescription: string,
    taskDuration: string,
    userID: number,
    dueDate: string,
    priority: string,
    status: string,
    isDeleted: boolean
}